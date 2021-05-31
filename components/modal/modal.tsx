import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppState } from '../../contexts/app/app.provider';
import { AuthContext } from '../../contexts/auth/auth.context';

// import Slide1 from '../../public/images/slider/maher.png';
export default function Modal (props) {
    const dispatch = useAppDispatch();
    const Modal = useAppState("Modal");
    const [userId,setUserId] = useState(0);
    const[email,setEmail] = useState();
    const[password,setPassword] = useState();
    const [error,setError] = useState(null);
    const [modalType,setModalType] = useState(0);
    const [message,setMessgae] = useState(null);
    const [confirmation,setConfirmation] = useState(null);
    const [name,setName] = useState(null);
    const [subscribe,setSubscibe] = useState(false);
    const [agree,setAgree] = useState(false);
    const handleemail = (e) =>{
        setEmail(e.target.value)
    }
    const togglesubscibe = () =>{
        setSubscibe(!subscribe);
    }
    const toggleagree = () =>{
        setAgree(!agree);
    }
    const handlename = (e) =>{
        setName(e.target.value)
    }
    
    const handlepassword = (e) =>{
        setPassword(e.target.value)
    }
    const  handleRegister = ()=>{
        var details = {
            'name': name,
            'email': email,
            'password': password,
            'password_confirmation':confirmation,
            'agree':agree,
            'subscribe':subscribe
        };
   
        var formBody = [] ;
        var sss = '';
        for (var property in details) {
          var encodedKey = encodeURIComponent(property);
          var encodedValue = encodeURIComponent(details[property]);
          formBody.push(encodedKey + "=" + encodedValue);
        }
        sss = formBody.join("&");
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: sss
        };
        var agg = agree?1:0;
        var sub = subscribe?1:0;
        fetch('https://amanacart.com/api/auth/register', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                password_confirmation:confirmation,
                agree:agg,
                subscribe:sub
            })
        })
        .then( async response => {
            const isJson = response.headers.get('content-type')?.includes('application/json');
            const data = isJson && await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                setError(error);
                return Promise.reject(error);
            }
            console.log(data);
            localStorage.setItem('token', data.data.api_token)
            handleLogin();
            setModalType(0);
        })
      }
    useEffect(()=>{
        if(password != confirmation){
            setError('كلمتا السر غير متطابقتين');
            console.log(password);
            console.log(confirmation);
        }
        else{
            setError(null);
        }
    },[confirmation])
    const handleconfirmation = (e) =>{
        setConfirmation(e.target.value);
       
        
        
    }
    const toggleModal = React.useCallback(() => {
        dispatch({
          type: 'TOGGLE_Modal',
        });
      }, [dispatch]
      );
      
      const {
        authState: { isAuthenticated },
        authDispatch,
      } = React.useContext<any>(AuthContext);

      const modalRed = useRef(null);
      const handleJoin = () => {
        authDispatch({
          type: 'SIGNIN_SUCCESS',
        });
        toggleModal();
       
    }
    const toggleReset = (e) => {
        setModalType(e);
    }
    const handleForget = () =>{
        fetch('https://amanacart.com/api/auth/forgot', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                email: email,
            })
        })
        .then( async response => {
            const isJson = response.headers.get('content-type')?.includes('application/json');
            const data = isJson && await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                setError(error);
                return Promise.reject(error);
            }
            setMessgae(data.message);
            setModalType(4);
        })
    }
    const  handleLogin = ()=>{
        var details = {
            'email': email,
            'password': password,
        };
   
        var formBody = [] ;
        var sss = '';
        for (var property in details) {
          var encodedKey = encodeURIComponent(property);
          var encodedValue = encodeURIComponent(details[property]);
          formBody.push(encodedKey + "=" + encodedValue);
        }
        sss = formBody.join("&");
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: sss
        };
        fetch('https://amanacart.com/api/auth/login', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                email: email,
                password: password,
            })
        })
        .then( async response => {
            const isJson = response.headers.get('content-type')?.includes('application/json');
            const data = isJson && await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                setError(error);
                return Promise.reject(error);
            }
            localStorage.setItem('token', data.data.api_token)

           handleJoin();
        })
      }
      function useOutsideAlerters(ref) {
        useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            
            function handleClickOutside(event) {
                if (event.target.id == "overlay" && ref.current && !ref.current.contains(event.target)) {
                        toggleModal()
                    }
            }
    
            // Bind the event listener
            document.addEventListener("click", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }
      useOutsideAlerters(modalRed);
    return(
        <div id="overlay"  className={` ${Modal?"block":"hidden"}  fixed w-screen h-screen bg-black bg-opacity-80  z-50`}>
            <div ref={modalRed} className={`positionTopmobile ${Modal?"slideUps":"slideDowns"}  overflow-hidden modal rounded grid grid-cols-12 w-3/4 md:w-2/3  bg-white relative left-1/2 top-1/2 transform -translate-y-2/4 -translate-x-2/4`} style={{minHeight:"32.1rem"}}>
            <div className="hidden md:block col-span-6 rounded  relative" style={{background:"url('./images/secondback.png')",backgroundSize:"cover",backgroundPosition:"right",backgroundRepeat:"no-repeat"}}>
                <div className="bg-black rounded bg-opacity-90 w-full h-full absolute top-0 left-0"></div>
                <div className="absolute rounded top-0 -right-1 w-full h-full" style={{background:"url('./images/signinback.png')",backgroundSize:"cover",backgroundPosition:"center right",backgroundRepeat:"no-repeat"}}></div>
                <div className="relative z-10 w-full h-full flex flex-col py-2 justify-between items-center">
                    <svg className="w-40 mt-12" xmlns="http://www.w3.org/2000/svg" width="210.35" height="50.178" viewBox="0 0 210.35 50.178">
                        <g id="Group_10" data-name="Group 10" transform="translate(53.943 12.936)">
                            <g id="Group_9" data-name="Group 9" transform="translate(0 0)">
                            <g id="Group_8" data-name="Group 8">
                                <g id="Group_5" data-name="Group 5" transform="translate(0 0.315)">
                                <g id="Group_4" data-name="Group 4">
                                    <path id="Path_5" data-name="Path 5" d="M-3957.629,859.734a.671.671,0,0,1-.671-.672V847.468a8.933,8.933,0,0,0-2.182-6.258,7.314,7.314,0,0,0-5.668-2.4,7.44,7.44,0,0,0-5.682,2.37,8.579,8.579,0,0,0-2.219,6.108,8.759,8.759,0,0,0,2.282,6.246,7.627,7.627,0,0,0,5.818,2.433,9.069,9.069,0,0,0,3.123-.552,10.833,10.833,0,0,0,2.029-1,.67.67,0,0,1,1.019.575v3.064a.665.665,0,0,1-.351.59,12.5,12.5,0,0,1-2.823,1.075,14.488,14.488,0,0,1-3.5.414,11.671,11.671,0,0,1-3.487-.539,11.354,11.354,0,0,1-3.135-1.518,12.308,12.308,0,0,1-4.064-4.578,13.213,13.213,0,0,1-1.4-6.108,12.571,12.571,0,0,1,3.486-9.118,11.8,11.8,0,0,1,8.854-3.6,12.236,12.236,0,0,1,6.471,1.781,11.919,11.919,0,0,1,4.515,4.891,11.1,11.1,0,0,1,1.04,3.073,29.132,29.132,0,0,1,.314,4.979v9.662a.672.672,0,0,1-.672.672Z" transform="translate(3978.542 -834.676)" fill="#fff"/>
                                    <path id="Path_6" data-name="Path 6" d="M-3705.6,859.734a.761.761,0,0,1-.761-.761V845.512a11.372,11.372,0,0,1,2.633-7.926,9.1,9.1,0,0,1,7.1-2.909,9.29,9.29,0,0,1,4.214.966,9.254,9.254,0,0,1,2.777,2.142.757.757,0,0,0,1.124,0,9.456,9.456,0,0,1,2.8-2.158,9.233,9.233,0,0,1,4.189-.953,9.062,9.062,0,0,1,7.061,2.922,11.347,11.347,0,0,1,2.646,7.914v13.461a.761.761,0,0,1-.761.761h-2.841a.761.761,0,0,1-.761-.761V844.684a5.847,5.847,0,0,0-1.48-4.164,5.05,5.05,0,0,0-3.863-1.58,5.047,5.047,0,0,0-3.863,1.58,5.843,5.843,0,0,0-1.479,4.164v14.288a.762.762,0,0,1-.762.761h-2.842a.762.762,0,0,1-.761-.761V844.684a5.786,5.786,0,0,0-1.5-4.164,5.129,5.129,0,0,0-3.888-1.58,5.038,5.038,0,0,0-3.875,1.58,5.874,5.874,0,0,0-1.468,4.164v14.288a.761.761,0,0,1-.761.761Z" transform="translate(3736.309 -834.676)" fill="#fff"/>
                                    <path id="Path_7" data-name="Path 7" d="M-3332.572,859.734a.671.671,0,0,1-.671-.672V847.468a8.935,8.935,0,0,0-2.182-6.258,7.315,7.315,0,0,0-5.669-2.4,7.44,7.44,0,0,0-5.681,2.37,8.577,8.577,0,0,0-2.22,6.108,8.761,8.761,0,0,0,2.283,6.246,7.628,7.628,0,0,0,5.819,2.433,9.07,9.07,0,0,0,3.123-.552,11.006,11.006,0,0,0,2.26-1.151.509.509,0,0,1,.787.427v3.456a.51.51,0,0,1-.265.449,12.528,12.528,0,0,1-2.907,1.12,14.489,14.489,0,0,1-3.5.414,11.67,11.67,0,0,1-3.487-.539,11.357,11.357,0,0,1-3.135-1.518,12.3,12.3,0,0,1-4.063-4.578,13.213,13.213,0,0,1-1.4-6.108,12.571,12.571,0,0,1,3.486-9.118,11.8,11.8,0,0,1,8.854-3.6,12.236,12.236,0,0,1,6.471,1.781,11.918,11.918,0,0,1,4.515,4.891,11.118,11.118,0,0,1,1.041,3.073,29.184,29.184,0,0,1,.313,4.979v9.824a.51.51,0,0,1-.51.51Z" transform="translate(3422.262 -834.676)" fill="#fff"/>
                                    <path id="Path_8" data-name="Path 8" d="M-3080.49,859.734a.813.813,0,0,1-.813-.813V846.314q0-5.367,2.859-8.5a9.821,9.821,0,0,1,7.625-3.135,9.743,9.743,0,0,1,7.6,3.135q2.835,3.136,2.834,8.5V858.92a.813.813,0,0,1-.813.813h-2.738a.813.813,0,0,1-.813-.813V845.512a6.706,6.706,0,0,0-1.693-4.741,5.69,5.69,0,0,0-4.377-1.831,5.74,5.74,0,0,0-4.377,1.831,6.648,6.648,0,0,0-1.719,4.741V858.92a.813.813,0,0,1-.813.813Z" transform="translate(3180.029 -834.676)" fill="#fff"/>
                                    <path id="Path_9" data-name="Path 9" d="M-2831.065,859.734a.672.672,0,0,1-.672-.672V847.468a8.932,8.932,0,0,0-2.182-6.258,7.314,7.314,0,0,0-5.668-2.4,7.44,7.44,0,0,0-5.682,2.37,8.577,8.577,0,0,0-2.22,6.108,8.76,8.76,0,0,0,2.282,6.246,7.63,7.63,0,0,0,5.819,2.433,9.07,9.07,0,0,0,3.123-.552,10.807,10.807,0,0,0,2.029-1,.67.67,0,0,1,1.019.575v3.064a.665.665,0,0,1-.35.59,12.512,12.512,0,0,1-2.822,1.075,14.488,14.488,0,0,1-3.5.414,11.668,11.668,0,0,1-3.486-.539,11.354,11.354,0,0,1-3.135-1.518,12.3,12.3,0,0,1-4.063-4.578,13.207,13.207,0,0,1-1.4-6.108,12.572,12.572,0,0,1,3.486-9.118,11.8,11.8,0,0,1,8.854-3.6,12.236,12.236,0,0,1,6.471,1.781,11.913,11.913,0,0,1,4.515,4.891,11.1,11.1,0,0,1,1.041,3.073,29.162,29.162,0,0,1,.314,4.979v9.662a.672.672,0,0,1-.672.672Z" transform="translate(2975.938 -834.676)" fill="#fff"/>
                                </g>
                                </g>
                                <g id="Group_7" data-name="Group 7" transform="translate(151.834)">
                                <g id="Group_6" data-name="Group 6">
                                    <path id="Path_10" data-name="Path 10" d="M-2594.076,834.109a2.283,2.283,0,0,1-2.276,2.313,2.3,2.3,0,0,1-2.3-2.313,2.3,2.3,0,0,1,2.305-2.3A2.278,2.278,0,0,1-2594.076,834.109Zm-4.081.008a1.828,1.828,0,0,0,1.8,1.88,1.822,1.822,0,0,0,1.79-1.88,1.832,1.832,0,0,0-1.8-1.88A1.831,1.831,0,0,0-2598.157,834.116Zm2.693-.746a1.617,1.617,0,0,0-.708-.164.851.851,0,0,0-.925.925.881.881,0,0,0,.917.933,1.463,1.463,0,0,0,.746-.179l.112.38a1.7,1.7,0,0,1-.925.239,1.286,1.286,0,0,1-1.373-1.351,1.384,1.384,0,0,1,1.448-1.388,1.416,1.416,0,0,1,.82.209Z" transform="translate(2598.649 -831.811)" fill="#fff"/>
                                </g>
                                </g>
                            </g>
                            </g>
                        </g>
                        <path id="Path_11" data-name="Path 11" d="M-4347.512,782.059l-18.593-10.735a3.62,3.62,0,0,0-3.62,0l-18.593,10.735a3.62,3.62,0,0,0-1.81,3.135v21.469a3.62,3.62,0,0,0,1.81,3.135l18.593,10.735a3.619,3.619,0,0,0,3.62,0l18.593-10.735a3.618,3.618,0,0,0,1.81-3.135V785.193A3.618,3.618,0,0,0-4347.512,782.059ZM-4355,808.826a4.645,4.645,0,0,1-4.646-4.645v-8.188a9.344,9.344,0,0,0-2.283-6.548,7.652,7.652,0,0,0-5.931-2.506,7.784,7.784,0,0,0-5.944,2.48,8.975,8.975,0,0,0-2.322,6.389,9.165,9.165,0,0,0,2.388,6.534,7.98,7.98,0,0,0,6.088,2.546,9.5,9.5,0,0,0,3.268-.577,12.328,12.328,0,0,0,3.188-1.785v1.991a4.4,4.4,0,0,1-3.285,4.285l-.036.009a15.154,15.154,0,0,1-3.66.433,12.2,12.2,0,0,1-3.648-.564,11.9,11.9,0,0,1-3.28-1.587,12.883,12.883,0,0,1-4.252-4.79,13.829,13.829,0,0,1-1.469-6.39,13.154,13.154,0,0,1,3.646-9.539,12.346,12.346,0,0,1,9.264-3.766,12.8,12.8,0,0,1,6.77,1.863,12.467,12.467,0,0,1,4.725,5.117,11.649,11.649,0,0,1,1.089,3.214,30.613,30.613,0,0,1,.328,5.209Z" transform="translate(4390.127 -770.839)" fill="#ffbc00"/>
                    </svg>
                    
                    <div className="flex flex-col justify-between items-end">
                        <span className="text-xl text-white text-right">
                            لراحتك الشخصية
                        </span>
                        <span className="text-xs text-white text-right">
                            كل ما تحتاجه لدينا
                        </span>
                    </div>
                    <div className="flex w-full flex-col justify-start items-center">
                        <div className="grid grid-cols-12">
                            <div className="col-span-3"></div>
                            <div className="col-span-6">
                                <div className="flex w-full flex-col justify-start items-center text-white">
                                    <span className="text-xs">حمل التطبيق</span>
                                    <div className="flex justify-between items-center mt-2">
                                        <img className="w-24" src="./images/google.png" alt="" />
                                        <img className="w-24 ml-2" src="./images/appstore.png" alt="" />
                                    </div>
                                
                                </div>
                            </div>
                            <div className="col-span-3"></div>
                        </div>
                        <span className="mt-4 text-white" style={{fontSize:"12px"}}>
                            جميع الحقوق محفوظة لـ شركة أمانة
                            &copy;    
                            2021
                            ,
                            مسجلة في سلطنة عمان
                        </span>
                    </div>
                   
                </div>
            </div>

                <div  className={`${modalType==0? "centered" :"slideLeft" } col-span-12 md:col-span-6 rounded relative flex flex-col justify-between items-center pt-0 md:pt-12 p-3 md:p-12`}>
                        <div className="flex flex-col w-full justify-center items-center ">
                            <div className="w-full h-20 flex justify-center items-center" style={{background:"url(./images/border.png)",backgroundPosition:"center bottom",backgroundRepeat:"no-repeat"}}>
                                <span className="text-sm cursor-pointer md:text-md">تسجيل الدخول</span>
                            </div>
                        </div>
                        <div className="w-full flex justify-between rounded items-center p-3 shadow">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18.305" height="18.674" viewBox="0 0 18.305 18.674">
                                <g id="Group_5195" data-name="Group 5195" transform="translate(0 0)">
                                    <path id="Path_2" data-name="Path 2" d="M281.068,225a10.979,10.979,0,0,0-.161-1.9H272.1v3.6h5.043a4.322,4.322,0,0,1-1.866,2.837v2.333h3.009A9.118,9.118,0,0,0,281.068,225Z" transform="translate(-262.763 -215.445)" fill="#4285f4"/>
                                    <path id="Path_3" data-name="Path 3" d="M37.243,331.847a8.937,8.937,0,0,0,6.189-2.254l-3.009-2.333A5.663,5.663,0,0,1,32,324.3H28.9v2.4A9.338,9.338,0,0,0,37.243,331.847Z" transform="translate(-27.907 -313.174)" fill="#34a853"/>
                                    <path id="Path_4" data-name="Path 4" d="M4.045,155.98a5.592,5.592,0,0,1,0-3.575V150H.943a9.345,9.345,0,0,0,0,8.385Z" transform="translate(0.05 -144.853)" fill="#fbbc04"/>
                                    <path id="Path_5" data-name="Path 5" d="M37.243,3.677a5.074,5.074,0,0,1,3.582,1.4h0l2.666-2.666A8.973,8.973,0,0,0,37.243-.018,9.335,9.335,0,0,0,28.9,5.128l3.1,2.4A5.585,5.585,0,0,1,37.243,3.677Z" transform="translate(-27.907 0.018)" fill="#ea4335"/>
                                </g>
                            </svg>

                            <span className="text-sm md:text-md cursor-pointer">تسجيل دخول عن طريق غوغل</span>
                        </div>
                        <div className="w-full flex justify-between rounded items-center p-3 shadow mt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14.344" height="26.782" viewBox="0 0 14.344 26.782">
                                <path id="Icon_awesome-facebook-f" data-name="Icon awesome-facebook-f" d="M13.4,15.065l.744-4.847H9.5V7.073A2.423,2.423,0,0,1,12.23,4.454h2.114V.327A25.784,25.784,0,0,0,10.591,0C6.761,0,4.257,2.321,4.257,6.524v3.694H0v4.847H4.257V26.782H9.5V15.065Z" fill="#2359a3"/>
                            </svg>
                            <span className="text-sm md:text-md cursor-pointer">تسجيل دخول عن طريق فيسبوك</span>
                        </div>
                        <div className="w-full flex justify-between items-center mt-3">
                            <hr className="w-5/12" />
                            <span className="text-xs text-gray-300">أو</span>
                            <hr className="w-5/12" />
                        </div>
                        
                        <div className="form w-full grid grid-cols-12">
                            <div className="col-span-1 2xl:col-span-2"></div>
                            <div className="col-span-10 2xl:col-span-8 flex flex-col justify-center items-center">
                                {error?
                                <span className="error text-right text-xs w-full text-red-500">
                                    {error}
                                </span>:<></>
                                }
                                <label htmlFor="" className="self-end text-xs">البريد الالكتروني</label>
                                <input type="text" onChange={handleemail}    className="w-full mt-2 rounded h-13  bg-gray-100 px-2 focus:bg-white focus:text-gray-500 focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent" dir="rtl" placeholder="email@example.com" />
                                <label htmlFor="" className="self-end text-xs mt-2">كلمة السر</label>
                                <input type="password" onChange={handlepassword} className="w-full mt-2 rounded h-13   bg-gray-100 px-2 focus:bg-white focus:text-gray-500 focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent" dir="rtl" placeholder="***" />
                                <button onClick={handleLogin} className="cursor-pointer w-full text-white flex justify-center items-center rounded bg-yellow-500 mt-2 h-13">
                                    تسجيل دخول
                                </button>
                                <div className="w-full flex flex-col justify-between items-center mt-2">
                                    <div className="w-full flex justify-between items-center">
                                        <div className="flex justify-between items-center">
                                            <label htmlFor="" className="text-xs mr-2">تذكرني</label>
                                            <input type="checkbox" className="rounded-full bg-white border-2 w-4 h-4 checked:bg-yellow-500 checked:border-transparent appearance-none" name="" id="" />
                                        </div>
                                        <span onClick={()=>toggleReset(1)} className="text-xs self-end flex cursor-pointer ">نسيت كلمة السر؟</span>
                                    </div>
                                    <span className="text-xs self-end mt-2">
                                        ليس لديك حساب؟ <span onClick={()=>toggleReset(5)} className="text-xs text-yellow-500 cursor-pointer">قم بالتسجيل الان</span>
                                    </span>
                                </div>
                            </div>
                            <div className="col-span-1 2xl:col-span-2"></div>
                        </div>
                        <div className="hidden md:blockgrid grid-cols-12 w-full">
                                <div className="hidden md:block col-span-3"></div>
                                <div className="col-span-12 md:col-span-6">
                                    <div className="flex w-full flex-col justify-start items-center text-white">
                                        <span className="text-xs">حمل التطبيق</span>
                                        <div className="flex justify-between items-center mt-2">
                                            <img className="w-24" src="./images/google.png" alt="" />
                                            <img className="w-24 ml-2" src="./images/appstore.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden md:block col-span-3"></div>
                            </div>
                    </div>
                
                <div  className={`${modalType==1? "centered" :"slidesleft" } col-span-12 md:col-span-6 rounded relative flex flex-col justify-between items-center pt-0 md:pt-12 p-3 md:p-12`}>
                    <div className="flex flex-col w-full justify-center items-center ">
                        <div className="w-full h-20 flex justify-center items-center" style={{background:"url(./images/border.png)",backgroundPosition:"center bottom",backgroundRepeat:"no-repeat"}}>
                            <span className="text-sm md:text-md">إعادة ضبط كلمة السر</span>
                        </div>
                    </div>
                    
                    <div className="form w-full grid grid-cols-12">
                        <div className="col-span-1 2xl:col-span-2"></div>
                        <div className="col-span-10 2xl:col-span-8 flex flex-col justify-center items-center">
                            {error?
                            <span className="error text-right text-xs w-full text-red-500">
                                {error}
                            </span>:<></>
                            }
                            <label htmlFor="" className="self-end text-xs">البريد الالكتروني</label>
                            <input type="text" onChange={handleemail}    className=" w-full mt-4 rounded h-13  bg-gray-100 px-2 focus:bg-white focus:text-gray-500 focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent" dir="rtl" placeholder="email@example.com" />
                            
                            <button onClick={handleForget} className="w-full mt-4 text-white flex justify-center items-center rounded bg-yellow-500  h-13">
                                إرسال
                            </button>

                            <div className="w-full flex flex-col justify-between items-center mt-2">
                                <div className="w-full flex justify-end items-center">
                                
                                    <span onClick={()=>toggleReset(0)} className="text-xs self-end flex cursor-pointer">تسجيل الدخول</span>
                                </div>
                                <span className="text-xs self-end mt-2">
                                    ليس لديك حساب؟ <span onClick={()=>toggleReset(5)} className="text-xs text-yellow-500 cursor-pointer">قم بالتسجيل الان</span>
                                </span>
                            </div>
                          
                        </div>
                        <div className="col-span-1 2xl:col-span-2"></div>
                    </div>
                    
                    
                    <div className="hidden md:blockgrid grid-cols-12 w-full">
                            <div className="hidden md:block col-span-3"></div>
                            <div className="col-span-12 md:col-span-6">
                                <div className="flex w-full flex-col justify-start items-center text-white">
                                    <span className="text-xs">حمل التطبيق</span>
                                    <div className="flex justify-between items-center mt-2">
                                        <img className="w-24" src="./images/google.png" alt="" />
                                        <img className="w-24 ml-2" src="./images/appstore.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="hidden md:block col-span-3"></div>
                        </div>
                    
                    <div className="grid grid-cols-12">
                        
                        <div className="col-span-1 2xl:col-span-2  mt-6"></div>
                        <div className="col-span-10 2xl:col-span-8 mt-6">
                            <span className="w-full text-xs  text-right">
                                عند الإتمام فإنك توافق على الشروط والخصوصية الخاصة بشركة أمانة
                                <span className="text-yellow-500 mr-2">الشروط والخصوصية</span>
                            </span>
                        </div>
                        <div className="col-span-1 2xl:col-span-2 mt-6"></div>
                    </div>
                  
                </div>
            

                <div  className={`${modalType==4? "centered" :"slidesleft" } col-span-12 md:col-span-6 rounded relative flex flex-col justify-between items-center pt-0 md:pt-12 p-3 md:p-12`}>
                    <div className="flex flex-col w-full justify-center items-center ">
                        <div className="w-full h-20 flex justify-center items-center" style={{background:"url(./images/border.png)",backgroundPosition:"center bottom",backgroundRepeat:"no-repeat"}}>
                            <span className="text-sm md:text-md">إعادة ضبط كلمة السر</span>
                        </div>
                    </div>
                    
                    <div className="form w-full grid grid-cols-12">
                        <div className="col-span-1 2xl:col-span-2"></div>
                        <div className="col-span-10 2xl:col-span-8 flex flex-col justify-center items-center">
                            {error?
                            <span className="error text-right text-xs w-full text-red-500">
                                {error}
                            </span>:<></>
                            }
                           
                            <span>سيتم التحقق من تواجد بريدك الالكتروني في بياناتنا ثم نرسل لك بريد بخطوات إعادة ضبط كلمة السر</span>

                            <div className="w-full flex flex-col justify-between items-center mt-2">
                                <div className="w-full flex justify-end items-center">
                                
                                <a href="/">
                                    <span className="text-xs self-end flex ">العودة للصفحة الرئيسية</span>
                                </a> 
                                </div>
                                <span className="text-xs self-end mt-2">
                                    ليس لديك حساب؟ <span onClick={()=>toggleReset(5)} className="text-xs text-yellow-500 cursor-pointer">قم بالتسجيل الان</span>
                                </span>
                            </div>
                          
                        </div>
                        <div className="col-span-1 2xl:col-span-2"></div>
                    </div>
                    
                    
                    <div className="hidden md:blockgrid grid-cols-12 w-full">
                            <div className="hidden md:block col-span-3"></div>
                            <div className="col-span-12 md:col-span-6">
                                <div className="flex w-full flex-col justify-start items-center text-white">
                                    <span className="text-xs">حمل التطبيق</span>
                                    <div className="flex justify-between items-center mt-2">
                                        <img className="w-24" src="./images/google.png" alt="" />
                                        <img className="w-24 ml-2" src="./images/appstore.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="hidden md:block col-span-3"></div>
                        </div>
                    
                    <div className="grid grid-cols-12">
                        
                        <div className="col-span-1 2xl:col-span-2  mt-6"></div>
                        <div className="col-span-10 2xl:col-span-8 mt-6">
                            <span className="w-full text-xs  text-right">
                                عند الإتمام فإنك توافق على الشروط والخصوصية الخاصة بشركة أمانة
                                <span className="text-yellow-500 mr-2">الشروط والخصوصية</span>
                            </span>
                        </div>
                        <div className="col-span-1 2xl:col-span-2 mt-6"></div>
                    </div>
                  
                </div>
            
                <div  className={`${modalType==5? "centered" :"slideLeft" } col-span-12 md:col-span-6 rounded relative flex flex-col justify-between items-center pt-0 md:pt-3 p-3 md:p-12`}>
                        <div className="flex flex-col w-full justify-center items-center ">
                            <div className="w-full h-20 flex justify-center items-center" style={{background:"url(./images/border.png)",backgroundPosition:"center bottom",backgroundRepeat:"no-repeat"}}>
                                <span className="text-sm md:text-md cursor-pointer">تسجيل جديد</span>
                            </div>
                        </div>
                        <div className="w-full flex justify-between rounded items-center p-3 shadow">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18.305" height="18.674" viewBox="0 0 18.305 18.674">
                                <g id="Group_5195" data-name="Group 5195" transform="translate(0 0)">
                                    <path id="Path_2" data-name="Path 2" d="M281.068,225a10.979,10.979,0,0,0-.161-1.9H272.1v3.6h5.043a4.322,4.322,0,0,1-1.866,2.837v2.333h3.009A9.118,9.118,0,0,0,281.068,225Z" transform="translate(-262.763 -215.445)" fill="#4285f4"/>
                                    <path id="Path_3" data-name="Path 3" d="M37.243,331.847a8.937,8.937,0,0,0,6.189-2.254l-3.009-2.333A5.663,5.663,0,0,1,32,324.3H28.9v2.4A9.338,9.338,0,0,0,37.243,331.847Z" transform="translate(-27.907 -313.174)" fill="#34a853"/>
                                    <path id="Path_4" data-name="Path 4" d="M4.045,155.98a5.592,5.592,0,0,1,0-3.575V150H.943a9.345,9.345,0,0,0,0,8.385Z" transform="translate(0.05 -144.853)" fill="#fbbc04"/>
                                    <path id="Path_5" data-name="Path 5" d="M37.243,3.677a5.074,5.074,0,0,1,3.582,1.4h0l2.666-2.666A8.973,8.973,0,0,0,37.243-.018,9.335,9.335,0,0,0,28.9,5.128l3.1,2.4A5.585,5.585,0,0,1,37.243,3.677Z" transform="translate(-27.907 0.018)" fill="#ea4335"/>
                                </g>
                            </svg>

                            <span className="text-sm md:text-md cursor-pointer">تسجيل دخول عن طريق غوغل</span>
                        </div>
                        <div className="w-full flex justify-between rounded items-center p-3 shadow mt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14.344" height="26.782" viewBox="0 0 14.344 26.782">
                                <path id="Icon_awesome-facebook-f" data-name="Icon awesome-facebook-f" d="M13.4,15.065l.744-4.847H9.5V7.073A2.423,2.423,0,0,1,12.23,4.454h2.114V.327A25.784,25.784,0,0,0,10.591,0C6.761,0,4.257,2.321,4.257,6.524v3.694H0v4.847H4.257V26.782H9.5V15.065Z" fill="#2359a3"/>
                            </svg>
                            <span className="text-sm md:text-md cursor-pointer">تسجيل دخول عن طريق فيسبوك</span>
                        </div>
                        <div className="w-full flex justify-between items-center mt-3">
                            <hr className="w-5/12" />
                            <span className="text-xs text-gray-300">أو</span>
                            <hr className="w-5/12" />
                        </div>
                        
                        <div className="form w-full grid grid-cols-12">
                            <div className="col-span-1 2xl:col-span-2"></div>
                            <div className="col-span-10 2xl:col-span-8 flex flex-col justify-center items-center">
                                {error?
                                <span className="error text-right text-xs w-full text-red-500">
                                    {error}
                                </span>:<></>
                                }

                                <label htmlFor="" className="self-end text-xs">الاسم الكامل</label>
                                <input type="text" onChange={handlename}    className="w-full mt-2 rounded h-13  bg-gray-100 px-2 focus:bg-white focus:text-gray-500 focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent" dir="rtl" placeholder="اسمك بالكامل" />
                                <label htmlFor="" className="self-end text-xs">البريد الالكتروني</label>
                                <input type="text" onChange={handleemail}    className="w-full mt-2 rounded h-13  bg-gray-100 px-2 focus:bg-white focus:text-gray-500 focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent" dir="rtl" placeholder="email@example.com" />
                                <label htmlFor="" className="self-end text-xs mt-2">كلمة السر</label>
                                <input type="password" onChange={handlepassword} className="w-full mt-2 rounded h-13   bg-gray-100 px-2 focus:bg-white focus:text-gray-500 focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent" dir="rtl" placeholder="***" />
                                <label htmlFor="" className="self-end text-xs mt-2">تأكيد كلمة السر</label>
                                <input type="password" onChange={handleconfirmation} className="w-full mt-2 rounded h-13   bg-gray-100 px-2 focus:bg-white focus:text-gray-500 focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent" dir="rtl" placeholder="***" />
                                <button onClick={handleRegister} className="w-full cursor-pointer  text-white flex justify-center items-center rounded bg-yellow-500 mt-2 h-13">
                                    تسجيل 
                                </button>
                                <div className="w-full flex flex-col justify-between items-center mt-2">
                                    <div className="w-full flex justify-between items-center">
                                        <span onClick={()=>toggleReset(1)} className="text-xs self-end flex cursor-pointer">نسيت كلمة السر؟</span>
                                        <div className="flex justify-between items-center">
                                            <label htmlFor="" className="text-xs mr-2">أنا أوافق على الشروط</label>
                                            <input type="checkbox" onChange={toggleagree} className="rounded-full bg-white border-2 w-4 h-4 checked:bg-yellow-500 checked:border-transparent appearance-none" name="" id="" />
                                        </div>
                                    </div>
                                    <div className="w-full flex justify-end mt-2 items-center">
                                        <label htmlFor="" className="text-xs mr-2 self-end">شتراك بصحيفتنا اليومية</label>
                                        <input type="checkbox" onChange={togglesubscibe} className="rounded-full self-end bg-white border-2 w-4 h-4 checked:bg-yellow-500 checked:border-transparent appearance-none" name="" id="" />
                                    </div>
                                    <span className="text-xs self-end mt-2">
                                        مسجل مسبقا؟ <span onClick={()=>toggleReset(0)} className="text-xs text-yellow-500 cursor-pointer">قم بتسجيل الدخول</span>
                                    </span>
                                </div>
                            </div>
                            <div className="col-span-1 2xl:col-span-2"></div>
                        </div>
                        <div className="hidden md:blockgrid grid-cols-12 w-full">
                                <div className="hidden md:block col-span-3"></div>
                                <div className="col-span-12 md:col-span-6">
                                    <div className="flex w-full flex-col justify-start items-center text-white">
                                        <span className="text-xs">حمل التطبيق</span>
                                        <div className="flex justify-between items-center mt-2">
                                            <img className="w-24" src="./images/google.png" alt="" />
                                            <img className="w-24 ml-2" src="./images/appstore.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden md:block col-span-3"></div>
                            </div>
                    </div>
                
            </div>
        </div>
    );
}