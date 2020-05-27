const { createContainer, asClass, asValue, asFunction } = require('awilix');

// config
const config = require('../config/config');
const app = require('.');

// Services
const { HomeService } = require('../services');

// Controllers
const { HomeController } = require('../controllers');

// Routes
const { HomeRoutes } = require('../routes/index.routes');
const Routes = require('../routes');

// models
const { Comment, User, Idea } = require('../models');

// repositories
const {
	UserRepository,
	CommentRepository,
	IdeaRepository,
} = require('../repositories');

const container = createContainer();

container
	.register({
		app: asClass(app).singleton(),
		router: asFunction(Routes).singleton(),
		config: asValue(config),
	})
	.register({
		HomeService: asClass(HomeService).singleton(),
	})
	.register({
		HomeController: asClass(HomeController.bind(HomeController)).singleton(),
	})
	.register({
		HomeRoutes: asFunction(HomeRoutes).singleton(),
	})
	.register({
		User: asValue(User),
		Idea: asValue(Idea),
		Comment: asValue(Comment),
	})
	.register({
		UserRepository: asClass(UserRepository).singleton(),
		IdeaRepository: asClass(IdeaRepository).singleton(),
		CommentRepository: asClass(CommentRepository).singleton(),
	});

module.exports = container;
