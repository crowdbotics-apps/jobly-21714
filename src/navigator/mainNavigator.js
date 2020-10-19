import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList149924Navigator from '../features/NotificationList149924/navigator';
import Maps149923Navigator from '../features/Maps149923/navigator';
import UserProfile149875Navigator from '../features/UserProfile149875/navigator';
import Tutorial149874Navigator from '../features/Tutorial149874/navigator';
import NotificationList149846Navigator from '../features/NotificationList149846/navigator';
import Settings149845Navigator from '../features/Settings149845/navigator';
import Settings149837Navigator from '../features/Settings149837/navigator';
import UserProfile149835Navigator from '../features/UserProfile149835/navigator';
import UserProfile149804Navigator from '../features/UserProfile149804/navigator';
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
NotificationList149924: { screen: NotificationList149924Navigator },
Maps149923: { screen: Maps149923Navigator },
UserProfile149875: { screen: UserProfile149875Navigator },
Tutorial149874: { screen: Tutorial149874Navigator },
NotificationList149846: { screen: NotificationList149846Navigator },
Settings149845: { screen: Settings149845Navigator },
Settings149837: { screen: Settings149837Navigator },
UserProfile149835: { screen: UserProfile149835Navigator },
UserProfile149804: { screen: UserProfile149804Navigator },
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
