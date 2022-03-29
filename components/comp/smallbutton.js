import React from "react";
function MyButton({ text, onPress }) {
  return <View style={styles.myButton}></View>;
}

const styles = StyleSheet.create({
  myButton: {
    height: 50,
    width: 50,
    marginBottom: 10,
    borderRadius: 20,
    fontWeight: "600",
    color: "#5C5C5C",
    backgroundColor: "#C8D7FF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
