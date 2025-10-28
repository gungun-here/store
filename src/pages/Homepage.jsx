import { CiSearch } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Homepage(){
  return(
    <div className="p-5 bg-[var(--yellow)] h-full">
    <div className="flex h-screen gap-4">
        <div className="w-[50%] bg-[var(--pink)] rounded-xl h-full flex flex-col gap-10 items-center justify-center px-20 relative">
             <div className="absolute top-10 left-10 flex gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex justify-center items-center "><img src="almyLogo.png" alt="almyLogo" className="rounded-full" /></div>
                <div className="bg-white rounded-full h-12 min-w-10 max-w-full text-[var(--red)] flex justify-between items-center gap-4 font-semibold px-4">
                    <Link to="/">Home</Link>
                    <Link to="/">Catalog</Link>
                    <Link to="/">About</Link>

                </div>
             </div>
            <h1 className="my-font text-[var(--red)] text-9xl">Changing Trends</h1>
            <p className="font-semibold text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. A tenetur ad et atque. </p>
            <button className="bg-[var(--red)] text-white rounded-full h-[2.5rem] w-[15rem] cursor-pointer">Catalog</button>
        </div>

        <div className="w-[50%] bg-[var(--red)] rounded-xl h-full p-10 flex flex-col gap-10">
            <div className="flex gap-2 justify-end">
                <div className="w-12 h-12 bg-white rounded-full flex justify-center items-center"><CiSearch className="h-8 w-8 text-[var(--red)]" /></div>
            <div className="w-12 h-12 bg-white rounded-full flex justify-center items-center"><FaHeart className="h-7 w-7 text-[var(--red)]" /></div>
            <div className="w-12 h-12 bg-white rounded-full flex justify-center items-center"><IoCartOutline className="h-8 w-8 text-[var(--red)]" /></div>
            </div>
            <div className="bg-[var(--yellow)] w-full h-full rounded-xl">

            </div>
        </div>
    </div>

    <div className="pt-20 flex flex-col gap-5">
            <h1 className="text-[var(--red)] text-5xl my-font">Bestsellers</h1>
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