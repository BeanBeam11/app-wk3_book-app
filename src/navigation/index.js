import React, { useState } from 'react';
import { StyleSheet, Image, Pressable, View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

import HomeScreen from '../screens/HomeScreen';
import WishlistScreen from '../screens/WishlistScreen';
import MyBooksScreen from '../screens/MyBooksScreen';
import BookInfoScreen from '../screens/BookInfoScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

const HomeStackNavigator = () => {
    const [bookmark, setBookmark] = useState(false);
    return (
      <Stack.Navigator
        screenOptions={{
            headerShadowVisible: false,
            title: '',
        }}
      >
        <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={({ navigation }) => ({
                headerTitle: '',
                headerRight: () => (
                    <TouchableOpacity onPress={() => alert('Search')}>
                        <Image source={require('../../assets/icons/icon_search.png')} style={styles.navIcon}/>
                    </TouchableOpacity>
                ),
                headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                        <Image source={require('../../assets/icons/icon_menu.png')} style={styles.navIcon}/>
                    </TouchableOpacity>
                ),
            })}
        />
        <Stack.Screen
            name="BookInfo"
            component={BookInfoScreen}
            options={({ navigation }) => ({
                headerTitle: '',
                headerRight: () => (
                    <TouchableOpacity onPress={() => setBookmark(!bookmark)}>
                        {bookmark
                            ? <Image source={require('../../assets/icons/icon_bookmark_actived.png')} style={styles.navIcon}/>
                            : <Image source={require('../../assets/icons/icon_bookmark.png')} style={styles.navIcon}/>
                        }
                    </TouchableOpacity>
                ),
                headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../../assets/icons/icon_back.png')} style={styles.navIcon}/>
                    </TouchableOpacity>
                ),
            })}
        />
      </Stack.Navigator>
    );
}

const WishlistStackNavigator = () => {
    return (
        <Stack.Navigator
          screenOptions={{
              headerShadowVisible: false,
              title: '',
          }}
        >
          <Stack.Screen
              name="WishlistScreen"
              component={WishlistScreen}
              options={({ navigation }) => ({
                headerTitle: '',
                headerRight: () => (
                    <TouchableOpacity onPress={() => alert('Search')}>
                        <Image source={require('../../assets/icons/icon_search.png')} style={styles.navIcon}/>
                    </TouchableOpacity>
                ),
              })}
          />
        </Stack.Navigator>
    );
}

const MyBooksStackNavigator = () => {
    return (
        <Stack.Navigator
          screenOptions={{
              headerShadowVisible: false,
              title: '',
          }}
        >
          <Stack.Screen
              name="MyBooksScreen"
              component={MyBooksScreen}
              options={({ navigation }) => ({
                headerTitle: '',
                headerRight: () => (
                    <TouchableOpacity onPress={() => alert('Search')}>
                        <Image source={require('../../assets/icons/icon_search.png')} style={styles.navIcon}/>
                    </TouchableOpacity>
                ),
              })}
          />
        </Stack.Navigator>
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
                } else if (route.name === 'My books') {
                    iconName = focused
                    ? <Image source={require('../../assets/icons/icon_mybook_actived.png')} style={styles.navIcon} />
                    : <Image source={require('../../assets/icons/icon_mybook.png')} style={styles.navIcon} />
                }

                return iconName;
                },
                tabBarActiveTintColor: '#6200EE',
                tabBarInactiveTintColor: '#666666',
                headerShown: false,
                tabBarStyle: {
                    shadowColor: '#000',
                    shadowOffset: {width: 0, height: -1},
                    shadowOpacity: 0.2,
                    shadowRadius: 5,
                    elevation: 10, //Android only
                },
                tabBarIconStyle: {
                    marginTop: 11,
                },
                tabBarLabelStyle: {
                    marginTop: 5,
                    marginBottom: 5,
                }
            })}
        >
            <Tab.Screen name="Home" component={HomeStackNavigator} />
            <Tab.Screen name="Wishlist" component={WishlistStackNavigator} />
            <Tab.Screen name="My books" component={MyBooksStackNavigator} />
      </Tab.Navigator>
    );
}

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            initialRouteName="HomeDrawer"
            screenOptions={{
                headerShown: false,
                drawerActiveTintColor: '#6200EE',
                drawerLabelStyle: {
                    fontSize: 14,
                    lineHeight: 16,
                    letterSpacing: 0.012
                },
            }}
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen name="HomeDrawer" component={TabNavigator} options={{
                drawerLabel: 'Home',
                drawerIcon: ({focused}) => (
                    focused
                    ? <Image source={require('../../assets/icons/icon_home_actived.png')} style={styles.navIcon} />
                    : <Image source={require('../../assets/icons/icon_home.png')} style={styles.navIcon} />
                )
            }}/>
            <Drawer.Screen name="WishlistDrawer" component={WishlistScreen} options={{
                drawerLabel: 'Wishlist',
                drawerIcon: ({focused}) => (
                    focused
                    ? <Image source={require('../../assets/icons/icon_nav_bookmark_actived.png')} style={styles.navIcon} />
                    : <Image source={require('../../assets/icons/icon_nav_bookmark.png')} style={styles.navIcon} />
                )
            }}/>
            <Drawer.Screen name="MyBooksDrawer" component={MyBooksScreen} options={{
                drawerLabel: 'My books',
                drawerIcon: ({focused}) => (
                    focused
                    ? <Image source={require('../../assets/icons/icon_mybook_actived.png')} style={styles.navIcon} />
                    : <Image source={require('../../assets/icons/icon_mybook.png')} style={styles.navIcon} />
                )
            }}/>
            <Drawer.Screen name="AccountDrawer" component={HomeStackNavigator} options={{
                drawerLabel: 'Account',
                drawerIcon: ({focused}) => (
                    focused
                    ? <Image source={require('../../assets/icons/icon_account_actived.png')} style={styles.navIcon} />
                    : <Image source={require('../../assets/icons/icon_account.png')} style={styles.navIcon} />
                )
            }}/>
            <Drawer.Screen name="SettingDrawer" component={HomeStackNavigator} options={{
                drawerLabel: 'Setting',
                drawerIcon: ({focused}) => (
                    focused
                    ? <Image source={require('../../assets/icons/icon_settings_actived.png')} style={styles.navIcon} />
                    : <Image source={require('../../assets/icons/icon_settings.png')} style={styles.navIcon} />
                )
            }}/>
        </Drawer.Navigator>
    );
}

const CustomDrawerContent = (props) => {
    return (
        <DrawerContentScrollView {...props}>
        <View style={styles.drawerHeader}>
            <View style={styles.avatarBox}>
                <Image source={require('../../assets/icons/avatar.png')} style={styles.avatar} resizeMode={'cover'} />
            </View>
            <Text style={styles.username}>May</Text>
        </View>
        <DrawerItemList {...props} />
        {/* <DrawerItem label="Help" onPress={() => alert('Link to help')} /> */}
        </DrawerContentScrollView>
    );
}

export default Navigation;

const styles = StyleSheet.create({
    navIcon: {
        width: 24,
        height: 24,
    },
    drawerHeader: {
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderColor: '#EDEDEF',
        paddingTop: 40,
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
    avatarBox: {
        width: 48,
        height: 48,
        borderRadius: 24
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24
    },
    username: {
        color: '#131313',
        fontSize: 24,
        fontWeight: '500',
        lineHeight: 28,
        letterSpacing: 0.3,
        marginTop: 16,
    }
});