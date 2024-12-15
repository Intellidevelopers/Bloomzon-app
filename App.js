import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View, ActivityIndicator, StyleSheet } from "react-native";
import * as Font from "expo-font";
import { useFonts } from "expo-font";

import Welcome from "./screens/Welcome"; // Import your Welcome screen
import StoreCountries from "./screens/StoreCountries";
import LoginScreen from "./screens/LoginScreen";
import BottomTabs from "./components/BottomTabs";
import TrialScreen from "./screens/TrialScreen";
import TrialHomeTabs from "./components/TrialHomeTabs";
import Register from "./screens/Register";
import ForgotPassword from "./screens/ForgotPassword";
import OTPVerification from "./screens/OTP";
import ResetPassword from "./screens/ResetPassword";
import Success from "./screens/Success";
import AddProduct from "./screens/AddProduct";
import VariationsScreen from "./screens/VariationsScreen";
import Offers from "./screens/Offers";
import Variations from "./screens/Variations";
import Gallery from "./screens/Gallery";
import ProductDescription from "./screens/ProductDescription";
import Reorder from "./screens/Reorder";
import Keywords from "./screens/Keywords";
import UploadSuccess from "./screens/UploadSuccess";
import Orders from "./screens/Orders";
import OrderDetails from "./screens/OrderDetails";
import SchedulePickup from "./screens/SchedulePickup";
import ScheduleSuccess from "./screens/ScheduleSuccess";
import Returns from "./screens/Returns";
import AllReturns from "./screens/AllReturns";
import ReturnDetails from "./screens/ReturnDetails";
import ContactBuyer from "./screens/ContactBuyer";
import RefundInformation from "./screens/RefundInformation";
import RefundSummary from "./screens/RefundSummary";
import refundSuccess from "./screens/refundSuccess";
import Inventory from "./screens/Inventory";
import WalletScreen from "./components/WalletScreen";
import Request from "./screens/Request";
import Communications from "./screens/Communications";
import Messages from "./screens/Messages";
import ChatScreen from "./screens/ChatScreen";
import SettingScreen from "./screens/SettingScreen";
import Update from "./screens/Update";
import PaymentMethod from "./screens/PaymentMethod";
import AddPaymentMethod from "./screens/AddPaymentMethod";
import CreditCard from "./screens/CreditCard";
import Summary from "./screens/Summary";
import SuccessComponent from "./screens/SuccessComponent";
import BusinessAnalytics from "./screens/BusinessAnalytics";
import Advertisement from "./screens/Advertisement";
import AccountHealth from "./screens/AccountHealth";
import Coupon from "./screens/Coupon";
import CustomerVoice from "./screens/CustomerVoice";
import ListingFeedback from "./screens/ListingFeedback";
import ListingDetails from "./screens/ListingDetails";
import CreateCoupon from "./screens/CreateCoupon";
import Coupons from "./screens/Coupons";
import CouponDetails from "./screens/CouponDetails";
import SubscribeSave from "./screens/SubscribeSave";
import SubscribeSuccess from "./screens/SubscribeSuccess";
import Subscribe from "./screens/Subscribe";
import Filter from "./screens/Filter";
import Account from "./screens/Trial/Profile";
import Pricing from "./screens/Pricing";
import Profile from "./screens/Profile";

const Stack = createNativeStackNavigator();

