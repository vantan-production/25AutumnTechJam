"use client";
import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  Marker,
  LoadScript,
  useJsApiLoader,
} from "@react-google-maps/api";
import { Shop } from "../../api/shop";
import { useRouter } from "next/navigation";

const sizeStyele = {
  width: "100vw",
  height: "100vh",
};

const center = {
  lat: 35.1707,
  lng: 136.8816,
};

const mapStyles = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#ebe3cd",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#523735",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#f5f1e6",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#c9b2a6",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#dcd2be",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#ae9e90",
      },
    ],
  },
  {
    featureType: "landscape.natural",
    elementType: "geometry",
    stylers: [
      {
        color: "#dfd2ae",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      {
        color: "#dfd2ae",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#93817c",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#a5b076",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#447530",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        color: "#f5f1e6",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      {
        color: "#fdfcf8",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#f8c967",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#e9bc62",
      },
    ],
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "geometry",
    stylers: [
      {
        color: "#e98d58",
      },
    ],
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#db8555",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#806b63",
      },
    ],
  },
  {
    featureType: "transit.line",
    elementType: "geometry",
    stylers: [
      {
        color: "#dfd2ae",
      },
    ],
  },
  {
    featureType: "transit.line",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#8f7d77",
      },
    ],
  },
  {
    featureType: "transit.line",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#ebe3cd",
      },
    ],
  },
  {
    featureType: "transit.station",
    elementType: "geometry",
    stylers: [
      {
        color: "#dfd2ae",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#b9d3c2",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#92998d",
      },
    ],
  },
];

type ShopData = {
  id: number;
  lat: number;
  lng: number;
  name: string;
};

type GoogleMapComponentProps = {
  className?: string;
  onMapIntercepted?: () => void;
  onFilteredShopsChange?: (shops: any[]) => void;
};

export default function GoogleMapComponent({
  className,
  onMapIntercepted,
}: GoogleMapComponentProps) {
  const [shops, setShops] = useState<ShopData[]>([]);
  const router = useRouter();

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_KEY,
  });
  useEffect(() => {
    const fetchShops = async () => {
      try {
        const res = await Shop();
        if (res.success) {
          setShops(
            res.data.map((shop) => ({
              id: shop.id,
              lat: shop.latitude,
              lng: shop.longitude,
              name: shop.name,
            }))
          );
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchShops();
  }, []);

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_API_KEY || ""}>
      <GoogleMap
        mapContainerStyle={sizeStyele}
        center={center}
        zoom={13}
        options={{
          styles: mapStyles,
          streetViewControl: false,
        }}
      >
        {shops.map((shop) => (
          <Marker
            key={shop.id}
            position={{
              lat: shop.lat,
              lng: shop.lng,
            }}
            title={shop.name}
            icon={{
              path: 0,
              fillColor: "#96514D",
              fillOpacity: 0.8,
              strokeColor: "#FFF7EC",
              strokeOpacity: 0.5,
              strokeWeight: 3,
              scale: 10,
            }}
            onClick={() => {
              router.push(`/shop-info?id=${shop.id}`);
            }}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}
