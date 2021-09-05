import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Preload from './pages/Preload'
import Login from './pages/Login'
import Home from './pages/home'

const Routes = createAppContainer(
    createSwitchNavigator({
        Home,
        Preload,
        Login
    })
)

export default Routes