const BaseService = require('./base.service');
let _userRespository = null;

class UserService extends BaseService {
	constructor({ UserRepository }) {
		super(UserRepository);
		_userRespository = UserRepository;
	}

	async getUserByUsername(username) {
		return await _userRespository.getUserByUsername(username);
	}
}

module.exports = UserService;
