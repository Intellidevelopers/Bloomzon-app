import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image
} from 'react-native';
import {
  AntDesign,
  FontAwesome5,
  FontAwesome6,
  Fontisto,
  Ionicons,
  MaterialIcons,
} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const Settings = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()} // Navigate back
        >
          <AntDesign name="arrowleft" size={22} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
        <TouchableOpacity style={styles.backButton2} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Options */}
        <TouchableOpacity
        style={styles.optionContainer}
        onPress={() => navigation.navigate('Account')} // Navigate to the specified 'route'
      >
        <View style={styles.optionContent}>
          <Image source={require('../assets/icons/1.png')} style={styles.icon}/>
          <Text style={styles.optionText}>Account Info</Text>
        </View>
        <AntDesign name="right" size={18} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.optionContainer}
        onPress={() => navigation.navigate('route')} // Navigate to the specified 'route'
      >
        <View style={styles.optionContent}>
          <Image source={require('../assets/icons/2.png')} style={styles.icon}/>
          <Text style={styles.optionText}>App Appearance</Text>
        </View>
        <AntDesign name="right" size={18} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.optionContainer}
        onPress={() => navigation.navigate('route')} // Navigate to the specified 'route'
      >
        <View style={styles.optionContent}>
          <Image source={require('../assets/icons/3.png')} style={styles.icon}/>
          <Text style={styles.optionText}>Push Notification</Text>
        </View>
        <AntDesign name="right" size={18} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.optionContainer}
        onPress={() => navigation.navigate('route')} // Navigate to the specified 'route'
      >
        <View style={styles.optionContent}>
          <Image source={require('../assets/icons/4.png')} style={styles.icon}/>
          <Text style={styles.optionText}>Login & Security</Text>
        </View>
        <AntDesign name="right" size={18} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.optionContainer}
        onPress={() => navigation.navigate('route')} // Navigate to the specified 'route'
      >
        <View style={styles.optionContent}>
          <Image source={require('../assets/icons/5.png')} style={styles.icon}/>
          <Text style={styles.optionText}>Return Settings</Text>
        </View>
        <AntDesign name="right" size={18} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.optionContainer}
        onPress={() => navigation.navigate('route')} // Navigate to the specified 'route'
      >
        <View style={styles.optionContent}>
          <Image source={require('../assets/icons/6.png')} style={styles.icon}/>
          <Text style={styles.optionText}>Shipping Settings</Text>
        </View>
        <AntDesign name="right" size={18} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.optionContainer}
        onPress={() => navigation.navigate('route')} // Navigate to the specified 'route'
      >
        <View style={styles.optionContent}>
          <Image source={require('../assets/icons/7.png')} style={styles.icon}/>
          <Text style={styles.optionText}>Gift Options</Text>
        </View>
        <AntDesign name="right" size={18} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.optionContainer}
        onPress={() => navigation.navigate('route')} // Navigate to the specified 'route'
      >
        <View style={styles.optionContent}>
          <Image source={require('../assets/icons/8.png')} style={styles.icon}/>
          <Text style={styles.optionText}>Tax Settings</Text>
        </View>
        <AntDesign name="right" size={18} color="#000" />
      </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -30,
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'Semibold',
    top: 25,
  },
  backButton: {
    marginBottom: 10,
    marginTop: 60,
    backgroundColor: '#eee',
    padding: 16,
    width: 55,
    alignItems: 'center',
    borderRadius: 100,
  },
  backButton2: {
    marginBottom: 10,
    marginTop: 60,
    padding: 16,
    width: 55,
    alignItems: 'center',
    borderRadius: 100,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  optionIconContainer: {
    backgroundColor: '#def2eb',
    borderRadius: 24,
    padding: 8,
    marginRight: 16,
  },
  optionText: {
    fontSize: 16,
    color: '#000',
  },
  icon:{
    width: 40,
    height: 40,
    marginHorizontal: 10,
  }
});

export default Settings;
