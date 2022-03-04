import React from 'react';
import { StyleSheet, Text, Image, Pressable, View } from 'react-native';
import Rating from './Rating';

const BookDetail = ({data, navigation}) => {
    return (
        <Pressable style={styles.bookWrapper} onPress={()=> navigation.navigate('BookInfo')}>
            {
                data.rating != null
                ? (
                    <>
                    <View>
                        <Image source={data.image} style={styles.image} />
                    </View>
                    <Rating data={data.rating}/>
                    <Text style={styles.title}>{data.title}</Text>
                    <Text style={styles.author}>{data.author}</Text>
                    </>
                ):(
                    <>
                    <View style={styles.imageBox}>
                        <Image source={data.image} style={styles.image} />
                    </View>
                    <Text style={styles.title}>{data.title}</Text>
                    <Text style={styles.author}>{data.author}</Text>
                    </>
                )
            }
        </Pressable>
    );
}

export default BookDetail;

const styles = StyleSheet.create({
    bookWrapper: {
        flexDirection: 'column',
        marginHorizontal: 8,
    },
    imageBox: {
        shadowColor: '#414144',
        shadowOffset: {width: 0, height: 16},
        shadowOpacity: 0.1,
        shadowRadius: 32,
        elevation: 10, //Android only
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