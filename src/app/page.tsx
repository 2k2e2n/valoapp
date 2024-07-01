'use client';

import { useEffect, useState } from 'react';
import Button from "@/components/Button"
import { Wheel } from 'react-custom-roulette'

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







export default function Home() {
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
        if(!mustSpin) {
            setmustSpin(true);
            setprizenumber((prizenumber) => {
                //prizenumber = data.length -1;
                 prizenumber = Math.round(Math.random() * (data.length-1));
                return prizenumber;
            });
        }
    };

    return (
    <main  className=" text-white">
        <div className="relative h-screen w-screen">
            {/* 背景画像や色 */}
            {/* <div className="absolute top-0 left-0 h-full w-full bg-cover bg-center bg-ascent filter blur-sm overflow-hidden brightness-50 duration-300"></div>  */}
            <Background mapname={result} />
            <div className="relative z-1 p-8 filter-none">

        <div className="text-red-600 text-4xl">VALORANT ROULETTE ver.2</div>
        <button onClick={()=>roulettebtn()}>[ROULETTE START]</button>
            <div className='flex justify-center'>
            <button onClick={()=>roulettebtn()} className={mustSpin ? '' : 'transition duration-300 active:scale-90 hover:scale-105'}>
            <Wheel
                mustStartSpinning={mustSpin}
                //pointerProps={ {src:pointerimg.src}}
                prizeNumber={prizenumber}
                data={data}
                outerBorderWidth={0}
                innerBorderWidth={0}
                radiusLineColor={'#000000'}
                innerBorderColor={'#000000'}
                backgroundColors={['#F7F9F2', '#E7F0DC']}
                fontSize={30}
                fontFamily={'Arial'}
                fontStyle={'normal'}
                textColors={['#071952']}
                disableInitialAnimation={false}
                spinDuration={0.5}  //スピン速度
                innerRadius={2}

                onStopSpinning={() => {
                    setmustSpin(false);
                    setresult((result) => {
                        result = data[prizenumber].option;
                        return result;
                    });
                    //alert(data[prizenumber].option);
                }}
            />
            </button>
            </div>
        <div className="text-4xl flex justify-center">RESULT:{result}</div>

        {/* BUTTON */}
        <div>
            {/* ASCENT */}
            <button disabled={mustSpin} onClick={()=>handler(isascent, setAscent, nameascent)}>
                <Button bool={isascent} image={imgascent} ismustSpin={mustSpin}/>
            </button>

            {/* BIND */}
            <button disabled={mustSpin} onClick={()=>handler(isbind, setBind, namebind)}>
                <Button bool={isbind} image={imgbind} ismustSpin={mustSpin}/>
            </button>

            {/* BREEZE */}
            <button disabled={mustSpin} onClick={()=>handler(isbreeze, setbreeze, namebreeze)}>
                <Button bool={isbreeze} image={imgbreeze} ismustSpin={mustSpin}/>
            </button>

            {/* FRACTURE */}
            <button disabled={mustSpin} onClick={()=>handler(isfracture, setFracture, namefracture)}>
                <Button bool={isfracture} image={imgfracture} ismustSpin={mustSpin}/>
            </button>

            {/* HAVEN */}
            <button disabled={mustSpin} onClick={()=>handler(ishaven, setHaven, namehaven)}>
                <Button bool={ishaven} image={imghaven} ismustSpin={mustSpin}/>
            </button>

            {/* ICEBOX */}
            <button disabled={mustSpin} onClick={()=>handler(isicebox, setIcebox, nameicebox)}>
                <Button bool={isicebox} image={imgicebox} ismustSpin={mustSpin}/>
            </button>

            {/* LOTUS */}
            <button disabled={mustSpin} onClick={()=>handler(islotus, setLotus, namelotus)}>
                <Button bool={islotus} image={imglotus} ismustSpin={mustSpin}/>
            </button>

            {/* PEARL */}
            <button disabled={mustSpin} onClick={()=>handler(ispearl, setPearl, namepearl)}>
                <Button bool={ispearl} image={imgpearl} ismustSpin={mustSpin}/>
            </button>

            {/* SPLIT */}
            <button disabled={mustSpin} onClick={()=>handler(issplit, setSplit, namesplit)}>
                <Button bool={issplit} image={imgsplit} ismustSpin={mustSpin}/>
            </button>

            {/* SUNSET */}
            <button disabled={mustSpin} onClick={()=>handler(issunset, setSunset, namesunset)}>
                <Button bool={issunset} image={imgsunset} ismustSpin={mustSpin}/>
        </button>
    </div>
    </div>
    </div>
    </main>
);}
