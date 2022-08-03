import React, { useState } from 'react'
import { Alert, TouchableOpacity, StyleSheet, View, TextInput, Text } from 'react-native'

export default ({  placeholder = 'Enter Name', value = '', onChangeText = () => { }, pattern = '', showError = false, isValid = () => { }, secureTextEntry = false }) => {
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
                showError ? <Text style={{ alignSelf: 'center', }}>Please Enter valid format</Text> : null

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
        // marginHorizontal: 40,
        width: '90%',
        paddingVertical: 15,
        justifyContent: 'center',
        alignSelf: 'center',
        // textAlign:'center',
        paddingHorizontal: 15




    },

});