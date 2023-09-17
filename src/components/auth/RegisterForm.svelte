<script lang="ts">
	import { page } from '$app/stores';
	let signupAs = $page.url.searchParams.get('signupAs') || 'customer';
</script>

<div class="flex justify-center space-x-2">
	<label class="label flex flex-col items-center">
		<span>Email</span>
		<input
			class="input"
			title="email"
			type="email"
			placeholder="email@example.com"
			autocomplete="email"
		/>
		<br />
		<span>Password</span>
		<input class="input" title="password" type="password" placeholder="password123" autocomplete="new-password" />
		<br />
		<span>Confirm Password</span>
		<input class="input" title="password" type="password" placeholder="password123" autocomplete="new-password" />
		<br />
		<span>First Name</span>
		<input class="input" title="text" type="text" placeholder="John" />
		<br />
		<span>Last Name</span>
		<input class="input" title="text" type="text" placeholder="Doe" />
		<br />
		<span>Phone Number</span>
		<input class="input" title="tel" type="tel" placeholder="+1 234 567 890" />
		<br />
		<span>Register as a</span>
		{#each ['Customer', 'Runner', 'Owner'] as role, i}
			<label class="flex items-center space-x-2">
				{#if role.toLowerCase() === signupAs}
					<input class="radio" type="radio" name="radio-direct" value={i} checked />
				{:else}
					<input class="radio" type="radio" name="radio-direct" value="{i}" />
				{/if}
				<span>{role}</span>
			</label>
		{/each}
		<br />
		<button class="btn bg-surface-600">Register</button>
	</label>
</div>
