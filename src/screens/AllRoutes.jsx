import { createDrawerNavigator } from "@react-navigation/drawer";
import LoginScreen from "./Login";
import Feedback from "./Feedback";
import RegisterScreen from "./Register";
import Logout from "./Logout";

const Drawer = createDrawerNavigator();

export default function AllRoutes() {
  return (
    <Drawer.Navigator initialRouteName="Login">
      <Drawer.Screen name="Login" component={LoginScreen} />
      <Drawer.Screen name="Register" component={RegisterScreen} />
      <Drawer.Screen name="Feedback" component={Feedback} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
}
