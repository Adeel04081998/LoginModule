import React, { useEffect, useState } from 'react'
import { View, FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { getRequest } from '../../manager/ApiManager';
import Endpoints from '../../manager/Endpoints';
import ReduxActions from '../../redux/actions';
import { useDispatch, } from 'react-redux';

export default ({ navigation }) => {
  const [dataList, setDataList] = useState()

  const dispatch = useDispatch();

  const _onLogOutHandler = () => {
    dispatch(ReduxActions.clearUserAction())
    navigation.navigate("Login")

  }

  const renderItem = (item, index) => {
    return (
      <View style={[styles.item]} >
        <Text>   {item.title}  </Text>
      </View>
    );
  };
  const loadData = () => {
    getRequest(Endpoints.GET_HOME_RECORDS, (res) => {
      const { data } = res
      if (data) {
        setDataList(data)
      }

    },
      (err) => {
        console.log("errr=>>>> GET_CATEGORIES", err);
      })
  }

  useEffect(() => {
    loadData()
  }, []);


  return (
    <View style={{ flex: 1, }}>
      <View style={{ justifyContent: 'space-between', marginVertical: 10, flexDirection: 'row' }}>
        <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black' }}>Welcome To Home </Text>
        <TouchableOpacity style={{ width: 70, height: 50, backgroundColor: 'green', right: 20, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}
          onPress={() => { _onLogOutHandler() }}
        >
          <Text  >Logout</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={dataList}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item, index }) => renderItem(item, index)}
      />

    </View>

  );
};
const styles = StyleSheet.create({
  item: {
    borderWidth: 1,
    margin: 5,
    padding: 5

  },
});




