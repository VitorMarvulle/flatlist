import React from 'react';
import { StyleSheet, View, FlatList, ScrollView, SafeAreaView, Image } from 'react-native';
import HorizontalCard from './components/HorizontalCard';
import VerticalCard from './components/VerticalCard';
import Header from './components/Header';

export default function App() {
  const horizontalData = [
    { id: '1', title: 'image 1', image: 'https://picsum.photos/200/200' },
    { id: '2', title: 'image 2', image: 'https://picsum.photos/201/201' },
    { id: '3', title: 'image 3', image: 'https://picsum.photos/202/202' },
    { id: '4', title: 'image 4', image: 'https://picsum.photos/203/203' },
  ];

  const verticalData = [
    { id: '5', title: 'image 1', image: 'https://picsum.photos/300/200' },
    { id: '6', title: 'image 2', image: 'https://picsum.photos/301/201' },
    { id: '7', title: 'image 3', image: 'https://picsum.photos/302/202' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.horizontalListContainer}>
          <FlatList
            horizontal
            data={horizontalData}
            renderItem={({ item }) => (
              <HorizontalCard item={item} />
            )}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.verticalListContainer}>
          {verticalData.map(item => (
            <VerticalCard
              key={item.id}
              title={item.title}
              image={item.image}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    padding: 15,
  },
  horizontalListContainer: {
    marginBottom: 20,
  },
  verticalListContainer: {
    paddingHorizontal: 5,
  },
});
