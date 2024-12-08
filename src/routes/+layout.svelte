<script>
	import '../app.css';
	import '../../node_modules/prismjs/themes/prism.min.css';
	import '../../node_modules/prismjs/themes/prism-okaidia.min.css';
	import { fade } from 'svelte/transition';
	import { initializeCarouselWebComponent } from '../utils/Carousel.js';
	import { browser } from '$app/environment';

	export let data;

	if (browser) {
		initializeCarouselWebComponent();
	}
</script>
{#key data.url}
	<div class='container'
			 in:fade={{duration: 300, delay: 300 }}
			 out:fade={{duration: 300 }}>
		<slot />
	</div>
{/key}

<style>
    .container {
        height: 100%;
        width: 100%;
    }
</style>
