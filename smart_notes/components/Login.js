import React, { useState, useEffect } from 'react';
import { View, Button, Linking, TextInput, StyleSheet, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'

const Login = (props) => {
  const [name, setName] = useState('');

  useEffect(() => {
    getData();
  }, []);

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

  const updateData = async () => {
    if (name.length == 0) {
      Alert.alert('Warning!', 'Please write your data.')
    } else {
      try {

        await AsyncStorage.mergeItem('UserData', (name));
        Alert.alert('Success!', 'Your data has been updated.');
      } catch (error) {
        console.log(error);
      }
    }
  }

  const removeData = async () => {
    try {
      await AsyncStorage.clear();
      props.navigation.navigate('Home');
    } catch (error) {
      console.log(error);
    }
  }
  // const onpresshandler = () =>{
  //   editable
  //   multiline
  //   numberOfLines=20

  // }

  return (


    <View style={styles.body}>

      {/* <Button title="youtube channel" color="orange" onPress={()=>{Linking.openURL("https://www.youtube.com/channel/UCKLXFXgvJ665OFySSDbbRaw")}} /> */}
      {/* <Button title="Home page" onPress={() => props.navigation.navigate("Home")} /> */}

      <Text style={styles.text}>
        {name}
      </Text>

      <View style={styles.button}>
      <Button
        title='Update'
        color='#ff7f00'
        onPress={updateData}
      />
      <Button
        title='Remove'
        color='#f40100'
        onPress={removeData}
      />
        </View>

    </View>

  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    margin: 10,
  },
  input: {
    height: 100,
    margin: 12,
    padding: 10,
    textAlign: 'center',
  },
  button: {
    width: 150,
    height: 600,
    alignContent: 'center',
    justifyContent: 'center'
  }
})

export default Login;