<template>
	<TheHeader/>

	<main>
		<section class="h-[1px] min-h-screen bg-[radial-gradient(at_50%_0,#224356,#222b3a)]">
			<div class="container flex max-lg:flex-col gap-4 h-full min-h-[15rem]">
				<div class="flex flex-center w-full text-5xl">
					<div>
						<div class="font-bold">Frontend</div>
						<div>Developer</div>
					</div>
				</div>
				<div class="flex flex-center w-full">
					<div class="relative w-[15rem] h-[15rem] scale-150 select-none">
						<IconInteractive class="left-1/2 top-1/2 scale-[2]">
							<img src="/assets/images/vue.svg" alt="logo">
						</IconInteractive>

						<IconInteractive class="left-[30%] top-1/2">
							<img src="/assets/images/js.svg" alt="logo">
						</IconInteractive>

						<IconInteractive class="left-[70%] top-1/2">
							<img src="/assets/images/ts.svg" alt="logo">
						</IconInteractive>

						<IconInteractive class="left-1/2 top-[30%]">
							<img src="/assets/images/nuxt.svg" alt="logo">
						</IconInteractive>

						<IconInteractive class="left-1/2 top-[70%]">
							<img src="/assets/images/tailwind.svg" alt="logo">
						</IconInteractive>

						<IconInteractive class="left-1/3 top-1/3">
							<img src="/assets/images/git.svg" alt="logo">
						</IconInteractive>

						<IconInteractive class="left-2/3 top-1/3">
							<img src="/assets/images/webpack.svg" alt="logo">
						</IconInteractive>

						<IconInteractive class="left-1/3 top-2/3">
							<img src="/assets/images/vite.svg" alt="logo">
						</IconInteractive>

						<IconInteractive class="left-2/3 top-2/3">
							<img src="/assets/images/sass.svg" alt="logo">
						</IconInteractive>

						<IconInteractive class="left-[22%] top-[22%]">
							<img src="/assets/images/postcss.svg" alt="logo">
						</IconInteractive>

						<IconInteractive class="left-[78%] top-[22%]">
							<img src="/assets/images/docker.svg" alt="logo">
						</IconInteractive>

						<IconInteractive class="left-[22%] top-[78%]">
							<img src="/assets/images/jest.svg" alt="logo">
						</IconInteractive>

						<IconInteractive class="left-[78%] top-[78%]">
							<img src="/assets/images/storybook.svg" alt="logo">
						</IconInteractive>

						<IconInteractive class="left-1/2 top-[85%]">
							<img src="/assets/images/nodejs.svg" alt="logo">
						</IconInteractive>
					</div>
				</div>
			</div>
		</section>

		<section class="min-h-screen">
			<div class="container flex justify-between">

			</div>
		</section>

		<section class="min-h-screen bg-[#223343]">
			<div class="container flex justify-between">

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
	}

	section:nth-child(1) {
		@apply pt-0;
		//padding-top: calc(var(--headerHeight) + var(--sectionPadding));
	}

	section:last-child {
		padding-bottom: calc(var(--sectionPadding));
	}
}
</style>