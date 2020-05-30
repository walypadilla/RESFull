const { sign } = require('jsonwebtoken');
const { JTW_SECRET } = require('../config/config');

module.exports.generateToken = function (user) {
	return sign({ user }, JTW_SECRET, { expiresIn: '8h' });
};
