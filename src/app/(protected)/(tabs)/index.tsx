import PostListItem from "@/components/PostListItem";
import { posts } from "@/dummyData";
import { supabase } from "@/lib/supabase";
import { Post } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Alert, FlatList, Text, View } from "react-native";

export default function HomeScreen() {
  const fetchPosts = async () => {
    const { data } = await supabase
      .from("posts")
      .select("*,user:profiles(*)")
      .throwOnError();

    return data;
  };
  const {
    data: posts,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-white text-2xl">{error.message}</Text>
      </View>
    );
  }

  console.log("Posts", JSON.stringify(posts, null, 2));
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <PostListItem post={item} />}
      ListHeaderComponent={() => (
        <Link href="/new" className="text-center text-2xl text-blue-500 p-5">
          New Post
        </Link>
      )}
    />
  );
}
