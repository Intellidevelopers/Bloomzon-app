import { Ionicons, MaterialIcons, AntDesign, Feather } from '@expo/vector-icons';
import React, { useEffect, useRef, useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Modal,
  Pressable,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Animated,
  Dimensions,
  Image,
  AppState,
  ActivityIndicator,
} from 'react-native';
import TrialQuickActions from '../../components/TrialQuickActions';
import { useNavigation } from '@react-navigation/native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const Home = () => {
  const navigation = useNavigation();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState('6 months');
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const screenWidth = Dimensions.get('window').width;
  const drawerWidth = screenWidth * 0.75;
  const drawerTranslation = useRef(new Animated.Value(-drawerWidth)).current;

  const openDrawer = () => {
    setDrawerOpen(true);
    Animated.timing(drawerTranslation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeDrawer = () => {
    Animated.timing(drawerTranslation, {
      toValue: -drawerWidth,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setDrawerOpen(false));
  };

  const toggleDrawer = () => {
    if (drawerOpen) {
      closeDrawer();
    } else {
      openDrawer();
    }
  };

  const handleMonthSelect = (month) => {
    setSelectedMonth(month);
    setDropdownVisible(false);
  };

  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  const refreshHome = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      closeDrawer();
    }, 2000);
  };

  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        console.log('App has come to the foreground!');
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
      console.log('AppState', appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  const barChartData = [
    { label: 'Jan', value: 4500 },
    { label: 'Feb', value: 8000 },
    { label: 'Mar', value: 6000 },
    { label: 'Apr', value: 3000 },
    { label: 'May', value: 7000 },
    { label: 'Jun', value: 1000 },
  ];

  const navigationView = () => (
    <View style={styles.navigationContainer}>
      <View style={styles.sidebar}>
        <TouchableOpacity onPress={closeDrawer} style={styles.closeButton}>
          <Feather name="x" size={20} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>
          <Text style={{ color: '#FF8C00' }}>Bloomzon</Text> Seller
        </Text>
      </View>

      <View style={styles.userInfo}>
        <TouchableOpacity
          style={styles.profile}
          onPress={() => navigation.navigate('Account')}
        >
          <Image
            source={require('../../assets/flags/usa.png')}
            style={styles.userImage}
          />
          <Text style={styles.userName}>Adeagbo Josiah</Text>
          <AntDesign name="down" size={16} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('SettingScreen')}>
          <View style={styles.settingsIcon}>
            <Ionicons name="settings" size={30} color="#555" />
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {/* Drawer items */}
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={refreshHome}
          onPressIn={closeDrawer}
        >
          <Text style={[styles.drawerItemText]}>Home</Text>
        </TouchableOpacity>
        {[
          'Pricing',
          'Orders',
          'Payments',
          'Communications',
          'Help',
          'Seller Support',
          'Send us App Feedback',
          'Terms & Conditions',
          'Reset Password',
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.drawerItem}
            onPress={() => navigation.navigate(`${item.replace(/\s/g, '')}`)}
          >
            <Text style={styles.drawerItemText}>{item}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => navigation.navigate('Welcome')}
        >
          <Text style={[styles.drawerItemText, { color: 'red' }]}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.drawerContainer,
          { transform: [{ translateX: drawerTranslation }] },
        ]}
      >
        {navigationView()}
      </Animated.View>
      <TouchableWithoutFeedback onPress={drawerOpen ? closeDrawer : undefined}>
        <View style={styles.mainContent}>
          <View style={styles.header}>
            <TouchableOpacity onPress={toggleDrawer} style={styles.closeButton}>
              <Ionicons name="menu-outline" size={20} color="#000" />
            </TouchableOpacity>
            <Text style={styles.title}>
              <Text style={{ color: '#FF8C00' }}>Bloomzon</Text> Seller
            </Text>
            <TouchableOpacity style={styles.closeButton2}></TouchableOpacity>
          </View>

          {loading ? (
            <ActivityIndicator
              size="large"
              color="#FF8C00"
              style={{ marginTop: 20 }}
            />
          ) : (
            <ScrollView
              showsVerticalScrollIndicator={false}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
            >
              {/* Quick actions tabs */}
              <View style={styles.username}>
                <Text
                  style={{ color: '#000', fontSize: 16, fontWeight: '500' }}
                >
                  Welcome,{' '}
                </Text>
                <Text
                  style={{ color: '#FF8C00', fontSize: 16, fontWeight: '500' }}
                >
                  Adeagbo!
                </Text>
              </View>
              <TrialQuickActions navigation={undefined} />
            </ScrollView>
          )}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '100%'
  },
  drawerContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: '75%',
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: { width: 3, height: 3 },
    zIndex: 1000,
  },
  mainContent: {
    flex: 1,
  },
 
  backButton: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#41ccc7',
  },

  chartSection: {
    marginVertical: 10,
  },
  chartHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  chartDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  chartData: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  chartAmount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  chartSubtitle: {
    fontSize: 12,
    color: '#888',
  },
  chartContainer: {
    height: 250,
    alignSelf: "center",
    width: "95%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    gap: 15
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 8,
    width: '80%',
  },
  dropdownItem: {
    paddingVertical: 10,
    borderBottomColor: '#DDD',
    borderBottomWidth: 1,
  },
  navigationContainer: {
    flex: 1,
  },
  sidebar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    left: -10,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
    marginTop: 10
  },
  closeButton: {
    marginBottom: 10,
    backgroundColor: "#eee",
    padding: 15,
    alignItems: "center",
    borderRadius: 100,
    marginTop: 20
  },
  closeButton2: {
    marginBottom: 10,
    padding: 16,
    width: 55,
    alignItems: "center",
    borderRadius: 100,
    marginTop: 20
  },
  userInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    left: -10,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  },
  drawerItem: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  },
  drawerItemText: {
    fontSize: 16,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 15,
    marginRight: 10,
  },
  userName: {
    fontSize: 16,
  },
  settingsIcon: {
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: "#eee",
    marginTop: 15,
    paddingTop: 20,
    paddingHorizontal: 10,
    marginBottom: 15
  },
  chartPrice:{
    marginBottom: 13,
    color: "#666",
    textAlign: "right"
  },
  profile:{
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    flexShrink: 1
  },
  username:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15
  }
});

export default Home;
