<script>
	import HowItWorks from '../components/HowItWorks.svelte';
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<div class="container mx-auto py-12 text-center">
			<h1 class="text-4xl font-bold mb-4">Welcome to FairDash</h1>
			<p class="text-lg mb-8">Elevating Fair Event Dining!</p>
			<div class="max-w-4xl mx-auto">
				<p class="text-2xl">
					At FairDash, we've taken the joy of fairground cuisine to a whole new level. Imagine a
					seamless fusion of the vibrant fair experience and the convenience of DoorDash, all
					brought together in one platform. We are excited to introduce you to the future of fair
					event food delivery.
				</p>
			</div>
		</div>
		<HowItWorks />
		<section class="py-16">
			<div class="container mx-auto">
				<h2 class="text-3xl font-bold mb-8 text-center">Join Us as a Runner</h2>
				<div class="max-w-2xl mx-auto">
					<p class="text-xl">
						Do you have a passion for delivering joy through food and want to be part of the
						FairDash team? You can play a crucial role in enhancing fair-goers experiences. <a
							href="/register?signupAs=runner"
							class="underline">Click here to apply as a runner</a
						>, and your applications will be promptly reviewed for potential opportunities. Join us
						in bringing the thrill of fair event dining straight to people's RV spots!
					</p>
				</div>
			</div>
		</section>
	</div>
</div>
