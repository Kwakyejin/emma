import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SigninScreen from "./screens/signinscreen";
import LoginScreen from "./screens/LoginScreen";
import Loading from "./screens/basicInformation/Loading";
import LoadingComponent from "./components/Loading";
import Step1Screen from "./screens/basicInformation/Step1Screen";
import Step2Screen from "./screens/basicInformation/Step2Screen";
import Step3Screen from "./screens/basicInformation/Step3Screen";
import Step4Screen from "./screens/basicInformation/Step4Screen";
import MainScreen from "./screens/mainScreens2/MainScreen";
import VerifyEmailScreen from "./screens/VerifyEmailScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index";
import { Provider } from "react-redux";
import ModifyEmailScreen from "./screens/ModifyEmailScreen";
import SnsModifyScreen from "./screens/basicInformation/SnsModifyScreen";

const Stack = createNativeStackNavigator();

const store = createStore(reducers, compose(applyMiddleware(thunk)));

function App() {
  return (
    <>
      <Provider store={store}>
        <SafeAreaProvider>
          <NavigationContainer>
            <LoadingComponent />
            <Stack.Navigator>
              <Stack.Screen
                name="login"
                component={LoginScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="mainScreen"
                component={MainScreen}
                options={{ headerShown: false }}
              />

              <Stack.Screen
                name="signinScreen"
                component={SigninScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="verifyEmailScreen"
                component={VerifyEmailScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="modifyEmailScreen"
                component={ModifyEmailScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="welcomeScreen"
                component={WelcomeScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="loading"
                component={Loading}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="step1Screen"
                component={Step1Screen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="step2Screen"
                component={Step2Screen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="step3Screen"
                component={Step3Screen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="step4Screen"
                component={Step4Screen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="snsModifyScreen"
                component={SnsModifyScreen}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </Provider>
    </>
  );
}

export default App;
