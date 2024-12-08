<script>
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css/sea-green';

	export let images = [];
	export let alt = '';
</script>

<Splide
	aria-label='screenshots'
	hasTrack={false}
	options={ {
    arrows: false,
    autoplay: true,
    rewind: true,
  } }>
	<SplideTrack>
		{#each images as image}
			<SplideSlide>
				<img src={image} {alt} />
			</SplideSlide>
		{/each}
	</SplideTrack>
</Splide>
