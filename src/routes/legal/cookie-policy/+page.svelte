<script lang="ts">
	const policies = [
		{
			title: 'Introduction',
			body: 'This Cookie Policy explains what cookies are and how they are used by [Your Website Name] ("we," "us," or "our"). Please read this policy carefully to understand how we use cookies on our website.'
		},
		{
			title: 'What Are Cookies',
			body: 'Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently and to provide a better users experience. Cookies can be temporary (session cookies) or permanent (persistent cookies).'
		},
		{
			title: 'Types of Cookies We Use',
			body: "We use the following types of cookies on our website:\n\nNecessary Cookies: These cookies are essential for the basic functionality of our website. They are necessary for tasks such as users authentication and session management.\nPreference Cookies: These cookies are used to remember your preferences and settings.\nStatistical or Analytical Cookies: We use these cookies to collect information about how you interact with our website. This data helps us improve our website's content and users experience.\nMarketing or Advertising Cookies: These cookies are used to deliver personalized advertising content based on your interests and online behavior."
		},
		{
			title: 'Why We Use Cookies',
			body: 'We use cookies for the following purposes:\n\nTo ensure our website functions correctly.\nTo remember your preferences and settings.\nTo analyze website traffic and usage.\nTo personalize your experience and show you relevant advertising.'
		},
		{
			title: 'Managing Cookies',
			body: 'You can control and manage cookies in your browser settings. You can delete cookies stored on your device and block cookies from being set. Please note that blocking cookies may affect your experience on our website.'
		},
		{
			title: 'Third-Party Cookies',
			body: 'Some cookies used on our website may be placed by third-party services, such as analytics providers or advertisers. These third parties may collect information about your online activities over time and across different websites. We recommend reviewing the privacy policies of these third-party services for more information on their cookie practices.'
		},
		{
			title: 'Changes to This Cookie Policy',
			body: 'We may update this Cookie Policy from time to time to reflect changes in our cookie practices. The "Last updated" date at the beginning of this policy will be updated accordingly.'
		},
		{
			title: 'Contact Us',
			body: 'If you have any questions or concerns about our use of cookies, please contact us at [Your Contact Email].'
		}
	];
</script>

<svelte:head>
	<title>Cookie Policy</title>
</svelte:head>

<body class="bg-base-200 p-6">
	<header class="text-center mb-8">
		<h1 class="text-3xl font-semibold">Cookie Policy</h1>
		<p>Last updated: [Date]</p>
	</header>
	{#each policies as policy, i}
		<section class="bg-base-100 rounded-lg shadow-md p-6 mb-6">
			<h2 class="text-xl mb-4">{i + 1}. {policy.title}</h2>
			<p>{policy.body}</p>
		</section>
	{/each}
</body>
