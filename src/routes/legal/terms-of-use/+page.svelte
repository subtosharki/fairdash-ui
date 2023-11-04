<script lang="ts">
	import {COMPANY_NAME} from "$lib/consts";

	const terms = [
		{
			title: 'Acceptance of Terms',
			body: `By using ${COMPANY_NAME}, you affirm that you are of legal age and have the capacity to enter into this Agreement. You agree to comply with all applicable laws and regulations while using ${COMPANY_NAME}.`
		},
		{
			title: 'User Accounts',
			body: `To access certain features of ${COMPANY_NAME}, you may be required to register a users account. You are responsible for maintaining the confidentiality of your account credentials. You agree to provide accurate, current, and complete information during the registration process. ${COMPANY_NAME} reserves the right to suspend or terminate your account if you violate these terms or engage in any unlawful or inappropriate conduct.`
		},
		{
			title: 'Fair Owners and Vendors',
			body: `Fair owners and vendors using ${COMPANY_NAME} must agree to additional terms and conditions that govern their use of the platform. Fair owners are responsible for the content they post on ${COMPANY_NAME}, including fairs event information and vendor listings. Vendors have control over their menu and availability and must adhere to ${COMPANY_NAME}'s policies.`
		},
		{
			title: 'Intellectual Property',
			body: `${COMPANY_NAME} and its content, including logos, trademarks, and software, are protected by intellectual property laws. You may not use or reproduce them without prior written consent.`
		},
		{
			title: 'User Content',
			body: `Users may submit content, including reviews, comments, and ratings. You are solely responsible for the content you submit. ${COMPANY_NAME} may remove or edit users content that violates these terms or is deemed inappropriate.`
		},
		{
			title: 'Privacy',
			body: `${COMPANY_NAME}'s privacy practices are outlined in our Privacy Policy, which is an integral part of this Agreement.`
		},
		{
			title: 'Disclaimers and Limitation of Liability',
			body: `${COMPANY_NAME} is provided "as is" without warranties of any kind, either express or implied. ${COMPANY_NAME} is not responsible for the actions or conduct of users, fairs owners, vendors, or third parties. ${COMPANY_NAME} is not liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of the platform.`
		},
		{
			title: 'Termination',
			body: `${COMPANY_NAME} reserves the right to terminate or suspend your access to the platform at any time without notice.`
		},
		{
			title: 'Changes to Terms',
			body: `${COMPANY_NAME} may update these terms at any time, and such changes will be effective upon posting on the platform. It is your responsibility to review the terms periodically to stay informed of any updates.`
		},
		{
			title: 'Governing Law',
			body: 'This Agreement is governed by and construed in accordance with the laws of [Your Jurisdiction].'
		},
		{
			title: 'Contact Information',
			body: 'If you have any questions or concerns about these terms, please contact us at [Your Contact Email].'
		}
	];
</script>

<svelte:head>
	<title>Terms of Use</title>
</svelte:head>

<div class="bg-base-200">
	<div class="container mx-auto py-6">
		<h1 class="text-3xl font-semibold mb-6">Terms of Use Agreement</h1>
		{#each terms as term, i}
			<section class="mb-8">
				<h2 class="text-xl font-semibold mb-4">{i + 1}. {term.title}</h2>
				<p>{term.body}</p>
			</section>
		{/each}
	</div>
</div>
