<script lang="ts">
	import { getUserBy } from '$lib/users/getBy';
</script>

{#if !localStorage.getItem('apikey')}
	<head>
		<title>FairDash - Redirecting</title>
		<meta http-equiv="Refresh" content="0; url='/login'" />
	</head>
{:else}
	{#await getUserBy('apikey', localStorage.getItem('apikey'))}
		<p class="text-center">Loading...</p>
	{:then user}
		{#if !user || user.role !== 'organizer'}
			<head>
				<title>FairDash - Redirecting</title>
				<meta http-equiv="Refresh" content="0; url='/login'" />
			</head>
		{:else}
			<slot />
		{/if}
	{:catch error}
		<head>
			<title>FairDash - Redirecting</title>
			<meta http-equiv="Refresh" content="0; url='/login'" />
		</head>
	{/await}
{/if}
