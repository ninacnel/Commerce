import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { CartContext } from "../contexts/CartContext";

const ProductItem = ({ route }) => {
  const { id } = route.params; // Access the ID from the route params
  const [item, setItem] = useState({});

  const { updateCart } = useContext(CartContext);

  useEffect(() => {
    console.log("ProductItem component mounted with id:", id);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setItem(json))
      .catch((error) =>
        console.error("Error fetching product details:", error)
      );
  }, [id]);

  const buyProductHandler = (id) => {
    let newItem = {
      id: item.id,
      title: item.title,
      price: item.price,
    };
    updateCart(newItem);
  };

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.itemImage} source={{ uri: item.image }} />
      <View style={styles.itemDetails}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>Price: ${item.price}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <TouchableOpacity style={styles.buyButton} onPress={buyProductHandler}>
          <Text style={styles.buttonText}>Buy</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: "#fff", // Set a background color if needed
  },
  itemImage: {
    width: "100%", // Occupy the entire width
    height: 300, // Set a fixed height or adjust as needed
    resizeMode: "cover",
    borderRadius: 8,
  },
  itemDetails: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    color: "#888",
  },
  description: {
    fontSize: 14,
    color: "#555",
    marginTop: 8,
  },
  buyButton: {
    backgroundColor: "#4CAF50", // Green color for the button
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 5,
    alignSelf: "center", // Align to the center horizontally
  },
  buttonText: {
    color: "#fff", // White text color
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default ProductItem;
