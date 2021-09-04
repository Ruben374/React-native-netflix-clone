import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Preload from './pages/Preload'
import Login from './pages/Login'

const Routes = createAppContainer(
    createSwitchNavigator({
        Preload,
        Login
    })
)

export default Routes