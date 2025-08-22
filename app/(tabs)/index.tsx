import { StyleSheet, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import { auth } from '../../firebaseConfig';
import { router } from 'expo-router';
import { getAuth } from 'firebase/auth';

export default function Home() {

	getAuth().onAuthStateChanged((user) => {
		if (!user) router.push('/');
	});
	const user = auth.currentUser?.email
	return (
		<SafeAreaView style={styles.container}>
			<Text className='text-3xl'>Hello {user}</Text>
			<TouchableOpacity className='bg-yellow-400  w-fit px-3 py-2 rounded-xl' onPress={() => auth.signOut()
			}>
				<Text className='text-xl'>Sign Out</Text>

			</TouchableOpacity>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FAFAFA', // A softer white for a modern, minimalist background
	},
	title: {
		fontSize: 28, // A bit larger for a more striking appearance
		fontWeight: '800', // Extra bold for emphasis
		color: '#1A237E', // A deep indigo for a sophisticated, modern look
		marginBottom: 40, // Increased space for a more airy, open feel
	},
	separator: {
		marginVertical: 30,
		height: 2, // Slightly thicker for a more pronounced separation
		width: '80%',
		backgroundColor: '#E8EAF6', // Using a light indigo to match the border of the textInput
	},
	button: {
		width: '90%',
		backgroundColor: '#5C6BC0', // A lighter indigo to complement the title color
		padding: 20,
		borderRadius: 15, // Softly rounded corners for a modern, friendly touch
		alignItems: 'center',
		justifyContent: 'center',
		shadowColor: '#5C6BC0', // Shadow color to match the button for a cohesive look
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.4,
		shadowRadius: 5,
		elevation: 5, // Slightly elevated for a subtle 3D effect
		marginTop: 15, // Adjusted to match the new style
	},
	text: {
		color: '#FFFFFF', // Maintained white for clear visibility
		fontSize: 18, // Slightly larger for emphasis
		fontWeight: '600', // Semi-bold for a balanced weight
	}
});
