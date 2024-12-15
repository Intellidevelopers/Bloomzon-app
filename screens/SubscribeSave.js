import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const SubscribeSave = ({ navigation }) => {
  return (
    <View style={styles.container}>
       <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <AntDesign name='arrowleft' size={22} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Subscribe & Save</Text>
        <TouchableOpacity style={styles.backButton2} onPress={() => navigation.goBack()}>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={styles.contentContainer}>
        {/* Icon */}
        <View style={styles.iconContainer}>
          <Image
            source={require('../assets/icons/cart.png')} // Replace with your icon path
            style={styles.icon}
          />
        </View>

        {/* Title */}
        <Text style={styles.title}>Subscribe & Save</Text>

        {/* Description */}
        <Text style={styles.description}>
          Achieve repeat sales and increase visibility with highly engaged customers. A 10% discount
          generally results in up to a 1.5x increase in conversion rates.
        </Text>

        {/* Button */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SubscribeSuccess')}>
          <Text style={styles.buttonText}>Enroll to Subscribe & Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SubscribeSave;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
    gap: 10,
    justifyContent: "space-between",
    backgroundColor: '#fff',
    zIndex: 10,
  },
  headText: {
    fontSize: 18,
    fontFamily: "Semibold",
    color: '#000',
  },
  backButton: {
    backgroundColor: "#eee",
    padding: 15,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton2: {
    backgroundColor: "#fff",
    padding: 26,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 16,
    fontFamily: "Semibold",
    color: '#000',
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  iconContainer: {
    borderRadius: 50,
    padding: 20,
    marginBottom: 20,
    marginTop: -100
  },
  icon: {
    width: 70,
    height: 70,
    tintColor: '#FF8C00',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
    marginBottom: 30,
    lineHeight: 22,
  },
  button: {
    backgroundColor: '#FF8C00',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
