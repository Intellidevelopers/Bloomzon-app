import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image
} from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import colors from "../components/colors";

const OrderDetails = ({ navigation }) => {
  const [isOrderSummaryCollapsed, setOrderSummaryCollapsed] = useState(false);
  const [isShipToCollapsed, setShipToCollapsed] = useState(false);
  const [isOrderDetailsCollapsed, setOrderDetailsCollapsed] = useState(false);

  const toggleCollapse = (section) => {
    if (section === "OrderSummary") {
      setOrderSummaryCollapsed(!isOrderSummaryCollapsed);
    } else if (section === "ShipTo") {
      setShipToCollapsed(!isShipToCollapsed);
    } else if (section === "OrderDetails") {
      setOrderDetailsCollapsed(!isOrderDetailsCollapsed);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center",justifyContent: "space-between", marginTop: -30, padding: 5}}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <AntDesign name='arrowleft' size={22} />
        </TouchableOpacity>
        <Text style={{ fontSize: 18, fontFamily: "Semibold", top: 25 }}>Order Details</Text>
        <TouchableOpacity style={styles.backButton2}>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Order Summary Section */}
      <View style={styles.section}>
        <TouchableOpacity
          style={styles.sectionHeader}
          onPress={() => toggleCollapse("OrderSummary")}
        >
          <Text style={styles.sectionTitle}>Order Summary</Text>
          <AntDesign
            name={isOrderSummaryCollapsed ? "up" : "down"}
            size={18}
            color="black"
          />
        </TouchableOpacity>
        {!isOrderSummaryCollapsed && (
          <View style={styles.sectionContent}>
            <View style={styles.sectionRow}>
                <Text style={styles.text}>Order ID</Text>
                <Text style={styles.value}>#8341466</Text>
            </View>
            <View style={styles.sectionRow}>
                <Text style={styles.text}>Ship by</Text>
                <Text style={styles.value}>Tue, 16 Apr, 2024</Text>
            </View>
            <View style={styles.sectionRow}>
                <Text style={styles.text}>Deliver by</Text>
                <Text style={styles.value}>Mon, 22 Apr, 2024</Text>
            </View>
            <View style={styles.sectionRow}>
                <Text style={styles.text}>Shipping service</Text>
                <Text style={styles.value}>Standard</Text>
            </View>
          </View>
        )}
      </View>

      {/* Ship To Section */}
      <View style={styles.section}>
        <TouchableOpacity
          style={styles.sectionHeader}
          onPress={() => toggleCollapse("ShipTo")}
        >
          <Text style={styles.sectionTitle}>Ship To</Text>
          <AntDesign
            name={isShipToCollapsed ? "up" : "down"}
            size={18}
            color="black"
          />
        </TouchableOpacity>
        {!isShipToCollapsed && (
          <View style={styles.sectionContent}>
            <Text style={styles.name}>Imobighe Umeh</Text>
            <Text style={styles.text}>2305 PURDUE AVE APT 213</Text>
            <Text style={styles.text}>LOS ANGELES, CA, 90064-1919</Text>
            <Text style={styles.text}>United States</Text>
            <View style={styles.buttonsRow}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Refund Order</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Resend Label</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Contact Buyer</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>

      {/* Order Details Section */}
     <View style={styles.sectionStyle}>
     <View style={styles.section}>
        <TouchableOpacity
          style={styles.sectionHeader}
          onPress={() => toggleCollapse("OrderDetails")}
        >
          <Text style={styles.sectionTitle}>Order Details</Text>
          <AntDesign
            name={isOrderDetailsCollapsed ? "up" : "down"}
            size={18}
            color="black"
          />
        </TouchableOpacity>
        {!isOrderDetailsCollapsed && (
          <View style={styles.sectionContent}>
            <TouchableOpacity style={styles.orderItem} onPress={() => navigation.navigate('OrderDetails')}>
                <View style={styles.imageContainer}>
                    <Image source={require('../assets/products/lady.png')} style={styles.productImage} />
                </View>
                <View style={styles.orderTextContainer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.orderTitle}>Essential Casual Orange Basic Short Sleeve Tee</Text>
                    </View>
                    <Text style={styles.orderPrice}>$500</Text>
                    <Text style={styles.orderDetails}>Product ID: B089W2FQPBZ</Text>
                </View>
            </TouchableOpacity>

            <View style={styles.itemContent}>
            <View style={styles.sectionRow}>
                <Text style={styles.text}>Condition</Text>
                <Text style={styles.value}>New</Text>
            </View>
            <View style={styles.sectionRow}>
                <Text style={styles.text}>Order Item ID</Text>
                <Text style={styles.value}>572393000323</Text>
            </View>
            <View style={styles.sectionRow}>
                <Text style={styles.text}>Order Status</Text>
                <Text style={styles.label}>pending</Text>
            </View>
            <View style={styles.sectionRow}>
                <Text style={styles.text}>Quantity</Text>
                <Text style={styles.value}>2</Text>
            </View>
            <View style={styles.sectionRow}>
                <Text style={styles.text}>Unit Price</Text>
                <Text style={styles.value}>$500</Text>
            </View>
            </View>
            
          </View>
          
        )}
      </View>
     </View>

        <View style={styles.item2Content}>
            <View style={styles.sectionRow}>
                <Text style={styles.text}>Total:</Text>
                <Text style={styles.value}>$1000</Text>
            </View>
            <View style={styles.sectionRow}>
                <Text style={styles.text}>Tax:</Text>
                <Text style={styles.value}>$15</Text>
            </View>
        </View>

        <View style={styles.sectionRow}>
            <Text style={styles.text}>Grand Total:</Text>
            <Text style={styles.value}>$1015</Text>
        </View>

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.scheduleButton} onPress={() => navigation.navigate('SchedulePickup')}>
          <Text style={styles.scheduleButtonText}>Schedule Pickup</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Print Packing Slip</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={[styles.actionButtonText, styles.cancelButtonText]}>
            Cancel Order
          </Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
  );
};

export default OrderDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ccc',
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 10,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  sectionContent: {
    padding: 10
  },
  text: {
    fontSize: 14,
    marginBottom: 5,
    color: '#666'
  },
  buttonsRow: {
    flexDirection: "row",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#eee",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 6,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ddd'
  },
  buttonText: {
    fontSize: 12,
    color: "#000",
  },
  actionButtons: {
    marginTop: 'auto',
  },
  actionButton: {
    backgroundColor: colors.lightGray,
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd'
  },
  actionButtonText: {
    color: "#555",
    textAlign: "center",
    fontSize: 14,
  },
  cancelButton: {
    backgroundColor: "#dc3545",
  },
  cancelButtonText: {
    color: "#555",
  },
  backButton: {
    marginBottom: 10,
    marginTop: 60,
    backgroundColor: "#eee",
    padding: 16,
    width: 55,
    alignItems: "center",
    borderRadius: 100,
  },
  backButton2: {
    marginBottom: 10,
    marginTop: 60,
    padding: 16,
    width: 55,
    alignItems: "center",
    borderRadius: 100,
    left: -10
  },
  sectionRow:{
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
    paddingVertical: 5,
  },
  value: {
    fontSize: 14,
    color: "#000",
    fontWeight: "bold",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#000",
  },
  imageContainer:{
    width: 80,
    height: 85,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: "#f5f5f5",
    marginRight: 10

  },
  productImage:{
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    backgroundColor: "#ddd",
  },
  orderItem:{
    flexDirection: "row",
    marginBottom: 15,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 15,
  },
  orderTitle:{
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    width: '100%',
    lineHeight: 20,
    marginBottom: 5
  },
  orderPrice:{
    fontSize: 16,
    color: "#000",
    fontWeight: "900",
    width: '20%',
  },
  orderDetails:{
    fontSize: 14,
    color: "#666",
    marginTop: 5,
    width: '100%',
    lineHeight: 16
  },
  orderTextContainer:{
    flex: 1,
  },
  itemContent:{
    paddingHorizontal: 1
  },
  label:{
    fontSize: 14,
    color: "#1E90FF",
    backgroundColor: "#D9F3FF",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 8
  },
  sectionStyle:{
    borderBottomWidth: 8,
    borderBottomColor: "#eee",
    paddingBottom: 10,
    marginBottom: 20,
  },
  scheduleButton:{
    backgroundColor: colors.primary,
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  scheduleButtonText:{
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
  },
  item2Content:{
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 10,
    marginBottom: 20,
    justifyContent: "space-between",
  }
});
