"use client";
import React from "react";

import LoginButton from "./login-button";
import SignupSwitch from "./signup-switchbutton";
import { login } from "../../api/auth/login";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

type Props = {
  onClose: () => void;
  onSwitchSignup: () => void;
  onSubmit: () => void;
};

export default function LoginModal({
  onClose,
  onSwitchSignup,
  onSubmit,
}: Props) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const response = await login({
      email,
      password,
    });

    if (response.success && response.data) {
      Cookies.set("token", response.data.token, { path: "/" });
      if (response.data.user_id) {
        Cookies.set("user_id", response.data.user_id.toString(), { path: "/" });
      }
      if (response.data.user_name) {
        Cookies.set("user_name", response.data.user_name, { path: "/" });
      }
      router.push("/top");
    } else {
      console.error(response.message || "ログインに失敗しました");
    }
  };
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="relative w-fit h-fit px-10 py-2 rounded-3 flex flex-col gap-4 shadow-xl bg-white">
        <div onClick={() => onClose()} className="absolute p-2 top-2 right-2">
          <img className="w-6  h-6" src="/images/xx4.png" alt="x" />
        </div>
        <div className="w-auto h-6" />
        <div className="flex flex-col">
          <div className="flex border-2 border-green w-60 h-10 mt-4 mx-auto rounded-md">
            <img
              className="w-6 h-6 my-auto mx-2"
              src="images/mail.png"
              alt="email"
            />
            <input
              type="text"
              placeholder="Email"
              className="p w-full text-green"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex border-2 border-green w-60 h-10 mt-4 mx-auto rounded-md">
            <img
              className="w-6 h-6 my-auto mx-2"
              src="images/lock.png"
              alt="lock"
            />
            <input
              type="text"
              placeholder="Password"
              className="p w-full text-green"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-1 mt-4">
          <LoginButton onClick={handleLogin}></LoginButton>
          <SignupSwitch onClick={() => onSwitchSignup()}></SignupSwitch>
        </div>
      </div>
    </div>
  );
}
