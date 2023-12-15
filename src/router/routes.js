export const routes = [
	{component: () => import('@/views/home.vue'), name: 'Home', path: '/zjut-china/'},
	{component: () => import('@/views/team.vue'), name: 'Team', path: '/zjut-china/team'},
]
export const headings = {'Home': '', 'Team': {'Team': '', 'Attributions': '', 'Collaboration': ''}, 'Project': {'Description': '', 'Engineering': '', 'Experiments': '', 'Results': '', 'Contribution': '', 'Partnership': '', 'Implementation': '', 'Communication': '', 'Notebook': ''}, 'Parts': '', 'Human Practices': '', 'Awards': {'Education': '', 'Software': '', 'Model': ''}}