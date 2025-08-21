import { getAuth, createUserWithEmailAndPassword } from '@react-native-firebase/auth';


export const createAccountEmail = async () => {
  try {
    const user = await createUserWithEmailAndPassword(getAuth(), 'jane.doe@example.com', 'SuperSecretPassword!')
    console.log('new user certed', JSON.stringify(user))
  }
  catch (error) {
    console.log(error)
  }

}
