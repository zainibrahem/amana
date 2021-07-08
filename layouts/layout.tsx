import React, { useEffect, useRef, useState } from 'react';
import { NavBar } from '../components/navbar/navbar';
import Modal from '../components/modal/modal';
import SideBar from '../components/sidebar/sidebar';
import ProfileSide from '../components/sidebar/profileSidebar';
import FilterSide from '../components/sidebar/FilterSide';
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
    const Route = useAppState('Route');
    const Loading = useAppState('Loading');
    const [opens,setOpens] = useState(false);
    const [widths,setWidths] = useState(0);
    const modal = useAppState('Modal');
    const [data,setData] = useState(null);
    const [userId,setUserId] = useState(0); 
    const CartChange = useAppState('CartChange');
    const [display,setDisplay] = useState(false); 
    const {
      authState: { isAuthenticated },
      authDispatch,
    } = React.useContext<any>(AuthContext);
    const toggleopens = ()=>{
      setOpens(!opens)
      if(!opens){
          setDisplay(true);
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
        setTimeout(()=>{
          dispatch({
            type: 'Loaded',
          });
          console.log('ssssssssssssss')
        }
        ,4000);

       
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
      const [alls,setAlls] = useState(0);
      const [route,setRoute] = useState<string>();
      useEffect(()=>{
        function handleResize() {
          const eleWidth = document.querySelector('#col')?document.querySelector('#col').clientWidth:"";
          eleWidth?
          setEl2(eleWidth):""
        }
        // Add event listener
        window.addEventListener("resize", handleResize);
    
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
      })
      useEffect(() => {
        setRoute(window.location.href);
        
        fetch("https://amanacart.com/api/navbar")
         .then(res => res.json())
         .then(result =>{
           setData(result.data);
           console.log(result.data);
           const wid = document.querySelector('#col').clientWidth;
           var elements = 0;
           var all = 0;
           for(var i = 0 ; i < result.data.carts.length ; i ++ ){
                elements+=result.data.carts[i].items.length;
                all+= parseInt(result.data.carts[i].total_cart);
           }
           setAlls(all);
          //  localStorage.setItem('token','dTvPoqzgand6mMZe4hYzR67GIsAjb51IJm7lXH2enA0Jg7EUlMnb0cUu97KL');
          // localStorage.removeItem('token')
           toggleLoader(elements);
          setEl2(wid) ;
         })
         .catch(e => {
           console.log(e);
       });
     },[CartChange])
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
        const toggleModal = React.useCallback(() => {
          dispatch({
            type: 'TOGGLE_Modal',
          });
        }, [dispatch]
        );
        const handlelogout = () =>{
          console.log('asdasd');
          fetch('https://amanacart.com/api/auth/logout', {
              method: 'post',
              headers: {
                  'Content-Type':'application/json',
                  'Authorization':`Bearer ${localStorage.getItem('token')}`
              }
          })
          .then( async response => {
              const isJson = response.headers.get('content-type')?.includes('application/json');
              const data = isJson && await response.json();
              if (!response.ok) {
                  const error = (data && data.message) || response.status;
                  return Promise.reject(error);
              }
              
              localStorage.removeItem('token');
              window.location.href="/";
          })
      }
  useEffect(() => {
    const wid = document.querySelector('#col').clientWidth;
    setEl2(wid) ;
    setWidths(window.innerWidth);
   
  
  },[])
  const noti = useAppState('notification');
  const notiType = useAppState('notificationType');

    return (
        <>
        
          <div className={`fixed bottom-3 left-3 ${notiType=="error"?"bg-red-400":"bg-green-400"} transition-all text-white text-center rounded duration-500 ${noti?"opacity-100":"opacity-0 hidden"} z-50 bg-op-50 w-72 py-4 px-5`} >
            {noti}
          </div>
        
        <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 sm:col-span-12 h-13 md:col-span-12 relative lg:col-span-12 xl:col-span-12">
              {data?
              <NavBar alls={alls} addtocart={addtocart} carts={data} auth={isAuthenticated}  toggleHandler={toggleHandler}></NavBar>
              :<></>}
            </div>
            <div className={isDrawerOpen?"contentss relative pb-16 md:pb-0 overflow-hidden col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-9 xl:col-span-10 pl-4 pr-4 lg:pr-0":"relative sm:col-span-12 sm:pr-4 md:pr-1 md:col-span-11 lg:col-span-11 xl:col-span-11 pl-4 overflow-hidden contentss pb-16 md:pb-0"}>
               {data?
               <>
                {props.children}
                {route.indexOf('dashboard')==-1 && route.indexOf('checkout') ==-1?
                <Footer></Footer>
                :""
                }
               </>
               :
               <></>
               }
            </div>
            <div id="col" className={isDrawerOpen?"hidden relative sm:col-span-4 md:col-span-3 lg:block lg:col-span-3 xl:col-span-2 overflow-x-hidden":"hidden overflow-x-hidden md:block md:col-span-1 lg:col-span-1 xl:col-span-1 relative"}>
            {data?
            route.indexOf('dashboard')==-1&&route.indexOf('categories')==-1?
                <SideBar cats={data} width={el2}></SideBar>
                :
              <>
              {route.indexOf('categories')!=-1?
              <>
              <FilterSide width={el2}></FilterSide>
              </>
              :
              <ProfileSide width={el2}></ProfileSide>
              }
              
              </>
              :
              <>
              
              </>
            }
            </div>
            
              <Modal></Modal>
            
        {data?
          
          <div className="block md:hidden col-span-12 z-50">
              <div className="w-full fixed bottom-0 h-16">
                <div className="grid grid-cols-11 h-full bg-white shadow pb-2">
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

                              <a href="/stores" className={opens?"second":"hidden "}>
                                
                              <g className="relative">
                                <use xlinkHref="#sector" transform="rotate(-90)" >
                                </use>
                                <text className="absolute left-1/2 transform -translate-x-1/2 animation-text animation-text-3" x="0" y="-22.5">
                                  المتاجر
                                </text>
                              </g>  
                            </a>
                            
                            <a href="/brands" className={opens?"first":"hidden "}>
                              <g>
                                <use xlinkHref="#sector1" transform="rotate(-30)"></use>
                                <text className="animation-text animation-text-2" x="19.48557158514987" y="-11.25">
                                    البراندات
                                </text>
                              </g>
                            </a>
                        
                            {localStorage.getItem('token')?
                              <a href="/dashboard/coupons" className={opens?"third":"hidden "}>
                                    
                                <g className="relative">
                                  <use xlinkHref="#sector" transform="rotate(210)" >
                                  </use>
                                  <text className="animation-text animation-text-1" x="-45" y="-15">
                                    الكوبونات
                                  </text>
                                </g>  
                              </a>
                            :
                            <a href="/offers" className={opens?"third":"hidden "}>
                              <g>
                                <use xlinkHref="#sector" transform="rotate(210)"></use>
                                <text  className="animation-text animation-text-1" x="-45" y="-15">
                                    العروض
                                </text>
                              </g>
                            </a>
                            }
                    </svg>
                  </div>
                 
                  {/* <div className="w-8 h-2" style={{background:`url(${Route}/images/shopping-cart.svg)`,backgroundSize:"contain !important",backgroundPosition:"center !important",backgroundRepeat:"no-repeat !important"}}></div> */}
                    {/* <img className="w-8 h-2" src={`${Route}/images/shopping-cart.svg`} alt="" /> */}
                    {/* <img className="w-5" src="https://img.icons8.com/ios/50/000000/shopping-cart-loaded--v1.png"/> */}
                  {localStorage.getItem('token')?
                      <div className="col-span-2 h-full flex flex-col justify-center items-center">
                        <img className="w-5 " src={`${Route}/images/logout.svg`}/>
                        <span  onClick={handlelogout} className="text-xs ">خروج</span>
                      </div>
                    :
                      <div className="col-span-2 h-full flex flex-col justify-center items-center">
                        <img className="w-5" src={`${Route}/images/logout.svg`}/>
                        <span className="text-xs mt-1">استكشاف</span>  
                      </div>
                    }
                  
                  {!localStorage.getItem('token')?
                    <div className="col-span-2 h-full flex flex-col justify-center items-center">
                      {/* <div className="w-8 h-2" style={{background:`url(${Route}/images/orders.svg)`,backgroundSize:"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}></div> */}
                      {/* <img className="w-5 " src="https://img.icons8.com/ios/50/000000/administrator-male--v1.png"/> */}
                      <img className="w-5 " src={`${Route}/images/icons/user (1).svg`}/>
                      <span onClick={toggleModal} className="text-xs">حسابي</span>
                    </div>
                    :
                    <div className="col-span-2 h-full flex flex-col justify-center items-center">
                    {/* <div className="w-8 h-2" style={{background:`url(${Route}/images/orders.svg)`,backgroundSize:"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}></div> */}
                    {/* <img className="w-5 " src="https://img.icons8.com/ios/50/000000/administrator-male--v1.png"/> */}
                    <a href="/dashboard/profile" className="flex flex-col justify-center items-center">
                      <img className="w-5 " src={`${Route}/images/icons/user (1).svg`}/>
                      <span className="text-xs mt-1">حسابي</span>
                    </a>
                  </div>
                  }
                  <div className="col-span-3 h-full flex flex-col justify-center items-center">
                    <svg onClick={toggleopens} xmlns="http://www.w3.org/2000/svg" className="block bar-logo sm:hidden" width="38.07" height="43" viewBox="0 0 38.07 43">
                        <path id="Path_11" data-name="Path 11" d="M-4353.608,780.454l-15.933-9.2a3.1,3.1,0,0,0-3.1,0l-15.933,9.2a3.1,3.1,0,0,0-1.551,2.686v18.4a3.1,3.1,0,0,0,1.551,2.686l15.933,9.2a3.1,3.1,0,0,0,3.1,0l15.933-9.2a3.1,3.1,0,0,0,1.551-2.686v-18.4A3.1,3.1,0,0,0-4353.608,780.454Zm-6.419,22.938a3.981,3.981,0,0,1-3.981-3.98V792.4a8.009,8.009,0,0,0-1.956-5.611,6.559,6.559,0,0,0-5.083-2.148,6.672,6.672,0,0,0-5.094,2.125,7.691,7.691,0,0,0-1.99,5.475,7.856,7.856,0,0,0,2.046,5.6,6.839,6.839,0,0,0,5.218,2.182,8.139,8.139,0,0,0,2.8-.495,10.57,10.57,0,0,0,2.732-1.529V799.7a3.769,3.769,0,0,1-2.815,3.672l-.03.008a12.983,12.983,0,0,1-3.136.371,10.451,10.451,0,0,1-3.126-.484,10.192,10.192,0,0,1-2.811-1.36,11.041,11.041,0,0,1-3.644-4.1,11.851,11.851,0,0,1-1.259-5.476,11.272,11.272,0,0,1,3.125-8.174,10.58,10.58,0,0,1,7.939-3.227,10.97,10.97,0,0,1,5.8,1.6,10.687,10.687,0,0,1,4.048,4.385,9.962,9.962,0,0,1,.933,2.755,26.191,26.191,0,0,1,.281,4.464Z" transform="translate(4390.127 -770.839)" fill="#ffbc00"/>
                    </svg>
                    <div className="w-full h-0.7 rounded shadow mt-4  border-bottom"></div>
                  </div>
                  <div className="col-span-2 h-full flex flex-col justify-around items-center">
                  {/* <div className="w-8 h-2" style={{background:`url(${Route}/images/orders.svg)`,backgroundSize:"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}></div> */}
                  {/* <img className="w-8 h-2" src={`${Route}/images/icons/profile.svg`} alt="" /> */}
                  {/* <img className="w-5" src="https://img.icons8.com/material-outlined/48/000000/sorting-answers.png"/> */}
                  {localStorage.getItem('token')?
                    <a href="/dashboard/order" className="flex flex-col justify-around items-center">
                      <img src={`${Route}/images/icons/ordersblack.svg`} className="w-5 " alt="" />
                      <span className="text-xs mt-1">طلباتك</span>
                    </a>
                    :
                    <a href="/allcats" className="flex flex-col justify-around items-center">
                      <img className="w-5" src={`${Route}/images/icons/list.svg`}/>
                      <span className="text-xs mt-1">تصنيفات</span>
                    </a>
                  }
                  </div>
                  <div className="col-span-2 h-full flex flex-col justify-around items-center">
                    {/* <div className="w-8 h-2" style={{background:`url(${Route}/images/orders.svg)`,backgroundSize:"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}></div> */}
                    {localStorage.getItem('token')?
                    
                      <a href="/dashboard" className="flex flex-col justify-around items-center">
                      <img className="w-5" src={`${Route}/images/icons/home.svg`}/>
                        <span className="text-xs mt-1">الرئيسية</span>
                      </a>
                    :
                      <a href="/" className="flex flex-col justify-around items-center">
                        <img className="w-5" src={`${Route}/images/icons/home.svg`}/>
                        <span className="text-xs mt-1">الرئيسية</span>
                      </a>
                    }
                  </div>
                </div>
              </div>
            </div>
        
      :<></>
      }
        </div>
      </>
   );

};