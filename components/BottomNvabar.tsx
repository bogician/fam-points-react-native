import { AntDesign, FontAwesome, Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import MyEventsScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootTabParamList, RootTabScreenProps } from '../types';
import { Header } from './Header/Header';

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="MyEvents"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="MyEvents"
        component={MyEventsScreen}
        options={{
          header: () => <Header />
        }}
      />
      <BottomTab.Screen
        name="AllEvents"
        component={TabTwoScreen}
        options={{
          header: () => <Header />
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarHomeIcon(props: { color: string; }) {
  return <AntDesign name='home' size={30} style={{ marginBottom: -3 }} {...props} />;
}

function TabBarAllEventsIcon(props: { color: string; }) {
  return <Feather name='smile' size={30} style={{ marginBottom: -3 }} {...props} />;
}

const styles = StyleSheet.create({
  header: {
    height: 100,
    backgroundColor: Colors.light.lightBlue,
  },
  containerStyle: {
    height: 40,
    width: '100%',
    marginTop: 80,
  },
});
