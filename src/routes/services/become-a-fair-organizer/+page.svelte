<script lang="ts">
	import RegisterForm from '../../../components/auth/RegisterForm.svelte';
</script>

<svelte:head>
	<title>FairDash - Become an Organizer</title>
</svelte:head>

<div class="min-h-screen flex items-center justify-center bg-base-200">
	<div class="w-full max-w-screen-xl md:grid md:grid-cols-2 md:gap-8 p-4">
		<div class="p-6 bg-base-100 rounded-lg shadow-md mb-4 md:mb-0">
			<h1 class="text-3xl font-bold mb-6 text-accent-400 text-center">Become a Fair Organizer</h1>

			<div class="mb-6">
				<h2 class="text-xl font-semibold mb-3 text-accent-400">Why Choose FairDash?</h2>
				<p class="mb-3">
					FairDash is your perfect partner for a successful fair event! We provide a user-friendly
					platform that simplifies fair management and promotes your event to a wider audience.
				</p>
				<p class="mb-3">Here's why you should become a Fair Organizer:</p>
				<ol class="list-decimal list-inside pl-5">
					<li class="mb-2">
						Seamless Fair Management: FairDash streamlines fair organization, eliminating paperwork and simplifying processes. You can create, manage, and customize your fair events with ease.
					</li>
					<li class="mb-2">
						Wider Reach: Connect with more fairgoers and vendors, attracting a broader audience to your event. FairDash provides a platform to promote your fair and reach a larger, more diverse audience.
					</li>
					<li class="mb-2">
						Real-Time Control: Easily manage vendor registrations, RV spot assignments, and fair information in real-time. Make updates and adjustments as needed, ensuring your fair runs smoothly.
					</li>
					<li class="mb-2">
						Hassle-Free Vendor Management: Vendors have full control over their menus, simplifying coordination. Vendors can easily set up their offerings, making it a breeze for them to participate.
					</li>
					<li class="mb-2">
						Secure Payment Processing: We've integrated Stripe for secure and reliable payment transactions. Fairgoers and vendors can make payments with confidence, ensuring smooth financial transactions.
					</li>
					<li class="mb-2">
						User-Friendly Interface: FairDash offers an intuitive and user-friendly interface for both fair organizers and participants. You don't need to be a tech expert to use it effectively.
					</li>
					<li class="mb-2">
						Customizable Fair Events: Tailor your fair events to your specific needs. Create unique experiences that cater to your audience's interests and preferences.
					</li>
					<li class="mb-2">
						Mobile Accessibility: Access FairDash from anywhere, anytime. Our platform is optimized for mobile devices, so you can manage your fair on the go.
					</li>
				</ol>
			</div>
		</div>
		<RegisterForm asOrganizer={true} title="Signup as a Fair Organizer" class="w-full p-4 bg-white rounded-lg shadow-md" />
	</div>
</div>
