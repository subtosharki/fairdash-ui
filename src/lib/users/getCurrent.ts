import { API_URL, ENCRYPTION_KEY } from '$lib/consts';
import { AES } from 'crypto-js';
import type { User } from '$lib/types';

export async function getCurrentUser(apikey: string) {
	let res;
	try {
		res = await fetch(`${API_URL}/user`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'x-api-key': await AES.decrypt(apikey, ENCRYPTION_KEY).toString()
			}
		});
	} catch (e) {
		console.error(e);
		throw e;
	}
	if (res.status === 200) {
		return (await res.json()) as User;
	} else {
		return undefined;
	}
}
