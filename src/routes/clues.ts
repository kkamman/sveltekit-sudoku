import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async () => {
	// TODO generate clues
	const clues = new Array(81)
		.fill(0)
		.map(() => Math.floor(Math.random() * 10))
		.join('')
		.toString();

	return {
		body: { clues }
	};
};
