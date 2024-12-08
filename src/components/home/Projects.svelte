<script>
	import Summary from './Summary.svelte';

	export let projects;
</script>
<h1 id='projects'>Projects</h1>
{#each projects as project, i}
	<a href={'/projects/' + project.slug}>
		<Summary item={project} />
	</a>
{/each}

<style>
    a {
        color: var(--darkgray);
        text-decoration: none;
        cursor: zoom-in;
        opacity: 1;
    }
</style>
