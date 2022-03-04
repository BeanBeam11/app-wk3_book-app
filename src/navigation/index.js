import React from 'react';
import { StyleSheet, Image, Pressable } from 'react-native';
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
      <HomeStack.Navigator
        screenOptions={{
            headerShadowVisible: false,
        }}
      >
        <HomeStack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
                headerTitle: '',
                headerRight: () => (
                    <Pressable onPress={() => alert('Search')}>
                        <Image source={require('../../assets/icons/icon_search.png')} style={styles.navIcon}/>
                    </Pressable>
                ),
                headerLeft: () => (
                    <Pressable onPress={() => alert('Drawer')}>
                        <Image source={require('../../assets/icons/icon_menu.png')} style={styles.navIcon}/>
                    </Pressable>
                ),
            }}
        />
        <HomeStack.Screen
            name="BookInfo"
            component={BookInfoScreen}
            options={{
                title: '',
                headerTransparent: true,
                headerBackTitleVisible: false,
                // headerLeft: () => {}
            }}
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
                headerShown: false
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