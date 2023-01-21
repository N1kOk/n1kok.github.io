<template>
	<TheHeader/>

	<main>
		<section class="h-[1px] min-h-screen bg-[#011030] bg-[radial-gradient(at_50%_0,#224356,#222b3a)]">
			<!--TODO min-h-->
			<div class="container flex justify-between h-full">
				<div class="flex flex-1 flex-center">
					<div>
						<div class="text-3xl font-bold">Front-end</div>
						<div class="text-3xl">Developer</div>
					</div>
				</div>
				<div class="flex flex-1 flex-center">
					<div>
						Images
					</div>
				</div>
			</div>
		</section>

		<section class="min-h-screen">
			<div class="container flex justify-between">

			</div>
		</section>
	</main>

	<footer>

	</footer>
</template>

<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'</script>

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