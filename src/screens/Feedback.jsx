import { View, Text, StyleSheet } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import ViewReview from "../Components/ViewReview";
import AddReview from "../Components/AddReview";
import EditReview from "../Components/EditReview";

const Feedback = ({ navigation }) => {
  const { user } = useContext(AuthContext);
  const [review, setReview] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const onEditReview = (value) => {
    setEditMode(value);
  };

  const getReviewData = async () => {
    try {
      if (!user) return;

      let res = await fetch(
        `https://quick-cows-shake.loca.lt/review/get-review/${user.email}`
      );
      let data = await res.json();
      setReview(data.review);
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
      {!review && <AddReview getReviewData={getReviewData} />}
      {!editMode && review && (
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
});

export default Feedback;
