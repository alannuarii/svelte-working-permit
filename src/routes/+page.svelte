<script>
	import InputButton from './components/InputButton.svelte';
	import { waktu } from '../lib/js/tanggal';

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
				<tr>
					<th scope="col">No</th>
					<th scope="col">Nama Pekerjaan</th>
					<th scope="col">Tanggal</th>
					<th scope="col">Pengawas Pekerjaan</th>
					<th scope="col">Detail</th>
				</tr>
			</thead>
			<tbody>
				{#each permits as wp, i}
					<tr>
						<td class="text-center">{i+1}</td>
						<td class="text-start">{wp.nama_pekerjaan}</td>
						<td class="text-center">{wp.tanggal_pengajuan}</td>
						<td class="text-center">{wp.pengawas_pekerjaan}</td>
						<td class="text-center">Detail</td>
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
</style>
