import React from 'react';
import { StyleSheet, Text, Image, Pressable } from 'react-native';
import Rating from './Rating';

const BookDetail = ({data, navigation}) => {
    return (
        <Pressable style={styles.bookWrapper} onPress={()=> navigation.navigate('BookInfo')}>
            <Image source={data.image} style={styles.image} />
            {
                data.rating != null
                ? <Rating data={data.rating}/>
                : null
            }
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.author}>{data.author}</Text>
        </Pressable>
    );
}

export default BookDetail;

const styles = StyleSheet.create({
    bookWrapper: {
        flexDirection: 'column',
        marginHorizontal: 8,
    },
    image:{
        width: 140,
        height: 200,
        marginBottom: 16,
    },
    title: {
        color: '#131313',
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 18,
        letterSpacing: 0.012,
        marginBottom: 8,
    },
    author: {
        color: '#131313',
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 14.06,
        opacity: 0.5,
    }
});