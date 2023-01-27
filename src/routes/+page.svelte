<script>
	import InputButton from './components/InputButton.svelte';
	import { waktu, konversiWaktu } from '../lib/js/tanggal';

	export let data;

	let permits = data.wp.data;
	let numbers = [];
	let years = 2023;
	for (let i = 1; i <= 31; i++) {
		numbers.push(i);
	}
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

	// onMount(() => {
	// 	console.log(data.wp);
	// });

	console.log(data.wp.data);
</script>

<svelte:head>
	<title>Working Permit</title>
</svelte:head>
<section class="container d-none d-lg-block">
	<div class="row mb-2">
		<div class="d-flex align-items-center">
			<a href="/input" class="btn btn-primary rounded-0"><i class="bi-input-cursor me-2 " />Input</a
			>
			<div class="d-flex align-items-center ms-auto">
				<select class="form-select rounded-0" aria-label="Default select example">
					<option selected>Tanggal</option>
					{#each numbers as number}
						<option value={number}>{number}</option>
					{/each}
				</select>
				<select class="form-select rounded-0" aria-label="Default select example">
					<option selected>Bulan</option>

					{#each months as month}
						<option value={month}>{month}</option>
					{/each}
				</select>
				<select class="form-select rounded-0" aria-label="Default select example">
					<option selected>Tahun</option>
					<option value={years}>{years}</option>
				</select>
				<div class="btn btn-primary rounded-0 ms-1"><i class="bi-search" /></div>
			</div>
		</div>
	</div>
	<div class="card py-3 px-4 rounded-0 shadow border-0">
		<table class="table table-bordered">
			<thead class="text-center">
				<tr class="bg-primary-subtle">
					<th scope="col">No</th>
					<th scope="col">Nama Pekerjaan</th>
					<th scope="col">Tanggal</th>
					<th scope="col">Pengawas Pekerjaan</th>
					<th scope="col">Tipe</th>
					<th scope="col">Detail</th>
					<th scope="col">Action</th>
				</tr>
			</thead>
			<tbody>
				{#each permits as wp, i}
					<tr>
						<td class="text-center">{i + 1}</td>
						<td class="text-start">{wp.nama_pekerjaan}</td>
						<td class="text-center">{konversiWaktu(wp.tanggal_pengajuan)}</td>
						<td class="text-center">{wp.pengawas_pekerjaan}</td>
						<td class="text-center"
							><span class="badge text-bg-primary rounded-0">Internal</span></td
						>
						<td class="text-center"><a href="/{wp.id_wp}"><i class="bi-file-check text-primary" /></a></td>
						<td class="text-center d-flex justify-content-evenly"
							><i class="bi-pencil-square text-secondary" /><i class="bi-trash3 text-danger" /></td
						>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</section>
<section class="d-lg-none">
	<InputButton />
</section>

<style>
	.card {
		height: 530px;
	}
	th,
	td {
		font-size: 15px;
	}
	i{
		cursor: pointer;
	}
</style>
