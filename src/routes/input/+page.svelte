<script>
	import PageTitle from '../components/PageTitle.svelte';
	import { onMount } from 'svelte';

	const column1 = ['Kelistrikan', 'Instrumentasi', 'Pipanisasi', 'Pengelasan', 'Konstruksi'];
	const column2 = ['Pengecetan', 'Isolasi', 'Penyetelan', 'Perakitan', 'Pekerjaan PVC'];
	const column3 = [
		'Pemeriksaan/Inspeksi',
		'Pekerjaan di tempat tertutup',
		'Pemasangan',
		'Penggalian',
		'Pabrikasi'
	];
	const column4 = ['Ledakan', 'Kebakaran', 'Radioaktif', 'H2S', 'Listrik'];
	const column5 = ['Mekanik', 'Ketinggian', 'Kebisingan', 'Panas', 'Tekanan'];

	let data = {
		tanggal_pengajuan: '',
		nama_pekerjaan: '',
		detail_pekerjaan: '',
		lokasi_pekerjaan: '',
		pengawas_pekerjaan: '',
		pengawas_k3: ''
	};
	let hirarc = false;
	let jsa = false;
	let prosedur = false;
	let sertifikat = false;

	let klasifikasi = [];
	let prosedurPekerjaan = [];

	const checkLocalStorage = () => {
		const storedData = localStorage.getItem('working-permit');
		if (storedData) {
			data = JSON.parse(storedData);
		}
	};

	const handleKlasifikasi = (event) => {
		let value = event.target.value;
		if (event.target.checked) {
			klasifikasi.push(value);
			klasifikasi = [...klasifikasi];
		} else {
			let index = klasifikasi.indexOf(value);
			klasifikasi.splice(index, 1);
			klasifikasi = [...klasifikasi];
		}
	};

	const handleProsedur = (event) => {
		let value = event.target.value;
		if (event.target.checked) {
			prosedurPekerjaan.push(value);
			prosedurPekerjaan = [...prosedurPekerjaan];
		} else {
			let index = prosedurPekerjaan.indexOf(value);
			prosedurPekerjaan.splice(index, 1);
			prosedurPekerjaan = [...prosedurPekerjaan];
		}
	};

	const saveLocalStorage = () => {
		localStorage.setItem('working-permit', JSON.stringify(data));
	};

	const deleteLocalStorage = () => {
		localStorage.removeItem('working-permit');
	};

	$: checkData = !Object.values(data).some((val) => val === '');
	$: console.log(prosedurPekerjaan);

	onMount(() => {
		checkLocalStorage();
	});
</script>

