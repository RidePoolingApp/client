import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useUserRole } from "../context/UserRoleContext";
import { SignOutButton } from "../components/SigninButton";
import "../../global.css";
import { useUser } from "@clerk/clerk-expo";

export default function Home() {
  const router = useRouter();
  const { role, setRole } = useUserRole();
  const user = useUser();

  if (user.isSignedIn) {
    if (role === null) {
      return (
        <View className="flex-1 bg-gray-100">
          <LinearGradient
            colors={["#4F46E5", "#3B82F6"]}
            className="rounded-b-3xl px-6 pt-16 pb-12 shadow-md"
          >
            <Text className="text-3xl font-bold text-white mb-2">
              Choose Your Role
            </Text>
            <Text className="text-white text-base opacity-90">
              Select how you want to use the app
            </Text>
          </LinearGradient>

          <View className="flex-1 justify-center px-6">
            <TouchableOpacity
              onPress={() => setRole("passenger")}
              className="bg-white rounded-3xl p-8 mb-8 shadow-lg items-center"
            >
              <View className="bg-indigo-100 p-6 rounded-full mb-4">
                <Ionicons name="person-outline" size={40} color="#4F46E5" />
              </View>
              <Text className="text-xl font-bold text-gray-800 mb-2">
                Passenger
              </Text>
              <Text className="text-gray-500 text-center">
                Find and book rides quickly
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setRole("driver")}
              className="bg-white rounded-3xl p-8 shadow-lg items-center"
            >
              <View className="bg-green-100 p-6 rounded-full mb-4">
                <Ionicons name="car-outline" size={40} color="#16A34A" />
              </View>
              <Text className="text-xl font-bold text-gray-800 mb-2">
                Driver
              </Text>
              <Text className="text-gray-500 text-center">
                Offer your ride to passengers
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }

    if (role === "passenger") {
      return (
        <View className="flex-1 bg-gray-100">
          <LinearGradient
            colors={["#4F46E5", "#3B82F6"]}
            className="rounded-b-3xl px-6 pt-16 pb-12 shadow-md"
          >
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-3xl font-bold text-white">
                Welcome Passenger 👋
              </Text>
              <TouchableOpacity
                className="bg-white/20 rounded-full p-2"
                onPress={() => setRole(null)}
              >
                <Ionicons name="swap-horizontal" size={24} color="white" />
              </TouchableOpacity>
            </View>
            <View className="flex-row justify-between items-center">
              <Text className="text-white text-base opacity-90">
                Book your next ride
              </Text>
              <SignOutButton />
            </View>
          </LinearGradient>

          <ScrollView contentContainerStyle={{ padding: 16 }}>
            <TouchableOpacity
              onPress={() => router.push("/findride")}
              className="bg-white rounded-2xl p-6 mb-6 shadow-lg flex-row items-center"
            >
              <View className="bg-indigo-100 p-4 rounded-full mr-4">
                <Ionicons name="search-outline" size={28} color="#4F46E5" />
              </View>
              <View>
                <Text className="text-lg font-semibold text-gray-800">
                  Find a Ride
                </Text>
                <Text className="text-gray-500">
                  Search and book available rides
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push("/pssmyride")}
              className="bg-white rounded-2xl p-6 shadow-lg flex-row items-center"
            >
              <View className="bg-yellow-100 p-4 rounded-full mr-4">
                <Ionicons name="time-outline" size={28} color="#CA8A04" />
              </View>
              <View>
                <Text className="text-lg font-semibold text-gray-800">
                  My Rides
                </Text>
                <Text className="text-gray-500">
                  View your past & upcoming rides
                </Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      );
    }

    return (
      <View className="flex-1 bg-gray-100">
        <LinearGradient
          colors={["#16A34A", "#22C55E"]}
          className="rounded-b-3xl px-6 pt-16 pb-12 shadow-md"
        >
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-3xl font-bold text-white">
              Driver Panel 🚘
            </Text>
            <TouchableOpacity
              className="bg-white/20 rounded-full p-2"
              onPress={() => setRole(null)}
            >
              <Ionicons name="swap-horizontal" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <View className="flex-row justify-between items-center">
            <Text className="text-white text-base opacity-90">
              Manage your rides & profile
            </Text>
            <SignOutButton />
          </View>
        </LinearGradient>

        <ScrollView contentContainerStyle={{ padding: 16 }}>
          <TouchableOpacity
            onPress={() => router.push("/createride")}
            className="bg-white rounded-2xl p-6 mb-6 shadow-lg flex-row items-center"
          >
            <View className="bg-green-100 p-4 rounded-full mr-4">
              <Ionicons name="add-circle-outline" size={28} color="#16A34A" />
            </View>
            <View>
              <Text className="text-lg font-semibold text-gray-800">
                Create Ride
              </Text>
              <Text className="text-gray-500">Offer a ride to passengers</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("/myrides")}
            className="bg-white rounded-2xl p-6 mb-6 shadow-lg flex-row items-center"
          >
            <View className="bg-yellow-100 p-4 rounded-full mr-4">
              <Ionicons name="time-outline" size={28} color="#CA8A04" />
            </View>
            <View>
              <Text className="text-lg font-semibold text-gray-800">
                My Rides
              </Text>
              <Text className="text-gray-500">View and manage your rides</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("/vehicle-info")}
            className="bg-white rounded-2xl p-6 mb-6 shadow-lg flex-row items-center"
          >
            <View className="bg-blue-100 p-4 rounded-full mr-4">
              <Ionicons name="car-outline" size={28} color="#2563EB" />
            </View>
            <View>
              <Text className="text-lg font-semibold text-gray-800">
                Vehicle Info
              </Text>
              <Text className="text-gray-500">Add or update car details</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("/document")}
            className="bg-white rounded-2xl p-6 mb-6 shadow-lg flex-row items-center"
          >
            <View className="bg-pink-100 p-4 rounded-full mr-4">
              <Ionicons
                name="document-text-outline"
                size={28}
                color="#DB2777"
              />
            </View>
            <View>
              <Text className="text-lg font-semibold text-gray-800">
                Documents
              </Text>
              <Text className="text-gray-500">Upload License & RC</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("/profile")}
            className="bg-white rounded-2xl p-6 shadow-lg flex-row items-center"
          >
            <View className="bg-purple-100 p-4 rounded-full mr-4">
              <Ionicons name="person-outline" size={28} color="#7C3AED" />
            </View>
            <View>
              <Text className="text-lg font-semibold text-gray-800">
                Profile
              </Text>
              <Text className="text-gray-500">Manage your account</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  } else {
    return (
      <View className="flex-1 bg-green-800 justify-end items-center w-[100%] pb-32">
        <Text className="text-4xl font-bold text-white mb-4">
          waylink.<Text className="text-yellow-400">go</Text>
        </Text>
        <Text className="text-white text-center mb-8">
          Welcome to waylink! Connect though ways!
        </Text>
        <TouchableOpacity
          className="bg-white w-4/5 py-3 rounded-2xl mb-4"
          onPress={() => router.push("/(auth)/login")}
        >
          <Text className="text-center font-semibold  text-green-800">
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-gray-100 w-4/5 py-3 rounded-2xl"
          onPress={() => router.push("/(auth)/signup")}
        >
          <Text className="text-center font-semibold text-green-800">
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
