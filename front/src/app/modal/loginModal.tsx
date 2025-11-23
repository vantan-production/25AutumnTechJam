"use client";
import React, { useState } from "react";

import LoginButton from "../../../components/modal/login-button";
import SignupSwitch from "../../../components/modal/signup-switchbutton";
import ModalEmail from "../../../components/modal/modal-email";
import ModalPass from "../../../components/modal/modal-password";

export default function LoginModal() {

    const[open, setOpen] = useState(true);

    if (!open) return null;

    return(
        <div className="relative w-fit h-fit px-10 py-2 rounded-3 flex flex-col gap-4 bg-white">
            <div
            onClick={() => setOpen(false)}
            className="absolute p-2 top-2 right-2">
                <img className="w-6  h-6" src="images/xx4.png" alt="x"/>
            </div>
            <div className="w-auto h-6"/>
            <div className="flex-col">
                <ModalEmail/>
                <ModalPass/>
            </div>
            <div className="flex flex-col gap-y-1 mt-4">
                <LoginButton></LoginButton>
                <SignupSwitch></SignupSwitch>
            </div>

        </div>
    )
}