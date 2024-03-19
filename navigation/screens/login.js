import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

export default function Login({ navigation }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const toHome = () => {
        console.log(email);
        console.log(password);
        navigation.navigate("Home");
    }


    return (
        <View style={style.main}>
            <Text style={style.head}>Login Page</Text>
            <View style={style.container}>
                <Text style={style.text}>
                    Email
                </Text>
                <TextInput
                    id='Email'
                    style={style.textArea}
                    placeholder='Email'
                    onChangeText={setEmail}
                    
                />
                <Text style={style.text}>
                    Password
                </Text>
                <TextInput
                    id='Password'
                    style={style.textArea}
                    placeholder='Password'
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <TouchableOpacity
                    onPress={toHome}
                >
                    <Text style={style.button}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",

    },
    container: {
        height: 350,
        width: 350,
        alignItems: "center",
        justifyContent: "space-evenly",
        borderColor: "#41c6b7",
        borderWidth: 2,
        borderRadius: 15
    },
    head: {
        height: 50,
        width: 350,
        marginVertical: 20,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontWeight: "900",
        fontSize: 35,
        color: "#4193c6"
    },
    text: {
        marginVertical: 10,
        fontSize: 20,
        fontWeight: "500",

    },
    textArea: {
        height: 45,
        width: 300,
        borderColor: "gray",
        borderWidth: 1.5,
        borderRadius: 10,
        borderColor: "#1e81b0",
        alignContent: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: 0,
    },
    button: {
        marginVertical: 10,
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
        color: "white",
        backgroundColor: "black",
        width: 150,
        textAlign: "center"
    }
})
