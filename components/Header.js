import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>My App Header</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#03a086ff',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center'
    },
    headerText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default Header;