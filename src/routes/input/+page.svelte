<script>
	import PageTitle from '../components/PageTitle.svelte';

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

	let lainnya1 = false;
	let lainnya2 = false;
	let hirarc = false;
	let jsa = false;
	let prosedur = false;
	let sertifikat = false;
</script>

<section class="container mt-3">
	<PageTitle title='buat working permit' />
	<form action="">
		<div class="row">
			<div class="col-lg-6">
				<div class="card py-3 px-lg-5 px-4 rounded-0 shadow border-0 mb-3">
					<h6 class="text-primary-emphasis mb-3">A. Informasi Pekerjaan</h6>
					<div class="mb-2">
						<label for="exampleFormControlInput1" class="form-label">Tanggal Pengajuan</label>
						<input type="date" class="form-control" />
					</div>
					<div class="mb-2">
						<label for="exampleFormControlInput1" class="form-label">Nama Pekerjaan</label>
						<input type="text" class="form-control" />
					</div>
					<div class="mb-2">
						<label for="exampleFormControlInput1" class="form-label">Detail Pekerjaan</label>
						<input type="text" class="form-control" />
					</div>
					<div class="mb-2">
						<label for="exampleFormControlInput1" class="form-label">Lokasi Pekerjaan</label>
						<input type="text" class="form-control" />
					</div>
					<div class="mb-2">
						<label for="exampleFormControlInput1" class="form-label">Pengawas Pekerjaan</label>
						<input type="text" class="form-control" />
					</div>
					<div class="mb-2">
						<label for="exampleFormControlInput1" class="form-label">Pengawas K3</label>
						<input type="text" class="form-control" />
					</div>
				</div>
				<div class="card py-3 px-lg-5 px-4 rounded-0 shadow border-0 mb-3">
					<h6 class="text-primary-emphasis mb-3">B. Durasi Pekerjaan</h6>
					<div class="row mb-2">
						<div class="col-lg-6">
							<label for="exampleFormControlInput1" class="form-label">Tanggal Mulai</label>
							<input type="datetime-local" class="form-control" />
						</div>
						<div class="col-lg-6">
							<label for="exampleFormControlInput1" class="form-label">Tanggal Selesai</label>
							<input type="datetime-local" class="form-control" />
						</div>
					</div>
				</div>
				<div class="card py-3 px-lg-5 px-4 rounded-0 shadow border-0">
					<h6 class="text-primary-emphasis mb-3">C. Klasifikasi Pekerjaan</h6>
					<div class="row mb-2">
						<div class="col-lg-4">
							{#each column1 as column}
								<div class="form-check mb-2">
									<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
									<label class="form-check-label" for="flexCheckDefault"> {column} </label>
								</div>
							{/each}
						</div>
						<div class="col-lg-4">
							{#each column2 as column}
								<div class="form-check mb-2">
									<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
									<label class="form-check-label" for="flexCheckDefault"> {column} </label>
								</div>
							{/each}
						</div>
						<div class="col-lg-4">
							{#each column3 as column}
								<div class="form-check mb-2">
									<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
									<label class="form-check-label" for="flexCheckDefault"> {column} </label>
								</div>
							{/each}
						</div>
					</div>
					<div class="row">
						<div class="col-lg-2 d-flex align-self-center">
							<div class="form-check">
								<input
									class="form-check-input"
									type="checkbox"
									value=""
									id="flexCheckDefault"
									bind:checked={lainnya1}
								/>
								<label class="form-check-label" for="flexCheckDefault"> Lainnya </label>
							</div>
						</div>
						<div class="col-lg">
							<input class="form-control" type="text" disabled={!lainnya1} />
						</div>
					</div>
				</div>
			</div>
			<div class="col-lg-6">
				<div class="card py-3 px-lg-5 px-4 rounded-0 shadow border-0 mb-3">
					<h6 class="text-primary-emphasis mb-3">
						D. Prosedur Pekerjaan yang Telah Dijelaskan kepada Pekerja
					</h6>
					<div class="row mb-2">
						<div class="col-lg-6">
							{#each column4 as column}
								<div class="form-check mb-2">
									<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
									<label class="form-check-label" for="flexCheckDefault"> {column} </label>
								</div>
							{/each}
						</div>
						<div class="col-lg-6">
							{#each column5 as column}
								<div class="form-check mb-2">
									<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
									<label class="form-check-label" for="flexCheckDefault"> {column} </label>
								</div>
							{/each}
						</div>
					</div>
					<div class="row">
						<div class="col-lg-2 d-flex align-self-center">
							<div class="form-check">
								<input
									class="form-check-input"
									type="checkbox"
									value=""
									id="flexCheckDefault"
									bind:checked={lainnya2}
								/>
								<label class="form-check-label" for="flexCheckDefault"> Lainnya </label>
							</div>
						</div>
						<div class="col-lg">
							<input class="form-control" type="text" disabled={!lainnya2} />
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
							<input class:d-none={!hirarc} class="form-control" type="file" />
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
							<input class="form-control" type="file" class:d-none={!jsa} />
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
							<input class="form-control" type="file" class:d-none={!prosedur} />
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
							<input class="form-control" type="file" class:d-none={!sertifikat} />
						</div>
					</div>
					<hr />
					<a href="/input/jsa" class="btn btn-secondary rounded-0">Buat JSA</a>
				</div>
				<div class="d-flex justify-content-center mt-4">
					<button class="btn btn-outline-secondary w-25" type="reset">Reset</button>
					<button class="btn btn-primary w-25" type="submit">Kirim</button>
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
</style>
