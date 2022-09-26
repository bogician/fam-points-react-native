import { Button, Icon } from '@rneui/themed';
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
      <Text style={styles.email}>
        {user?.email || 'bogdan.bahmet@...'}
      </Text>
      <View style={styles.pointsBlock}>
        <Text>
          60 балів
        </Text>
      </View>
      <Button
        type="clear"
        style={styles.menuIcon}
        containerStyle={{
          marginLeft: 'auto',
        }}
        onPress={() => {
          console.log('click');
        }}>
        <Icon name="menu" type="feather" color={Colors.light.blue} />
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 100,
    backgroundColor: Colors.light.lightBlue,
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 40,
    paddingBottom: 20,
  },
  email: {
    overflow: 'hidden',
    marginTop: 'auto',
  },
  pointsBlock: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor: Colors.light.violet,
    marginLeft: 25,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: Colors.light.lightBlue,
    marginTop: 'auto',
  },
  containerStyle: {
    height: 40,
    width: '100%',
    marginTop: 80,
  },
  menuIcon: {
    height: 50,
    marginTop: 10,
  },
});
