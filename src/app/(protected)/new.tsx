import { supabase } from "@/lib/supabase";
import { useAuth } from "@/providers/AuthContextProvider";
import { Redirect, router } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function NewPost() {
  const [text, setText] = useState("");
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const createPost = async (content: string, user_id: string) => {
    const { data } = await supabase
      .from("posts")
      .insert({ content, user_id })
      .select("*")
      .throwOnError();
    return data;
  };

  const { mutate, isPending } = useMutation({
    mutationFn: () => createPost(text, user!.id), // "I’m sure this value is not null or undefined, so don’t complain."
    onSuccess: (data) => {
      setText("");
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      /* This tells TanStack Query:"Hey, the data associated with the ['posts'] query key might be stale(outdated). Please refetch it next time it's used."*/
      router.back();
    },
  });

  if (isPending) {
    return (
      <View className="flex-1 bg-neutral-900 justify-center items-center">
        <ActivityIndicator size="large" color="#3419ff" />
      </View>
    );
  }

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
            onPress={() => mutate()}
            className="bg-white p-3 px-6 rounded-full"
          >
            <Text>Post</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
