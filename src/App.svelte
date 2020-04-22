<script>
	import PageLoader from './components/comom/PageLoader.svelte';
	import SearchBar from './components/comom/SearchBar.svelte';
	import TopBar from './components/comom/TopBar.svelte';
	import LeftSideBar from './components/comom/LeftSideBar.svelte';
	import RightSideBar from './components/comom/RightSideBar.svelte';
	
	import { Router } from 'svelte-router-spa';
	import { routes } from './routes/route.js';

	export let name;

	let loader = true;

	setTimeout(() => { loader = false; }, 2000);
</script>

<main>
	{#if loader}
		<PageLoader />
	{/if}
	
	<SearchBar />
	<TopBar />

	<section>
		<LeftSideBar />
		<RightSideBar />
	</section>

	<section class="content">
		<Router {routes} />
	</section>
</main>

<style>
</style>