<section class="container mt-3">
	<PageTitle title="buat working permit" />
	<form method="POST" enctype="multipart/form-data">
		<div class="row">
			<div class="col-lg-6 mb-3">
				<div class="card py-3 px-lg-5 px-4 rounded-0 shadow border-0 mb-3">
					<h6 class="text-primary-emphasis mb-3">A. Informasi Pekerjaan</h6>
					<div class="mb-2">
						<label for="exampleFormControlInput1" class="form-label"
							>Tanggal Pengajuan <strong class="text-danger">*</strong></label
						>
						<input
							type="date"
							class="form-control"
							name="tanggal_pengajuan"
							bind:value={data.tanggal_pengajuan}
							required
						/>
					</div>
					<div class="mb-2">
						<label for="exampleFormControlInput1" class="form-label"
							>Nama Pekerjaan <strong class="text-danger">*</strong></label
						>
						<input
							type="text"
							class="form-control"
							id="nama-pekerjaan"
							name="nama_pekerjaan"
							bind:value={data.nama_pekerjaan}
							required
						/>
					</div>
					<div class="mb-2">
						<label for="exampleFormControlInput1" class="form-label"
							>Detail Pekerjaan <strong class="text-danger">*</strong></label
						>
						<input
							type="text"
							class="form-control"
							name="detail_pekerjaan"
							bind:value={data.detail_pekerjaan}
							required
						/>
					</div>
					<div class="mb-2">
						<label for="exampleFormControlInput1" class="form-label"
							>Lokasi Pekerjaan <strong class="text-danger">*</strong></label
						>
						<input
							type="text"
							class="form-control"
							name="lokasi_pekerjaan"
							bind:value={data.lokasi_pekerjaan}
						/>
					</div>
					<div class="mb-2">
						<label for="exampleFormControlInput1" class="form-label"
							>Pengawas Pekerjaan <strong class="text-danger">*</strong></label
						>
						<input
							type="text"
							class="form-control"
							name="pengawas_pekerjaan"
							bind:value={data.pengawas_pekerjaan}
						/>
					</div>
					<div class="mb-2">
						<label for="exampleFormControlInput1" class="form-label"
							>Pengawas K3 <strong class="text-danger">*</strong></label
						>
						<input
							type="text"
							class="form-control"
							name="pangawas_k3"
							bind:value={data.pengawas_k3}
						/>
					</div>
				</div>
				<div class="card py-3 px-lg-5 px-4 rounded-0 shadow border-0 mb-3">
					<h6 class="text-primary-emphasis mb-3">B. Durasi Pekerjaan</h6>
					<div class="row mb-2">
						<div class="col-lg-6">
							<label for="exampleFormControlInput1" class="form-label">Tanggal Mulai</label>
							<input type="datetime-local" class="form-control" name="tanggal_mulai" />
						</div>
						<div class="col-lg-6">
							<label for="exampleFormControlInput1" class="form-label">Tanggal Selesai</label>
							<input type="datetime-local" class="form-control" name="tanggal_selesai" />
						</div>
					</div>
				</div>
				<div class="card py-3 px-lg-5 px-4 rounded-0 shadow border-0">
					<h6 class="text-primary-emphasis mb-3">C. Klasifikasi Pekerjaan</h6>
					<div class="row">
						<div class="col-lg-4">
							{#each column1 as column}
								<div class="form-check mb-2">
									<input
										class="form-check-input"
										type="checkbox"
										value={column}
										id="flexCheckDefault"
										on:change={handleKlasifikasi}
									/>
									<label class="form-check-label" for="flexCheckDefault"> {column} </label>
								</div>
							{/each}
						</div>
						<div class="col-lg-4">
							{#each column2 as column}
								<div class="form-check mb-2">
									<input
										class="form-check-input"
										type="checkbox"
										value={column}
										id="flexCheckDefault"
										on:change={handleKlasifikasi}
									/>
									<label class="form-check-label" for="flexCheckDefault"> {column} </label>
								</div>
							{/each}
						</div>
						<div class="col-lg-4">
							{#each column3 as column}
								<div class="form-check mb-2">
									<input
										class="form-check-input"
										type="checkbox"
										value={column}
										id="flexCheckDefault"
										on:change={handleKlasifikasi}
									/>
									<label class="form-check-label" for="flexCheckDefault"> {column} </label>
								</div>
							{/each}
						</div>
					</div>
					<div class="row">
						<div class="col-lg-2 d-flex align-self-center">
							<label class="form-check-label" for="flexCheckDefault"> Lainnya </label>
						</div>
						<div class="col-lg">
							<input class="form-control" type="text" name="klasifikasi_lainnya" />
						</div>
					</div>
					<input type="hidden" name="klasifikasi_pekerjaan" value={klasifikasi} />
				</div>
			</div>
			<div class="col-lg-6">
				<div class="card py-3 px-lg-5 px-4 rounded-0 shadow border-0 mb-3">
					<h6 class="text-primary-emphasis mb-3">
						D. Prosedur Pekerjaan yang Telah Dijelaskan kepada Pekerja
					</h6>
					<div class="row">
						<div class="col-lg-6">
							{#each column4 as column}
								<div class="form-check mb-2">
									<input
										class="form-check-input"
										type="checkbox"
										value={column}
										id="flexCheckDefault"
										on:change={handleProsedur}
									/>
									<label class="form-check-label" for="flexCheckDefault"> {column} </label>
								</div>
							{/each}
						</div>
						<div class="col-lg-6">
							{#each column5 as column}
								<div class="form-check mb-2">
									<input
										class="form-check-input"
										type="checkbox"
										value={column}
										id="flexCheckDefault"
										on:change={handleProsedur}
									/>
									<label class="form-check-label" for="flexCheckDefault"> {column} </label>
								</div>
							{/each}
						</div>
					</div>
					<div class="row">
						<div class="col-lg-2 d-flex align-self-center">
							<label class="form-check-label" for="flexCheckDefault"> Lainnya </label>
						</div>
						<div class="col-lg">
							<input class="form-control" type="text" name="prosedur_pekerjaan" />
						</div>
					</div>
				</div>
				<div class="card py-3 px-lg-5 px-4 rounded-0 shadow border-0">
					<h6 class="text-primary-emphasis mb-3">E. Lampiran Izin Kerja</h6>
					<div class="row mb-2">
						<div class="col-lg-6 d-flex align-self-center">
							<div class="form-check">
								<input
									class="form-check-input"
									type="checkbox"
									value=""
									id="flexCheckDefault"
									bind:checked={hirarc}
								/>
								<label class="form-check-label" for="flexCheckDefault"> HIRARC </label>
							</div>
						</div>
						<div class="col-lg">
							<input class:d-none={!hirarc} class="form-control" name="hirarc" type="file" />
						</div>
					</div>
					<div class="row mb-2">
						<div class="col-lg-6 d-flex align-self-center">
							<div class="form-check">
								<input
									class="form-check-input"
									type="checkbox"
									value=""
									id="flexCheckDefault"
									bind:checked={jsa}
								/>
								<label class="form-check-label" for="flexCheckDefault"> JSA </label>
							</div>
						</div>
						<div class="col-lg">
							<input class="form-control" type="file" class:d-none={!jsa} name="jsa" />
						</div>
					</div>
					<div class="row mb-2">
						<div class="col-lg-6 d-flex align-self-center">
							<div class="form-check">
								<input
									class="form-check-input"
									type="checkbox"
									value=""
									id="flexCheckDefault"
									bind:checked={prosedur}
								/>
								<label class="form-check-label" for="flexCheckDefault"> Prosedur Kerja </label>
							</div>
						</div>
						<div class="col-lg">
							<input
								class="form-control"
								type="file"
								class:d-none={!prosedur}
								name="prosedur_kerja"
							/>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-6 d-flex align-self-center">
							<div class="form-check">
								<input
									class="form-check-input"
									type="checkbox"
									value=""
									id="flexCheckDefault"
									bind:checked={sertifikat}
								/>
								<label class="form-check-label" for="flexCheckDefault">
									Sertifikat Kompetensi Pekerja
								</label>
							</div>
						</div>
						<div class="col-lg">
							<input
								class="form-control"
								type="file"
								class:d-none={!sertifikat}
								name="sertifikat"
							/>
						</div>
					</div>
					<hr />
					<a
						href="/input/jsa"
						class="btn btn-secondary rounded-0"
						class:disabled={!checkData}
						on:click={saveLocalStorage}>Buat JSA</a
					>
					<h6 class="text-center fst-italic text-danger mt-1 syarat" class:d-none={checkData}>
						Isi informasi pekerjaan terlebihdahulu
					</h6>
				</div>
				<div class="d-flex justify-content-center mt-4">
					<button class="btn btn-outline-secondary w-25" type="reset" on:click={deleteLocalStorage}
						>Reset</button
					>
					<button class="btn btn-primary w-25" type="submit" on:click={deleteLocalStorage}
						>Kirim</button
					>
				</div>
			</div>
		</div>
	</form>
</section>

<style>
	label {
		font-size: 15px;
		font-weight: 300;
	}
	.form-control,
	button {
		border-radius: 0;
	}
	h6 {
		font-weight: 700;
	}
	.syarat {
		font-size: 12px;
		font-weight: 400;
	}
</style>
