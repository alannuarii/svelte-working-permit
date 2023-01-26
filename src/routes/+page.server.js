export const load = async () => {
	const res = await fetch('http://127.0.0.1:5000/working-permit');
	const data = res.json();

	return {
		wp: data
	};
};
