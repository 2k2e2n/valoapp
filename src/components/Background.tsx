import React from "react";
import Image, { StaticImageData } from "next/image";

type Props = {
    mapname: string;
}


const Background: React.FC<Props>  = ({mapname}) => {
if(mapname = 'ascent') {

}
return (
    <main>
        <div className="absolute top-0 left-0 h-full w-full bg-cover bg-center bg-ascent filter blur-sm overflow-hidden brightness-50 duration-300"></div>
    </main>
)}

export default Background;