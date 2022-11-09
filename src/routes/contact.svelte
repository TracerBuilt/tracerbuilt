<script lang="ts">
	import { fade } from 'svelte/transition'

	let loading = false
</script>

<div in:fade class="dark:text-grey-3 dark:bg-grey-10 body-font relative">
	<form
		method="POST"
		name="Contact"
		data-netlify="true"
		netlify-honeypot="bot-field"
		class="container px-5 py-24 mx-auto"
	>
		<input type="hidden" name="form-name" value="Contact" />
		<label class="hidden">
			Don’t fill this out if you’re human: <input name="bot-field" />
		</label>
		<div class="flex flex-col text-center w-full mb-12">
			<h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 dark:text-grey-3 text-grey-10">
				Get In Touch
			</h1>
			<p class="lg:w-2/3 mx-auto leading-relaxed text-base">
				I'm currently accepting clients, so if you're interested in working together, please feel
				free to send me a message.
			</p>
		</div>
		<div class="lg:w-1/2 md:w-2/3 mx-auto">
			<div class="flex flex-wrap -m-2">
				<div class="p-2 w-1/2">
					<div class="relative">
						<label for="name" class="leading-7 text-sm text-grey-8 dark:text-grey-2">Name</label>
						<div
							class="bg-grey-4 from-blue-9 to-red-9 via-purple-9 rounded p-0.5 focus-within:bg-gradient-to-br"
						>
							<input
								type="text"
								id="name"
								name="name"
								class="w-full rounded-sm outline-none border-none focus:ring-0 bg-grey-0 text-base text-grey-8 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
							/>
						</div>
					</div>
				</div>
				<div class="p-2 w-1/2">
					<div class="relative">
						<label for="email" class="leading-7 text-sm text-grey-8 dark:text-grey-2">Email</label>
						<div
							class="bg-grey-4 from-blue-9 to-red-9 via-purple-9 rounded p-0.5 focus-within:bg-gradient-to-br"
						>
							<input
								type="email"
								id="email"
								name="email"
								class="w-full rounded-sm outline-none border-none focus:ring-0 bg-grey-0 text-base text-grey-8 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
							/>
						</div>
					</div>
				</div>
				<div class="p-2 w-full">
					<div class="relative">
						<label for="message" class="leading-7 text-sm text-gray-400">Message</label>
						<div
							class="bg-grey-4 from-blue-9 to-red-9 via-purple-9 h-48 rounded p-0.5 focus-within:bg-gradient-to-br"
						>
							<textarea
								id="message"
								name="message"
								class="w-full rounded-sm outline-none border-none focus:ring-0 bg-grey-0 text-base resize-none text-grey-8 py-1 px-3 leading-8 h-full transition-colors duration-200 ease-in-out"
							/>
						</div>
					</div>
				</div>
				<div class="p-2 w-full">
					<button
						class="text-white bg-gradient-to-r from-blue-9 via-red-9 to-blue-9 focus:outline-none hover:bg-indigo-7 p-0.5 flex mx-auto rounded text-lg group focus:animate-move-bg-fast hover:animate-move-bg-fast hover:scale-110 active:scale-90 focus:scale-110 bg-400% disabled:from-grey-7 disabled:via-grey-7 disabled:to-grey-7 disabled:hover:animate-none disabled:hover:scale-100 disabled:focus:scale-100 group"
					>
						<div class="bg-grey-0 rounded-sm">
							<div
								class="bg-clip-text text-transparent bg-gradient-to-r from-blue-9 via-red-9 to-blue-9 bg-400% group-hover:animate-move-bg-fast group-focus:animate-move-bg-fast w-full h-full px-4 pb-1 pt-0.5 group-disabled:text-grey-8"
							>
								{loading ? 'Submitting...' : 'Submit'}
							</div>
						</div></button
					>
				</div>
				<div class="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center">
					<p class="leading-normal my-5">
						<a
							href="mailto:tyler@tracerbuilt.dev"
							class="font-mono font-bold text-grey-9 bg-clip-text hover:bg-gradient-to-br active:from-blue-11 active:via-purple-11 active:to-red-11 from-blue-9 via-purple-9 to-red-9 hover:text-transparent"
							>tyler@tracerbuilt.dev</a
						>
					</p>
					<span class="inline-flex text-grey-9">
						<a
							href="https://github.com/TracerBuilt"
							class="ml-4 hover:text-blue-9 active:text-purple-9 transition-colors"
						>
							<svg
								fill="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								class="w-5 h-5"
								viewBox="0 0 24 24"
							>
								<path
									d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
								/>
							</svg>
						</a>
						<a
							href="https://twitter.com/tracer_built"
							class="ml-4 hover:text-blue-9 active:text-purple-9 transition-colors"
						>
							<svg
								fill="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								class="w-5 h-5"
								viewBox="0 0 24 24"
							>
								<path
									d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
								/>
							</svg>
						</a>
						<a
							href="https://linkedin.com/in/TracerBuilt"
							class="ml-4 hover:text-blue-9 active:text-purple-9 transition-colors"
						>
							<svg
								fill="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								class="w-5 h-5"
								viewBox="0 0 24 24"
							>
								<path
									d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
								/>
							</svg>
						</a>
					</span>
				</div>
			</div>
		</div>
	</form>
</div>
