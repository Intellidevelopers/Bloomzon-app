import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const QuickActions = () => {
  const navigation = useNavigation();
  const actions = [
    { label: 'Add Product', icon: require('../assets/icons/add.png'), route: 'AddProduct' },
    { label: 'Manage Orders', icon: require('../assets/icons/manage.png'), route: 'Orders' },
    { label: 'Manage Returns', icon: require('../assets/icons/return.png'), route: 'Returns' },
    { label: 'Manage Inventory', icon: require('../assets/icons/shop.png'), route: 'Inventory' },
    { label: 'Payments', icon: require('../assets/icons/card.png'), route: 'Wallet' },
    { label: 'Communications', icon: require('../assets/icons/chat.png'), notificationCount: 2, route: 'Communication' },
    { label: 'Business Analysis', icon: require('../assets/icons/stat.png'), route: 'Business' },
    { label: 'Advertisement', icon: require('../assets/icons/stat.png'), route: 'Advertisement' },
    { label: 'Account Health', icon: require('../assets/icons/health.png'), route: 'AccountHealth' },
    { label: 'Coupons', icon: require('../assets/icons/coupon.png'), route: 'Coupon' },
    { label: 'Customer Voice', icon: require('../assets/icons/voice.png'), route: 'CustomerVoice' },
    { label: 'Subscribe & Save', icon: require('../assets/icons/save.png'), route: 'SubscribeSave' },
    { label: 'Feedback', icon: require('../assets/icons/feedback.png'), route: 'SubscribeSave' },
    { label: 'Customer Reviews', icon: require('../assets/icons/bubble.png'), route: 'SubscribeSave' },
  ];

  return (
    <View style={styles.container}>
      {actions.map((action, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.tabsContainer,
            action.alignLeft ? styles.alignLeft : null, // Apply left alignment for specific action
          ]}
          onPress={() => navigation.navigate(action.route)}
        >
          <View style={styles.tabContent}>
            <View style={{ marginBottom: 10 }}>
              <Image source={action.icon} style={styles.icon} />
            </View>
            <Text style={styles.label}>{action.label}</Text>
            <Text style={styles.tabText}>{action.description}</Text>
            {action.notificationCount ? (
              <View style={styles.notification}>
                <Text style={styles.notificationText}>{action.notificationCount}</Text>
              </View>
            ) : null}
          </View>

        </TouchableOpacity>
      ))}
      <TouchableOpacity
          style={[
            styles.tabsContainer2
          ]}
        >
          <View style={styles.tabContent}>
            <View style={{ marginBottom: 10 }}>
              <Image source={require('../assets/icons/growth.png')} style={styles.icon} />
            </View>
            <Text style={styles.label}>Logistics Services</Text>
           
          </View>
          
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  tabsContainer: {
    borderWidth: 2,
    padding: 30,
    borderRadius: 10,
    borderColor: '#ddd',
    width: width / 2 - 20,
    marginVertical: 10,
  },
  tabsContainer2: {
    borderWidth: 2,
    padding: 30,
    borderRadius: 10,
    borderColor: '#ddd',
    width: width / 2 - 20,
    marginVertical: 10,
    alignSelf: 'flex-start',
    marginRight: 170
  },
  alignLeft: {
    alignSelf: 'flex-start', // Aligns the specific tab to the left
  },
  tabContent: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 30,
    height: 30,
  },
  tabText: {
    fontFamily: 'Regular',
    color: '#333',
    textAlign: 'center',
    width: 150,
    fontSize: 13,
  },
  label: {
    fontFamily: 'Semibold',
    color: '#333',
    textAlign: 'center',
    width: 150,
    fontSize: 13,
  },
  notification: {
    position: 'absolute',
    top: 5,
    right: 10,
    backgroundColor: 'red',
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationText: {
    color: '#fff',
    fontSize: 12,
  },
});

export default QuickActions;
