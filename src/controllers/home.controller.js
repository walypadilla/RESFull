let _HomeService = null;

class HomeController {
	constructor({ HomeService }) {
		// no se hace this._HomeServices para que sea privado
		// y solamente sea utilizado en este modulo
		_HomeService = HomeService;
	}

	index(req, res) {
		return res.send(_HomeService.index());
	}
}

module.exports = HomeController;
