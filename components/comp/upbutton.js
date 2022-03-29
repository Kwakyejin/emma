import React from "react";
function MyButton({ text, onPress }) {
  return <View style={styles.myButton}></View>;
}

const styles = StyleSheet.create({
  myButton: {
    height: 32,
    width: 32,
    marginBottom: 10,
    borderRadius: 5,
    fontWeight: "600",
    color: "#5C5C5C",
    backgroundColor: "#FFFFFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
