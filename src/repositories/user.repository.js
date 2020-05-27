const baseRepository = require('./base.repository');
let _user = null;

class UserRepository extends baseRepository {
	constructor({ User }) {
		super(User);
		_user = User;
	}

	async getUserByUsername(username) {
		return await _user.findOne({ username });
	}
}

module.exports = UserRepository;
