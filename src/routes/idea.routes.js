const { Router } = require('express');

module.exports = function ({ IdeaController }) {
	const router = Router();

	router.get('/', IdeaController.getAll);
	router.get('/:ideId', IdeaController.get);
	router.get('/:ideId/all', IdeaController.getUserIdeas);
	router.post('/', IdeaController.create);
	router.patch('/:ideId', IdeaController.update);
	router.delete('/:ideId', IdeaController.delete);
	router.post('/:ideId/upvote', IdeaController.upvoteIdea);
	router.post('/:ideId/down', IdeaController.downIdea);

	return router;
};
