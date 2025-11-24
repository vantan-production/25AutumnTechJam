"use client";
import React, { useState } from "react";

import ModalEmail from "../../../components/modal-components/modal-email";
import ModalPass from "../../../components/modal-components/modal-password";
import ConfirmPass from "../../../components/modal-components/password-confirmbutton";
import SignupButton from "../../../components/modal-components/signup-button";
import LoginSwitch from "../../../components/modal-components/login-switchbutton";

type Props = {
    onClose:() => void;
    onSwitchLogin:() => void;
    onSubmit:() => void;
}

export default function SignupModal({onClose, onSwitchLogin, onSubmit}: Props) {
    return (
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
                <ConfirmPass/>
            </div>
                <div className="flex flex-col gap-y-1 mt-4">
                    <SignupButton onClick={() => onSubmit()}></SignupButton>
                    <LoginSwitch onClick={() => onSwitchLogin()}></LoginSwitch>
                </div>
        </div>
    </div>
    );
}
