
type Props = {
    onClick: () => void;
}

export function LoginSwitch ({onClick}: Props) {
    return(
        <div
        onClick={() => onClick()}
        className="w-14 mx-auto mt-4">
            <button>
                <p className="h4 underline">Login</p>
            </button>
        </div>
    )
}

export default LoginSwitch;