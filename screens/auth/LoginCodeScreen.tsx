import { useCallback, useState } from 'react';
import { Image, Pressable, StyleSheet, TextInput, TouchableOpacityComponent } from 'react-native';
import Button, { EButtonTypes } from '../../components/Button';
import CustomCodeField from '../../components/CodeField/CodeField';
import SvgArrow from '../../components/svg/BackArrow';
import FamLogo from '../../components/svg/FamLogo';

import { Text, View } from '../../components/Themed';
import { login } from '../../store/actions/user';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getUserSelector } from '../../store/selectors/getUserSelector';
import { RootStackScreenProps } from '../../types';

export default function LoginCodeScreen({ navigation }: RootStackScreenProps<'AuthCodeLogin'>) {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const user = useAppSelector(getUserSelector);

  const loginCallback = useCallback(async () => {
    if (!user) {
      return;
    }
    setLoading(true);
    await dispatch(login({ email: user.email, password: code }));
    navigation.push('Root');
    setLoading(false);
  }, [code, user]);

  return (
    <View style={styles.container}>
      <Pressable style={styles.arrow} onPress={() => {
        navigation.goBack();
      }}>
        <SvgArrow />
      </Pressable>
      <Text style={styles.title}>Код верифікації</Text>
      <Text style={styles.text}>{`Ми відправили тобі код верифікації на ${user?.email}`}</Text>
      <CustomCodeField value={code} setValue={setCode} />
      <Button
        loading={loading}
        type={EButtonTypes.primary}
        text="Відправити"
        action={loginCallback}
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
    paddingRight: 40,
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
    marginTop: 80,
  },
});
