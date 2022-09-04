import { useState } from 'react';
import { Image, Pressable, StyleSheet, TextInput, TouchableOpacityComponent } from 'react-native';
import Button, { EButtonTypes } from '../../components/Button';
import CustomCodeField from '../../components/CodeField/CodeField';
import SvgArrow from '../../components/svg/BackArrow';
import FamLogo from '../../components/svg/FamLogo';

import { Text, View } from '../../components/Themed';
import { RootStackScreenProps } from '../../types';

export default function LoginCodeScreen({ navigation }: RootStackScreenProps<'AuthCodeLogin'>) {
  const [code, setCode] = useState('');
  return (
    <View style={styles.container}>
      <Pressable style={styles.arrow} onPress={() => {
        navigation.goBack();
      }}>
        <SvgArrow />
      </Pressable>
      <Text style={styles.title}>Код верифікації</Text>
      <Text style={styles.text}>{`Ми відправили тобі код верифікації на ${'test@fpm.dnu.edu.ua'}`}</Text>
      <CustomCodeField value={code} setValue={setCode} />
      <Button
        type={EButtonTypes.primary}
        text="Відправити"
        action={() => {
          console.log('1');
        }}
        style={styles.button}
      />
      <FamLogo style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingLeft: 40,
    paddingBottom: 0,
    paddingRight: 40
  },
  title: {
    fontSize: 34,
    fontWeight: '700',
    marginBottom: 16,
    marginTop: 58,
  },
  text: {
    marginBottom: 18,
  },
  arrow: {
    marginTop: 15,
  },
  logo: {
    marginTop: 'auto',
  },
  button: {
    marginTop: 80
  }
});
