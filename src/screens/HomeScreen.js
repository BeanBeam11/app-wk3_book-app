import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import BookList from '../components/BookList';
import {popularBookData, newestBookData} from '../components/BookData';

const HomeScreen = ({navigation}) => {
    return (
        <ScrollView 
            style={styles.container}
            showsVerticalScrollIndicator={false}
        >
            <Text style={styles.title}>Popular Books</Text>
            <BookList data={popularBookData} navigation={navigation}/>
            <Text style={[styles.title, {fontWeight: '600'}]}>Newest</Text>
            <BookList data={newestBookData} navigation={navigation}/>
            <View style={styles.bottomSpace}></View>
        </ScrollView>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        color: '#131313',
        fontSize: 24,
        fontWeight: '500',
        lineHeight: 28,
        letterSpacing: 0.3,
        marginLeft: 20,
        marginVertical: 16,
    },
    bottomSpace: {
        width: '100%',
        height: 61,
    }
});