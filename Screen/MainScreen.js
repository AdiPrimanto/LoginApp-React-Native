import React from 'react';
import 'react-native-gesture-handler';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MainScreen = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.buttonLogin}
        activeOpacity={0.5}
        onPress={() => {
          AsyncStorage.clear();
          navigation.replace('LoginScreen');
        }}>
        <Text style={styles.buttonTextLogin}> LOGOUT </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonLogin: {
    backgroundColor: '#7de24e',
    borderWidth: 0,
    color: '#fff',
    borderColor: '#7de24e',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    marginBottom: 35,
  },
  buttonTextLogin: {
    color: '#fff',
    paddingVertical: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MainScreen;
