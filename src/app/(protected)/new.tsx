import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NewPost() {
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
          numberOfLines={4}
          placeholderTextColor="gray"
          placeholder="What is in your mind?"
          className="text-white text-lg"
        />
        <View className="mt-auto self-end">
          <Pressable className="bg-white p-3 px-6 rounded-full">
            <Text>Post</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
