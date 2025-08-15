<script lang="ts">
	import '@fontsource-variable/eb-garamond'
	import '@fontsource-variable/eb-garamond/wght-italic.css'
	import '../app.css'

	let { children } = $props()
</script>

<!-- Main Content Slot -->
<main class="flex-grow">
	{@render children()}
</main>

<!-- Footer -->
<footer class="z-10 bg-gray-800 px-6 py-6 text-white">
	<div class="container mx-auto text-center">
		<p class="mb-2">&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
		<div class="flex justify-center space-x-4">
			<a href="#" class="hover:text-blue-300">GitHub</a>
			<a href="#" class="hover:text-blue-300">LinkedIn</a>
			<a href="#" class="hover:text-blue-300">Twitter</a>
		</div>
	</div>
</footer>
