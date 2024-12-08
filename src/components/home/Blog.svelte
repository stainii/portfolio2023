<script>
	import Summary from './Summary.svelte';

	export let blogposts;
</script>
<a id='blog'><h1>Blogposts</h1></a>
{#each blogposts as blogpost, i}
	<a href={'/blog/' + blogpost.slug}>
		<Summary item={blogpost} />
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
