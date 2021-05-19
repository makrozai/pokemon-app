// IMPORTS OF PAGES

// CREATE ROUTES AND VALIDATIONS
const routes = [
  {
    path: '/',
    name: 'Landing',
    component: () => import('../components/05-pages/landing/default.vue'),
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/home',
    name: 'HomePage',
    component: () => import('../components/05-pages/home/default.vue'),
    meta: {
      title: 'Listado'
    }
  }
]

export default routes
