import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const SubscribeSuccess = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Subscribe'); // Redirect to 'Home' screen after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, [navigation]);
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
      <Image
            source={require('../assets/icons/success.png')} // Replace with your icon path
            style={styles.icon}
          />
      </View>

      <Text style={styles.title}>Enrolled Successfully</Text>

      <Text style={styles.description}>
        You were successfully enrolled to Subscribe & Save. Eligible products will be automatically 
        enrolled into Subscribe & Save in future.
      </Text>
    </View>
  );
};

export default SubscribeSuccess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  iconContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
  },
  icon: {
    width: 70,
    height: 70,
  },
});
