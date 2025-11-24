"useclient";
import React, { useState, useEffect } from 'react';
import LoginAttention from './loginattention-modal';
import LoginModal from './loginModal';
import SignupModal from './signup-model';
import { PassThrough } from 'stream';

const modalState = {
    none: null,
    close: 'close',
    loginAttention: 'loginAttention',
    login: 'login',
    signup: 'signup',
    submit: 'submit'
}

type Props = {
    isClick:boolean;
    onClickSubmit:() => void;
    onCloseModal:() => void;
}

export default function ModalSwitcher({isClick, onClickSubmit, onCloseModal}: Props) {
    const [activeModal, setActiveModal] = useState<string | null>(modalState.none);
    const loginModal = () => setActiveModal(modalState.login);
    const signupModal = () => setActiveModal(modalState.signup);
    const onSubmit = () => setActiveModal(modalState.submit);

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
                return <LoginAttention
                onClose={() => onCloseModal()}
                onSwitchLogin={loginModal}
                />;
            case modalState.login:
                return <LoginModal
                onClose={() => onCloseModal()}
                onSwitchSignup={signupModal}
                onSubmit={() => onClickSubmit()}
                />;
            case modalState.signup:
                return <SignupModal
                onClose={() => onCloseModal()}
                onSwitchLogin={loginModal}
                onSubmit={() => onClickSubmit()}
                />;
            default:
                return null;
    }
    }
    return (
        <div>
            {renderModal()}
        </div>
    )

}