// BottomTabs.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, MaterialIcons } from '@expo/vector-icons'; // Import icons
import Home from '../screens/Home';
import Products from '../screens/Products';
import Messages from '../screens/Messages';
import Wallet from '../screens/Wallet';
import Profile from '../screens/Profile';


const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#41ccc7', // Active tab color
        tabBarInactiveTintColor: '#8e8e8e', // Inactive tab color
        headerShown: false, //
        tabBarStyle: {
          backgroundColor: '#fff', // Background color for the tab bar
        },
        tabBarItemStyle: {
          marginBottom: 6,
          marginTop: 5,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Products"
        component={Products}
        options={{
          title: 'Products',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="shop" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{
          title: 'Messages',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="chat" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          title: 'Wallet',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="wallet" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Profile}
        options={{
          title: 'Account',
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
