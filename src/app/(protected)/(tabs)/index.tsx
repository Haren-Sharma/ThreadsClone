import PostListItem from "@/components/PostListItem";
import { posts } from "@/dummyData";
import { supabase } from "@/lib/supabase";
import { Post } from "@/types";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, FlatList, Text, View } from "react-native";

export default function HomeScreen() {
  const [posts,setPosts]=useState<Post[]>([]);
  useEffect(()=>{
    const fetchPosts=async()=>{
      const {data,error}= await supabase.from('posts').select('*,user:profiles(*)');
      if(error) Alert.alert(error.message)
      setPosts(data as Post[]);  
    }
    fetchPosts()
  },[])
  console.log("Posts",JSON.stringify(posts,null,2));
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
