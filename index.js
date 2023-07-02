import { registerRootComponent } from "expo";
import { NavigationContainer } from "@react-navigation/native";

import App from "./App";
import AuthContextProvider from "./src/context/AuthContext";

const AppWraper = () => {
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </NavigationContainer>
  );
};

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(AppWraper);
