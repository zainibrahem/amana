import React, { useEffect, useState } from 'react';
import { electron } from 'webpack';
import { useAppDispatch, useAppState } from '../../contexts/app/app.provider';
import Link from 'next/link'

    export default function SideBar (props) {

    const isDrawerOpen = useAppState('isDrawerOpen');
    const Loading = useAppState('Loading');
    const [shown,setShown] = useState(0);
    const [catss,setCatss] = useState(null);
    const [type,setType]=useState('home');
    const [routes,setRoutes]=useState<string>();
    const Route = useAppState('Route');
    // const [data,setData] = useState();
    // const [userId,setUserId] = useState(0);
    // const dispatch = useAppDispatch();

        useEffect(()=>{
            setRoutes(window.location.href)
        },[])
  

    const toggleAccordoin = (event) => {
        
        
        if(event.currentTarget.children[1].classList.contains('block')){

            event.currentTarget.children[1].classList.remove('block');
            event.currentTarget.children[1].classList.add('hidden');
            event.currentTarget.classList.add('duration-1000');
            event.currentTarget.classList.add('transition-all');
            event.currentTarget.classList.add('max-h-11');
            event.currentTarget.classList.remove('max-h-96');
            event.currentTarget.style.background="#fff";
            
        }
        else{
            var items = document.getElementsByClassName('items');

            for(var i = 0; i < items.length; i++)
                {
                    items[i].children[1].classList.remove('block');
                    items[i].children[1].classList.add('hidden');
                    items[i].classList.add('max-h-11');
                    items[i].classList.add('backgroundwhite');
                    items[i].classList.remove('max-h-96');
                    items[i].classList.remove('transition-all');
                    items[i].classList.remove('duration-1000');
                }
            
            event.currentTarget.children[1].classList.remove('hidden');
            event.currentTarget.children[1].classList.add('block');
            event.currentTarget.classList.add('max-h-96');
            event.currentTarget.classList.remove('max-h-11');
            event.currentTarget.classList.add('duration-1000');
            event.currentTarget.classList.add('transition-all');
            event.currentTarget.style.background="#eee";
        }
    }

    return (
            <div id="ads" style={{width:props.width}} className="fixed overflow-x-hidden bg-white dark:bg-gray-800  z-10">
                <div className="flex flex-col  sm:justify-around">
                    <div className={"w-full h-screen shadow"}>
                    <nav className={"h-full flex flex-col justify-start items-end pr-5 pt-10"}>
                        <div className="rounded-full shadow-md w-24 h-24 flex flex-col items-center self-center relative" style={{background:`url(${localStorage.getItem('avatar')?localStorage.getItem('avatar'):""})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center center"}}>
                                {/* <a href="/dashboard/profile" className='absolute -bottom-5 bg-yellow-500 rounded-full px-3 text-sm cursor-pointer text-white py-1 '>
                                        تعديل
                                </a> */}
                        </div>
                        <div className="flex flex-col justify-between items-center mt-3 self-center  ">
                            <div className="text-md font-bold">
                                    {localStorage.getItem('nice_name')?localStorage.getItem('nice_name'):""}
                            </div>
                            <div className="mt-1" style={{fontSize:"12px"}}>
                                 الرصيد : 2500 ر.ع
                            </div>
                        </div>
                        <div className="flex flex-col justify-between items-center w-full mt-7" dir="rtl">
                            <ul className="list-none w-full" >
                               
                            </ul>
                        </div>
                    </nav>
                    </div>
                </div>
            </div>
    )
    }