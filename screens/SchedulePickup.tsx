import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Collapsible from 'react-native-collapsible';
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const SchedulePickup: React.FC = ({ navigation }) => {
  const [isCollapsedShipFrom, setIsCollapsedShipFrom] = useState(true);
  const [isCollapsedShipTo, setIsCollapsedShipTo] = useState(true);
  const [isCollapsedOrderDetails, setIsCollapsedOrderDetails] = useState(false);
  const [isCollapsedPackageDetails, setIsCollapsedPackageDetails] = useState(true);
  const [isCollapsedPickupslot, setIsCollapsedPickupslot] = useState(true);

  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const toggleCollapse = (section: string) => {
    if (section === 'shipFrom') {
      setIsCollapsedShipFrom(!isCollapsedShipFrom);
    } else if (section === 'shipTo') {
      setIsCollapsedShipTo(!isCollapsedShipTo);
    } else if (section === 'orderDetails') {
      setIsCollapsedOrderDetails(!isCollapsedOrderDetails);
    } else if (section === 'packageDetails') {
      setIsCollapsedPackageDetails(!isCollapsedPackageDetails);
    } else if (section === 'pickupslot') {
        setIsCollapsedPickupslot(!isCollapsedPickupslot);
    }
  };


  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirmDate = (date: Date) => {
    setSelectedDate(date.toDateString());
    hideDatePicker();
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirmTime = (time: Date) => {
    setSelectedTime(time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    hideTimePicker();
  };

  return (
    <GestureHandlerRootView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.closeButton}>
          <AntDesign name="arrowleft" size={20} color="#000" />
          </TouchableOpacity>
            <Text style={styles.title}>Schedule Pickup</Text>
                <TouchableOpacity style={styles.menuButton}>
                </TouchableOpacity>
          </View>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
        <View style={styles.cardContainer}>
        <TouchableOpacity
        style={styles.sectionHeader}
        onPress={() => toggleCollapse('shipFrom')}
      >
        <Text style={styles.sectionHeaderText}>Ship from</Text>
        <AntDesign name='down' size={18}/>
      </TouchableOpacity>
      <Collapsible collapsed={isCollapsedShipFrom}>
        <View style={styles.sectionContent}>
          <Text style={styles.subtitle}>MIT Warehouse</Text>
          <Text style={styles.addressText}>2491 PURDUE AVE APT 213</Text>
          <Text style={styles.addressText}>LOS ANGELES, CA 90064-5119</Text>
          <Text style={styles.addressText}>United States</Text>
        </View>
      </Collapsible>
        </View>

      {/* Ship To Section */}
      <View style={styles.cardContainer}>
      <TouchableOpacity
        style={styles.sectionHeader}
        onPress={() => toggleCollapse('shipTo')}
      >
        <Text style={styles.sectionHeaderText}>Ship to</Text>
        <AntDesign name='down' size={16}/>
      </TouchableOpacity>
      <Collapsible collapsed={isCollapsedShipTo}>
        <View style={styles.sectionContent}>
          {/* Add shipping to details here */}
          <Text style={styles.addressText}>Add Ship to details here</Text>
        </View>
      </Collapsible>
      </View>

      {/* Order Details Section */}
      <View style={styles.cardContainer}>
      <TouchableOpacity
        style={styles.sectionHeader}
        onPress={() => toggleCollapse('orderDetails')}
      >
        <Text style={styles.sectionHeaderText}>Order details</Text>
        <AntDesign name='down' size={16}/>
      </TouchableOpacity>
      <Collapsible collapsed={isCollapsedOrderDetails}>
        <View style={styles.sectionContent}>
          <View style={styles.productContainer}>
            <View style={styles.productImageContainer}>
            <Image
              source={require('../assets/products/lady.png')} // Replace with actual image URL
              style={styles.productImage}
            />
            </View>
            <View style={styles.productDetails}>
              <Text style={styles.productName}>Essential Casual Orange Basic Short Sleeve Tee</Text>
              <Text style={styles.productPrice}>$500</Text>
              <Text style={styles.productId}>Product ID: <Text style={{fontWeight: "600"}}>B09W2FQPBZ</Text></Text>
            </View>
          </View>
          <View style={styles.orderInfo}>
           <View style={styles.details}>
            <Text style={styles.orderInfoText}>Order Item ID</Text>
            <Text style={styles.value}>5758396003325</Text>
           </View>
            <View style={styles.details}>
                <Text style={styles.orderInfoText}>Quantity</Text>
                <Text style={styles.value}>2</Text>
            </View>
           <View style={styles.details}>
            <Text style={styles.orderInfoText}>Unit Price</Text>
            <Text style={styles.value}>$500</Text>
           </View>
          </View>
        </View>
      </Collapsible>
      </View>

      {/* Package Details Section */}
      <View style={styles.cardContainer}>
      <TouchableOpacity
        style={styles.sectionHeader}
        onPress={() => toggleCollapse('packageDetails')}
      >
        <Text style={styles.sectionHeaderText}>Package details</Text>
        <AntDesign name='down' size={16}/>
      </TouchableOpacity>
      <Collapsible collapsed={isCollapsedPackageDetails}>
        <View style={styles.sectionContent}>
          {/* Add package details here */}
          <Text style={styles.packageLabel}>Weight (g)</Text>
          <TextInput placeholder='Enter Weight' style={styles.input}/>

          <Text style={styles.packageLabel}>Dimension (cm)</Text>
          <View style={styles.inputContainer}>
          <TextInput placeholder='Length' style={styles.dimensionInput}/>
          <TextInput placeholder='Width' style={styles.dimensionInput}/>
          <TextInput placeholder='Height' style={styles.dimensionInput}/>
          </View>
          <Text style={styles.packageLabel}>Package ID</Text>
          <TextInput placeholder='543-5674765787-6477566' style={styles.input}/>
        </View>
      </Collapsible>
      </View>

      {/* Pickup Slot */}
      <View style={styles.cardContainer}>
      <TouchableOpacity
        style={styles.sectionHeader}
        onPress={() => toggleCollapse('pickupslot')}
      >
        <Text style={styles.sectionHeaderText}>Pickup Slot</Text>
        <AntDesign name='down' size={16}/>
      </TouchableOpacity>
      <Collapsible collapsed={isCollapsedPickupslot}>
        <View style={styles.sectionContent}>
          {/* Add package details here */}
          <Text style={styles.packageLabel}>Pickup day</Text>
          <TouchableOpacity style={styles.date} onPress={showDatePicker}>
            <Text style={styles.dateText}>{selectedDate || 'Select a date'}</Text>
            <AntDesign name='calendar' size={16} />
          </TouchableOpacity>

          <Text style={styles.packageLabel}>Pickup time</Text>
          <TouchableOpacity style={styles.date}  onPress={showTimePicker}>
            <Text style={styles.dateText}>{selectedTime || 'Select a time'}</Text>
            <AntDesign name='down' size={16} />
          </TouchableOpacity>
        </View>
      </Collapsible>
      </View>
        </View>
      <View style={{flexDirection: "row", alignItems: "center", gap: 5, paddingHorizontal: 10, marginBottom: 30}}>
        <AntDesign name='exclamationcircleo' color={'#aaa'} size={16}/>
      <Text style={{color: "#666"}}>Please verify the above details and dispatch all the items in a single package</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.text}>Bloomzon Pickup Fee</Text>
        <Text style={styles.price}>$50</Text>
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('ScheduleSuccess')}>
          <Text style={styles.loginButtonText}>Schedule Pickup</Text>
        </TouchableOpacity>
        </ScrollView>

        {/* Date and Time Picker Modals */}
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirmDate}
        onCancel={hideDatePicker}
      />
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleConfirmTime}
        onCancel={hideTimePicker}
      />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
    backgroundColor: "#f5f5f5",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 10
  },
  sectionHeaderText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  sectionContent: {
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  addressText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomWidth: 1,
    paddingBottom: 20,
    borderBottomColor: "#ddd"
  },
  productImage: {
    width: 90,
    height: 90,
    borderRadius: 8,
    resizeMode: 'contain'
  },
  productDetails: {
    marginLeft: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    width: 230,
  },
  productPrice: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
    marginTop: 10

  },
  productId: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  orderInfo: {
    marginTop: 10,
  },
  orderInfoText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 20,
    padding: 5
  },
  closeButton: {
    marginBottom: 10,
    backgroundColor: "#eee",
    padding: 16,
    width: 55,
    alignItems: "center",
    borderRadius: 100,
    marginTop: 20
  },
  menuButton: {
    marginBottom: 10,
    padding: 16,
    width: 55,
    alignItems: "center",
    borderRadius: 100,
    marginTop: 20
  },
  title:{
    fontSize: 18,
    fontWeight: "700"
  },
  subtitle:{
    fontWeight: "700",
  },
  cardContainer:{
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#ddd",
    marginBottom: 20,
  },
  details:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  value:{
    fontWeight: "700",
    color: "#000"
  },
  input:{
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    borderRadius: 10,
    marginBottom: 20
  },
  inputContainer:{
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },
  dimensionInput:{
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    borderRadius: 10,
    width: 90
  },
  packageLabel:{
    fontWeight: "500",
    fontSize: 16,
    marginBottom: 5
  },
  date:{
    borderWidth: 1,
    borderColor: "#ddd",
    flexDirection: "row",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10
  },
  dateText:{
    color: "#666"
  },
  loginButton: {
    backgroundColor: "#FF8C00",
    paddingVertical: 13,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
    width: "95%",
    alignSelf: "center",
    marginTop: 'auto'
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Regular",
  },
  content:{
    padding: 10
  },
  text:{
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5
  },
  price:{
    fontSize: 16,
    fontWeight: "bold",
    color: "#000"
  },
  footer:{
    backgroundColor: "#f5f5f5",
    padding: 20,
    marginBottom: 20,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center"
  },
  productImageContainer:{
    width: 90,
    height: 90,
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 10,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default SchedulePickup;
