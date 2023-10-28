import { API_URL } from '$lib/consts';

export async function login(email: string, password: string) {
	let res;
	try {
		res = await fetch(`${API_URL}/auth/login`, {
			method: 'POST',
			body: JSON.stringify({ email, password }),
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
	const json = await res.json();
	return [json['apikey'] as string, json['role'] as string, json['id']['$oid'] as string];
}
