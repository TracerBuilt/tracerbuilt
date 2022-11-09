<script lang="ts">
	export let mobile = false
</script>

<div
	class={`p-0.5 bg-gradient-to-br from-blue-9 via-purple-9 to-red-9 [&>picture>img]:rounded-md rounded-lg ${
		mobile
			? 'absolute -bottom-[2rem] right-0 w-1/5 shadow-xl shadow-grey-7'
			: 'w-11/12 mx-auto shadow-grey-9 shadow-lg'
	}`}
>
	<slot />
</div>
