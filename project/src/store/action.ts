import {createAction} from '@reduxjs/toolkit';
import { Quest } from '../types/quest';
import { Booking } from '../types/booking';
import { MyReservationsData } from '../types/user-data';
import { AppRoute, AuthorizationStatus, QuestTypes, Difficulties } from '../const';

export const getQuests = createAction<{
  quests: Quest[];
}
>('quest/getQuests');

export const redirectToRoute = createAction<AppRoute>('quest/redirectToRoute');

export const getQuest = createAction<{
  quest: Quest;
}
>('quest/getQuest');

export const getBookingInfo = createAction<{
  bookingInfo: Booking;
}
>('quest/getBookingQuest');

export const requireAuthorization = createAction<AuthorizationStatus
>('user/requireAuthorization');

export const getMyReservations = createAction<{
  reservations: MyReservationsData[];
}
>('quest/getMyReservations');

export const changeQuestType = createAction<{
  typeFilter: QuestTypes;
}
>('quest/changeQuestType');

export const changeQuestDifficulty = createAction<{
  difficultyFilter: Difficulties;
}
>('quest/changeQuestDifficulty');
