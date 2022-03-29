import React from "react";
function MyButton({ text, onPress }) {
  return (
    <View style={styles.myButton}>
      <Text style={{ color: "#5C5C5C", fontWeight: "1000", fontSize: 11 }}>
        {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  myButton: {
    height: 67,
    width: 206,
    marginBottom: 10,
    borderRadius: 20,
    fontWeight: "600",
    color: "#5C5C5C",
    backgroundColor: "#FFFFFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
