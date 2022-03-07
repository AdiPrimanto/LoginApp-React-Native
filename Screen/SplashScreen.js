import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import {StyleSheet, ActivityIndicator, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({navigation}) => {
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      AsyncStorage.getItem('username').then(value => {
        if (value === null) {
          navigation.replace('LoginScreen');
        } else {
          navigation.replace('MainScreen');
        }
      });
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ActivityIndicator
        animating={animating}
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e84393',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
    color: '#fff',
  },
});

export default SplashScreen;
