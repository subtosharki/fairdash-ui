<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
    import {getCurrentUser} from "$lib/users/getCurrent.ts";

	onMount(async () => {
	    if(!localStorage.getItem('apikey')) {
	        await goto('/login')
	    }
        const user = await getCurrentUser(localStorage.getItem('apikey'));
        if(!user) {
            await goto('/login')
        } else if(user.role !== 'organizer') {
            await goto('/login')
        }
	});
</script>

<slot />
