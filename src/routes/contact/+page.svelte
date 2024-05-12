<script lang="ts">
	let loading = false
</script>

<div class="dark:text-grey-3 body-font relative">
	<form
		name="Contact"
		method="POST"
		action="/contact/success"
		class="container mx-auto py-24 px-5"
	>
		<input type="hidden" name="form-name" value="Contact" />
		<label class="hidden">
			Don’t fill this out if you’re human: <input name="bot-field" />
		</label>
		<div class="mb-12 flex w-full flex-col text-center">
			<h1
				class="title-font dark:text-grey-3 text-grey-10 mb-4 text-2xl font-medium sm:text-3xl"
			>
				Get In Touch
			</h1>
			<p class="mx-auto text-base leading-relaxed lg:w-2/3">
				I'm currently accepting clients, so if you're interested in working
				together, please feel free to send me a message.
			</p>
		</div>
		<div class="mx-auto md:w-2/3 lg:w-1/2">
			<div class="-m-2 flex flex-wrap">
				<div class="w-1/2 p-2">
					<div class="relative">
						<label
							for="name"
							class="text-grey-8 dark:text-grey-2 text-sm leading-7">Name</label
						>
						<div
							class="bg-grey-4 dark:bg-grey-8 from-blue-9 to-red-9 via-purple-9 rounded p-0.5 focus-within:bg-gradient-to-br"
						>
							<input
								type="text"
								id="name"
								name="name"
								required
								class="dark:bg-grey-10 dark:focus:bg-grey-11 dark:text-grey-2 bg-grey-0 text-grey-8 w-full rounded-sm border-none py-1 px-3 text-base leading-8 outline-none transition-colors duration-200 ease-in-out focus:ring-0"
							/>
						</div>
					</div>
				</div>
				<div class="w-1/2 p-2">
					<div class="relative">
						<label
							for="email"
							class="text-grey-8 dark:text-grey-2 text-sm leading-7"
							>Email</label
						>
						<div
							class="bg-grey-4 dark:bg-grey-8 from-blue-9 to-red-9 via-purple-9 rounded p-0.5 focus-within:bg-gradient-to-br"
						>
							<input
								type="email"
								id="email"
								name="email"
								required
								class="dark:bg-grey-10 dark:focus:bg-grey-11 dark:text-grey-2 bg-grey-0 text-grey-8 w-full rounded-sm border-none py-1 px-3 text-base leading-8 outline-none transition-colors duration-200 ease-in-out focus:ring-0"
							/>
						</div>
					</div>
				</div>
				<div class="w-full p-2">
					<div class="relative">
						<label for="message" class="text-sm leading-7">Message</label>
						<div
							class="bg-grey-4 dark:bg-grey-8 from-blue-9 to-red-9 via-purple-9 h-48 rounded p-0.5 focus-within:bg-gradient-to-br"
						>
							<textarea
								id="message"
								name="message"
								required
								class="dark:bg-grey-10 dark:focus:bg-grey-11 dark:text-grey-2 bg-grey-0 text-grey-8 h-full w-full resize-none rounded-sm border-none py-1 px-3 text-base leading-8 outline-none transition-colors duration-200 ease-in-out focus:ring-0"
							></textarea>
						</div>
					</div>
				</div>
				<div class="w-full p-2">
					<button
						type="submit"
						class="from-blue-9 via-red-9 to-blue-9 dark:from-blue-5 dark:via-red-5 dark:to-blue-5 group focus:animate-move-bg-fast hover:animate-move-bg-fast bg-400% disabled:from-grey-7 disabled:via-grey-7 disabled:to-grey-7 mx-auto flex rounded bg-gradient-to-r p-0.5 text-lg text-white transition-all hover:scale-110 focus:scale-110 focus:outline-none active:scale-90 disabled:hover:scale-100 disabled:hover:animate-none disabled:focus:scale-100"
					>
						<div class="bg-grey-0 dark:bg-grey-10 rounded-sm">
							<div
								class="from-blue-9 via-red-9 to-blue-9 dark:from-blue-5 dark:via-red-5 dark:to-blue-5 bg-400% group-hover:animate-move-bg-fast group-focus:animate-move-bg-fast group-disabled:text-grey-8 h-full w-full bg-gradient-to-r bg-clip-text pt-0.5 px-4 pb-1 text-transparent"
							>
								{loading ? 'Submitting...' : 'Submit'}
							</div>
						</div></button
					>
				</div>
				<div class="border-grey-6 mt-8 w-full border-t p-2 pt-8 text-center">
					<p class="my-5 leading-normal">
						<a
							href="mailto:tyler@tracerbuilt.dev"
							class="text-grey-9 dark:text-grey-4/100 active:from-blue-11 active:via-purple-11 active:to-red-11 from-blue-9 via-purple-9 to-red-9 hover:text-grey-4/0 bg-gradient-to-br bg-clip-text font-mono font-bold transition-all"
							>tyler@tracerbuilt.dev</a
						>
					</p>
					<span class="text-grey-9 dark:text-grey-4 inline-flex">
						<a
							href="https://github.com/TracerBuilt"
							class="hover:text-blue-9 active:text-purple-9 transition-colors"
							aria-label="Github"
						>
							<svg
								fill="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								class="h-5 w-5"
								viewBox="0 0 24 24"
							>
								<path
									d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
								/>
							</svg>
						</a>
						<a
							href="https://twitter.com/tracer_built"
							class="hover:text-blue-9 active:text-purple-9 ml-4 transition-colors"
							aria-label="Twitter"
						>
							<svg
								fill="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								class="h-5 w-5"
								viewBox="0 0 24 24"
							>
								<path
									d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
								/>
							</svg>
						</a>
						<a
							href="https://linkedin.com/in/TracerBuilt"
							class="hover:text-blue-9 active:text-purple-9 ml-4 transition-colors"
							aria-label="LinkedIn"
						>
							<svg
								fill="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								class="h-5 w-5"
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
