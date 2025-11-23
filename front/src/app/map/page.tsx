"use client";
import Header from "../../../components/layout/header";
import Navbar from "../../../components/layout/navbar";
import GoogleMapComponent from "../../../components/features/google-map";

export default function Map() {
  return (
    <div className="bg-beige w-full h-screen">
      <Header
        getGenreTab={false}
        getLanguage={true}
        getSearch={true}
        getBackButton={false}
      />
      <GoogleMapComponent className="w-[393px] h-full" />
      <Navbar />
    </div>
  );
}
