<script lang="ts">
	import LoginForm from '../../components/auth/LoginForm.svelte';
	import {COMPANY_NAME} from "$lib/consts";

</script>

<svelte:head>
	<title>{COMPANY_NAME} - Login</title>
</svelte:head>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content flex-col lg:flex-row-reverse">
		<LoginForm />
	</div>
</div>
