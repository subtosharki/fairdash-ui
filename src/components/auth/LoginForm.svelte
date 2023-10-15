<script lang="ts">
	import PrimaryButton from '../buttons/PrimaryButton.svelte';
	import { login } from '$lib/auth/login';
	import { goto } from '$app/navigation';

	let email, password;
</script>

<div class="min-h-screen flex items-center justify-center">
	<div class="w-full max-w-md">
		<div class="bg-base-100 p-6 rounded-lg shadow-lg">
			<h1 class="text-2xl font-bold mb-6 text-center">Login</h1>
			<div class="mb-4">
				<label class="block label-text">Email</label>
				<input
					class="input input-bordered"
					type="email"
					placeholder="example@email.com"
					autocomplete
					bind:value={email}
				/>
			</div>
			<div class="mb-4">
				<label class="block label-text">Password</label>
				<input
					class="input input-bordered"
					type="password"
					placeholder="password123"
					autocomplete
					bind:value={password}
				/>
			</div>
			<label class="block text-gray-700 text-right">
				<a href="/reset-password" class="text-blue-500 hover:underline">Forgot password?</a>
			</label>
			<div class="mt-6">
				<PrimaryButton
					on:click={async () => {
						if (!email || !password) {
							return alert('Please fill out all fields');
						}
						let apikey;
						try {
							apikey = await login(email, password);
						} catch (error) {
							return alert(error.message);
						}
						localStorage.setItem('apikey', apikey);
						await goto('/dashboard');
					}}
				>
					Login
				</PrimaryButton>
			</div>
		</div>
	</div>
</div>
