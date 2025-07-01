import { Post } from "@/types";
import { View, Text, Image, Pressable } from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons"; // Icons used
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export default function PostListItem({ post }: { post: Post }) {
  return (
    //gray border 800 with 70% opacity ,i.e 70% visible and 30% transparent
    <Pressable className="flex-row p-4 border-b border-gray-800/70"> 
      {/* Avatar */}
      <Image
        source={{ uri: post.user.avatar_url }}
        className="w-10 h-10 rounded-full mr-3"
      />

      {/* Post content */}
      <View className="flex-1">
        {/* Header */}
        <View className="flex-row items-center flex-wrap gap-x-1">
          <Text className="text-white font-semibold">{post.user.username}</Text>
          <Text className="text-gray-500">· {dayjs(post.created_at).fromNow()}</Text>
        </View>

        {/* Content */}
        <Text className="text-white text-base mt-1">{post.content}</Text>

        {/* Action Bar */}
        <View className="flex-row gap-x-6 mt-3 pr-8">
          <View className="flex-row items-center space-x-1">
            <AntDesign name="hearto" size={16} color="#d1d5db" />
            <Text className="text-gray-400 text-sm ml-2">0</Text>
          </View>

          <View className="flex-row items-center space-x-1">
            <Feather name="message-circle" size={16} color="#d1d5db" />
            <Text className="text-gray-400 text-sm ml-2">{0}</Text>
          </View>
          <View className="flex-row items-center space-x-1">
            <Feather name="repeat" size={16} color="#d1d5db" />
          </View>


          <View className="flex-row items-center space-x-1">
            <Feather name="send" size={16} color="#d1d5db" />
          </View>
        </View>
      </View>
    </Pressable>
  );
}
