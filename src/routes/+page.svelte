<script>
	import Intro from '../components/home/Intro.svelte';
	import CurriculumVitae from '../components/home/CurriculumVitae.svelte';
	import { browser } from '$app/environment';
	import Footer from '../components/shared/Footer.svelte';

	export let data;
	let { contents } = data;
	let loaded = false;

	if (browser) {
		initPageWhenLoaded();
	}

	function initPageWhenLoaded() {
		handleReadyState(document.readyState);
		document.addEventListener('readystatechange', (event) => {
			handleReadyState(event.target.readyState);
		});
	}

	function handleReadyState(readyState) {
		switch (readyState) {
			case 'loading':
				break;
			case 'interactive': {
				break;
			}
			case 'complete':
				initPage();
				break;
		}
	}

	function initPage() {
		loaded = true;
		console.debug('page loaded and initialized');
	}

</script>

<style>
    .fade-in-after-intro {
        opacity: 0;
        animation: fade-in 1s 400ms forwards;
    }

    .not-loaded-yet {
        opacity: 0;
    }

</style>

<div class:not-loaded-yet={!loaded}>
	<Intro loaded={loaded} />
</div>
<div class:fade-in-after-intro={loaded}
		 class:not-loaded-yet={!loaded}>
	<CurriculumVitae contents={contents} />
	<Footer />
</div>
