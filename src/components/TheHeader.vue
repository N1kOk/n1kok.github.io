<template>
	<header class="header header--transparent z-50">
		<div class="container flex justify-between items-center h-full px-4">
			<a class="flex items-center space-x-2 text-xs font-light leading-tight" href="#top">
				<IconCode class="w-8 h-8"/>
				<div>
					<div>Frontend</div>
					<div>Developer</div>
				</div>
			</a>

			<nav class="flex space-x-12 text-xs max-lg:hidden">
				<AppLink v-for="item in navLinks" :href="item.href">{{ item.text }}</AppLink>
			</nav>

			<div class="flex space-x-2">
				<a class="block rounded-full transition-colors hover:bg-white/10" href="#">
					<IconSkype class="w-6 h-6 scale-75"/>
				</a>
				<a class="block rounded-full transition-colors hover:bg-white/10" href="#">
					<IconMail class="w-6 h-6 scale-75"/>
				</a>
				<a class="block rounded-full transition-colors hover:bg-white/10" href="#">
					<IconTelegram class="w-6 h-6 scale-75"/>
				</a>
			</div>

			<div
				class="burger"
				:class="{'burger--opened': isMenuOpened}"
				@click="isMenuOpened = !isMenuOpened"
			>
				<span v-for="i in 4"/>
			</div>
		</div>

		<nav
			class="absolute left-full top-full w-full h-screen bg-[var(--headerColor)] transition-transform"
			:class="{'-translate-x-full': isMenuOpened}"
			@click="isMenuOpened = false"
		>
			<a v-for="item in navLinks" class="block w-full py-2 text-center" :href="item.href">{{ item.text }}</a>
		</nav>
	</header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import IconCode from '@/components/icons/IconCode.vue'
import IconSkype from '@/components/icons/IconSkype.vue'
import IconMail from '@/components/icons/IconMail.vue'
import IconTelegram from '@/components/icons/IconTelegram.vue'
import AppLink from '@/components/AppLink.vue'

const isMenuOpened = ref(false)

const navLinks = [
	{
		text: 'Навыки',
		href: '#skills',
	},
	{
		text: 'Проекты',
		href: '#projects',
	},
	{
		text: 'Контакты',
		href: '#about',
	},
]

window.addEventListener('scroll', () => {
	const $header = document.querySelector('.header')!
	if (window.scrollY > 0)
		$header.classList.remove('header--transparent')
	else
		$header.classList.add('header--transparent')
})
</script>

<style scoped lang="scss">
.header {
	@apply fixed w-full h-[1px] min-h-[var(--headerHeight)] bg-[var(--headerColor)] transition-colors;

	&--transparent {
		@apply bg-transparent;
	}

	.burger {
		@apply
		relative w-[25px] h-[22px] p-1 box-border cursor-pointer
		lg:hidden;

		span {
			@apply absolute left-0 w-full h-[2px] bg-white rounded-full transition-transform;
		}

		span:nth-child(1) {
			@apply top-0;
		}

		span:nth-child(2), span:nth-child(3) {
			@apply top-1/2 -translate-y-1/2;
		}

		span:nth-child(4) {
			@apply bottom-0;
		}

		&--opened {
			span:nth-child(1), span:nth-child(4) {
				@apply scale-x-0;
			}

			span:nth-child(2) {
				@apply -rotate-45;
			}

			span:nth-child(3) {
				@apply rotate-45;
			}
		}
	}
}


</style>