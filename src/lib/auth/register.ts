import { API_URL } from '$lib/consts';
import type { APIKeyResponse } from '$lib/types';

export async function register(
	email: string,
	firstName: string,
	lastName: string,
	phoneNumber: string,
	password: string,
	confirmPassword: string,
	asFairOrganizer: boolean
) {
	let endpoint = `${API_URL}/auth/register`;
	if (asFairOrganizer) endpoint += '?fairOrganizer=true';
	let res;
	try {
		res = await fetch(endpoint, {
			method: 'POST',
			body: JSON.stringify({ email, firstName, lastName, phoneNumber, password, confirmPassword }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
	} catch (e) {
		console.error(e);
		throw e;
	}
	if (!res.ok) {
		console.error('Error registering users');
	}
	return ((await res.json()) as APIKeyResponse)['apikey'];
}
