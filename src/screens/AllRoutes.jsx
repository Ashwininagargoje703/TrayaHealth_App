import { createDrawerNavigator } from "@react-navigation/drawer";
import LoginScreen from "./Login";
import Feedback from "./Feedback";
import RegisterScreen from "./Register";
import Logout from "./Logout";
import { Image, Text } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Drawer = createDrawerNavigator();

export default function AllRoutes() {
  const { user } = useContext(AuthContext);

  return (
    <Drawer.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerTitleAlign: "center",
        headerBackgroundColor: "red",
        headerTitle: () => (
          <Text style={{ fontWeight: 800, fontSize: 18 }}>Traya Health</Text>
        ),
      }}
    >
      {!user && <Drawer.Screen name="Login" component={LoginScreen} />}
      <Drawer.Screen name="Register" component={RegisterScreen} />
      <Drawer.Screen name="Feedback" component={Feedback} />
      {user && <Drawer.Screen name="Logout" component={Logout} />}
    </Drawer.Navigator>
  );
}
