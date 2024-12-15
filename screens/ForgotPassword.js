import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, SafeAreaView, Dimensions } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

const { width: SCREEN_WIDTH } = Dimensions.get('window');


const ForgotPassword = ({ navigation }) => {

//   async function handlePasswordReset() {
//     const { data, error } = await supabase.auth.resetPasswordForEmail(email);

//     if (error) {
//       Alert.alert(error.message);
//     } else {
//       Alert.alert('Check your email for the password reset link.');
//       navigation.navigate('/LoginScreen'); // Redirect to login screen after success
//     }
//   }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <AntDesign name='arrowleft' size={22}/>
      </TouchableOpacity>
      <Text style={styles.title}>Forgot Password?</Text>
      <Text style={styles.subtitle}>Enter your email or phone number below, and we'll send you a OTP to reset your password.</Text>
      <TextInput
        style={styles.input}
        placeholder="Email or phone number"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Otp')}>
        <Text style={styles.loginButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    width: SCREEN_WIDTH
  },
  backButton: {
    marginBottom: 10,
    marginTop: 60,
    backgroundColor: "#f3f3f3",
    padding: 15,
    width: 55,
    alignItems: "center",
    borderRadius: 100
  },
  backButtonText: {
    fontSize: 18,
  },
  title: {
    fontSize: 24,
    marginBottom: 5,
    fontFamily: "Bold"
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 20,
    fontFamily: "Regular",
    color: "#666"
  },
  input: {
    borderWidth: 2,
    borderColor: '#eee',
    borderRadius: 10,
    padding: 13,
    fontSize: 15,
    marginBottom: 20,
    fontFamily: "Regular",
    color: "#333"
  },
  loginButton: {
    backgroundColor: '#FF8C00',
    paddingVertical: 13,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Regular',
  },
});

export default ForgotPassword;
