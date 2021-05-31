import React, { useEffect, useRef, useState } from 'react';
import { NavBar } from '../components/navbar/navbar';
import Modal from '../components/modal/modal';
import SideBar from '../components/sidebar/sidebar';
import { useAppState, useAppDispatch } from '../contexts/app/app.provider';
import Footer from '../components/footer/footer';
import { AuthContext } from '../contexts/auth/auth.context';

interface ListItem {
  messages: any
  categories_groups: object
  carts:any
 }

 export default function Layout(props) {
    const isDrawerOpen = useAppState('isDrawerOpen');
    const Loading = useAppState('Loading');
    const [opens,setOpens] = useState(false);
    const [widths,setWidths] = useState(0);
    const modal = useAppState('Modal');
    const [data,setData] = useState(null);
    const [userId,setUserId] = useState(0); 
    const [display,setDisplay] = useState(false); 
    const {
      authState: { isAuthenticated },
      authDispatch,
    } = React.useContext<any>(AuthContext);
    const toggleopens = ()=>{
      setOpens(!opens)
      if(!opens){
        setTimeout(() => {
          setDisplay(true);
        }, 1000);
      }
      else{
        setDisplay(false);
      }
    }

    const dispatch = useAppDispatch();
    // Toggle drawer
    const toggleHandler = React.useCallback(() => {
        dispatch({
          type: 'TOGGLE_DRAWER',
        });
      }, [dispatch]
      );



      const toggleLoader = React.useCallback((number) => {
        dispatch({
          type: 'Loaded',
        });
        dispatch({
          type: 'Cart',payload:number,
        });
        }
        ,[dispatch]
      );

    

      const addtocart = (item) =>{
        console.log(item.target.id);
        fetch(`https://amanacart.com/api/addToCart/${item.target.id}`, {
            method: 'post',
            headers: {'Content-Type':'application/json'},
        })
        .then( async response => {
            const isJson = response.headers.get('content-type')?.includes('application/json');
            const data = isJson && await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }
            // setMessgae(data.message);
            console.log(data);
        })
      }
      const updateCart = (number) => {
        React.useCallback(() => {
          dispatch({
            type: 'Cart',payload:number,
          });
        }, [dispatch]
        );
      }
      useEffect(() => {
        fetch("https://amanacart.com/api/navbar")
         .then(res => res.json())
         .then(result =>{
           setData(result.data);
           const wid = document.querySelector('#col').clientWidth;
           var elements = 0;
           for(var i = 0 ; i < result.data.carts.length ; i ++ ){
                elements+=result.data.carts[i].items.length;
           }
           toggleLoader(elements);
          setEl2(wid) ;
         })
         .catch(e => {
           console.log(e);
       });
     },[widths])
      const [el2, setEl2] = useState(0);

     
    
        // openModal({
        //   show: true,
        //   overlayClassName: 'quick-view-overlay',
        //   closeOnClickOutside: true,
        //   component: AuthenticationForm,
        //   closeComponent: '',
        //   config: {
        //     enableResizing: false,
        //     disableDragging: true,
        //     className: 'quick-view-modal',
        //     width: 458,
        //     height: 'auto',
        //   },
        // });
     
 
  useEffect(() => {
    const wid = document.querySelector('#col').clientWidth;
    setEl2(wid) ;
    setWidths(window.innerWidth);
  })
  const noti = useAppState('notification');
  const notiType = useAppState('notificationType');

    return (
        <>
        
          <div className={`fixed top-20 right-0 ${notiType=="error"?"bg-red-400":"bg-green-400"} transition-all duration-500 ${noti?"opacity-100":"opacity-0"} z-50 bg-op-50 w-72 py-4 px-5`} >
              <span className="w-24 text-white text-md py-2">{notiType=="error"?"Error : ":"Success : " } {noti}</span>
          </div>
        
        <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 sm:col-span-12 h-13 md:col-span-12 relative z-50 lg:col-span-12 xl:col-span-12">
              {data?
              <NavBar addtocart={addtocart} carts={data} auth={isAuthenticated}  toggleHandler={toggleHandler}></NavBar>
              :<></>}
            </div>
            <div className={isDrawerOpen?"contentss pb-16 md:pb-0 overflow-hidden col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-9 xl:col-span-10 pl-4 pr-4 lg:pr-0":"sm:col-span-12 sm:pr-4 md:pr-1 md:col-span-11 lg:col-span-11 xl:col-span-11 pl-4 overflow-hidden contentss pb-16 md:pb-0"}>
               {props.children}
               <Footer></Footer>
            </div>
            <div id="col" className={isDrawerOpen?"hidden relative sm:col-span-4 md:col-span-3 lg:block lg:col-span-3 xl:col-span-2 overflow-x-hidden":"hidden overflow-x-hidden md:block md:col-span-1 lg:col-span-1 xl:col-span-1 relative"}>
            {data?
                <SideBar cats={data} width={el2}></SideBar>
                :
              <></>
            }
            </div>
            
              <Modal></Modal>
            
            <div className="block md:hidden col-span-12 z-50">
              <div className="w-full fixed bottom-0 h-16">
                <div className="grid grid-cols-11 h-full bg-white shadow py-2">
                  <div className="col-span-12 animation ">
                  <svg className={`${display?"block":"hidden"}`} viewBox="-50 -50 100 100" width="250" >
                    <defs>
                        <path id="sectorpath" d="M0,0 L38.97114317029974,-22.499999999999996 A45,45 0 0 1 38.97114317029974,22.499999999999996 L0,0 A0,0 0 0 0 0,0">
                        </path>
                    <mask id="themask">
                        <use xlinkHref="#sectorpath"  fillOpacity="1"  style={{stroke:"rgb(180,180,180,1)",strokeWidth:"3",fill:"rgb(180, 180, 180,1)"}}>
                        </use>
                    </mask>
                        <use xlinkHref="#sectorpath" id="sector" style={{mask:"url(#themask)"}}></use>
                    </defs>

                    <defs>
                        <path id="sectorpath1" d="M0,0 L38.97114317029974,-22.499999999999996 A45,45 0 0 1 38.97114317029974,22.499999999999996 L0,0 A0,0 0 0 0 0,0"></path>
                    <mask id="themask1">
                    <use xlinkHref="#sectorpath1" style={{stroke:"rgb(180,180,180,1)",strokeWidth:"3",fill:"rgb(180,180,180,1)"}}></use>
                    </mask>
                    <use xlinkHref="#sectorpath1" id="sector1" style={{mask:"url(#themask1)"}}></use>
                    </defs>

                    <defs>
                        <path id="sectorpath2" d="M0,0 L38.97114317029974,-22.499999999999996 A45,45 0 0 1 38.97114317029974,22.499999999999996 L0,0 A0,0 0 0 0 0,0"></path>
                    <mask id="themask2">
                    <use xlinkHref="#sectorpath2" style={{stroke:"rgb(180,180,180,1)",strokeWidth:"3",fill:"rgb(180,180,180,1)"}}></use>
                    </mask>
                    <use xlinkHref="#sectorpath2" id="sector2" style={{mask:"url(#themask2)"}}></use>
                    </defs>

                            <a className={opens?"second":"hidden "}>
                                
                              <g>
                                <use xlinkHref="#sector" transform="rotate(-90)" >
                                </use>
                                <text className="animation-text animation-text-3" x="0" y="-22.5">
                                  حسابي
                                </text>
                              </g>  
                            </a>
                            
                            <a className={opens?"first":"hidden "}>
                              <g>
                                <use xlinkHref="#sector1" transform="rotate(-30)"></use>
                                <text className="animation-text animation-text-2" x="19.48557158514987" y="-11.25">
                                  حسابي
                                </text>
                              </g>
                            </a>
                        
                            <a className={opens?"third":"hidden "}>
                              <g>
                                <use xlinkHref="#sector" transform="rotate(210)"></use>
                                <text  className="animation-text animation-text-1" x="-45" y="-15">
                                  الصفقات
                                </text>
                              </g>
                            </a>
                    </svg>
                  </div>
                  <div className="col-span-2 h-full flex flex-col justify-around items-center">
                    <div className="w-8 h-2" style={{background:"url(./images/orders.svg)",backgroundSize:"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}></div>
                    <span className="text-xs mt-1">السلة</span>
                  </div>
                  <div className="col-span-2 h-full flex flex-col justify-around items-center">
                  <div className="w-8 h-2" style={{background:"url(./images/orders.svg)",backgroundSize:"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}></div>
                    <span className="text-xs mt-1">السلة</span>
                  </div>
                  <div className="col-span-3 h-full flex flex-col justify-center items-center">
                    <svg onClick={toggleopens} xmlns="http://www.w3.org/2000/svg" className="block bar-logo sm:hidden" width="38.07" height="43" viewBox="0 0 38.07 43">
                        <path id="Path_11" data-name="Path 11" d="M-4353.608,780.454l-15.933-9.2a3.1,3.1,0,0,0-3.1,0l-15.933,9.2a3.1,3.1,0,0,0-1.551,2.686v18.4a3.1,3.1,0,0,0,1.551,2.686l15.933,9.2a3.1,3.1,0,0,0,3.1,0l15.933-9.2a3.1,3.1,0,0,0,1.551-2.686v-18.4A3.1,3.1,0,0,0-4353.608,780.454Zm-6.419,22.938a3.981,3.981,0,0,1-3.981-3.98V792.4a8.009,8.009,0,0,0-1.956-5.611,6.559,6.559,0,0,0-5.083-2.148,6.672,6.672,0,0,0-5.094,2.125,7.691,7.691,0,0,0-1.99,5.475,7.856,7.856,0,0,0,2.046,5.6,6.839,6.839,0,0,0,5.218,2.182,8.139,8.139,0,0,0,2.8-.495,10.57,10.57,0,0,0,2.732-1.529V799.7a3.769,3.769,0,0,1-2.815,3.672l-.03.008a12.983,12.983,0,0,1-3.136.371,10.451,10.451,0,0,1-3.126-.484,10.192,10.192,0,0,1-2.811-1.36,11.041,11.041,0,0,1-3.644-4.1,11.851,11.851,0,0,1-1.259-5.476,11.272,11.272,0,0,1,3.125-8.174,10.58,10.58,0,0,1,7.939-3.227,10.97,10.97,0,0,1,5.8,1.6,10.687,10.687,0,0,1,4.048,4.385,9.962,9.962,0,0,1,.933,2.755,26.191,26.191,0,0,1,.281,4.464Z" transform="translate(4390.127 -770.839)" fill="#ffbc00"/>
                    </svg>
                    <div className="w-full h-0.7 rounded shadow mt-4  border-bottom"></div>
                  </div>
                  <div className="col-span-2 h-full flex flex-col justify-around items-center">
                  <div className="w-8 h-2" style={{background:"url(./images/orders.svg)",backgroundSize:"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}></div>
                    <span className="text-xs mt-1">السلة</span>
                  </div>
                  <div className="col-span-2 h-full flex flex-col justify-around items-center">
                  <div className="w-8 h-2" style={{background:"url(./images/orders.svg)",backgroundSize:"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}></div>
                    <span className="text-xs mt-1">السلة</span>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </>
   );

};