import { useState } from 'react';
import { Image, Pressable, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Button } from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';

import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import { RootStackScreenProps } from '../types';

export default function LoginScreen({ navigation }: RootStackScreenProps<'Auth'>) {
  const [email, onChangeEmail] = useState<string>('');

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/fma-logo.png')} />
      <Text style={styles.title}>Увійти</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder={'Email in @fpm.dnu.edu.ua'}
        placeholderTextColor={Colors.dark.lightGrey}
      />
      <Button
        title="Увійти"
        loading={false}
        loadingProps={{ size: 'small', color: 'white' }}
        buttonStyle={
          styles.button
        }
        titleStyle={{ fontSize: 20 }}
        containerStyle={{
          height: 40,
          width: '100%',
          marginTop: 80
        }}
        onPress={() => console.log('aye')}
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
  button: {
    height: 40,
    width: '100%',
    borderRadius: 56,
    backgroundColor: Colors.light.blue
  },
  title: {
    fontSize: 34,
    fontWeight: '700',
    marginBottom: 20,
  },
});
