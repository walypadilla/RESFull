const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const { Schema } = mongoose;
const { compareSync, hashSync, genSaltSync, getSalt } = require('bcryptjs');

let rolesValidos = {
	values: ['ADMIN_ROLE', 'USER_ROLE'],
	message: '{VALUE} no es un rol válido',
};

const UserSchema = new Schema({
	name: { type: String, required: [true, 'El nombre es obligatorio'] },
	username: {
		type: String,
		unique: true,
		required: [true, 'El username es obligatorio'],
	},
	password: { type: String, required: [true, 'El password es obligatorio'] },
	emal: { type: String, unique: true, required: true },
	role: { type: String, default: 'USER_ROLE', enum: rolesValidos },
	google: { type: Boolean, default: false },
});

UserSchema.methods.toJSON = function () {
	//eliminando contraseña en la impresion
	let user = this;
	let userObject = user.toObject();
	delete userObject.password;

	return userObject;
};

UserSchema.method.comparePasswords = function (password) {
	return compareSync(password, this.password);
};

UserSchema.pre('save', async function (next) {
	const user = this;

	if (!user.isModified('password')) {
		return next();
	}

	// encriptando contraseña con el hashSync
	const salt = getSaltSync(10);
	const hashedPassword = hashSync(user.password, salt);
	user.password = hashedPassword;

	next();
});

UserSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser único' });

module.exports = mongoose.model('user', UserSchema);
