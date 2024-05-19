import Home from '../views/home.vue'
import Team from '../views/team.vue'
import Collaboration from '../views/collaboration.vue'
import Description from '../views/description.vue'
import hp from '../views/hp.vue'

export const routes = [
	{component: Home , name: 'Home', path: '/zjut-china/'},
	{component: Team , name: 'Team', path: '/zjut-china/team'},
	{component: Collaboration , name: 'Collaboration', path: '/zjut-china/collaboration'},
	{component: Description , name: 'Description', path: '/zjut-china/description'},
	{component: hp , name: 'Human Practice', path: '/zjut-china/hp'},
]
export const headings = {'Home': '', 'Team': {'Team': '', 'Collaboration': ''}, 'Project': {'Description': '',}, 'HP': ''}