import { API_URL, ENCRYPTION_KEY } from '$lib/consts';
import type { FairRegistration } from '$lib/types';
import { AES } from 'crypto-js';

export async function registerFair(fair: FairRegistration, apikey: string) {
	let res;
	try {
		res = await fetch(`${API_URL}/fairs/register`, {
			method: 'POST',
			body: JSON.stringify(fair),
			headers: {
				'Content-Type': 'application/json',
				'x-api-key': await AES.decrypt(apikey, ENCRYPTION_KEY).toString()
			}
		});
	} catch (e) {
		console.error(e);
		throw e;
	}
	if (!res.ok) {
		throw new Error('Error creating fairs');
	}
	return (await res.json()) as FairRegistration;
}
