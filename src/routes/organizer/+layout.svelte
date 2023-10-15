<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	// onMount(async () => {
	//     if(!localStorage.getItem('apikey')) {
	//         await goto('/login')
	//     }
	// });
</script>

<slot />
