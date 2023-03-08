import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Handle sign in logic here
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <Text style={styles.subTitle}>Enter Your Detail</Text>
      <TextInput
        style={styles.input}
        placeholder="User Name"
        onChangeText={setEmail}
        value={email}
        autoCapitalize="none"
        keyboardType="email-address"
        
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <View> 
          <Text style={styles.forgotText}>Forgot your passwor?</Text>
      </View>
      <View style={styles.signUp}>
      <Text style={styles.accountText}>Don't have an Account?</Text>
      <Text style={styles.signupText}>Sign Up</Text>
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
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 24,
    width: 98,
    height: 40,
    color: "#000000",
    marginBottom: 5
  },
  subTitle: {
    width: 108,
    height: 19,
    fontSize: 14,
    color: "#7C7D7E",
    fontWeight: "bold",
    marginBottom: 25
  },
 
  input: {
    width: 307,
    height: 50,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 28,
    marginBottom: 16,
    color: "#F2F2F2"
  },
  button: {
    backgroundColor: '#3BB0EC',
    borderRadius: 8,
    padding: 12,
    height: 50,
    width: 307,
    borderRadius: 28
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: "center"
  },
  signUp: {
    flexDirection: "row",
  },
  forgotText: {
    fontWeight: "bold",
    color: "#444444",
    textAlign: "center",
    width: 144,
    height: 19,
    margin: 15

  },
  accountText: {
    height: 19,
    width: 147,
    textAlign: "center",
    color: "#7C7D7E",
  },
  signupText: {
    width: 52,
    height: 19,
    color: "#5DA7A3",
    fontWeight: "bold"
  }
});

export default SignInPage;
