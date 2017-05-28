import CoreLayout from '../layouts/PageLayout/PageLayout'
import SchetRout from './Schet'
import VkladRoute from './Vklad'

export const createRoutes = (store) => ([{
  path        : '/',
  component   : CoreLayout,
  indexRoute  : SchetRout,
  childRoutes : [
    SchetRout
  ]
},
{
  path        : '/vklady',
  component   : CoreLayout,
  indexRoute  : VkladRoute,
  childRoutes : [
    VkladRoute
  ]
}])

export default createRoutes
