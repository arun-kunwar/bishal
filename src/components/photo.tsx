import { useState } from "react";
import img1 from"./images/img1.jpg";
import img2 from"./images/img2.jpg";
import img3 from"./images/img3.jpg";
import img4 from"./images/img4.jpg";
import img5 from"./images/img5.jpg";
import img6 from"./images/img6.jpg";
import img7 from"./images/img7.jpg";
import img8 from"./images/img8.jpg";
import { FiX } from "react-icons/fi";
function Photo() {
    const images=[ img1, img2, img3, img4,img5, img6, img7, img8];
    const[selectedImage,setSelectedImage]=useState<string|null>(null);
    
  return (
    <div>
         <div id="photo" className="text-2xl ml-4 text-blue-500 font-bold md:ml-[6.25rem] ">
        <p className="underline underline-offset-[9px] decoration-4 m-[44px]">My Gallery</p>
      </div>
      { selectedImage ?
      <div className="w-[100%] h-[100vh] fixed z-[10] bg-[rgba(0,0,0,0.9)] top-0 left-0 flex justify-center items-center">
        <img src={selectedImage} className="w-[70%] max-w-[500px]" />
        <FiX className="text-4xl text-white absolute top-2 right-2" onClick={()=> setSelectedImage(null)} />
           
      </div>
        :<div className="w-[80%]   mx-auto mt-[40px] mb-[50px] grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-[30px]">
            {images.map((image, index) => (
                <div key={index}
                onClick={()=> setSelectedImage(image)}
                
                className="">
                    <img src={image} alt={"image-${index}"}/>
                </div>
            ))}
        </div>}
    </div>
  )
}

export default Photo