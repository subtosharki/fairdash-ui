<script lang="ts">
	const footers = {
		services: [
			{
				href: '/services/upcoming-fairs',
				text: 'Upcoming Fairs'
			},
			{
				href: '/services/food-delivery',
				text: 'Food Delivery'
			},
			{
				href: '/services/become-a-fair-owner',
				text: 'Become a Fair Owner'
			},
			{
				href: '/services/runner-application',
				text: 'Runner Application'
			}
		],
		company: [
			{
				href: '/company/about-us',
				text: 'About Us'
			},
			{
				href: '/company/contact',
				text: 'Contact'
			},
			{
				href: '/company/jobs',
				text: 'Jobs'
			},
			{
				href: '/company/faqs',
				text: 'FAQs'
			}
		],
		legal: [
			{
				href: '/legal/terms-of-use',
				text: 'Terms of Use'
			},
			{
				href: '/legal/privacy-policy',
				text: 'Privacy Policy'
			},
			{
				href: '/legal/cookie-policy',
				text: 'Cookie Policy'
			}
		]
	};
</script>

<footer class="footer p-10 bg-base-100 text-base-content">
	{#each Object.keys(footers) as footer}
		<nav>
			<header class="footer-title">{footer}</header>
			{#each footers[footer] as { href, text }}
				<a class="link link-hover" {href}>{text}</a>
			{/each}
		</nav>
	{/each}
</footer>
