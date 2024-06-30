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
                    }
                }
            }
            return data;
        });

    }





    //ルーレットスピン開始
    const [mustSpin, setmustSpin] = useState<boolean>(false);
    function roulettebtn () {
        setmustSpin(true);
    };



  return (
    <main>
      <div className="text-red-600 text-6xl">TITLE</div>
        <button onClick={()=>roulettebtn()}>ROULETTE START</button>
            <Wheel
                mustStartSpinning={mustSpin}
                prizeNumber={3}
                data={data}
                backgroundColors={['#3e3e3e', '#df3428']}
                textColors={['#ffffff']}
                disableInitialAnimation={false}
                spinDuration={0.5}
                onStopSpinning={() => {
                    setmustSpin(false);
                }}
            />

        {/* ASCENT */}
        <button onClick={()=>handler(isascent, setAscent, nameascent)}>
            <Button bool={isascent} image={imgascent}/>
        </button>

        {/* BIND */}
        <button onClick={()=>handler(isbind, setBind, namebind)}>
            <Button bool={isbind} image={imgbind}/>
        </button>

        {/* BREEZE */}
        <button onClick={()=>handler(isbreeze, setbreeze, namebreeze)}>
            <Button bool={isbreeze} image={imgbreeze}/>
        </button>

        {/* FRACTURE */}
        <button onClick={()=>handler(isfracture, setFracture, namefracture)}>
            <Button bool={isfracture} image={imgfracture}/>
        </button>

        {/* HAVEN */}
        <button onClick={()=>handler(ishaven, setHaven, namehaven)}>
            <Button bool={ishaven} image={imghaven}/>
        </button>

        {/* ICEBOX */}
        <button onClick={()=>handler(isicebox, setIcebox, nameicebox)}>
            <Button bool={isicebox} image={imgicebox}/>
        </button>

        {/* LOTUS */}
        <button onClick={()=>handler(islotus, setLotus, namelotus)}>
            <Button bool={islotus} image={imglotus}/>
        </button>

        {/* PEARL */}
        <button onClick={()=>handler(ispearl, setPearl, namepearl)}>
            <Button bool={ispearl} image={imgpearl}/>
        </button>

        {/* SPLIT */}
        <button onClick={()=>handler(issplit, setSplit, namesplit)}>
            <Button bool={issplit} image={imgsplit}/>
        </button>

        {/* SUNSET */}
        <button onClick={()=>handler(issunset, setSunset, namesunset)}>
            <Button bool={issunset} image={imgsunset}/>
        </button>
    </main>
  );
}
