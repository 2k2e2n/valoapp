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

import imgascent    from "@/../public/images/Button/ASCENT.webp"
import "./globals.css";
import Button from "@/components/Button";
import React from 'react';



import dynamic from 'next/dynamic'
import Background from '@/components/Background';
const Wheel = dynamic(() => import('react-custom-roulette').then(mod => mod.Wheel), {
    ssr: false
  })



export default function Home() {

    useEffect(() => {
        setmustSpin((mustSpin)=> {
            return mustSpin = false;
        })
        },[])
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




let   [data,setdata] = useState([
    { option: 'ASCENT'  },
    { option: 'BIND'    },
    { option: 'BREEZE'  },
    { option: 'FRACTURE'},
    { option: 'HAVEN'   },
    { option: 'ICEBOX'  },
    { option: 'LOTUS'   },
    { option: 'PEARL'   },
    { option: 'SPLIT'   },
    { option: 'SUNSET'  },
]);




const [resultnum, setresultnum] = useState<number>(0);
const [resultstr, setresultstr] = useState<string>("ClickRoulette!");
//ルーレットスタート
const[mustSpin, setmustSpin]= useState<boolean>(false);
function startroulette() {
    if(!mustSpin) {
        setmustSpin((mustSpin) => {
            mustSpin = true;
            return mustSpin;
        });
        setresultnum((resultnum) => {
            resultnum = Math.round(Math.random() * (data.length-1));
            return resultnum;
        });
    }
}
function endroulette (){
    setresultstr((resultstr) => {
        resultstr = data[`${resultnum}`].option;
        return resultstr;
    })
}



//マップボタンクリック
function handler(mapname: string) {
    if(!mustSpin) {
    setdata(() => {
        if(data.some(item => item.option === mapname) ){ //配列から削除
            if(data.length >= 3) {
                console.log(`${mapname},を削除`);
                    data = data.filter(item => item.option !== mapname);
            }
        } else {                   //配列に追加
            console.log(`${mapname},を追加`);
            data = data.concat({ option: mapname });    //配列に追加
        }
    return data;
    });
    console.error(data);
    }
}

return (
<main  className=" text-white">
        <div className='z-0'>
        <Background mapname={resultstr} ismustSpin={mustSpin} />
        </div>
        <div className='z-10'>

    <div className="text-red-600 text-4xl bg-white z-11">VALORANT ROULETTE ver.2</div>
<div className='flex justify-center'>
    <button onClick={()=>startroulette()} className={`duration-200 ${mustSpin ? '' : 'hover:scale-105'}`}>

            <Wheel
                    mustStartSpinning={mustSpin}
                    prizeNumber={resultnum}
                    data={data}
                    outerBorderWidth={0}
                    innerBorderWidth={0}
                    radiusLineColor={'#912730'}
                    radiusLineWidth={0}
                    innerBorderColor={'#000000'}
                    backgroundColors={['#5CB5B0','#5C9CB4']}
                    fontSize={30}
                    fontFamily={'Lato'}
                    fontStyle={'normal'}
                    textColors={['#ffffff']}
                    disableInitialAnimation={false}
                    spinDuration={0.5}  //スピン速度
                    innerRadius={4}

                onStopSpinning={() => {
                    setmustSpin((mustSpin) => {
                        endroulette();
                        return mustSpin = false;
                    })
                }}
            />
    </button >
    </div>
                    <div className='flex justify-center text-6xl'>{resultstr}</div>
<div className='flex justify-center'>
            <button onClick={()=>handler('ASCENT')}>
                <Button data={data} name={'ASCENT'}/>
            </button>
            <button onClick={()=>handler('BIND')}>
                <Button data={data} name={'BIND'}/>
            </button>
            <button onClick={()=>handler('BREEZE')}>
                <Button data={data} name={'BREEZE'}/>
            </button>
            <button onClick={()=>handler('FRACTURE')}>
                <Button data={data} name={'FRACTURE'}/>
            </button>
            <button onClick={()=>handler('HAVEN')}>
                <Button data={data} name={'HAVEN'}/>
            </button>
            <button onClick={()=>handler('ICEBOX')}>
                <Button data={data} name={'ICEBOX'}/>
            </button>
            <button onClick={()=>handler('LOTUS')}>
                <Button data={data} name={'LOTUS'}/>
            </button>
            <button onClick={()=>handler('PEARL')}>
                <Button data={data} name={'PEARL'}/>
            </button>
            <button onClick={()=>handler('SPLIT')}>
                <Button data={data} name={'SPLIT'}/>
            </button>
            <button onClick={()=>handler('SUNSET')}>
                <Button data={data} name={'SUNSET'}/>
            </button>
</div>

        </div>
    </main>
);}
