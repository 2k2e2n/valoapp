'use client';
import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Result } from "postcss";

import BACKGROUND    from "@/../public/images/Background/Wallpaper.webp";
import ASCENT        from '@/../public/images/Result/ASCENT.webp';
import BIND          from "@/../public/images/Result/BIND.webp"
import BREEZE        from "@/../public/images/Result/BREEZE.webp"
import FRACTURE      from "@/../public/images/Result/FRACTURE.webp"
import HAVEN         from "@/../public/images/Result/HAVEN.webp"
import ICEBOX        from "@/../public/images/Result/ICEBOX.webp"
import LOTUS         from "@/../public/images/Result/LOTUS.webp"
import PEARL         from "@/../public/images/Result/PEARL.webp"
import SPLIT         from "@/../public/images/Result/SPLIT.webp"
import SUNSET        from "@/../public/images/Result/SUNSET.webp"
import ABYSS        from "@/../public/images/Result/ABYSS.webp"


type Props = {
    mapname: string;
    ismustSpin : boolean;
}


const Background: React.FC<Props>  = ({mapname, ismustSpin}) => {

const [mapdata, setmapdata] = useState<StaticImageData>(BACKGROUND)
useEffect(() => {
    console.log(`${mapname}`);
    if(mapname === "ClickRoulette!"){
        mapname = 'backgroundimg';
    }

    setmapdata((mapdata) => {
        if(mapname === 'ASCENT'     ) {mapdata = ASCENT};
        if(mapname === 'BIND'       ) {mapdata = BIND};
        if(mapname === 'BREEZE'     ) {mapdata = BREEZE};
        if(mapname === 'FRACTURE'   ) {mapdata = FRACTURE};
        if(mapname === 'HAVEN'      ) {mapdata = HAVEN};
        if(mapname === 'ICEBOX'     ) {mapdata = ICEBOX};
        if(mapname === 'LOTUS'      ) {mapdata = LOTUS};
        if(mapname === 'PEARL'      ) {mapdata = PEARL};
        if(mapname === 'SPLIT'      ) {mapdata = SPLIT};
        if(mapname === 'SUNSET'     ) {mapdata = SUNSET};
        if(mapname === 'ABYSS'      ) {mapdata = ABYSS};
        return mapdata;
    })

}, [mapname]); // 依存配列にmapNameを指定


return (
    <div>
        <div className={`duration-200 fixed top-0 left-0 w-full h-screen z-[-1] blur-sm ${ismustSpin ? 'scale-95' : 'scale-100'}`}>
        <Image
        src={BACKGROUND}
        alt=""
        fill
        layout={`fill`}
        //objectFit={`cover`}
        />
        <Image
        src={mapdata}
        alt=""
        fill
        layout={`fill`}
        //objectFit={`cover`}
        />
        </div>

       {/*  <div className={`${ismustSpin ?'scale-100':'scale-105'} bg-${mapname} z-1 absolute top-0 left-0 h-full w-full bg-cover bg-center filter blur-sm overflow-hidden brightness-50 duration-300`} ></div> */}



    </div>
)}

export default Background;