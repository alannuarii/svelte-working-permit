export function waktu(tanggal) {
	const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
	const months = [
		'Januari',
		'Februari',
		'Maret',
		'April',
		'Mei',
		'Juni',
		'Juli',
		'Agustus',
		'September',
		'Oktober',
		'November',
		'Desember'
	];
	const day = days[new Date(tanggal).getDay()];
	const date = tanggal.slice(8);
	const month = months[new Date(tanggal).getMonth()];
	const year = tanggal.slice(0, 4);

	return `${day}, ${date} ${month} ${year}`;
}

export function konversiWaktu(tanggal){
	const date = new Date(tanggal)
	const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	const result = date.toLocaleDateString('id-ID', options)
	return result
}
