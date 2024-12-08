<script>
	export let technologies;
</script>

{#if technologies && technologies.length > 0}
	<div class='technology'>
		<span class='tech-tag'>{"<tech>"}</span><span class='technology'>{technologies.join(', ')}</span><span class='tech-tag'>{"</tech>"}</span>
	</div>
{/if}

<style>
    .technology {
        font-family: 'Source Code Pro', monospace;
    }

    .tech-tag {
        color: var(--green);
    }
</style>
