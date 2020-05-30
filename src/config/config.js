if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

module.exports = {
	PORT: process.env.PORT,
	MONGO_URI: process.env.MONGO_URI,
	APLICATION_NAME: process.env.APLICATION_NAME,
	JTW_SECRET: process.env.JTW_SECRET,
};
