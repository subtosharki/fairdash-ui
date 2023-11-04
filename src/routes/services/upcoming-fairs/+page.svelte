<script lang="ts">
	import { getALlFairs } from '$lib/fairs/getAll';
	import { getUserBy } from '$lib/users/getBy';
	import {COMPANY_NAME} from "$lib/consts";
</script>

<svelte:head>
	<title>{COMPANY_NAME} - Upcoming Fairs</title>
</svelte:head>

<div class="bg-base-200 min-h-screen p-4">
	<h1 class="text-3xl font-semibold mb-4">Upcoming Fairs</h1>
	{#await getALlFairs()}
		<div class="flex justify-center items-center h-full">Loading...</div>
	{:then fairs}
		{#if fairs.length === 0}
			<div class="flex justify-center items-center h-full">
				<p class="text-xl">There are no upcoming fairs at the moment.</p>
			</div>
		{:else}
			<ul>
				{#each fairs as fair}
					<li class="mb-4 p-4 border rounded-lg bg-white">
						<h2 class="text-xl font-semibold">{fair.name}</h2>
						<p class="text-gray-500">{fair.location}</p>
						<p class="text-gray-500">Start Date: {fair.startDate} - End Date: {fair.endDate}</p>
						<p class="text-gray-500">
							Organizer:
							{#await getUserBy('id', fair.organizerId)}
								Loading...
							{:then organizer}
								{organizer.firstName} {organizer.lastName}
							{:catch error}
								<p class="text-red-600">Error: {error.message}</p>
							{/await}
						</p>
						<p class="text-gray-500">Social Media: {fair.socialMedia}</p>
						<p class="text-gray-500">
							Camper Spot Map: <a href={fair.camperSpotMap} target="_blank">View Map</a>
						</p>
						<a href={`/fairs/${fair.id}`} class="text-blue-500">More Info</a>
					</li>
				{/each}
			</ul>
		{/if}
	{:catch error}
		<p class="flex justify-center items-center h-full text-red-600">Error: {error.message}</p>
	{/await}
</div>
