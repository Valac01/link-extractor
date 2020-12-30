<script>
	import Navbar from './components/Navbar.svelte'
	import HtmlField from './components/HtmlField.svelte'
	import List from './components/List.svelte'
	import ShadowDiv from './components/ShadowDiv.svelte'
	import Copyright from './components/Copyright.svelte'
</script>

<Navbar />
<main class="bg-gray-100 dark:bg-gray-700 px-2 sm:px-0 py-4">
	<div class="container max-w-screen-lg">
		<HtmlField />
		<List />
		<ShadowDiv />
	</div>
	<Copyright />
</main>
<style>
	main {
		margin-top: 60px;
		min-height: calc(100vh - 60px);
	}
</style>