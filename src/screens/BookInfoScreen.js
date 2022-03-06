import React from 'react';
import { Text, StyleSheet, View, Image, Pressable, ScrollView } from 'react-native';
import Rating from '../components/Rating';

const BookInfoScreen = ({route}) => {
    const {title, author, image, rating, description, price} = route.params;

    return (
        <View style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollViewContainer}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.imageBox}>
                    <Image source={image}/>
                </View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.author}>{author}</Text>
                {
                    rating != null
                    ? (
                        <View style={styles.rating}>
                            <Rating data={rating}/>
                            <Text style={styles.score}>{rating}.0</Text>
                            <Text style={styles.scoreTotal}> / 5.0</Text>
                        </View>
                    ):(
                        null
                    )
                }
                <Text style={styles.description}>{description}</Text>
                <Pressable style={styles.btn}>
                    <Text style={styles.btnText}>BUY NOW FOR ${price}</Text>
                </Pressable>
            </ScrollView>
        </View>
    );
}

export default BookInfoScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollViewContainer: {
        alignItems: 'center',
        minHeight: 620,
    },
    imageBox: {
        shadowColor: '#414144',
        shadowOffset: {width: 0, height: 16},
        shadowOpacity: 0.1,
        shadowRadius: 32,
        elevation: 10, //Android only
    },
    image: {
        width: 210,
        height: 300,
    },
    title: {
        color: '#131313',
        fontWeight: '500',
        fontSize: 24,
        lineHeight: 28,
        letterSpacing: 0.3,
        marginTop: 28,
        marginBottom: 8,
    },
    author: {
        color: '#666666',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 16,
        letterSpacing: 0.012,
        marginBottom: 8,
    },
    rating: {
        flexDirection: 'row',
        marginBottom: 16,
    },
    score: {
        color: '#131313',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 16,
        letterSpacing: 0.012,
        marginLeft: 4,
    },
    scoreTotal: {
        color: '#666666',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 16,
        letterSpacing: 0.012,
    },
    description: {
        width: 320,
        color: '#131313',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 24,
        letterSpacing: 0.012,
        textAlign: 'center',
    },
    btn: {
        width: 190,
        height: 36,
        backgroundColor: '#6200EE',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 28,
    },
    btnText: {
        color: '#fff',
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 16,
        letterSpacing: 0.08,
    }
});