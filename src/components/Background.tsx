'use client';
import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Result } from "postcss";

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
        <div className="z-0">
            <div className="bg-result   "></div>
            <div className="bg-ascent   "></div>
            <div className="bg-bind     "></div>
            <div className="bg-breeze   "></div>
            <div className="bg-fracture "></div>
            <div className="bg-haven    "></div>
            <div className="bg-icebox   "></div>
            <div className="bg-lotus    "></div>
            <div className="bg-pearl    "></div>
            <div className="bg-split    "></div>
            <div className="bg-sunset   "></div>
        </div>

        <div className={`${ismustSpin ?'scale-100':'scale-105'} bg-${mapname} z-1 absolute top-0 left-0 h-full w-full bg-cover bg-center filter blur-sm overflow-hidden brightness-50 duration-300`} ></div>


        {/**/}
    </div>
)}

export default Background;
// 