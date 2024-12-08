import { ContentService } from '../../../../utils/ContentService.js';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({params}) {
	if (!params['slug']) {
		throw error(404, {
			message: 'Not found'
		});
	}

	let contentService = new ContentService();
	let metadata = contentService.findMetadata(params['slug']);
	let contents = contentService.findContents(params['slug'])
	if (!metadata) {
		throw error(404, {
			message: 'Not found'
		});
	}

	return {
		metadata: metadata,
		contents: contents
	};
}
