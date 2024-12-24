import React, { Component, useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";

let directionsService = [];
let directionsRenderer = [];

let mapInstance = [];
let mapAPI = [];

let walkPath = [];

let hasPath = false;

const GoogleMap = () => {
  const [currentLocationData, setLocationData] = useState({
    currentLocation: { lat: 40.798214, lng: -77.859909 },
    currentMarker: [],
  });

  const [destinationMarker, setDestinationMarker] = useState("");

  const findCurrentPos = (map, maps) => {
    navigator?.geolocation.getCurrentPosition(
      ({ coords: { latitude: lat, longitude: lng } }) => {
        const pos = { lat, lng };

        let marker = new maps.Marker({
          position: pos,
          map,
        });

        setLocationData({
          currentLocation: pos,
          currentMarker: marker,
        });
      }
    );

    mapInstance = map;
    mapAPI = maps;

    directionsService = new mapAPI.DirectionsService();
    directionsRenderer = new mapAPI.DirectionsRenderer({
      suppressMarkers: true,
    });

    directionsRenderer.setMap(mapInstance);
  };

  const createDestinationMarker = (e) => {
    const pos = { lat: e.lat, lng: e.lng };

    if (!destinationMarker) {
      setDestinationMarker(
        new mapAPI.Marker({
          position: pos,
          map: mapInstance,
          icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
        })
      );
    } else {
      destinationMarker.setPosition(pos);
    }

    if (!hasPath) {
      directionsService.route(
        {
          origin: currentLocationData.currentLocation,
          destination: pos,
          avoidTolls: true,
          avoidHighways: true,
          travelMode: mapAPI.TravelMode.WALKING,
        },
        function (response, status) {
          if (status == mapAPI.DirectionsStatus.OK) {
            directionsRenderer.setDirections(response);

            walkPath = response.routes[0].overview_path;
            hasPath = true;

            const moveAlongPath = (path, index) => {
              setTimeout(() => {
                if (index >= path.length) {
                  hasPath = false;

                  setLocationData({
                    currentLocation: {
                      lat: path[index - 1].lat(),
                      lng: path[index - 1].lng(),
                    },
                  });
                  return;
                }

                currentLocationData.currentMarker.setPosition(path[index]);
                moveAlongPath(path, index + 1, 0);
              }, 500);
            };

            setTimeout(() => {
              moveAlongPath(walkPath, 0);
            }, 7000);
          } else {
            window.alert(status);
          }
        }
      );
    }
  };

  return (
    <div style={{ height: "500px", width: "500px" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        yesIWantToUseGoogleMapApiInternals
        center={currentLocationData.currentLocation}
        zoom={17}
        onGoogleApiLoaded={({ map, maps }) => findCurrentPos(map, maps)}
        onClick={(e) => createDestinationMarker(e)}
      ></GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
