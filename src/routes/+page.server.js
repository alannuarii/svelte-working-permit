import { redirect } from "@sveltejs/kit";

export const load = async ({cookies}) => {
	const token = cookies.get('accessToken');
	if (!token) {
		throw redirect(302, '/login');
	}
	const res = await fetch('http://127.0.0.1:5000/working-permit');
	const data = res.json();

	return {
		wp: data
	};
};
