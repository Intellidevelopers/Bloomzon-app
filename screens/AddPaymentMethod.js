import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { AntDesign, Entypo, FontAwesome, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import colors from '../components/colors';

const AddPaymentMethod = ({ navigation }) => {
  const [selectedMethod, setSelectedMethod] = useState(''); // State for the selected payment method

  const paymentMethods = [
    {
      id: 'credit_card',
      label: 'Credit/Debit Card',
      icon: require('../assets/icons/mastercard.png'), // Placeholder Mastercard icon
    },
    {
      id: 'bank_account',
      label: 'Bank Account',
      icon: require('../assets/icons/bank.png'), // Placeholder Bank icon
    },
    {
      id: 'paypal',
      label: 'PayPal',
      icon: require('../assets/icons/paypal.png'), // Placeholder PayPal icon
    },
  ];

  const handleContinue = () => {
    navigation.navigate('CreditCard')
  }
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <AntDesign name='arrowleft' size={24}/>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add Payment Method</Text>
        <TouchableOpacity style={styles.backButton2}>
        </TouchableOpacity>
      </View>

      {/* Choose Payment Method Section */}
      <Text style={styles.sectionTitle}>Choose Payment Method</Text>
      <View style={styles.optionsContainer}>
        {paymentMethods.map((method) => (
          <TouchableOpacity
            key={method.id}
            style={[
              styles.option,
              selectedMethod === method.id && styles.selectedOption,
            ]}
            onPress={() => setSelectedMethod(method.id)}
          >
            <View style={styles.optionLeft}>
              <View
                style={[
                  styles.radioCircle,
                  selectedMethod === method.id && styles.radioSelected,
                ]}
              />
              <Text style={styles.optionText}>{method.label}</Text>
            </View>
            <Image source={method.icon} style={styles.icon} />
          </TouchableOpacity>
        ))}
      </View>

      {/* Continue Button */}
      <TouchableOpacity
        style={[styles.continueButton, !selectedMethod && styles.disabledButton]}
        disabled={!selectedMethod} // Disable the button if no option is selected
        onPress={handleContinue}
      >
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddPaymentMethod;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    justifyContent:'space-between',
    marginTop: 30
  },
  backButton: {
    marginRight: 8,
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 100,
  },
  backButton2:{
    marginRight: 8,
    padding: 15,
    borderRadius: 100,
  },
  backArrow: {
    fontSize: 20,
    color: '#000',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 12,
  },
  optionsContainer: {
    marginBottom: 24,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  selectedOption: {
    borderColor: colors.primary, // Highlight border for selected option
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioCircle: {
    width: 24,
    height: 24,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#666',
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioSelected: {
    borderColor: colors.primary, // Orange color for selected radio button
    backgroundColor: colors.primary,
  },
  optionText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  icon: {
    width: 35,
    height: 35,
    resizeMode: 'contain'
  },
  continueButton: {
    paddingVertical: 15,
    backgroundColor: colors.primary,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 20
  },
  disabledButton: {
    backgroundColor: '#ccc', // Gray color for disabled button
  },
  continueButtonText: {
    fontSize: 16,
    color: '#fff',
  },
});
