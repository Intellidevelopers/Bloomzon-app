import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import HorizontalCard from '../components/HorizontalCard';
import colors from '../components/colors';

const Subscribe = ({ navigation }) => {
  const products = [
    {
      id: 1,
      title: 'Essential Casual Orange Basic Short Sleeve Tee',
      price: '500',
      inventory: '568',
      subscription: '534',
      imageUri: require('../assets/products/lady.png'),
    },
    {
      id: 2,
      title: 'Trendy Black Print Casual Graphic T-Shirt',
      price: '600',
      inventory: '413',
      subscription: '456',
      imageUri: require('../assets/products/lady.png'),
    },
    {
      id: 3,
      title: 'Trendy Blue Everyday Sneakers',
      price: '450',
      inventory: '786',
      subscription: '789',
      imageUri: require('../assets/products/lady.png'),
    },
    {
      id: 3,
      title: 'Trendy Blue Everyday Sneakers',
      price: '450',
      inventory: '786',
      subscription: '789',
      imageUri: require('../assets/products/lady.png'),
    },
  ];

  // Render function for FlatList
  const renderProduct = ({ item }) => (
    <View style={styles.productCard}>
      <View style={styles.productImageContainer}>
        <Image source={item.imageUri} style={styles.productImage} />
        <View style={styles.discountLabel}>
          <Text style={styles.discountText}>10%</Text>
        </View>
      </View>

      <View style={styles.productDetails}>
        <View style={styles.productTitleContainer}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <TouchableOpacity>
          <Feather name="more-horizontal" size={20}/>
        </TouchableOpacity>
        </View>
        <Text style={styles.price}>${item.price}</Text>
        <Text style={styles.iventory}>Inventory: <Text style={styles.valueText}>{item.inventory}</Text></Text>
        <Text style={styles.subscription}>Subscriptions: <Text style={styles.valueText}>{item.subscription}</Text></Text>
      </View>
    </View>
  );

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


     <ScrollView>
     <HorizontalCard/>

      {/* Manage Products */}
      <View style={styles.manageContainer}>
        <Text style={styles.manageTitle}>Manage Products</Text>
        <View style={styles.searchContainer}>
          <TextInput style={styles.searchInput} placeholder="Search by product name..." />
          <TouchableOpacity style={styles.filterButton} onPress={() => navigation.navigate('Filter')}>
            <Ionicons name="options" size={20} color="white" /> 
          </TouchableOpacity>
        </View>
      </View>

      {/* Products List */}
      <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderProduct}
      contentContainerStyle={styles.productsList}
      showsVerticalScrollIndicator={false}
      style={{ flex: 1 }} // FlatList takes up all available space
      />
     </ScrollView>
    </View>
  );
};

export default Subscribe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
    gap: 10,
    justifyContent: "space-between",
    backgroundColor: '#fff',
    zIndex: 10,
    paddingHorizontal: 10
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
  overviewContainer: {
    flexDirection: 'row',
    height: 10
  },
  overviewCard: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 10,
    height: 70,
    width: 150,
    marginRight: 10
  },
  overviewLabel: {
    fontSize: 12,
    color: '#666',
  },
  overviewValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  manageContainer: {
    marginBottom: 10,
    marginTop: 20,
    paddingHorizontal: 10
  },
  manageTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
    borderRadius: 8,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15
  },
  filterButton: {
    backgroundColor: '#FF6C00',
    borderRadius: 8,
    padding: 15,
  },
  productsList: {
    paddingBottom: 20,
  },
  productCard: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  productImage: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
  },
  productDetails: {
    flex: 1,
    justifyContent: 'space-between',
  },
  productTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    width: '80%'
  },
  productText: {
    fontSize: 12,
    color: '#666',
  },
  productTitleContainer:{
    flexDirection: 'row',
    justifyContent:'space-between',
    marginBottom: 5,
    flex: 1,
    paddingHorizontal: 5
  },
  productImageContainer:{
    width: 90,
    height: 90,
    borderRadius: 8,
    marginBottom: 5,
    overflow: 'hidden',
    resizeMode: 'contain',
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    left: 5
  },
  iventory: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
    left: 5
  },
  subscription: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
    left: 5
  },
  valueText:{
    fontSize: 14,
    fontWeight: '500',
    color: '#888'
  },
  discount:{
    position: 'absolute',
    top: 20,
    left: 10,
    padding: 5,
    borderRadius: 5,
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold'
  },
  discountLabel: {
    position: 'absolute',
    top: 5,
    left: 5,
    backgroundColor: colors.primary,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
    zIndex: 10, // Ensures the label stays above the image
  },
  discountText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '500',
  },
  
});
