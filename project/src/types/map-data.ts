export type MarkerLocation = {
  latitude: number;
  longitude: number;
  locationId: number;
};

export type MapProps = {
  locations: MarkerLocation[];
  selectedPoint: MarkerLocation | undefined;
};
