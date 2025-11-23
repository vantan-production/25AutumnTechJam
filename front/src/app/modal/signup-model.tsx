"use client";
import React, { useState } from "react";

import ModalEmail from "../../../components/modal/modal-email";
import ModalPass from "../../../components/modal/modal-password";
import ConfirmPass from "../../../components/modal/password-confirmbutton";
import SignupButton from "../../../components/modal/signup-button";
import LoginSwitch from "../../../components/modal/login-switchbutton";

export default function SignupModal() {
    const [open, setOpen] = useState(true);

    if (!open) return null;

    return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
        <div className="bg-white w-80 h-88 rounded-2xl p-6 pt-14 shadow-xl relative">
        <button
            onClick={() => setOpen(false)}
            className="block w-11 h-11 absolute top-3 right-3 text-xl"
        >
            <img src="../../images/x.png" alt="close" className="w-6 h-6 m-auto" />
        </button>
        <div className="mt-6 ">
            <ModalEmail/>
            <ModalPass/>
            <ConfirmPass></ConfirmPass>
            <SignupButton></SignupButton>
            <LoginSwitch></LoginSwitch>
        </div>
        </div>
    </div>
    );
}
