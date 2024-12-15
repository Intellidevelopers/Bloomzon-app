import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const CustomerVoice = ({ navigation }) => {
  const data = [
    { id: '1', health: 'All', listings: 1470, color: '#E6F0FF', textColor: '#2D7DFF' },
    { id: '2', health: 'Excellent', listings: 1420, color: '#E8F5E9', textColor: '#4CAF50' },
    { id: '3', health: 'Good', listings: 20, color: '#FFF9E6', textColor: '#FFC107' },
    { id: '4', health: 'Fair', listings: 15, color: '#FFF5E6', textColor: '#FF9800' },
    { id: '5', health: 'Poor', listings: 10, color: '#FFEDEA', textColor: '#F44336' },
    { id: '6', health: 'Very Poor', listings: 5, color: '#FFEBEE', textColor: '#D32F2F' },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.row} onPress={() => navigation.navigate('ListingFeedback')}>
      <View style={styles.healthContainer}>
        <Text style={styles.healthText}>{item.health}</Text>
      </View>
      <View style={[styles.listingContainer, { backgroundColor: item.color }]}>
        <Text style={[styles.listingText, { color: item.textColor }]}>{item.listings}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <AntDesign name="arrowleft" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Customer Voice</Text>
        <TouchableOpacity style={styles.backButton2} />
      </View>

      <Text style={styles.title}>Customer voice on your listing</Text>
      <Text style={styles.subtitle}>
        Identify product issues highlighted by customers, review their feedback, and take action to fix them.
      </Text>
        <View style={styles.table}>
            <Text style={styles.tabText}>Health</Text>
            <Text style={styles.tabText}>No. of listings</Text>
        </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default CustomerVoice;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    justifyContent: 'space-between',
    marginTop: 20,
  },
  backButton: {
    marginRight: 8,
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 100,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
  },
  title:{
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    lineHeight: 26,
  },
  backButton2: {
    marginRight: 8,
    padding: 15,
    borderRadius: 100,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    marginBottom: 10
  },
  healthContainer: {
    flex: 1,
  },
  healthText: {
    fontSize: 16,
    color: '#000',
  },
  listingContainer: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 16,
    minWidth: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listingText: {
    fontSize: 14,
    fontWeight: '500',
  },
  separator: {
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  table:{
    flexDirection: 'row',
    justifyContent:'space-between',
    marginBottom: 10,
    alignItems: 'center',
    paddingHorizontal: 1,
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    paddingBottom: 10
  },
  tabText:{
    fontSize: 16,
    fontWeight: '600',
    color: '#000'
  }
});
