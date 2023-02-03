interface Tech {
	logoUrl?: string
	url?: string
	githubUrl?: string
	technologies: string[]
}

interface Project extends Tech, Record<'color' | 'logoHTML' | 'description', string> {}

const dropShadow = 'filter: drop-shadow(0px 0px 1px currentColor) drop-shadow(0px 0px 5px currentColor);'

export const projects: Project[] = [
	{
		color: '#149dcc',
		logoUrl: '/assets/images/dz-helper.svg',
		logoHTML: 'DZ-Helper',
		description: 'Автоматизированное выполнение школьных домашних заданий с помощью расширений для браузеров',
		url: 'https://dz-helper.ru',
		githubUrl: 'https://github.com/N1kOk/DZ-Helper',
		technologies: ['Vue 3 (Composition API)', 'Vuex', 'TypeScript', 'TailwindCSS', 'PostCSS', 'Sass', 'Vite'],
	},
	{
		color: 'black',
		logoHTML: `<i><span style="${dropShadow}">Smart</span><sup style="${dropShadow} color: aqua;">VK</sup></i>`,
		description: 'Сервис для проведения автоматических конкурсов в группах ВКонтакте (Аналог ActiveBot.ru)',
		url: 'https://smartvk.ru',
		technologies: ['Nuxt 3 (Composition API)', 'TypeScript', 'TailwindCSS', 'PostCSS', 'Sass', 'Vite'],
	},
	{
		color: 'black',
		logoHTML: '<span style="color: #00a8ff">AV</span>Tools',
		description: 'Верстка главной страницы сайта',
		url: 'https://avtools.netlify.app/',
		githubUrl: 'https://github.com/N1kOk/AVTools',
		technologies: ['JavaScript', 'Sass', 'Webpack'],
	},
	{
		color: 'rgba(0, 0, 0, 0.8)',
		logoHTML: `
<div class="flex items-center space-x-2 text-xs font-light leading-tight scale-150">
	<img class="w-8 h-8" src="/assets/images/code.svg" alt="logo">
	<div>
		<div>Frontend</div>
		<div>Developer</div>
	</div>
</div>`,
		description: 'Страница, на которой вы сейчас находитесь',
		githubUrl: 'https://github.com/N1kOk/n1kok.github.io/tree/master',
		technologies: ['Vue 3 (Composition API)', 'TypeScript', 'TailwindCSS', 'PostCSS', 'Sass', 'Vite'],
	},
	{
		color: 'black',
		logoHTML: `
<div style="position: absolute; left: 0; top: 0; width: 100%; height: 100%; background: url('/assets/images/cosmofly.jpg') center; background-size: cover;">
</div>`,
		description: 'Игра под Android',
		url: 'https://play.google.com/store/apps/details?id=org.godotengine.cosmofly&hl=ru&gl=US',
		technologies: ['Godot 3', 'GDScript'],
	},
]