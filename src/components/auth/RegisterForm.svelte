<script lang="ts">
	import { register } from '$lib/auth/register';
	import { goto } from '$app/navigation';

	export let asOrganizer = false;
	export let title = 'Start Using FairDash Today!';

	let email, firstName, lastName, phoneNumber, password, confirmPassword;
</script>

<div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
	<div class="card-header flex justify-center pt-5">
		<h1 class="card-title text-2xl">{title}</h1>
	</div>
	<form
		class="card-body"
		on:submit={async () => {
			if (password !== confirmPassword) {
				return alert('Passwords do not match');
			}
			let apikey = await register(
				email,
				firstName,
				lastName,
				phoneNumber,
				password,
				confirmPassword,
				asOrganizer
			);

			localStorage.setItem('apikey', apikey);
			if (asOrganizer) {
				await goto('/organizer/fair/register');
			} else {
				await goto('/dashboard');
			}
		}}
	>
		<div class="form-control">
			<label class="label">
				<span class="label-text text-lg">Email</span>
			</label>
			<input
				class="input input-bordered"
				type="email"
				placeholder="example@email.com"
				bind:value={email}
				required
			/>
		</div>

		<div class="form-control">
			<label class="label">
				<span class="label-text text-lg">First Name</span>
			</label>
			<input
				class="input input-bordered"
				type="text"
				placeholder="John"
				bind:value={firstName}
				required
			/>
		</div>

		<div class="form-control">
			<label class="label">
				<span class="label-text text-lg">Last Name</span>
			</label>
			<input
				class="input input-bordered"
				type="text"
				placeholder="Doe"
				bind:value={lastName}
				required
			/>
		</div>

		<div class="form-control">
			<label class="label">
				<span class="label-text text-lg">Phone Number</span>
			</label>
			<input
				class="input input-bordered"
				type="tel"
				placeholder="+1 (234) 567 8900"
				bind:value={phoneNumber}
				required
			/>
		</div>

		<div class="form-control">
			<label class="label">
				<span class="label-text text-lg">Password</span>
			</label>
			<input
				class="input input-bordered"
				type="password"
				placeholder="password123"
				bind:value={password}
				required
			/>
		</div>

		<div class="form-control">
			<label class="label">
				<span class="label-text text-lg">Confirm Password</span>
			</label>
			<input
				class="input input-bordered"
				type="password"
				placeholder="password123"
				bind:value={confirmPassword}
				required
			/>
		</div>

		<div class="form-control mt-6">
			<button class="btn btn-primary">Register</button>
		</div>
		<div class="form-control mt-6">
			<a href="/login" class="text-sm"
				>Already have an account? <span class="underline font-bold">Click here to login </span></a
			>
			<div />
		</div>
	</form>
</div>
