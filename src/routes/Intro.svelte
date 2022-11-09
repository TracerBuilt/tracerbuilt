<script>
	import Chevron from '$lib/components/chevron.svelte'

	let scroll
</script>

<svelte:window bind:scrollY={scroll} />

<section
	class="flex relative z-10 text-4xl h-[calc(100vh-6rem)] mb-12 flex-col items-center justify-center"
>
	<div class="">
		<h1
			before="Hey, I'm Tyler"
			class={`relative leading-0 before:w-full before:content-[attr(before)] before:h-16 before:left-0 before:-top-8 before:text-grey-9 before:dark:text-grey-4 before:text-xl before:block before:absolute`}
		>
			I build <span
				class="bg-clip-text justify-self-center bg-gradient-to-r from-blue-9 via-red-9 to-blue-9 text-transparent animate-move-bg bg-400%"
				>cool stuff</span
			> for the web.
		</h1>
	</div>
</section>

{#if scroll === 0}
	<div class="fixed flex right-0 bottom-4 left-0 justify-center items-center">
		<Chevron />
	</div>
{/if}

<div
	class="z-0 absolute top-1/2 right-0 w-56 h-96 before:absolute before:via-purple-9 before:right-0 before:block before:contents-[''] after:absolute after:right-0 after:block after:contents-[''] before:w-[20rem] before:h-[30rem] before:bg-gradient-to-b before:from-blue-9 before:to-red-9 before:clip-path after:top-24 after:w-[10rem] after:h-[15rem] after:bg-gradient-to-r after:from-grey-0/25 after:to-transparent after:clip-path "
/>
