import React, { useState,useEffect } from 'react';
import { useAppState, useAppDispatch } from '../../contexts/app/app.provider';
import Slider from '../../components/slider/slider';
import SearchBar from '../../components/seachbar/searchBar';
import Banners from '../../components/banners/banners';
import Categories from '../../components/categories/categories';
import Card from '../../components/card/card';
import Deal from '../../components/deal/deal';
import Specials from '../../components/specials/specials';
import Cat from '../../components/cat/cat';
import Proposals from '../../components/proposals/proposals';
import { Waypoint } from 'react-waypoint';
import AllCatsSlider from '../../components/allcatsSlider/allCatsSlider';
import Discover from '../../components/discover/discover';
import {CardTitle} from '../../components/cardTitle/cardTitle';
import ThumbSlider from '../../components/ThumbSlider/thumbslider';
import Fslider from '../../components/F-sale/Fsale';
import { Title } from '../../components/title/title';
import CardSlider from '../../components/cardSlider/cardSlider';
import { useRouter } from 'next/router';
import ShopModal from '../../components/modal/shopmodal';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Favorite from '@material-ui/icons/Favorite';

import Box from '@material-ui/core/Box';
export default function Product(props) {
    const [openTab, setOpenTab] = React.useState(1);
    const [dimage,setDImage] = useState("");
    const [pricess,setPricess] = useState(0);
    const [done,setDone] = useState(1);
    const renderHTML = (rawHTML: string) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
    const router = useRouter()
    const { pids } = router.query;
    interface Attr {
        name:string
        value:[]
    }
    interface Pro {
        model_number:string
        description:string
        value:[]
        images:[]
    }
    interface Item {
        id:string
        slug:string
        title:string
        price:string
        offer_price:string
        image:string
        raw_price:""
    }
    interface Attr1 {
        id:string
        value:null
    }
    interface Shop {
        name:""
    }
    interface Inven {
        attributes:Attr1[]
    }
    interface label{
        0:string
    }
    interface NewData{
        title:string
        brand:string
        stock_quantity:string
        product:Pro
        rating:""
        raw_price:""
        slug:string
        labels:label
        images:[]
        price:string
        description:string
        offer_price:string
        linked_items:Item[]
        currency_symbol:string
        attributes:Attr1[]
        shop:Shop
    }
    interface ShippingOptions {
        
    }
    interface Shipping {
        name:""
        delivery_takes:""
    }
    interface Data {
       data:{
            title:""
            brand:""
            product:Pro
            price:""
            images:[]
            offer_price:null
            linked_items:Item[]
            currency_symbol:string
            attributes:Attr1[]
       }
       
        variants:{
            images:[]
            attributes :Attr[]
           
        }
        inventories:Data['data'][]
                
    }
    
    const [data,setData] = useState();
    const [id,setId] = useState<string | string[]>();
    const [title,setTitle] = useState("");
    const [datas,setDatas] = useState<NewData>();
    const [active,setActive] = useState([])
    const [attributes,setAttributes] = useState([]);
    const [activeAttr , setActiveAttr] = useState([])
    const [images,setImages] = useState([])
    const [values , setValues] = useState([])
    const [shipping,setShipping] = useState([])
    const [modal,setModal] = useState(false)
    const [image,setImage] = useState<string>('');
    const [color,setcolor] = useState<string>('');
    const [takes,setTakes] = useState('')
    const [rating, setRating] = useState(0)
    const [cartItems, setCartItems] = useState([])
    const [selected , setselected] = useState(0)
    const setAttr = (value,names) => {
        var obj = [value,names];
        setActive(obj)
    }
    const handleRating = (rate) => {
        setRating(rate)
        // Some logic
      }
    const [ship,setShip] = useState(false);    
    const toggleShipping = () =>{
        setShip(!ship);
    }
    const [disc,setdisc] = useState<number>(0);

    useEffect(() => {
        document.title = "تفاصيل المنتج | أمانة"
        fetch(`https://amanacart.com/api/item/${pids}`)
         .then(res => res.json())
         .then(result =>{
           setDatas(result.data);
           let arrays = [result.data.id];
          
           setAttributes(result.attributes);
           var fullpri = parseInt(result.data.price,10);
           var pri = parseInt(result.data.raw_price,10);
           result.data.linked_items.map(el => {
                pri = pri+= parseInt(el.raw_price,10);
                fullpri = fullpri+= parseInt(el.price,10);
                arrays.push(el.id)
           })
           setCartItems(arrays);
           setPricess(pri);
           setdisc(fullpri - pri);
           console.log(result.data)
           result.attributes.map(ele=>{
            if(ele.type == 'Color/Pattern'){
                ele.values.map(eles=>{
                    if(eles.selected == 1){
                        setcolor(eles.value)
                    }
                })
            }
        })
           setShipping(result.shipping_options);
           setImages(result.data.images);
           setImage(result.data.product.images[0].path);
           setDImage(result.data.images[0].path)
           setId(pids);
          
       
        
      
           setTitle(result.data.title);
         })
         .catch(e => {
       });
     },[pids])
     const cartss = () => {
         console.log(cartItems)
            var string = ``;
            cartItems.map((ele,index)=>{
                if(index != cartItems.length-1){
                    string+=`items[${index}]=${ele}&&`
                }
                else{
                    string+=`items[${index}]=${ele}`
                }
            })
         fetch(`https://amanacart.com/api/addItemsToCart?${string}`, {
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
                 setError(error);
                 toggleNotification(error,'error');
                 setTimeout(() => {
                     dispatch({
                         type: 'Nonotification',
                       })
                   }, 5000)
                 return Promise.reject(error);
             }
             // setMessgae(data.message);
             addCart();
             changeCart();
             toggleNotification(data.message,'success');
             setTimeout(() => {
                 dispatch({
                     type: 'Nonotification',
                   })
               }, 5000)
           
         })

     }
     const changeData = (e,attrid,attrvalue,pids,type,color) =>{
        if(type == 'Color/Pattern'){
                setcolor(color)
        }
        else{
            for (let i = 0; i < e.target.parentElement.children.length; i++) {
                if(e.target.parentElement.children[i].classList.contains('bg-yellow-500')){
                    e.target.parentElement.children[i].classList.remove('bg-yellow-500');
                    e.target.parentElement.children[i].classList.add('border-2');
                    
                }
            }
            e.target.classList.remove('border-2');
            e.target.classList.add('bg-yellow-500');
        }
        fetch(`https://amanacart.com/api/inventory?attribute_id=${attrid}&attribute_value=${attrvalue}&id=${id}`)
        .then(res => res.json())
        .then(result =>{
            setDatas(result.data);
            setId(result.data.id);
            setAttributes(result.attributes);
            result.attributes.map(ele=>{
                if(ele.type == 'Color/Pattern'){
                    ele.values.map(eles=>{
                        if(eles.selected == 1){
                            setcolor(eles.value)
                        }
                    })
                }
            })
            setShipping(result.shipping_options);
            setImages(result.data.images);
        })
     }
     const [quan,setquan] = useState<number>(1)
     const dispatch = useAppDispatch();


     const [error,setError] = useState(null);
     const addCart = React.useCallback(() => {
         dispatch({
           type: 'AddToCart',
         });
       
         }
         ,[dispatch]
       );
     const toggleNotification = React.useCallback((info,errortypes) => {
         dispatch({
           type: 'notification',payload:info,types:errortypes
         });
         }
         ,[dispatch]
       );

       const changeCart = React.useCallback(() => {
        dispatch({
          type: 'CartChange'
        });
        }
        ,[dispatch]
      );
    
      const formss = new FormData();
     const AddToCart = (ele) =>{
        formss.append('quantity',quan.toString())
         fetch(`https://amanacart.com/api/addToCart/${ele}?quantity=${quan}`, {
             method: 'post',
             headers: {'Content-Type':'application/json'},
             body:formss
         })
         .then( async response => {
             const isJson = response.headers.get('content-type')?.includes('application/json');
             const data = isJson && await response.json();
 
             // check for error response
             if (!response.ok) {
                 // get error message from body or default to response status
                 const error = (data && data.message) || response.status;
                 setError(error);
                 toggleNotification(error,'error');
                 setTimeout(() => {
                     dispatch({
                         type: 'Nonotification',
                       })
                   }, 5000)
                 return Promise.reject(error);
             }
             // setMessgae(data.message);
             addCart();
             changeCart();
             toggleNotification(data.message,'success');
             setTimeout(() => {
                 dispatch({
                     type: 'Nonotification',
                   })
               }, 5000)
           
         })
     }
     const AddToFav = (ele) =>{
        
         fetch(`https://amanacart.com/api/wishlist/${ele}/add`,{
            headers:{
                'Authorization' : `Bearer ${localStorage.getItem('token')}`
            }})
         .then(res => res.json())
         .then(result =>{
            toggleNotification(result.message,'success');
            setTimeout(() => {
                dispatch({
                    type: 'Nonotification',
                  })
              }, 5000)
         })
         .catch(e => {
            toggleNotification(e.message,'error');
            setTimeout(() => {
                dispatch({
                    type: 'Nonotification',
                  })
              }, 5000)
       });
     }
    //  
     const handleModal = ()=>{
        setModal(!modal);
     }
     const closeModal = () =>{
        setModal(false);
     }
     const prices = (number,pricee,checkss) =>{
        setPricess(number);
        setCartItems(checkss);
            var fullpri = parseInt(datas.price,10);

            datas.linked_items.map(el => {
             fullpri = fullpri+= parseInt(el.price,10);
        })
        setdisc(pricee - number)
     }
   
    return(
        <>
            <ShopModal shop={datas?datas.shop:""} handleModal={closeModal} modal={modal}></ShopModal>
            <div className="grid grid-cols-12 gap-3 bg-white shadow rounded mt-12 p-4" dir="rtl">
                <div className="col-span-12 lg:col-span-4 flex flex-col justify-start">
                    <ThumbSlider defaults={image?image:""} images={images?images:""}></ThumbSlider>
                    <div className="w-full flex flex-col justify-start items-start mt-4">
                        <div className="bg-gray-100 w-full flex flex-col justify-start items-start p-2">
                        <div className="flex justify-start items-center border-b-2 pb-2 border-gray-300 w-full text-right mt-2">
                            <span className="text-sm text-gray-500 ml-2">شحن إلى دمشق</span>
                            <span className="text-black">
                                (
                                <span className="text-xs text-yellow-500">تغيير المدينة</span>
                                )  </span>
                                
                                <span className="text-xs relative" onMouseEnter={toggleShipping} onMouseLeave={toggleShipping}> عبر {shipping&&shipping.length>0?shipping[0].name:""}  
                                    <div className={` absolute grid-cols-12 transform translate-x-1/2 lg:translate-x-0 w-72 lg:w-96 border-2 shadow bg-white rounded arrowss z-20 ${ship?"grid":"hidden"}`}>
                                        <div className="col-span-12 bg-gray-100 flex justify-start items-center p-2">
                                            <span className="text-sm">خيارات الشحن</span>
                                        </div>
                                        {shipping?shipping.map((ele,index)=>
                                            <div className={`${index%2!=0?"bg-gray-100":""} ${index==0?"border-t-2":""} border-b-2 col-span-12`} key={index}>
                                            <div className="grid grid-cols-12 w-full p-2">
                                                    <div className="col-span-1">
                                                        <input type="radio" name="shipping" id="" />
                                                    </div>
                                                    <div className="col-span-2">
                                                        {ele.name}
                                                    </div>
                                                    <div className="col-span-3">
                                                    {ele.carrier_name}
                                                    </div>
                                                    <div className="col-span-4">
                                                    {ele.delivery_takes}
                                                    </div>
                                                    <div className="col-span-2">
                                                    {ele.cost}
                                                    </div>
                                                </div>
                                            </div>
                                        ):""}
                                        <div className="col-span-12 flex justify-center items-center">
                                            <button className="bg-gray-700 text-white w-11/12 border-0 m-2 rounded text-center text-sm">
                                                حفظ
                                            </button>
                                        </div>
                                    </div>
                                </span>
                        </div>
                        <span className="text-xs text-gray-500 text-right mt-2">
                            {shipping&&shipping.length>0?shipping[0].delivery_takes:""}
                        </span>
                        <div className="flex justify-between items-center w-full px-2 mt-2">
                            <span className="text-black font-bold text-xs">
                                 توصيل مجاني 
                                <span className="text-blue-300 text-xs"> {takes?takes:""} </span>
                            </span>
                                <img className={`w-14 2xl:w-16 h-2  `} src="../images/SPEED AR.svg" alt="" />
                        </div>
                        <div className="flex flex-col self-center mt-2 bg-white rounded  w-11/12 p-2">
                            <span className="text-xs text-black text-right px-2 w-full">
                                <span dir="rtl" className="text-xs font-bold">
                                    ملاحظة من السائق:
                                    <span className="text-gray-500 font-normal px-2" style={{fontSize:"12px"}}>توصيل مباشر عن طريق شركة أمانة</span>
                                </span>
                            </span>
                            <span className="text-xs mt-2 text-black text-right px-2 w-full">
                                <span dir="rtl" className="text-xs font-bold">
                                    ملاحظة من السائق:
                                    <span className="text-gray-500 font-normal px-2" style={{fontSize:"12px"}}>توصيل مباشر عن طريق شركة أمانة</span>
                                </span>
                            </span>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-8 relative flex flex-col justify-start items-start pr-4" style={{borderRight:"1px solid #eee"}}>
                    <div className="flex justify-start items-center w-full">
                        <span className="text-right text-sm text-md text-gray-500 flex justify-between items-center">
                            {/* {data?data.item.product.brand:""} */}
                            <img className="w-6 ml-2" src="/images/icons/colors/Group 5462.svg" alt="" />
                            {datas?datas.brand:""}
                        </span>
                        <span className="text-right text-sm 2xl:text-md text-gray-500 flex justify-between items-center mr-3">
                            {/* {data?data.item.product.brand:""} */}
                            <img className="w-6 ml-2" src="/images/icons/colors/Group 5450.svg" alt="" />
                            تباع بواسطة: <span className="text-blue-500 mr-1 cursor-pointer" onClick={handleModal}>
                                {datas?datas.shop.name:""}
                            </span>
                        </span>
                        {localStorage.getItem('token')?
                            <div onClick={()=>AddToFav(datas?datas.slug:"")} className="cursor-pointer mt-2 rounded flex justify-center items-center  text-red-500 px-3 lg:px-3 absolute left-0 lg:py-1">
                                    <Favorite />
                            </div>
                            :""
                        }
                    </div>
                    <span className="text-black text-right text-xl mt-5">
                        {/* {data?data.item.product.name:""} */}
                        {datas?datas.title:""}
                    </span>
                    <div className="flex justify-between items-center mt-5">
                        <span className="text-gray-700 text-right text-sm ">
                            {/* رقم الموديل : {data?data.item.product.model_number:""} */}
                            رقم الموديل:  
                            <span className="mr-2 ml-6">{datas?datas.product.model_number:""}</span>
                            {/* <span className="mr-2 ml-6">LOS231</span> */}
                        </span>
                        {data&&datas.rating != null &&datas.rating? 
                            <>
                                <Rating dir="ltr" name="half-rating-read" defaultValue={datas.rating} precision={0.5} readOnly />
                                <span className="px-2  text-white rounded mr-4" style={{background:"#81b214"}}>
                                    {datas.rating}
                                </span>
                                <span className="text-blue-500 mr-4 text-sm">
                                    110 مستخدمين قاموا بتقييم المنتج
                                </span>
                            </>
                        :
                            <span className="text-blue-500 mr-4 text-sm">
                                لم يقم أحد بتقييم المنتج بعد
                            </span>
                        
                        }
                        
                    </div>
                    <div className="grid grid-cols-12 w-full pt-4">
                        
                        <div className="col-span-6 pl-2">
                        {attributes.map(ele=>{
                        return(
                            ele.type=="Color/Pattern"?
                             <div className="">
                                <span className="text-xs ">
                                    {ele.name}: {color}
                                </span>
                                <div className="flex justify-start items-center mt-2">
                                    {ele.values.map(valuess=>{
                                        return (
                                            <div data-id={`${ele.type}`} onClick={(e)=>changeData(e,ele.id,valuess.id,pids,ele.type,valuess.value)} className={`w-8 h-6 mr-2 cursor-pointer onHovers rounded-full flex justify-center items-center `} style={{background:`${valuess.color}`,border:"1px solid #eee"}}>
                                                {color == valuess.value ?
                                                
                                                    valuess.color == '#fff'?
                                                     
                                                     
                                                    <img src="/images/icons/colors/Icon-Check b.svg" className="w-4" alt="" /> 
                                                    :
                                                    <img src="/images/icons/colors/Icon-Check w.svg" className="w-4" alt="" /> 
                                                    :""
                                                }
                                            </div>
                                            );
                                    })}
                                </div>
                            </div>
                            :
                            ele.type=="Select"?
                            <div className="flex flex-col">
                                <span className="text-xs">
                                    {ele.name}:
                                </span>
                                
                                <select name="" id=""  className="px-2 text-xs w-3/12 h-6 border-2 rounded mt-2 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent">
                                    <option value="">اختر</option>
                                    {ele.values.map(eles =>
                                        <option key={eles.id} value={eles.value}>{eles.value}</option>
                                    )}
                                </select>
                            </div>
                            :
                            <div className="">
                            <span className="text-xs">
                                 {ele.name}:
                             </span>
                             <div className="flex justify-end-items-center flex-wrap">
                                 {ele.values.map(valuess=>{
                                     return (
                                         <span data-id={`${ele.type}`}  onClick={(e)=>changeData(e,ele.id,valuess.id,pids,ele.type,"أبيض")} className={`${valuess.selected == 1? "bg-yellow-500":"border-2"} onHovers cursor-pointer rounded  flex justify-center items-center mr-2 px-4 h-6  mt-3 numbers`} >
                                             {valuess.value}
                                         </span>
                                         );
                                 })}
                             </div>
                         </div>
                         
                            );
                        
                    })}
                      <div className="flex justify-start items-center w-2/3 mt-5">
                        <span className="text-xs w-20 2xl:w-16">
                            السعر:
                        </span>
                        {datas&&datas.offer_price?
                                <span className="text-2xl text-right numbers font-bold text-black mr-4"  style={{fontWeight:"bold"}}>
                                    {datas.offer_price?datas.offer_price.split('ر.ع'):""} <span className="text-2xl">ر.ع</span>
                                </span>  
                            :""}
                        
                    </div>
                    <div className="flex justify-start items-center w-2/3 mt-3">
                        <span className="text-xs w-20 2xl:w-16">
                            قبل الحسم:
                        </span>
                        {datas&&datas.price?
                            <span className="text-lg mr-4 text-right numbers text-gray-500  discount relative ">
                                {datas.price?datas.price.split('ر.ع'):""} <span className="text-2xl">ر.ع</span>
                            </span>
                        :""}
                    </div>

                    <div className="flex justify-start items-center w-2/3 mt-3">
                        <span className="text-xs w-20 2xl:w-16">
                            التوفير:
                        </span>
                        {datas&&datas.price?
                            <span className="text-xl numbers font-bold  mr-4" style={{fontWeight:"bold",color:"#81b214"}}>
                                {datas&&datas.labels[0]?datas.labels[0].split('Off'):""}
                               
                            </span>
                        :""}
                    </div>
                        </div>
                        <div className="col-span-6 pr-2  flex flex-col justify-start items-center " >
                        {/* <div className="flex flex-row-reverse justify-between items-center  mt-2 pb-2">
                            <p className="text-xs text-right text gray-300 mr-2">هذا المنتج لا يمكن إعادته أو تبديله تعلم المزيد عن سياسة الإرجاع لدينا</p>
                            <img className={`w-14 2xl:w-16 h-2  `} src="../images/icon1.svg" alt="" />
                        </div>
                        <div className="flex flex-row-reverse justify-between items-center mt-3  pb-2">
                            <p className="text-xs text-right text gray-300 mr-2">هذا المنتج لا يمكن إعادته أو تبديله تعلم المزيد عن سياسة الإرجاع لدينا</p>
                            <img className={`w-14 2xl:w-16 h-2  `} src="../images/icon2.svg" alt="" />
                        </div>
                        <div className="flex flex-row-reverse justify-between items-center mt-3  pb-2">
                            <div className="flex flex-col justify-between items-start mr-2">
                                <span className="text-xs text-black font-bold">
                                    شحن موثوق
                                </span>
                                <p className="text-xs text-right text gray-300 ">هذا المنتج لا يمكن إعادته أو تبديله تعلم المزيد عن سياسة الإرجاع لدينا</p>
                            </div>
                            
                            <img className={`w-14 2xl:w-16 h-2  `} src="../images/icon3.svg" alt="" />
                        </div>
                        <div className="flex flex-row-reverse justify-between items-center mt-3  pb-2">
                            <div className="flex flex-col justify-between items-start mr-2">
                                <span className="text-xs text-black font-bold">
                                    شحن موثوق
                                </span>
                                <p className="text-xs text-right text gray-300 ">هذا المنتج لا يمكن إعادته أو تبديله تعلم المزيد عن سياسة الإرجاع لدينا</p>
                            </div>
                            
                            <img className={`w-14 2xl:w-16 h-2  `} src="../images/icon4.svg" alt="" />
                        </div>
                        <div className="flex flex-row-reverse justify-between items-center mt-3  pb-2">
                            <div className="flex flex-col justify-between items-start mr-2">
                                <span className="text-xs text-black font-bold">
                                    شحن موثوق
                                </span>
                                <p className="text-xs text-right text gray-300 ">هذا المنتج لا يمكن إعادته أو تبديله تعلم المزيد عن سياسة الإرجاع لدينا</p>
                            </div>
                            
                            <img className={`w-14 2xl:w-16 h-2  `} src="../images/icon3.svg" alt="" />
                        </div> */}
                        </div>
                    </div>
                    
                  
                    
                    
                        <div className="flex justify-between items-center mt-3">
                            {/* <span className="text-red-500 text-xs text-right mr-1">شحن مجاني للطلبات التي تتجاوز 12000 ل.س</span> */}
                            <span className="text-xs w-20 2xl:w-16">
                                الكمية:
                            </span>
                            {datas&&parseInt(datas.stock_quantity)<6?
                                <span className="text-red-500 text-xs">
                                    الكمية الموجودة لهذا المنتج محدودة اطلبه الان
                                </span>
                            :""}
                            {/* {datas&&datas.price?
                                    <span className="text-xl text-gray-500 numbers  mr-4">
                                        {datas?datas.stock_quantity:""}
                                    </span>
                            :""} */}
                        </div>
                        <div className="flex flex-row-reverse  justify-end items-center w-full ">
                            <div onClick={()=>AddToCart(datas?datas.slug:"")} className="cursor-pointer mr-3 mt-2 rounded flex justify-center items-center bg-yellow-500 text-white px-3 lg:px-24 hover:shadow  h-6 onHovers">إضافة للسلة</div>
                           
                            <span className="flex flex-row-reverse 2xl:text-2xl mt-2 rounded" style={{border:"1px solid rgb(195 195 195)"}}>
                                <span onClick={()=>setquan(quan+1)} className="cursor-pointer 2xl:text-2xl px-2 py-1 flex justify-center  items-center" style={{borderRight:"1px solid rgb(195 195 195)"}}>+</span>
                                <span className="px-3 py-1 text-sm 2xl:text-2xl flex justify-center numbers items-center">{quan}</span>
                                <span onClick={()=> {if(quan>1) setquan(quan-1) }} className="cursor-pointer 2xl:text-4xl px-2 py-1 flex justify-center  items-center" style={{borderLeft:"1px solid rgb(195 195 195)"}}>-</span>
                            </span>
                        </div>
                                    
                        
                </div>



                
            </div>
            
            <div className="grid grid-cols-10 bg-white rounded shadow mt-12 p-3" dir="rtl">
                <div className="col-span-12 lg:col-span-6 p-2 rounded ">
                    <div className="grid grid-cols-12" dir="ltr">
                        <div className="col-span-12">
                            <ul
                                className="flex mb-0 border-b-2 list-none  flex-row lg:mb-2"
                                role="tablist"
                                >

                                <li className="-mb-0.5 flex-auto text-center" >
                                    <a
                                    className={
                                        "text-xs text-2xs font-bold uppercase px-1 lg:px-5 pb-2  border-black  block leading-normal " +
                                        (openTab === 3
                                        ? "text-black border-b-2"
                                        : "text-black")
                                    }
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(3);
                                    }}
                                    data-toggle="tab"
                                    href={`#link1`}
                                    role="tablist"
                                    >
                                    <i className="fas fa-space-shuttle text-base mr-1"></i> 
                                        تقييم
                                    </a>
                                </li>
                                <li className="-mb-0.5 flex-auto text-center" >
                                    <a
                                    className={
                                        "text-xs text-2xs font-bold uppercase px-1 lg:px-5 pb-2  border-black  block leading-normal " +
                                        (openTab === 2
                                        ? "text-black border-b-2"
                                        : "text-black")
                                    }
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(2);
                                    }}
                                    data-toggle="tab"
                                    href={`#link1`}
                                    role="tablist"
                                    >
                                    <i className="fas fa-space-shuttle text-base mr-1"></i> 
                                        مميزات
                                    </a>
                                </li>
                                <li className="-mb-0.5 flex-auto text-center" >
                                    <a
                                    className={
                                        "text-xs text-2xs font-bold uppercase px-1 lg:px-5 pb-2  border-black  block leading-normal " +
                                        (openTab === 1
                                        ? "text-black border-b-2"
                                        : "text-black")
                                    }
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(1);
                                    }}
                                    data-toggle="tab"
                                    href={`#link1`}
                                    role="tablist"
                                    >
                                    <i className="fas fa-space-shuttle text-base mr-1"></i> 
                                        تفاصيل
                                    </a>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="col-span-12 order-3 md:order-3">
                            <div className="order-0 relative flex flex-col min-w-0 break-words w-full ">
                                <div className="sm:px-4 lg:px-0  flex-auto">
                                <div className="tab-content tab-space" >
                                    <div className={`${openTab==1?"block":"hidden"} overflow-hidden text-right flex flex-col justify-between items-end p-2`} id={`link1`}>
                                        {datas?renderHTML(datas.product.description):""}
                                        {/* تفاصيل */}
                                    </div>


                                    <div  className={`${openTab == 2?"block":"hidden"} text-right flex flex-col justify-between items-end p-2`} id={`link2`}>
                                        {datas?renderHTML(datas.description):""}
                                    </div>
                                    
                                    <div  className={openTab === 3 ? "block" : "hidden"} id={`link3`}>
                                        
                                    </div>
                                </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-4 6  p-2  rounded flex justify-end items-center">
                    <div className="w-full p-6" style={{background:"#f9fafb"}}>
                    {datas&&datas.linked_items.length>0?
                        <div className="pt-2  w-full ">
                            <div className="rounded w-full flex flex-col p-3 justify-between items-center">
                                <div className="flex flex-row-reverse justify-between w-full items-center text-sm">
                                    <div className="text-green-500 text-md font-bold">
                                            {disc!=0? `توفير: ${disc} ر.ع`:``} 
                                    </div>
                                    <CardTitle title={"يباع معها أيضا"}></CardTitle>
                                </div>
                                
                                <div className="w-full linked mt-4 bg-white rounded " style={{border:"1px solid #eee"}}>
                                    <Fslider price={prices} items={datas?datas.linked_items:""} item={datas?datas:""} image={image}></Fslider>
                                </div>
                                <div className="flex mt-2 flex-col justify-between items-center w-full ">
                                    <div onClick={cartss}  className="w-full cursor-pointer text-sm text-center rounded bg-white  border-yellow-500 font-bold text-yellow-500 px-4 py-1 mt-2" style={{border:"1px solid"}}>اشتر {datas?datas.linked_items.length + 1:""} معا  بسعر :
                                        <span className="numbers text-sm" style={{fontWeight:"bold"}}>  {pricess} {datas?datas.currency_symbol:""} </span>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    :"" }  
                    </div>
                  
                </div>
                <div className="col-span-1 lg:hidden"></div>
            </div>
            <div className="grid grid-cols-12">
                <div className="col-span-12 mt-2">
                    <div className="flex flex-col justify-center items-center w-full">
                   
                    </div>
                </div>
            </div>
        </>
    );
}