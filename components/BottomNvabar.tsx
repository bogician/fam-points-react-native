import { AntDesign, FontAwesome, Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { Pressable } from 'react-native';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootTabParamList, RootTabScreenProps } from '../types';

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
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'MyEvents'>) => ({
          title: 'My events',
          tabBarIcon: ({ color }) => <TabBarHomeIcon color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="AllEvents"
        component={TabTwoScreen}
        options={{
          title: 'All Events',
          tabBarIcon: ({ color }) => <TabBarAllEventsIcon color={color} />,
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
