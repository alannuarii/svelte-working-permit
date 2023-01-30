export const load = async (params) => {
	const id = params.params.detail;
	const getWP = async () => {
		const res = await fetch(`http://127.0.0.1:5000/working-permit/${id}`);
		const data = res.json();
		return data;
	};

	const getJSA = async () => {
		const res = await fetch(`http://127.0.0.1:5000/jsa/${id}`);
		const data = res.json();
		return data;
	};

	return {
		wp: getWP(),
		jsa: getJSA()
	};
};
