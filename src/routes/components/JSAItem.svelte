<script>
	export let index;
	export let tahap;
	export let potensi;
	export let pengendalian;
</script>

<div class="row mb-2">
	<div class="col-lg-1 d-flex align-self-center justify-content-center">
		<h6 class="text-center">{index}</h6>
	</div>
	<div class="col-lg-3">
		<input type="text" class="form-control" bind:value={tahap} />
	</div>
	<div class="col-lg-3">
		<input type="text" class="form-control" bind:value={potensi} />
	</div>
	<div class="col-lg-4">
		<input type="text" class="form-control" bind:value={pengendalian} />
	</div>
	<div class="col-lg-1 text-center">
		<div class="btn"><i class="bi-dash-circle-fill text-danger" /></div>
	</div>
</div>

<style>
	h6 {
		font-size: 15px;
		margin-bottom: 0px;
	}
	input {
		font-size: 12px;
	}
	.btn {
		background: none;
		color: inherit;
		border: none;
		padding: 0;
		font: inherit;
		cursor: pointer;
		outline: inherit;
	}
	i {
		font-size: 20px;
	}
</style>
