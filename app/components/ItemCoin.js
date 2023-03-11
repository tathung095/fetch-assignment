import React from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { styles } from './styles_Coin';
import images from 'images';

export default function ItemCoin({ type }) {
  return (
    <View key={type.toString()} style={styles.categoryWrapper}>
      <Text style={styles.textTitle}>{type.topic}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {type.items.map((item, key) => (
          <TouchableOpacity key={key} activeOpacity={0.5} style={styles.productWrapper}>
            <Image source={item.image} resizeMode="contain" style={styles.imageProduct} />
            <View style={styles.insuff}>
              {item.insuff ? (
                <View style={styles.flex}>
                  <Image source={images.coinIcon} resizeMode="contain" style={styles.textInsuff} />
                  <Text style={styles.textCoinBold}>{item.title}</Text>
                </View>
              ) : (
                  <Text style={styles.textCoin}>{item.title}</Text>
                )}
              <Text style={styles.textCoinDes}>{item.desciption} </Text>
              {!!item.insuff && (
                <Text style={[styles.textLink, { fontSize: 14, lineHeight: 30 }]}>Insuffient coins</Text>
              )}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
