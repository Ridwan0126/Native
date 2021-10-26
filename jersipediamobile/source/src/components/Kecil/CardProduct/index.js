import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts, responsiveWidth} from '../../../utils';
import Tombol from '../Tombol';

const CardProduct = ({Product, navigation}) => {
  return (
    <View key={Product.id} style={styles.container}>
      <TouchableOpacity style={styles.card}>
        <Image source={{uri: Product.gambar[0]}} style={styles.image} />
        <Text style={styles.tittle}>{Product.nama}</Text>
      </TouchableOpacity>
      <Tombol
        type="text"
        tittle="Details"
        padding={7}
        onPress={() => navigation.navigate('ProductDetail', {Product})}
      />
    </View>
  );
};

export default CardProduct;

const styles = StyleSheet.create({
  container: {
    marginBottom: 25,
  },
  image: {
    width: 124,
    height: 124,
  },
  tittle: {
    fontFamily: fonts.primary.bold,
    fontSize: 13,
    textTransform: 'capitalize',
    textAlign: 'center',
  },
  card: {
    backgroundColor: colors.yellow,
    width: responsiveWidth(150),
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    // marginBottom: 10,
  },
});
