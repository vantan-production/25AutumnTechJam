"use client";
import { useState } from "react";
import { useRouter } from "next/router";

import TabBar from "../navbar";
import ModalSwitcher from "./modal-view-switch"

export function ModalNavbar() {
    const[isBookmarkClick, setIsBookmarkClick] = useState(false);
    const[isSubmit, setIsSubmit] = useState(false);
    const router = useRouter();
    const isModalOpen = () => {
        if (!isSubmit) {
        setIsBookmarkClick(!isBookmarkClick);
        } else {
            router.push("/bookmark")
        }};
    const onSubmition = () => {
        setIsSubmit(true);
        setIsBookmarkClick(false);
    }


    return(
        <div className="w-screen h-screen bg-beige">
            <ModalSwitcher
            isClick={isBookmarkClick}
            onClickSubmit={() => onSubmition()}
            onCloseModal={() => isModalOpen()}
            />
            <TabBar onBookmarkClick={() => isModalOpen()}/>
        </div>
    )
}

export default ModalNavbar;