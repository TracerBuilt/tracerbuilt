<script lang="ts">
	let { data } = $props()
	let { Content } = data
	let {
		title,
		excerpt,
		date,
		updated,
		cover_image,
		cover_width,
		cover_height,
		categories
	} = data.meta
</script>

<svelte:head>
	<!-- Be sure to add your image files and un-comment the lines below -->
	<title>{title}</title>
	<meta data-key="description" name="description" content={excerpt} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />
	<meta property="og:description" content={excerpt} />
	<meta name="twitter:description" content={excerpt} />
	<!-- <meta property="og:image" content="https://yourdomain.com/image_path" /> -->
	<meta property="og:image:width" content={cover_width} />
	<meta property="og:image:height" content={cover_height} />
	<!-- <meta name="twitter:image" content="https://yourdomain.com/image_path" /> -->
</svelte:head>

<article class="[&_p]:font-serif">
	<svelte:component this={Content} />
</article>
