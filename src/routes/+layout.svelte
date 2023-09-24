<script lang="ts">
	import '../app.css';
	import Header from '../components/layout/Header.svelte';
	import Footer from '../components/layout/Footer.svelte';
	import { browser } from '$app/environment';
</script>

{#if browser}
	<Header />
	<slot />
	<Footer />
{:else}
	<div class="loading loading-spinner loading-lg loading-dark" />
{/if}
