import { Button, StyleSheet, Text, View, BackHandler } from 'react-native';
import * as React from 'react'

const Home = ({navigation, route})=>{
    const backAction =()=>{
        return true
    }
    const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
      );
    const {name_param,pass_param}=route.params
    console.log(route.params)
    return (
        <Text>
            This is {JSON.stringify(name_param)} with password: {JSON.stringify(pass_param)}
        </Text>
    )

}
export default Home