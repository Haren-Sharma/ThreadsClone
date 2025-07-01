import { useAuth } from "@/providers/AuthContextProvider";
import { Redirect, Stack } from "expo-router";

export default function AuthLayout() {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) {
    return <Redirect href="/(protected)/" />;
  }
  return (
    <Stack screenOptions={{ animation: "slide_from_left" }}>
      <Stack.Screen
        name="login"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="signup"
        options={{
          headerBackButtonDisplayMode: "minimal",
        }}
      />
    </Stack>
  );
}
