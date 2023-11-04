<script lang="ts">
	import {COMPANY_NAME} from "$lib/consts";
</script>

<svelte:head>
	<title>{COMPANY_NAME} - Become a Partner</title>
</svelte:head>

<body class="bg-base-200 p-8">
	<div class="container mx-auto bg-base-100 p-6 rounded shadow-lg">
		<h1 class="text-2xl font-bold mb-6">Become a {COMPANY_NAME} Partner</h1>
		<div class="divider" />

		<p class="text-2xl font-bold mb-6">
			We're looking for fair enthusiasts to join our team and help us build the future of fair food
			delivery. If you're passionate about fairs and want to make a difference, join us today.
		</p>

		<div class="mb-6">
			<h2 class="text-lg font-semibold">Fair Organizers</h2>
			<p>
				Are you a fair organizer looking to enhance the food delivery experience at your fair event?
				Partner with {COMPANY_NAME} to take your event to the next level! With ${COMPANY_NAME}, you can provide
				fair attendees with the convenience of food delivery, making your fair event more enjoyable
				than ever. Responsibilities include:
			</p>
			<ul class="list-disc ml-6">
				<li>Create and manage fair events on {COMPANY_NAME} with ease</li>
				<li>Register vendors and help them optimize their menu offerings</li>
				<li>Ensure fair attendees enjoy the convenience of food delivery during your event</li>
				<li>
					Effortlessly manage runner applications and build a reliable team to ensure seamless food
					delivery.
				</li>
			</ul>
		</div>

		<div class="mb-6">
			<h2 class="text-lg font-semibold">Vendors</h2>
			<p>
				If you're a food vendor interested in using {COMPANY_NAME} to reach a wider audience and elevate
				your fair event experience, we'd love to partner with you. {COMPANY_NAME} provides you with the
				tools to manage your menu and receive orders efficiently. Responsibilities include:
			</p>
			<ul class="list-disc ml-6">
				<li>Manage your menu with real-time updates and item availability control</li>
				<li>Accept orders from fair attendees and provide a seamless dining experience</li>
				<li>Earn more by delivering food directly to RV spots at fair events</li>
			</ul>
		</div>

		<div class="mb-6">
			<h2 class="text-lg font-semibold">Runners</h2>
			<p>
				Are you interested in earning as a runner for {COMPANY_NAME}? Join our team and make deliveries
				around the fair to {COMPANY_NAME} users during fair events. If you enjoy staying active and want
				to be part of an exciting team, apply now. Responsibilities include:
			</p>
			<ul class="list-disc ml-6">
				<li>Accepting and fulfilling delivery requests from fair attendees</li>
				<li>Ensuring prompt and safe delivery of food and other items</li>
				<li>Earning competitive compensation for each delivery completed</li>
			</ul>
		</div>
	</div>
</body>
