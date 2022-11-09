<script lang="ts">
	import PhotoBorder from "$lib/components/Photo_Border.svelte"

	export let href: string
</script>

<a {href} class="flex flex-col gap-2 w-full">
	{#if $$slots.picture_desktop}
		<div class="w-full relative mb-12">
			<PhotoBorder>
				<slot name="picture_desktop" />
			</PhotoBorder>
			<PhotoBorder mobile >
				<slot name="picture_mobile" />
			</PhotoBorder>
		</div>
	{:else}
		<div class="h-12" />
	{/if}
	<h3 class="w-11/12 mx-auto text-2xl mb-4 leading-none"><slot name="name" /></h3>
	<div class="w-11/12 mx-auto justify-between flex mt-0 flex-col sm:flex-row">
		<div
			class="sm:order-last sm:w-1/4 font-normal text-grey-9 dark:text-grey-4 [&>ul]:flex [&>ul]:flex-wrap [&>ul]:gap-2 [&>ul]:sm:block [&>ul]:sm:columns-2 sm:text-right [&>ul>li]:whitespace-nowrap flex-shrink-0 sm:leading-[1.7rem] [&>ul>:not(:last-child)]:sm:after:content-[''] [&>ul>:not(:last-child)]:after:content-[','] mb-4 sm:mb-0"
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
