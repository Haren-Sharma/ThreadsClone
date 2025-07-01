import { View, Text } from "react-native";
import React from "react";
import { supabase } from "@/lib/supabase";

const ProfileScreen = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text
        onPress={() => {
          supabase.auth.signOut();
        }}
        className="text-2xl text-white"
      >
        Sign Out
      </Text>
    </View>
  );
};

export default ProfileScreen;
