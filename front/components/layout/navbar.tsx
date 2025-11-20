"use client";   // これが先頭にあるか確認

export function TabBar () {
    return (
        <div className="flex bg-beige w-80 h-14 m-auto rounded-lg">
            <img className="w-8 h-8" src="images/coffeeShopInner.png" alt="home" />
            <div>
                <img className="w-8 h-8" src="images/mapInner.png" alt="map" />
            </div>
            <img className="w-8 h-8" src="images/bookmarkInner.png" alt="keep" />
        </div>
    )
}

export default TabBar;