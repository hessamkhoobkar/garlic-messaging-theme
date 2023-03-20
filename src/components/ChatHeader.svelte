<script lang="ts">
	import Avatar from '@components/fundamentals/Avatar.svelte';
	import Button from '@components/fundamentals/Button/Button.svelte';

	import Call from '@/assets/icons/Call.svelte';
	import MoreHoriz from '@/assets/icons/MoreHoriz.svelte';
	import Search from '@/assets/icons/Search.svelte';
	import Videocam from '@/assets/icons/Videocam.svelte';

	export let avatar: any;
	export let name: string;
	export let activityState: string;
</script>

<div class="w-full flex justify-start items-center bg-zinc-850 rounded-2xl p-2 pl-4">
	<div class="flex justify-start items-center">
		<Avatar src={avatar} alt="Avatar of the {name}" />
		<div class="flex flex-col justify-start items-start ml-4">
			<span>{name}</span>
			<span class="text-sm text-zinc-500">{activityState}</span>
		</div>
	</div>
	<div class="flex justify-start items-center ml-auto">
		<Button variant="filled" color="plain" size="square" icon={Call} />
		<Button variant="filled" color="plain" size="square" icon={Videocam} />
		<div class="bg-zinc-900 h-10 w-0.5 mx-2" />
		<Button variant="filled" color="plain" size="square" icon={Search} />
		<Button variant="filled" color="plain" size="square" icon={MoreHoriz} />
	</div>
</div>
