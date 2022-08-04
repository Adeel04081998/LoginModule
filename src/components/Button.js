import React, { useState } from 'react'
import {  TouchableOpacity, StyleSheet, Text } from 'react-native'

export default ({ onPress = () => { }, text = 'Login', btnContainerStyl = {}, textStyle = {} }) => {
    return (
        <>
            <TouchableOpacity
                style={[styles.buttonStyle, btnContainerStyl]}
                activeOpacity={0.5}
                onPress={onPress}>
                <Text style={[styles.buttonTextStyle, textStyle]}>{text}</Text>
            </TouchableOpacity>

        </>

    )
}

const styles = StyleSheet.create({

    buttonStyle: {
        backgroundColor: '#01AE48',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#7DE24E',
        alignItems: 'center',
        borderRadius: 15,
        width: '90%',
        marginHorizontal: 20,
        marginVertical: 30,
        paddingVertical: 8
    },
    buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
    },

});