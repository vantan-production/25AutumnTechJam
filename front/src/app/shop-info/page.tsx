import Image from 'next/image';

export default function Page() {
    return (
        <div>
            <div className="flex justify-center flex-col my-1">
                <div className="flex gap-2 overflow-x-auto px-2">
                <Image src="/img/img1.png" width={110} height={110} alt="image1" className=" w-[110px] h-[110px]"/>
                <Image src="/img/image2.png" width={110} height={110} alt="image2" className=" w-[110px] h-[110px]"/>
                <Image src="/img/img1.png" width={110} height={110} alt="image1" className=" w-[110px] h-[110px]"/>
                <Image src="/img/image2.png" width={110} height={110} alt="image2" className=" w-[110px] h-[110px]"/>
                <Image src="/img/img1.png" width={110} height={110} alt="image1" className=" w-[110px] h-[110px]"/>
                </div>
            </div>
        <div className="flex justify-center items-center my-1">    
            <div className="bg-green h-fit w-[377px] rounded-2xl">
                <div className="grid grid-cols-[4fr_6fr]  text-black pl-4 pb-3 pt-12">
                    <p className="font-bold text-xl">explanation</p>
                    <p>A Showa-era cafe that
                        will make you feel like
                        you've traveled back in
                        time</p>
                </div>
                
                <div className="bg-black h-[0.3px] w-[360px] mx-auto"></div>

                <div className="grid grid-cols-[4fr_6fr]  text-black pl-4 pt-3 pb-3">
                    <p className="font-bold text-xl">Distance from<br></br> 
                    Nagoya Station</p>
                    <p>6 minutes walk</p>
                </div>
                
                <div className="bg-black h-[0.3px] w-[360px] mx-auto"></div>

                <div className="grid grid-cols-[4fr_6fr]   text-black pl-4 pt-3 pb-3">
                    <p className="font-bold text-xl">Address</p>
                    <p>4-1-4 Taiko, Nakamura-ku,<br></br>
                    Nagoya City,Aichi<br></br>
                    Prefecture, 453-0801</p>
                </div>

                <div className=" bg-black h-[0.3px] w-[360px] mx-auto"></div>

                <div className="grid grid-cols-[4fr_6fr]   text-black pl-4 pt-3 pb-3">
                    <p className="font-bold text-xl">Business hours</p>
                    <p>AM 7:30 ～PM 15:00</p>
                </div>

                <div className="bg-black h-[0.3px] w-[360px] mx-auto"></div>

                <div className="grid grid-cols-[4fr_6fr]  text-black pl-4 pt-3 pb-3">
                    <p className="font-bold text-xl">budget</p>
                    <p>¥ 1,000 ~ 5,000</p>
                </div>

                <div className="bg-black h-[0.3px] w-[360px] mx-auto"></div>

                <div className="grid grid-cols-[4fr_6fr]   text-black pl-4 pt-3 pb-2">
                    <p className="font-bold text-xl">Tell</p>
                    <p>052-452-5113</p>
                </div>
            </div>
        </div>
        </div>
    );
}