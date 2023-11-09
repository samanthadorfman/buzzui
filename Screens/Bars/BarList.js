import React from 'react';
import { TouchableOpacity, View, Dimensions } from 'react-native';

import BarCard from './BarCard';
const {width} = Dimensions.get("window");

const BarList = (props) =>{
    const {item} = props;
    return (
        <TouchableOpacity style= {{width: '50%'}}>
            <View style = {{width: width /2, backgroundColor:'grey'}}>
            <BarCard {...item}/>
            </View>
        </TouchableOpacity>
    )
}

export default BarList;
