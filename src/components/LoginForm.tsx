import { View, Text, TextInput, StyleSheet, Button, Image} from 'react-native'
import React, { useState } from 'react'
import users from '../services/users';
import { useRouter } from "expo-router";

const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [feedback, setFeedback] = useState('')
    const router = useRouter();
    function loginFunc() {
        setFeedback("")
        const findUser = users.filter(u => u.username === username && u.password === password)

        if (findUser.length > 0) {

            router.push("/list")
            console.log('logou')
            return;
        }

        setFeedback("Credenciais inválidas! Tente novamente.")
    }
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} onChangeText={setUsername} key='username' placeholder='username'></TextInput>
            <TextInput style={styles.input} onChangeText={setPassword} key='password' placeholder='password'></TextInput>
            <View style={styles.buttonRow} onTouchStart={loginFunc}>
                <Image style={styles.image} source={require('../../assets/images/solar_login-bold.png')} />
                <Text>LOGIN</Text>
            </View>

            <View style={styles.feedbackContainer}>
                <Text style={styles.feedbackText}>{feedback}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        padding: 5,
        paddingHorizontal: 80,
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 7,
        borderColor: "black",
        textAlign: 'center'
    },
    buttonRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: 100,
        marginVertical: 2,
        padding: 3,
        borderBottomWidth: 1
    },
    image: {
        marginHorizontal: 10
    },
    feedbackContainer: {
        marginTop: 10
    },
    feedbackText: {
        color: 'red'
    }
});

export default LoginForm