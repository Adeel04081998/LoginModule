import React, { useState } from 'react'
import { View, Text, Alert, StyleSheet, ScrollView, LogBox } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button';
import SocialLinks from '../../components/SocialLinks';
import TextInput from '../../components/TextInput';
import { postRequest } from '../../manager/ApiManager';
import Endpoints from '../../manager/Endpoints';
import Regex from '../../utils/Regex';
import ReduxActions from '../../redux/actions';
import LinearGradient from 'react-native-linear-gradient';
import { SocialLinksRecord } from '../../utils/config/socialLinksData';
import TextBaseButton from '../../components/TextBaseButton';


export default ({ navigation }) => {

  const dispatch = useDispatch();
  let initialState = {
    inputsArr: [
      { id: 1, placeholder: 'Enter username', pattern: Regex.email, keyboardType: "default", value: "hassan.zafar@ropstam.com", maxLength: 15, isValid: true, showError: false, secureTextEntry: false },
      { id: 2, placeholder: 'Password', pattern: Regex.password, keyboardType: "default", value: "12345678", maxLength: 15, isValid: true, showError: false, secureTextEntry: true },
    ],
  }
  const [state, setState] = useState(initialState)
  const { inputsArr } = state;


  const _onChangeHandler = (value, index) => {
    inputsArr[index].value = value;

    setState((pre) => ({ ...pre, inputsArr }))
  }

  const _renderHeadingSection = () => {
    return (
      <View style={{ alignContent: 'center', alignItems: 'center', justifyContent: 'space-around', marginBottom: 30 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>Hello Again!</Text>
        <Text style={{ width: '30%', textAlign: 'center', marginVertical: 5, fontWeight: '700' }}  >Chance To get Your Life better</Text>
      </View>
    )
  }

  const _onLoginHandler = () => {
    postRequest(Endpoints.LOGIN,
      {
        "email": inputsArr[0].value,
        "password": inputsArr[1].value,
        "device_token": "zasdcvgtghnkiuhgfde345tewasdfghjkm"
      },
      (res) => {
        console.log('_onLoginHandler Success: ----- ', res);
        const { access_token, user } = res?.data?.data
        if (user && access_token) {
          dispatch(ReduxActions.setUserAction({ user: user, access_token: access_token }))
          navigation.navigate("Home")
        }
      },
      (err) => {
        console.log('_onLoginHandler Error: ----- ', err);
      },

    );

  }

  const _renderInputSection = () => {
    return (
      inputsArr.map((x, i) => {
        return <View style={{ marginVertical: 10 }}
          key={`${i}`}
        >
          <TextInput
            value={x.value}
            placeholder={x.placeholder}
            pattern={x.pattern}
            showError={x.showError}
            onChangeText={(text) => {
              _onChangeHandler(text, i)
            }}
            isValid={(value) => {
              inputsArr[i].showError = value;
              setState((pre) => ({ ...pre, inputsArr }))
            }}
            secureTextEntry={x.secureTextEntry}
          />
        </View>

      }
      )
    )

  }
  const _renderSocialSection = () => {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 20 }}>
        {
          SocialLinksRecord.map((x, i) => {
            return <SocialLinks
              imageSource={x.imageSource}
              key={`${i}`}
            />

          })
        }
      </View>
    )
  }
  return (
    <ScrollView
      contentContainerStyle={{ flex: 1 }}
      style={{ flex: 1, }}  >
      <LinearGradient
        colors={['#FDFDFB', '#CFF6DD', '#CFF6DD', '#FDFDFB']}
        style={{ flex: 1, justifyContent: 'center', alignContent: 'center', }}
      >
        {_renderHeadingSection()}

        {_renderInputSection()}

        <TextBaseButton
          textOne='Recovery Password'
          ContainerStyl={{ justifyContent: 'flex-end', marginHorizontal: 30, }}
          textOneStyle={{ fontSize: 16 }}
        />

        <Button
          onPress={() => { _onLoginHandler() }}
        />

        <TextBaseButton
          textOne='or continue with'
        />
        {_renderSocialSection()}

        <TextBaseButton
          textOne='Not a member?'
          textSecond='Register now'
          ContainerStyl={{ marginTop: 20 }}
        />


      </LinearGradient>


    </ScrollView >

  );
};

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#D3F9E4',
    alignContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  registerTextStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});
