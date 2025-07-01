import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  ActivityIndicator,
} from "react-native";
import { Link } from "expo-router";
import { supabase } from "@/lib/supabase";

export default function SignupScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [focused, setFocused] = useState<"email" | "password" | null>(null);
  const [loading, setLoading] = useState(false);

  async function signUpFunction() {
    if (!email || !password) {
      Alert.alert("Missing Fields", "Please enter both email and password!");
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      console.log("Sign-up successful:", data);

      if (!data.session) {
        Alert.alert(
          "Verify Your Email",
          "Please check your inbox to confirm your email before logging in."
        );
      } else {
        Alert.alert("Success", "Signed up and logged in successfully!");
        // Optionally navigate to the next screen here
      }
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.";
      console.error("Sign-up error:", message);
      Alert.alert("Sign-up Failed", message);
    } finally {
      setLoading(false);
    }
  }

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

          <Pressable
            onPress={signUpFunction}
            className="bg-white rounded-xl py-3 mb-5 shadow-md shadow-blue-500/20 active:opacity-80 flex-row justify-center gap-2"
          >
            {loading && <ActivityIndicator />}
            <Text className="text-black text-center text-base font-semibold">
              Sign Up
            </Text>
          </Pressable>

          {/* Footer */}
          <View className="flex-row justify-center">
            <Text className="text-gray-400">Already have an account? </Text>
            <Link href="/login">
              <Text className="text-blue-400 font-semibold">Sign In</Text>
            </Link>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
