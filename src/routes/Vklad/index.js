import Vklad from './components/Vklad'

// Sync route definition
export default {
  path: '/vklady',
  component : Vklad,
  childRoutes : [
    {
      path      : '/vklad/:vkladID',
      component: Vklad
    }
  ]
}
