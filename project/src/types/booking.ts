export type AvailableTime = {
  time: string;
  isAvailable: boolean;
};

export type Slots = {
  today: AvailableTime[];
  tomorrow: AvailableTime[];
};

export type Location = {
  id: number;
  address: string;
  coords: number[];
};

export type Booking = {
  id: number;
  locations: Location[];
  slots: Slots;
};
