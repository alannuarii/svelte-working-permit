<script>
	import PageTitle from '../../components/PageTitle.svelte';
	import JSAItem from '../../components/JSAItem.svelte';
	import { date } from '../../../lib/js/datetime';
	import { onMount } from 'svelte';

	let data = {
		idWP: 0,
		tanggal_pengajuan: '',
		nama_pekerjaan: '',
		detail_pekerjaan: '',
		lokasi_pekerjaan: '',
		pengawas_pekerjaan: '',
		pengawas_k3: ''
	};
	let items = [];
	let newItem = {
		langkah: '',
		potensi: '',
		pengendalian: ''
	};

	const addItem = () => {
		// items = [...items, newItem];
		items.push(newItem);
		items = [...items];
	};

	const handleRemove = (event) => {
		let index = event.detail - 1;
		items.splice(index, 1);
		items = [...items];
	};

	const getData = () => {
		const storedData = localStorage.getItem('working-permit');
		data = JSON.parse(storedData);
	};

	onMount(() => {
		getData();
	});

	$: itemsLength = items.length;
</script>

<section class="container mt-3">
	<PageTitle title="buat jsa" />
	<div class="card py-3 px-lg-5 px-4 rounded-0 shadow border-0 mb-3">
		<div class="row mb-2">
			<label for="inputEmail3" class="col-sm-3 col-form-label">Tanggal Pengajuan</label>
			<div class="col-sm-9">
				<input
					type="text"
					class="form-control"
					id="inputEmail3"
					value={date(data.tanggal_pengajuan)}
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
					value={data.nama_pekerjaan}
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
					value={data.lokasi_pekerjaan}
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
					value={data.pengawas_pekerjaan}
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
					value={data.pengawas_k3}
					disabled
				/>
			</div>
		</div>
	</div>
	<div class="card py-3 px-lg-5 px-4 rounded-0 shadow border-0">
		<div class="row text-center">
			<div class="col-lg-1">
				<h5 class="text-primary-emphasis">No</h5>
			</div>
			<div class="col-lg-3">
				<h5 class="text-primary-emphasis">Tahap Pekerjaan</h5>
			</div>
			<div class="col-lg-3">
				<h5 class="text-primary-emphasis">Potensi Risiko</h5>
			</div>
			<div class="col-lg-4">
				<h5 class="text-primary-emphasis">Pengendalian Risiko</h5>
			</div>
		</div>
		<hr />
		<form method="POST">
			<input type="hidden" name="wp_id" value={data.idWP} />
			{#each items as item, index}
				<JSAItem {item} index={index + 1} on:remove={handleRemove} />
			{/each}

			<div class="d-flex justify-content-center mt-4" class:d-none={!itemsLength}>
				<button class="btn btn-outline-secondary w-25" type="reset">Reset</button>
				<button class="btn btn-primary w-25" type="submit">Kirim</button>
			</div>
		</form>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="d-flex justify-content-center mt-3">
			<div class="btn btn-primary rounded-0" on:click={addItem}>
				<i class="bi-plus-lg" /> Tambah
			</div>
		</div>
	</div>
</section>

<style>
	h5 {
		font-size: 17px;
	}
	button {
		border-radius: 0;
	}
	label {
		font-size: 15px;
	}
	.form-control {
		border-radius: 0px;
		background-color: transparent;
		border-color: #adb5bd;
	}
</style>
