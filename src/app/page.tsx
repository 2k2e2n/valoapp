'use client';

import { useEffect, useState } from 'react';

import "./globals.css";
import Selectbutton from "@/components/Selectbutton";
import React from 'react';
import Link from 'next/link';


import dynamic from 'next/dynamic'
import Background from '@/components/Background';

import { TypeAnimation } from 'react-type-animation';

import { Button, createTheme, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { grey } from '@mui/material/colors';
import Card from '@mui/joy/Card';
import toast, { Toaster } from 'react-hot-toast';


const Wheel = dynamic(() => import('react-custom-roulette').then(mod => mod.Wheel), {
    ssr: false
  })



export default function Home() {

    useEffect(() => {
        setmustSpin((mustSpin)=> {
            return mustSpin = false;
        })
        },[])

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
            } else {
                toast.error("Select 2 or more maps");
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
<div><Toaster/></div>
        <div className='z-0'>
        <Background mapname={resultstr} ismustSpin={mustSpin} />
        </div>
        <div className='z-10'>
<div >


    <Toolbar sx={{ bgcolor: '#53212B', color: '#ffffff' }} >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            VALORANT ROULETTE Ver.2
          </Typography>
          <Stack spacing={2} direction="row" >
            <Button variant="contained" href="https://2k2e2n.github.io/Roulette_online/" target="_blank" sx={{ bgcolor: '#BD3944' }}>Goto old version</Button>
            <Button variant="contained" endIcon={<GitHubIcon />} href="https://github.com/2k2e2n/valoapp" target="_blank" >Github</Button>
          </Stack>
        </Toolbar>

</div>

<div className='flex justify-center'>
    <button onClick={()=>startroulette()} className={`scale-95 duration-200 ${mustSpin ? 'scale-95' : 'hover:scale-100'}`}>




            <Wheel
                    mustStartSpinning={mustSpin}
                    prizeNumber={resultnum}
                    data={data}
                    outerBorderWidth={0}
                    innerBorderWidth={0}
                    radiusLineColor={'#000000'}
                    radiusLineWidth={0.3}
                    innerBorderColor={'#000000'}
                    backgroundColors={['#BD3944', '#53212B']}
                    fontSize={30}
                    fontFamily={'Lato'}
                    fontStyle={'normal'}
                    textColors={['#FFFBF5']}
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
                <div className={`flex justify-center text-5xl mt-8 duration-100 ${mustSpin ? '' : 'scale-105'}`}>
                    <TypeAnimation
                        key={resultstr}
                        sequence={[
                            `${resultstr}`,
                            2000, // Waits 1s
                            () => {console.log('Sequence completed');},
                        ]}
                        wrapper="span"
                        cursor={false}
                        repeat={Infinity}
                        style={{ fontSize: '2em', display: 'inline-block' }}
                    />
                </div>

<div className='flex flex-wrap justify-center mx-16'>
            <button onClick={()=>handler('ASCENT')}>
                <Selectbutton data={data} mapname={'ASCENT'}/>
            </button>
            <button onClick={()=>handler('BIND')}>
                <Selectbutton data={data} mapname={'BIND'}/>
            </button>
            <button onClick={()=>handler('BREEZE')}>
                <Selectbutton data={data} mapname={'BREEZE'}/>
            </button>
            <button onClick={()=>handler('FRACTURE')}>
                <Selectbutton data={data} mapname={'FRACTURE'}/>
            </button>
            <button onClick={()=>handler('HAVEN')}>
                <Selectbutton data={data} mapname={'HAVEN'}/>
            </button>
            <button onClick={()=>handler('ICEBOX')}>
                <Selectbutton data={data} mapname={'ICEBOX'}/>
            </button>
            <button onClick={()=>handler('LOTUS')}>
                <Selectbutton data={data} mapname={'LOTUS'}/>
            </button>
            <button onClick={()=>handler('PEARL')}>
                <Selectbutton data={data} mapname={'PEARL'}/>
            </button>
            <button onClick={()=>handler('SPLIT')}>
                <Selectbutton data={data} mapname={'SPLIT'}/>
            </button>
            <button onClick={()=>handler('SUNSET')}>
                <Selectbutton data={data} mapname={'SUNSET'}/>
            </button>
        </div>

        </div>


        <style jsx global>{`
            .boxshadow {
                box-shadow: 0px 0px 26px 0px rgba(255, 255, 255, 0.2);
            }
        `}</style>
    </main>
);}
