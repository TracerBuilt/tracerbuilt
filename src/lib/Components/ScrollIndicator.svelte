<script lang="ts">
	let showArrow = $state(false)
	let scrollDetected = $state(false)

	$effect(() => {
		if (scrollDetected) {
			showArrow = false
			return
		}

		const scrollTimer = setTimeout(() => {
			showArrow = true
		}, 7000) // 7 seconds

		const handleScroll = () => {
			scrollDetected = true
			clearTimeout(scrollTimer)
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			clearTimeout(scrollTimer)
			window.removeEventListener('scroll', handleScroll)
		}
	})
</script>

{#if showArrow}
	<div
		class="animate-scroll-pulse fixed -right-1/2 bottom-5 left-1/2 z-50 flex flex-col items-center"
	>
		<img src="/icons/down-chevron-svgrepo-com.svg" alt="Scroll Down" class="h-10 w-10" />
	</div>
{/if}
