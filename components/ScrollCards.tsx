import { Dimensions, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome6, MaterialIcons } from '@expo/vector-icons'
import { router } from 'expo-router'

const { width: SCREEN_WIDTH } = Dimensions.get('window');


const ScrollCards = ({ navigation }) => {
  return (
    <View>
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

                  <Pressable onPress={() => navigation.navigate('/Orders')}>
                    <View style={styles.card}>
                    <View style={{flexDirection: "row", alignItems: "center", gap: 5}}>
                      <FontAwesome6 name='users-line' size={20} color={'#41ccc7'}/>
                      <Text style={styles.cardTitle}>Followers</Text>
                    </View>
                      <Text style={styles.cardValue}>507</Text>
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
    </View>
  )
}

export default ScrollCards

const styles = StyleSheet.create({
      cardContainer: {
        flexDirection: 'row',
        paddingVertical: 15,
        backgroundColor: "#fff",
        paddingHorizontal: 10,
        borderBottomWidth: 6,
        borderBottomColor: '#f5f5f5'
      },
      card: {
        width: SCREEN_WIDTH * 0.4,
        padding: 16,
        marginRight: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#DDD',
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
      },
      chartSection: {
        marginVertical: 10,
      },
  
   
      card6: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 16,
        marginRight: 5,
        elevation: 2,
        alignSelf: "center",
        left: 5,
        borderColor: "#eee",
        borderWidth: 1,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        width: 180

      },
      card7: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 16,
        marginRight: 20,
        elevation: 2,
        alignSelf: "center",
        marginLeft: 15,
        borderColor: "#eee",
        borderWidth: 1,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        width: SCREEN_WIDTH * 0.5,

      },
      cardTitle: {
        fontSize: 14,
        color: '#41ccc7',
        alignItems: "center"
      },
      cardValue: {
        fontSize: 17,
        fontWeight: '600',
      },
})