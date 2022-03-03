import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import WishlistScreen from '../screens/WishlistScreen';
import MyBooksScreen from '../screens/MyBooksScreen';
import BookInfoScreen from '../screens/BookInfoScreen';

const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

const HomeStackScreen = () => {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="Home"
          component={HomeScreen}
        />
        <HomeStack.Screen
          name="BookInfo"
          component={BookInfoScreen}
        />
      </HomeStack.Navigator>
    );
}

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                let iconName;
    
                if (route.name === 'Home') {
                    iconName = focused
                    ? <Image source={require('../../assets/icons/icon_home_actived.png')} style={styles.navIcon} />
                    : <Image source={require('../../assets/icons/icon_home.png')} style={styles.navIcon} />
                } else if (route.name === 'Wishlist') {
                    iconName = focused
                    ? <Image source={require('../../assets/icons/icon_nav_bookmark_actived.png')} style={styles.navIcon} />
                    : <Image source={require('../../assets/icons/icon_nav_bookmark.png')} style={styles.navIcon} />
                } else if (route.name === 'MyBooks') {
                    iconName = focused
                    ? <Image source={require('../../assets/icons/icon_mybook_actived.png')} style={styles.navIcon} />
                    : <Image source={require('../../assets/icons/icon_mybook.png')} style={styles.navIcon} />
                }

                return iconName;
                },
                tabBarActiveTintColor: '#6200EE',
                tabBarInactiveTintColor: '#666666',
            })}
        >
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="Wishlist" component={WishlistScreen} />
            <Tab.Screen name="MyBooks" component={MyBooksScreen} />
      </Tab.Navigator>
    );
}

export default Navigation;

const styles = StyleSheet.create({
    navIcon: {
        width: 24,
        height: 24,
    }
});