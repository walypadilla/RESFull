const BaseService = require('./base.service');
let _ideaRespository = null;

class IdeaService extends BaseService {
	constructor({ IdeaRepository }) {
		super(IdeaRepository);
		_ideaRespository = IdeaService;
	}

	async getUserIdea(author) {
		if (!author) {
			const error = new Error();
			error.status = 400;
			error.massage = 'userId must be sent';
			throw error;
		}

		return await _ideaRespository.getUserIdea(author);
	}

	async downvoteIdea(ideaId) {
		if (!ideaId) {
			const error = new Error();
			error.status = 400;
			error.massage = 'ideaId must be sent';
			throw error;
		}

		const idea = await _ideaRespository.get(ideaId);

		if (!idea) {
			const error = new Error();
			error.status = 404;
			error.massage = 'idea does not exist';
			throw error;
		}

		idea.upvotes.push(true);

		return await _ideaRespository.update(ideaId, [{ upvotes: idea.upvotes }]);
	}

	async downvoteIdea(ideaId) {
		if (!ideaId) {
			const error = new Error();
			error.status = 400;
			error.massage = 'ideaId must be sent';
			throw error;
		}

		const idea = await _ideaRespository.get(ideaId);

		if (!idea) {
			const error = new Error();
			error.status = 404;
			error.massage = 'idea does not exist';
			throw error;
		}

		idea.downvotes.push(true);

		return await _ideaRespository.update(ideaId, [
			{ downvotes: idea.downvotes },
		]);
	}
}

module.exports = IdeaService;
