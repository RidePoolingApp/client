import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useUserRole } from "../context/UserRoleContext";
import { useUser } from "@clerk/clerk-expo";
import { Stack } from "expo-router/stack";

export default function TabLayout() {
  const { role } = useUserRole();
  const { isSignedIn } = useUser();

  // Hide tab bar if user is not signed in or hasn't selected a role
  if (!isSignedIn || !role) {
    return <Stack screenOptions={{ headerShown: false }} />;
  }

  if (role === 'driver') {
    return (
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#16A34A',
          tabBarStyle: { 
            paddingBottom: 5, 
            paddingTop: 5, 
            height: 60,
            backgroundColor: 'white',
          },
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '500',
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Dashboard",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="grid-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="createride"
          options={{
            title: "Create",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="add-circle-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="document"
          options={{
            title: "Documents",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="document-text-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="vehicle-info"
          options={{
            title: "Vehicle",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="car-sport-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-circle-outline" size={size} color={color} />
            ),
          }}
        />

        {/* Hide all other screens */}
        <Tabs.Screen name="driver" options={{ href: null }} />
        <Tabs.Screen name="passenger" options={{ href: null }} />
        <Tabs.Screen name="home" options={{ href: null }} />
        <Tabs.Screen name="myrides" options={{ href: null }} />
        <Tabs.Screen name="findride" options={{ href: null }} />
        <Tabs.Screen name="pssmyride" options={{ href: null }} />
      </Tabs>
    );
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#4F46E5',
        tabBarStyle: { 
          paddingBottom: 5, 
          paddingTop: 5, 
          height: 60,
          backgroundColor: 'white',
        },
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="grid-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="findride"
        options={{
          title: "Find Ride",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search-circle-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="pssmyride"
        options={{
          title: "My Rides",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="time-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" size={size} color={color} />
          ),
        }}
      />

      {/* Hide all other screens */}
      <Tabs.Screen name="driver" options={{ href: null }} />
      <Tabs.Screen name="passenger" options={{ href: null }} />
      <Tabs.Screen name="home" options={{ href: null }} />
      <Tabs.Screen name="myrides" options={{ href: null }} />
      <Tabs.Screen name="createride" options={{ href: null }} />
      <Tabs.Screen name="document" options={{ href: null }} />
      <Tabs.Screen name="vehicle-info" options={{ href: null }} />
    </Tabs>
  );
}