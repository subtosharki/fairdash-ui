<script lang="ts">
	import {COMPANY_NAME} from "$lib/consts";
</script>

<svelte:head>
	<title>FairDash - Frequently Asked Questions</title>
</svelte:head>

<body class="bg-base-200 p-8">
	<div class="container mx-auto bg-base-100 p-6 rounded shadow-lg">
		<h1 class="text-2xl font-bold mb-6">Frequently Asked Questions</h1>

		<div class="mb-6">
			<h2 class="text-lg font-semibold">Question 1: What is {COMPANY_NAME}?</h2>
			<p>
				FairDash is a revolutionary platform that bridges the gap between fairgoers and their
				cherished fair foods. We bring the excitement of fair events right to your RV spot by
				offering convenient food delivery.
			</p>
		</div>

		<div class="mb-6">
			<h2 class="text-lg font-semibold">Question 2: How do I place an order?</h2>
			<p>
				To order your favorite fair foods, simply select your desired items from the list of vendors
				and add them to your cart. After making your selections, proceed to the checkout page to
				confirm your order and provide your delivery details.
			</p>
		</div>

		<div class="mb-6">
			<h2 class="text-lg font-semibold">Question 3: What payment methods are accepted?</h2>
			<p>
				We offer various payment methods, including credit and debit cards. During the checkout
				process, you can securely add your payment information.
			</p>
		</div>

		<div class="mb-6">
			<h2 class="text-lg font-semibold">
				Question 4: How does FairDash know where I am for delivery?
			</h2>
			<p>
				FairDash utilizes your RV or camper spot number to determine your location for delivery.
				Simply provide your spot number during the ordering process.
			</p>
		</div>

		<div class="mb-6">
			<h2 class="text-lg font-semibold">
				Question 5: Can I order food for delivery anywhere on the fairgrounds?
			</h2>
			<p>
				No, you cannot. Food orders must be placed for delivery to designated RV or camper spots.
				This ensures that your delicious fair foods are delivered to your specific location.
			</p>
		</div>
	</div>
</body>
