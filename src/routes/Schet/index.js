import SchetView from './components/SchetView'

// Sync route definition
export default {
  component : SchetView,
  childRoutes : [
    {
      path      : '/scheta',
      component: SchetView,
      childRoutes: [
        {
          path      : '/schet/:schetID',
          component: SchetView
        }
      ]
    }
  ]
}
