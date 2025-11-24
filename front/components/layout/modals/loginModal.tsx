"use client";
import React, { useState } from "react";

import LoginButton from "../../features/modal-components/login-button";
import SignupSwitch from "../../features/modal-components/signup-switchbutton";
import ModalEmail from "../../features/modal-components/modal-email";
import ModalPass from "../../features/modal-components/modal-password";

type Props = {
    onClose: () => void;
    onSwitchSignup: () => void;
    onSubmit: () => void;
}

export default function LoginModal({onClose, onSwitchSignup, onSubmit}: Props) {
    return(
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
        <div className="relative w-fit h-fit px-10 py-2 rounded-3 flex flex-col gap-4 shadow-xl bg-white">
            <div
                onClick={() => onClose()}
                className="absolute p-2 top-2 right-2">
                <img className="w-6  h-6" src="images/xx4.png" alt="x"/>
            </div>
            <div className="w-auto h-6"/>
            <div className="flex flex-col">
                <ModalEmail/>
                <ModalPass/>
            </div>
            <div className="flex flex-col gap-y-1 mt-4">
                <LoginButton onClick={() => onSubmit()}></LoginButton>
                <SignupSwitch onClick={() => onSwitchSignup()}></SignupSwitch>
            </div>
        </div>
        </div>

    )
}