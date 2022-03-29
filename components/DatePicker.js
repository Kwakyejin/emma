import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

const DatePicker = ({ date, setDate }) => {
  const [year, setYear] = useState(date.getFullYear());
  const [month, setMonth] = useState(date.getMonth() + 1);
  const [day, setDay] = useState(date.getDate());
  const onBlur = () => {
    setYear(year);
    setMonth(month);
    setDay(day);
    try {
      const newDate = new Date(year, month, day);
      setDate(newDate);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="YYYY"
        value={year.toString()}
        onChangeText={setYear}
        keyboardType="numeric"
        onBlur={onBlur}
      />
      <Text> . </Text>
      <TextInput
        placeholder="MM"
        keyboardType="numeric"
        value={month.toString()}
        onChangeText={setMonth}
        onBlur={onBlur}
      />
      <Text> . </Text>
      <TextInput
        placeholder="DD"
        keyboardType="numeric"
        value={day.toString()}
        onChangeText={setDay}
        onBlur={onBlur}
      />
    </View>
  );
};

export default DatePicker;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#5c5c5c",
    padding: 20,
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginLeft: 10,
    backgroundColor: "gray",
  },
});
