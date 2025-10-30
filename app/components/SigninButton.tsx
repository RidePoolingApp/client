import { useClerk } from "@clerk/clerk-expo";
import * as Linking from "expo-linking";
import { router } from "expo-router";
import { Text, TouchableOpacity } from "react-native";
import { useUserRole } from "../context/UserRoleContext";

export const SignOutButton = () => {
  // Use `useClerk()` to access the `signOut()` function
  const { signOut } = useClerk();
  const { setRole } = useUserRole();

  const handleSignOut = async () => {
    try {
      // Clear the role context first
      setRole(null);
      // Then sign out
      await signOut();
      // Redirect to login page
      Linking.openURL(Linking.createURL("/"));
      router.reload();
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  };
  return (
    <TouchableOpacity
      onPress={handleSignOut}
      className="bg-white/20 rounded-full px-3 py-1"
    >
      <Text className="text-white">Sign out</Text>
    </TouchableOpacity>
  );
};
