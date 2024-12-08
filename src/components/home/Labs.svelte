<script>
	import Summary from './Summary.svelte';

	export let labs;
</script>
<a id='labs'><h1>Labs</h1></a>
{#each labs as lab, i}
	<a href={'/labs/' + lab.slug}>
		<Summary item={lab} />
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
