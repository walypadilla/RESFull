const mCache = require('memory-cache');
const { CACHE_KEY } = require('../config/config');

module.exports = function (duration = 360) {
	return (req, res, next) => {
		const key = CACHE_KEY + req.originUrl || req.url;
		const cachedBody = mCache.get(key);

		if (cachedBody) {
			return res.send(JSON.parse(cachedBody));
		} else {
			res.sendResponse = res.send;
			res.send = (body) => {
				mCache.put(key, body, duration * 100);
				res.sendResponse(body);
			};
			next();
		}
	};
};
