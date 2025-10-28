import { CiSearch } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Homepage(){
  return(
    <div className="h-screen p-5">
    <div className="flex h-screen gap-4">
        <div className="w-[50%] bg-[#feb5c0] rounded-xl h-full flex flex-col gap-10 items-center justify-center px-20 relative">
             <div className="absolute top-10 left-10 flex gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex justify-center items-center "></div>
                <div className="bg-white rounded-full h-12 min-w-10 max-w-full text-[#cf4538] flex justify-between items-center gap-4 font-semibold px-4">
                    <Link to="/">Home</Link>
                    <Link to="/">Catalog</Link>
                    <Link to="/">About</Link>

                </div>
             </div>
            <h1 className="my-font text-[#cf4538] text-9xl">Almy</h1>
            <p className="font-semibold text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. A tenetur ad et atque. </p>
            <button className="bg-[#cf4538] text-white rounded-full h-[2.5rem] w-[15rem]">Catalog</button>
        </div>

        <div className="w-[50%] bg-[#cf4538] rounded-xl h-full p-10 flex flex-col gap-10">
            <div className="flex gap-2 justify-end">
                <div className="w-12 h-12 bg-white rounded-full flex justify-center items-center"><CiSearch className="h-8 w-8 text-[#cf4538]" /></div>
            <div className="w-12 h-12 bg-white rounded-full flex justify-center items-center"><FaHeart className="h-7 w-7 text-[#cf4538]" /></div>
            <div className="w-12 h-12 bg-white rounded-full flex justify-center items-center"><IoCartOutline className="h-8 w-8 text-[#cf4538]" /></div>
            </div>
            <div className="bg-white w-full h-full rounded-xl">

            </div>
        </div>
    </div>

    <div className="pt-20 flex flex-col gap-5">
            <h1 className="text-[#cf4538] text-5xl my-font">Bestsellers</h1>
            <div className="flex gap-2 justify-between items-center">
                <div>
                <div className="rounded-xl h-[18rem] w-[23rem] bg-yellow-200">

                </div>
                <h1 className="text-2xl text-[var(--red)] font-semibold">Title</h1>
                <p className="text-[var(--red)]">Lorem, ipsum dolor sit amet consectetur </p>
                </div>
            </div>
        </div>
    </div>
  )
}