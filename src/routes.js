import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Preload from './pages/Preload'
import Login from './pages/Login'
import Movie from './pages/movie'
import Home from './pages/home'
import Contas from './pages/Contas'

const Routes = createAppContainer(
  createSwitchNavigator({
    
    Home,
    Preload,
    Login,
    Contas,
    Movie
  })
)

export default Routes
