import {createReducer} from '@reduxjs/toolkit';
import { Quest } from '../types/quest';
import { Booking } from '../types/booking';
import { MyReservationsData } from '../types/user-data';
import { getQuests, getQuest, getBookingInfo, requireAuthorization, getMyReservations } from './action';
import { AuthorizationStatus } from '../const';

type InitialState = {
  quests: Quest[];
  quest: Quest | null;
  bookingInfo: Booking | null;
  authorizationStatus: AuthorizationStatus;
  userEmail: string | null;
  reservations: MyReservationsData[] | null;
}

const initialState: InitialState = {
  quests: [],
  quest: null,
  bookingInfo: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  userEmail: null,
  reservations: [],
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
    })
    .addCase(getMyReservations, (state, action) => {
      const { reservations } = action.payload;
      state.reservations = reservations;
    });
});

export {reducer};
