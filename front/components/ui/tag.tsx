type Props = {
    content: string;
}

export function Tag({content}: Props) {
    return(
        <div className="w-fit px-2 py-1 text-md rounded-1 bg-beige">
            {content}
        </div>
    )
}

export default Tag;