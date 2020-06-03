if (process.env.NODE_ENV !== 'production') {
	const dotenv = require('dotenv');
	const result = dotenv.config();
	if (result.error) {
		throw result.error;
	}
}

module.exports = {
	PORT: process.env.PORT,
	MONGO_URI: process.env.MONGO_URI,
	APLICATION_NAME: process.env.APLICATION_NAME,
	JWT_SECRET: process.env.JWT_SECRET,
	CACHE_KEY: process.env.CACHE_KEY,
};
