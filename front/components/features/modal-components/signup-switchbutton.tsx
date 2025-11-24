
type Props = {
    onClick: () => void;
}

export function SignupSwitch({onClick}: Props) {
    return (
        <div
        onClick={() => onClick()}
        className="w-14 mx-auto">
            <button>
                <p className="h4 underline text-black">Signup</p>
            </button>
        </div>
    )
}

export default SignupSwitch;