import * as React from 'react';
import { useAppSelector } from '../store/hooks';
import { isAuthorized } from '../store/selectors/getUserSelector';
import { View } from '../components/Themed';

interface AuthGuardType {
  children: React.ReactNode;
  navigation: any;
}
// For routes that can only be accessed by authenticated users
function AuthGuard({ children, navigation }: AuthGuardType) {
  const isAuthorizedUser = useAppSelector(isAuthorized);

  if (!isAuthorizedUser) {
    navigation.replace('AuthLogin');
  }

  return <>{children}</>;
}

export default AuthGuard;
