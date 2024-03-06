import Home from '../views/home.vue'
import Team from '../views/team.vue'
import Collaboration from '../views/collaboration.vue'
import Description from '../views/description.vue'

export const routes = [
	{component: Home , name: 'Home', path: '/zjut-china/'},
	{component: Team , name: 'Team', path: '/zjut-china/team'},
	{component: Collaboration , name: 'Collaboration', path: '/zjut-china/collaboration'},
	{component: Description , name: 'Description', path: '/zjut-china/description'},
]
export const headings = {'Home': '', 'Team': {'Team': '', 'Collaboration': ''}, 'Project': {'Description': '',}}