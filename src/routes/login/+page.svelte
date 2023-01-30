<script>
    // export let form
    // console.log(form)
</script>

<section class="container">
	<form method="POST">
		<input type="email" class="form-control" name="email" />
		<input type="password" class="form-control" name="password" />
		<div class="d-flex justify-content-center mt-4">
			<button class="btn btn-outline-secondary w-25" id="btn-reset" type="reset">Reset</button>
			<button class="btn btn-primary w-25" type="submit">Kirim</button>
		</div>
	</form>
</section>

<style>
	.form-control,
	button {
		border-radius: 0;
	}

</style>
