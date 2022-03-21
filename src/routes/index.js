import Home from '../page/base/home'
import Convert from '../page/convert/index'

const routes = [
    {
        path: '/',
        component: Home,
        exact: true,
    },
    {
        path: '/convert',
        component: Convert,
        exact: true,
    },
]

export default routes