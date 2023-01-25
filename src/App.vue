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
			<div class="container flex flex-row-reverse justify-between gap-4">
				<div class="flex flex-center w-full">
					<h2 class="text-4xl font-bold">Мои навыки</h2>
				</div>
				<div class="flex flex-center w-full">
					<div class="flex flex-col space-y-4">
						<div class="flex gap-2">
							<AppChip>JavaScript</AppChip>
							<AppChip>TypeScript</AppChip>
						</div>
						<div class="flex space-x-2">
							<AppChip>Vue 3 (Composition API)</AppChip>
							<AppChip>Vuex</AppChip>
							<AppChip>Nuxt 3</AppChip>
						</div>
						<div class="flex space-x-2">
							<AppChip>HTML</AppChip>
							<AppChip>CSS</AppChip>
							<AppChip>Sass</AppChip>
							<AppChip>TailwindCSS</AppChip>
							<AppChip>PostCSS</AppChip>
						</div>
						<div class="flex space-x-2">
							<AppChip>Webpack</AppChip>
							<AppChip>Vite</AppChip>
							<AppChip>Gulp</AppChip>
							<AppChip>Docker</AppChip>
						</div>
						<div class="flex space-x-2">
							<AppChip>Jest</AppChip>
							<AppChip>Storybook</AppChip>
						</div>
						<div class="flex space-x-2">
							<AppChip>Git</AppChip>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="bg-[#223343]">
			<div class="container flex flex-col space-y-8">
				<h2 class="mx-auto text-4xl font-bold">Мои проекты</h2>
				<div class="grid grid-cols-[repeat(auto-fit,minmax(14rem,1fr))] gap-4">
					<div class="group relative overflow-hidden rounded-3xl">
						<div class="absolute w-full h-[5rem] transition-[filter] group-hover:blur-md">
							<div class="flex flex-center h-full space-x-1 bg-[#149dcc]">
								<img class="w-10 h-10" src="/assets/images/dz-helper.svg" alt="dz-helper logo">
								<div class="text-3xl font-bold">DZ-Helper</div>
							</div>
						</div>
						<div class="relative w-[calc(100%_+_1px)] h-full p-4 space-y-4 z-10 text-sm bg-black/25
						transition-transform translate-y-[5rem] group-hover:translate-y-0 will-change-transform">
							<div>
								Автоматизированное выполнение школьных домашних заданий с помощью расширений для
								браузеров
							</div>
							<div>
								<a class="link" href="https://dz-helper.ru" target="_blank">Перейти на сайт</a>
								<br>
								<a class="link" href="#" target="_blank">Перейти в GitHub</a>
							</div>
							<div class="space-y-1">
								<div class="font-bold">Стек технологий</div>
								<div class="flex gap-1 text-xs">
									<AppChip size="sm">TypeScript</AppChip>
								</div>
							</div>
						</div>
						<div class="absolute left-0 bottom-0 h-20 w-full z-20 bg-gradient-to-t from-black
						 transition-opacity group-hover:opacity-0 pointer-events-none">
							<div class="hidden lg:absolute bottom-1 w-full text-center text-xs">
								Нажмите, чтобы посмотреть
							</div>
						</div>
					</div>
					<div class="overflow-hidden bg-white/10 rounded-3xl">
						<img class="h-[100px] object-cover" src="/assets/images/ts.svg" alt="dz-helper logo">
						<div class="p-4 space-y-1">
							<h3 class="text-2xl font-bold">SmartVK</h3>
							<div>Тестовое описание проекта</div>
						</div>
					</div>
					<div class="overflow-hidden bg-white/10 rounded-3xl">
						<img class="h-[100px] object-cover" src="/assets/images/ts.svg" alt="dz-helper logo">
						<div class="p-4 space-y-1">
							<h3 class="text-2xl font-bold">AVTools</h3>
							<div>Тестовое описание проекта</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section>
			<div class="container">
				<!--... + GitHub + CodeWars-->
			</div>
		</section>
	</main>
</template>

<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import IconInteractive from '@/components/IconInteractive.vue'
import AppChip from '@/components/AppChip.vue'</script>

<style scoped lang="scss">
main {
	section {
		padding: calc(var(--sectionPadding)) 0;

		&:nth-child(1) {
			padding: calc(var(--headerHeight) + var(--sectionPadding)) 0;
		}

		&:last-child {
			padding-bottom: calc(var(--sectionPadding) * 2);
		}
	}
}
</style>