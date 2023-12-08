import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const Products = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from the API
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const goProductHandler = (id) => {
    console.log("product id:", id);
    navigation.navigate("Item", { id: id });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product List</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Text style={styles.productName}>{item.title}</Text>
            <Text style={styles.productPrice}>${item.price}</Text>
            <Image style={styles.productImage} source={{ uri: item.image }} />
            <TouchableOpacity
              style={styles.viewDetailsButton}
              onPress={() => goProductHandler(item.id)}
            >
              <Text style={styles.buttonText}>View Details</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  productItem: {
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 8,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  productPrice: {
    fontSize: 16,
    color: "#888",
  },
  productImage: {
    width: 100, // Adjust the width and height as needed
    height: 100,
    resizeMode: "cover", // You can use "contain" or "stretch" as well
    borderRadius: 8,
    marginTop: 8,
  },
  viewDetailsButton: {
    backgroundColor: "#4CAF50", // Green color for the button
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    alignSelf: "flex-end", // Align to the right
  },
  buttonText: {
    color: "#fff", // White text color
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default Products;
