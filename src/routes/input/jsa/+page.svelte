<script>
	import PageTitle from '../../components/PageTitle.svelte';
</script>

<section class="container mt-3">
	<PageTitle title='buat jsa' />
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
			<div class="col-lg-5">
				<h5 class="text-primary-emphasis">Pengendalian Risiko</h5>
			</div>
		</div>
		<hr />
		<!-- <div class="row">
			<div class="col-lg-1 d-flex align-self-center justify-content-center">
				<h6 class="text-center">1</h6>
			</div>
			<div class="col-lg-3">
				<input type="text" class="form-control" />
			</div>
			<div class="col-lg-3">
				<input type="text" class="form-control" />
			</div>
			<div class="col-lg-5">
				<input type="text" class="form-control" />
			</div>
		</div> -->
	</div>
</section>

<style>
	h5 {
		font-size: 17px;
	}
	h6 {
		font-size: 15px;
		margin-bottom: 0px;
	}
	input {
		font-size: 12px;
	}
</style>
