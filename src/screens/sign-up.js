import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SignInPage from './sign-in';

const SignupPage = navigation => {
  const nav = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Handle sign in logic here
    if (email === '' || password === '') {
      // Show error message
      alert('Please enter all the details');
    } else {
      console.log(`Email: ${email}, Password: ${password}`);
      nav.navigate(MyTabs);
    }
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.subTitle}>Enter Your Details</Text>
      <TextInput
        style={styles.input}
        placeholder="User Name"
        onChangeText={setEmail}
        value={email}
        autoCapitalize="none"
        keyboardType="email-address"
        color={'#000000'}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
        color={'#000000'}
      />

      <TextInput
        style={styles.input}
        placeholder="re-enter password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
        color={'#000000'}
      />
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.signUp}>
        <Text style={styles.accountText}>Already have an Account?</Text>
        <TouchableOpacity
          onPress={() => {
            nav.navigate(SignInPage);
          }}>
          <Text style={styles.signupText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
    width: 98,
    height: 40,
    color: '#000000',
    marginBottom: 5,
  },
  subTitle: {
    width: 120,
    height: 19,
    fontSize: 14,
    color: '#7C7D7E',
    fontWeight: 'bold',
    marginBottom: 25,
  },

  input: {
    width: 307,
    height: 50,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 28,
    marginBottom: 16,
    color: '#F2F2F2',
  },
  button: {
    backgroundColor: '#3BB0EC',
    borderRadius: 8,
    padding: 12,
    height: 50,
    width: 307,
    borderRadius: 28,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  signUp: {
    flexDirection: 'row',
  },
  forgotText: {
    fontWeight: 'bold',
    color: '#444444',
    textAlign: 'center',
    width: 144,
    height: 19,
    margin: 15,
  },
  accountText: {
    height: 19,
    width: 177,
    textAlign: 'center',
    color: '#7C7D7E',
    marginTop: 10,
  },
  signupText: {
    width: 52,
    height: 19,
    color: '#5DA7A3',
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default SignupPage;
