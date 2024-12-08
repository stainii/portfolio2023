import { marked } from 'marked';
import Prism from 'prismjs';
import 'prismjs/components/prism-java.js';
import 'prismjs/components/prism-json.js';
import 'prismjs/components/prism-yaml.js';
import 'prismjs/components/prism-http.js';

const imageRenderer = {
	name: 'image',
	renderer: ({ href, title, text }) => {
		if (href.endsWith('.mov') || href.endsWith('.mp4')) {
			return `
					<video controls><source src='${href}'></video>
				`;
		}

		const altAttribute = text ? `alt='${text}'` : '';
		const titleAttribute = title ? `title={title}` : '';

		// noinspection HtmlRequiredAltAttribute
		return `
						<img src='${href}' ${altAttribute} ${titleAttribute}>
				`;
	}
};

const codeRenderer = {
	name: 'code',
	renderer: ({text, lang}) => {
		lang = Prism.languages[lang] ? lang : 'markup';
		return `<pre class='language-${lang}'><code class='language-${lang}'>${Prism.highlight(text, Prism.languages[lang], lang)}</code></pre>`;
	}
};

// Prism.highlight(code, Prism.languages[language])
marked.use({
	extensions: [imageRenderer, codeRenderer]
});

export const portfolioMarked = marked;
