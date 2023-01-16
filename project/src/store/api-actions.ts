import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { Quest } from '../types/quest';
import { getQuests, getQuest } from './action';
import { APIRoute } from '../const';

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
