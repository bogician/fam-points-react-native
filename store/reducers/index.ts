import { combineReducers } from '@reduxjs/toolkit';

import userReducer, { UserState } from '../reducers/user';
import eventsReducer, { EventsState } from '../reducers/events';

const rootReducer = combineReducers({
  user: userReducer,
  events: eventsReducer,
});

export default rootReducer;

export type TRootState = {
  user: UserState;
  events: EventsState;
};

declare module 'react-redux' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultRootState extends TRootState {
  }
}
