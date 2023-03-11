import React from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from './styles_Card';
import images from 'images';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ItemCard() {
  return (
    <View style={styles.cardWrapper}>
      <Image source={images.walletBg} resizeMode="stretch" style={styles.imageCard} />
      <View style={{ padding: 24 }}>
        <Text style={styles.textCardh1}>Available Coin balance</Text>
        <View>
          <Text style={[styles.textAmount]}>340</Text>
        </View>
        <View style={styles.product}>
          <View style={styles.lineOff} />
        </View>
        <Text style={[styles.text, styles.textCardh2]}>You have paid rental fee for $1,200. </Text>
        <Text style={[styles.text, styles.textCardh3]}>Pay more $800 to achieve Gold Tier.</Text>
        <TouchableOpacity style={styles.flex}>
          <Text style={styles.textLink}>View tier benefits</Text>
          <Image source={images.nextIcon} resizeMode="contain" style={styles.nextIcon} />
        </TouchableOpacity>
        <TouchableOpacity containerStyle={styles.buttonContainer}>
          <Text style={styles.textButton}>My Coupons</Text>
        </TouchableOpacity>
        <Text style={[styles.text, styles.updateText]}>Updated : 02/11/2021</Text>
      </View>
    </View>
  );
}
