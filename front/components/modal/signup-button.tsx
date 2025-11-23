
type Props = {
    onClick: () => void;
}

export function SignupButton ({onClick}: Props) {
    return (
    <div
    onClick={() => onClick()}
    className="w-32 mx-auto mt-4">
        <button className=" bg-green h-12 w-32 radius-2">
            <p className="h4">Signup</p>
        </button>
    </div>
    )
}

export default SignupButton;