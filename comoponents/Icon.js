import { View, Button, Text, StyleSheet, Pressable } from "react-native";
import { TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
function Icon({ icon, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <AntDesign name="addfile" size={24} color={"black"} />
    </Pressable>
  );
}

export default Icon;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
