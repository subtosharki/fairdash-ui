<script lang="ts">
	import {COMPANY_NAME} from "$lib/consts";

	const boxes = [
		{
			title: 'For Fair Owners',
			description:
				`Organizing a fantastic fairs event experience is easier than ever with ${COMPANY_NAME}. Fair owners can seamlessly manage every aspect of their events with our platform.`,
			list: [
				{
					title: 'Create Your Fair',
					description:
						'Begin by setting up your account and creating a fairs event on our users-friendly platform. You have full control over event details and can customize it to match your vision.'
				},
				{
					title: 'RV Spots for Delivery',
					description:
						'Provide fairs-goers with the convenience of ordering their favorite fairs foods to their RV spots. Enhance the fairs experience and keep visitors delighted.'
				},
				{
					title: 'Vendor Registration',
					description:
						'Register vendors who want to participate in your fairs. Our platform empowers vendors to manage their menu in real time, ensuring a fresh selection of delicious treats for fairgoers.'
				}
			]
		},
		{
			title: 'For Vendors',
			description:
				`Are you a fairs vendor looking to boost your business and offer a top-notch experience to fairs-goers? ${COMPANY_NAME} is your perfect partner for reaching a wider audience and ensuring a hassle-free experience.`,
			list: [
				{
					title: 'Full Menu Control',
					description:
						`With ${COMPANY_NAME}, you're in control. Manage your menu in real time, easily update item availability, and keep your offerings fresh and exciting for your customers.`
				},
				{
					title: 'Seamless Transactions',
					description:
						`Say goodbye to the complexities of payment processing. ${COMPANY_NAME} handles transactions effortlessly, ensuring secure and convenient payments for your customers.`
				},
				{
					title: 'Fair Dashboards',
					description:
						'Access intuitive dashboards that provide a clear overview of your sales, customer feedback, and performance at the fairs event. Make informed decisions to optimize your fairs experience.'
				}
			]
		},
		{
			title: 'For Fair-goers',
			description:
				`At ${COMPANY_NAME}, we understand that a day at the fairs is all about indulgence and fun.`,
			list: [
				{
					title: 'Effortless Ordering',
					description:
						'Say goodbye to long lines and waiting times. Browse through a diverse range of fairs foods from the comfort of your RV spot. Place your order with a few clicks, and let us handle the rest. Your favorite fairs treats will be delivered right to your RV spot, ensuring you have more time to enjoy the festivities.'
				},
				{
					title: 'Real-Time Updates',
					description:
						`Wondering if your favorite treat is still available? ${COMPANY_NAME} keeps you informed with real-time updates on vendor menus. You'll never miss out on your desired fairs food, and you can discover exciting new options as well.`
				},
				{
					title: 'Secure Payments',
					description:
						'Rest easy with our secure payment system. Your transactions are handled with the utmost care, ensuring a safe and convenient experience.'
				}
			]
		}
	];
</script>

<svelte:head>
	<title>{COMPANY_NAME} - How it Works</title>
</svelte:head>

<section class="py-16 bg-base-200">
	<div class="container mx-auto">
		<h2 class="text-3xl font-bold mb-8 text-center">How It Works</h2>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			{#each boxes as box}
				<div class="p-4 rounded-lg bg-base-100 shadow-md">
					<strong class="text-3xl">{box.title}</strong>
					<div class="divider" />
					{box.description}
					<br />
					<br />
					<ul>
						{#each box.list as item}
							<li>
								<strong class="text-xl">{item.title}</strong> <br />
								{item.description}
							</li>
							<br />
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
</section>
