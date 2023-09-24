<script lang="ts">
	import PrimaryButton from '../buttons/PrimaryButton.svelte';

	const formQuestions = [
		{
			question: 'Email',
			type: 'email',
			placeholder: 'example@email.com',
			autocomplete: 'email',
			value: ''
		},
		{
			question: 'Password',
			type: 'password',
			placeholder: 'password123',
			autocomplete: 'new-password',
			value: ''
		}
	];
</script>

<div class="card flex-shrink-0 w-full max-w-sm shadow-2xl">
	<form>
		<div class="card-body bg-base-100">
			{#each formQuestions as { question, type, placeholder, autocomplete, value }, i}
				<div class="form-control">
					<label class="label">
						<span class="label-text">{question}</span>
					</label>
					<input class="input input-bordered" {type} {placeholder} {autocomplete} {value} />
				</div>
			{/each}
			<label class="label">
				<a href="/reset-password" class="btn btn-sm label-text-alt link link-hover"
					>Forgot password?</a
				>
			</label>
			<div class="form-control mt-6">
				<PrimaryButton>Login</PrimaryButton>
			</div>
		</div>
	</form>
</div>
