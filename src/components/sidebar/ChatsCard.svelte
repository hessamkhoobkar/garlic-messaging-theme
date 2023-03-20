<script lang="ts">
	import { chats } from '@data/chatPreviews.mock';
	import { activeChat } from '@utils/store';

	function handleChatSelect() {
		activeChat.set(true);
	}
</script>

<div
	class="w-80 grow bg-zinc-850 rounded-2xl p-1 flex flex-col justify-start items-start overflow-x-hidden overflow-y-auto"
>
	{#each chats as chat}
		<button
			class="w-full flex justify-start items-center gap-3 p-2 hover:bg-zinc-800 rounded-2xl transition-all duration-200 ease-in-out"
			on:click={handleChatSelect}
		>
			<img src={chat.avatar} alt="avatar of {chat.name}" class="w-10 h-10 rounded-full" />
			<div class="grow flex flex-col justify-start items-start overflow-hidden">
				<span class="flex justify-start items-centerm w-full">
					<p class="text-zinc-100 font-bold">{chat.name}</p>
					<p class="text-zinc-400 ml-auto text-xs">{chat.lastMessageTime}</p>
				</span>
				<p class="text-zinc-400 text-sm truncate w-full text-start">{chat.lastMessage}</p>
			</div>
		</button>
	{/each}
</div>

<style lang="postcss">
	:root {
		--scrollbarBG: transparent;
		--scrollbar: theme(colors.zinc.800);
	}

	* {
		scrollbar-width: thin;
		scrollbar-color: var(--scrollbarBG) var(--scrollbar);
	}

	*::-webkit-scrollbar {
		width: 8px;
	}

	*::-webkit-scrollbar-track {
		background: var(--scrollbarBG);
		margin-top: 1rem;
		margin-bottom: 1rem;
	}

	*::-webkit-scrollbar-thumb {
		background-color: var(--scrollbar);
		border-radius: 20px;
		border: 2px solid var(--scrollbarBG);
	}
</style>
