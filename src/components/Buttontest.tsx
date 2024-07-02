
import React from "react";
import Image, { StaticImageData } from "next/image";


type Props = {
    bool: boolean;   //変数の型を定義する
    image: StaticImageData;
    ismustSpin: boolean;
  }


  const Buttontest: React.FC<Props>  = ({bool, image, ismustSpin}) => {

return (
    <div>
        <Image className=
            {`${!ismustSpin ? `active:scale-95 transition duration-150 hover:scale-105`:''}
            ${bool ?'saturate-300 brightness-140 ':'saturate-0 brightness-30 scale-95 contrast-50'}`
        }
            src={image}
            alt="Ascent"
            width={200}
            height={113}
            priority
            />

    </div>
)}

export default Buttontest;



