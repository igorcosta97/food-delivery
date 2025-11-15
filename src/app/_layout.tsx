import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import '../styles/global.css';

export default function RootLayout() {
  return (
     <Tabs
  screenOptions={{
    tabBarShowLabel: true,
    tabBarActiveTintColor: "#00000",
    tabBarStyle: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        height: 50,
        backgroundColor: '#f3f4f6',
        elevation: 100,
      },
    headerShown: false,
  }}
>
  <Tabs.Screen
    name="index"
    options={{
      title: "Início",
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="home" color={color} size={size} />
      ),
    }}
  />

  <Tabs.Screen
    name="search"
    options={{
      title: "Busca",
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="search" color={color} size={size} />
      ),
    }}
  />

  <Tabs.Screen
    name="orders"
    options={{
      title: "Pedidos",
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="receipt" color={color} size={size} />
      ),
    }}
  />

  <Tabs.Screen
    name="settings"
    options={{
      title: "Config",
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="settings" color={color} size={size} />
      ),
    }}
  />
</Tabs>

  )
}
