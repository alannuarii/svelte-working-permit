import { redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();

		const formData = new FormData();
		formData.append('email', data.get('email'));
		formData.append('password', data.get('password'));

		const res = await fetch('http://127.0.0.1:5000/login', {
			method: 'POST',
			body: formData
		});

		const result = await res.json();

		if (!!result.access_token) {
			cookies.set('accessToken', result.access_token, { path: '/', sameSite: 'strict' });
			throw redirect(302, '/');
		}

		// console.log(!!result.access_token);

		// return await res.json();
	}
};
