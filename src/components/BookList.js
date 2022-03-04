import React from 'react';
import { FlatList } from 'react-native';
import BookDetail from './BookDetail';

const BookList = ({data, navigation}) => {
    const renderItem = ({item}) =>{
        return (
            <BookDetail data={item} navigation={navigation}/>
        );
    }

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => index}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        />
    );
}

export default BookList;