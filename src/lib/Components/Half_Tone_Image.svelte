<script lang="ts">
	const { children } = $props()
</script>

<div class="halftone">
	{@render children()}
	<div class="halftone-ink"></div>
</div>

<style>
	:root {
		--halftone-size: 7px;
		--halftone-bleed: 0.35;
	}

	.halftone {
		--halftone-dot-size: calc(var(--halftone-size) * var(--halftone-bleed));
		--halftone-color-dot-size: var(--halftone-dot-size);
		position: relative;
		margin: -18px;
		filter: brightness(calc(0.5 + var(--halftone-bleed) * 0.3))
			blur(calc(var(--halftone-size) * 0.1)) contrast(1000) blur(0.6px);
		overflow: hidden;
	}

	.halftone-ink {
		mix-blend-mode: screen;

		&::before {
			transform: rotate(30deg);
			background-image:
				radial-gradient(var(--halftone-dot-size) at 25% 75%, #000, #666, #fff),
				radial-gradient(var(--halftone-color-dot-size) at 75% 25%, #000, #666, #fff),
				radial-gradient(var(--halftone-color-dot-size) at 25% 25%, #ff0, #ff6, #fff),
				radial-gradient(var(--halftone-color-dot-size) at 75% 75%, #ff0, #ff6, #fff);
		}

		&::before,
		&::after {
			content: '';
			position: absolute;
			inset: -30%;
			background-size: var(--halftone-size) var(--halftone-size);
			background-blend-mode: multiply;
			mix-blend-mode: multiply;
		}

		&::after {
			transform: rotate(calc(-21deg + var(--halftone-rotation)))
				translateX(calc(var(--halftone-size) * 0.58));
			background-image:
				radial-gradient(var(--halftone-color-dot-size) at 75% 25%, #f0f, #f6f, #fff),
				radial-gradient(var(--halftone-color-dot-size) at 25% 75%, #f0f, #f6f, #fff),
				radial-gradient(var(--halftone-color-dot-size) at 75% 75%, #0ff, #6ff, #fff),
				radial-gradient(var(--halftone-color-dot-size) at 25% 25%, #0ff, #6ff, #fff);
			transition: transform 100ms;
		}
	}

	.overlay {
		/* 3. Apply multiple masks: the image shape AND the dot pattern */
		-webkit-mask-image: var(--mask-url);
		mask-image: var(--mask-url);

		/* 4. Define how the masks combine */
		/* 'source-in' / 'intersect' means: "Only show where ALL masks overlap".
       This is the key to the effect. It clips the repeating dot pattern
       to the alpha channel of the source image. */
		-webkit-mask-composite: source-in;
		mask-composite: intersect;

		/* 5. Define size for each mask */
		/* `cover` applies to our image url, making it fit the container. */
		/* `var(--dot-size)` applies to our dot mask, defining the grid size. */
		-webkit-mask-size:
			cover,
			var(--dot-size) var(--dot-size);
		mask-size:
			cover,
			var(--dot-size) var(--dot-size);
	}
</style>
