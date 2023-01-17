import { Quest } from './quest';
import { Location } from './booking';

export type UserData = {
  email: string;
  token: string;
};

export type AuthData = {
  login: string;
  password: string;
};

export type ReservationData = {
  id: number;
  date: string;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  locationId: number;
  questId: number;
};

export type MyReservationsData = {
  id: number;
  date: string;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  location: Location;
  quest: Quest;
};
