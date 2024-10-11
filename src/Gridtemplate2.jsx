function Gridtemplate2() {
    return (
        <div className="grid justify-center items-center m-auto min-h-screen bg-[#f5f5f5] ">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-2 lg:grid-rows-2 sm:grid-rows-3 max-w-screen-2xl gap-5 m-auto p-4 font-dm">
                {/* first block */}
                <div className="bg-[#faeee2] row-span-3 col-span-2 sm:col-span-1 lg:col-span-1 md:col-span-1 p-5 text-[20px] sm:text-[24px] lg:text-[40px] font-bold rounded-2xl mb-5">
                    Create and schedule content
                    <i className="text-[#7651dc] block"> quicker</i>
                    <img src="/assets/illustration-create-post.webp" alt="create button" className="w-full h-auto sm:w-[200px] sm:h-[100px] mt-2" />
                </div>
                {/* second block */}
                <div className="bg-violet-500 col-span-2 row-span-4 text-center flex justify-center items-center font-bold text-white text-[25px] sm:text-[30px] lg:text-[50px] rounded-2xl">
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
                <div className="bg-[#dcd1fc] row-span-5 col-span-2 sm:col-span-1 lg:col-span-1 md:col-span-1 rounded-2xl text-[30px]  sm:text-[50px] lg:text-[50px] font-dm font-semibold p-5 overflow-hidden">
                    Schedule to social media
                    <img src="/assets/3rdimage.png" alt="grapline" className="w-full sm:w-[300px] h-auto sm:h-[500px] lg:w-56 lg:h-96 sm:mx-auto mt-5 ml-10 lg:ml-10 md:ml-10 2xl:ml-32 xl:ml-16 " />
                    <div className="text-[14px] sm:text-[16px] lg:text-[20px] text-balance font-medium font-dm mt-10 ml-10">
                    Optimize post timings to publish content at the portect time for your audience
                    </div>
                </div>
                {/* fourth block */}
                <div className="bg-[#ffcc69] text-left text-[30px] col-span-2 sm:col-span-1 lg:col-span-1 md:col-span-1  lg:text-[30px] font-bold leading-7 rounded-2xl row-span-3 p-5">
                    Write your content using AI.
                    <img src="/assets/fourth.png" alt="user chat" className="w-full lg:w-[350px] h:full lg:h-[350px] mt-5" />
                </div>
                <div className="bg-white text-left text-[25px] sm:text-[30px] lg:text-[30px] font-bold p-4 col-span rounded-2xl">
                    <div className="grid items-center">
                        <img
                            src="/assets/illustration-multiple-platforms.webp"
                            alt="insta twitter id's"
                            className="h-16 w-auto mx-auto"
                        />
                        Manage multiple accounts and platforms.
                    </div>
                </div>
                <div className="bg-[#ffcc69] rounded-2xl col-span-2 sm:col-span-1 lg:col-span-1 md:col-span-1 text-[20px] sm:text-[35px] lg:text-[35px] font-medium text-balance font-dm grid items-end justify-center pl-5 pr-5 pt-5 ">
                    Maintain a consistent posting schedule
                    <img src="/assets/sixth.png" alt="" className="" />
                </div>
                {/* seventh box */}
                <div className="bg-white text-center text-[16px] col-span-2 sm:col-span-1 lg:col-span-1 md:col-span-1 sm:text-[18px] lg:text-[20px] font-dm rounded-2xl p-4">
                    <span className="text-[40px] sm:text-[50px] lg:text-[70px] font-bold">&#62;56%</span>
                    <br />
                    faster audience growth
                    <img src="/assets/illustration-audience-growth.webp" alt="" className="w-[60px] sm:w-[100px] h-auto mx-auto mt-3" />
                </div>
                {/* eight box */}
                <div className="bg-[#7651dc] col-span-2 text-center text-[18px] sm:text-[25px] lg:text-[35px] font-bold font-dm text-white rounded-2xl p-5">
                    <div className="grid grid-cols-2 items-center">
                        <img
                            src="/assets/illustration-grow-followers.webp"
                            alt=""
                            className="w-[150px] sm:w-[200px] lg:w-[300px] h-auto"
                        />
                        Grow followers with non-stop content.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gridtemplate2;
