import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, Tabs } from "expo-router";

export default function TabsLayout() {
	return (
<Tabs>
	<Tabs.Screen name="home"/>
	<Tabs.Screen name="profile"/>
</Tabs>
	);
}
