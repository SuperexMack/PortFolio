import "./Improve.css"
function MainBg(){
    return(
        <>
        <div className="main-body flex flex-row justify-around">
        <div className="h-96 w-96 contentfirst  relative top-32 flex flex-col p-20">
           <p className="text-3xl font-semibold text-white">Get the Best product with Catller</p>
           <p className="mt-9 text-gray-800 innerText">We can design your product in the best ranges of price and quality</p>
           <div className="ExploreButton">Explore</div>
        </div>


          <div className="h-96 w-96 contentsecond flex flex-row relative top-28 p-9 text-center">
            <div className="firstContent mt-10 text-2xl relative left-10 space-y-8">

            <div className="bg-gray-700 titleBox cursor-pointer">Landing Pages</div>
            <div className="bg-gray-700 titleBox cursor-pointer">Full Stack Application</div>
            <div className="bg-gray-700 titleBox cursor-pointer"> Portfolio websites</div>
            <div className="bg-gray-700 titleBox cursor-pointer">React Applications</div>

            </div>

          </div>
        </div>
        </>
    )
}
export default MainBg