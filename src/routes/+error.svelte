<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>FairDash - {$page.status}</title>
</svelte:head>

<div class="min-h-screen flex items-center justify-center bg-base-200">
	<div class="text-center">
		<h1 class="text-7xl font-extrabold text-accent-400">{$page.status}</h1>
		<p class="text-2xl font-semibold mt-2 mb-6">Oops! A Little FairDash Magic Tripped Us Up.</p>
		<p class="text-xl">{$page.error.message}</p>
		<a href="/" class="btn btn-accent mt-6">Let's Get Back to the Fair</a>
	</div>
</div>
