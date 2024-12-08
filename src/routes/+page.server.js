import { ContentService } from '../utils/ContentService.js';

/** @type {import('./$types').PageServerLoad} */
export async function load() {

	return {
		contents: new ContentService().load()
	};

}
