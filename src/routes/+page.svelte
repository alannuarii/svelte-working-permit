<script>
	import InputButton from './components/InputButton.svelte';

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
</script>

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
		<table class="table">
			<thead>
				<tr>
					<th scope="col">No</th>
					<th scope="col">Nama Pekerjaan</th>
					<th scope="col">Last</th>
					<th scope="col">Handle</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row">1</th>
					<td>Mark</td>
					<td>Otto</td>
					<td>@mdo</td>
				</tr>
				<tr>
					<th scope="row">2</th>
					<td>Jacob</td>
					<td>Thornton</td>
					<td>@fat</td>
				</tr>
				<tr>
					<th scope="row">3</th>
					<td colspan="2">Larry the Bird</td>
					<td>@twitter</td>
				</tr>
			</tbody>
		</table>
	</div>
	<div class="mt-2 d-flex justify-content-center">
		<nav aria-label="Page navigation example">
			<ul class="pagination">
				<li class="page-item">
					<a class="page-link" href="/" aria-label="Previous">
						<span aria-hidden="true">&laquo;</span>
					</a>
				</li>
				<li class="page-item"><a class="page-link" href="/">1</a></li>
				<li class="page-item"><a class="page-link" href="/">2</a></li>
				<li class="page-item"><a class="page-link" href="/">3</a></li>
				<li class="page-item">
					<a class="page-link" href="/" aria-label="Next">
						<span aria-hidden="true">&raquo;</span>
					</a>
				</li>
			</ul>
		</nav>
	</div>
</section>
<section class="d-lg-none">
	<InputButton />
</section>

<style>
	section {
		height: 86vh;
	}
	.card {
		height: 530px;
	}
</style>
