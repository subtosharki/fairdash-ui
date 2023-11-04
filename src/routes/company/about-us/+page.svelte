<script lang="ts">
import {COMPANY_NAME} from "$lib/consts";
</script>

<svelte:head>
	<title>About Us</title>
</svelte:head>

<div class="bg-base-200">
	<div class="container mx-auto py-6">
		<h1 class="text-3xl font-semibold mb-6">About Us</h1>

		<div class="mb-8">
			<h2 class="text-xl font-semibold mb-4">Our Mission</h2>
			<p>
				At {COMPANY_NAME}, our mission is to revolutionize the fair event dining experience. We believe
				that everyone should have access to a wide variety of delicious fairground cuisine
				conveniently delivered to their RV spot. We strive to make fair events even more enjoyable
				by combining the vibrant fair atmosphere with the ease of food delivery.
			</p>
		</div>

		<div class="mb-8">
			<h2 class="text-xl font-semibold mb-4">Our Team</h2>
			<p>
				{COMPANY_NAME} is powered by a dedicated team of individuals who are passionate about creating
				memorable fair experiences. Our team includes:
			</p>
			<ul class="list-disc ml-6">
				<li>Food enthusiasts who curate our diverse fair menus</li>
				<li>Designers who craft delightful user experiences</li>
				<li>Customer support experts who ensure your satisfaction</li>
				<li>Developers who build and maintain our platform</li>
			</ul>
		</div>

		<div class="mb-8">
			<h2 class="text-xl font-semibold mb-4">Our Story</h2>
			<p>
				{COMPANY_NAME} was founded in [Year] by a group of fair enthusiasts who saw an opportunity to
				enhance the fair experience. Since then, we've been on a journey to connect fairgoers with
				their favorite fair foods without the hassle of long lines. Our commitment to innovation and
				customer satisfaction drives us every day.
			</p>
		</div>

		<div class="mb-8">
			<h2 class="text-xl font-semibold mb-4">Our Values</h2>
			<p>Our core values are at the heart of everything we do:</p>
			<ul class="list-disc ml-6">
				<li>Customer-Centricity: We prioritize your satisfaction above all else.</li>
				<li>Innovation: We continuously seek new ways to improve your fair experience.</li>
				<li>Quality: We are committed to delivering the best fairground cuisine.</li>
				<li>Community: We embrace the fairgoer and vendor community that makes it all possible.</li>
			</ul>
		</div>

		<div>
			<h2 class="text-xl font-semibold mb-4">Contact Us</h2>
			<p>
				If you have any questions or would like to share your feedback, please don't hesitate to
				reach out to us:
			</p>
			<ul class="list-disc ml-6">
				<li>Email: [Your Contact Email]</li>
				<li>Phone: [Your Contact Phone Number]</li>
			</ul>
		</div>
	</div>
</div>
