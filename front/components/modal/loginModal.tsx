import LoginButton from "./login-button";
import SignupSwitch from "./signup-switchbutton";
import ModalEmail from "./modal-email";
import ModalPass from "./modal-password";

export default function LoginModal() {
    return(
        <div className="relative w-fit h-fit px-10 py-2 rounded-3 flex flex-col gap-4 bg-white">
            <div className="absolute p-2 top-2 right-2">
                <img className="w-6  h-6" src="images/xx4.png" alt="x"/>
            </div>
            <div className="w-auto h-6"/>
            <div className="flex-col">
                <ModalEmail></ModalEmail>
                <ModalPass></ModalPass>
            </div>
            <div className="flex flex-col gap-y-1 mt-4">
                <LoginButton></LoginButton>
                <SignupSwitch></SignupSwitch>
            </div>

        </div>
    )
}