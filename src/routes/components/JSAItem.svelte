<script>
	export let index;
	export let tahap;
	export let potensi;
	export let pengendalian;

	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	const removeItem = () => {
		dispatch('remove', index);
	};
</script>

<div class="row mb-2">
	<div class="col-lg-1 d-flex align-self-center justify-content-center">
		<h6 class="text-center">{index}</h6>
	</div>
	<div class="col-lg-3">
		<input type="text" id="tahap" class="form-control" name="tahap_pekerjaan" bind:value={tahap} />
	</div>
	<div class="col-lg-3">
		<input
			type="text"
			id="potensi"
			class="form-control"
			name="potensi_risiko"
			bind:value={potensi}
		/>
	</div>
	<div class="col-lg-4">
		<input
			type="text"
			id="pengendalian"
			class="form-control"
			name="pengendalian_risiko"
			bind:value={pengendalian}
		/>
	</div>
	<div class="col-lg-1 text-center">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="btn" on:click={removeItem}><i class="bi-dash-circle-fill text-danger" /></div>
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
	.form-control {
		border-radius: 0px;
	}
</style>
