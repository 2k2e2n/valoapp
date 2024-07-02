'use client';

import { useEffect, useState } from 'react';
import router from "next/router";

import Image from "next/image";
/*
import imgascent    from "@/../public/images/Button/ASCENT.webp"
import imgbind      from "@/../public/images/Button/BIND.webp"
import imgbreeze    from "@/../public/images/Button/BREEZE.webp"
import imgfracture  from "@/../public/images/Button/FRACTURE.webp"
import imghaven     from "@/../public/images/Button/HAVEN.webp"
import imgicebox    from "@/../public/images/Button/ICEBOX.webp"
import imglotus     from "@/../public/images/Button/LOTUS.webp"
import imgpearl     from "@/../public/images/Button/PEARL.webp"
import imgsplit     from "@/../public/images/Button/SPLIT.webp"
import imgsunset    from "@/../public/images/Button/SUNSET.webp"
import test from "@/../public/images/Result/ASCENT.png"
import pointerimg from "@/../public/images/Default/pointer_cursor.png"
import Background from '@/components/Background';
import Header from '@/components/Header';
*/
import { Wheel } from 'react-custom-roulette'
import imgascent    from "@/../public/images/Button/ASCENT.webp"
import "./globals.css";
import Button from "@/components/Button";
import React from 'react';

const data = [
    { option: '0', style: { backgroundColor: 'green', textColor: 'black' } },
    { option: '1', style: { backgroundColor: 'white' } },
    { option: '2' },
]


import { Roulette, useRoulette } from 'react-hook-roulette';


export default function Home() {
/*
    const [isascent,    setAscent]   = useState<boolean>(true);
    const [isbind,      setBind]     = useState<boolean>(true);
    const [isbreeze,    setbreeze]   = useState<boolean>(true);
    const [isfracture,  setFracture] = useState<boolean>(true);
    const [ishaven,     setHaven]    = useState<boolean>(true);
    const [isicebox,    setIcebox]   = useState<boolean>(true);
    const [islotus,     setLotus]    = useState<boolean>(true);
    const [ispearl,     setPearl]    = useState<boolean>(true);
    const [issplit,     setSplit]    = useState<boolean>(true);
    const [issunset,    setSunset]   = useState<boolean>(true);
    const [prizenumber, setprizenumber] = useState<number>(0);
    const [result, setresult] = useState<string>("result");
    let   [data,        setdata]     = useState([
        { option: 'ascent'   },
        { option: 'bind'     },
        { option: 'breeze'   },
        { option: 'fracture' },
        { option: 'haven'    },
        { option: 'icebox'   },
        { option: 'lotus'    },
        { option: 'pearl'    },
        { option: 'split'    },
        { option: 'sunset'   },
    ]);

    const nameascent    = 'ascent';
    const namebind      = 'bind';
    const namebreeze    = 'breeze';
    const namefracture  = 'fracture';
    const namehaven     = 'haven';
    const nameicebox    = 'icebox';
    const namelotus     = 'lotus';
    const namepearl     = 'pearl';
    const namesplit     = 'split';
    const namesunset    = 'sunset';

    const roulettewarn = "データを一つ以上いれてください！";

    function handler(state: boolean, setState: React.Dispatch<React.SetStateAction<boolean>>, mapname: string) {
        setState((state) => {
                    state = !state;
                return state;
        });
        setdata(() =>{
            if(state) {
                if(data.length >= 2) {
                        data = data.filter(item => item.option !== mapname); //配列から削除
                    } else {
                        data.push({ option: roulettewarn }); //エラーを配列に追加
                        data = data.filter(item => item.option !== mapname); //配列から削除
                    }
            } else {
                if(!data.some(item => item.option === mapname)) {
                    data.push({ option: mapname }); //配列に追加
                    if(data.some(item => item.option === roulettewarn)) {
                        data = data.filter(item => item.option !== roulettewarn); //エラーを配列から削除
                    }}
            }
            return data;
        });
    }

    //ルーレットスピン開始
    const [mustSpin, setmustSpin] = useState<boolean>(false);
    function roulettebtn () {
        if(!mustSpin && !data.some(item => item.option === roulettewarn)){
            setmustSpin(true);
            setprizenumber((prizenumber) => {
                //prizenumber = data.length -1;
                 prizenumber = Math.round(Math.random() * (data.length-1));
                return prizenumber;
            });
        }
    };
*/

const[mustSpin, setmustSpin]= useState<boolean>(false);


const data = [
    { option: '0', style: { backgroundColor: 'green', textColor: 'black' } },
    { option: '1', style: { backgroundColor: 'white' } },
    { option: '2' },
]

function handler() {
    console.log("pushedbtn!");
}


    return (
    <main  className=" text-white">

        <div className="text-red-600 text-4xl">VALORANT ROULETTE ver.2</div>
        <div>
        <Image
        src={imgascent}
        alt=""
        width={200}
        height={113}
        />





    </div>
        <button onClick={()=>handler()}
              className="w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-b-2 border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
              <span className="mx-auto text-black">ASCENT</span>

        </button>
        <button onClick={()=>handler()}>
            <Button name={'BIND'}/>
        </button>

        <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={3}
            data={data}
            backgroundColors={['#3e3e3e', '#df3428']}
            textColors={['#ffffff']}
            />

    </main>
);}
