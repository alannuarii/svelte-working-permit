<script>
	import '../lib/css/styles.css';
	import Header from './components/Header.svelte';
</script>

<div id="master">
	<Header />
	<main class="py-3">
		<slot />
	</main>
</div>

<style>
	#master {
		overflow-x: hidden;
		overflow-y: auto;
		background-color: #f6fff8;
	}
</style>
