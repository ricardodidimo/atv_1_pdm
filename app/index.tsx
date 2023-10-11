import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";
import Logo from "../src/components/Logo";
import LoginForm from "../src/components/LoginForm";

export default function index() {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "66 CARROS"
        }}
      />

      <Logo></Logo>
      <LoginForm></LoginForm>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
