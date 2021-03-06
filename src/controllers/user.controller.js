let _userService = null;

class UserController {
	constructor({ UserService }) {
		_userService = UserService;
	}

	async get(req, res) {
		const { userId } = req.params; // myapi.com/user/1231
		const user = await _userService.get(userId);
		return res.send(user);
	}

	async getAll(req, res) {
		const { pageSize, pageNumb } = req.query;
		const users = await _userService.getAll(pageSize, pageNumb);
		return res.send(users);
	}

	async update(req, res) {
		const { body } = req;
		const { userId } = req.params;
		const updateUser = await _userService.update(userId, body);

		return res.send(updateUser);
	}

	async delete(req, res) {
		const { userId } = req.params;
		const deletedUser = await _userService.delete(userId);

		return res.send(deletedUser);
	}
}

module.exports = UserController;
