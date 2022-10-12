import { Button, StyleSheet, Text, View } from 'react-native';
import * as React from 'react'

const Home = ({navigation})=>{
    return (
        <Button onPress={()=>{
            navigation.navigate('Login',{name: name})
        }}
        >
            Go to login
        </Button>
    )

}
export default Home