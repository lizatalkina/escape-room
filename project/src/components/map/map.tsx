import { useRef } from 'react';
import { Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import type { MapProps } from '../../types/map-data';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';
import { useEffect } from 'react';

const defaultCustomIcon = new Icon ({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27,39],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon ({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27,39],
  iconAnchor: [20,40],
});

function Map ({ locations, selectedPoint, onClickFunction } : MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef);

  useEffect(() => {
    if (map) {
      locations.forEach((location) => {
        const marker = new Marker ({
          lat: location.latitude,
          lng: location.longitude
        });

        marker
          .setIcon(
            selectedPoint !== undefined && location.latitude === selectedPoint.latitude && location.longitude === selectedPoint.longitude
              ? currentCustomIcon
              : defaultCustomIcon
          ).on('click', onClickFunction)
          .addTo(map);
      });
    }
  }, [map, locations, selectedPoint, onClickFunction]);

  return(
    <section className = 'escape-room__map map'
      ref = {mapRef}
    >
    </section>
  );
}

export default Map;
