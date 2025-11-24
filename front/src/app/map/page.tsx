"use client";
import Header from "../../../components/layout/header";
import Navbar from "../../../components/layout/navbar";
import GoogleMapComponent from "../../../components/features/google-map";
import { useState } from "react";
import ModalNavbar from "../modal/ModalNavbar";

export default function Map() {
  const [isMapIntercepted, setIsMapIntercepted] = useState(false);

  return (
    <div className="bg-beige w-full h-screen">
      <Header
        getGenreTab={false}
        getLanguage={true}
        getSearch={true}
        getBackButton={false}
        className="h-[188px]"
      />
      <GoogleMapComponent
        className="w-[393px] h-full"
        onMapIntercepted={() => setIsMapIntercepted(true)}
      />
      <ModalNavbar></ModalNavbar>
    </div>
  );
}
