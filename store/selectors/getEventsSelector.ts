import { createSelector } from '@reduxjs/toolkit';
import { DefaultRootState } from 'react-redux';
import { EventsState } from '../reducers/events';

export const getEventsSelector = createSelector((state: DefaultRootState) => state.events, ({ events }: EventsState) => events);
