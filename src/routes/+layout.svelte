<script lang="ts">
	import '../app.css';
	import Header from '../components/layout/Header.svelte';
	import Footer from '../components/layout/Footer.svelte';
	import { browser } from '$app/environment';
	import { ProgressRadial } from '@skeletonlabs/skeleton';
</script>

{#if browser}
	<Header />
	<slot />
	<Footer />
{:else}
	<div class="min-h-screen flex items-center justify-center">
		<ProgressRadial />
	</div>
{/if}
