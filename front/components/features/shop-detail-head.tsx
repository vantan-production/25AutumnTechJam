import Tag from "../ui/tag";

type Props = {
    shopName: string;
    tag: string[];
}

export function DetailHead({shopName, tag}: Props) {
    return(
        <div className="flex gap-x-4 mx-3 p-2 rounded-2 bg-green">
            <div className="flex flex-col gap-y-6 w-full pt-1 pl-1">
                <div className="text-black text-2xl">{shopName}</div>
                <div className="flex flex-wrap gap-1">
                    {tag.map((tag, index) => (
                        <Tag key={index}content={tag}></Tag>
                    ))}
                </div>
            </div>
            <div className="p-18 rounded-2 bg-white"></div>
        </div>
    )
}

export default DetailHead;