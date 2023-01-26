export const actions = {
	default: async ({ request, params }) => {
		const data = await request.formData();
		
		const formData = new FormData();
		const tahapPekerjaan = data.getAll('tahap_pekerjaan');
		for (let tahap of tahapPekerjaan) {
			formData.append('tahap_pekerjaan', tahap)
		}
		const potensiRisiko = data.getAll('potensi_risiko');
		for (let potensi of potensiRisiko) {
			formData.append('potensi_risiko', potensi)
		}
		const pengendalianRisiko = data.getAll('pengendalian_risiko');
		for (let pengendalian of pengendalianRisiko) {
			formData.append('pengendalian_risiko', pengendalian)
		}

		// formData.append('potensi_risiko', data.getAll('potensi_risiko'));
		// formData.append('pengendalian_risiko', data.getAll('pengendalian_risiko'));
		formData.append('wp_id', data.get('wp_id'));

		const res = await fetch('http://127.0.0.1:5000/jsa', {
			method: 'POST',
			body: formData
		});

		return await res.json();
	}
};
