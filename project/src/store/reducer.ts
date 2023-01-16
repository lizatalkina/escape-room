import {createReducer} from '@reduxjs/toolkit';
import { Quest } from '../types/quest';
import { getQuests, getQuest } from './action';

type InitialState = {
  quests: Quest[];
  quest: Quest | null;
}

const initialState: InitialState = {
  quests: [],
  quest: null,
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
    });
});

export {reducer};
