<script>
	import PrimaryButton from '../../../components/buttons/PrimaryButton.svelte';
</script>

<svelte:head>
	<title>FairDash - Contact Us</title>
</svelte:head>

<div class="min-h-screen flex items-center justify-center bg-base-200">
	<div class="w-full max-w-md">
		<div class="bg-base-100 p-6 rounded-lg shadow-lg">
			<h1 class="text-2xl font-bold mb-6">Contact Us</h1>
			<p>
				Got questions, feedback, or just want to chat with us? We're here to help! Fill out the form
				below, and we'll get back to you as soon as possible.
			</p>

			<div class="mb-6">
				<span>Full Name</span>
				<input class="input" type="text" placeholder="John Doe" />
			</div>

			<div class="mb-6">
				<span>Email</span>
				<input class="input" type="text" placeholder="email@example.com" />
			</div>

			<div class="mb-6">
				<span>Phone Number</span>
				<input class="input" type="text" placeholder="+1 (234) 567 890" />
			</div>

			<div class="mb-6">
				<span>Subject</span>
				<input class="input" type="text" placeholder="Subject" />
			</div>

			<div class="mb-6">
				<label for="message">Message</label>
				<textarea class="textarea" rows="4" placeholder="Type your message here" required />
			</div>

			<div class="mb-6">
				<PrimaryButton>Send Message</PrimaryButton>
			</div>
		</div>
	</div>
</div>
