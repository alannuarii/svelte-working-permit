<script>
	import PageTitle from './PageTitle.svelte';
	export let datas;
	export let title;
</script>

<div
	class="modal fade"
	id="modalJSA"
	data-bs-backdrop="static"
	data-bs-keyboard="false"
	tabindex="-1"
	aria-labelledby="staticBackdropLabel"
	aria-hidden="true"
>
	<div class="modal-dialog modal-fullscreen">
		<div class="modal-content">
			<div class="modal-header">
				<!-- <h1 class="modal-title fs-5 text-primary" id="staticBackdropLabel">
					JOB SAFETY ANALYSIS (JSA)
				</h1> -->
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
			</div>
			<div class="modal-body">
				<div class="mb-3">
					<PageTitle {title} />
					<!-- <h6 class="text-center">{nama_pekerjaan}</h6> -->
				</div>
				<table class="table table-bordered">
					<thead>
						<tr class="text-center bg-primary-subtle">
							<th scope="col">No</th>
							<th scope="col">Tahap Pekerjaan</th>
							<th scope="col">Potensi Risiko</th>
							<th scope="col">Pengendalian Risiko</th>
						</tr>
					</thead>
					<tbody>
						{#each datas as data, index}
							<tr>
								<td class="text-center align-middle">{index + 1}</td>
								<td class="align-middle">{data.tahap_pekerjaan}</td>
								<td class="align-middle">{data.potensi_risiko}</td>
								<td class="align-middle">{data.pengendalian_risiko}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>

<style>
	table {
		border-color: #adb5bd;
	}
</style>
