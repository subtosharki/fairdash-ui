<script lang="ts">
	import PrimaryButton from '../buttons/PrimaryButton.svelte';
	import { register } from '$lib/auth/register';
	import { goto } from '$app/navigation';
	import { ENCRYPTION_KEY } from '$lib/consts';
	import { AES, enc } from 'crypto-js';

	export const asOrganizer = false;

	let email, firstName, lastName, phoneNumber, password, confirmPassword;
</script>

<div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
	<div class="card-header flex justify-center pb-5 pt-5">
		<h1 class="card-title text-2xl">Start Using FairDash Today!</h1>
	</div>
	<div class="card-body">
		<div class="form-control">
			<label class="label">
				<span class="label-text text-lg">Email</span>
			</label>
			<input
				class="input input-bordered"
				type="email"
				placeholder="example@email.com"
				bind:value={email}
			/>
		</div>

		<div class="form-control">
			<label class="label">
				<span class="label-text text-lg">First Name</span>
			</label>
			<input class="input input-bordered" type="text" placeholder="John" bind:value={firstName} />
		</div>

		<div class="form-control">
			<label class="label">
				<span class="label-text text-lg">Last Name</span>
			</label>
			<input class="input input-bordered" type="text" placeholder="Doe" bind:value={lastName} />
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
			/>
		</div>

		<div class="form-control mt-6">
			<PrimaryButton
				on:click={async () => {
					if (!email || !firstName || !lastName || !phoneNumber || !password || !confirmPassword) {
						return alert('Please fill out all fields');
					}
					if (password !== confirmPassword) {
						return alert('Passwords do not match');
					}
					let apikey;
					try {
						apikey = register(
							email,
							firstName,
							lastName,
							phoneNumber,
							password,
							confirmPassword,
							asOrganizer
						);
					} catch (e) {
						return alert(e.message);
					}
					localStorage.setItem('apikey', AES.encrypt(apikey, ENCRYPTION_KEY).toString());
					if (asOrganizer) {
						await goto('/organizer/create');
					} else {
						await goto('/dashboard');
					}
				}}>Register</PrimaryButton
			>
		</div>
		<div class="form-control mt-6">
			<a href="/login" class="text-sm"
				>Already have an account? <span class="underline font-bold">Click here to login </span></a
			>
			<div />
		</div>
	</div>
</div>
