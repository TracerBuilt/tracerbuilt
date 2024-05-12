<script>
	import Chevron from '$lib/components/chevron.svelte'

	let scrollY
</script>

<svelte:window bind:scrollY />

<section
	class="relative z-10 mb-12 flex h-[calc(100vh-6rem)] flex-col items-center justify-center text-4xl"
>
	<div class="">
		<h1
			before="Hey, I'm Tyler"
			class={`leading-0 before:text-grey-9 before:dark:text-grey-4 relative before:absolute before:-top-8 before:left-0 before:block before:h-16 before:w-full before:text-xl before:content-[attr(before)]`}
		>
			I build <span
				class="dark:from-blue-6 dark:via-red-6 dark:to-blue-6 from-blue-9 via-red-9 to-blue-9 animate-move-bg bg-400% justify-self-center bg-gradient-to-r bg-clip-text text-transparent"
				>cool stuff</span
			> for the web.
		</h1>
	</div>
</section>

{#if scrollY === 0}
	<div class="fixed right-0 bottom-4 left-0 flex items-center justify-center">
		<Chevron />
	</div>
{/if}

<div
	class="before:via-purple-9 before:contents-[''] after:contents-[''] before:from-blue-9 before:to-red-9 before:clip-path after:from-grey-0/25 after:clip-path absolute top-1/2 right-0 z-0 h-96 w-56 before:absolute before:right-0 before:block before:h-[30rem] before:w-[20rem] before:bg-gradient-to-b after:absolute after:top-28 after:right-0 after:block after:h-[15rem] after:w-[10rem] after:bg-gradient-to-r after:to-transparent"
></div>
