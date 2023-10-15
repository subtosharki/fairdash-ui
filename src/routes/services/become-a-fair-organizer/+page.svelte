<script lang="ts">
	import RegisterForm from '../../../components/auth/RegisterForm.svelte';
</script>

<svelte:head>
	<title>FairDash - Become an Organizer</title>
</svelte:head>

<div class="min-h-screen flex items-center justify-center bg-base-200">
	<div class="w-full max-w-md">
		<div class="p-6 rounded-lg">
			<h1 class="text-2xl font-bold mb-6 text-center">Become a Fair Organizer</h1>

			<h2 class="text-xl font-semibold mb-3">Why Choose FairDash?</h2>
			<p class="mb-3">
				FairDash is your perfect partner for a successful fair event! We provide a user-friendly
				platform that simplifies fair management and promotes your event to a wider audience.
			</p>
			<p class="mb-3">Here's why you should become a Fair Organizer:</p>
			<ol class="list-disc list-inside pl-5">
				<li class="mb-2">
					Seamless Fair Management: FairDash streamlines fair organization, eliminating paperwork
					and simplifying processes.
				</li>
				<li class="mb-2">
					Wider Reach: Connect with more fairgoers and vendors, attracting a broader audience to
					your event.
				</li>
				<li class="mb-2">
					Real-Time Control: Easily manage vendor registrations, RV spot assignments, and fair
					information in real-time.
				</li>
				<li class="mb-2">
					Hassle-Free Vendor Management: Vendors have full control over their menus, simplifying
					coordination.
				</li>
				<li class="mb-2">
					Secure Payment Processing: We've integrated Stripe for secure and reliable payment
					transactions.
				</li>
			</ol>
			<RegisterForm asOrganizer={true} />
		</div>
	</div>
</div>
