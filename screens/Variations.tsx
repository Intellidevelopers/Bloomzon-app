import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView, Button, Dimensions, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';
import RNPickerSelect from 'react-native-picker-select';
import * as ImagePicker from 'expo-image-picker';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const Variations = ({ navigation }) => {
  const [variations, setVariations] = useState([
    { color: 'Brown', size: 'Small', sku: 'BAG-BROWN-SMALL', productId: '', price: '', condition: '', productIdType: '', image: '' },
    { color: 'Brown', size: 'Medium', sku: 'BAG-BROWN-MEDIUM', productId: '', price: '', condition: '', productIdType: '', image: '' },
    { color: 'Brown', size: 'Large', sku: 'BAG-BROWN-LARGE', productId: '', price: '', condition: '', productIdType: '', image: '' },
    { color: 'Black', size: 'Small', sku: 'BAG-BLACK-SMALL', productId: '', price: '', condition: '', productIdType: '', image: '' },
    { color: 'Black', size: 'Medium', sku: 'BAG-BLACK-MEDIUM', productId: '', price: '', condition: '', productIdType: '', image: '' },
    { color: 'Black', size: 'Large', sku: 'BAG-BLACK-LARGE', productId: '', price: '', condition: '', productIdType: '', image: '' },
  ]);
  

  const handleInputChange = (index: number, field: keyof typeof variations[0], value: string) => {
    const newVariations = [...variations];
    newVariations[index][field] = value;
    setVariations(newVariations);
  };

  const handleImagePick = async (index: number) => {
    // Ask for permission to access camera roll
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
  
    if (!permissionResult.granted) {
      alert('Permission to access camera roll is required!');
      return;
    }
  
    // Pick the image from the gallery
    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  
    if (!pickerResult.canceled && pickerResult.assets && pickerResult.assets.length > 0) {
      const newVariations = [...variations];
      newVariations[index].image = pickerResult.assets[0].uri; // Set image URI
      setVariations(newVariations);
    }
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={22} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Variations</Text>
        <View style={styles.emptyButton} />
      </View>

      <ScrollView horizontal style={styles.scrollView}>
        <View>
          <View style={styles.header}>
            <Text style={styles.headerText}>Color</Text>
            <Text style={styles.headerText2}>Size</Text>
            <Text style={styles.headerText3}>Seller SKU</Text>
            <Text style={styles.headerText4}>Product ID</Text>
            <Text style={styles.headerText5}>Product ID Type</Text>
            <Text style={styles.headerText6}>Images</Text>
            <Text style={styles.headerText7}>Condition</Text>
            <Text style={styles.headerText8}>Price</Text>
          </View>

          {variations.map((variation, index) => (
            <View key={index} style={styles.variationRow}>
              <Text style={styles.variationText}>{variation.color}</Text>
              <Text style={styles.variationText}>{variation.size}</Text>
              <TextInput
                style={styles.variationInput}
                value={variation.sku}
                onChangeText={(text) => handleInputChange(index, 'sku', text)}
              />
              <TextInput
                style={styles.variationInput}
                placeholder="Product ID"
                value={variation.productId}
                onChangeText={(text) => handleInputChange(index, 'productId', text)}
              />
              <View style={styles.pickerContainer}>
                <Text>{variation.productIdType || 'Select ID Type'}</Text>
                <RNPickerSelect
                  style={pickerSelectStyles}
                  onValueChange={(value) => handleInputChange(index, 'productIdType', value)}
                  items={[
                    { label: 'UPC', value: 'UPC' },
                    { label: 'EAN', value: 'EAN' },
                    { label: 'ISBN', value: 'ISBN' },
                  ]}
                />
              </View>
              {/* Display the image or Add Image button */}
              {variation.image ? (
                <Image source={{ uri: variation.image }} style={styles.uploadedImage} />
              ) : (
                <TouchableOpacity onPress={() => handleImagePick(index)} style={styles.imageButton}>
                  <Image source={require('../assets/icons/gallery.png')} style={styles.productIcon}/>
                  <Text style={{ color: '#00D1A3' }}>Add Image</Text>
                </TouchableOpacity>
              )}
              <View style={styles.pickerContainer}>
                <Text>{variation.condition || 'Select Condition'}</Text>
                <RNPickerSelect
                  style={pickerSelectStyles}
                  onValueChange={(value) => handleInputChange(index, 'condition', value)}
                  items={[
                    { label: 'New', value: 'New' },
                    { label: 'Used', value: 'Used' },
                    { label: 'Refurbished', value: 'Refurbished' },
                  ]}
                />
              </View>
              <TextInput
                style={styles.variationInput}
                placeholder="Price"
                value={variation.price}
                onChangeText={(text) => handleInputChange(index, 'price', text)}
              />
            </View>
          ))}
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.saveButton} onPress={() => navigation.navigate('Offers')}>
        <Text style={styles.saveButtonText}>Save & Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 4,  // Reduced padding for height
    paddingHorizontal: 8,
    borderRadius: 5,
    color: 'black',
  },
  inputAndroid: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 4,  // Reduced padding for height
    paddingHorizontal: 8,
    borderRadius: 5,
    color: 'black',
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    width: SCREEN_WIDTH,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -40,
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: 'Semibold',
    top: 25,
  },
  emptyButton: {
    width: 55,
    padding: 16,
  },
  backButton: {
    marginBottom: 10,
    marginTop: 60,
    backgroundColor: '#eee',
    padding: 15,
    width: 55,
    alignItems: 'center',
    borderRadius: 100,
  },
  header: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'flex-start',
    gap: 30
  },
  headerText: {
    fontSize: 16,
    fontFamily: 'Semibold',
    textAlign: 'left',
  },
  headerText2: {
    fontSize: 16,
    fontFamily: 'Semibold',
    textAlign: 'left',
    marginRight: 10
  },
  headerText3: {
    fontSize: 16,
    fontFamily: 'Semibold',
    textAlign: 'left',
    marginRight: 38
  },
  headerText4: {
    fontSize: 16,
    fontFamily: 'Semibold',
    textAlign: 'left',
    marginRight: 35
  },
  headerText5: {
    fontSize: 16,
    fontFamily: 'Semibold',
    textAlign: 'left',
    marginRight: 35
  },
  headerText6: {
    fontSize: 16,
    fontFamily: 'Semibold',
    textAlign: 'left',
    marginRight: 28
  },
  headerText7: {
    fontSize: 16,
    fontFamily: 'Semibold',
    textAlign: 'left',
    marginRight: 79
  },
  headerText8: {
    fontSize: 16,
    fontFamily: 'Semibold',
    textAlign: 'left',
  },
  scrollView: {
    flex: 1,
  },
  variationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    gap: 20
  },
  variationText: {
    fontSize: 16,
    flex: 1,
    textAlign: 'left',
  },
  variationInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 10,
    width: 130,
    paddingHorizontal: 10
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 170,
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  saveButton: {
    backgroundColor: '#FF8C00',
    paddingVertical: 18,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
  },
  uploadedImage: {
    width: 93,
    height: 60,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  imageButton:{
    flexDirection: "row",
    alignItems: "center"
  },
  productIcon:{

  }
});

export default Variations;
