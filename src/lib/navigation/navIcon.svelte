<script lang="ts">
	export let open = false
</script>

<button class:open on:click={() => (open = !open)}>
	<svg width="32" height="24">
		<line id="top" x1="0" y1="2" x2="32" y2="2" />
		<line id="middle" x1="0" y1="12" x2="32" y2="12" />
		<line id="bottom" x1="0" y1="22" x2="32" y2="22" />
	</svg>
</button>

<style lang="scss">
	svg {
		min-height: 26px;
		cursor: pointer;
		transition: transform 0.3s ease-in-out;
	}

	svg line {
		stroke: currentcolor;
		stroke-width: 3;
		transition: transform 0.3s ease-in-out;
	}

	button {
		z-index: 20;
		height: 26px;
		padding-right: var(--space--5);
		border: none;
		margin: 0;
		background: transparent;
		color: var(--text);
	}

	.open #top {
		transform: translate(6px, 0px) rotate(45deg);
	}

	.open #middle {
		transform: translateX(-32px);
		transition: all 0.2s ease-in-out;
	}

	.open #bottom {
		transform: translate(-12px, 9px) rotate(-45deg);
	}
</style>
