import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList134631Navigator from '../features/ArticleList134631/navigator';
import ArticleList134630Navigator from '../features/ArticleList134630/navigator';
import ArticleList134629Navigator from '../features/ArticleList134629/navigator';
import Maps134611Navigator from '../features/Maps134611/navigator';
import Add-Item134610Navigator from '../features/Add-Item134610/navigator';
import Maps134606Navigator from '../features/Maps134606/navigator';
import UserProfile134602Navigator from '../features/UserProfile134602/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList134631: { screen: ArticleList134631Navigator },
ArticleList134630: { screen: ArticleList134630Navigator },
ArticleList134629: { screen: ArticleList134629Navigator },
Maps134611: { screen: Maps134611Navigator },
Add-Item134610: { screen: Add-Item134610Navigator },
Maps134606: { screen: Maps134606Navigator },
UserProfile134602: { screen: UserProfile134602Navigator },

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
