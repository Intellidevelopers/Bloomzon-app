import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import colors from '../components/colors';

const Pricing = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Pricing</Text>
        <TouchableOpacity style={{padding: 30}} >
        </TouchableOpacity>
      </View>

      <ScrollView>
        {/* Subheading */}
        <Text style={styles.subheading}>
          Pricing on Bloomzon
        </Text>

        {/* Card 1 */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Referral Fees/ Sell on Bloomzon Fees</Text>
          <Text style={styles.cardSubtitle}>Product category based fees</Text>
          <Text style={styles.cardDescription}>
            Starts at 2% varies based on product category
          </Text>
          <TouchableOpacity>
            <Text style={styles.viewDetails}>View Details →</Text>
          </TouchableOpacity>
        </View>

        {/* Card 2 */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Closing Fees</Text>
          <Text style={styles.cardSubtitle}>
            Dependent on the price of the sold item
          </Text>
          <Text style={styles.cardDescription}>
            Starting at $1, with variations based on the product price range and fulfillment channel
          </Text>
          <TouchableOpacity>
            <Text style={styles.viewDetails}>View Details →</Text>
          </TouchableOpacity>
        </View>

        {/* Card 3 */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Weight Handling Fees</Text>
          <Text style={styles.cardSubtitle}>Fees for Shipping/Delivery</Text>
          <Text style={styles.cardDescription}>
            Starting at $1 per item shipped, with variations based on item volume and shipping distance
          </Text>
          <TouchableOpacity>
            <Text style={styles.viewDetails}>View Details →</Text>
          </TouchableOpacity>
        </View>

        {/* Card 4 */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Other Fees</Text>
          <Text style={styles.cardSubtitle}>Based on Program/Service</Text>
          <Text style={styles.cardDescription}>
            Applicable only to certain fulfillment channels and/or optional programs or services that you subscribe to
          </Text>
          <TouchableOpacity>
            <Text style={styles.viewDetails}>View Details →</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Pricing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 40
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  backButton:{
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 30,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center'
  },
  subheading: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    marginVertical: 10,
    paddingHorizontal: 16,
    lineHeight: 22,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 16,
    marginVertical: 10,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 6,
  },
  cardDescription: {
    fontSize: 12,
    color: '#666',
    lineHeight: 18,
    marginBottom: 6,
  },
  viewDetails: {
    fontSize: 14,
    color: colors.secondary,
    fontWeight: '500',
  },
});
