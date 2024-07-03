'use client';
import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Result } from "postcss";

import backgroundimg from "@/../public/images/Background/Wallpaper.webp"

type Props = {
    mapname: string;
    ismustSpin : boolean;
}


const Background: React.FC<Props>  = ({mapname, ismustSpin}) => {


useEffect(() => {
    console.log(`@/../public/images/Result/${mapname}.webp`);
    if(mapname = "ClickRoulette!"){
        mapname = 'backgroundimg';
    }
}, [mapname]); // 依存配列にmapNameを指定


return (
    <div >
        {/*プリレンダ*/}
        <div className={`fixed top-0 left-0 w-full h-screen z-[-1] blur-sm duration-300`}>
        <Image
        src={backgroundimg}
        alt=""
        fill
        layout={`fill`} objectFit={`cover`}
        />
        <Image
        src={`@../public/images/Result/${mapname}.webp`}
        alt=""
        fill
        layout={`fill`} objectFit={`cover`}
        />
        </div>

       {/*  <div className={`${ismustSpin ?'scale-100':'scale-105'} bg-${mapname} z-1 absolute top-0 left-0 h-full w-full bg-cover bg-center filter blur-sm overflow-hidden brightness-50 duration-300`} ></div> */}



    </div>
)}

export default Background;
//