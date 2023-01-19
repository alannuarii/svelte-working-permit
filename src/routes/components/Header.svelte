<script>
	import ModalLogout from './ModalLogout.svelte';
	import { page } from '$app/stores';

	$: path = $page.url.pathname;
</script>

<nav class="navbar shadow bg-light-subtle">
	<div class="container d-flex">
		{#if path === '/'}
			<a class="navbar-brand flex-grow-1" href="/">
				<h5 class="text-primary-emphasis">WORKING PERMIT</h5>
			</a>

			<div class="px-3 py-2 bg-primary-subtle text-primary-emphasis d-flex align-items-center">
				<i class="bi-person-circle me-2" />Alan Nuari
			</div>
		{:else}
			<a class="navbar-brand flex-grow-1" href="/">
				<h5 class="text-primary-emphasis"><i class="bi-arrow-left me-2" />WORKING PERMIT</h5>
			</a>
		{/if}
	</div>
</nav>

<style>
	.navbar {
		background-color: #fff;
		height: 70px;
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
