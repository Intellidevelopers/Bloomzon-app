import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import colors from './colors';
import { useNavigation } from '@react-navigation/native';


const Account = () => {
  const navigation = useNavigation();
 
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Account Info</Text>
        <TouchableOpacity style={{padding: 15}} onPress={() => navigation.goBack()}>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile Section */}
        <View style={styles.profileContainer}>
          <Image
            source={require('../assets/icons/profile.png')}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Vogue Avenue</Text>
          <TouchableOpacity style={styles.profileButton}>
            <Text style={styles.profileButtonText}>View Seller Profile</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.itemsContainer}>
          {/* Section: Listing Status */}
        <Text style={styles.sectionTitle}>Listing Status</Text>
        <TouchableOpacity style={styles.singleItemContainer}>
          <Text style={styles.itemText}>Holiday Settings</Text>
          <AntDesign name="right" size={18} color="#A1A1A1" />
        </TouchableOpacity>

        {/* Section: Services */}
        <Text style={styles.sectionTitle}>Services</Text>
        <TouchableOpacity style={styles.singleItemContainer}>
          <Text style={styles.itemText}>Manage Services</Text>
          <AntDesign name="right" size={18} color="#A1A1A1" />
        </TouchableOpacity>

        {/* Section: Payment Information */}
        <Text style={styles.sectionTitle}>Payment Information</Text>
        <View style={styles.sectionContainer}>
          <TouchableOpacity style={styles.itemContainer}>
            <Text style={styles.itemText}>Deposit Methods</Text>
            <AntDesign name="right" size={18} color="#A1A1A1" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemContainer}>
            <Text style={styles.itemText}>Charge Methods</Text>
            <AntDesign name="right" size={18} color="#A1A1A1" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.itContainer}>
            <Text style={styles.itemText}>Charge Methods for Advertising</Text>
            <AntDesign name="right" size={18} color="#A1A1A1" />
          </TouchableOpacity>
        </View>

        {/* Section: Business Information */}
        <Text style={styles.sectionTitle}>Business Information</Text>
        <TouchableOpacity style={styles.singleItemContainer}>
          <Text style={styles.itemText}>Business Address</Text>
          <AntDesign name="right" size={18} color="#A1A1A1" />
        </TouchableOpacity>

        {/* Section: Shipping & Return Information */}
        <Text style={styles.sectionTitle}>Shipping & Return Information</Text>
        <View style={styles.sectionContainer}>
        <TouchableOpacity style={styles.itemContainer}>
          <Text style={styles.itemText}>Return Information</Text>
          <AntDesign name="right" size={18} color="#A1A1A1" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemContainer}>
          <Text style={styles.itemText}>Shipping Settings</Text>
          <AntDesign name="right" size={18} color="#A1A1A1" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.itContainer}>
          <Text style={styles.itemText}>Easy Ship Settings</Text>
          <AntDesign name="right" size={18} color="#A1A1A1" />
        </TouchableOpacity>
        </View>

        {/* Section: Tax Information */}
        <Text style={styles.sectionTitle}>Tax Information</Text>
        <TouchableOpacity style={styles.singleItemContainer}>
          <Text style={styles.itemText}>Tax Details</Text>
          <AntDesign name="right" size={18} color="#A1A1A1" />
        </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
    borderBottomWidth: 10,
    borderBottomColor: '#eee',
    paddingBottom: 20
  },
  profileImage: {
    borderRadius: 40,
    resizeMode: 'contain',
    width: 110,
    height: 140,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  profileButton: {
    marginTop: 8,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  profileButtonText: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: '500',
  },
  sectionTitle: {
    marginVertical: 10,
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingHorizontal: 10,
    marginBottom: 10
  },
  itemText: {
    fontSize: 14,
    color: '#333',
  },
  backButton:{
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 30,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemsContainer:{
    paddingHorizontal: 10,
    marginBottom: 20

  },
  sectionContainer:{
    marginBottom: 15,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10
  },
  itContainer:{
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  singleItemContainer:{
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    borderColor: '#ddd',
    marginBottom: 15,
  }
});
