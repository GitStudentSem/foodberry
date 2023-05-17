import { MapContainer, TileLayer, useMap, Marker, Popup, useMapEvents } from 'react-leaflet';
import { useState } from 'react';
import 'leaflet-css';
import "./Map.scss";

export const LocationMarker = () => {
	const [position, setPosition] = useState(null)
	const map = useMapEvents({

		locationfound(e: any) {
			setPosition(e.latlng)
			map.locate()
			map.flyTo(e.latlng, map.getZoom())
		},
	})

	return position === null ? null : (
		<Marker position={position} >
			<Popup>You are here </Popup>
		</Marker>
	)
}
