<script lang="ts">
	import RegisterForm from '../components/auth/RegisterForm.svelte';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { getUserBy } from '$lib/users/getBy';
	import {getALlFairs} from "$lib/fairs/getAll";

	onMount(async () => {
		if (localStorage.getItem('apikey')) {
			const user = await getUserBy('apikey', localStorage.getItem('apikey'));
			if (!user) {
				localStorage.removeItem('apikey');
			} else {
				switch (user.role) {
					case 'organizer':
						const ownersFairs = await getALlFairs(user.id);
						if (!ownersFairs) {
							await goto('/organizer/fair/register');
						} else {
							await goto('/organizer/fair/dashboard');
						}
						break;
					case 'user':
						await goto('/dashboard');
						break;
					default:
						break;
				}
			}
		}
	});
</script>

<svelte:head>
	<title>FairDash - Join Today!</title>
</svelte:head>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content flex-col lg:flex-row-reverse">
		<div class="text-center">
			<h1 class="text-5xl font-black">Elevate Your Fair Experience with FairDash!</h1>
			<p class="py-6">
				Join the fair food revolution today! FairDash is your gateway to an enhanced fair
				experience, where the best of fairground cuisine is just a click away. As you read this, our
				registration form is right beside, ready for you to jump in and start savoring the flavors
				of the fair like never before. Let's shape the future of fair event food delivery together!
			</p>
		</div>
		<div class="divider" />
		<RegisterForm />
	</div>
</div>
