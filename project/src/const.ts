import { MarkerLocation } from './types/map-data';

export const QUESTS_TYPES = [
  {id: 'all', icon: '#icon-all-quests', width: '26', type: 'Все квесты'},
  {id: 'adventure', icon: '#icon-adventure', width: '36', type: 'Приключения'},
  {id: 'horror', icon: '#icon-horror', width: '30', type: 'Ужасы'},
  {id: 'mystic', icon: '#icon-mystic', width: '30', type: 'Мистика'},
  {id: 'detective', icon: '#icon-detective', width: '40', type: 'Детектив'},
  {id: 'sciFi', icon: '#icon-sci-fi', width: '28', type: 'Sci-fi'},
];

export const QUESTS_DIFFICULTY = [
  {id: 'any', difficulty: 'Любой'},
  {id: 'easy', difficulty: 'Лёгкий'},
  {id: 'middle', difficulty: 'Средний'},
  {id: 'hard', difficulty: 'Сложный'},
];

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Contacts = '/contacts',
  Quest = '/quest/:id',
  Booking = '/quest/:id/booking',
  MyReservations = '/reservation',
}

export enum APIRoute {
  Quests = '/escape-room/quest',
  Login = '/escape-room/login',
  Logout = '/escape-room/logout',
  Reservations = '/escape-room/reservation',
}

type Translation = Record<string, string>;
export const DIFFICULTY_OPTIONS: Translation = {
  'hard': 'сложный',
  'medium': 'средний',
  'easy': 'легкий',
};

export const TYPE_OPTIONS: Translation = {
  'horror': 'ужасы',
  'mystic': 'мистика',
  'detective': 'детектив',
  'adventures': 'приключения',
  'sci-fi': 'sci-fi',
};

export const DAYS_OPTIONS: Translation = {
  'today': 'сегодня',
  'tomorrow': 'завтра',
};

export const URL_MARKER_DEFAULT = '/img/svg/pin-default.svg';

export const URL_MARKER_CURRENT = '/img/svg/pin-active.svg';

export const PASSWORD_VALIDATION_ERROR = 'Пароль должен состоять минимум из 1 буквы и 1 цифры';
export const AGREEMENT_VALIDATION_ERROR = 'Необходимо согласие на обработку персональных данных';

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const CONTACT_LOCATION: MarkerLocation = {
  latitude: 59.969718,
  longitude: 30.307523,
  locationId: 0,
};

export const MAP_ZOOM = 10;
