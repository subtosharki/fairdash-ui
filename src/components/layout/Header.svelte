<script lang="ts">
	const headers = [
		{
			href: '/how-it-works',
			text: 'How it Works'
		},
		{
			href: '/work-with-us',
			text: 'Work with Us'
		},
		{
			href: '/login',
			text: 'Login'
		}
	];
</script>

<div class="navbar bg-base-100">
	<div class="flex-1">
		<a class="btn btn-ghost text-xl" href="/">FAIRDASH</a>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal">
			{#each headers as { href, text }}
				<li>
					<a class="btn btn-ghost" {href}>{text}</a>
				</li>
			{/each}
		</ul>
	</div>
</div>
