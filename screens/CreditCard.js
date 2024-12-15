import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../components/colors";
import { AntDesign, Entypo, FontAwesome, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';


const CreditCard = ({ navigation }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [name, setName] = useState("");
  const [cvv, setCvv] = useState("");
  const [expiry, setExpiry] = useState("");
  const [saveCard, setSaveCard] = useState(false);

  const nameRef = useRef(null);
  const cvvRef = useRef(null);
  const expiryRef = useRef(null);

  const handleSave = () => {
    if (!cardNumber || cardNumber.replace(/\s/g, "").length < 16) {
      Alert.alert("Invalid Input", "Card Number must be 16 digits.");
      return;
    }
    if (!name) {
      Alert.alert("Invalid Input", "Name on Card cannot be empty.");
      return;
    }
    if (!cvv || cvv.length !== 3) {
      Alert.alert("Invalid Input", "CVV must be 3 digits.");
      return;
    }
    if (!expiry || !expiry.match(/^(0[1-9]|1[0-2])\/\d{2}$/)) {
      Alert.alert("Invalid Input", "Expiry Date must be in MM/YY format.");
      return;
    }
  
    Alert.alert("Success", "Card details saved successfully!");
    navigation.replace('PaymentMethod');
  };
  
  const handleExpiryChange = (text) => {
    // Allow only numbers and "/" character
    const formattedText = text.replace(/[^\d/]/g, "");
  
    // Add "/" automatically after 2 digits
    if (formattedText.length === 2 && !formattedText.includes("/")) {
      setExpiry(formattedText + "/");
    } else if (formattedText.length <= 5) {
      setExpiry(formattedText);
    }
  };
  

  const handleCardNumberChange = (text) => {
    const formatted = text.replace(/\D/g, "").match(/.{1,4}/g)?.join(" ") || "";
    setCardNumber(formatted);
    if (formatted.replace(/\s/g, "").length === 16) {
      nameRef.current?.focus();
    }
  };

  const handleCvvChange = (text) => {
    if (/^\d{0,4}$/.test(text)) setCvv(text);
    if (text.length === 3) expiryRef.current?.focus();
  };
 
  

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <AntDesign name='arrowleft' size={24}/>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add Credit/Debit Card</Text>
        <TouchableOpacity style={styles.backButton2}>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <Text style={styles.label}>Credit/Debit Card Details</Text>
        <Text style={styles.subLabel}>
          Provide your card information to add a new credit or debit card. Make
          sure your details are accurate to avoid any payment issues.
        </Text>

        <Text style={styles.label}>Card Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Card Number"
          keyboardType="numeric"
          maxLength={19}
          value={cardNumber}
          onChangeText={handleCardNumberChange}
        />

        <Text style={styles.label}>Name on Card</Text>
        <TextInput
          ref={nameRef}
          style={styles.input}
          placeholder="Name on Card"
          value={name}
          onChangeText={setName}
        />
        <View style={styles.row}>
            <View style={styles.fieldContainer}>
                <Text style={styles.label}>CVV</Text>
                <TextInput
                ref={cvvRef}
                style={[styles.input, styles.halfInput]}
                placeholder="123"
                keyboardType="numeric"
                maxLength={4}
                value={cvv}
                onChangeText={handleCvvChange}
                />
            </View>
            <View style={[styles.fieldContainer]}>
                <Text style={styles.label}>Expiry Date</Text>
                <TextInput
                ref={expiryRef}
                style={[styles.input, styles.halfInput]}
                placeholder="(MM/YY)"
                keyboardType="numeric"
                value={expiry}
                onChangeText={handleExpiryChange}
                />
            </View>
            </View>

        <View style={styles.checkboxContainer}>
          <TouchableOpacity onPress={() => setSaveCard(!saveCard)}>
            <Ionicons
              name={saveCard ? "checkbox" : "square-outline"}
              size={24}
              color={colors.primary}
            />
          </TouchableOpacity>
          <Text style={styles.checkboxText}>Save card information</Text>
        </View>
        
      </View>
        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
  );
};

export default CreditCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
    marginRight: 8,
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 100,
  },
  backButton2:{
    marginRight: 8,
    padding: 15,
    borderRadius: 100,
  },
  backArrow: {
    fontSize: 20,
    color: '#000',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  body: {
    padding: 16,
  },
  label: {
    fontSize: 18,
    fontWeight: "700",
  },
  subLabel: {
    fontSize: 14,
    color: "#555",
    marginVertical: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start", // Ensures items can misalign
    marginVertical: 8,
  },
  fieldContainer: {
    flex: 1, // Ensures equal spacing
    marginRight: 8,
  },
  halfInput: {
    width: "100%", // Ensures the input takes full width of the container
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
  },
  checkboxText: {
    marginLeft: 8,
    fontSize: 16,
    color: "#555",
  },
  saveButton: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    padding: 16,
    alignItems: "center",
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonContainer:{
    justifyContent: 'center',
    paddingVertical: 10,
    marginHorizontal: 16,
    marginTop: 'auto',
    marginBottom: 10
  }
});
