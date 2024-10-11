const Gridtemplate = () =>{
    return(
        <div className="flex justify-center items-center h-screen max-w-screen-xl m-auto p-20 bg-[#f5f5f5]">
        <div className="grid grid-cols-4  gap-4  ">
            {/* first grid */}
              <div className="bg-[#faeee2]  text-[35px] leading-9 font-dm   grid row-span-2 rounded-2xl pt-20 pl-8 " ><div >Create and schedule content<i className="text-[#7651dc]  grid ">quicker</i></div>
              
               <img src="/assets/illustration-create-post.webp" alt="create button " className="w-[200px] h-[100px]"  />
               </div> 
                 {/* second grid */}
              <div className="bg-[#7651dc] col-span-2  text-wrap  font-dm  text-white text-[65px] text-center rounded-2xl p-6 font-semibold pt-7 pl-7  ">Social Media 
                <span className="text-[#ffcc69] font-dm pl-2 ">10x</span><i> Faster</i> with AI
                <div className="text-[#ffcc69] text-lg ">⭐⭐⭐⭐⭐ </div>
                <div className="text-lg font-medium font-dm"> Over 4,000 5-star reviews</div>
                </div>
                  {/* third grid */}
              <div className="bg-[#dcd1fc] row-span-3 text-left font-extrabold text-[50px] font-dm p-5 overflow-hidden rounded-2xl">Schedule to social media
              <img src="/assets/3rdimage.png" alt="grapline" className=" w-96 h-96 ml-[90px] " />
              <div className="text-[30px] font-dm font-semibold  pt-5">optimize not timings to content publish </div>
              </div>   
                {/* fourth grid */}          
               
                <div className="bg-white text-balance text-[40px] text-left font-bold font-dm grid gap-2 row-span-2 overflow-hidden  p-2 rounded-2xl" >
                    <img src="/assets/illustration-multiple-platforms.webp" alt="insta twitter id's" className="ml-16  h-16 w-auto"/>
                    Manage multiple accounts and platforms.</div>
                {/* fifth grid */} 
                <div className="bg-[#ffcc69] text-balance  overflow-hidden text-[48px]  font-dm leading-[50px] text-left pt-10 font-bold gap-4 grid items-end pl-2 pr-0 row-span-2 rounded-2xl">Maintain a consistent posting schedule
                <img src="/assets/sixth.png" alt="" className=" w-60 ml-3"/></div>
                    {/* sixth grid */}
               
                <div className="bg-[#ffcc69] text-balance font-dm text-left text-[45px] font-bold row-span-2 leading-9 p-5 grid gap-5 rounded-2xl">Write your content using AI.
                <img src="/assets/fourth.png" alt="user chat"  className="w-56 h-56 ml-[25px]  "/>
                </div>
                {/* seven grid */}
                <div className="bg-white text-balance row-span-2 font-dm text-center rounded-2xl "><span className="text-[55px] text-center font-bold">&#62;56%</span><br/> footer audience growth <img src="/assets/illustration-audience-growth.webp" alt="" className="w-[180px] h-[100px] ml-10"/> </div>
               
                <div className="bg-[#7651dc] col-span-2 font-dm p-4  text-[40px]  font-bold text-white rounded-2xl">
                    <span className="grid grid-cols-2 items-center justify-center font-dm  ">
                        <img src="/assets/illustration-grow-followers.webp" alt="" className="w-[250px] h-[200px]" />
                    Grow followers with non-stop content.</span>
                
                </div>
             
</div>
        </div>
    )
}
export default Gridtemplate