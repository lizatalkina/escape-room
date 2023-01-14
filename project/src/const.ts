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

