<script>
	import PageTitle from '../../components/PageTitle.svelte';
	import JSAItem from '../../components/JSAItem.svelte';

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
		{#each items as item, index}
			<JSAItem {item} index={index + 1} />
		{/each}
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
</style>
