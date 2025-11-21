import Bookmark from "../../../components/ui/bookmark";
import Card from "../../../components/features/card";
import DetailHead from "../../../components/features/shop-detail-head";
import Tag from "../../../components/ui/tag";

function Page() {
    return (
        <div>
            {/*<Card
            shopName="shop-name"
            businessHours="8:00~18:00"
            parse="¥800~2,000"
            explanation="This shop is beautiful and traditional."
            ></Card>*/}
            <DetailHead shopName="tentaCafe" tag={['itarian','sweets','bakery','American']}></DetailHead>
        </div>

    )
}

export default Page;