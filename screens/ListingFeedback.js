import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const ListingFeedback = ({ navigation }) => {
  const data = [
    {
      id: '1',
      image: require('../assets/products/lady.png'), // Replace with actual image URL
      title: 'Essential Casual Orange Basic Short Sleeve Tee',
      price: '$500',
      sku: 'SKU: ORANGE-SHIRT-WOMEN',
      status: 'Very Poor',
      statusColor: '#FFE4E4',
    },
    {
      id: '2',
      image: require('../assets/products/lady.png'), // Replace with actual image URL
      title: 'Trendy Black Print Casual Graphic T-Shirt',
      price: '$600',
      sku: 'SKU: BLACK-SHIRT-WOMEN',
      status: 'Very Poor',
      statusColor: '#FFE4E4',
    },
    {
      id: '3',
      image: require('../assets/products/lady.png'), // Replace with actual image URL
      title: 'Essential White T-Shirt Perfect for Any Outfit',
      price: '$450',
      sku: 'SKU: WHITE-SHIRT-WOMEN',
      status: 'Very Poor',
      statusColor: '#FFE4E4',
    },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ListingDetails')}>
      <View style={styles.imageContainer}>
        <Image source={ item.image } style={styles.productImage} />
      </View>
      <View style={styles.productDetails}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
        <Text style={styles.productSKU}>{item.sku}</Text>
        <View style={[styles.statusBadge, { backgroundColor: item.statusColor }]}>
          <Text style={styles.statusText}>{item.status}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <AntDesign name="arrowleft" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Very Poor Listing</Text>
        <TouchableOpacity style={styles.backButton2} />
      </View>

      {/* Description */}
      <Text style={styles.title}>Customer voice on your listing</Text>
      <Text style={styles.subtitle}>
        Review these listings to identify issues and take necessary actions to enhance product quality and customer satisfaction.
      </Text>

      {/* List */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default ListingFeedback;

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
    marginRight: 8,
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 100,
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#000',
  },
  title:{
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
    lineHeight: 26,
  },
  backButton2: {
    marginRight: 8,
    padding: 15,
    borderRadius: 100,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 16,
  },
  card: {
    flexDirection: 'row',
    padding: 16,
    borderRadius: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    resizeMode: 'contain'
  },
  productDetails: {
    flex: 1,
    justifyContent: 'space-between',
  },
  productTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  productSKU: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },
  statusBadge: {
    paddingVertical: 4,
    paddingHorizontal: 15,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  statusText: {
    fontSize: 12,
    color: '#FF3737',
  },
  separator: {
    height: 16,
  },
  imageContainer:{
    width: 110,
    height: 120,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: "#f5f5f5",
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
