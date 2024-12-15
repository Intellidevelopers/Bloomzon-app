import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Feather } from 'react-native-vector-icons'

const TrialScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton}>
        <Feather name='x' size={20}/>
      </TouchableOpacity>
      <Image source={require('../assets/images/trial.png')} style={styles.trialImage}/>
      <Text style={styles.heading}>Enjoy your first 30 days free!</Text>
      <Text style={styles.description}>
        Experience all the powerful features with no commitment. Start selling
        today and explore the full potential of our platform:
      </Text>
      <View style={styles.features}>
        <Text style={styles.feature}>✔ Can create their own category</Text>
        <Text style={styles.feature}>✔ Can post on all categories</Text>
        <Text style={styles.feature}>✔ 10 Product Showcase</Text>
        <Text style={styles.feature}>✔ Can create their own sales</Text>
      </View>
      <View style={styles.btns}>
      <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate('TrialHome')}>
        <Text style={styles.primaryButtonText}>Start 30-Day Free Trial</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.secondaryButton}>
        <Text style={styles.secondaryButtonText}>View All Plans</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default TrialScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  closeButton: {
    alignSelf: 'flex-end',
    backgroundColor: '#f4f4f4',
    borderRadius: 30,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  circleContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 4,
    borderColor: '#FF8C00',
    justifyContent: 'center',
    alignItems: 'center',
  },
  daysText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FF8C00',
  },
  freeTrialText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FF8C00',
    marginTop: 5,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  features: {
    marginBottom: 30,
  },
  feature: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
  primaryButton: {
    backgroundColor: '#FF8C00',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 15,

  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: '#FF8C00',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#FF8C00',
    fontSize: 16,
    fontWeight: '500',
  },
  trialImage:{
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  btns:{
    marginTop: 'auto',
    marginBottom: 30
  }
});
