import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderRadius: 20,
    height: 40,
    justifyContent: "center",
    textAlignVertical: "center",
    margin: -5,
    width: Dimensions.getWidth() - 296
  }
});

export default styles;
