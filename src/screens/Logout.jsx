import { View, Text } from "react-native";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Logout = ({ navigation }) => {
  const { user, setUser } = useContext(AuthContext);

  const logoutFromDevice = async () => {
    await AsyncStorage.removeItem("user");
  };

  if (!user) {
    navigation.navigate("Login");
  }
  useEffect(() => {
    setUser(null);
    logoutFromDevice();
    navigation.navigate("Login");
  }, [user]);
  return (
    <View>
      <Text>Logout</Text>
    </View>
  );
};

export default Logout;
