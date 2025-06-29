import PostListItem from '@/components/PostListItem';
import { posts } from '@/dummyData';
import { FlatList, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
   <FlatList
   data={posts}
   renderItem={({item})=><PostListItem post={item}/>}
   />
  );
}
