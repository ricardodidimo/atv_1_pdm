import { useActionSheet } from "@expo/react-native-action-sheet";
import { View, Text, Button, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useRouter } from "expo-router";
import HeaderOptions from "../services/HeaderOptions";

interface HeaderArgs {
    options?: HeaderOptions[]
}
const Header = (args: HeaderArgs) => {
    const { showActionSheetWithOptions } = useActionSheet();
    const router = useRouter();

    const optionsStr = args.options?.map(opt => opt.toString());
    const options = optionsStr ?? [HeaderOptions.Sobre.toString(), HeaderOptions.LogOut.toString()];
    const destructiveButtonIndex = options.length - 1;
    const cancelButtonIndex = 2;
    const handleOpen = () => {
        showActionSheetWithOptions(
            {
                options,
                cancelButtonIndex,
                destructiveButtonIndex,
            },
            (buttonIndex) => {
                const opt = options[buttonIndex!]
                if (opt === HeaderOptions.LogOut.toString()) {
                    while (router.canGoBack()) {
                        router.back()
                    }
                    router.back()
                } else if (opt === HeaderOptions.Sobre.toString()) {
                    router.push("/about")
                } else {
                    console.log("opt was undefined.")
                }
            }
        );
    };

    return (
        <View style={styles.container}>
            <View onTouchStart={router.back}>
                <Image style={styles.back} source={require('../../assets/images/solar_login-bold.png')} />
            </View>
            <Text>66Carros</Text>

            <View onTouchStart={handleOpen}>
                <Image style={styles.image} source={require('../../assets/images/burger_menu.png')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: 'white',
        width: '95%'
    },
    image: {
        width: 30,
        height: 30
    },
    back: {
        transform: [{ rotate: '180deg'}]
    }
})

export default Header   