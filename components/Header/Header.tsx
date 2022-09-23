import React from 'react';
import { Image, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import { useAppSelector } from '../../store/hooks';
import { getUserSelector } from '../../store/selectors/getUserSelector';
import { View, Text } from '../Themed';

export const Header: React.FC = () => {
  const user = useAppSelector(getUserSelector);

  return (
    <View style={styles.header}>
      <View style={styles.logoWrapper}>
        <Image style={styles.logo} source={require('../../assets/fma-logo.png')} />
      </View>
      <Text style={styles.email}>
        {user?.email || 'bogdan.bahmet@gmail.com'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 100,
    backgroundColor: Colors.light.lightBlue,
    flexDirection: 'row',
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 50,
    paddingBottom: 20,
  },
  email: {
    textAlign: 'center',
    height: 30,
    width: 100,
  },
  logoWrapper: {
    backgroundColor: 'white',
    borderRadius: 100,
    width: 30,
    height: 30,
    marginRight: 10,
  },
  logo: {
    width: 25,
    height: 15,
    marginTop: '20%',
    marginLeft: '8%',
  },
  containerStyle: {
    height: 40,
    width: '100%',
    marginTop: 80,
  },
});
