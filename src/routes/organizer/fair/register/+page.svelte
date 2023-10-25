<script lang="ts">
	import RegisterFairForm from '../../../../components/organizer/create/RegisterFairForm.svelte';
</script>

<svelte:head>
	<title>FairDash - Register a Fair</title>
</svelte:head>

<body class="bg-base-200">
	<RegisterFairForm apikey={localStorage.getItem('apikey')} />
</body>
