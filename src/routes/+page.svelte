<script lang="ts">
	import HalfToneImage from '$lib/Components/Half_Tone_Image.svelte'
	import Headshot from '$lib/assets/headshot.png?enhanced'
</script>

<div class="absolute inset-0 z-0 flex items-end justify-end">
	<div class="max-h-screen max-w-2/3">
		<HalfToneImage>
			<enhanced:img src={Headshot} alt="Headshot" />
		</HalfToneImage>
	</div>
</div>
