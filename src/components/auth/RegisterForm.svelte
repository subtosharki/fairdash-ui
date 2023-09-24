<script lang="ts">
	import PrimaryButton from '../buttons/PrimaryButton.svelte';
	let formQuestions = [
		{
			question: 'Email',
			type: 'email',
			placeholder: 'example@email.com',
			value: ''
		},
		{
			question: 'First Name',
			type: 'text',
			placeholder: 'John',
			value: ''
		},
		{
			question: 'Last Name',
			type: 'text',
			placeholder: 'Doe',
			value: ''
		},
		{
			question: 'Phone Number',
			type: 'tel',
			placeholder: '+1 234 567 890',
			value: ''
		},
		{
			question: 'Password',
			type: 'password',
			placeholder: 'password123',
			value: ''
		},
		{
			question: 'Confirm Password',
			type: 'password',
			placeholder: 'password123',
			value: ''
		}
	];
</script>

<div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
	<div class="card-header flex justify-center pb-5 pt-5">
		<h1 class="card-title text-2xl">Start Using FairDash Today!</h1>
	</div>
	<div class="card-body">
		{#each formQuestions as { value, type, placeholder, question }}
			<div class="form-control">
				<label class="label">
					<span class="label-text text-lg">{question}</span>
				</label>
				<input class="input input-bordered" {type} {placeholder} {value} />
			</div>
		{/each}
		<div class="form-control mt-6">
			<PrimaryButton>Register</PrimaryButton>
		</div>
		<div class="form-control mt-6">
			<a href="/login" class="text-sm"
				>Already have an account? <span class="underline font-bold">Click here to login </span></a
			>
			<div />
		</div>
	</div>
</div>
