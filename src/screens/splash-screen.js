import React, {useEffect} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SignInPage from './sign-in';

const SplashScreen = navigation => {
  const nav = useNavigation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      nav.navigate(SignInPage);
    }, 300); // 300 milliseconds = 0.3 seconds
    return () => {
      clearTimeout(timeout); //clear the timeout when the component unmounts
    };
  }, []);
  return (
    <View>
      <Image source={require('../assets/images/splash-screen.png')} />
      <Image
        source={require('../assets/images/iroid1.png')}
        style={styles.image}
      />
    </View>
  );
};
export default SplashScreen;
const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    top: 317,
    left: 135,
    width: 110,
    height: 25,
  },
});
