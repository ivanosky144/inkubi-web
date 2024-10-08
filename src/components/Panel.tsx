import { useRouter } from "next/router";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaHistory } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";

export default function Panel() {

    const router = useRouter();

    return (
            <div className="p-6 flex flex-col gap-10 w-[20%] shadow-sm height-[100%] bg-ultralight_purple justify-center">
                <div 
                    className="flex gap-5 items-center text-xl hover:bg-gray-100 p-2 rounded-md cursor-pointer hover:text-purple"
                    onClick={() => router.push("/dashboard")}
                >
                    <MdSpaceDashboard className='text-gray-500'/>
                    <h2 className='font-semibold text-gray-500'>DASHBOARD</h2>
                </div>
                <div 
                    className="flex gap-5 items-center text-xl hover:bg-gray-100 p-2  rounded-md cursor-pointer hover:text-purple"
                    onClick={() => router.push("/history")}
                >
                    <FaHistory className='text-gray-500'/>
                    <h2 className='font-semibold text-gray-500'>ANALYTIC</h2>
                </div>
                <div 
                    className="flex gap-5 items-center text-xl hover:bg-gray-100 p-2 rounded-md cursor-pointer hover:text-purple"
                    onClick={() => router.push("/profile")}
                >
                    <BsFillPersonLinesFill className='text-gray-500'/>
                    <h2 className='font-semibold text-gray-500'>USER</h2>
                </div>
                <div className="flex gap-5 items-center text-xl hover:bg-gray-100 p-2 rounded-md cursor-pointer hover:text-purple">
                    <h2 className='font-semibold text-gray-500'>LOGOUT</h2>
                </div>
            </div>
    )
}