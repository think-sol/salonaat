import React from 'react';
import Salonaat from './components/salonaat';
import {
  SafeAreaView,
  StyleSheet
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Salonaat />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'black'
  }
});

export default App;
