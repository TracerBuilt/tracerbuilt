<script lang="ts">
	import { fly, scale } from 'svelte/transition'
	import { cubicInOut, expoInOut } from 'svelte/easing'
</script>

<div
	in:fly={{ duration: 400, x: -200, easing: cubicInOut }}
	class="text-center dark:text-grey-3 text-grey-1 w-screen bg-gradient-to-br from-blue-9 via-purple-9 pb-12 pt-4 -skew-y-3 to-red-9 -mx-2 mb-16 dark:from-blue-11 dark:via-purple-11 dark:to-red-11"
>
	<div class="w-11/12 skew-y-3 mx-auto">
		<h2 in:fly={{ duration: 400, x: -200, easing: cubicInOut, delay: 200 }} class="text-3xl">
			About Me
		</h2>
		<div class="flex flex-col items-center justify-center md:flex-row md:items-start">
			<div class="text-left max-w-prose [&>p]:mb-4 font-serif">
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
				class="flex w-1/4 aspect-square flex-shrink-0 items-center justify-center border-1 border-grey-0/25 bg-grey-3/50 dark:bg-grey-9/25 backdrop-blur-sm rounded-full shadow-md shadow-grey-9 dark:shadow-grey-12"
			>
				<source srcset="/images/profile-picture.webp" type="image/webp" />
				<source srcset="/images/profile-picture.jpg" type="image/jpeg" />
				<img
					src="/images/profile-picture.jpg"
					alt="Me, in a painted style, with a moustache. I look pretty good."
					width="1031"
					height="1031"
					class="w-[93%] h-auto rounded-full"
				/>
			</picture>
		</div>
	</div>
</div>
