import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, SafeAreaView, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Feather } from '@expo/vector-icons';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const UploadSuccess: React.FC = ({ navigation }) => {
  const [rememberMe, setRememberMe] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const toggleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <View style={styles.container}>
        <View style={{ alignItems: "flex-end", marginTop: -20 }}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Main')}>
          <Feather name='x' size={22} />
        </TouchableOpacity>
      </View>
        <Image source={require('../assets/icons/success.png')} style={styles.gif} />
       <Text style={styles.title}>Your product information has been submitted</Text>
        <Text style={styles.subtitle}>
            We have received your information and may follow up with you for further clarification within 2 business days.
        </Text>
        
      <View style={styles.btns}>
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Main')}>
        <Text style={styles.loginButtonText}>Back to Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddProduct')}>
        <Text style={styles.addButtonText}>Add a New Product</Text>
      </TouchableOpacity>
      </View>
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
    marginBottom: -150,
    marginTop: 60,
    backgroundColor: "#f3f3f3",
    padding: 20,
    width: 60,
    alignItems: "center",
    borderRadius: 100
  },
  title: {
    fontSize: 20,
    marginBottom: 5,
    fontFamily: "Semibold",
    textAlign: "center"
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 20,
    fontFamily: "Regular",
    color: "#666",
    textAlign: "center"

  },
  passwordContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  input: {
    borderWidth: 2,
    borderColor: '#eee',
    borderRadius: 10,
    padding: 13,
    fontSize: 15,
    fontFamily: "Regular",
    color: "#333",
  },
  eyeIcon: {
    position: 'absolute',
    right: 15,
    top: 15,
  },
  loginButton: {
    backgroundColor: '#FF8C00',
    paddingVertical: 13,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 50
  },
  addButton: {
    backgroundColor: '#fff',
    paddingVertical: 13,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "#FF8C00"
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Regular',
  },
  addButtonText: {
    color: '#FF8C00',
    fontSize: 16,
    fontFamily: 'Regular',
  },
  gif:{
    width: 100,
    height: 100,
    alignSelf: "center",
    marginTop: 200,
    marginBottom: 50
  },
  btns:{
    marginTop: 'auto'
  }
});

export default UploadSuccess;
