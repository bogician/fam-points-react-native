import { createAction, createSlice } from '@reduxjs/toolkit';
import { IEvent } from '../../models/models';
import {
  getAllForUser,
} from '../actions/events';
import { EEvent } from '../constants';

export interface EventsState {
  loading: boolean;
  events: Array<IEvent> | null;
}

const initialState: EventsState = {
  loading: true,
  events: null,
};

const clearEventsState = createAction(EEvent.resetEvent);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { actions, reducer } = createSlice({
  name: 'events',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllForUser.fulfilled, (state, { payload }) => {
        if (!payload) {
          return;
        }

        state.events = payload.items as Array<IEvent>;
        state.loading = false;
      })
      .addCase(clearEventsState, () => initialState);
  },
});

export { clearEventsState };

export default reducer;
