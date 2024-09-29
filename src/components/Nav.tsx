import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { FiX } from "react-icons/fi";
import { Link } from "react-scroll";
const Nav = () => {
    const menuItems = [
        { name: "Home", to:"home" },
        { name: "About", to:"about" },
        { name: "Photos", to:"photo" },
        { name: "Contact Me", to:"contact" },
    ];
    const[setdata,showdata]=useState(false);
    const reload = () => {
        window.location.reload(); 
      };


    return (
        
        <div className="w-full fixed bg-white">
            <div  className="   h-[55px] w-[100vw] top-0 left-0 shadow-md flex justify-between items-center">
                <div className="font-bold text-2xl pl-10" onClick={()=>reload()}>Bishal</div>
                <div className="pr-3"> { setdata ? <FiX className="md:hidden size-6" onClick={()=>showdata(!setdata)}/>
                :<IoMdMenu className="md:hidden size-6" onClick={()=>showdata(!setdata)}/>}</div> 
                <ul className="gap-14  hidden md:flex justify-center pr-[12rem] font-bold">
                    {menuItems.map((item, index) => (

                        <li key={index}
                        className="hover:underline decoration-blue-600 underline-offset-[9px] decoration-4"
                        > <Link to={item.to} offset={-100} spy={true} smooth={true} duration={1000}>{item.name}</Link></li>
                    ))}
                </ul>
              
            </div>
           
            
            
                {/*mobile phone */}

            <ul className={` md:hidden h-screen fixed w-screen mt-[1px] bg-gray-900 duration-300 ${setdata ? "left-0" : "left-[-100%]"}`}>
                    {menuItems.map((item, index) => (
                        <li key={index} className="p-6 font-bold border-gray-600 border-[1px] text-white"><Link to={item.to} offset={-100} spy={true} smooth={true} duration={500} onClick={()=>showdata(!setdata)}>{item.name}  </Link> </li>
                    ))}

                </ul>
           


        </div>

    )
}

export default Nav