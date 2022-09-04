import { useState } from 'react';
import { Image, StyleSheet, TextInput } from 'react-native';
import Button, { EButtonTypes } from '../../components/Button';

import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';
import { RootStackScreenProps } from '../../types';

export default function LoginScreen({ navigation }: RootStackScreenProps<'AuthLogin'>) {
  const [email, onChangeEmail] = useState<string>('');

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/fma-logo.png')} />
      <Text style={styles.title}>Увійти</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder={'Email in @fpm.dnu.edu.ua'}
        placeholderTextColor={Colors.dark.lightGrey}
      />
      <Button
       type={EButtonTypes.primary}
       text='Увійти'
       action={() => {navigation.push('AuthCodeLogin')}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
  },
  logo: {
    width: 113,
    height: 70,
    marginBottom: 100,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 40,
  },
  input: {
    borderColor: '#BDBDBD',
    borderRadius: 8,
    borderWidth: 1,
    width: '100%',
    height: 33,
    padding: 7,
    paddingLeft: 15,
  },
  title: {
    fontSize: 34,
    fontWeight: '700',
    marginBottom: 20,
  },
});
