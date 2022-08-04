import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Text } from 'react-native'

export default ({  placeholder = 'Enter Name', value = '', onChangeText = () => { }, pattern = '', showError = false, isValid = () => { }, secureTextEntry = false, errorMesssage ='Please enter correct format' }) => {
    return (
        <View>
            <TextInput
                value={value}
                style={styles.inputStyle}
                placeholder={placeholder}
                placeholderTextColor={'black'}
                onChangeText={(text) => {
                    const regexp = new RegExp(pattern);
                    let trimValue = text.trim()
                    if (regexp.test(trimValue)) {
                        onChangeText(text)
                        isValid(false)
                    } else {
                        onChangeText(text)
                        isValid(true)
                    }
                }}
                secureTextEntry={secureTextEntry}
            />
            {
                showError ? <Text style={{ alignSelf: 'center', }}> {errorMesssage}</Text> : null

            }

        </View >


    )
}

const styles = StyleSheet.create({


    inputStyle: {
        color: 'black',
        borderWidth: 0.5,
        borderRadius: 12,
        borderColor: '#dadae8',
        backgroundColor: "white",
        width: '90%',
        paddingVertical: 15,
        justifyContent: 'center',
        alignSelf: 'center',
        paddingHorizontal: 15
    },

});