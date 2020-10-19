import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial149803Navigator from '../features/Tutorial149803/navigator';
import NotificationList149775Navigator from '../features/NotificationList149775/navigator';
import Settings149774Navigator from '../features/Settings149774/navigator';
import Settings149766Navigator from '../features/Settings149766/navigator';
import UserProfile149764Navigator from '../features/UserProfile149764/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial149803: { screen: Tutorial149803Navigator },
NotificationList149775: { screen: NotificationList149775Navigator },
Settings149774: { screen: Settings149774Navigator },
Settings149766: { screen: Settings149766Navigator },
UserProfile149764: { screen: UserProfile149764Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
