import { createSelector } from '@reduxjs/toolkit';
import { DefaultRootState } from 'react-redux';

import { UserState } from '../reducers/user';

export const getUserSelector = createSelector((state: DefaultRootState) => state.user, ({ user }: UserState) => user);
export const isAuthorized = createSelector((state: DefaultRootState) => state.user, ({ user }: UserState) => !!user);
export const loadingUser = createSelector((state: DefaultRootState) => state.user, ({ loading }: UserState) => loading);
