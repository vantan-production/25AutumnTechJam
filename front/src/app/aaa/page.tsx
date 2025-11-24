"use client";
import { useState } from "react";
import SignupModal from "../../../components/modal-components/signup-modal";

export default function Page() {
  const [showModal, setShowModal] = useState(true);

  return (
    <div>
      {showModal && (
        <SignupModal
          onClose={() => setShowModal(false)}
          onSwitchLogin={() => {
            console.log("Switch to login");
            setShowModal(false);
          }}
        />
      )}
    </div>
  );
}
