type Props = {
    onClick: () => void;
}

export function BackButton({onClick}: Props) {
    return(
        <div className="w-fit px-4 py-1.5 rounded-2 bg-green" onClick={() => onClick()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 14L4 9L9 4" stroke="#FFF7EC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20 20V13C20 11.9391 19.5786 10.9217 18.8284 10.1716C18.0783 9.42143 17.0609 9 16 9H4" stroke="#FFF7EC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    )
};

export default BackButton;