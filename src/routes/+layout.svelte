<script lang="ts">
	import '../app.css'

	let { children } = $props()
</script>

<div class="flex min-h-screen flex-col bg-gray-50">
	<!-- Header -->
	<header class="fixed top-0 z-10 w-full bg-white px-6 py-4 shadow-md">
		<div class="container mx-auto flex items-center justify-between">
			<div class="text-xl font-bold text-gray-800">
				<a href="/">DevPortfolio</a>
			</div>
			<nav>
				<ul class="flex space-x-6">
					<li><a href="/projects" class="text-gray-600 hover:text-blue-500">Projects</a></li>
					<li><a href="/about" class="text-gray-600 hover:text-blue-500">About</a></li>
					<li><a href="/contact" class="text-gray-600 hover:text-blue-500">Contact</a></li>
				</ul>
			</nav>
		</div>
	</header>

	<!-- Main Content Slot -->
	<main class="mt-16 flex-grow px-6 py-8">
		<div class="container mx-auto max-w-5xl">
			{@render children()}
		</div>
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
</div>
