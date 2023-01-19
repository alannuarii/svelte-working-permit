<section class="container">
	<div class="row">
		<div class="col-lg-6">
			<div class="card py-3 px-lg-5 px-4 rounded-0 shadow border-0 mb-3">
				<h6 class="text-primary-emphasis mb-3">Informasi Pekerjaan</h6>
				<div class="mb-2">
					<label for="exampleFormControlInput1" class="form-label">Tanggal Pengajuan</label>
					<input type="date" class="form-control" />
				</div>
				<div class="mb-2">
					<label for="exampleFormControlInput1" class="form-label">Nama Pekerjaan</label>
					<input type="text" class="form-control" />
				</div>
				<div class="mb-2">
					<label for="exampleFormControlInput1" class="form-label">Detail Pekerjaan</label>
					<input type="text" class="form-control" />
				</div>
				<div class="mb-2">
					<label for="exampleFormControlInput1" class="form-label">Lokasi Pekerjaan</label>
					<input type="text" class="form-control" />
				</div>
				<div class="mb-2">
					<label for="exampleFormControlInput1" class="form-label">Pengawas Pekerjaan</label>
					<input type="text" class="form-control" />
				</div>
				<div class="mb-2">
					<label for="exampleFormControlInput1" class="form-label">Pengawas K3</label>
					<input type="text" class="form-control" />
				</div>
			</div>
			<div class="card py-3 px-lg-5 px-4 rounded-0 shadow border-0">
				<h6 class="text-primary-emphasis mb-3">Durasi Pekerjaan</h6>
				<div class="row mb-2">
					<div class="col-lg-6">
						<label for="exampleFormControlInput1" class="form-label">Tanggal Mulai</label>
						<input type="datetime-local" class="form-control" />
					</div>
					<div class="col-lg-6">
						<label for="exampleFormControlInput1" class="form-label">Tanggal Selesai</label>
						<input type="datetime-local" class="form-control" />
					</div>
				</div>
			</div>
		</div>
		<div class="col-lg-6">
			<div class="card py-3 px-lg-5 px-4 rounded-0 shadow border-0">
				<div class="mb-2">
					<label for="exampleFormControlInput1" class="form-label">Email address</label>
					<input
						type="email"
						class="form-control"
						id="exampleFormControlInput1"
						placeholder="name@example.com"
					/>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	label {
		font-size: 15px;
		font-weight: 300;
	}
	.form-control {
		border-radius: 0;
	}
	h6 {
		font-weight: 700;
	}
</style>
