import { FlatList, Text, View } from "react-native";

export default function Trending({ posts }) {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
        <Text className="text-3xl text-white">{item.id}</Text>
      )}
      horizontal
    ></FlatList>
  );
}
