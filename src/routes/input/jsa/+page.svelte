<script>
	import PageTitle from '../../components/PageTitle.svelte';
	import JSAItem from '../../components/JSAItem.svelte';

	let items = [];
	let tahap = [];
	let potensi = [];
	let pengendalian = [];
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

	const handleInput = (event) => {
		if (event.target.id === 'tahap') {
			tahap.push(event.target.value);
			tahap = [...tahap];
		} else if (event.target.id === 'potensi') {
			potensi.push(event.target.value);
			potensi = [...potensi];
		} else if (event.target.id === 'pengendalian') {
			pengendalian.push(event.target.value);
			pengendalian = [...pengendalian];
		}
	};

	$: console.log(tahap);
	$: console.log(potensi);
	$: console.log(pengendalian);
</script>

<section class="container mt-3">
	<PageTitle title="buat jsa" />
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
			{#each items as item, index}
				<JSAItem {item} index={index + 1} on:remove={handleRemove} on:change={handleInput} />
			{/each}
			<input type="hidden" name="tahap_pekerjaan" value={tahap} />
			<input type="hidden" name="potensi_risiko" value={potensi} />
			<input type="hidden" name="pengendalian_risiko" value={pengendalian} />
			<div class="d-flex justify-content-center mt-4">
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
</style>
