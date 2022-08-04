import React, { useState } from 'react'
import {  TouchableOpacity, StyleSheet, View, Image } from 'react-native'

export default ({ onPress = () => { }, secondaryContainer = {}, imageContainer = {}, imageSource = '' }) => {

    return (
        <TouchableOpacity style={[styles.secondaryContainer, secondaryContainer]}
            onPress={onPress}>
            <View style={[styles.imageContainer, imageContainer]}>
                <Image style={{ width: 40, height: 40, }}
                    source={imageSource}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    primaryContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    secondaryContainer: {
        marginHorizontal: 15
    },
    imageContainer: {
        width: 60,
        height: 60,
        borderWidth: 3,
        borderColor: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }

});





