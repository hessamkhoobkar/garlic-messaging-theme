<script lang="ts">
	import { activeChat } from '@utils/store';
</script>

{#if $activeChat}
	<div class="h-full w-full flex justify-center items-center">
		<p>Chat selected</p>
	</div>
{:else}
	<div class="h-full w-full flex justify-center items-center">
		<p>No chat selected, please select on</p>
	</div>
{/if}
