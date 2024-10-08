const Gridtemplate = () =>{
    return(
        <div className="flex justify-center items-center h-screen max-w-screen-2xl m-auto p-5 bg-[#f5f5f5]">
        <div className="grid grid-cols-4  gap-4  ">
            {/* first grid */}
              <div className="bg-[rgb(250,238,226)] text-balance text-[40px] font-bold row-span-2 rounded-2xl p-5 " >Create and schedule content
               <div className="text-[#7651dc]">quicker</div>
               <img src="src/assets/illustration-create-post.webp" alt="create button" />
               </div> 
                 {/* second grid */}
              <div className="bg-[#7651dc] col-span-2  text-wrap font-bold  text-white text-[60px] text-center rounded-2xl p-16">Social Media 
                <span className="text-[#ffcc69]">10x</span> Faster with AI
                <div className="text-[#ffcc69] text-lg ">⭐⭐⭐⭐⭐ </div>
                <div className="text-lg font-medium"> Over 4,000 5-star reviews</div>
                </div>
                  {/* third grid */}
              <div className="bg-[#dcd1fc] row-span-3 text-left font-extrabold text-[30px] p-5 overflow-hidden rounded-2xl">Schedule to social media
              <img src="src/assets/3rdimage.png" alt="grapline" className="w-56 h-80 ml-[60px] " />
              <div className="text-[25px] font-normal pt-5">optimize not timings to content publish </div>
              </div>   
                {/* fourth grid */}          
               
                <div className="bg-white text-balance text-[40px] text-left font-bold grid gap-2 row-span-2 overflow-hidden  p-2 rounded-2xl" >
                    <img src="src/assets/illustration-multiple-platforms.webp" alt="insta twitter id's" className="ml-16  h-16 w-auto"/>
                    Manage multiple accounts and platforms.</div>
                {/* fifth grid */} 
                <div className="bg-[#ffcc69] text-balance text-xl overflow-hidden text-[40px] ml-16 font-bold leading-[40px] text-left pt-16 font-boldleading-[35px] grid items-end pl-2 pr-0 row-span-2 rounded-2xl">Maintain a consistent posting schedule
                <img src="src/assets/sixth.png" alt="" className=" w-60 ml-5"/></div>
                    {/* sixth grid */}
               
                <div className="bg-[#ffcc69] text-balance text-left text-[35px] font-bold row-span-2 p-5 grid gap-5 rounded-2xl">Write your content using AI.
                <img src="src/assets/fourth.png" alt="user chat"  className="w-56 h-56 ml-[25px]  "/>
                </div>
                {/* seven grid */}
                <div className="bg-white text-balance  text-center rounded-2xl "><span className="text-[55px] text-center font-bold">&#62;56%</span><br/> footer audience growth <img src="src/assets/illustration-audience-growth.webp" alt="" className="w-[280px] h-[124px] ml-10"/> </div>
                <div className="bg-[#7651dc] col-span-2 p-4  text-[30px]  font-bold text-white rounded-2xl"><span className="grid grid-cols-2 items-center justify-center "><img src="src/assets/illustration-grow-followers.webp" alt="" className="w-[250px] h-[200px]" />
                    Grow followers with non-stop content.</span>
                
                </div>
             
</div>
        </div>
    )
}
export default Gridtemplate