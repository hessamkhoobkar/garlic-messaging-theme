<script lang="ts">
	import { fly } from 'svelte/transition';
	import { expoInOut } from 'svelte/easing';

	import { activeChat, selectedUserDetails } from '@utils/store';
	import { aviableUsers } from '@data/selectedUser.mock';

	import ChatHeader from '@components/ChatHeader.svelte';
	import ChatInput from '@components/ChatInput.svelte';
	import ChatPanel from '@components/ChatPanel.svelte';

	import Call from '@/assets/icons/Call.svelte';
	import Videocam from '@/assets/icons/Videocam.svelte';
	import ArrowRight from '@/assets/icons/ArrowRight.svelte';

	import media2 from '@/assets/imgs/media/media-2.jpg';
	import media3 from '@/assets/imgs/media/media-3.jpg';
	import media4 from '@/assets/imgs/media/media-4.jpg';
	import media5 from '@/assets/imgs/media/media-5.jpg';

	import Block from '@/assets/icons/block.svelte';
	import Delete from '@/assets/icons/delete.svelte';
	import ThumbsDown from '@/assets/icons/thumb-down.svelte';

	interface User {
		id: number;
		name: string;
		avatar: string;
		avatarLg: string;
		phoneNumber: string;
		about: string;
		lastMessage: string;
		lastMessageTime: string;
		activityState: string;
		chatHistory: { sender: boolean; text: string; date: string }[];
	}

	let selectedUser: User;
	$: selectedUser = aviableUsers.find((user) => user.id === $activeChat)!;
</script>

<div class="h-full w-full overflow-hidden flex justify-start items-start gap-2">
	{#if $activeChat > 0}
		<div
			class="h-full grow flex justify-start items-start"
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

		{#if $selectedUserDetails}
			<div
				class="h-full w-[20.75rem] flex flex-col justify-start items-start gap-2 overflow-x-hidden overflow-y-auto"
				transition:fly={{ duration: 1000, easing: expoInOut, x: 150 }}
			>
				<div
					class="w-80 bg-zinc-850 rounded-2xl p-4 gap-6 flex flex-col justify-center items-center"
				>
					<img src={selectedUser.avatarLg} alt="ss" class="w-32 h-32 rounded-full" />
					<div class="flex flex-col justify-center items-center w-full gap-1">
						<h3 class="text-lg font-medium tracking-[-0.02em]">{selectedUser.name}</h3>
						<p class="text-sm text-gray-400">{selectedUser.phoneNumber}</p>
					</div>
					<div class="flex justify-center items-center gap-4">
						<button
							class="flex flex-col justify-center items-center text-green-700 hover:bg-green-900 hover:bg-opacity-10 rounded-2xl p-4 gap-3 transition-all duration-200 ease-in-out"
						>
							<Call />
							<span class="text-green-800">Audio Call</span>
						</button>
						<button
							class="flex flex-col justify-center items-center text-green-700 hover:bg-green-900 hover:bg-opacity-10 rounded-2xl p-4 gap-3 transition-all duration-200 ease-in-out"
						>
							<Videocam />
							<span class="text-green-800">Video Call</span>
						</button>
					</div>
				</div>
				<div
					class="w-80 bg-zinc-850 rounded-2xl p-4 gap-4 flex flex-col justify-between items-start"
				>
					<h2 class="text-lg font-medium tracking-[-0.02em] mb-2">About</h2>
					<p>
						{selectedUser.about}
					</p>
				</div>
				<div
					class="w-80 bg-zinc-850 rounded-2xl p-4 gap-4 flex flex-col justify-between items-start"
				>
					<div class="flex justify-start items-center mb-2 w-full">
						<h2 class="text-lg font-medium tracking-[-0.02em]">Media, links, and docs</h2>
						<div
							class="flex justify-start items-center ml-auto text-zinc-500 cursor-pointer hover:text-green-500 transition-all duration-200 ease-in-out"
						>
							<span>163</span>
							<span>
								<ArrowRight />
							</span>
						</div>
					</div>
					<div class="flex justify-start items-center gap-2">
						<img
							src={media2}
							alt="sad"
							class="w-16 h-16 rounded-2xl border-2 border-zinc-900 hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer"
						/>
						<img
							src={media3}
							alt="sad"
							class="w-16 h-16 rounded-2xl border-2 border-zinc-900 hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer"
						/>
						<img
							src={media4}
							alt="sad"
							class="w-16 h-16 rounded-2xl border-2 border-zinc-900 hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer"
						/>
						<img
							src={media5}
							alt="sad"
							class="w-16 h-16 rounded-2xl border-2 border-zinc-900 hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer"
						/>
					</div>
				</div>
				<div class="w-80 bg-zinc-850 rounded-2xl p-4 flex flex-col justify-between items-start">
					<button class="flex justify-start items-center w-full gap-4 p-2 py-3 text-red-800">
						<span> <Block /> </span>
						<span class="text-red-900">Block {selectedUser.name}</span>
					</button>
					<button class="flex justify-start items-center w-full gap-4 p-2 py-3 text-red-800">
						<span> <ThumbsDown /> </span>
						<span class="text-red-900">Report {selectedUser.name}</span>
					</button>
					<button class="flex justify-start items-center w-full gap-4 p-2 py-3 text-red-800">
						<span> <Delete /> </span>
						<span class="text-red-900">Clear All Chat</span>
					</button>
				</div>
			</div>
		{/if}
	{:else}
		<div class="h-full w-full flex justify-center items-center">
			<p>No chat selected, please select on</p>
		</div>
	{/if}
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
		margin-top: 0;
		margin-bottom: 0;
	}

	*::-webkit-scrollbar-thumb {
		background-color: var(--scrollbar);
		border-radius: 20px;
		border: 2px solid var(--scrollbarBG);
	}
</style>
