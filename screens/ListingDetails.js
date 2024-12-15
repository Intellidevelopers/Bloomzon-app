import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const ListingDetails = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <AntDesign name="arrowleft" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Listing Details</Text>
        <TouchableOpacity style={styles.backButton2} />
      </View>

      {/* Details Card */}
      <View style={styles.card}>
        <View style={styles.row}>
        <View style={styles.imageContainer}>
        <Image source={require('../assets/products/lady.png')} style={styles.productImage} />
      </View>
          <View style={styles.productDetails}>
            <Text style={styles.productTitle}>
              Essential Casual Orange Basic Short Sleeve Tee
            </Text>
            <Text style={styles.productPrice}>$500</Text>
            <Text style={styles.productSKU}>SKU: ORANGE-SHIRT-WOMEN</Text>
          </View>
        </View>

        <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Fulfilled by</Text>
          <Text style={styles.infoValue}>Seller</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Negative Feedback rate</Text>
          <Text style={styles.infoValue}>39.10%</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Negative Feedback Orders</Text>
          <Text style={styles.infoValue}>3</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Last updated</Text>
          <Text style={styles.infoValue}>20/07/2024</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Health</Text>
          <View style={[styles.healthBadge, { backgroundColor: '#FFEBEE' }]}>
            <Text style={styles.healthText}>Very Poor</Text>
          </View>
        </View>
        </View>

        <TouchableOpacity style={styles.actionButton}>
            <AntDesign name='eyeo' size={18}/>
            <Text style={styles.actionButtonText}>See Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ListingDetails;

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
    justifyContent: 'space-between',
    marginTop: 20,
  },
  backButton: {
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 100,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
  },
  backButton2: {
    padding: 15,
    borderRadius: 100,
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 20
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    resizeMode: 'contain'
  },
  productDetails: {
    flex: 1,
  },
  productTitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,

  },
  productSKU: {
    fontSize: 12,
    color: '#666',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  infoLabel: {
    fontSize: 14,
    color: '#666',
  },
  infoValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
  },
  healthBadge: {
    paddingVertical: 4,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  healthText: {
    fontSize: 12,
    color: '#D32F2F',
  },
  actionButton: {
    marginTop: 16,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    flexDirection: 'row',
    gap: 6
  },
  actionButtonText: {
    fontSize: 14,
    color: '#000',
  },
  imageContainer:{
    width: 100,
    height: 100,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: "#f5f5f5",
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContainer:{
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 10,
  }
});
