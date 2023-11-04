<script lang="ts">
	import {COMPANY_NAME} from "$lib/consts";
</script>

<svelte:head>
	<title>{COMPANY_NAME} - Contact Us</title>
</svelte:head>

<div class="min-h-screen flex items-center justify-center bg-base-200">
	<div class="w-full max-w-md">
		<div class="bg-base-100 p-6 rounded-lg shadow-lg">
			<h1 class="text-2xl font-bold mb-6">Contact Us</h1>
			<p class="text-base mb-6">
				Got questions, feedback, or just want to chat with us? We're here to help! Fill out the form
				below, and we'll get back to you as soon as possible.
			</p>

			<form>
				<div class="mb-4">
					<label class="text-sm" for="fullName">Full Name</label>
					<input class="input" type="text" id="fullName" placeholder="John Doe" />
				</div>

				<div class="mb-4">
					<label class="text-sm" for="email">Email</label>
					<input class="input" type="email" id="email" placeholder="email@example.com" />
				</div>

				<div class="mb-4">
					<label class="text-sm" for="phoneNumber">Phone Number</label>
					<input class="input" type="tel" id="phoneNumber" placeholder="+1 (234) 567 890" />
				</div>

				<div class="mb-4">
					<label class="text-sm" for="subject">Subject</label>
					<input class="input" type="text" id="subject" placeholder="Subject" />
				</div>

				<div class="mb-4">
					<label class="text-sm" for="message">Message</label>
					<textarea
						class="textarea"
						id="message"
						rows="4"
						placeholder="Type your message here"
						required
					/>
				</div>

				<div class="mb-6">
					<button class="btn btn-primary">Send Message</button>
				</div>
			</form>
		</div>
	</div>
</div>
