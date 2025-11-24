"use client";
import React, { useState } from "react";

import SignupButton from "./signup-button";
import LoginSwitch from "./login-switchbutton";
import { register } from "../../api/auth/register";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

type Props = {
  onClose: () => void;
  onSwitchLogin: () => void;
  onSubmit: () => void;
};

export default function SignupModal({
  onClose,
  onSwitchLogin,
  onSubmit,
}: Props) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async () => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      const response = await register({ name, email, password });
      if (response.success && response.data) {
        // ユーザー情報をCookieに保存
        if (response.data.user_id) {
          Cookies.set("user_id", response.data.user_id.toString(), {
            path: "/",
          });
        }
        if (response.data.user_name) {
          Cookies.set("user_name", response.data.user_name, { path: "/" });
        }
        if (response.data.token) {
          Cookies.set("token", response.data.token, { path: "/" });
          router.push(`/top?token=${encodeURIComponent(response.data.token)}`);
        } else {
          router.push("/top");
        }
      } else {
        if (response.errors) {
          const errorMessages = Object.values(response.errors).flat();
          setErrorMessage(errorMessages.join(", "));
        } else {
          setErrorMessage(response.message || "ユーザー登録に失敗しました");
        }
      }
    } catch (error) {
      setErrorMessage("登録に失敗しました");
    } finally {
      setIsLoading(false);
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="w-6 h-6 my-auto mx-2"
            >
              <path
                d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13M12 17H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input
              type="text"
              placeholder="Name"
              className="p w-full text-green"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex border-2 border-green w-60 h-10 mt-4 mx-auto rounded-md">
            <img
              className="w-6 h-6 my-auto mx-2"
              src="images/mail.png"
              alt="email"
            />
            <input
              type="email"
              placeholder="Email"
              className="p w-full text-green"
              value={email}
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
              type="password"
              placeholder="Password"
              className="p w-full text-green"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex border-2 border-green w-60 h-10 mt-4 mx-auto rounded-md">
            <img
              className="w-6 h-6 my-auto mx-2"
              src="images/lock.png"
              alt="lock"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="p w-full text-green"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>
        {errorMessage && (
          <div className="text-red-500 text-sm text-center mt-2">
            {errorMessage}
          </div>
        )}
        <div className="flex flex-col gap-y-1 mt-4">
          <SignupButton
            onClick={handleRegister}
            disabled={isLoading}
          ></SignupButton>
          <LoginSwitch onClick={() => onSwitchLogin()}></LoginSwitch>
        </div>
      </div>
    </div>
  );
}
