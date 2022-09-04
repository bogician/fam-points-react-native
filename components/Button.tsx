import {  StyleSheet,} from 'react-native';
import { Button as RNButton } from '@rneui/themed';
import React from 'react';
import Colors from '../constants/Colors';

export enum EButtonTypes {
  primary = 'primary',
  secondary = 'secondary'
}

export interface ICustomButtonProps {
  type: EButtonTypes;
  text: string;
  action: () => any;
  loading: boolean;
}

const Button: React.FC<ICustomButtonProps> = ({type, action, text, loading}: ICustomButtonProps) => {
  return (
    <RNButton
      title={text}
      loading={loading}
      loadingProps={{ size: 'small', color: 'white' }}
      buttonStyle={
        styles.button
      }
      titleStyle={{ fontSize: 20 }}
      containerStyle={styles.containerStyle}
      onPress={action}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    width: '100%',
    borderRadius: 56,
    backgroundColor: Colors.light.oceanBlue,
  },
  containerStyle: {
    height: 40,
    width: '100%',
    marginTop: 80,
  },
});

export default Button
