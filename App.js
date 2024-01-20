import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";
import { DismissKeyboard } from "./screens/Home";
import { Button } from "react-native";
import Lost from "./screens/Lost";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Win from "./screens/Win";
import { useLayoutEffect } from "react";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Game",
            headerShown: false,

            headerRight: () => {
              return (
                <Button title="Tap Me" onPress={() => console.log("pressed")} />
              );
            },
          }}
          screenOptions={{
            headerTintColor: "red",
            contentStyle: { backgroundColor: "black" },
          }}
        />
        <Stack.Screen name="Win" component={Win} />
        <Stack.Screen name="Lost" component={Lost} />
      </Stack.Navigator>
    </NavigationContainer>
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
