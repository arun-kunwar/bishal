import intro from "./images/BC.png";
import { ReactTyped } from "react-typed";

function About() {
  return (
    <div id="about"className="bg-gray-200 w-full py-8">
      <div className="mx-auto px-4 max-w-[1240px] md:px-0">
        {/*Mobile phone */}
        <div className="text-center md:hidden">
          <div>
            <div className="text-xl mr-[17rem] mb-[2.25rem] text-blue-500 font-bold">
              <p className="underline underline-offset-[9px] decoration-4">
                About
              </p>
            </div>
            <img
              src={intro}
              className="h-[100%] w-[100%] rounded-[5.5rem] shadow-[5.5rem] mb-[2.25rem] -mt-[3rem]"
            />
            <p className="text-center text-xl text-gray-700">
              Hey, <br /> Thank you for visiting. I'm <span className="font-semibold">Bishal Kurmi</span>. A Junior Software Developer with a
              passion for building innovative and user-friendly applications. <br />
              I am <span > 
              <ReactTyped strings={["Nature Lover.","Learner.","Developer." ] } typeSpeed={40}
      backSpeed={50} loop/> </span>
            </p>
            <button className="border font-bold border-orange-500 bg-orange-500 text-white rounded-lg py-2 px-6 mt-6 transition duration-300  hover:bg-orange-600">Get in touch</button>
          </div>
        </div>
        { /*Desktop */}
     
        <div className="hidden md:block">
        <p className=" flex justify-center ml-[7.5rem] text-blue-500 text-2xl ">About me </p>
        <hr   className=" w-2/4 border-gray-400 border-solid border-[1.5px] ml-[39.1rem]"/> 
        </div>
        <div className="hidden md:grid grid-cols-2 items-center ">
        <img
              src={intro}
              className="max-w-[455px] max-h-[410px] rounded-[5.5rem] shadow-[5.5rem] mb-[2.25rem] -mt-[3rem]"
            />
            <div>
             <p className="leading-relaxed text-xl text-gray-700">
              Hey, <br /> Thank you for visiting. I'm <span className="font-semibold">Bishal Kurmi</span>. A Junior Software Developer with a
              passion for building innovative and user-friendly applications. <br />
              I am <span > 
              <ReactTyped strings={["Nature Lover.","Learner.","Developer." ] } typeSpeed={40}
      backSpeed={50} loop/> </span>
            </p>
            <button className="border t font-bold border-orange-500 bg-orange-500 text-white mt-8 rounded-lg py-2 px-3 transition duration-300  hover:bg-orange-600">Get in touch</button>
           </div>
        </div>
             
      </div>
    </div>
  );
}

export default About;
