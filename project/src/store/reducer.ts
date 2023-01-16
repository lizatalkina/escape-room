import {createReducer} from '@reduxjs/toolkit';
import { Quest } from '../types/quest';
import { Booking } from '../types/booking';
import { getQuests, getQuest, getBookingInfo, requireAuthorization } from './action';
import { AuthorizationStatus } from '../const';

type InitialState = {
  quests: Quest[];
  quest: Quest | null;
  bookingInfo: Booking | null;
  authorizationStatus: AuthorizationStatus;
  userEmail: string | null;
}

const initialState: InitialState = {
  quests: [],
  quest: null,
  bookingInfo: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  userEmail: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getQuests, (state, action) => {
      const { quests } = action.payload;
      state.quests = quests;
    })
    .addCase(getQuest, (state, action) => {
      const { quest } = action.payload;
      state.quest = quest;
    })
    .addCase(getBookingInfo, (state, action) => {
      const { bookingInfo } = action.payload;
      state.bookingInfo = bookingInfo;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export {reducer};
