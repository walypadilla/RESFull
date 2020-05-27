const BaseService = require('./base.service');
let _commentRepository = null;
let _ideaRepository = null;

class CommentService extends BaseService {
	constructor({ CommentRepository, IdeaRepository }) {
		super(CommentRepository);
		_commentRepository = CommentRepository;
		_ideaRepository = IdeaRepository;
	}

	async getIdeaComment(ideaId) {
		if (!idea) {
			const error = new Error();
			error.status = 400;
			error.massage = 'ideaId must be sent';
			throw error;
		}

		const idea = await _ideaRepository.get(ideaId);

		if (!idea) {
			const error = new Error();
			error.status = 404;
			error.massage = 'idea does not exist';
			throw error;
		}

		const { comments } = idea;
		return comments;
	}

	async createComment(comment, ideaId) {
		if (!idea) {
			const error = new Error();
			error.status = 400;
			error.massage = 'ideaId must be sent';
			throw error;
		}

		const idea = await _ideaRepository.get(ideaId);

		if (!idea) {
			const error = new Error();
			error.status = 404;
			error.massage = 'idea does not exist';
			throw error;
		}

		const createComment = await _commentRepository.create(comment);
		idea.comments.push(createComment);

		return await _ideaRepository.update(ideaId, { comments: idea.comments });
	}
}

module.exports = CommentService;
