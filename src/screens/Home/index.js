import React, { useEffect, useState } from 'react'
import { View, FlatList, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native'
import { getRequest } from '../../manager/ApiManager';
import Endpoints from '../../manager/Endpoints';
import ReduxActions from '../../redux/actions';
import { useDispatch, } from 'react-redux';
import styles from './styles';

export default ({ navigation }) => {

  const dispatch = useDispatch();

  const [dataList, setDataList] = useState()


  // In this logout  function we clear our user session

  const _onLogOutHandler = () => {
    dispatch(ReduxActions.clearUserAction())
    navigation.navigate("Login")
  }

  const renderItem = (item, index) => {
    return (
      <View style={[styles.item]} >
        <Text>{item.title}</Text>
      </View>
    );
  };

  // In this function  get request is calling which giving record of list

  const loadData = () => {

    getRequest(Endpoints.GET_HOME_RECORDS, (res) => {
      const { data } = res
      if (data) {
        setDataList(data)
      }

    },
      (err) => {
        // console.log("errr=>>>> list", err);
        Alert.alert(err?.message)
      })
  }

  // UseEffect is used which is renderd on screen load and loadData() component is called 

  useEffect(() => {
    loadData()
  }, []);


  return (
    <View style={styles.primaryContainerStyl}>

      {/* Welcome message and logout button ui start here */}

      <View style={styles.secondaryContianerStyl}>

        <Text style={styles.welcomTextstyl}>Welcome To Home </Text>

        <TouchableOpacity style={styles.logoutBtnStyle} onPress={() => { _onLogOutHandler() }}>

          <Text>Logout</Text>

        </TouchableOpacity>

      </View>
      {/* Welcome message and logout button ui  ends here */}

      {/* List of record are renderd with help of flatlist */}

      <FlatList
        data={dataList}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item, index }) => renderItem(item, index)}
      />

    </View>

  );
};






