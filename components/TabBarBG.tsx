import { BlurView } from "expo-blur"
import { StyleSheet } from "react-native"

export const TabBarBG = () => {
  return <BlurView
    tint="default"
    intensity={100}
    style={StyleSheet.absoluteFill}
  />
}
