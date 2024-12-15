// TrialHomeTabs.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, MaterialIcons } from '@expo/vector-icons'; // Import icons
import Home from '../screens/Trial/Home';
import Messages from '../screens/Trial/Messages';
import Products from '../screens/Trial/Products';
import Wallet from '../screens/Trial/Wallet';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

const TrialHomeTabs = () => {
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

export default TrialHomeTabs;
