import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//
import Home from "./screens/Home";
import Accenture from "./screens/Accenture";
import Contact from "./screens/Contact";
import Header from "./components/Header";
import Storage from "./screens/Storage";

const { Navigator, Screen } = createStackNavigator();

export default function Route() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: "#f2f2f2" },
        }}
      >
        <Screen
          name="contact"
          component={Contact}
          options={{
            headerShown: true,
            header: () => <Header title="Contact" showCancel={true} />,
          }}
        />
        <Screen name="home" component={Home} />
        <Screen
          name="accenture"
          component={Accenture}
          options={{
            headerShown: true,
            header: () => <Header title="Accenture" showCancel={true} />,
          }}
        />
        <Screen
          name="storage"
          component={Storage}
          options={{
            headerShown: true,
            header: () => <Header title="Storage" showCancel={true} />,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
