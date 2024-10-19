import React from 'react';

const Gridtemplate = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f5] flex justify-center items-center p-10 font-dm">
      <div className="grid grid-cols-4 grid-rows-4 gap-4 max-w-6xl w-full">
        
        {/* Create and Schedule Content */}
        <div className="bg-[#faeee2]  row-span-1 col-span-4  md:row-span-1 md:col-span-2  lg:col-span-1 lg:row-span-2 p-5 text-[20px] sm:text-[24px] lg:text-[40px] font-bold rounded-2xl">
<div className='mt-10'>Create and schedule content</div>
<i className="text-[#7651dc] block "> quicker</i>
<img src="/assets/illustration-create-post.webp" alt="create button" className="w-full h-auto sm:w-[200px] sm:h-[100px] mt-2" />
</div>

        {/* Social Media 10x Faster with AI */}
        <div className="bg-purple-500 text-white col-span-4 md:col-span-2 lg:col-span-2 row-span-1 text-center justify-center items-center font-bold text-[25px]  content-around md:text-[50px] p-4 rounded-2xl">
Social Media <span className="text-yellow-500">10x</span>
<div>
<i>Faster</i> with AI
</div>
<div className="text-[#ffcc69] text-lg">⭐⭐⭐⭐⭐</div>
<div className="text-[20px] font-medium">Over 4,000 5-star reviews</div>
</div>

       {/* Schedule to Social Media */}
        <div className="bg-[#dcd1fc] col-span-4 md:col-span-2 lg:col-span-1 row-span-2 rounded-2xl text-[30px] md:text-[40px] p-3 font-dm font-semibold justify-center content-around overflow-hidden">
Schedule to social media
<img src="/assets/3rdimage.png" alt="grapline" className="w-[180px] ml-[100px] " />
<div className="text-[14px] sm:text-[16px] lg:text-[20px] text-balance font-medium font-dm mt-10 ml-5">
Optimize post timings to publish content at the portect time for your audience
</div>
</div>

       
        {/* Manage Multiple Accounts */}
<div className="bg-white text-left text-[25px] col-span-4 md:col-span-2 lg:col-span-1 row-span-1 md:text-[30px] font-bold p-2 rounded-2xl">
<div className="overflow-hidden">
<img
src="/assets/illustration-multiple-platforms.webp"
alt="insta twitter id's"
className="h-16 w-auto mx-auto ml-10 "
/>
<div className='mt-10'>Manage multiple accounts and platforms.</div>
</div>
</div>

        {/* Maintain a Consistent Posting Schedule */}
<div className="bg-[#ffcc69] col-span-4 md:col-span-2 lg:col-span-1 rounded-2xl text-[30px] font-bold p-4 ">
Maintain a consistent posting schedule
<img src="/assets/sixth.png" alt="" className=" " />
</div>

        {/* Write Content using AI */}
        <div className="bg-white col-span-4 md:col-span-2 lg:col-span-1 rounded-lg p-5 text-[25px] justify-center items-center  font-bold ">
Write your content using AI.
<img src="/assets/fourth.png" alt="user chat" className="w-[150px] h-[180px]  ml-10" />
</div>


        {/* Audience Growth */}
        <div className="bg-white text-center text-[16px] col-span-4  md:col-span-2 lg:col-span-1 sm:text-[18px] lg:text-[20px] font-dm rounded-2xl p-4">
<span className="text-[40px] sm:text-[50px] lg:text-[70px] font-bold">&#62;56%</span>
<br />
faster audience growth
<img src="/assets/illustration-audience-growth.webp" alt="" className="w-[100px] md-w-[200px] h-[100px] mx-auto mt-3" />
</div>

        {/* Follower Growth Stats */}
        <div className="bg-[#7651dc] col-span-4 md:col-span-4 lg:col-span-2 text-center text-[18px] sm:text-[25px] lg:text-[35px] font-bold font-dm text-white rounded-2xl p-5">
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
};

export default Gridtemplate;
