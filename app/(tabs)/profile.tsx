import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useUserRole } from "../context/UserRoleContext";
import { useUser } from "@clerk/clerk-expo";
import { SignOutButton } from "../components/SigninButton";

export default function ProfileScreen() {
  const { role, setRole } = useUserRole();
  const { user } = useUser();

  const stats =
    role === "driver"
      ? [
          { label: "Rides", value: "28" },
          { label: "Rating", value: "4.8" },
          { label: "Earnings", value: "₹2.8K" },
          { label: "Hours", value: "42" },
        ]
      : [
          { label: "Rides", value: "12" },
          { label: "Rating", value: "4.9" },
          { label: "Spent", value: "₹1.2K" },
          { label: "Saved", value: "₹280" },
        ];

  const menuItems =
    role === "driver"
      ? [
          { icon: "car-outline", label: "My Vehicle", color: "#2563EB" },
          {
            icon: "document-text-outline",
            label: "Documents",
            color: "#DB2777",
          },
          { icon: "wallet-outline", label: "Earnings", color: "#16A34A" },
          { icon: "star-outline", label: "Reviews", color: "#CA8A04" },
          { icon: "settings-outline", label: "Settings", color: "#6B7280" },
          { icon: "help-circle-outline", label: "Help", color: "#7C3AED" },
        ]
      : [
          { icon: "time-outline", label: "Ride History", color: "#2563EB" },
          { icon: "heart-outline", label: "Saved Places", color: "#DB2777" },
          { icon: "wallet-outline", label: "Payments", color: "#16A34A" },
          { icon: "star-outline", label: "Reviews", color: "#CA8A04" },
          { icon: "settings-outline", label: "Settings", color: "#6B7280" },
          { icon: "help-circle-outline", label: "Help", color: "#7C3AED" },
        ];

  return (
    <ScrollView className="flex-1 bg-gray-50">
      {/* Header */}
      <LinearGradient
        colors={
          role === "driver" ? ["#16A34A", "#22C55E"] : ["#4F46E5", "#3B82F6"]
        }
        className="px-6 pt-16 pb-8 rounded-b-[32px]"
      >
        <View className="flex-row justify-between items-center mb-6">
          <Text className="text-2xl font-bold text-white">Profile</Text>
          <View className="flex-row gap-2">
            <TouchableOpacity
              className="bg-white/20 rounded-full p-2"
              onPress={() => setRole(null)}
            >
              <Ionicons name="swap-horizontal" size={24} color="white" />
            </TouchableOpacity>
            <SignOutButton />
          </View>
        </View>

        <View className="flex-row items-center gap-4">
          {user?.imageUrl ? (
            <Image
              source={{ uri: user.imageUrl }}
              className="w-20 h-20 rounded-full border-2 border-white"
            />
          ) : (
            <View className="w-20 h-20 rounded-full bg-white/20 items-center justify-center">
              <Ionicons name="person" size={40} color="white" />
            </View>
          )}
          <View>
            <Text className="text-white text-lg font-semibold">
              {user?.firstName} {user?.lastName}
            </Text>
            <Text className="text-white/80">
              {user?.primaryEmailAddress?.emailAddress}
            </Text>
            <View className="flex-row items-center mt-1 bg-white/20 rounded-full px-3 py-1">
              <Ionicons
                name={role === "driver" ? "car-outline" : "person-outline"}
                size={16}
                color="white"
              />
              <Text className="text-white ml-1 capitalize">{role}</Text>
            </View>
          </View>
        </View>

        {/* Stats */}
        <View className="flex-row justify-between mt-6 bg-white/10 rounded-2xl p-4">
          {stats.map((stat, index) => (
            <View key={index} className="items-center">
              <Text className="text-white text-xl font-bold">{stat.value}</Text>
              <Text className="text-white/80 text-sm">{stat.label}</Text>
            </View>
          ))}
        </View>
      </LinearGradient>

      {/* Menu Items */}
      <View className="p-6">
        <View className="bg-white rounded-2xl shadow-sm divide-y divide-gray-100">
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              className="flex-row items-center px-4 py-4"
            >
              <View
                style={{ backgroundColor: `${item.color}10` }}
                className="w-10 h-10 rounded-full items-center justify-center mr-4"
              >
                <Ionicons
                  name={item.icon as any}
                  size={20}
                  color={item.color}
                />
              </View>
              <Text className="flex-1 text-gray-700 font-medium">
                {item.label}
              </Text>
              <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
            </TouchableOpacity>
          ))}
        </View>

        <View className="mt-6 bg-white rounded-2xl p-4 shadow-sm">
          <Text className="text-gray-400 text-sm text-center">
            App Version 1.0.0
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
