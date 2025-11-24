"use client";
import React, { useState, useEffect } from "react";
import LoginAttention from "./login-attention-modal";
import LoginModal from "./login-modal";
import SignupModal from "./signup-modal";

const modalState = {
  none: null,
  close: "close",
  loginAttention: "loginAttention",
  login: "login",
  signup: "signup",
  submit: "submit",
};

type Props = {
  isClick: boolean;
  onClickSubmit: () => void;
  onCloseModal: () => void;
};

export default function ModalPage({
  isClick,
  onClickSubmit,
  onCloseModal,
}: Props) {
  const [activeModal, setActiveModal] = useState<string | null>(
    modalState.none
  );
  const loginModal = () => setActiveModal(modalState.login);
  const signupModal = () => setActiveModal(modalState.signup);

  const onSubmit = () => {
    setActiveModal(modalState.submit);
    onClickSubmit();
  };

  useEffect(() => {
    if (isClick === true) {
      setActiveModal(modalState.loginAttention);
    } else {
      setActiveModal(modalState.none);
    }
  }, [isClick]);

  const renderModal = (): React.ReactNode => {
    switch (activeModal) {
      case modalState.loginAttention:
        return (
          <LoginAttention
            onClose={() => onCloseModal()}
            onSwitchLogin={loginModal}
          />
        );
      case modalState.login:
        return (
          <LoginModal
            onClose={() => onCloseModal()}
            onSwitchSignup={signupModal}
            onSubmit={onSubmit}
          />
        );
      case modalState.signup:
        return (
          <SignupModal
            onClose={() => onCloseModal()}
            onSwitchLogin={loginModal}
            onSubmit={onSubmit}
          />
        );
      default:
        return null;
    }
  };

  return <div>{renderModal()}</div>;
}

