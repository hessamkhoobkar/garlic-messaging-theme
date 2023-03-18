<script lang="ts">
	let klass: string | null = null;
	export { klass as class };
	export let src: string | null = null;
	export let alt: string | null = null;
	export let size: '36' | '42' | '44' | '126' = '42';
</script>

<div class="bg-zinc-700 rounded-full">
	<img {src} {alt} height={size} width={size} class="rounded-full {klass}" />
</div>
