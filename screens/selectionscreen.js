import * as React from "react";
import { Button, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import editScreen1 from "./editScreen1";

function editselect({ navigation }) {
  return (
    <View>
      <Text>어떤 영화를 추천받고 싶으세요?</Text>
      <Button
        title="내가 좋아할만한 영화 추천받기"
        onPress={() => {
          navigation.navigate("editScreen1");
        }}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <View>
      <Stack.Navigator>
        <Stack.Screen name="editselect" component={editScreen1} />
      </Stack.Navigator>
    </View>
  );
}

export default App;
