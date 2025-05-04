import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '@/components/header.jsx' 
import EditProfileScreen from '@/app/pages/profile.jsx'

const MainPage = () => {
  return (
    <View style={styles.container}>
      <Header/>
      {/* Other content below */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEAFE', // matches the soft purple background in your screenshot
  },
});

export default MainPage;
