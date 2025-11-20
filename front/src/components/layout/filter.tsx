export const Filter = () => {
    return (
        <div className="fixed bottom-0 bg-beige w-[393px] h-[474px] rounded-tl-[50px] rounded-tr-[50px]">
            <div className="flex justify-center items-center">
                <div className="bg-black w-[138px] h-[3px] mt-[8.5px]"></div>
            </div>


            <div className="text-black mt-11 ml-11 text-xl">
                Staying time
            </div>
            
            
            <div className="flex gap-2 text-black mt-2 ml-11">
                <div className="text-base bg-white w-[69px] py-2 px-2 rounded-xl">
                    30 min
                </div>
                
                <div className="text-base bg-white w-[69px] py-2 px-2 rounded-xl">
                    60 min
                </div>

                <div className="text-base bg-white w-[69px] py-2 px-2 rounded-xl">
                    90 min
                </div>
            </div>

            
            <div className="flex gap-2 text-black mt-2 ml-11">
                <div className="text-base bg-white w-[76px] py-2 px-2 rounded-xl border-green">
                    120 min
                </div>
                
                <div className="text-base bg-white w-[76px] py-2 px-2 rounded-xl">
                    150 min
                </div>
                
                <div className="text-base bg-white w-[76px] py-2 px-2 rounded-xl">
                    180 min
                </div>
            </div>
            
            
            <div className="text-black mt-12 ml-11 text-xl">
                Staying date
            </div>
            
            
            <div className="flex gap-2 text-black ml-11 mt-2">
                <div className="flex items-center justify-center text-base bg-white w-12 h-[35px] py-2 px-2 rounded-xl">
                    11
                </div>
                
                <div className="w-[9px] h-[29px] text-2xl">
                    /
                </div>

                <div className="flex items-center justify-center text-base bg-white w-12 h-[35px] py-2 px-2 rounded-xl">
                    25
                </div>
                
                <div className="w-[9px] h-[29px] text-2xl">
                    /
                </div>

                <div className="flex items-center justify-center text-base bg-white w-[70px] h-[35px] py-2 px-2 rounded-xl">
                    2025
                </div>
            </div>

            
            <div className="text-black mt-12 ml-11 text-xl">
                Budget
            </div>
            
            
            <div className="flex gap-60 text-black ml-11 mt-1.5">
                <div className="text-xs">¥0</div>
                <div className="text-xs">¥20,000</div>
            </div>

            
            
            <div className="flex gap-2 text-black ml-11 mt-2">
                <div className="text-2xl">
                    ¥
                </div>
                <div className="flex items-center justify-center text-base bg-white w-[27px] h-[35px] py-2 px-2 rounded-xl">
                    0
                </div>

                <div className="text-2xl">
                    ~
                </div>

                <div className="flex items-center justify-center text-base bg-white w-[71px] h-[35px] py-2 px-2 rounded-xl">
                    20,000
                </div>
            </div>

        </div>

    );
}