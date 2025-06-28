import { Tabs } from "expo-router";
import { Feather} from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
    screenOptions={{
        tabBarShowLabel:false,
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon({ color, size }) {
            return <Feather name="home" color={color} size={size} />;
          },
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: "Notifications",
          tabBarIcon({ color, size }) {
            return <Feather name="heart" size={size} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon({ color, size }) {
            return <Feather name="user" size={size} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon({ color, size }) {
            return <Feather name="search" size={size} color={color} />;
          },
        }}
      />
    </Tabs>
  );
}
