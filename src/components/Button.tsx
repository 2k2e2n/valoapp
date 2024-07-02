
import React from "react";
import Image, { StaticImageData } from "next/image";


type Props = {
    name: string;
  }


  const Button: React.FC<Props>  = ({name}) => {

return (


    <div>
        <div
            className="w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-b-2 border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
              <span className="mx-auto text-black">
                {name}
            </span>
        </div>

    </div>
)}

export default Button;



