<script>
	import Details from '../../../../components/details/Details.svelte';
	import Menu from '../../../../components/details/Menu.svelte';
	import Footer from '../../../../components/shared/Footer.svelte';

	export let data;
	let { metadata, contents } = data;
</script>

<div class='container'>
	<Menu title={metadata.title} type={'blog'} urlToType={'/#blog'}></Menu>
	<Details contents={contents} metadata={metadata}></Details>
</div>
<Footer />
