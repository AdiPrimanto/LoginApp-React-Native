/* eslint-disable no-alert */
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {createRef, useState} from 'react';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({navigation}) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleSubmit = () => {
    if (!userEmail) {
      alert('Please enter your email or username');
      return;
    } else if (!userPassword) {
      alert('Please enter your password');
      return;
    }

    // setLoading(true);

    // CURL CALL API LOGIN
    // if true login
    AsyncStorage.setItem('username', userEmail);
    AsyncStorage.setItem('password', userPassword);
    navigation.replace('MainScreen');
  };

  return (
    <View style={styles.mainBody}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{flex: 1, justifyContent: 'center'}}>
        <KeyboardAvoidingView enabled>
          <View>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.title}>Please Login ya</Text>
            </View>

            <View style={styles.sectionStyle}>
              <TextInput
                style={styles.textInput}
                onChangeText={value => setUserEmail(value)}
                selectionColor="red"
                placeholder="Enter Username"
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                keyboardType="email-address"
              />
            </View>
            <View style={styles.sectionStyle}>
              <TextInput
                style={styles.textInput}
                onChangeText={value => setUserPassword(value)}
                placeholder="Enter Password"
                placeholderTextColor="#808e9b"
                keyboardType="default"
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
            </View>

            <TouchableOpacity
              style={styles.buttonLogin}
              activeOpacity={0.5}
              onPress={handleSubmit}>
              <Text style={styles.buttonTextLogin}> LOGIN </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#e84393',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  sectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  textInput: {
    backgroundColor: '#fff',
    flex: 1,
    color: '#000',
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae5',
  },
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

export default LoginScreen;
