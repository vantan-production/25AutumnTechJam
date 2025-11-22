"use client";
import React, { useState } from "react";

import LoginBuuton from "../../../components/modal/login-button";
import LaterButton from "../../../components/modal/later-button";

export default function LoginAttention() {
    const [open, setOpen] = useState(true);

    if (!open) return null;

    return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
        <div className="bg-white w-80 h-auto rounded-2xl p-6 pt-14 shadow-xl relative">

        {/* ✖ ボタン */}
        <button
            onClick={() => setOpen(false)}
            className="block w-11 h-11 absolute top-3 right-3 text-xl"
        >
            <img
            src="../../images/x.png"
            alt="close"
            className="w-6 h-6 m-auto"
            />
        </button>

        {/* 🔽 ログイン促しテキスト */}
        <div className="text-center text-lg leading-relaxed mt-4">
            You need to{" "}
            <span className="text-green font-semibold">login</span> or <br />
            <span className="text-green font-semibold"> sign up </span>
            to bookmark coffee shop.
        </div>

        {/* ボタン２つ */}
        <div className="mt-6 flex gap-4 justify-center">
            <LoginBuuton />
            <LaterButton />
        </div>

        </div>
    </div>
    );
}
