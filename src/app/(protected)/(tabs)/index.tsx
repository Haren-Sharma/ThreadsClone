import PostListItem from '@/components/PostListItem';
import { posts } from '@/dummyData';
import { Link } from 'expo-router';
import { FlatList, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
   <FlatList
   data={posts}
   renderItem={({item})=><PostListItem post={item}/>}
   ListHeaderComponent={()=><Link href="/new" className='text-center text-2xl text-blue-500 p-5'>New Post</Link>}
   />
  );
}
