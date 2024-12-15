import React, { useState, useEffect, useRef, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Image,
  RefreshControl,
  ScrollView,
  Pressable,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import Modal from "react-native-modal";
import colors from "../components/colors";

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [image, setImage] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const flatListRef = useRef(null);
  const navigation = useNavigation();
  const route = useRoute();
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);


  const {
    id,
    name,
    orderId,
    quantity,
    purchaseDate,
    shipBy,
    delivered,
    carrier,
    trackingNumber,
    status,
    productName,
    productPrice,
    productID,
    message,
  } = route.params;

  // useEffect(() => {
  //   // Initialize messages from route.params
  //   if (message) {
  //     setMessages([...message].reverse());
  //   }
  // }, [message]);

  const saveMessages = async (newMessages) => {
    try {
      await AsyncStorage.setItem("messages", JSON.stringify(newMessages));
    } catch (error) {
      console.error("Failed to save messages:", error);
    }
  };

  const handleSend = () => {
    if (inputText.trim()) {
      const newMessage = {
        id: Date.now().toString(),
        text: inputText.trim(),
        timestamp: new Date().toLocaleString(),
        sender: "You",
        type: "text",
      };
  
      const updatedMessages = [newMessage, ...messages];
      setMessages(updatedMessages);
      setInputText("");
      saveMessages(updatedMessages);
      Keyboard.dismiss();
  
      // Simulate auto-reply
      setTimeout(() => {
        const autoReply = generateAutoReply();
        const updatedWithReply = [autoReply, ...updatedMessages];
        setMessages(updatedWithReply);
        saveMessages(updatedWithReply);
      }, 1000); // 1-second delay
    }
  };
  

  const handleImagePick = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets) {
      const uri = result.assets[0];
      const newMessage = {
        id: Date.now().toString(),
        type: "image",
        uri: uri.uri,
        sender: "You",
        timestamp: new Date().toLocaleString(),
      };

      const updatedMessages = [newMessage, ...messages];
      setMessages(updatedMessages);
      saveMessages(updatedMessages);
    }
  };

    // Function to simulate auto-reply
    const generateAutoReply = () => {
      return {
        id: Date.now().toString(),
        text: "Thank you for your message! We'll get back to you shortly.",
        timestamp: new Date().toLocaleString(),
        sender: "buyer",
        type: "text",
      };
    };

      // Function to remove saved messages
  const removeSavedMessages = async () => {
    try {
      await AsyncStorage.removeItem("messages");
      setMessages([]);
      console.log("Messages removed from AsyncStorage");
    } catch (error) {
      console.error("Failed to remove messages:", error);
    }
  };

  const renderItem = ({ item }) => (
    <Pressable>
      <View
        style={[
          styles.messageContainer,
          item.sender === "You" ? styles.userMessage : styles.otherMessage,
        ]}
      >
        <Text style={styles.timestamp}>{item.timestamp}</Text>
        {item.type === "text" ? (
          <Text style={[styles.messageText, styles.messageText2]}>{item.text}</Text>
        ) : (
          <Image source={{ uri: item.uri }} style={styles.image} />
        )}
      </View>
    </Pressable>
  );

  const onRefresh = () => {
    setRefreshing(true);
    // loadMessages();
    setRefreshing(false);
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.header}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: -20,
            justifyContent: "space-around",
            gap: 50,
          }}
        >
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <AntDesign name="arrowleft" size={22} />
          </TouchableOpacity>
          <Text style={{ fontSize: 18, fontFamily: "Semibold", top: 25 }}>
            {name}
          </Text>
          <TouchableOpacity style={styles.infoButton} onPress={toggleModal}>
            <AntDesign name="exclamationcircleo" size={22} />
          </TouchableOpacity>
        </View>
        <Text style={styles.safetyNote}>
          Keep your account safe - never share personal information in this
          conversation.
        </Text>
      </View>
      {/* <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      ></ScrollView> */}

      {loading ? (
        <ActivityIndicator
          size="large"
          color="#FF8C00"
          style={{ marginTop: 20 }}
        />
      ) : (
        <FlatList
          ref={flatListRef}
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          inverted
          contentContainerStyle={styles.messageList}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        />

      )}
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.mediaButton} onPress={handleImagePick}>
          <Feather name="paperclip" size={22} />
        </TouchableOpacity>
        <TextInput
          style={styles.textInput}
          placeholder="Type your message..."
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Ionicons name="send" size={22} color={"#fff"} />
        </TouchableOpacity>
      </View>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.modalTitle}>Order Details</Text>
            <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
              <AntDesign name="close" size={22} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginBottom: 20,
              borderBottomWidth: 1,
              borderBottomColor: "#ddd",
            }}
          >
            <Image
              source={require("../assets/products/img4.jpg")}
              style={styles.productImage}
            />
            <View style={{ width: "60%" }}>
              <Text style={styles.productName}>{productName}</Text>
              <Text style={styles.productPrice}>${productPrice}</Text>
              <Text style={styles.productID}>Product ID: #{productID}</Text>
            </View>
          </View>
          <View style={styles.summary}>
            <Text style={styles.orderDetail}>Quantity:</Text>
            <Text style={styles.orderDetailValue}>{quantity}</Text>
          </View>
          <View style={styles.summary}>
            <Text style={styles.orderDetail}>Order ID: </Text>
            <Text style={styles.orderDetailValue}>{orderId}</Text>
          </View>
          <View style={styles.summary}>
            <Text style={styles.orderDetail}>Purchase date:</Text>
            <Text style={styles.orderDetailValue}>{purchaseDate}</Text>
          </View>
          <View style={styles.summary}>
            <Text style={styles.orderDetail}>Ship by:</Text>
            <Text style={styles.orderDetailValue}>{shipBy}</Text>
          </View>
          <View style={styles.summary}>
            <Text style={styles.orderDetail}>Delivered by:</Text>
            <Text style={styles.orderDetailValue}>{delivered}</Text>
          </View>
          <View style={styles.summary}>
            <Text style={styles.orderDetail}>Carrier:</Text>
            <Text style={styles.orderDetailValue}>{carrier}</Text>
          </View>
          <View style={styles.summary}>
            <Text style={styles.orderDetail}>Tracking number:</Text>
            <Text style={styles.orderDetailValue}>{trackingNumber}</Text>
          </View>
          <View style={styles.summary}>
            <Text style={styles.orderDetail}>Status:</Text>
            <Text style={styles.orderDetailValue}>{status}</Text>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  safetyNote: {
    textAlign: "center",
    padding: 14,
    color: "#666",
    fontSize: 16,
  },
  messageList: {
    paddingHorizontal: 16,
  },
  messageContainer: {
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
    maxWidth: "80%",
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#DBEFFF", // Light green for sent messages
  },
  otherMessage: {
    alignSelf: "flex-start",
    backgroundColor: '#FADEC3', // White for received messages
  },
  messageText2:{
    color: '#000', 
  },
  messageText: {
    fontSize: 16,
    color: "#fff",
  },
  timestamp: {
    fontSize: 12,
    color: "#000",
    marginBottom: 5,
  },
  userMessageTextContainer: {
    fontSize: 18,
    color: "#fff",
    backgroundColor: "#ff8c00",
    padding: 10,
    borderBottomLeftRadius: 14,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  otherMessageTextContainer: {
    fontSize: 18,
    color: "#000",
    backgroundColor: "#ffe5cc",
    padding: 10,
    borderBottomRightRadius: 14,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  userTimestamp: {
    color: "#000",
  },
  otherTimestamp: {
    color: "#000",
    alignSelf: "flex-start",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  mediaButton: {
    fontSize: 24,
    color: "#000",
    marginRight: 8,
    backgroundColor: "#eee",
    padding: 18,
    borderRadius: 10,
  },
  textInput: {
    flex: 1,
    padding: 18,
    borderRadius: 10,
    backgroundColor: "#eee",
    fontSize: 16,
    color: "#000",
  },
  sendButton: {
    fontSize: 24,
    color: "#FF8C00",
    marginLeft: 8,
    backgroundColor: "#FF8C00",
    padding: 18,
    borderRadius: 10,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginTop: 4,
  },
  backButton: {
    marginBottom: 10,
    marginTop: 60,
    backgroundColor: "#eee",
    padding: 16,
    width: 55,
    alignItems: "center",
    borderRadius: 100,
  },
  infoButton: {
    marginBottom: 10,
    marginTop: 60,
    backgroundColor: "#eee",
    padding: 16,
    width: 55,
    alignItems: "center",
    borderRadius: 100,
  },
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  closeButton: {
    marginTop: -25,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 30,
  },
  productImage: {
    width: "30%",
    height: 100,
    marginBottom: 20,
    borderRadius: 15,
    marginRight: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    textAlign: "left",
  },
  productPrice: {
    fontSize: 18,
    color: "#000",
    marginBottom: 10,
    fontWeight: "900",
  },
  productID: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
  orderDetail: {
    fontSize: 16,
    marginBottom: 5,
    color: "#666",
  },
  orderDetailValue: {
    fontSize: 16,
    marginBottom: 5,
    fontFamily: "Semibold",
  },
  summary: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 20,
  },
  message: {
    color: "#fff",
    fontSize: 16,
  },
  userText: {
    color: "#000",
  },
  otherMessageText: {
    color: "#fff",
  },
});

export default ChatScreen;
