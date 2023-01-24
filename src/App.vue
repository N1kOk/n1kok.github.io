<template>
	<TheHeader/>

	<main>
		<section class="flex items-center min-h-screen h-max bg-[radial-gradient(at_50%_0,#224356,#222b3a)]">
			<div class="container flex max-lg:flex-col gap-4 min-h-[20rem]">
				<div class="flex flex-center w-full">
					<h1 class="text-5xl">
						<span class="font-bold">Frontend</span>
						<br>
						<span>Developer</span>
					</h1>
				</div>
				<div class="flex flex-center w-full">
					<div class="relative w-[15rem] h-[15rem] scale-150 select-none">
						<IconInteractive class="left-1/2 top-1/2 scale-[2]" href="https://vuejs.org/">
							<img src="/assets/images/vue.svg" alt="logo">
						</IconInteractive>

						<IconInteractive class="left-[30%] top-1/2"
						                 href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
							<img src="/assets/images/js.svg" alt="logo">
						</IconInteractive>

						<IconInteractive class="left-[70%] top-1/2" href="https://www.typescriptlang.org/">
							<img src="/assets/images/ts.svg" alt="logo">
						</IconInteractive>

						<IconInteractive class="left-1/2 top-[30%]" href="https://nuxt.com/">
							<img src="/assets/images/nuxt.svg" alt="logo">
						</IconInteractive>

						<IconInteractive class="left-1/2 top-[70%]" href="https://tailwindcss.com/">
							<img src="/assets/images/tailwind.svg" alt="logo">
						</IconInteractive>

						<IconInteractive class="left-1/3 top-1/3" href="https://git-scm.com/">
							<img src="/assets/images/git.svg" alt="logo">
						</IconInteractive>

						<IconInteractive class="left-2/3 top-1/3" href="https://webpack.js.org/">
							<img src="/assets/images/webpack.svg" alt="logo">
						</IconInteractive>

						<IconInteractive class="left-1/3 top-2/3" href="https://vitejs.dev/">
							<img src="/assets/images/vite.svg" alt="logo">
						</IconInteractive>

						<IconInteractive class="left-2/3 top-2/3" href="https://sass-lang.com/">
							<img src="/assets/images/sass.svg" alt="logo">
						</IconInteractive>

						<IconInteractive class="left-[22%] top-[22%]" href="https://postcss.org/">
							<img src="/assets/images/postcss.svg" alt="logo">
						</IconInteractive>

						<IconInteractive class="left-[78%] top-[22%]" href="https://www.docker.com/">
							<img src="/assets/images/docker.svg" alt="logo">
						</IconInteractive>

						<IconInteractive class="left-[22%] top-[78%]" href="https://jestjs.io/">
							<img src="/assets/images/jest.svg" alt="logo">
						</IconInteractive>

						<IconInteractive class="left-[78%] top-[78%]" href="https://storybook.js.org/">
							<img src="/assets/images/storybook.svg" alt="logo">
						</IconInteractive>

						<IconInteractive class="left-1/2 top-[85%]" href="https://nodejs.org/en/about/">
							<img src="/assets/images/nodejs.svg" alt="logo">
						</IconInteractive>
					</div>
				</div>
			</div>
		</section>

		<section>
			<div class="container flex flex-row-reverse justify-between h-full">
				<div class="flex flex-center w-full">
					<h2 class="text-4xl font-bold">Мои навыки</h2>
				</div>
				<div class="flex flex-center w-full">
					<div class="flex flex-col space-y-4 text-sm">
						<div class="flex gap-2">
							<div class="bg-white/10 rounded-full px-3">JavaScript</div>
							<div class="bg-white/10 rounded-full px-3">TypeScript</div>
						</div>
						<div class="flex space-x-2">
							<div class="bg-white/10 rounded-full px-3">Vue 3 (Composition API)</div>
							<div class="bg-white/10 rounded-full px-3">Vuex</div>
							<div class="bg-white/10 rounded-full px-3">Nuxt 3</div>
						</div>
						<div class="flex space-x-2">
							<div class="bg-white/10 rounded-full px-3">HTML</div>
							<div class="bg-white/10 rounded-full px-3">CSS</div>
							<div class="bg-white/10 rounded-full px-3">Sass</div>
							<div class="bg-white/10 rounded-full px-3">TailwindCSS</div>
							<div class="bg-white/10 rounded-full px-3">PostCSS</div>
						</div>
						<div class="flex space-x-2">
							<div class="bg-white/10 rounded-full px-3">Webpack</div>
							<div class="bg-white/10 rounded-full px-3">Vite</div>
							<div class="bg-white/10 rounded-full px-3">Gulp</div>
							<div class="bg-white/10 rounded-full px-3">Docker</div>
						</div>
						<div class="flex space-x-2">
							<div class="bg-white/10 rounded-full px-3">Jest</div>
							<div class="bg-white/10 rounded-full px-3">Storybook</div>
						</div>
						<div class="flex space-x-2">
							<div class="bg-white/10 rounded-full px-3">Git</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="bg-[#223343]">
			<div class="container flex">
				<h2 class="mx-auto text-4xl font-bold">Мои проекты</h2>
			</div>
		</section>
	</main>
</template>

<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import IconInteractive from '@/components/IconInteractive.vue'</script>

<style scoped lang="scss">
main {
	section {
		padding-top: calc(var(--sectionPadding));
		padding-bottom: calc(var(--sectionPadding));
	}

	section:nth-child(1) {
		//@apply pt-0;
		//padding-top: calc(var(--headerHeight) + var(--sectionPadding));
	}

	//section:last-child {
	//	padding-bottom: calc(var(--sectionPadding));
	//}
}
</style>