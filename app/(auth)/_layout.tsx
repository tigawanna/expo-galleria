import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
export default function AuthLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FFA001",
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#161622",
          borderTopWidth: 1,
          borderTopColor: "#232533",
        },
      }}>
      <Tabs.Screen
        name="signin"
        options={{
          title: "Signin",
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="sign-in" color={color} />,
        }}
      />
      <Tabs.Screen
        name="signup"
        options={{
          title: "Signup",
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="plus" color={color} />,
        }}
      />
    </Tabs>
  );
}
const styles = StyleSheet.create({});
