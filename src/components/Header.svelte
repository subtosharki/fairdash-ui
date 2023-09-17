<script>
	import { AppBar } from '@skeletonlabs/skeleton';
</script>

<AppBar>
	<svelte:fragment slot="lead">
		<a class="text-xl" href="/">FairDash</a>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<a class="btn btn-sm variant-ghost-surface" href="/login"> Login </a>
		<a class="btn btn-sm variant-ghost-surface" href="/register"> Register </a>
	</svelte:fragment>
</AppBar>
