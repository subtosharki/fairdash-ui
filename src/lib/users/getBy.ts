import type {GetUserModes, User} from '$lib/types';
import { API_URL } from '$lib/consts';

export async function getUserBy(mode: GetUserModes, src: string) {
	let res;
	try {
		res = await fetch(`${API_URL}/user/${mode}/${src}`, {
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
