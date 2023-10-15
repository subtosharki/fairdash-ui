import { API_URL } from '$lib/consts';

export async function login(username: string, password: string) {
	let res;
	try {
		res = await fetch(`${API_URL}/auth/login`, {
			method: 'POST',
			body: JSON.stringify({ username, password }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
	} catch (e) {
		console.error(e);
		throw e;
	}
	if (!res.ok) {
		throw new Error('Invalid username or password');
	}
	return ((await res.json()) as APIKeyResponse)['apikey'];
}
