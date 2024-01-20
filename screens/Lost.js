import { View, StyleSheet, Text } from "react-native";
import { Pressable } from "react-native";
import { Button } from "react-native";
import { TouchableOpacity } from "react-native";
import { NavigationAction } from "@react-navigation/native";
import { useState } from "react";

import Home from "./Home";
function Lost({ navigation }) {
  function PlayAgain() {
    navigation.navigate("Home");
  }
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.card}>
          <View style={styles.card}>
            <Text
              style={{
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                alignSelf: "center",
                fontSize: 40,
              }}
            >
              You Lost
            </Text>
          </View>
        </View>
        <View style={styles.button}>
          <Button title="PLAY AGAIN" onPress={PlayAgain} />
        </View>
      </View>
    </View>
  );
}

export default Lost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },

  text: {
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
  },

  card: {
    backgroundColor: "white",
    width: 350,
    height: 250,
    borderRadius: 10,
    justifyContent: "center",
  },

  button: {
    backgroundColor: "#fff700",
    width: 250,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginVertical: 15,
    alignSelf: "center",
  },
});
