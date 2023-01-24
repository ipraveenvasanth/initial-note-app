import React, { useEffect, useState } from 'react';
import { View, Button, TextInput, StyleSheet, Alert, Text,ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ScrollView } from 'react-native-gesture-handler';

const Home = (props) => {

  const [name, setName] = useState('');

  const setData = async () => {
    if (name.length == 0) {
      Alert.alert('Warning!', 'Please write your data.')
    } else {
      try {
        await AsyncStorage.setItem('UserData', (name));
       //props.navigation.navigate("Save");
      } catch (error) {
        console.log(error);
      }
    }
  }
  const getData = () => {
    try {
      AsyncStorage.getItem('UserData')
        .then(value => {
          if (value != null) {   
            setName(value);
          }
        })
    } catch (error) {
      console.log(error);
    }
  }

  const removeData = async () => {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ScrollView>
    <View style={styles.body}>

      <TextInput
        editable
        multiline
        numberOfLines={20}
        onChangeText={(value) => setName(value)}
        style={{ padding: 10 }}
        
      />

      <View style={styles.button}>
        <Button title="SAVE" onPress={setData} color="red" />
      </View>
      <View style={styles.button}>
        <Button title="GET" onPress={getData} color="green" />
      </View>
      <View style={styles.button}>
        <Button title="REMOVE" onPress={removeData} color="skyblue" />
      </View>
      <Text style={styles.text}>
        {name}
      </Text>

    </View>
    </ScrollView>
  );

};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    width: 200,
    paddingLeft: 30,
    paddingRight:30,
    color: 'green',
    height: 60,
    alignContent: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 18,
    marginBottom:19,
    alignContent: 'center',
  },

})

export default Home;
