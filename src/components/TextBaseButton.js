import React, { useState } from 'react'
import { Alert, TouchableOpacity, StyleSheet, View, TextInput, Text } from 'react-native'

export default ({ onPress = () => { }, textOne = 'Login?', textSecond = '', ContainerStyl = {}, textOneStyle = {}, secondTextStyle = {} }) => {
    return (
        <View style={[styles.ContainerStyl, ContainerStyl]}>
            <Text style={[styles.textOneStyle, textOneStyle]} onPress={onPress} >
                {textOne}
            </Text>

            {textSecond ?
                <Text style={[styles.secondTextStyle, secondTextStyle]} onPress={onPress} >
                    {textSecond}
                </Text>
                : null}
        </View>

    )
}

const styles = StyleSheet.create({
    ContainerStyl: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    textOneStyle: {
        color: '#343434',
    },
    secondTextStyle: {
        color: 'green', left: 4, fontWeight: '900'
    }

});