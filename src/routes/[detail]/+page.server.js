export const load = async (params) => {
	const res = await fetch('http://127.0.0.1:5000/working-permit');
	const data = res.json();

	console.log(params.params.detail);
	return {
		data: data
	};
};
