import React from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions, TouchableOpacity, Image } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign, Entypo, FontAwesome, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';


const screenWidth = Dimensions.get('window').width;

const data = {
  labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  datasets: [
    {
      data: [4, 5, 6, 7, 8, 9, 10],
      color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
      strokeWidth: 2,
    },
    {
      data: [1, 2, 3, 4, 5, 6, 7],
      color: (opacity = 1) => `rgba(0, 255, 0, ${opacity})`,
      strokeWidth: 2,
    },
  ],
};

const chartConfig = {
  backgroundGradientFrom: '#fff',
  backgroundGradientTo: '#fff',
  decimalPlaces: 2,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  style: {
    borderRadius: 16,
  },
  propsForDots: {
    r: '6',
    strokeWidth: '2',
    stroke: '#ffa726',
  },
};

const SalesDashboard = () => (
  <ScrollView style={styles.container}>
    <ScrollView horizontal style={styles.horizontal} showsHorizontalScrollIndicator={false}>
      <View style={styles.card}>
        <Text style={styles.cardValue}>7</Text>
        <Text style={styles.cardTitle}>Total order items</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardValue}>7</Text>
        <Text style={styles.cardTitle}>Units ordered</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardValue}>$4,950</Text>
        <Text style={styles.cardTitle}>Ordered product sales</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardValue}>2</Text>
        <Text style={styles.cardTitle}>Avg. units/order item</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardValue}>$630</Text>
        <Text style={styles.cardTitle}>Avg. sales/order item</Text>
      </View>
    </ScrollView>

    <View style={styles.compareContainer}>
      <Text style={styles.compareTitle}>Compare Sales</Text>
    </View>

    <Text style={styles.chartTitle}>Unit Ordered</Text>
    <LineChart
      data={data}
      width={screenWidth - 32}
      height={220}
      chartConfig={chartConfig}
      bezier
      style={styles.chart}
    />

    <Text style={styles.chartTitle}>Ordered Product Sales</Text>
    <LineChart
      data={data}
      width={screenWidth - 32}
      height={220}
      chartConfig={chartConfig}
      bezier
      style={styles.chart}
    />
  </ScrollView>
);

const TrafficDashboard = () => (
  <ScrollView style={[styles.container, styles.container2]}>
    <Text style={styles.compareTitle}>Traffic Metrics</Text>
    <LineChart
      data={data}
      width={screenWidth - 32}
      height={220}
      chartConfig={chartConfig}
      bezier
      style={styles.chart}
    />
  </ScrollView>
);

const Tab = createMaterialTopTabNavigator();

const BusinessAnalytics = ({ navigation }) => (
    <View style={styles.mainContainer}>
      {/* Custom Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <AntDesign name='arrowleft' size={24}/>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Business Analysis</Text>
        <TouchableOpacity style={styles.backButton}>
          <Image source={require('../assets/icons/setting.png')} style={styles.icon}/>
        </TouchableOpacity>
      </View>

      {/* Tab Navigator */}
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#F25C05',
          tabBarInactiveTintColor: '#888',
          tabBarIndicatorStyle: { backgroundColor: '#F25C05' },
          tabBarLabelStyle: { fontSize: 16, fontWeight: '600' },
          tabBarStyle: { backgroundColor: '#fff' },
        }}
      >
        <Tab.Screen name="Sales Dashboard" component={SalesDashboard} />
        <Tab.Screen name="Sales and Traffic" component={TrafficDashboard} />
      </Tab.Navigator>
    </View>
);

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container2:{
    paddingTop: 20
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    justifyContent:'space-between',
    marginTop: 40,
    paddingHorizontal: 10
  },
  backButton: {
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 100,
  },
  backArrow: {
    fontSize: 20,
    color: '#000',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
  },
  backButton2:{
    marginRight: 8,
    padding: 15,
    borderRadius: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 16,
    color: 'gray',
    marginTop: 4,
  },
  card: {
    borderRightWidth: 1,
    borderRightColor: '#ccc',
    paddingRight: 15,
    marginRight: 15,
  },
  cardTitle: {
    fontSize: 14,
    color: 'gray',
  },
  cardValue: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left'
  },
  compareTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    paddingHorizontal: 16
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 8,
    padding: 16,

  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  horizontal: {
    flexDirection: 'row',
    marginBottom: 16,
    padding: 16,
    marginTop: 10
  },
  compareContainer:{
    backgroundColor: '#eee',
    paddingVertical: 16
  },
  icon:{
    width: 24,
    height: 24,
    resizeMode: 'contain',
    tintColor: '#000'
  }
});

export default BusinessAnalytics;
