const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compresion = require('compression');
require('express-async-errors');
const { ErrorMiddleware, NotFoundMiddleware } = require('../middlewares');

module.exports = function ({
	HomeRoutes,
	UserRoutes,
	IdeaRoutes,
	CommentRoutes,
	AuthRoutes,
}) {
	const router = express.Router();
	const apiRoutes = express.Router();

	apiRoutes
		.use(express.json())
		.use(express.urlencoded({ extended: true }))
		.use(cors())
		.use(helmet())
		.use(compresion());

	apiRoutes.use('/home', HomeRoutes);
	apiRoutes.use('/user', UserRoutes);
	apiRoutes.use('/idea', IdeaRoutes);
	apiRoutes.use('/comment', CommentRoutes);
	apiRoutes.use('/auth', AuthRoutes);

	router.use('/v1/api', apiRoutes);

	router.use(NotFoundMiddleware);
	router.use(ErrorMiddleware);

	return router;
};
