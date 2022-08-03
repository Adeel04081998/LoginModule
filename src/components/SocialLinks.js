import React, { useState } from 'react'
import { Alert, TouchableOpacity, StyleSheet, View, TextInput, Text, Dimensions, Image } from 'react-native'
import { SocialLinksRecord } from '../utils/config/socialLinksData'

export default ({ onPress = () => { }, secondaryContainer = {}, imageContainer = {}, imageSource = '' }) => {


    return (

        <TouchableOpacity style={[styles.secondaryContainer, secondaryContainer]}
            onPress={onPress}
        >
            <View style={[styles.imageContainer, imageContainer]}>
                <Image
                    style={{
                        width: 40,
                        height: 40,
                    }}
                    // source={Images.google}
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
        // width:'100%'
    },
    secondaryContainer: {
        // flexDirection: 'row',
        // justifyContent: 'space-between',
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





