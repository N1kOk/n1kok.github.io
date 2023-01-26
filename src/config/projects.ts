interface Tech {
	logoUrl?: string
	url?: string
	githubUrl?: string
	technologies: string[]
}

interface Project extends Tech, Record<'color' | 'logoHTML' | 'description', string> {}

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
		logoHTML: '<i>Smart<sup style="color: dodgerblue">VK</sup></i>',
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
		color: 'black',
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
]