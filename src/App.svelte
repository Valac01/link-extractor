<script>
	import Navbar from './components/Navbar.svelte'
	import HtmlField from './components/HtmlField.svelte';
	import List from './components/List.svelte';
</script>

<Navbar />
<main class="bg-gray-100 px-2 sm:px-0 py-4">
	<div class="container">
		<HtmlField />
		<List />
	</div>
</main>

<style>
	main {
		margin-top: 60px;
		min-height: calc(100vh - 60px);
	}
</style>