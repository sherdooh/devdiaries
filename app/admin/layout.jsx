import { assets, blog_data } from "@/Assets/assets";
import AdminHeader from "@/components/AdminComponents/AdminHeader";
import Sidebar from "@/components/AdminComponents/Sidebar";
import Image from "next/image";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Layout({children}){
    return(

        <div style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2020/02/01/06/11/web-4809584_960_720.jpg')" }}>
            <>

<AdminHeader/>

<div className="flex">
    <ToastContainer theme="dark" />            <Sidebar />
    <div className="flex flex-col w-full">
        <div className="flex items-center justify-between w-full py-3 max-h-[60px] px-12 border border-black">
            <h3 className="font-semibold">Admin Panel </h3>
            <Image src={assets.profile_icon}  width={40} alt="" />
        </div>

        {children}

    </div>

    

</div>


</>

        </div>
        
    )
}
