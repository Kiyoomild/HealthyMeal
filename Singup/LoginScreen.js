import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const Login = () => {
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    setError('');
    // call API or navigate
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.container}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {/* ----------------- Background Decor ----------------- */}
          <View style={styles.topCircle} />
          <Image source={require('./imgs/dog1.png')} style={styles.logo1} />
          <Text style={styles.title}>Healthy meal</Text>
          <Text style={styles.subtitle}>Sign in</Text>
          <Text style={styles.account}>Do you have account?</Text>
          <TouchableOpacity onPress={() => console.log('Sign Up')} style={styles.signUpTouchable}>
            <Text style={styles.Sign_Up}>Sign Up</Text>
          </TouchableOpacity>

          {/* ------------------ Login Form ------------------ */}
          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email / Username"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            <TouchableOpacity onPress={() => console.log('Forgot Password')}>
              <Text style={styles.Foget_password}>Forgot Password?</Text>
            </TouchableOpacity>

            {error ? <Text style={styles.errorText}>{error}</Text> : null}

            <TouchableOpacity style={styles.LoginButton} onPress={() => navigation.navigate("Age")}>
              <Text style={styles.Login}>Login</Text>
            </TouchableOpacity>

            <Text style={styles.or}>or login with</Text>
            <View style={styles.socialContainer}>
              <Image source={require('./imgs/tiktok.png')} style={styles.logo2} />
              <Image source={require('./imgs/Facebook.png')} style={styles.logo2} />
              <Image source={require('./imgs/Google.png')} style={styles.logo2} />
              <Image source={require('./imgs/Apple_black.png')} style={styles.logo2} />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  topCircle: {
    position: 'absolute',
    top: height * 0.09,
    width: width * 0.5,
    height: width * 0.5,
    borderRadius: width * 0.25,
    backgroundColor: '#FFC757',
    zIndex: -1,
  },
  logo1: {
    marginTop: height * 0.07,
    width: width * 0.6,
    height: width * 0.6,
    resizeMode: 'contain',
  },
  title: {
    fontSize: width * 0.08,
    fontFamily: 'MM-Bold',
    color: 'black',
    marginTop: height * 0.03,
  },
  subtitle: {
    fontSize: width * 0.06,
    fontFamily: 'MM-Medium',
    color: 'black',
    marginBottom: 20,
  },
  formContainer: {
    alignItems: 'center',
    marginTop: height * 0.05,
  },
  input: {
    width: width * 0.7,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  Foget_password: {
    color: '#616161',
    marginBottom: 10,
    alignSelf: 'flex-end',
    paddingRight: 30,
    fontFamily: 'MM-Regular',
    textDecorationLine: 'underline',
    fontSize: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    fontFamily: 'MM-Regular',
  },
  LoginButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 12,
    paddingHorizontal: width * 0.25,
    borderRadius: 15,
    marginBottom: 15,
  },
  Login: {
    fontSize: width * 0.04,
    fontFamily: 'MM-Medium',
    color: 'black',
    textAlign: 'center',
  },
  or: {
    fontSize: width * 0.04,
    fontFamily: 'MM-Medium',
    marginVertical: 10,
    color: 'black',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '70%',
    marginBottom: 30,
  },
  logo2: {
    width: width * 0.08,
    height: width * 0.08,
    resizeMode: 'contain',
  },
  account: {
    fontSize: width * 0.04,
    fontFamily: 'MM-Regular',
    color: 'black',
    marginTop: 30,
  },
  signUpTouchable: {
    padding: 5,
  },
  Sign_Up: {
    fontSize: width * 0.04,
    fontFamily: 'MM-Regular',
    color: '#616161',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
