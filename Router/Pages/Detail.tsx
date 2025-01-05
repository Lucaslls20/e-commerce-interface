import React, { useState, useRef } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  FlatList,
  Image,
  ViewToken,
  Button,
  Pressable,
} from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { RootStackParamList } from "../Navigation/Navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type ProductImage = {
  id: number;
  image: string;
};


export default function Detail() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [activeIcon, setActiveIcon] = useState<boolean>(false)

    function activeIconHeart(){
      setActiveIcon(!activeIcon)
    }


  const productImages: ProductImage[] = [
    {
      id: 1,
      image:
        "https://www.apple.com/v/iphone-16/d/images/overview/apple-intelligence/apple-intelligence_hw__fhknj1my91iu_large.png",
    },
    {
      id: 2,
      image: "https://t2.tudocdn.net/709303?w=1920",
    },
    {
      id: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2qjUGVWGf2ORN5Epm6fvxNNW9MVzhTNrdSw&s",
    },
  ];

  const onViewableItemsChanged = useRef((info: { viewableItems: ViewToken[] }) => {
    const visibleItem = info.viewableItems[0];
    if (visibleItem) {
      setActiveIndex(visibleItem.index ?? 0);
    }
  }).current;

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.mainContainer}>
        <TouchableOpacity style={styles.detail} onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={25} color="#000" style={{ fontWeight: "bold" }} />
        </TouchableOpacity>

        <Text style={styles.title}>Detail Product</Text>

        <TouchableOpacity style={styles.shareIcon}>
          <AntDesign name="sharealt" size={25} color="#000" style={{ fontWeight: "bold" }} />
        </TouchableOpacity>
      </View>

      {/* FlatList */}
      <View style={styles.flatList}>
        <FlatList
          data={productImages}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View>
              <Image source={{ uri: item.image }} style={styles.image} />
            </View>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
        />
      </View>

      {/* Indicator */}
      <View style={styles.indicatorContainer}>
        {productImages.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicatorBar,
              { backgroundColor: activeIndex === index ? "#ff8b26" : "#ccc" },
            ]}
          />
        ))}
      </View>

      {/* Counter */}
      <View style={styles.activeCounterContainer}>
        <Text style={styles.activeCounter}>{activeIndex + 1} / {productImages.length}</Text>
      </View>

      {/* Product Details */}
      <View style={styles.productDetails}>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <Text style={styles.productTitle}>iPhone 16</Text>
        <Pressable onPress={activeIconHeart}>
        <FontAwesome name={!activeIcon ? 'heart-o' : 'heart' } size={20} color='#000' style={{textAlignVertical:'center'}} />
        </Pressable>
        </View> 
        <Text style={styles.productPrice}>$1,299.00</Text>
        <Text style={styles.productDiscount}>10% OFF</Text>
        
        <Text style={styles.productDescriptionTitle}>Description Product</Text>
        <Text style={styles.productDescription}>
          The iPhone 16 features cutting-edge technology, including an advanced A18 Bionic chip,
          a stunning 6.7-inch Super Retina XDR display, and a revolutionary camera system for
          capturing professional-quality photos and videos. With 5G support and enhanced battery
          life, it ensures seamless connectivity and performance.
        </Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.addToCartButton} onPress={() => navigation.navigate('MyCart1')}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.checkoutButton} onPress={() => navigation.navigate("MyTabs")}>
          <Text style={styles.buttonText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  mainContainer: {
    justifyContent: "center",
    flexDirection: "row",
    marginVertical: 20,
    marginBottom: 40,
  },
  detail: {
    borderWidth: 1,
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 20,
    borderColor: "#a6a6a6",
  },
  shareIcon: {
    borderWidth: 1,
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 20,
    borderColor: "#a6a6a6",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
  flatList: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 350,
    width: 300,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  indicatorBar: {
    height: 8,
    width: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeCounterContainer: {
    alignItems: "center",
    marginVertical: 10,
  },
  activeCounter: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  productDetails: {
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 5,
    textAlignVertical:'center'
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ff8b26",
  },
  productDiscount: {
    fontSize: 14,
    color: "#ff4d4d",
    marginBottom: 10,
  },
  productDescriptionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
    color:'#000'
  },
  productDescription: {
    fontSize: 14,
    color: "#666",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  addToCartButton: {
    flex: 1,
    backgroundColor: "#ff8b26",
    paddingVertical: 10,
    marginRight: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  checkoutButton: {
    flex: 1,
    backgroundColor: "#ff4d4d",
    paddingVertical: 10,
    marginLeft: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
