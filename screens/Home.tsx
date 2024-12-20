import CustomBarChart from '../components/CustomBarChart';
import { Ionicons, MaterialIcons, AntDesign, Feather } from '@expo/vector-icons';
import React, { useContext, useEffect, useRef, useState } from 'react';
import ScrollCards from '../components/ScrollCards';
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
import ChartHeader from '../components/ChartHeader';
import QuickActions from '../components/QuickAction';
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

  const handleMonthSelect = (month: React.SetStateAction<string>) => {
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
    const subscription = AppState.addEventListener('change', nextAppState => {
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


  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={drawerOpen ? closeDrawer : undefined}>
        <View style={styles.mainContent}>
          <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.closeButton}>
          <AntDesign name="arrowleft" size={20} color="#000" />
          </TouchableOpacity>
            <Text style={styles.title}>Bloomzon Product</Text>
            <TouchableOpacity style={styles.closeButton2}>
              </TouchableOpacity>
          </View>

          {loading ? (
            <ActivityIndicator size="large" color="#FF8C00" style={{ marginTop: 20 }} />
          ) : (
            <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
            {/* Scroll card component */}
            <ScrollCards navigation={undefined} />
            {/* Chart section */}
              <View style={styles.chartSection}>
                <Pressable onPress={closeDrawer}>
                  <View style={styles.chartHeader}>
                    <Text style={styles.chartTitle}>Income Statistics</Text>
                    <TouchableOpacity style={styles.dropdown} onPress={() => setDropdownVisible(true)}>
                      <Text style={{ marginRight: 5 }}>{selectedMonth}</Text>
                      <AntDesign name="down" size={16} color="#000" />
                    </TouchableOpacity>
                  </View>

                  <Modal visible={isDropdownVisible} transparent animationType="fade">
                    <TouchableOpacity style={styles.modalOverlay} onPress={() => setDropdownVisible(false)}>
                      <View style={styles.modalContent}>
                        {['6 months', '8 months', '10 months', '1 year'].map((month) => (
                          <TouchableOpacity key={month} style={styles.dropdownItem} onPress={() => handleMonthSelect(month)}>
                            <Text>{month}</Text>
                          </TouchableOpacity>
                        ))}
                      </View>
                    </TouchableOpacity>
                  </Modal>

                  <ChartHeader />
                </Pressable>
                <Pressable>
                <View style={styles.chartContainer}>
                    <View style={{flexDirection: "column", marginTop: -25}}>
                      <Text style={styles.chartPrice}>$10K</Text>
                      <Text style={styles.chartPrice}>$8K</Text>
                      <Text style={styles.chartPrice}>$6K</Text>
                      <Text style={styles.chartPrice}>$4K</Text>
                      <Text style={styles.chartPrice}>$2K</Text>
                      <Text style={styles.chartPrice}>$0</Text>
                    </View>
                    <CustomBarChart data={barChartData} />
                </View>
                </Pressable>
              </View>
              <View style={{backgroundColor: "#eee", height: 10, width: '110%'}}></View>

              {/* Quick actions tabs */}
              <QuickActions />
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
    color: '#000',
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
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
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
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginTop: 15
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
  closeButton2:{
    padding: 16,
    width: 55,
    alignItems: "center",
    borderRadius: 100,
    marginTop: 20,
    marginBottom: 15
  }
});

export default Home;
