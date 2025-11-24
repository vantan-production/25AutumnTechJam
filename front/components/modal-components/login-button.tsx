
type Props = {
    onClick: () => void;
}

export function LoginButton ({onClick}: Props) {
    return (
        <div
        onClick={() => onClick()}
        className="w-32 mx-auto">
            <button className="bg-green h-12 w-32 radius-2">
                <p className="h4">Login</p>
                </button>
        </div>
    )
}

export default LoginButton;