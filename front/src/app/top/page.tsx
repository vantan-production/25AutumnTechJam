import Bookmark from "../../../components/ui/bookmark";
import Card from "../../../components/features/card";

function Page() {
    return (
        <div>
            <Card
            shopName="shop-name"
            businessHours="8:00~18:00"
            parse="¥800~2,000"
            explanation="This shop is beautiful and traditional."
            ></Card>
        </div>

    )
}

export default Page;