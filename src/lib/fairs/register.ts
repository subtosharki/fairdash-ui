import { API_URL } from '$lib/consts';
import type { FairRegistration } from '$lib/types';

export async function registerFair(fair: FairRegistration, apikey: string) {
	let res;
	try {
		res = await fetch(`${API_URL}/fairs/register`, {
			method: 'POST',
			body: JSON.stringify(fair),
			headers: {
				'Content-Type': 'application/json',
				'x-api-key': apikey
			}
		});
	} catch (e) {
		console.error(e);
		throw e;
	}
	if (!res.ok) {
		console.error('Error creating fairs');
	}
	return (await res.json()) as FairRegistration;
}
