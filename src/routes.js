import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Preload from './pages/Preload'
import Login from './pages/Login'
import Contas from './pages/Contas'

const Routes = createAppContainer(
    createSwitchNavigator({
        Preload,
        Login,
        Contas
    })
)

export default Routes