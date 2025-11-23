type Props = {
    onClick: () => void;
}

export function LaterButton ({onClick}: Props) {
    return (
        <div
        onClick={() => onClick()}
        className="w-32 h-12 mx-auto mt-4">
            <button className="w-full h-full border-2 border-green bg-withte rounded-lg">
                <p className="h4">Later</p>
                </button>
        </div>
    )
}

export default LaterButton;