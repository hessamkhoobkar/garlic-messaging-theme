<script lang="ts">
	import { fly } from 'svelte/transition';
	import { expoInOut } from 'svelte/easing';

	import About from './user-details/About.svelte';
	import MediaCard from './user-details/MediaCard.svelte';
	import ActionCard from './user-details/ActionCard.svelte';
	import SummaryCard from './user-details/SummaryCard.svelte';

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

	export let selectedUser: User;
</script>

<div
	class="h-full w-[20.75rem] flex flex-col justify-start items-start gap-2 overflow-x-hidden overflow-y-auto"
	transition:fly={{ duration: 1000, easing: expoInOut, x: 150 }}
>
	<SummaryCard {selectedUser} />
	<About selectedUserAbout={selectedUser.about} />
	<MediaCard />
	<ActionCard userName={selectedUser.name} />
</div>
