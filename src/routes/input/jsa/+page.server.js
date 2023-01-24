export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const formData = new FormData();
		formData.append('tahap_pekerjaan', data.get('tahap_pekerjaan'));
		formData.append('potensi_risiko', data.get('potensi_risiko'));
		formData.append('pengendalian_risiko', data.get('pengendalian_risiko'));

		const res = await fetch('http://127.0.0.1:5000/jsa', {
			method: 'POST',
			body: formData
		});

		return await res.json();
	}
};
