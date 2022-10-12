import { Button, StyleSheet, Text, View } from 'react-native';
import * as React from 'react'

const Login = ({navigation, name})=>{
    return (
        <Text>
            This is {name.params.name}
        </Text>
    )

}
export default Login