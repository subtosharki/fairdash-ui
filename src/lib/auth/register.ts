import { API_URL } from '$lib/consts';

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
	if (asFairOrganizer) {
		endpoint += '?fairOrganizer=true';
	} else {
		endpoint += '?fairOrganizer=false';
	}
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
		throw new Error('Error registering user');
	}
	return ((await res.json()) as APIKeyResponse)['apikey'];
}
