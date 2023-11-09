import React, {useState, useEffect} from 'react'
import {View , Text, StyleSheet, ActivityIndicator,  FlatList} from 'react-native'

import BarList from './BarList';

const data = require('../../assets/data/bars.json');

const BarContainer = () => {
    const [bars, setBars] = useState([]);

    useEffect(() => {
        setBars(data);

        return () => {
            setBars([])
        }
    }, [])
    
    return (
        <View>
            <Text>Bar Containers</Text>
            <View style = {{marginTop: 10}}>
            <FlatList
                data={bars}
                renderItem={({item}) => <BarList 
                key={item.id}
                item={item}
                />}
                keyExtractor={item=> item.name}
            />
            </View>
        </View>
    )

}

export default BarContainer;