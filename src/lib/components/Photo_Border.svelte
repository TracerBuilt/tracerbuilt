<script lang="ts">
	export let format: 'mobile' | 'desktop' | '' = ''
</script>

<div
	class={`p-0.5 bg-gradient-to-br from-blue-9 via-purple-9 to-red-9 [&>picture>img]:rounded-md rounded-lg transition-all ${
		format === 'mobile'
			? 'absolute -bottom-[2rem] right-0 w-1/5 group-hover:shadow-xl shadow-lg shadow-grey-7 group-hover:shadow-grey-7 dark:group-hover:shadow-grey-12 dark:shadow-grey-12'
			: format === 'desktop'
			? 'w-11/12 mx-auto shadow-grey-9 dark:shadow-grey-12 group-hover:dark:shadow-grey-12 group-hover:shadow-grey-9 shadow-md group-hover:shadow-lg'
			: 'shadow-grey-9 dark:shadow-grey-12 shadow-md mb-12 group-hover:shadow-lg group-hover:dark:shadow-grey-12 group-hover:shadow-grey-9'
	}`}
>
	<slot />
</div>
