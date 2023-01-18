import { LeafletMouseEvent } from 'leaflet';

export type MarkerLocation = {
  latitude: number;
  longitude: number;
  locationId: number;
  address: string;
};

export type MapProps = {
  locations: MarkerLocation[];
  selectedPoint: MarkerLocation | undefined;
  onClickFunction: (e: LeafletMouseEvent) => void;
};
