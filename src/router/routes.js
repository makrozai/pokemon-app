// IMPORTS OF PAGES

// CREATE ROUTES AND VALIDATIONS
const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: { name: 'HomePage' }
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
