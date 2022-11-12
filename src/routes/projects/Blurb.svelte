<script lang="ts">
	import PhotoBorder from '$lib/components/Photo_Border.svelte'

	export let href: string
</script>

<a {href} class={`flex flex-col gap-2 w-full group ${$$slots.picture_desktop ? '' : 'mt-12'}`}>
	{#if $$slots.picture_desktop}
		<div class="w-full relative mb-12">
			<div class="group-hover:scale-105 transition-all">
				<PhotoBorder format="desktop">
					<slot name="picture_desktop" />
				</PhotoBorder>
			</div>
			<div class="group-hover:scale-105 transition-all">
				<PhotoBorder format="mobile">
					<slot name="picture_mobile" />
				</PhotoBorder>
			</div>
		</div>
	{/if}
	<div class="w-11/12 mx-auto">
		<h3
			class="text-transparent bg-clip-text dark:from-blue-7 dark:via-purple-7 dark:to-red-7 from-blue-9 via-purple-9 to-red-9 bg-gradient-to-br dark:group-hover:from-blue-5 dark:group-hover:via-purple-5 dark:group-hover:to-red-5 dark:group-active:from-blue-4 dark:group-active:via-purple-4 dark:group-active:to-red-4 group-hover:from-blue-11 group-hover:via-purple-11 group-hover:to-red-11 group-active:from-blue-12 group-active:via-purple-12 group-active:to-red-12 text-2xl mb-2 transition-colors inline-block"
		>
			<slot name="name" />
		</h3>
		<div
			class="font-normal text-grey-9 dark:text-grey-4 [&>ul]:flex [&>ul]:flex-wrap [&>ul]:gap-2 [&>ul>li]:whitespace-nowrap flex-shrink-0 [&>ul>:not(:last-child)]:after:content-[','] mb-4"
		>
			<slot name="stack" />
		</div>
		<div>
			<div class="max-w-prose font-serif [&>span>p]:leading-[1.7rem] [&>span>p]:mb-[1.7rem]">
				<slot name="text" />
			</div>
		</div>
	</div>
</a>
