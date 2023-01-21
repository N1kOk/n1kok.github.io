<template>
	<component
		:is="componentName"
		class="button"
		:href="href"
	>
		<slot/>
	</component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
	href?: string // TODO paths
}

const { href } = defineProps<Props>()

const componentName = computed(() => href ? 'a' : 'button')
</script>

<style scoped>
.button {
	@apply
	inline-block min-w-[5rem] px-4 py-1 rounded-full text-center
	transition-colors hover:bg-white/10;
}
</style>