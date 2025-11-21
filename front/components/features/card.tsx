import Bookmark from "../ui/bookmark";

type Props = {
    shopName: string;
    businessHours: string;
    parse: string;
    explanation: string;
};

export function Card({shopName, businessHours, parse, explanation}: Props) {
    return (
        <div className="rounded-2 bg-green mx-3 flex p-2 gap-x-4">
            <div className="rounded-2 bg-white p-18">
            </div>
            <div className="w-full flex flex-col gap-1">
                <div className="w-full flex gap-x-4 items-center justify-between">
                    <div className="text-black text-2xl">{shopName}</div>
                    <Bookmark></Bookmark>
                </div>
                <div className="w-full flex gap-x-4 items-center justify-between">
                    <div className="text-black text-sm">{businessHours}</div>
                    <div className="bg-beige rounded-full p-1 text-black text-sm">{parse}</div>
                </div>
                <div className="text-black text-md">
                    {explanation}
                </div>
            </div>

        </div>
    )
}

export default Card;