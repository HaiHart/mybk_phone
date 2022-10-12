import { Button, StyleSheet, Text, TextInput, View, Dimensions } from 'react-native';
import * as React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const Login = ({navigation})=>{
    const [name, setName] = React.useState("Name")
    const [pass, setPass]=React.useState("password")
    return (
        <View style={styles.view}>
            <TextInput
                style={styles.Input}
                onChangeText={setName}
                placeholder={name}
            />
            <TextInput
                style={styles.Input}
                onChangeText={setPass
                }
                placeholder={pass}
            />
       
        <Button onPress={()=>{
            navigation.navigate(
                'Home',
               { 
                    name_param: name,
                    pass_param: pass,
                }
                
            )
            
        }}
            title="Login"
            style={styles.input}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
      height: Dimensions.get("screen").height/8,
      width: Dimensions.get("screen").width/2,
      margin: 100,
      borderWidth: 50,
      borderColor:0x121212,
      padding: 100,
    },
    view:{
        //justifyContent:"space-between",
        alignItems:'center',
        flex:1,
        marginBottom: 10,
    }
  });

export default Login