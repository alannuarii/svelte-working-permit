export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const formData = new FormData();
		formData.append('id_wp', data.get('id_wp'));
		formData.append('tanggal_pengajuan', data.get('tanggal_pengajuan'));
		formData.append('nama_pekerjaan', data.get('nama_pekerjaan'));
		formData.append('detail_pekerjaan', data.get('detail_pekerjaan'));
		formData.append('lokasi_pekerjaan', data.get('lokasi_pekerjaan'));
		formData.append('pengawas_pekerjaan', data.get('pengawas_pekerjaan'));
		formData.append('pengawas_k3', data.get('pengawas_k3'));
		formData.append('tanggal_mulai', data.get('tanggal_mulai'));
		formData.append('tanggal_selesai', data.get('tanggal_selesai'));
		formData.append('klasifikasi_pekerjaan', data.get('klasifikasi_pekerjaan'));
		formData.append('klasifikasi_lainnya', data.get('klasifikasi_lainnya'));
		formData.append('prosedur_pekerjaan', data.get('prosedur_pekerjaan'));
		formData.append('prosedur_lainnya', data.get('prosedur_lainnya'));
		formData.append('hirarc', data.get('hirarc'));
		formData.append('jsa', data.get('jsa'));
		formData.append('prosedur_kerja', data.get('prosedur_kerja'));
		formData.append('sertifikat', data.get('sertifikat'));

		const res = await fetch('http://127.0.0.1:5000/working-permit', {
			method: 'POST',
			// headers: '"Content-Type": "multipart/form-data"',
			body: formData
		});

		return await res.json();
	}
};
