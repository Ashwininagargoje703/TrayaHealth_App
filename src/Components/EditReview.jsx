import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

const EditReview = ({ review, onEditReview, getReviewData }) => {
  const [name, setName] = useState(review.name);
  const [email, setEmail] = useState(review.email);
  const [rating, setRating] = useState(JSON.stringify(review.ratings));
  const [message, setMessage] = useState(review.message);

  const handleReview = async () => {
    try {
      let payload = {
        email,
        ratings: rating,
        message,
      };
      let res = await fetch(
        `https://quick-cows-shake.loca.lt/review/edit-review`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
      let data = await res.json();
      getReviewData();
      onEditReview(false);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Edit Review</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={(text) => setName(text)}
        value={name}
        editable={false}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
        editable={false}
      />
      <TextInput
        style={styles.input}
        placeholder="Rating"
        onChangeText={(text) => setRating(text)}
        value={rating}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.messageInput}
        placeholder="Message"
        onChangeText={(text) => setMessage(text)}
        value={message}
        multiline
        numberOfLines={4}
      />
      <TouchableOpacity style={styles.button} onPress={handleReview}>
        <Text style={styles.buttonText}>Update Review</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    backgroundColor: "#f0f0f0",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 32,
  },
  input: {
    height: 50,
    width: "100%",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: "#fff",
  },
  messageInput: {
    height: 100,
    width: "100%",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: "#fff",
    textAlignVertical: "top",
  },
  button: {
    width: "100%",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2196f3",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default EditReview;
