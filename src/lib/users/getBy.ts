import type { GetUserModes, User } from '$lib/types';
import { API_URL } from '$lib/consts';

export async function getUserBy(mode: GetUserModes, src: string) {
	let res,
		endpoint = `${API_URL}/users/${mode}`;
	if (mode !== 'apikey') {
		endpoint += `/${src}`;
	}
	try {
		res = await fetch(endpoint, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
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