export default function App() {
  // Load fonts using useFonts hook
  const [fontsLoaded] = useFonts({
    "Regular": require("./assets/fonts/Poppins-Regular.ttf"), // Replace with your font files
    "Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Semibold": require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

  // Display a loading screen while fonts are loading
  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading Fonts...</Text>
      </View>
    );
  }

  // Fonts are loaded; render the app
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TrialHome">
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name="StoreCountries" component={StoreCountries} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={BottomTabs} options={{ headerShown: false }} />
        <Stack.Screen name="Trial" component={TrialScreen} options={{ headerShown: false }} />
        <Stack.Screen name="TrialHome" component={TrialHomeTabs} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
        <Stack.Screen name="Otp" component={OTPVerification} options={{ headerShown: false }} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} options={{ headerShown: false }} />
        <Stack.Screen name="Success" component={Success} options={{ headerShown: false }} />
        <Stack.Screen name="AddProduct" component={AddProduct} options={{ headerShown: false }} />
        <Stack.Screen name="VariationsScreen" component={VariationsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Offers" component={Offers} options={{ headerShown: false }} />
        <Stack.Screen name="Variations" component={Variations} options={{ headerShown: false }} />
        <Stack.Screen name="Gallery" component={Gallery} options={{ headerShown: false }} />
        <Stack.Screen name="ProductDescription" component={ProductDescription} options={{ headerShown: false }} />
        <Stack.Screen name="Reorder" component={Reorder} options={{ headerShown: false }} />
        <Stack.Screen name="Keywords" component={Keywords} options={{ headerShown: false }} />
        <Stack.Screen name="UploadSuccess" component={UploadSuccess} options={{ headerShown: false }} />
        <Stack.Screen name="Orders" component={Orders} options={{ headerShown: false }} />
        <Stack.Screen name="OrderDetails" component={OrderDetails} options={{ headerShown: false }} />
        <Stack.Screen name="SchedulePickup" component={SchedulePickup} options={{ headerShown: false }} />
        <Stack.Screen name="ScheduleSuccess" component={ScheduleSuccess} options={{ headerShown: false }} />
        <Stack.Screen name="Returns" component={Returns} options={{ headerShown: false }} />
        <Stack.Screen name="AllReturns" component={AllReturns} options={{ headerShown: false }} />
        <Stack.Screen name="ReturnDetails" component={ReturnDetails} options={{ headerShown: false }} />
        <Stack.Screen name="ContactBuyer" component={ContactBuyer} options={{ headerShown: false }} />
        <Stack.Screen name="RefundInformation" component={RefundInformation} options={{ headerShown: false }} />
        <Stack.Screen name="RefundSummary" component={RefundSummary} options={{ headerShown: false }} />
        <Stack.Screen name="RefundSuccess" component={refundSuccess} options={{ headerShown: false }} />
        <Stack.Screen name="Inventory" component={Inventory} options={{ headerShown: false }} />
        <Stack.Screen name="Payments" component={WalletScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Request" component={Request} options={{ headerShown: false }} />
        <Stack.Screen name="Communication" component={Communications} options={{ headerShown: false }} />
        <Stack.Screen name="Messages" component={Messages} options={{ headerShown: false }} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SettingScreen" component={SettingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Update" component={Update} options={{ headerShown: false }} />
        <Stack.Screen name="PaymentMethod" component={PaymentMethod} options={{ headerShown: false }} />
        <Stack.Screen name="AddPaymentMethod" component={AddPaymentMethod} options={{ headerShown: false }} />
        <Stack.Screen name="CreditCard" component={CreditCard} options={{ headerShown: false }} />
        <Stack.Screen name="Summary" component={Summary} options={{ headerShown: false }} />
        <Stack.Screen name="SuccessComponent" component={SuccessComponent} options={{ headerShown: false }} />
        <Stack.Screen name="Business" component={BusinessAnalytics} options={{ headerShown: false }} />
        <Stack.Screen name="Advertisement" component={Advertisement} options={{ headerShown: false }} />
        <Stack.Screen name="AccountHealth" component={AccountHealth} options={{ headerShown: false }} />
        <Stack.Screen name="Coupon" component={Coupon} options={{ headerShown: false }} />
        <Stack.Screen name="CustomerVoice" component={CustomerVoice} options={{ headerShown: false }} />
        <Stack.Screen name="ListingFeedback" component={ListingFeedback} options={{ headerShown: false }} />
        <Stack.Screen name="ListingDetails" component={ListingDetails} options={{ headerShown: false }} />
        <Stack.Screen name="CreateCoupon" component={CreateCoupon} options={{ headerShown: false }} />
        <Stack.Screen name="Coupons" component={Coupons} options={{ headerShown: false }} />
        <Stack.Screen name="CouponDetails" component={CouponDetails} options={{ headerShown: false }} />
        <Stack.Screen name="SubscribeSave" component={SubscribeSave} options={{ headerShown: false }} />
        <Stack.Screen name="SubscribeSuccess" component={SubscribeSuccess} options={{ headerShown: false }} />
        <Stack.Screen name="Subscribe" component={Subscribe} options={{ headerShown: false }} />
        <Stack.Screen name="Filter" component={Filter} options={{ headerShown: false }} />
        <Stack.Screen name="Account" component={Account} options={{ headerShown: false }} />
        <Stack.Screen name="Pricing" component={Pricing} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Styles for the loading screen
const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
