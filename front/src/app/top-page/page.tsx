import { Card } from "../../../components/features/card";

export default function TopPage() {
    const items = [
        { 
        shopName: "shop-name", 
        businessHours: "7:00-11:30", 
        parse: "¥800~100", 
        explanation: "This shop is beautiful and traditional."  
        },
    ];

    const repeatedItems = Array.from({ length: 10 }, () => items[0]);
    return (
        <div className="space-y-4">
        {repeatedItems.map((item, index) => (
            <Card
            key={index}
            shopName={item.shopName}
            businessHours={item.businessHours}
            parse={item.parse}
            explanation={item.explanation}
            />
        ))}
        </div>
    );
}