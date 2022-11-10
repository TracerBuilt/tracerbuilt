<script lang="ts">
	export let format: 'mobile' | 'desktop' | '' = ''
</script>

<div
	class={`p-0.5 bg-gradient-to-br from-blue-9 via-purple-9 to-red-9 [&>picture>img]:rounded-md rounded-lg ${
		format === 'mobile'
			? 'absolute -bottom-[2rem] right-0 w-1/5 shadow-xl shadow-grey-7 dark:shadow-grey-12'
			: format === 'desktop'
			? 'w-11/12 mx-auto shadow-grey-9 dark:shadow-grey-12 shadow-lg'
			: 'shadow-grey-9 dark:shadow-grey-12 shadow-lg mb-12'
	}`}
>
	<slot />
</div>
