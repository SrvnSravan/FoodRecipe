import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>IROID</Text> */}
      <Image
        source={require('../assets/images/iroid2.png')}
        style={styles.heading}
      />
      <Image
        source={require('../assets/images/bell2.png')}
        style={styles.image}
      />
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  container: {
    width: 400,
    height: 84,
    backgroundColor: '#3BB0EC',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    color: '#FFFFFF',
    width: 110,
    height: 354,
    fontFamily: 'Shuriken Boy Std',
    fontSize: 34,
    textAlign: 'center',
    marginTop: 32,
    fontWeight: '800',
  },
  image: {
    width: 25,
    height: 25,
    position: 'absolute',
    top: 46,
    right: 25,
  },
  heading: {
    width: 110,
    height: 25,
    top: 40,

  }
});
