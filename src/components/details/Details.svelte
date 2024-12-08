<script>
	import TableOfContents from './../shared/TableOfContents.svelte';
	import { portfolioMarked } from '../../utils/PortfolioMarked.js';
	import RolesPeriodAndCompanySummary from '../shared/SummaryMetadata.svelte';
	import Carousel from './Carousel.svelte';
	import Technologies from './Technologies.svelte';


	export let contents;
	export let metadata;
	const parsedDescription = portfolioMarked.parse(metadata?.description);
	const parsedContents = contents ? portfolioMarked.parse(contents) : null;
	$: images = metadata.images ? metadata.images : [metadata.thumbnail];
</script>

<div class='details-container'>
	<div class='toc'>
		<TableOfContents contentsNode='.toc-content h1, .toc-content h2' />
	</div>
	<div class='toc-content'>
		<h1>{metadata?.title}</h1>
		<RolesPeriodAndCompanySummary roles={metadata?.roles}
																	period={metadata?.period}
																	company={metadata?.company}
																	publicationDate={metadata?.publicationDate} />
		<div class='two-cells content'>
			<div class='description'>
				{@html parsedDescription}
			</div>

			<div class='images'>
				<Carousel {images} alt={metadata.title} />
			</div>
		</div>

		{#if metadata.technologies && metadata.technologies.length > 0}
			<Technologies technologies={metadata.technologies} />
		{/if}

		{#if parsedContents}
			<div class='details content'>
				{@html parsedContents}
			</div>
		{/if}
	</div>

</div>

<style>
		.toc-content h1 {
				word-break: break-word;
		}

    .details-container {
        display: grid;
        grid-template-columns: 250px minmax(0, 1fr);
        grid-column-gap: 3rem;
				padding: 0 var(--window-padding-left-right);
    }

    .toc {
        margin-top: 1rem;
    }

    .two-cells {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 3rem;
        grid-auto-flow: dense;
    }

    .description {
        padding-top: 3em;
        padding-bottom: 3em;
    }

    .images {
        display: block;
				min-height: 320px;
				min-width: 100px;
    }

    .details.content {
        margin-top: 5rem;
    }

    :global(.details.content img, .details.content video) {
        max-width: 100%;
    }

    @media screen and (max-width: 1200px) {
        .details-container {
            grid-template-columns: minmax(0, 1fr);
        }

        .toc {
            display: none;
        }

        .images {
            margin: 0 auto;
        }

        .two-cells {
            grid-template-columns: 1fr;
        }

        .description {
            padding-top: 0;
            padding-bottom: 0;
        }

    }

    @media print {
        .details-container {
            background: transparent;
            padding: 0.5cm 1cm;
            grid-template-columns: minmax(0, 1fr);
        }

        .toc {
            display: none;
        }
    }
</style>
