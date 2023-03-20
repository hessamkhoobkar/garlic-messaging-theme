<script lang="ts">
	import { activeChat } from '@utils/store';
	import { selectedUser } from '@data/selectedUser.mock';
	import ChatHeader from '@components/ChatHeader.svelte';
</script>

{#if $activeChat}
	<div class="h-full w-full flex justify-start items-start">
		<div class="h-full w-full flex flex-col justify-start items-start">
			<ChatHeader
				avatar={selectedUser.avatar}
				name={selectedUser.name}
				activityState={selectedUser.activityState}
			/>

			<p>Chat selected</p>
		</div>
	</div>
{:else}
	<div class="h-full w-full flex justify-center items-center">
		<p>No chat selected, please select on</p>
	</div>
{/if}
