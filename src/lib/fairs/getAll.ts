import { API_URL } from '$lib/consts';
import type { Fair } from '$lib/types';

export async function getALlFairs(ownerId?: string) {
	let res;
	try {
		res = await fetch(`${API_URL}/fairs`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				id: ownerId ?? ''
			})
		});
	} catch (e) {
		console.error(e);
		throw e;
	}
	if (res.status === 200) {
		return (await res.json())['fairs'] as Fair[];
	} else {
		return undefined;
	}
}