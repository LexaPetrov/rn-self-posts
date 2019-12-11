import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import {Platform} from 'react-native'
import { MainScreen } from '../screens/MainScreen'
import { PostScreen } from '../screens/PostScreen';
import { THEME } from '../theme';

const PostNavigator = createStackNavigator({
    Main: MainScreen,
    Post: {
        screen: PostScreen
    }
}, {
    initialRouteName: 'Main',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS=== 'android' ? THEME.MAIN_COLOR : '#ffffff'
        },
        headerTintColor: Platform.OS=== 'android' ? '#ffffff' : THEME.MAIN_COLOR
    }
})

export const AppNavigation = createAppContainer(PostNavigator)