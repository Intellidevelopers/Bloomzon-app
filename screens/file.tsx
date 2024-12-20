import CustomBarChart from '@/components/CustomBarChart';
import { Ionicons, MaterialIcons, AntDesign, FontAwesome6, Entypo, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { router, useNavigation } from 'expo-router';
import drawer from 'expo-router/drawer';
import React, { useEffect, useRef, useState } from 'react';
import {
  Button,
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
} from 'react-native';


const { width: SCREEN_WIDTH } = Dimensions.get('window');

const index = () => {
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

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
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

  const navigationView = () => (
    <SafeAreaView style={styles.navigationContainer}>
     <View style={styles.sidebar}>
        <TouchableOpacity style={{ }} onPress={closeDrawer}>
          <Ionicons name="menu-outline" size={20} color="#000" style={{
            backgroundColor: "#eee",
            padding: 15,
            borderRadius: 100,
          }} />
        </TouchableOpacity>
        <Text style={styles.title}><Text style={{ color: "#FF8C00" }}>Bloomzon</Text> Seller</Text>
      </View>
              
            <View style={{
              flexDirection: "row", 
              alignItems: "center", 
              borderBottomWidth: 1, 
              borderBottomColor: "#ddd", 
              marginBottom: 20, 
              left: -20,
              width: 250,
              }}>
              <TouchableOpacity style={styles.drawerItem}>
                <Image source={require('../assets/flags/usa.png')} style={{
                  width: 40,
                  height: 40,
                  marginRight: 10,
                  marginLeft: 5,
                }}/>
                 <Text style={{
                  marginRight: 10,
                  fontFamily: "Semibold"
                  }}>Imobighe</Text>
                  <AntDesign name="down" size={16} color="#000" />
              </TouchableOpacity>


              <TouchableOpacity>
                <View style={{flexDirection: "row", alignItems: "center", marginLeft: 30, marginTop: -5}}>
                  <Ionicons name="settings" size={30} color="#555" />
                </View>
              </TouchableOpacity>
            </View>
      <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={true} refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
        <TouchableOpacity style={{borderBottomWidth: 1, borderBottomColor: "#ddd", marginBottom: 18}}>
          <Text style={{ marginBottom: 20, fontFamily: "Regular", fontSize: 16}}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{borderBottomWidth: 1, borderBottomColor: "#ddd", marginBottom: 18}}>
          <Text style={{ marginBottom: 20, fontFamily: "Regular", fontSize: 16}}>Inventory</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{borderBottomWidth: 1, borderBottomColor: "#ddd", marginBottom: 18}}>
          <Text style={{ marginBottom: 20, fontFamily: "Regular", fontSize: 16}}>Pricing</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{borderBottomWidth: 1, borderBottomColor: "#ddd", marginBottom: 18}}>
          <Text style={{ marginBottom: 20, fontFamily: "Regular", fontSize: 16}}>Orders</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{borderBottomWidth: 1, borderBottomColor: "#ddd", marginBottom: 18}}>
          <Text style={{ marginBottom: 20, fontFamily: "Regular", fontSize: 16}}>Payments</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{borderBottomWidth: 1, borderBottomColor: "#ddd", marginBottom: 18}}>
          <Text style={{ marginBottom: 20, fontFamily: "Regular", fontSize: 16}}>Communications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{borderBottomWidth: 1, borderBottomColor: "#ddd", marginBottom: 18}}>
          <Text style={{ marginBottom: 20, fontFamily: "Regular", fontSize: 16}}>Help</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{borderBottomWidth: 1, borderBottomColor: "#ddd", marginBottom: 18}}>
          <Text style={{ marginBottom: 20, fontFamily: "Regular", fontSize: 16}}>Seller Support</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{borderBottomWidth: 1, borderBottomColor: "#ddd", marginBottom: 18}}>
          <Text style={{ marginBottom: 20, fontFamily: "Regular", fontSize: 16}}>Send us App Feedback</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{borderBottomWidth: 1, borderBottomColor: "#ddd", marginBottom: 18}}>
          <Text style={{ marginBottom: 20, fontFamily: "Regular", fontSize: 16}}>Terms & Conditions</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{borderBottomWidth: 1, borderBottomColor: "#ddd", marginBottom: 18}} onPress={() => navigation.navigate('/')}>
          <Text style={{ marginBottom: 20, fontFamily: "Regular", fontSize: 16}}>Reset Password</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('/Welcome')}>
          <Text style={{ fontFamily: "Regular", fontSize: 16, color: "red"}}>Logout</Text>
        </TouchableOpacity>

        {/* Add more menu items as needed */}
      </ScrollView>
    </SafeAreaView>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.drawerContainer, { transform: [{ translateX: drawerTranslation }] }]}>
        {navigationView()}
      </Animated.View>
      <TouchableWithoutFeedback onPress={drawerOpen ? closeDrawer : undefined}>
      <View style={styles.mainContentInner}>
                <View style={styles.header}>
                  
        
                <TouchableOpacity style={styles.backButton} onPress={toggleDrawer}>
                  <Ionicons name="menu-outline" size={20} color="#000"/>
                </TouchableOpacity>
                <Text style={styles.title}><Text style={{ color: "#FF8C00" }}>Bloomzon</Text> Seller</Text>
                <TouchableOpacity style={styles.backButton}>
                  <MaterialIcons name="filter-center-focus" size={25} color="#000" />
                </TouchableOpacity>
                </View>


                <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={true} refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
                  <ScrollView horizontal style={styles.cardContainer} showsHorizontalScrollIndicator={false} scrollEnabled={true}>
                  <Pressable onPress={() => navigation.navigate('/Orders')}>
                    <View style={styles.card}>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Text style={styles.cardTitle}>Total Orders</Text>
                    <MaterialIcons name='keyboard-arrow-right' size={20} color={'#41ccc7'}/>
                    </View>
                      <Text style={styles.cardValue}>1</Text>
                    </View>
                  </Pressable>
        
                  <Pressable>
                    <View style={styles.card}>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Text style={styles.cardTitle}>Total Sales</Text>
                    <MaterialIcons name='keyboard-arrow-right' size={20} color={'#41ccc7'}/>
                    </View>
                    <Text style={styles.cardValue}>$1,627</Text>
                    </View>
                  </Pressable>

                  <Pressable>
                    <View style={styles.card}>
                      <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Text style={styles.cardTitle}>Total Unit</Text>
                    <MaterialIcons name='keyboard-arrow-right' size={20} color={'#41ccc7'}/>
                    </View>
                    <Text style={styles.cardValue}>43</Text>
                    </View>
                  </Pressable>

                  <Pressable>
                    <View style={styles.card}>
                      <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Text style={styles.cardTitle}>Current Balance</Text>
                    <MaterialIcons name='keyboard-arrow-right' size={20} color={'#41ccc7'}/>
                    </View>
                      <Text style={styles.cardValue}>$810</Text>
                    </View>
                  </Pressable>
                  <Pressable>
                    <View style={styles.card}>
                      <Pressable>
                      <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Text style={styles.cardTitle}>Next Payment</Text>
                    <MaterialIcons name='keyboard-arrow-right' size={20} color={'#41ccc7'}/>
                    </View>
                    </Pressable>
                      <Text style={styles.cardValue}>15 July, 2024</Text>
                    </View>
                  </Pressable>
                  <Pressable>
                    <View style={styles.card6}>
                      <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Text style={styles.cardTitle}>Customer Feedbacks</Text>
                    <MaterialIcons name='keyboard-arrow-right' size={20} color={'#41ccc7'}/>
                    </View>
                      <View style={{flexDirection: "row"}}>
                      <MaterialIcons name='star' size={20} color={'#FF8C00'}/>
                      <MaterialIcons name='star' size={20} color={'#FF8C00'}/>
                      <MaterialIcons name='star' size={20} color={'#FF8C00'}/>
                      <MaterialIcons name='star' size={20} color={'#FF8C00'}/>
                      <MaterialIcons name='star' size={20} color={'#ddd'}/>
                      </View>
                    </View>
                  </Pressable>
                  <Pressable>
                    <View style={styles.card7}>
                      <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Text style={styles.cardTitle}>Seller Feedbacks</Text>
                    <MaterialIcons name='keyboard-arrow-right' size={20} color={'#41ccc7'}/>
                    </View>
                      <Text style={styles.cardValue}>213 reviews</Text>
                    </View>
                  </Pressable>
                  </ScrollView>
                  <View style={styles.chartContainer}>
                    

                    
                  <View style={styles.chartContainer}>
                    <Pressable onPress={closeDrawer}>
                      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                        <Text style={styles.chartTitle}>Income Statistics</Text>
                        <TouchableOpacity style={styles.dropdown} onPress={() => setDropdownVisible(true)}>
                          <Text style={{marginRight: 5}}>{selectedMonth}</Text>
                          <AntDesign name="down" size={16} color="#000" />
                        </TouchableOpacity>
                      </View>

                      <Modal visible={isDropdownVisible} transparent animationType="slide">
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

                      <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 30 }}>
                        <View style={{ flexDirection: "column" }}>
                          <Text style={{
                            fontSize: 20,
                            fontWeight: '700',
                          }}>$450.75</Text>
                          <Text style={{
                            fontSize: 13,
                            fontFamily: 'Regular',
                            marginBottom: 10,
                            color: "#666"
                          }}>Last 30 days</Text>
                        </View>

                        <View style={{ flexDirection: "column" }}>
                          <Text style={{
                            fontSize: 20,
                            fontWeight: '700',
                          }}>18% <Ionicons name='arrow-up' size={20} color={'limegreen'}/></Text>
                          <Text style={{
                            fontSize: 13,
                            fontFamily: 'Regular',
                            marginBottom: 10,
                            color: "#666"
                          }}>Previous 30 days</Text>
                        </View>

                        <View style={{ flexDirection: "column" }}>
                          <Text style={{
                            fontSize: 20,
                            fontWeight: '700',
                          }}>40% <Ionicons name='arrow-down' size={20} color={'red'}/></Text>
                          <Text style={{
                            fontSize: 13,
                            fontFamily: 'Regular',
                            marginBottom: 10,
                            color: "#666"
                          }}>Last year</Text>
                        </View>
                      </View>
                      <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                      <View style={{flexDirection: "column", marginTop: -25}}>
                        <Text style={styles.chartPrice}>$10K</Text>
                        <Text style={styles.chartPrice}>$8K</Text>
                        <Text style={styles.chartPrice}>$6K</Text>
                        <Text style={styles.chartPrice}>$4K</Text>
                        <Text style={styles.chartPrice}>$2K</Text>
                        <Text style={styles.chartPrice}>$0K</Text>
                      </View>

                      <CustomBarChart data={barChartData} />
                    </View>
                    </Pressable>
                    </View>
          
          <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginTop: 20 }}>
            <TouchableOpacity style={styles.tabsContainer} onPress={() => navigation.navigate('/AddProduct')}>
              <View style={styles.tabContent}>
                <FontAwesome6 name='folder-plus' size={30} color='#41ccc7' style={{ marginBottom: 10 }} />
                <Text style={styles.tabText}>Add a Product</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tabsContainer} onPress={() => navigation.navigate('/Orders')}>
              <View style={styles.tabContent}>
                <Ionicons name='save' size={30} color='#41ccc7' style={{ marginBottom: 10 }} />
                <Text style={styles.tabText}>Manage Orders</Text>
              </View>
            </TouchableOpacity>
          </View>
         
          <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginTop: 20 }}>
           <TouchableOpacity style={styles.tabsContainer}  onPress={() => navigation.navigate('/Returns')}>
              <View style={styles.tabContent}>
                <FontAwesome6 name='reply-all' size={30} color='#41ccc7' style={{ marginBottom: 10 }} />
                <Text style={styles.tabText}>Manage Returns</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tabsContainer} onPress={() => navigation.navigate('/Inventory')}>
              <View style={styles.tabContent}>
                <FontAwesome6 name='store' size={30} color='#41ccc7' style={{ marginBottom: 10 }} />
                <Text style={styles.tabText}>Manage Inventory</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginTop: 20 }}>
          <TouchableOpacity style={styles.tabsContainer}>
              <View style={styles.tabContent}>
                <FontAwesome6 name='credit-card' size={30} color='#41ccc7' style={{ marginBottom: 10 }} />
                <Text style={styles.tabText}>Payments</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tabsContainer}>
              <View style={styles.tabContent}>
                <Entypo name='chat' size={30} color='#41ccc7' style={{ marginBottom: 10 }} />
                <Text style={styles.tabText}>Communications</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginTop: 20 }}>
          <TouchableOpacity style={styles.tabsContainer} onPress={() => navigation.navigate('/BusinessAnalytics')}>
              <View style={styles.tabContent}>
                <FontAwesome6 name='chart-simple' size={30} color='#41ccc7' style={{ marginBottom: 10 }} />
                <Text style={styles.tabText}>Business Analysis</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tabsContainer} onPress={() => navigation.navigate('/Advertisement')}>
              <View style={styles.tabContent}>
                <FontAwesome6 name='chart-simple' size={30} color='#41ccc7' style={{ marginBottom: 10 }} />
                <Text style={styles.tabText}>Advertisement</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginTop: 20 }}>
          <TouchableOpacity style={styles.tabsContainer} onPress={() => navigation.navigate('/AccountHealth')}>
              <View style={styles.tabContent}>
              <MaterialCommunityIcons name='sine-wave' size={30} color='#41ccc7' style={{ marginBottom: 10 }} />
                <Text style={styles.tabText}>Account Health</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tabsContainer}>
              <View style={styles.tabContent}>
              <Ionicons name='pricetags' size={30} color='#41ccc7' style={{ marginBottom: 10 }} />
                <Text style={styles.tabText}>Coupons</Text>
              </View>
            </TouchableOpacity>
          </View>
          
          <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginTop: 20 }}>
            <TouchableOpacity style={styles.tabsContainer}>
              <View style={styles.tabContent}>
                <MaterialCommunityIcons name='account-voice' size={30} color='#41ccc7' style={{ marginBottom: 10 }} />
                <Text style={styles.tabText}>Customer Voice</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tabsContainer}>
              <View style={styles.tabContent}>
                <FontAwesome5 name='sync-alt' size={30} color='#41ccc7' style={{ marginBottom: 10 }} />
                <Text style={styles.tabText}>Subscribe & Save</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginTop: 20 }}>
            <TouchableOpacity style={styles.tabsContainer}>
              <View style={styles.tabContent}>
                <MaterialCommunityIcons name='message-alert' size={30} color='#41ccc7' style={{ marginBottom: 10 }} />
                <Text style={styles.tabText}>Feedback</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tabsContainer}>
              <View style={styles.tabContent}>
                <FontAwesome6 name='chart-line' size={30} color='#41ccc7' style={{ marginBottom: 10 }} />
                <Text style={styles.tabText}>Growth Opportunity</Text>
              </View>
            </TouchableOpacity>
          </View>
          
          <View style={{marginBottom: 20}}></View>

                    {/* Add more content here */}
                  </View>
                </ScrollView>
              </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: "#fff",
    width: '100%'
  },
  drawerContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: '75%',
    backgroundColor: '#fff',
    zIndex: 2,
  },
  navigationContainer: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
    padding: 20
  },
  drawerItem: {
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: "Bold",
    marginBottom: 10,
  },
  sidebar: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginBottom: 30,
    padding: 15,
    width: 250,
    alignSelf: "center",
    top: 30,
    gap: 20,
    left: -10
  },
  title2: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: "Bold", 
  },
    paragraph: {
      padding: 16,
      fontSize: 15,
      textAlign: 'center',
    },
    drawerContent: {
      padding: 20,
      alignItems: "flex-start"
    },
    drawerTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    
    drawerText: {
      marginLeft: 10,
      fontSize: 16,
    },
    mainContent: {
      flex: 1,
      backgroundColor: '#fff',
    },
    mainContentInner: {
      flex: 1,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 15,
      borderBottomWidth: 2,
      borderBottomColor: "#ddd",
    },
    
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#41ccc7',
    },
   
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 0,
    },
    chartContainer: {
      paddingHorizontal: 8,
    },
    chartTitle: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    dropdown: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 7,
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 10,
      paddingHorizontal: 10,
      marginTop: 15
    },
    modalOverlay: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      backgroundColor: '#fff',
      padding: 20,
    },
    dropdownItem: {
      paddingVertical: 10,
    },
    sidebartitle:{},
    cardContainer: {
      flexDirection: 'row',
      paddingVertical: 12,
      backgroundColor: "#f4f4f4",
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 15,
      marginRight: 10,
      elevation: 2,
      width: 180,
      alignSelf: "center",
      left: 10,
      borderColor: "#eee",
      borderWidth: 1
    },
    card6: {
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 18,
      marginRight: 10,
      elevation: 2,
      width: 180,
      alignSelf: "center",
      left: 10,
      borderColor: "#eee",
      borderWidth: 1
    },
    card7: {
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 15,
      marginRight: 15,
      elevation: 2,
      width: 180,
      alignSelf: "center",
      marginLeft: 10,
      borderColor: "#eee",
      borderWidth: 1
    },
    cardTitle: {
      fontSize: 14,
      color: '#41ccc7',
      alignItems: "center"
    },
    cardValue: {
      fontSize: 20,
      fontWeight: '600',
    },
    tabsContainer: {
      borderWidth: 2,
      padding: 30,
      borderRadius: 10,
      borderColor: "#ddd",
      width: 160,
      
    },
    tabContent: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    tabText: {
      fontFamily: "Regular",
      color: "#333",
      textAlign: "center",
      width: 150,
      fontSize: 13
    },
    chartPrice:{
      marginBottom: 15,
      color: "#555"
    },
    backButton: {
      marginBottom: 10,
      backgroundColor: "#eee",
      padding: 16,
      width: 55,
      alignItems: "center",
      borderRadius: 100,
      marginTop: 20
    },
});

export default index;
function changeDrawerPosition(): void {
  throw new Error('Function not implemented.');
}

