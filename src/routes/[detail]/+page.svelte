<script>
	import PageTitle from '../components/PageTitle.svelte';
	import { date, datetime } from '../../lib/js/datetime';
	import ModalJsa from '../components/ModalJSA.svelte';

	export let data;

	const wp = data.wp.data[0];
	const jsa = data.jsa.data;

	console.log(jsa)

	const klasifikasi_pekerjaan = wp.klasifikasi_pekerjaan;
	const prosedur_pekerjaan = wp.prosedur_pekerjaan;

	const klasifikasi = klasifikasi_pekerjaan.split(',');
	const prosedur = prosedur_pekerjaan.split(',');

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

	const handleLampiran = (link) => {
		window.open(`http://localhost:5000/static/uploads/jsa/${link}`, '_blank');
	};
</script>

<section class="container mt-3">
	<PageTitle title={'working permit'} />
	<div class="card py-3 px-lg-5 px-4 rounded-0 shadow border-0">
		<div class="mb-3">
			<h4 class="mb-2">
				<span class="badge bg-primary-subtle text-primary rounded-0">A. INFORMASI PEKERJAAN</span>
			</h4>
			<div class="row mb-2">
				<label for="inputEmail3" class="col-sm-3 col-form-label">Tanggal Pengajuan</label>
				<div class="col-sm-9">
					<input
						type="text"
						class="form-control"
						id="inputEmail3"
						value={date(wp.tanggal_pengajuan)}
						disabled
					/>
				</div>
			</div>
			<div class="row mb-2">
				<label for="inputEmail3" class="col-sm-3 col-form-label">Nama Pekerjaan</label>
				<div class="col-sm-9">
					<input
						type="text"
						class="form-control"
						id="inputEmail3"
						value={wp.nama_pekerjaan}
						disabled
					/>
				</div>
			</div>
			<div class="row mb-2">
				<label for="inputEmail3" class="col-sm-3 col-form-label">Detail Pekerjaan</label>
				<div class="col-sm-9">
					<input
						type="text"
						class="form-control"
						id="inputEmail3"
						value={wp.detail_pekerjaan}
						disabled
					/>
				</div>
			</div>
			<div class="row mb-2">
				<label for="inputEmail3" class="col-sm-3 col-form-label">Lokasi Pekerjaan</label>
				<div class="col-sm-9">
					<input
						type="text"
						class="form-control"
						id="inputEmail3"
						value={wp.lokasi_pekerjaan}
						disabled
					/>
				</div>
			</div>
			<div class="row mb-2">
				<label for="inputEmail3" class="col-sm-3 col-form-label">Pengawas Pekerjaan</label>
				<div class="col-sm-9">
					<input
						type="text"
						class="form-control"
						id="inputEmail3"
						value={wp.pengawas_pekerjaan}
						disabled
					/>
				</div>
			</div>
			<div class="row mb-2">
				<label for="inputEmail3" class="col-sm-3 col-form-label">Pengawas K3</label>
				<div class="col-sm-9">
					<input
						type="text"
						class="form-control"
						id="inputEmail3"
						value={wp.pengawas_k3}
						disabled
					/>
				</div>
			</div>
		</div>
		<div class="mb-3">
			<h4 class="mb-2">
				<span class="badge bg-primary-subtle text-primary rounded-0">B. DURASI PEKERJAAN</span>
			</h4>
			<div class="row mb-2">
				<label for="inputEmail3" class="col-sm-3 col-form-label">Tanggal Mulai</label>
				<div class="col-sm-9">
					<input
						type="text"
						class="form-control"
						id="inputEmail3"
						value={datetime(wp.tanggal_mulai)}
						disabled
					/>
				</div>
			</div>
			<div class="row mb-2">
				<label for="inputEmail3" class="col-sm-3 col-form-label">Tanggal Selesai</label>
				<div class="col-sm-9">
					<input
						type="text"
						class="form-control"
						id="inputEmail3"
						value={datetime(wp.tanggal_selesai)}
						disabled
					/>
				</div>
			</div>
		</div>
		<div class="mb-3">
			<h4 class="mb-3">
				<span class="badge bg-primary-subtle text-primary rounded-0">C. KLASIFIKASI PEKERJAAN</span>
			</h4>
			<div class="row">
				<div class="col-lg-4">
					{#each column1 as column}
						<div class="mb-3">
							<h6>
								<i
									class={klasifikasi.includes(column) ? 'bi-check-square me-2' : 'bi-square me-2'}
								/>{column}
							</h6>
						</div>
					{/each}
				</div>
				<div class="col-lg-4">
					{#each column2 as column}
						<div class="mb-3">
							<h6>
								<i
									class={klasifikasi.includes(column) ? 'bi-check-square me-2' : 'bi-square me-2'}
								/>{column}
							</h6>
						</div>
					{/each}
				</div>
				<div class="col-lg-4">
					{#each column3 as column}
						<div class="mb-3">
							<h6>
								<i
									class={klasifikasi.includes(column) ? 'bi-check-square me-2' : 'bi-square me-2'}
								/>{column}
							</h6>
						</div>
					{/each}
				</div>
				<div class="row mb-2">
					<label for="inputEmail3" class="col-sm-1 col-form-label">Lainnya</label>
					<div class="col-sm-5">
						<input
							type="text"
							class="form-control"
							id="inputEmail3"
							value={wp.klasifikasi_lainnya}
							disabled
						/>
					</div>
				</div>
			</div>
		</div>
		<div class="mb-3">
			<h4 class="mb-3">
				<span class="badge bg-primary-subtle text-primary rounded-0 text-wrap text-start"
					>D. PROSEDUR PEKERJAAN YANG TELAH DIJELASKAN KEPADA PEKERJA</span
				>
			</h4>
			<div class="row">
				<div class="col-lg-4">
					{#each column4 as column}
						<div class="mb-3">
							<h6>
								<i
									class={prosedur.includes(column) ? 'bi-check-square me-2' : 'bi-square me-2'}
								/>{column}
							</h6>
						</div>
					{/each}
				</div>
				<div class="col-lg-4">
					{#each column5 as column}
						<div class="mb-3">
							<h6>
								<i
									class={prosedur.includes(column) ? 'bi-check-square me-2' : 'bi-square me-2'}
								/>{column}
							</h6>
						</div>
					{/each}
				</div>
				<div class="row mb-2">
					<label for="inputEmail3" class="col-sm-1 col-form-label">Lainnya</label>
					<div class="col-sm-5">
						<input
							type="text"
							class="form-control"
							id="inputEmail3"
							value={wp.prosedur_lainnya}
							disabled
						/>
					</div>
				</div>
			</div>
		</div>
		<div class="mb-3">
			<h4 class="mb-3">
				<span class="badge bg-primary-subtle text-primary rounded-0"
					>E. LAMPIRAN WORKING PERMIT</span
				>
			</h4>
			<div class="row">
				<div class="col-lg-3">
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div
						class={wp.hirarc ? 'link text-primary' : ''}
						on:click={() => (wp.hirarc === '' ? '' : handleLampiran(wp.hirarc))}
					>
						<i class={wp.hirarc ? 'bi-check-square me-2' : 'bi-square me-2'} />HIRARC
					</div>
				</div>
				<div class="col-lg-3">
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div
						class={wp.jsa || jsa.length != 0 ? 'link text-primary' : ''}
						on:click={() => (wp.jsa === '' ? '' : handleLampiran(wp.jsa))}
						data-bs-toggle={jsa.length != 0 ? 'modal' : ''}
						data-bs-target={jsa.length != 0 ? '#modalJSA' : ''}
					>
						<i class={wp.jsa || jsa.length != 0 ? 'bi-check-square me-2' : 'bi-square me-2'} />JSA
					</div>
				</div>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div class="col-lg-3">
					<div
						class={wp.prosedur_kerja ? 'link text-primary' : ''}
						on:click={() => (wp.prosedur_kerja === '' ? '' : handleLampiran(wp.prosedur_kerja))}
					>
						<i class={wp.prosedur_kerja ? 'bi-check-square me-2' : 'bi-square me-2'} />Prosedur
						Kerja
					</div>
				</div>
				<div class="col-lg-3">
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div
						class={wp.sertifikat ? 'link text-primary' : ''}
						on:click={() => (wp.sertifikat === '' ? '' : handleLampiran(wp.sertifikat))}
					>
						<i class={wp.sertifikat ? 'bi-check-square me-2' : 'bi-square me-2'} />Sertifikat
						Kompetensi
					</div>
				</div>
			</div>
		</div>
		<div class="mt-5 text-center">
			<h4 class="mb-2">
				<span class="badge text-primary rounded-0">PENGESAHAN WORKING PERMIT</span>
			</h4>
			<div class="row signature">
				<div class="col-lg-4">
					<p class="judul">DISETUJUI OLEH:</p>
					<p class="fw-bold">PLT. MANAGER</p>
					<p class="fw-bold">(BAHAR SUDRAJAT)</p>
				</div>
				<div class="col-lg-4">
					<p class="judul">DIPERIKSA OLEH:</p>
					<p class="fw-bold">TL K3L DAN KEAMANAN</p>
					<p class="fw-bold">(ALAN NUARI)</p>
				</div>
				<div class="col-lg-4">
					<p class="judul">DISUSUN OLEH:</p>
					<p class="fw-bold">TL PEMELIHARAAN</p>
					<p class="fw-bold">(FEBRIANDY MANDAGI)</p>
				</div>
			</div>
		</div>
	</div>
	<ModalJsa datas={jsa} title='job safety analysis (jsa)' nama_pekerjaan={wp.nama_pekerjaan} />
</section>

<style>
	.form-control {
		border-radius: 0px;
		background-color: transparent;
		border-color: #adb5bd;
	}
	h6 {
		font-weight: 400;
	}
	.link {
		cursor: pointer;
	}
	.judul {
		margin-bottom: 100px;
	}
	p {
		margin-bottom: 0px;
		font-size: 15px;
	}
	.signature .col-lg-4 {
		border: 1px solid #adb5bd;
	}
</style>
