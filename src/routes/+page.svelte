<script lang="ts">
	let activeChat: boolean = false;
</script>

{#if activeChat}
	<!-- content here -->
	<div class="h-full w-full flex justify-center items-center">
		<p>Chat selected</p>
	</div>
{:else}
	<!-- else content here -->
	<div class="h-full w-full flex justify-center items-center">
		<p>No chat selected, please select on</p>
	</div>
{/if}
