import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { AntDesign, Entypo, FontAwesome, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';

const PaymentMethod = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <AntDesign name='arrowleft' size={24}/>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Payment Methods</Text>
        <TouchableOpacity style={styles.backButton2}>
        </TouchableOpacity>
      </View>

      {/* Payout Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Payout</Text>
        <TouchableOpacity style={styles.paymentRow}>
          <Image
            source={require('../assets/icons/bank.png')}
            style={styles.icon}
          />
          <View style={styles.paymentDetails}>
            <Text style={styles.paymentTitle}>Bank Account - 8789</Text>
            <Text style={styles.paymentSubtitle}>Earnings paid out weekly</Text>
          </View>
          <AntDesign name='right' size={16}/>
        </TouchableOpacity>
        <Text style={styles.infoText}>
          A week runs from Monday at 4:00 AM to the following Monday at 3:59 AM. All orders during that time period will
          count towards that week’s pay period.{' '}
          <Text style={styles.learnMore}>Learn more</Text>
        </Text>
      </View>

      {/* Linked Payment Methods Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Linked Payment Methods</Text>
        <TouchableOpacity style={styles.paymentRow}>
          <Image
            source={require('../assets/icons/bank.png')}
            style={styles.icon}
          />
          <View style={styles.paymentDetails}>
            <Text style={styles.paymentTitle}>Bank Account - 8789</Text>
          </View>
          <AntDesign name='right' size={16}/>
        </TouchableOpacity>
      </View>

      {/* Add Payment Method Button */}
      <TouchableOpacity style={styles.addPaymentButton} onPress={() => navigation.navigate('AddPaymentMethod')}>
        <Text style={styles.addPaymentText}>Add Payment Method</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentMethod;

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
  backArrow: {
    fontSize: 20,
    color: '#000',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    marginBottom: 8,
  },
  paymentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  icon: {
    width: 45,
    height: 45,
    marginRight: 12,
  },
  paymentDetails: {
    flex: 1,
  },
  paymentTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  paymentSubtitle: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  chevron: {
    fontSize: 20,
    color: '#666',
  },
  infoText: {
    fontSize: 14,
    color: '#555',
    marginTop: 8,
  },
  learnMore: {
    color: '#000',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  addPaymentButton: {
    paddingVertical: 14,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc'
  },
  addPaymentText: {
    fontSize: 14,
    color: '#000',
  },
  backButton2:{
    marginRight: 8,
    padding: 15,
    borderRadius: 100,
  }
});
