import intro from "./images/BC.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

function Intro() {
  return (
    <div id="home"className="w-full h-full mx-auto bg-gray-900 ">
      <div className=" hidden md:flex justify-between items-start ">
        <div className="pl-[220px] pt-[150px] ">
          <p className="text-5xl text-white font-bold  leading-[4rem]">
            Hi, <br />
            I am <span className="text-blue-500">Bishal K.</span> <br />
            Junior Software. <br /> Developer
          </p>
          <button className="bg-blue-500 text-white h-[3rem] px-16 py-2 rounded-md mt-5">
           <a href="https://www.facebook.com/bishalkurmi.bishal.5">Contact</a> 
          </button>
          <div className="mt-10 gap-14 pl-5 flex flex-row">
         <a href="https://www.facebook.com/bishalkurmi.bishal.5"><FaFacebook className="size-7 text-white"/></a> 
         <a href="https://www.instagram.com/bishalkurmi.0"><FaInstagram className="size-7 text-white"/></a>
          </div>
        </div>
        <img
          src={intro}
          alt="Intro"
          className="pl-[5rem] mt-[140px] shadow-lg"
        />
      </div>
      {/*mobile phone */}


      <div className=" md:hidden">
        <div className="pl-[20px] pt-[140px] ">
          <p className="text-3xl text-white font-bold  leading-[2.8rem]">
            Hi, <br />
            I am <span className="text-blue-500">Bishal K.</span> <br />
            Junior Software. <br /> Developer
          </p>
          <button className="bg-blue-500 text-white h-[2.4rem] px-10 rounded-md mt-5">
           <a href="https://www.facebook.com/bishalkurmi.bishal.5">Contact</a> 
          </button>
          <div className="mt-6 gap-10 pl-5 flex flex-row">
          <a href="https://www.facebook.com/bishalkurmi.bishal.5"><FaFacebook className="size-7 text-white"/></a> 
         <a href="https://www.instagram.com/bishalkurmi.0"><FaInstagram className="size-7 text-white"/></a>
          </div>
        </div>
        <img
          src={intro}
          alt="Intro"
          className=" max-w-[92%]   ml-[30px] shadow-lg"
        />
      </div>
    </div>
  );
}

export default Intro;
