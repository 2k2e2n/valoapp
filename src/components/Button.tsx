import React from "react";
import Image, { StaticImageData } from "next/image";

type Props = {
    bool: boolean;   //変数の型を定義する
    image: StaticImageData;
  }


  const Button: React.FC<Props>  = ({bool, image}) => {

return (
    <div>
        <Image className={` text-white active:scale-90  transition duration-300 hover:scale-105 ${bool?'saturate-300 brightness-140 ':'saturate-0 brightness-40 scale-98'}`}
            src={image}
            alt="Ascent"
            width={200}
            height={113}
            priority
            />

    </div>
)}

export default Button;