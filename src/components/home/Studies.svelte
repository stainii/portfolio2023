<script>
	import Summary from './Summary.svelte';

	export let studies;
</script>
<h1>Studies and trainings</h1>
{#each studies as study}
	<Summary item={study} size='small' />
{/each}
