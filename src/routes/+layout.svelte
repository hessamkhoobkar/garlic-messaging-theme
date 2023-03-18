<script lang="ts">
	import '../app.css';
	import Sidebar from '../components/Sidebar.svelte';
</script>

<div class="flex justify-start items-start h-screen p-2 gap-2">
	<Sidebar />

	<div class="grow h-full">
		<slot />
	</div>
</div>

<style lang="postcss">
	:global(html) {
		color: theme(colors.gray.100);
		font-size: theme(fontSize.base);
		font-weight: theme(fontWeight.medium);
		background-color: theme(colors.zinc.900);
	}
</style>
