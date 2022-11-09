<script lang="ts">
	import PhotoBorder from '$lib/components/Photo_Border.svelte'
</script>

<div class="mx-2 relative mb-12">
	<PhotoBorder>
		<picture>
			<source srcset="/images/jefferson-home-desktop.avif" type="image/avif" />
			<source srcset="/images/jefferson-home-desktop.webp" type="image/webp" />
			<source srcset="/images/jefferson-home-desktop.jpg" type="image/jpeg" />
			<img
				src="/images/jefferson-theatre-company.jpg"
				alt="Home page of the Jefferson Theatre Company website on desktop"
				width="2540"
				height="1420"
			/>
		</picture>
	</PhotoBorder>
	<PhotoBorder mobile>
		<picture>
			<source srcset="/images/jefferson-home-mobile.avif" type="image/avif" />
			<source srcset="/images/jefferson-home-mobile.webp" type="image/webp" />
			<source srcset="/images/jefferson-home-mobile.jpg" type="image/jpeg" />
			<img
				src="/images/jefferson-home-mobile.jpg"
				alt="Home page of the Jefferson Theatre Company website on mobile"
				width="780"
				height="1688"
			/>
		</picture>
	</PhotoBorder>
</div>
<div class="max-w-prose font-serif mx-auto [&>p]:mb-4 [&>p]:leading-relaxed">
	<h1 class="text-3xl font-sans leading-none mb-4">Jefferson Theatre Company</h1>
	<div class="font-sans text-grey-9 leading-none mb-6">
		Svelte, SvelteKit, Prismic, Snipcart, Google APIs, Netlify
	</div>
	<a
		href="https://jeffersontheatrecompany.org"
		class="font-sans leading-none mb-8 inline-block text-lg text-blue-9 hover:text-blue-11 hover:underline transition-all ease-in-out active:text-blue-12 font-light"
		><strong>Live Site</strong></a
	>
	<p>
		This was my first production SvelteKit project, and my first time implementing a custom <span
			class="small-caps">cms</span
		> integration. The entire site was redone from scratch with new tech to be much more slick, performant,
		and professional-looking.
	</p>
	<p>
		Working with the client to find solutions to their problems with their current site was both
		satisfying and a great learning experience.
	</p>

	<h2 class="text-2xl font-sans">Client Requirements</h2>

	<p>
		They had a few major concerns about their current site that they wanted addressed in the new
		one:
	</p>
	<ul class="list-disc pl-4 sm:pl-0 mb-4">
		<li>Speed</li>
		<li>Ease of navigation</li>
		<li>Simple maintenance</li>
		<li>A streamlined application process</li>
	</ul>
	<p>
		And my own goal for the new site was to simplify things for the client as much as possible. This
		was a non-profit company ran entirely by the parents of the theater students, so it was
		important to me that they'd need to spend as little as possible of their alreaady limited time
		keeping the site running.
	</p>

	<h2 class="text-2xl font-sans mb-4">The Solutions</h2>
	<h3 class="text-xl font-sans mb-2">Speed It Up</h3>
	<p>
		Building the site with Svelte and SvelteKit allowed me to provide an inherently fast and
		responsive experience. I paid special attention to keeping the site as static as possible, and
		set it to simply rebuild when changes to the <span class="small-caps">cms</span> were detected via
		webhook.
	</p>
	<h3 class="text-xl font-sans mb-2">Simplify the Structure</h3>
	<p>
		The old site had been structured much like a blog, and the only way to find certain important
		pages was through a single page with a collection of important links.
	</p>
	<p>
		I simplified the structure, and organized the important static pages into proper categories,
		tying each page or type to a structure in Prismic to allow simple maintenance and revision.
	</p>
	<p>
		I also created a custom data structure in Prismic for all their productions, which allowed them
		to be displayed in the relevant areas of the site, in the order of their dates they would or had
		been shown on. This also allowed the data to be pulled into things like a calendar of events,
		and the application process itself.
	</p>
	<div
		class="p-0.5 bg-gradient-to-br from-blue-9 via-purple-9 to-red-9 [&>picture>img]:rounded-md rounded-lg shadow-lg shadow-grey-9 mb-12"
	>
		<picture>
			<source srcset="/images/jefferson-calendar.avif" type="image/avif" />
			<source srcset="/images/jefferson-calendar.webp" type="image/webp" />
			<source srcset="/images/jefferson-calendar.jpg" type="image/jpeg" />
			<img
				src="/images/jefferson-calendar.jpg"
				alt="Home page of the Jefferson Theatre Company website on mobile"
				width="780"
				height="1688"
			/>
		</picture>
	</div>
	<h3 class="text-xl font-sans mb-2">Keep Operation Simple</h3>
	<p>
		The <span class="small-caps text-lg">cms</span> structure was kept intentionally simple: the vast
		majority of the work is simply creating and updating instances of either productions or announcements.
		And the site does all the work of collocating the information itself.
	</p>
	<p>
		Switches can be flipped to enable audition applications; showtimes, descriptions, cast lists,
		etc. can be added to productions; and announcements can be scheduled if they are for events like
		fundraisers.
	</p>
	<div
		class="p-0.5 bg-gradient-to-br from-blue-9 via-purple-9 to-red-9 [&>picture>img]:rounded-md rounded-lg shadow-lg shadow-grey-9 mb-12"
	>
		<picture>
			<source srcset="/images/jefferson-about.avif" type="image/avif" />
			<source srcset="/images/jefferson-about.webp" type="image/webp" />
			<source srcset="/images/jefferson-about.jpg" type="image/jpeg" />
			<img
				src="/images/jefferson-about.jpg"
				alt="Home page of the Jefferson Theatre Company website on mobile"
				width="780"
				height="1688"
			/>
		</picture>
	</div>
	<h3 class="text-xl font-sans mb-2">Streamline Audition Applications</h3>
	<p>
		This was the most challenging portion of the work. Previously, applications were submitted
		through Google Forms, and names would be checked manually against the checks they'd received for
		the participation fees. This led to a lot of confusion and extra work for the parents keeping
		this thing running.
	</p>
	<h4 class="text-lg font-sans mb-2">The Solution</h4>
	<p>
		I suggested that we automate as much of the process as possible by doing primarily two things:
		the first and most important would be to allow and encourage students to pay their fees when
		they submitted their application; and the second, which followed from this, was to organize the
		applications and clearly mark who had paid on the forms themselves.
	</p>
	<h4 class="text-lg font-sans mb-2">The Implementation</h4>
	<p>
		The first part of this was simple. I created a custom form for them which couldn't be submitted
		without either paying the fee, or acknowledging that the fee would need to be provided at the
		audition. A PayPal payment would be made in most cases, and after it was successful the form
		would be submitted.
	</p>
	<p>
		The second portion was much less straightforward. In talking with the client, we determined it
		would be most helpful to have the data in Google Sheets, where they kept most of their paperwork
		already, and that there be two sheets: one would be a single sheet with a line for each
		submitted application, with the most important information that they needed to see at a glance;
		the other would be a collection of sheets, where each sheet contained one entire application.
	</p>
	<h4 class="text-lg font-sans mb-2">The Struggle with Google Sheets' API</h4>
	<p>
		The Google Sheets API is... not especially straightforward, especially when dealing with sheets
		within a spreadsheet. Add onto this the fact that the API calls were happening from a Netlify
		serverless function, and there was a fair bit to debug.
	</p>
	<p>
		The most difficult problem came during testing once everything was wired up. The condensed
		single-page spreadsheet was getting updated properly every time, but while the spreadsheet with
		a collection of single sheets for each application would always create a new sheet with the name
		of the student, the application data itself was occasionally missing.
	</p>
	<p>
		Due to the nature of the Google Sheets API, the code to create and update these sheets was a
		maze of promises and callbacks, and I struggled for quite a while with this problem until I
		decided to change the structure to be more callback-based, which helped with my mental model of
		the process and allowed me to guarantee successful API responses on sheet creation <em
			>before</em
		> attempting to update the data in the newly created sheet.
	</p>
</div>
