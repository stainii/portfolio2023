<script>
	import { portfolioMarked } from '../../utils/PortfolioMarked.js';

	export let markdown;
	const content = portfolioMarked.parse(markdown);
</script>
{@html content}
