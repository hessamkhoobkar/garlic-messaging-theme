<script lang="ts">
	import { fly } from 'svelte/transition';
	import { expoInOut } from 'svelte/easing';
	import { activeChat } from '@utils/store';
	import { selectedUser } from '@data/selectedUser.mock';

	import ChatHeader from '@components/ChatHeader.svelte';
	import ChatInput from '@components/ChatInput.svelte';
	import ChatPanel from '@components/ChatPanel.svelte';
</script>

<div class="h-full w-full overflow-hidden">
	{#if $activeChat}
		<div
			class="h-full w-full flex justify-start items-start"
			transition:fly={{ duration: 1000, easing: expoInOut, x: 150 }}
		>
			<div class="h-full w-full flex flex-col justify-start items-start">
				<ChatHeader
					avatar={selectedUser.avatar}
					name={selectedUser.name}
					activityState={selectedUser.activityState}
				/>
				<ChatPanel
					avatar={selectedUser.avatar}
					name={selectedUser.name}
					chatData={selectedUser.chatHistory}
				/>
				<ChatInput />
			</div>
		</div>
	{:else}
		<div class="h-full w-full flex justify-center items-center">
			<p>No chat selected, please select on</p>
		</div>
	{/if}
</div>
