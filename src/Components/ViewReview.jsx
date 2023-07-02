import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ViewReview = ({ review, onEditReview }) => {
  return (
    <View style={styles.reviewContainer}>
      <Text style={styles.text}>Email: {review.email}</Text>
      <Text style={styles.text}>Ratings: {review.ratings}</Text>
      <Text style={styles.text}>Review: {review.message}</Text>
      <TouchableOpacity
        style={styles.editButton}
        onPress={() => onEditReview(true)}
      >
        <Text style={styles.editButtonText}>Edit Review</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  reviewContainer: {
    width: "100%",
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    elevation: 4,
  },
  text: {
    fontSize: 18,
    marginBottom: 8,
  },
  editButton: {
    alignSelf: "center",
    marginTop: 16,
    backgroundColor: "#2196f3",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  editButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ViewReview;
