let _authService = null;

class AuthController {
	constructor({ AuthService }) {
		_authService = AuthService;
	}

	async singUp(req, res) {
		const { body } = req;
		const createUser = await _authService.singUp(body);

		return res.status(201).send(createUser);
	}

	async singIn(req, res) {
		const { body } = req;
		const creds = await _authService.singIn(body);

		return res.status(200).send(creds);
	}
}

module.exports = AuthController;
