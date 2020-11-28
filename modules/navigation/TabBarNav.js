import React from 'react';
import { StyleSheet } from 'react-native';

import { NavigationContainer } from  "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/AntDesign';

import HomeView from "../home/HomeView";
import CartView from "../cart/CartView";
import SearchView from "../search/SearchView";
import ProfileView from "../profile/ProfileView";
import StoreCategoriesView from "../stores_categories/StoreCategoriesView";

const Tab = createBottomTabNavigator();

const TabBarNav = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName="Home"
        showLabel={false}
      >
        <Tab.Screen
          name="Home" 
          component={HomeView} 
          options={{
            tabBarLabel:"",
            tabBarIcon: ({focused}) => (
              <Icon 
                name="home" 
                size={28} 
                style={focused ? styles.menuItemActive : styles.menuItem }
              />
            )
          }}
        />
        <Tab.Screen 
          name="ccategories" 
          component={StoreCategoriesView} 
          options={{
            tabBarLabel:"",
            tabBarIcon: ({focused}) => (
              <Icon 
                name="menufold" 
                size={28} 
                style={focused ? styles.menuItemActive : styles.menuItem }
              />
            )
          }}
        />
        <Tab.Screen 
          name="Search" 
          component={SearchView} 
          options={{
            tabBarLabel:"",
            tabBarIcon: ({focused}) => (
              <Icon 
                name="search1" 
                size={28} 
                style={focused ? styles.menuItemActive : styles.menuItem }
              />
            )
          }}
        />
        <Tab.Screen 
          name="Cart" 
          component={CartView} 
          options={{
            tabBarLabel:"",
            tabBarIcon: ({focused}) => (
              <Icon 
                name="shoppingcart" 
                size={28} 
                style={focused ? styles.menuItemActive : styles.menuItem }
              />
            )
          }}
        />
        <Tab.Screen 
          name="User" 
          component={ProfileView}
          options={{
            tabBarLabel:"",
            tabBarIcon: ({focused}) => (
              <Icon 
                name="user" 
                size={28} 
                style={focused ? styles.menuItemActive : styles.menuItem }
              />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default TabBarNav

const styles = StyleSheet.create({
  menuItem: {
    color: "#c6c6c6"
  },
  menuItemActive:{
    color: "#000"
  },
})
