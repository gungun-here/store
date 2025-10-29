import { FaHeart } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Navbar(){
  return(
    <div className="">
         <div className="bg-[var(--hotpink)] flex items-center justify-center h-[2rem] font-bold">Sign up now for a discount of 10% on your first order!</div>

        <div className="bg-[var(--pink)] h-[5rem] flex justify-between items-center">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-lg text-[var(--red)]">Home</Link>
            <img src="/almyLogo2.png" alt="almyLogo2" />
          </div>

          <div className="flex items-center justify-between text-[var(--red)] gap-4">
            <FaHeart className="w-7.5 h-7.5" />
            <IoMdCart className="w-9 h-9"/>
            <FaCircleUser className="w-8 h-8" />
          </div>
        </div>
    </div>
  )
}