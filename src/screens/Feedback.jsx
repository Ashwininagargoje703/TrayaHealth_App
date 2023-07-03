import { View, Text, StyleSheet } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import ViewReview from "../Components/ViewReview";
import AddReview from "../Components/AddReview";
import EditReview from "../Components/EditReview";
import { TouchableOpacity } from "react-native";

const Feedback = ({ navigation }) => {
  const { user } = useContext(AuthContext);
  const [review, setReview] = useState(null);
  const [editMode, setEditMode] = useState(false);

  if (!review || !user) {
    navigation.navigate("Login");
  }

  const onEditReview = (value) => {
    setEditMode(value);
  };

  const getReviewData = async () => {
    try {
      if (!user) return;

      let res = await fetch(
        `https://traya-health-backend-production.up.railway.app/review/get-review/${user.email}`
      );
      let data = await res.json();
      if (data.status == 200) {
        // console.log("setting");
        setReview(data.review);
      }
      // console.log(data);
    } catch (e) {
      console.log("err", e.message);
    }
  };

  useEffect(() => {
    getReviewData();
  }, [user]);

  useEffect(() => {
    if (!user) {
      navigation.navigate("Login");
    }
  }, []);

  return (
    <>
      {!review && !user && (
        <View style={styles.container}>
          <Text style={styles.textInfo}>Please Login First</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={styles.loginLink}
          >
            <Text style={styles.loginLinkText}>Go to Login</Text>
          </TouchableOpacity>
        </View>
      )}
      {!review && user && <AddReview getReviewData={getReviewData} />}
      {!editMode && review !== null && (
        <View style={styles.container}>
          <ViewReview review={review} onEditReview={onEditReview} />
        </View>
      )}
      {editMode && review && (
        <EditReview
          review={review}
          onEditReview={onEditReview}
          getReviewData={getReviewData}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
  },
  textInfo: {
    fontSize: 25,
  },
  loginLink: {
    marginTop: 16,
    fontSize: 20,
  },
  loginLinkText: {
    color: "#2196f3",
    fontSize: 14,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});

export default Feedback;
