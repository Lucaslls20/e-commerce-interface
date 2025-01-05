import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Image } from 'react-native';
import { Appbar, Card, Text, IconButton, Checkbox, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const CartScreen = () => {

const navigation= useNavigation()
  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      name: 'Apple Watch Ultra 2 with Ocean Band',
      price: 1488.88,
      discount: 6,
      image: 'https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111848_apple-watch-series8.png',
      quantity: 1,
    },
    {
      id: '2',
      name: 'Apple Watch Ultra 2 with Ocean Band',
      price: 1488.88,
      discount: 6,
      image: 'https://ss7.vzw.com/is/image/VerizonWireless/apple-watch-series-10-42mm-jet-blk-alum-blk-s-band-sm-mwx63lw-a-c?wid=465&hei=465&fmt=webp',
      quantity: 1,
    },
    {
      id: '3',
      name: 'Apple Watch Ultra 2 with Ocean Band',
      price: 1488.88,
      discount: 6,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlJPI8v3sHU8dFSN_UZXK6sNEkI1srwYr2kg&s',
      quantity: 1,
    },
    {
      id: '4',
      name: 'Apple Watch Ultra 2 with Ocean Band',
      price: 1488.88,
      discount: 6,
      image: 'https://media.dcrainmaker.com/images/2024/09/IMG_6446.jpeg',
      quantity: 1,
    },
    {
      id: '5',
      name: 'Apple Watch Ultra 2 with Ocean Band',
      price: 1488.88,
      discount: 6,
      image: 'https://www.apple.com/newsroom/images/product/watch/standard/Apple_watch-series7_hero_09142021_big.jpg.slideshow-xlarge_2x.jpg',
      quantity: 1,
    },
    {
      id: '6',
      name: 'Apple Watch Ultra 2 with Ocean Band',
      price: 1488.88,
      discount: 6,
      image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYG03ref_FV98_VW_34FR+watch-case-44-aluminum-midnight-nc-se_VW_34FR+watch-face-44-aluminum-midnight-se_VW_34FR?wid=752&hei=720&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=OUh6OFdFVEJxVkF6SUo5TWxpTE50MG5TeWJ6QW43NUFnQ2V4cmRFc1VnWWxvMTNVeXVWaTk0Ui9PSEVKVVU0dzN2QVRTWW5kR2Jad3ptYU8zZ21EUWZmQXlUU2xCQ2pTN3lrcDE0UU1hK0ZpRFN2VTEyRk9ZNEFubk9kM01kUmIySDNGVkFuTWJDdzY3LzhwNXhBeGdqanlpa2c4cm9CV25oRTZ3N0FCaUk1SHU3NmZyQzBTVVZ5ZWlSanV5V2tOdkZ1emhkYWNycmJka1dOU01FKzNBdFRUV0g5d1FoYmhBY0FhQ1ZnNFdFRFI2SjAxL1NHYWFLQ2hLdGdQSUw4bw',
      quantity: 1,
    },
  ]);

  const [selectAll, setSelectAll] = useState(false);

  const handleQuantityChange = (id:any, delta:any) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const renderItem = ({ item }:any ) => (
    <Card style={styles.card}>
      <View style={styles.itemContainer}>
        <Checkbox status={selectAll ? 'checked' : 'unchecked'} />
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.detailsContainer}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.price}>PKR {item.price.toFixed(2)}</Text>
          <Text style={styles.discount}>{item.discount}% off</Text>
        </View>
        <View style={styles.quantityContainer}>
          <IconButton
            icon="minus"
            onPress={() => handleQuantityChange(item.id, -1)}
          />
          <Text>{item.quantity}</Text>
          <IconButton
            icon="plus"
            onPress={() => handleQuantityChange(item.id, 1)}
          />
        </View>
      </View>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack() } />
        <Appbar.Content title="My Cart" />
      </Appbar.Header>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.footer}>
        <View style={styles.selectAllContainer}>
          <Checkbox
            status={selectAll ? 'checked' : 'unchecked'}
            onPress={handleSelectAll}
          />
          <Text>Select All</Text>
        </View>
        <Text style={styles.total}>Total: U$ {totalAmount.toFixed(2)}</Text>
        <Button mode="contained" style={styles.checkoutButton} onPress={() => console.log(totalAmount.toFixed(2))}>
          Checkout
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  card: {
    margin: 10,
    borderRadius: 8,
    elevation: 2,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 10,
  },
  detailsContainer: {
    flex: 1,
  },
  itemName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  price: {
    color: '#4CAF50',
  },
  discount: {
    color: '#F44336',
    fontSize: 12,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footer: {
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#EEE',
    backgroundColor: '#FFF',
  },
  selectAllContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  total: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  checkoutButton: {
    backgroundColor: '#FF7043',
  },
});

export default CartScreen;
