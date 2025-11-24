
type Props = {
    onClick: () => void;
}

export function LoginSwitch ({onClick}: Props) {
    return(
        <div
        onClick={() => onClick()}
        className="w-14 mx-auto">
            <button>
                <p className="h4 underline text-black">Login</p>
            </button>
        </div>
    )
}

export default LoginSwitch;