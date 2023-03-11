import React from 'react';
import { Text, View, Image, ScrollView, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import makeSelectWelcome from './selectors';
import images from 'images';
import { styles } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ItemCoin from 'components/ItemCoin';
import Card from 'components/Card';
import { products } from 'utils/instance';
export function Welcome(props) {
  return (
    <ScrollView style={{ minHeight: Dimensions.get('window').height }}>
      <View style={styles.background} />
      <View style={styles.backButton}>
        <TouchableOpacity>
          <Image source={images.backIcon} resizeMode="contain" style={styles.backIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.textBold}>Silver Tier</Text>
        <Text style={styles.text}>
          In Silver Tier, every $1 in rental fee paid, you get 2 coins to redeem exclusive rewards.
        </Text>
      </View>
      <Card />
      {products.map(type => (
        <ItemCoin type={type} />
      ))}
      <View style={styles.bottomView} />
    </ScrollView>
  );
}

Welcome.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  welcome: makeSelectWelcome(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Welcome);
