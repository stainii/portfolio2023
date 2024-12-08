<script>
	import { portfolioMarked } from '../../utils/PortfolioMarked.js';
	import SummaryMetadata from '../shared/SummaryMetadata.svelte';
	import SummaryTechnologies from './SummaryTechnologies.svelte';

	export let item;
	export let size = 'large';

	const description = item.description ? portfolioMarked.parse(item.description) : '';
</script>

<div class={'table two-cells ' + size}>
	<div class='text cell'>
		<h2>{item?.title}</h2>
		<SummaryMetadata roles={item.roles}
										 period={item.period}
										 company={item.company}
										 publicationDate={item.publicationDate} />
		{@html description}
		<SummaryTechnologies technologies={item?.technologies} />
	</div>
	{#if item.thumbnail}
		<div class='image cell'>
			<img src={item.thumbnail} alt={item.title}>
		</div>
	{/if}
</div>

<style>
    .table {
        display: grid;
        align-items: center;
        grid-gap: 5%;
    }

    .large.table {
        margin-bottom: 50px;
    }

    .small.table {
        margin-bottom: 20px;
    }

    .table.two-cells {
        grid-template-columns: minmax(0, 1fr) 1fr;
        grid-auto-flow: dense;
    }

    .image.cell {
        grid-column: 2;
        text-align: center;
    }

    .image.cell img {
        object-fit: contain;
    }

    .large .image.cell img {
        height: 300px;
        max-width: 400px;
    }

    .small .image.cell img {
        height: 120px;
        max-width: 200px;
    }

    .text.cell {
        grid-column: 1;
    }

    @media screen and (max-width: 1200px) {
        .table.two-cells {
            grid-template-columns: 1fr;
        }

        .image.cell {
            grid-column: 1;
        }
    }

    @media print {
        .table.two-cells {
            grid-template-columns: 2fr 1fr;
            grid-auto-flow: dense;
        }

        .large.table, .small.table {
            margin-bottom: 10px;
        }

        .large .image.cell img, .small .image.cell img {
            height: 100px;
            max-width: 200px;
        }

        .table {
            break-inside: avoid;
        }
    }

		@media screen and (max-width: 600px) {
        .large .image.cell img {
            max-width: 100%;
        }
		}
</style>
