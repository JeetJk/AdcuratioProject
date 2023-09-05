import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import Splash from '../screen/Splash';
import BottomTab from './TabNavigator';
import { ReactScreen } from '../screen/React/React';
import { ReactNative } from '../screen/ReactNative/ReactNative';
import { NodeScreen } from '../screen/Node/Node';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
function PromoStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
    }} >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="TabNavigator" component={BottomTab} />
    </Stack.Navigator>

  );
}
const Tab = createBottomTabNavigator();
const TabsStack = props => {
  let initialRoute =
    typeof props.route.params === 'undefined'
      ? 'Home'
      : props.route.params.activeScreen;
  if (initialRoute === 'undefined' || typeof initialRoute === 'undefined') {
    initialRoute = 'Home';
  }
  return (
    <Tab.Navigator
      headerMode="none"
      tabBar={props => <BottomTab {...props} />}
      initialRouteName={initialRoute}>
     <Stack.Screen headerShown={false} name="React" component={ReactScreen} />
      <Stack.Screen name="ReactNative" component={ReactNative} />
      <Stack.Screen name="Node" component={NodeScreen} />
    </Tab.Navigator>
  );
};


export default function Router() {
  return (
      <NavigationContainer >
        <Stack.Navigator screenOptions={{
          headerShown: false
        }} initialRouteName="PromoStack" >
          <Stack.Screen name="Promo" component={PromoStack} />
          <Stack.Screen name="Tabs" component={TabsStack} />
        </Stack.Navigator>
      </NavigationContainer>
  )
}