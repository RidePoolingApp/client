import { Text, TextInput, View } from "react-native";
import './global.css'
export default function Index() {
	return (
		<View className="flex justify-center h-screen"
		>
			<Text className="text-cyan-700 text-xl  text-center ">Welcome</Text>
			<View>
				<TextInput textContentType="emailAddress" className="border text-neutral-800 font-semibold w-4/6 self-center p-2 rounded-lg" placeholder="example@domain.com" />
			</View>
		</View >
	);
}

