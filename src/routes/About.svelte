<script lang="ts">
	import { fly, scale } from 'svelte/transition'
	import { cubicInOut, expoInOut } from 'svelte/easing'
</script>

<div
	in:fly={{ duration: 400, x: -200, easing: cubicInOut }}
	class="text-center dark:text-grey-3 text-grey-1 w-screen bg-gradient-to-br from-blue-9 via-purple-9 pb-12 pt-4 -skew-y-3 to-red-9 -mx-2 mb-16 dark:from-blue-11 dark:via-purple-11 dark:to-red-11"
>
	<div class="max-w-4xl skew-y-3 mx-auto">
		<h2 in:fly={{ duration: 400, x: -200, easing: cubicInOut, delay: 200 }} class="text-3xl mb-4">
			About Me
		</h2>
		<div class="w-11/12 mx-auto flex flex-col items-center justify-center md:justify-between md:flex-row md:items-start">
			<div class="text-left px-2 md:px-0 max-w-prose [&>p]:mb-4 font-serif">
				<p in:fly={{ duration: 400, x: -200, easing: cubicInOut, delay: 400 }}>
					I prize simplicity in both my lifestyle and my work. I make websites that are stable,
					performant, and responsive because the user's experience on your site is what matters the
					most.
				</p>
				<p in:fly={{ duration: 400, x: -200, easing: cubicInOut, delay: 600 }}>
					I've been working as a freelance developer for two years now, creating everything from
					simple contact forms to complete ecommerce platforms built entirely from scratch.
				</p>
				<p in:fly={{ duration: 400, x: -200, easing: cubicInOut, delay: 800 }}>
					In my free time I enjoy camping, reading, and gaming.
				</p>
			</div>
			<picture
				in:scale={{ duration: 400, easing: expoInOut, delay: 1000 }}
				class="flex w-2/5 mt-8 md:mt-0 md:w-1/4 max-w-sm aspect-square flex-shrink-0 items-center justify-center border-1 border-grey-0/25 bg-grey-3/50 dark:bg-grey-9/25 backdrop-blur-sm rounded-full shadow-sm shadow-grey-9/50 dark:shadow-grey-12/50"
			>
				<source srcset="/images/headshot.avif" type="image/avif" />
				<source srcset="/images/headshot.webp" type="image/webp" />
				<source srcset="/images/headshot.jpg" type="image/jpeg" />
				<img
					src="/images/headshot.jpg"
					alt="Me, smiling, with a sunset over the badlands blurred in the background. I look pretty good."
					width="2048"
					height="2048"
					class="w-[93%] h-auto rounded-full"
				/>
			</picture>
		</div>
	</div>
</div>
