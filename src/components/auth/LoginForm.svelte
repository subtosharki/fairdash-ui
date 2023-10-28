<script lang="ts">
	import { login } from '$lib/auth/login';
	import { goto } from '$app/navigation';
	import { getALlFairs } from '$lib/fairs/getAll';

	let email, password;
</script>

<div class="min-h-screen flex items-center justify-center">
	<div class="w-full max-w-md">
		<form
			class="bg-base-100 p-6 rounded-lg shadow-lg"
			on:submit={async () => {
				let [apikey, role, id] = await login(email, password);
				localStorage.setItem('apikey', apikey);
				switch (role) {
					case 'organizer':
						const ownersFairs = await getALlFairs(id);
						if (!ownersFairs) {
							await goto('/organizer/fair/register');
						} else {
							await goto('/organizer/fair/dashboard');
						}
						break;
					case 'user':
						await goto('/dashboard');
						break;
				}
			}}
		>
			<h1 class="text-2xl font-bold mb-6 text-center">Login</h1>
			<div class="mb-4">
				<label class="block label-text">Email</label>
				<input
					class="input input-bordered"
					type="email"
					placeholder="example@email.com"
					autocomplete
					bind:value={email}
					required
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
					required
				/>
			</div>
			<label class="block text-gray-700 text-right">
				<a href="/reset-password" class="text-blue-500 hover:underline">Forgot password?</a>
			</label>
			<div class="mt-6">
				<button class="btn btn-primary"> Login </button>
			</div>
		</form>
	</div>
</div>
