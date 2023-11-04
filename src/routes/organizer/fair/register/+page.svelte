<script lang="ts">
	import RegisterFairForm from '../../../../components/organizer/create/RegisterFairForm.svelte';
	import {COMPANY_NAME} from "$lib/consts";
</script>

<svelte:head>
	<title>{COMPANY_NAME} - Register a Fair</title>
</svelte:head>

<body class="bg-base-200">
	<RegisterFairForm apikey={localStorage.getItem('apikey')} />
</body>
