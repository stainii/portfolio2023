<script>
	export let technologies;

	const iconsForTechnologies = {
		'docker': 'docker.svg',
		'java ee': 'javaee.svg',
		'ruby on rails': 'rails.svg',
		'spring boot': 'spring-boot.png',
		'prometheus': 'prometheus.png',
		'grafana': 'grafana.svg',
		'angular': 'angular.svg',
		'aws s3': 'aws-s3.svg',
		'openshift': 'openshift.svg',
		'flyway': 'flyway.svg',
		'kubernetes': 'kubernetes.svg',
		'azure': 'azure.svg',
		'drools': 'drools.svg',
		'elasticsearch': 'elasticsearch.svg',
		'elastic search': 'elasticsearch.svg',
		'jenkins': 'jenkins.svg',
		'liquibase': 'liquibase.svg',
		'soapui': 'soapui.png',
		'dynatrace': 'dynatrace.svg',
		'angularjs': 'angularjs.svg',
		'php': 'php.svg',
		'primefaces': 'primefaces.svg',
		'activiti': 'activiti.png',
		'android': 'android.svg',
		'c': 'c.svg',
		'ios': 'ios.svg',
		'java': 'java.svg',
		'java se': 'java.svg',
		'axon': 'axon.jpeg',
		'kafka': 'kafka.webp'
	};

	function hasTechnologyIcon(technology) {
		return iconsForTechnologies[technology.toLowerCase()] != null;
	}

	function getTechnologyIconSrc(technology) {
		return '/resources/technologies/' + iconsForTechnologies[technology.toLowerCase()];
	}

	function sortedTechnologies(technologies) {
		return technologies.sort((techA, techB) => {
			let hasTechAImage = hasTechnologyIcon(techA);
			let hasTechBImage = hasTechnologyIcon(techB);
			if (hasTechAImage && hasTechBImage) {
				if (techA > techB) {
					return 1;
				} else {
					return -1;
				}
			}
			if (hasTechAImage) {
				return -1;
			}
			if (hasTechBImage) {
				return 1;
			}

			if (techA > techB) {
				return 1;
			} else {
				return -1;
			}
		});
	}

</script>
<div class='technologies'>
	<h2>Most interesting technologies</h2>
	<ul>
		{#each sortedTechnologies(technologies) as technology}
			<li>
				{#if hasTechnologyIcon(technology)}
					<img src={getTechnologyIconSrc(technology)} alt={technology}>
				{:else}
					{technology}
				{/if}
			</li>
		{/each}
	</ul>
</div>

<style>
    .technologies ul {
        display: grid;
        max-width: 50%;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        align-items: center;
        list-style-type: none;
        padding: 0;
        margin: 0;
        grid-gap: 3rem;
        grid-template-rows: 100px;
        text-align: center;
    }

    .technologies img {
        max-width: 100px;
        max-height: 100px;
    }

    @media (max-width: 1000px) {
        .technologies ul {
            max-width: 75%;
        }
    }

    @media (max-width: 800px) {
        .technologies ul {
            max-width: 90%;
        }
    }
</style>
