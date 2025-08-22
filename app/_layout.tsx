import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import { TabBarBG } from "@/components/TabBarBG";
import { Platform } from "react-native";
export default function RootLayout() {
	return <Tabs >
		<Tabs.Screen name="(tabs)/index" options={{
			title: ' My Home', tabBarLabel: 'Home', tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />,
			tabBarActiveTintColor: "#FFBF00", tabBarShowLabel: false, tabBarBackground: TabBarBG, tabBarStyle: Platform.select({
				android: {
					position: "absolute",
					bottom: 0,
					left: 0,
					right: 0,
					shadowOpacity: 0,
					elevation: 2
				}
			})

		}} />
		<Tabs.Screen name="index" options={{
			title: 'Auth', tabBarLabel: 'Home', tabBarIcon: ({ color, size }) => <Ionicons name="person" color={color} size={size} />,
			tabBarActiveTintColor: "#FFBF00", tabBarShowLabel: false, tabBarBackground: TabBarBG, tabBarStyle: Platform.select({
				android: {
					position: "absolute",
					bottom: 0,
					left: 0,
					right: 0,
					shadowOpacity: 0,
					elevation: 2
				}
			})

		}} />
	</Tabs>
}
