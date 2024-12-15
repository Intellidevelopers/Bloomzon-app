import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const TrialQuickActions = () => {
  const navigation = useNavigation();
  const actions = [
    { label: 'Bloomzon Product', icon: require('../assets/icons/p.png'), route: 'Main' },
    { label: 'Groceries & Beverages', icon: require('../assets/icons/basket.png'), route: 'Groceries' },
    { label: 'Foods & Restaurants', icon: require('../assets/icons/spoon.png'), route: 'Restaurant' },
    { label: 'Bloomzon Healthcare', icon: require('../assets/icons/medical.png'), route: 'BloomzonHealthcare' },
    { label: 'Used item', icon: require('../assets/icons/reload.png'), route: 'UsedItems' },
    { label: 'Automobile & Parts', icon: require('../assets/icons/car.png'), route: 'Automobile' },
    { label: 'Real Estate', icon: require('../assets/icons/house.png'), route: 'RealEstate' },
    { label: 'Bloomzon Reels', icon: require('../assets/icons/reel.png'), route: 'BloomzonReels' },
    { label: 'Bloomzon TV', icon: require('../assets/icons/tv.png'), route: 'BloomzonTv' },
    { label: 'Bloomzon Live', icon: require('../assets/icons/live.png'), route: 'BloomzonLive' },
    { label: 'Manufacturer', icon: require('../assets/icons/company.png'), route: 'Manufacturer' },
    { label: 'TrueView', icon: require('../assets/icons/eye.png'), route: 'Trueview' },
    { label: 'Logistics Services', icon: require('../assets/icons/logistic.png'), route: 'Logistic' },
    { label: 'Bloomzon Elite', icon: require('../assets/icons/badge.png'), route: 'BloomzonElite' },
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
    fontSize: 12,
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

export default TrialQuickActions;
