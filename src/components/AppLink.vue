<template>
	<a class="link" href="#">
		<slot/>
	</a>
</template>

<style scoped lang="scss">
.link {
	@apply relative;

	&:after {
		@apply content-[''] absolute block -bottom-[3px] w-full h-[3px] bg-white/50 scale-x-0 transition-transform;
	}

	&:hover:after {
        @apply scale-x-100;
	}
}
</style>