import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { Button, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { ELocalStoreKeys } from '../models/models';
import { useAppSelector } from '../store/hooks';
import { getUserSelector } from '../store/selectors/getUserSelector';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'MyEvents'>) {
  const user = useAppSelector(getUserSelector);
  const [token, setToken] = useState('');

  useEffect(() => {
    const getToken = async () => {
      const token = await AsyncStorage.getItem(ELocalStoreKeys.TOKEN);
      setToken(String(token));
    };

    getToken();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
      <Text>{`email: ${user?.email}`}</Text>
      <Text>{`role: ${user?.role}`}</Text>
      <Text>{`AccessToken: ${token}`}</Text>

      <Button title={'Go to login'} onPress={() => {
        navigation.push('AuthLogin');
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
