import {createAction} from '@reduxjs/toolkit';
import { Quest } from '../types/quest';
import { AppRoute } from '../const';

export const getQuests = createAction<{
  quests: Quest[];
}
>('quest/getQuests');

export const redirectToRoute = createAction<AppRoute>('quest/redirectToRoute');

export const getQuest = createAction<{
  quest: Quest;
}
>('quest/getQuest');
