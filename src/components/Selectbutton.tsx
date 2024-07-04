'use client';
import { Result } from "postcss";
import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";

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


type Props = {
    mapname: string;
    data: {option: string }[];
}




const Selectbutton: React.FC<Props>  = ({data, mapname}) => {


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
            return mapdata;
        })
    
    }, [mapname]); // 依存配列にmapNameを指定

    return (
        <div className="">
            <Image className={`m-2 avatar ${data.some(option => option.option === mapname) ? 'brightness-110 boxshadow' : 'brightness-50'} duration-200`}
                    src={mapdata}
                    alt=""
                    width={192}
                    height={108}
                    style={{"objectFit" : "contain"}}
            />

                <style jsx global>{`
                    .avatar {
                        border-radius: 10px;
                    }
                    .boxshadow {
                        box-shadow: 0px 0px 26px 0px rgba(255, 255, 255, 0.2);
                    }
                `}</style>
            </div>

    )
}

export default Selectbutton;



