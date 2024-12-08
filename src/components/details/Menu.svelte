<script>
	export let type;
	export let urlToType;
	export let title;
</script>
<nav>
	<a class='home' href='/'>Stijn Hooft</a>
	<div class='breadcrumbs'>
		<a class='type' href={urlToType}>{type}</a> / <a class='slug'>{title}</a>
	</div>
</nav>

<style>
    nav {
        font-family: 'Poppins', sans-serif;
        display: grid;
        grid-template-columns: 250px minmax(0, 1fr);
        grid-column-gap: 3rem;
				align-items: baseline;
				background-color: var(--white2);
				padding: 3% var(--window-padding-left-right);
    }

    a {
        text-decoration: none;
        color: var(--darkgray);
        cursor: pointer;
    }

    a::after {
        display: none;
    }

    .home {
        font-size: 200%;
        width: 250px;
        display: inline-block;
    }

    .slug {
        font-weight: bold;
    }

    @media (max-width: 1000px) {
        nav {
            grid-template-columns: 1fr;
				}

        .home, .breadcrumbs {
            text-align: center;
            margin: 0 auto;
        }
    }

</style>
