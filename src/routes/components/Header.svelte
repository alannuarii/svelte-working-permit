<script>
	import ModalLogout from './ModalLogout.svelte';
	import { page } from '$app/stores';

	$: path = $page.url.pathname;
</script>

<nav class="navbar shadow bg-light-subtle">
	<div class="container d-flex">
		{#if path === '/'}
			<a class="navbar-brand flex-grow-1" href="/">
				<h5 class="text-warning-emphasis">Working Permit</h5>
			</a>

			<a href="/"
				><i class="bi-box-arrow-right" data-bs-toggle="modal" data-bs-target="#modalLogout" /></a
			>
			<ModalLogout />
		{:else}
			<a class="navbar-brand flex-grow-1" href="/">
				<h5><i class="bi-arrow-left me-2" />Working Permit</h5>
			</a>
		{/if}
	</div>
</nav>

<style>
	.navbar {
		background-color: #fff;
		height: 70px;
	}
	.navbar i {
		color: var(--color-text-1);
		font-size: 25px;
		margin-right: 20px;
	}
	.navbar h5 {
		margin-bottom: -2px;
		margin: 0;
		margin: 0;
		font-size: 25px;
		font-weight: 700;
		font-family: 'Poppins', sans-serif;
		color: var(--color-text-1);
	}
</style>
