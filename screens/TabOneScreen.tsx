import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { Button, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import AuthGuard from '../guards/AuthGuard';
import { ELocalStoreKeys } from '../models/models';
import { getAllForUser } from '../store/actions/events';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getEventsSelector } from '../store/selectors/getEventsSelector';
import { getUserSelector } from '../store/selectors/getUserSelector';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'MyEvents'>) {
  const dispatch = useAppDispatch();
  const events = useAppSelector(getEventsSelector);

  useEffect(() => {
    dispatch(getAllForUser());
  }, []);

  return (
    <AuthGuard navigation={navigation}>
      <View style={styles.container}>
        <Text style={styles.title}>Tab One</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <EditScreenInfo path="/screens/TabOneScreen.tsx" />

        <Button title={'Go to login'} onPress={() => {
          navigation.push('AuthLogin');
        }} />
      </View>
    </AuthGuard>
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
