import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Link } from "expo-router";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [focused, setFocused] = useState<"email" | "password" | null>(null);

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }
    // Handle login logic here
    alert(`Logging in as ${email}`);
  };

  return (
    <View className="flex-1 bg-neutral-900">
      <TouchableWithoutFeedback
        onPress={() => {
          setFocused(null);
          Keyboard.dismiss();
        }}
        className="flex-1"
      >
        <View className="flex-1 justify-center px-6">
          <Text className="text-4xl font-extrabold text-center mb-10 text-white">
            Create an account
          </Text>

          {/* Email */}
          <View
            className={`border rounded-xl mb-4 ${
              focused === "email" ? "border-blue-500" : "border-gray-700"
            } bg-neutral-900`}
          >
            <TextInput
              placeholder="Email"
              placeholderTextColor="#aaa"
              value={email}
              onChangeText={setEmail}
              onFocus={() => setFocused("email")}
              onBlur={() => setFocused(null)}
              keyboardType="email-address"
              autoCapitalize="none"
              className="text-white px-4 py-3 text-base"
            />
          </View>

          {/* Password */}
          <View
            className={`border rounded-xl mb-6 ${
              focused === "password" ? "border-blue-500" : "border-gray-700"
            } bg-neutral-900`}
          >
            <TextInput
              placeholder="Password"
              placeholderTextColor="#aaa"
              value={password}
              onChangeText={setPassword}
              onFocus={() => setFocused("password")}
              onBlur={() => setFocused(null)}
              secureTextEntry
              className="text-white px-4 py-3 text-base"
            />
          </View>

          {/* Login Button */}
          <Pressable
            onPress={handleLogin}
            className="bg-white rounded-xl py-3 mb-5 shadow-md shadow-blue-500/20 active:opacity-80"
          >
            <Text className="text-black text-center text-base font-semibold">
              Login
            </Text>
          </Pressable>

          {/* Footer */}
          <View className="flex-row justify-center">
            <Text className="text-gray-400">Already have an account? </Text>
            <Link href="/login">
              <Text className="text-blue-400 font-semibold">Log In</Text>
            </Link>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
