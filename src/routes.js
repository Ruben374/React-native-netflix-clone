import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Preload from './pages/Preload'
import Login from './pages/Login'
import Movie from './pages/movie'
import Home from './pages/home'
import X from './pages/X'

const Routes = createAppContainer(
    createSwitchNavigator({
      
        X,
        Preload,
        Login,
        Movie,
        
    })
)

export default Routes