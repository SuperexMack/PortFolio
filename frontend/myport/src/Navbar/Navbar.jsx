import cat from "../Images/Myimg.webp"
import MainBg from "../MainHead/Mainbg"
function Navbar(){
    return(
        <>
        <div>
           <ul className="h-40 flex flex-row items-center justify-center gap-16 text-2xl text-white bg-black">
            <img className="w-40 h-28 absolute left-0" src={cat}></img>
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>Resume</li>
           </ul>
        </div>
        <MainBg></MainBg>
        </>
    )
}
export default Navbar