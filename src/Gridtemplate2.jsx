function Gridtemplate2() {
    return (
            <div className="grid justify-center items-center m-auto min-h-screen bg-[#f5f5f5]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-2 lg:grid-rows-2 sm:grid-rows-3 max-w-screen-2xl gap-5 m-auto p-4">
                {/* first block */}
                <div className="bg-[#faeee2] row-span-3  p-5 text-[24px] lg:text-[40px] font-bold rounded-2xl mb-5">
                    Create and schedule content
                    <i className="text-[#7651dc] block lg:block"> quicker</i>
                    <img src="/assets/illustration-create-post.webp" alt="create button " className="w-[200px] h-[100px]"  />
                </div>
                {/* second block */}
                <div className="bg-violet-500 col-span-2 row-span-4 text-center flex justify-center items-center font-bold text-white text-[30px] lg:text-[50px] rounded-2xl">
                    <div>
                        Social Media <span className="text-yellow-500">10x</span>
                        <div>
                            <i>Faster</i> with AI
                        </div>
                        <div className="text-[#ffcc69] text-lg">⭐⭐⭐⭐⭐</div>
                        <div className="text-lg font-medium">Over 4,000 5-star reviews</div>
                    </div>
                </div>
                {/* third block */}
                <div className="bg-[#dcd1fc] row-span-5 rounded-2xl text-[20px] lg:text-[30px] p-5 overflow-hidden lg:overflow-hidden sm:overflow-hidden ">
                    Schedule to social media
                    <img src="/assets/3rdimage.png" alt="grapline" className="w-[300px] h-[500px] lg:w-56 lg:h-96 sm:w-56 sm:h-80 mx-auto mt-5 ml-12 sm:ml-32" />
                    <div className="text-[16px] lg:text-[20px] font-semibold mt-5">
                        Optimize timings to publish content
                    </div>
                </div>
                {/* fourth block */}
                <div className="bg-[#ffcc69] text-left text-[20px] lg:text-[30px] font-bold leading-7 rounded-2xl row-span-3 p-5">
                    Write your content using AI.
                    <img src="/assets/fourth.png" alt="user chat" className="w-[150px] lg:w-[200px] h-auto mt-5" />
                </div>
                <div className="bg-white text-left text-[18px] lg:text-[24px] font-bold p-4 col-span rounded-2xl">
                    <div className="flex flex-col items-center">
                        <img
                            src="/assets/illustration-multiple-platforms.webp"
                            alt="insta twitter id's"
                            className="h-16 w-auto mx-auto"
                        />
                        Manage multiple accounts and platforms.
                    </div>
                </div>
                <div className="bg-[#ffcc69] rounded-2xl text-[16px] lg:text-[20px] p-5">
                    Maintain a consistent posting schedule
                    <img src="/assets/sixth.png" alt="" className="w-40 mt-5" />
                </div>
                <div className="bg-white text-center text-[18px] lg:text-[22px] font-bold rounded-2xl p-4 ">
                    <span className="text-[35px] lg:text-[50px] font-bold">&#62;56%</span>
                    <br />
                    faster audience growth
                    <img src="/assets/illustration-audience-growth.webp" alt="" className="w-[100px] h-[60px] mx-auto mt-3" />
                </div>
                <div className="bg-[#7651dc] col-span-2 text-center text-[25px] lg:text-[35px] font-bold text-white rounded-2xl p-5">
                    <div className="grid grid-cols-2 items-center">
                        <img
                            src="/assets/illustration-grow-followers.webp"
                            alt=""
                            className="w-[200px] lg:w-[300px] h-auto"
                        />
                        Grow followers with non-stop content.
                    </div>
                </div>
            </div>
     </div>
    );
}

export default Gridtemplate2;
