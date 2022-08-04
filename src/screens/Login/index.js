import React, { useState } from 'react'
import { View, Text, Alert, StyleSheet, ScrollView, LogBox } from 'react-native'
import { useDispatch } from 'react-redux';
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
import styles from './styles';

export default ({ navigation }) => {
  // Defines const and state section start from here

  const dispatch = useDispatch();

  let initialState = {
    inputsArr: [
      { id: 1, placeholder: 'Enter username', pattern: Regex.email, value: "hassan.zafar@ropstam.com", errormessage: 'Please enter correct email  format', showError: false, secureTextEntry: false },
      { id: 2, placeholder: 'Password', pattern: Regex.password, value: "12345678", errormessage: 'Please enter correct password format', showError: false, secureTextEntry: true },
    ],
  }
  const [state, setState] = useState(initialState)
  const { inputsArr } = state;

  // Defines const and state section ends from here


  // functions including start from here

  const _onChangeHandler = (value, index) => {

    inputsArr[index].value = value;
    setState((pre) => ({ ...pre, inputsArr }))
  }



  const _onLoginHandler = () => {

    postRequest(Endpoints.LOGIN,
      {
        "email": inputsArr[0].value,
        "password": inputsArr[1].value,
        "device_token": "zasdcvgtghnkiuhgfde345tewasdfghjkm"
      },
      (res) => {

        if (res?.data?.data?.user && res?.data?.data?.access_token) {
          const { access_token, user } = res?.data?.data
          dispatch(ReduxActions.setUserAction({ user: user, access_token: access_token }))
          navigation.navigate("Home")
          Alert.alert("SuccesFully Login")
        }
      },
      (err) => {
        Alert.alert(err?.message)

        ///This navigation is added because login api is not working when i am makeing a video so that way i add thiss in case of error to move to home screen to show homescreen part to you

        navigation.navigate("Home")

      },

    );

  }

  // functions including loading end from here



  // function including UI section start from here


  const _renderHeadingSection = () => {

    return (
      <View style={styles.renderHeadingSectionPrimaryContnerStyl}>
        <Text style={styles.renderHeaderPrimaryTextstyl}>Hello Again!</Text>
        <Text style={styles.renderHeaderSecondaryTextstyl}  >Chance To get Your Life better</Text>
      </View>
    )
  }

  const _renderInputSection = () => {
    return (
      inputsArr.map((x, i) => {
        return <View style={styles.textinputParentContainerStyl} key={`${i}`}>
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
            errorMesssage={x.errormessage}
          />
        </View>

      }
      )
    )

  }
  const _renderSocialSection = () => {
    return (
      <View style={styles.socialLinkMainContainerStyl}>
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

  // function including UI section end from here


  return (

    <ScrollView
      contentContainerStyle={{ flex: 1 }}
      style={{ flex: 1, }}
    >
      <LinearGradient
        colors={['#FDFDFB', '#CFF6DD', '#CFF6DD', '#FDFDFB']}
        style={styles.linearGradientStyl}
      >

        {/* Render Heading section start here */}

        {_renderHeadingSection()}

        {/* Render Heading section end here */}

        {/* Render input section start here */}

        {_renderInputSection()}

        {/* Render Heading section end here */}

        {/* Render Recovery paswrd Buttton section start  here ,  */}
        <TextBaseButton
          textOne='Recovery Password'
          ContainerStyl={{ justifyContent: 'flex-end', marginHorizontal: 30, }}
          textOneStyle={{ fontSize: 16 }}
        />

        {/* Render Recovery paswrd Buttton section ends here */}

        {/* Render Login Buttton section start  here */}

        <Button
          onPress={() => { _onLoginHandler() }}
        />
        {/* Render Login Buttton section ends  here */}



        <TextBaseButton
          textOne='or continue with'
        />

        {/* Render social  section starts  here */}


        {_renderSocialSection()}

        {/* Render social section ends  here */}

        <TextBaseButton
          textOne='Not a member?'
          textSecond='Register now'
          ContainerStyl={{ marginTop: 20 }}
        />


      </LinearGradient>


    </ScrollView >

  );
};

