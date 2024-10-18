import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon, divIcon, point } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { markers } from "../../constants";

export default function Location() {
  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/256/14831/14831599.png",
    iconSize: [100, 100],
  });
  const customClusterIcon = (cluster) => {
    return new divIcon({
      html: `<div >${cluster.getChildCount()}</div>`,

      iconSize: point(33, 33, true),
    });
  };

  return (
    <div
      className="lg:py-28 md:py-16 py-28 w-screen h-screen flex flex-col justify-center items-center"
      id="location"
    >
      <div className="flex flex-col gap-5 justify-center items-center w-[70%] h-[90%] lg:w-[80%] md:h-[100%] md:w-[90%] sm:w-[85%]">
        <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold ">
          Our Location
        </h1>
        <div className=""></div>
        <MapContainer center={[48.8566, 2.3522]} zoom={13}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MarkerClusterGroup
            chunkedLoading
            iconCreateFunction={customClusterIcon}
          >
            {markers.map((marker, index) => (
              <Marker key={index} position={marker.geocode} icon={customIcon}>
                <Popup>
                  <h1 className="text-xl font-bold">
                    We are in {marker.place}, come and join us.
                  </h1>
                </Popup>
              </Marker>
            ))}
          </MarkerClusterGroup>
        </MapContainer>
      </div>
    </div>
  );
}
