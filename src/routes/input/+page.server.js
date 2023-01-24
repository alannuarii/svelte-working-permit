export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const klasifikasi = data.get('klasifikasi_pekerjaan');
		console.log(klasifikasi);

		const formData = new FormData();
		// formData.append('nama_pekerjaan', data.get('nama_pekerjaan'));
		formData.append('klasifikasi_pekerjaan', data.get('klasifikasi_pekerjaan'));
		formData.append('klasifikasi_lainnya', data.get('klasifikasi_lainnya'));
		// formData.append('hirarc', data.get('hirarc'));

		const res = await fetch('http://127.0.0.1:5000/working-permit', {
			method: 'POST',
			// headers: '"Content-Type": "multipart/form-data"',
			body: formData
		});

		return await res.json();
	}
};
