<script lang="ts">
	import RegisterForm from '../components/auth/RegisterForm.svelte';
	import {COMPANY_NAME} from "$lib/consts";

</script>

<svelte:head>
	<title>{COMPANY_NAME} - Join Today!</title>
</svelte:head>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content flex-col lg:flex-row-reverse">
		<div class="text-center">
			<h1 class="text-5xl font-black">Elevate Your Fair Experience with {COMPANY_NAME}!</h1>
			<p class="py-6">
				Join the fair food revolution today! {COMPANY_NAME} is your gateway to an enhanced fair
				experience, where the best of fairground cuisine is just a click away. As you read this, our
				registration form is right beside, ready for you to jump in and start savoring the flavors
				of the fair like never before. Let's shape the future of fair event food delivery together!
			</p>
		</div>
		<div class="divider" />
		<RegisterForm />
	</div>
</div>
