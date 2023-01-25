<template>
	<a
		class="link group"
		href="#"
		rel="nofollow"
		target="_blank"
	>
		<div class="icon">
			<slot/>
		</div>
	</a>
</template>

<style scoped>
.link {
	@apply absolute w-6 h-6 -translate-x-1/2 -translate-y-1/2;
}

.icon {
	--rotate: 0deg;

	transform: rotateY(var(--rotate));

	@apply
	absolute w-6 h-6
	will-change-transform transition-all duration-700 group-hover:brightness-150 group-hover:[--rotate:360deg];
}
</style>