'use client';
import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Result } from "postcss";

import imgascent    from "@/../public/images/Result/ASCENT.webp";

type Props = {
    mapname: string;
    ismustSpin : boolean;
}


const Background: React.FC<Props>  = ({mapname, ismustSpin}) => {


useEffect(() => {
    console.log(`bg-${mapname}`);
}, [mapname]); // 依存配列にmapNameを指定


return (
    <div >
        {/*プリレンダ*/}
        <div className="z-0 absolute flex justify-center">
        <Image
        src={imgascent}
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        style={{ height: '100%', width: '100%' }} //The point is right there!
        />
        </div>

       {/*  <div className={`${ismustSpin ?'scale-100':'scale-105'} bg-${mapname} z-1 absolute top-0 left-0 h-full w-full bg-cover bg-center filter blur-sm overflow-hidden brightness-50 duration-300`} ></div> */}


        {/**/}
    </div>
)}

export default Background;
//