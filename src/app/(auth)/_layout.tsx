import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack screenOptions={{animation:'slide_from_left'}}>
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
