import { Dimensions, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome6, MaterialIcons } from '@expo/vector-icons'
import { router } from 'expo-router'

const { width: SCREEN_WIDTH } = Dimensions.get('window');


const ScrollCards = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.title}>Overview</Text>
      <ScrollView horizontal style={styles.cardContainer} showsHorizontalScrollIndicator={false} scrollEnabled={true}>
                  <Pressable onPress={() => navigation.navigate('/Orders')}>
                    <View style={styles.card}>
                    <Text style={styles.cardTitle}>Shipped Revenue</Text>
                      <Text style={styles.cardValue}>$5,864.50</Text>
                    </View>
                  </Pressable>

                  <Pressable onPress={() => navigation.navigate('/Orders')}>
                    <View style={styles.card}>
                      <Text style={styles.cardTitle}>Shipped Units</Text>
                      <Text style={styles.cardValue}>213</Text>
                    </View>
                  </Pressable>
        
                  <Pressable>
                    <View style={styles.card}>
                    <Text style={styles.cardTitle}>Subscription Count</Text>
                    <Text style={styles.cardValue}>548</Text>
                    </View>
                  </Pressable>

                  </ScrollView>
    </View>
  )
}

export default ScrollCards

const styles = StyleSheet.create({
      cardContainer: {
        flexDirection: 'row',
        paddingVertical: 15,
        backgroundColor: "#fff",
        borderBottomWidth: 6,
        borderBottomColor: '#f5f5f5',
        paddingHorizontal: 10,
        marginRight: 10
      },
      card: {
        width: 150,
        padding: 10,
        marginRight: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#DDD',
      },
      chartSection: {
        marginVertical: 10,
      },
      cardTitle: {
        fontSize: 14,
        color: '#888',
        alignItems: "center"
      },
      cardValue: {
        fontSize: 18,
        fontWeight: '700',
      },
      title:{
        fontSize: 18,
        fontWeight: "700",
        paddingHorizontal: 10
      }
})