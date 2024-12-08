import { env } from '$env/dynamic/private';
import { error } from '@sveltejs/kit';
import { parse } from 'yaml';
import * as fs from 'fs';


export class ContentService {
	load() {
		// determine folder with markdown files and index.json
		if (!env.PORTFOLIO_MARKDOWN_FOLDER) {
			throw error('Markdown folder location not configured. Please configure env var PORTFOLIO_MARKDOWN_FOLDER with the location of the markdown files');
		}
		const folder = env.PORTFOLIO_MARKDOWN_FOLDER.endsWith('/') ? env.PORTFOLIO_MARKDOWN_FOLDER : process.env.PORTFOLIO_MARKDOWN_FOLDER + '/';

		// read index.yaml
		const filePath = folder + 'index.yaml';
		const fileContents = fs.readFileSync(filePath).toString();
		const contents = parse(fileContents);

		if (!contents) {
			throw error(404, 'No markdown folder with index.yaml found');
		}

		return contents.contents;
	}

	findMetadata(slug) {
		const allContents = this.load();
		let metadata = allContents
			.flatMap(contents => contents.items)
			.filter(contents => contents.slug === slug)[0];
		return metadata;
	}

	findContents(slug) {
		const folder = env.PORTFOLIO_MARKDOWN_FOLDER.endsWith('/') ? env.PORTFOLIO_MARKDOWN_FOLDER : process.env.PORTFOLIO_MARKDOWN_FOLDER + '/';

		const metadata = this.findMetadata(slug);

		if (!metadata.file) {
			return null;
		}

		const filePath = folder + metadata.file;
		return fs.readFileSync(filePath).toString();
	}

}
