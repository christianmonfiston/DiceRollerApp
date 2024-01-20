import { View, Text, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native";
import { TextInput } from "react-native";
import { TouchableOpacityComponent } from "react-native";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Keyboard } from "react-native";
import { Alert } from "react-native";
import { ScrollView } from "react-native";
import { Button } from "react-native";
import { useLayoutEffect } from "react";
import Icon from "../comoponents/Icon";
import { TouchableWithoutFeedback } from "react-native";
export const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const winningNumber = Math.floor(Math.random() * 13);
console.log(winningNumber);

function NavigateLostScreen() {
  navigation.navigate("Lost");
}

let NumberofChances = 5;
function Home({ navigation }) {
  function headerButtonPress() {
    console.log("Header Button Was Pressed");
  }
  useLayoutEffect(() => {
    navigation.setOptions(
      {
        headerRight: () => {
          return <Icon onPress={headerButtonPress} />;
        },
      },
      [navigation, headerButtonPress]
    );
  });
  const [diceNumber, SetDiceNumber] = useState(winningNumber);
  const [display, setDisplay] = useState("X");
  const [playerNumber, SetPlayerNumber] = useState();
  const [text, SetText] = useState();
  let NumberofChances = 4;
  let [chances, setChances] = useState(NumberofChances);

  function onChangeText(text) {
    SetText(text);
    console.log(text);
    SetPlayerNumber(text);
  }

  function playerChoice() {
    let test = 89;
    SetPlayerNumber(text);
    console.log("PRESSED:", diceNumber, playerNumber);

    if (diceNumber == playerNumber) {
      //setDisplay("YOU WON");
      console.log("YOU WON");
      navigation.navigate("Win");
    } else {
      setDisplay("RETRY");
      console.log("YOU LOST");
    }
    if (playerNumber == null) {
      console.log("YOU LOST");
    }
    if (diceNumber != playerNumber) {
      NumberofChances = NumberofChances - 1;
      setChances(NumberofChances);
      setDisplay([chances, " chances left"]);

      if (chances == 1) {
        setDisplay([chances, " chance left"]);
      }
      if (diceNumber != playerNumber) {
        setChances(chances - 1);

        if (chances == 0) {
          NumberofChances = 4;
          setChances(NumberofChances);

          navigation.navigate("Lost");
        }
      }
    } else {
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <View style={styles.upperContent}>
            <View style={styles.title}>
              <Text style={styles.titleDetail}>Pick A Number</Text>
              <Text style={styles.titleDetailSecond}>Between 1 and 12</Text>
            </View>

            <View style={styles.card}>
              <Text style={styles.dice}> {display}</Text>
            </View>
          </View>
        </View>

        <View style={styles.middleContainer}>
          <View style={styles.input}>
            <TextInput
              placeholder="Add your number"
              placeholderTextColor={"white"}
              //keyboardType="numeric"
              style={{ color: "white" }}
              onChangeText={onChangeText}
              maxLength={2}
              keyboardType="numeric"
            />
          </View>
          <View>
            <Pressable onPress={[playerChoice]}>
              <TouchableOpacity onPress={playerChoice}>
                <View style={styles.addButton}>
                  <Text style={{ color: "black" }}>Send</Text>
                </View>
              </TouchableOpacity>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

//export default Home;

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    color: "white",
    fontSize: 30,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    padding: 20,
  },

  card: {
    backgroundColor: "white",
    width: 350,
    height: 250,
    borderRadius: 10,
    justifyContent: "center",
  },

  dice: {
    fontSize: 50,
    justifyContent: "center",
    alignSelf: "center",
  },

  upperContent: {
    paddingVertical: 0,
  },
  titleDetail: {
    color: "#f78dee",
    fontSize: 20,
  },
  titleDetailSecond: {
    color: "#fff700",
    fontSize: 20,
    paddingTop: 10,
  },

  middleContainer: {
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    alignItems: "center",
    margin: 100,
    flexDirection: "column",
  },

  input: {
    border: 10,
    borderColor: "white",
    borderWidth: 1,
    width: 250,
    borderRadius: 10,
    height: 50,
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    alignItems: "center",
  },

  addButton: {
    backgroundColor: "#fff700",
    width: 250,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginVertical: 15,
  },

  roll: {
    backgroundColor: "#f78dee",
    width: 200,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 40,
    height: 40,
    borderRadius: 40,
  },
});
