<script>
	export let roles;
	export let period;
	export let company;
	export let publicationDate;

	function formatRolesAndRoles(roles, period) {
		let elementsToInclude = [];

		if (period) {
			elementsToInclude.push(period);
		}

		if (roles) {
			if (roles instanceof Array) {
				elementsToInclude = elementsToInclude.concat(roles);
			} else {
				elementsToInclude.push(roles);
			}
		}

		let result = elementsToInclude.join(', ');
		result = result.substring(0, 1).toUpperCase() + result.substring(1);
		return result;
	}
</script>
<strong>
	{#if roles || period}<span class='roles'>{formatRolesAndRoles(roles, period)}</span>{/if}
	{#if company}<span> at {company}</span>{/if}
	{#if publicationDate}
		{publicationDate}
	{/if}
</strong>
