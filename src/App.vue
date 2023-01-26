<template>
	<TheHeader/>

	<main>
		<section class="flex flex-col items-center min-h-screen h-max bg-[radial-gradient(at_50%_0,#224356,#222b3a)]">
			<div class="container flex flex-1 justify-around max-lg:flex-col gap-4">
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
			<div class="anchor" id="skills"/>
			<div class="container flex flex-col lg:flex-row-reverse justify-between gap-x-4 gap-y-8">
				<div class="flex items-center flex-auto">
					<h2 class="mx-auto text-4xl font-bold">Мои навыки</h2>
				</div>
				<div class="flex flex-center flex-auto">
					<div class="flex flex-col space-y-4">
						<div class="flex flex-wrap gap-2">
							<AppChip>JavaScript</AppChip>
							<AppChip>TypeScript</AppChip>
						</div>
						<div class="flex flex-wrap gap-2">
							<AppChip>Vue 3 (Composition API)</AppChip>
							<AppChip>Vuex</AppChip>
							<AppChip>Nuxt 3</AppChip>
						</div>
						<div class="flex flex-wrap gap-2">
							<AppChip>HTML</AppChip>
							<AppChip>CSS</AppChip>
							<AppChip>Sass</AppChip>
							<AppChip>TailwindCSS</AppChip>
							<AppChip>PostCSS</AppChip>
						</div>
						<div class="flex flex-wrap gap-2">
							<AppChip>Webpack</AppChip>
							<AppChip>Vite</AppChip>
							<AppChip>Gulp</AppChip>
							<AppChip>Docker</AppChip>
						</div>
						<div class="flex flex-wrap gap-2">
							<AppChip>Jest</AppChip>
							<AppChip>Storybook</AppChip>
						</div>
						<div class="flex flex-wrap gap-2">
							<AppChip>Git</AppChip>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="bg-[#223343]">
			<div class="anchor" id="projects"/>

			<div class="container flex flex-col space-y-8">
				<h2 class="mx-auto text-4xl font-bold">Мои проекты</h2>

				<div class="grid grid-cols-[repeat(auto-fit,minmax(14rem,1fr))] gap-4">

					<div v-for="item in projects" class="group relative overflow-hidden rounded-3xl">
						<div class="absolute w-full h-[5rem] transition-[filter] group-hover:blur-xl">
							<div
								class="flex flex-center h-full space-x-1"
								:style="`background: ${item.color}`"
							>
								<img v-if="item.logoUrl" class="w-10 h-10" :src="item.logoUrl" alt="logo">
								<div class="text-3xl font-bold" v-html="item.logoHTML"/>
							</div>
						</div>
						<div class="relative flex flex-col w-[calc(100%_+_1px)] h-full p-4 space-y-2 z-10 text-sm bg-black/50
						transition-transform translate-y-[5rem] group-hover:translate-y-0 will-change-transform">
							<div>{{ item.description }}</div>
							<div class="flex-1"/>
							<div class="space-y-4">
								<div class="space-y-1">
									<div class="font-bold">Стек технологий</div>
									<div class="flex flex-wrap gap-1 text-xs">
										<AppChip v-for="name in item.technologies" size="sm">{{ name }}</AppChip>
									</div>
								</div>
								<div class="flex gap-x-8 gap-y-2">
									<AppLink
										v-if="item.url"
										class="flex items-center space-x-1"
										:href="item.url"
										target="_blank"
									>
										<img class="w-4 h-4" src="/assets/images/link.svg" alt="site">
										<span>Сайт</span>
									</AppLink>
									<AppLink
										v-if="item.githubUrl"
										class="flex items-center space-x-1"
										:href="item.githubUrl"
										target="_blank"
									>
										<img class="w-4 h-4" src="/assets/images/github.svg" alt="github">
										<span>GitHub</span>
									</AppLink>
								</div>
							</div>
						</div>
						<div class="absolute left-0 bottom-0 h-20 w-full z-20 bg-gradient-to-t from-black
						 transition-opacity group-hover:opacity-0 pointer-events-none">
							<div class="absolute lg:hidden bottom-3 w-full text-center text-sm">
								Нажмите, чтобы посмотреть
							</div>
						</div>
					</div>

				</div>
			</div>
		</section>

		<section>
			<div class="anchor" id="contacts"/>

			<div class="container flex flex-col space-y-8">
				<h2 class="mx-auto text-4xl font-bold">Мои контакты</h2>

				<div class="flex flex-wrap justify-around gap-4 font-bold">
					<AppLink
						class="flex items-center space-x-1"
						:href="contacts.skype"
						target="_blank"
					>
						<IconSkype class="w-5 h-5"/>
						<span>Skype</span>
					</AppLink>
					<AppLink
						class="flex items-center space-x-1"
						:href="`mailto:${contacts.email}`"
						target="_blank"
					>
						<IconMail class="w-5 h-5"/>
						<span>E-Mail</span>
					</AppLink>
					<AppLink
						class="flex items-center space-x-1"
						:href="contacts.telegram"
						target="_blank"
					>
						<IconTelegram class="w-5 h-5"/>
						<span>Telegram</span>
					</AppLink>
					<AppLink
						class="flex items-center space-x-1"
						:href="contacts.github"
						target="_blank"
					>
						<img class="w-5 h-5" src="/assets/images/github.svg" alt="github logo">
						<span>GitHub</span>
					</AppLink>
					<AppLink
						class="flex items-center space-x-1"
						:href="contacts.codewars"
						target="_blank"
					>
						<img class="w-5 h-5" src="/assets/images/codewars.svg" alt="codewars logo">
						<span>CodeWars</span>
					</AppLink>
				</div>
			</div>
		</section>
	</main>
</template>

<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import IconInteractive from '@/components/IconInteractive.vue'
import AppChip from '@/components/AppChip.vue'
import AppLink from '@/components/AppLink.vue'
import IconMail from '@/components/icons/IconMail.vue'
import IconSkype from '@/components/icons/IconSkype.vue'
import IconTelegram from '@/components/icons/IconTelegram.vue'
import { contacts } from '@/config/contacts'
import { projects } from '@/config/projects'</script>

<style scoped lang="scss">
main {
	@apply overflow-hidden;

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

.anchor {
	@apply relative -top-[calc(var(--headerHeight)_+_var(--sectionPadding))]
}
</style>