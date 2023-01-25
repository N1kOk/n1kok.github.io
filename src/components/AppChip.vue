<template>
	<div
		class="chip"
		:class="classes"
	>
		<slot/>
	</div>
</template>

<script setup lang="ts">
interface Props {
	size?: 'sm' | 'md'
}

const { size } = withDefaults(defineProps<Props>(), {
	size: 'md',
})

const classes = {
	'chip--size-md': size === 'md',
	'chip--size-sm': size === 'sm',
}
</script>

<style scoped lang="scss">
.chip {
	@apply whitespace-nowrap bg-white/10 rounded-full;

	&--size-md {
		@apply px-3 text-sm;
	}

	&--size-sm {
		@apply px-2 text-xs;
	}
}
</style>