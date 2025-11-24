"use client";
import { useState } from "react";

import TabBar from "../../../components/layout/navbar";
import ModalSwitcher from "./modal-view-switch"

export function ModalNavbar() {
    const[isBookmarkClick, setIsBookmarkClick] = useState(false);
    const[isSubmit, setIsSubmit] = useState(false);
    const isModalOpen = () => {
        if (!isSubmit) {
        setIsBookmarkClick(!isBookmarkClick);
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