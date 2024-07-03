import React from "react";
import Image, { StaticImageData } from "next/image";


type Props = {
    name: string;
    data: {option: string }[];
}


const Button: React.FC<Props>  = ({data, name}) => {
    return (
        <div>
            <div
                className={`font-bold rounded-lg text-2xl mt-6 w-36 h-12 bg-[#ffffff] text-[#0f1923] justify-center duration-200 ${data.some(option => option.option === name) ? 'text-black ' : 'bg-slate-400'}`}>
                <span className={`mx-auto  ${data.some(option => option.option === name) ? 'text-black ' : ''}`}>
                    {name}
                </span>
            </div>

        </div>
    )
}

export default Button;



