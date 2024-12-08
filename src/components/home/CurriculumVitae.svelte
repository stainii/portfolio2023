<script>
	import TableOfContents from './../shared/TableOfContents.svelte';
	import JustMarkdown from './JustMarkdown.svelte';
	import Projects from './Projects.svelte';
	import Blog from './Blog.svelte';
	import Labs from './Labs.svelte';
	import Studies from './Studies.svelte';

	export let contents;

	// transform contents to components
	const components = [];
	contents.forEach(item => {
		if (item.type === 'just-markdown') {
			components.push({
				component: JustMarkdown,
				props: {
					markdown: item.items[0].markdown
				}
			});
		} else if (item.type === 'projects') {
			components.push({
				component: Projects,
				props: {
					projects: item.items
				}
			});
		} else if (item.type === 'blog') {
			components.push({
				component: Blog,
				props: {
					blogposts: item.items
				}
			});
		} else if (item.type === 'labs') {
			components.push({
				component: Labs,
				props: {
					labs: item.items
				}
			});
		} else if (item.type === 'studies-and-trainings') {
			components.push({
				component: Studies,
				props: {
					studies: item.items
				}
			});
		} else {
			console.error('Could not process item', item);
		}
	});

</script>

<div class='cv-container'>
	<div class='toc'>
		<TableOfContents contentsNode='.content h1' />
	</div>
	<div class='content'>
		{#each components as component}
			<svelte:component this={component.component} {...component.props} />
		{/each}
	</div>
</div>

<style>
    .cv-container {
        background: linear-gradient(var(--white2) 0, var(--white) 10%);
        display: grid;
        grid-template-columns: 250px minmax(0, 1fr);
        grid-column-gap: 3rem;
    }

    .toc {
        margin-top: 1rem;
				margin-left: 10%;
    }

    :global(h2 + p code) {
        color: var(--darkgreen);
        font-family: 'Poppins', sans-serif;
        font-size: 1rem;
    }

    @media (max-width: 800px) {
        .cv-container {
            grid-template-columns: minmax(0, 1fr);
        }

        .toc {
            display: none;
        }

				.content {
						padding: 5%;
						width: 90%;
						overflow: hidden;
				}
    }

    @media print {
        .cv-container {
            background: transparent;
            padding: 0.5cm 1cm;
            grid-template-columns: minmax(0, 1fr);
        }

        .toc {
            display: none;
        }
    }
</style>
