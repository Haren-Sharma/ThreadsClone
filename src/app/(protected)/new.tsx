import { supabase } from "@/lib/supabase";
import { useAuth } from "@/providers/AuthContextProvider";
import { Redirect, router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NewPost() {
  const [text, setText] = useState("");
  const { user } = useAuth();

  const submit = async () => {
    console.log("On submit called");
    try {
      if (text === "" || !user) {
        throw new Error("Invalid post");
      }
      const { status, error } = await supabase.from("posts").insert({
        content: text,
        user_id: user.id,
      });
      if (error) throw error;
      console.log("🚀 ~ submit ~ status:", status)
      if (status === 201) router.back();
    } catch (err) {
      console.log(err);
      if (err instanceof Error) {
        Alert.alert(err.message);
      }
    }
  };
  return (
    <SafeAreaView className="flex-1 p-3">
      <KeyboardAvoidingView
        className="flex-1"
        behavior="padding"
        keyboardVerticalOffset={100}
      >
        <Text className="text-white text-lg">username</Text>
        <TextInput
          multiline
          value={text}
          onChangeText={setText}
          numberOfLines={4}
          placeholderTextColor="gray"
          placeholder="What is in your mind?"
          className="text-white text-lg"
        />
        <View className="mt-auto self-end">
          <Pressable
            onPress={submit}
            className="bg-white p-3 px-6 rounded-full"
          >
            <Text>Post</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
