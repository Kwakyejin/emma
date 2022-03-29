import React from "react";
function MyButton({ text, onPress }) {
  return <View style={styles.myButton}></View>;
}

const styles = StyleSheet.create({
  myButton: {
    height: 120,
    width: 300,
    marginBottom: 10,
    borderRadius: 32,
    fontWeight: "600",
    color: "#5C5C5C",
    backgroundColor: "#FFFFFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
