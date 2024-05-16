import { Tabs } from "expo-router";
import { View, Text, Image } from "react-native";
import { icons } from "../../constants";
import FontAwesome from "@expo/vector-icons/FontAwesome";
export default function TabsLayout() {
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
				}}
			>
				<Tabs.Screen
					name="home"
					options={{
						title: "Home",
						tabBarIcon: ({ color }) => (
							<FontAwesome size={28} name="home" color={color} />
						),
					}}
				/>
				<Tabs.Screen
					name="bookmark"
					options={{
						title: "bookmark",
						tabBarIcon: ({ color }) => (
							<FontAwesome size={28} name="bookmark" color={color} />
						),
					}}
				/>
				<Tabs.Screen
					name="create"
					options={{
						title: "Create",
						tabBarIcon: ({ color }) => (
							<FontAwesome size={28} name="plus" color={color} />
						),
					}}
				/>
				<Tabs.Screen
					name="profile"
					options={{
						title: "Profile",
						tabBarIcon: ({ color }) => (
							<FontAwesome size={28} name="user-circle" color={color} />
						),
					}}
				/>
			</Tabs>
		);
}

interface TabIconProps {
  name: string;
  color: string;
  focused: boolean;
  icon: string;
}

export function TabIcon({ name, color, focused, icon }: TabIconProps) {
  return (
    <View className="">
      <Image source={{ uri: icon }} resizeMode="contain" tintColor={color} className="size-4" />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color: color }}>
        {name}
      </Text>
    </View>
  );
}
