import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { Quest } from '../types/quest';
import { Booking } from '../types/booking';
import { getQuests, getQuest, getBookingInfo, requireAuthorization, redirectToRoute } from './action';
import { APIRoute, AuthorizationStatus, AppRoute } from '../const';
import { UserData, AuthData, ReservationData } from '../types/user-data';
import { saveToken, dropToken } from '../services/token';

export const fetchQuestsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchQuests',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Quest[]>(APIRoute.Quests);
    dispatch(getQuests({
      quests: data
    }));
  },
);

export const fetchQuestAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchQuest',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Quest>(`${APIRoute.Quests}/${id}`);
    dispatch(getQuest({
      quest: data
    }));
  },
);

export const fetchQuestBookingAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchQuestBooking',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Booking>(`${APIRoute.Quests}/${id}/booking`);
    dispatch(getBookingInfo({
      bookingInfo: data
    }));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try{
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.MyReservations));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);

export const postReservationData = createAsyncThunk<void, ReservationData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/postBooking',
  async(reservationData, { dispatch, extra: api }) => {
    await api.post<ReservationData>(`${APIRoute.Quests}/${reservationData.questId}/booking`, reservationData);
  }
);
