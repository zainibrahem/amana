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
import ShopModal from '../../components/modal/shopmodal'
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
    }
    interface Item {
        id:string
        slug:string
        title:string
        price:string
        offer_price:string
        image:string
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
    interface NewData{
        title:""
        brand:""
        product:Pro
        slug:""
        images:[]
        price:""
        description:""
        offer_price:null
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
    const setAttr = (value,names) => {
        var obj = [value,names];
        setActive(obj)
        console.log(active);
    }
    const [ship,setShip] = useState(false);    
    const toggleShipping = () =>{
        setShip(!ship);
    }
    useEffect(() => {
        fetch(`https://amanacart.com/api/item/${pids}`)
         .then(res => res.json())
         .then(result =>{
           setDatas(result.data);
           setAttributes(result.attributes);
           setShipping(result.shipping_options);
           setImages(result.data.images);
           setId(pids);
        //    imagess=result.data.images;
        //    result.data.product.image.forEach(element => {
               
        //    }); 
        var pri = parseInt(result.data.raw_price,10);
        result.data.linked_items.map(el => {
             pri = pri+= parseInt(el.raw_price,10);
        })
        setPricess(pri);
           setTitle(result.data.title);
         })
         .catch(e => {
           console.log(e);
       });
     },[pids])
     const changeData = (e,attrid,attrvalue,pids,type) =>{
        if(type == 'Color/Pattern'){
            for (let i = 0; i < e.target.parentElement.children.length; i++) {
                if(e.target.parentElement.children[i].classList.contains('border-yellow-500')){
                    e.target.parentElement.children[i].classList.remove('border-yellow-500');
                    e.target.parentElement.children[i].classList.remove('border-2');
                }
            }
          
            e.target.classList.add('border-2');
            e.target.classList.add('border-yellow-500');

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
            console.log(result.data);
            setDatas(result.data);
            setId(result.data.id);
            setAttributes(result.attributes);
            setShipping(result.shipping_options);
            setImages(result.data.images);
        })
     }

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

     const AddToCart = (ele) =>{
         fetch(`https://amanacart.com/api/addToCart/${ele}`, {
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
           
             console.log(data);
         })
     }
     const handleModal = ()=>{
        setModal(!modal);
     }
     const closeModal = () =>{
        setModal(false);
     }
     const prices = (number) =>{
        setPricess(number);
     }

    return(
        <>
            <ShopModal shop={datas?datas.shop:""} handleModal={closeModal} modal={modal}></ShopModal>
            <div className="grid grid-cols-12 gap-3 bg-white shadow rounded mt-12 p-4" dir="rtl">
                <div className="col-span-1"></div>
                <div className="col-span-12 lg:col-span-5 flex flex-col justify-between">
                    <ThumbSlider images={images?images:""}></ThumbSlider>
                    <div className="w-full flex flex-col justify-start items-start mt-1">
                        <div className="bg-gray-100 w-full flex flex-col justify-start items-start p-2">
                        <div className="flex justify-start items-center border-b-2 pb-2 border-gray-300 w-full text-right mt-2">
                            <span className="text-sm text-gray-500 ml-2">شحن إلى دمشق</span>
                            <span className="text-black">
                                (
                                <span className="text-xs text-yellow-500">تغيير المدينة</span>
                                )  </span>
                                
                                <span className="text-xs relative" onMouseEnter={toggleShipping} onMouseLeave={toggleShipping}> عبر {shipping&&shipping.length>0?shipping[0].name:""}  
                                    <div className={` absolute grid-cols-12 w-96 border-2 shadow bg-white rounded arrowss z-20 ${ship?"grid":"hidden"}`}>
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
                                <span className="text-blue-300 text-xs"> غدا - 22 أيار </span>
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
                <div className="col-span-12 lg:col-span-5 flex flex-col justify-between items-start pr-2">
                    <span className="text-gray-500 text-right text-md ">
                        {/* {data?data.item.product.brand:""} */}
                        {datas?datas.brand:""}
                    </span>
                    <span className="text-gray-500 text-right text-md ">
                        {/* {data?data.item.product.brand:""} */}
                        اسم المتجر : <span className="text-yellow-500 cursor-pointer" onClick={handleModal}>
                            {datas?datas.shop.name:""}
                        </span>
                    </span>
                    <span className="text-black font-bold text-right text-lg ">
                        {/* {data?data.item.product.name:""} */}
                        {datas?datas.title:""}
                    </span>
                    <span className="text-black text-right text-md ">
                        {/* رقم الموديل : {data?data.item.product.model_number:""} */}
                         رقم الموديل 
                        {datas?datas.product.model_number:""}
                    </span>
                    {attributes.map(ele=>{
                        return(
                            ele.type=="Color/Pattern"?
                             <div>
                                <span className="text-xs mt-2">
                                    {ele.name}:
                                </span>
                                <div className="flex justify-end-items-center">
                                    {ele.values.map(valuess=>{
                                        return (
                                            <div data-id={`${ele.type}`} onClick={(e)=>changeData(e,ele.id,valuess.id,pids,ele.type)} className={`w-10 h-8 mr-2 cursor-pointer rounded-full ${valuess.selected == 1 ?"border-2 border-yellow-500":""}`} style={{background:`${valuess.color}`}}></div>
                                            );
                                    })}
                                </div>
                                
                            </div>
                            :
                            <div>
                               <span className="text-xs mt-2">
                                    {ele.name}:
                                </span>
                                <div className="flex justify-end-items-center">
                                    {ele.values.map(valuess=>{
                                        return (
                                            <span data-id={`${ele.type}`}  onClick={(e)=>changeData(e,ele.id,valuess.id,pids,ele.type)} className={`${valuess.selected == 1? "bg-yellow-500":"border-2"} cursor-pointer rounded  mr-2 px-2 py-1`}>
                                                {valuess.value}
                                            </span>
                                            );
                                    })}
                                </div>
                            </div>
                            );
                        
                    })}
                  
                    
              
                   


                    <div className="flex flex-row-reverse justify-end w-full items-center mt-2" >
                            {datas&&datas.offer_price?
                                <span className="text-lg text-gray-500 discount relative">
                                    {datas.offer_price}
                                </span>  
                            :""}
                          
                            {datas&&datas.price?
                                <span className="text-md font-bold text-black ml-4">
                                    {datas.price}
                                </span>
                            :""}
                        </div>
                        <div className="flex flex-row-reverse mt-2 pl-2 justify-end pr-3 items-center w-full">
                            <span className="text-red-500 text-xs text-right mr-1">شحن مجاني للطلبات التي تتجاوز 12000 ل.س</span>
                            <span dir="rtl" className="font-bold text-xs">الكمية:</span>
                        </div>
                        <div className="flex flex-row-reverse  justify-between items-center w-full">
                            <div onClick={()=>AddToCart(datas?datas.slug:"")} className="cursor-pointer mt-2 rounded flex justify-center items-center bg-yellow-500 text-white px-3 lg:px-24  lg:py-1">إضافة للسلة</div>
                            <span className="border-2 flex flex-row-reverse mt-2 rounded">
                                <span className="px-2 py-1 flex justify-center border-r-2 items-center">+</span>
                                <span className="px-3 py-1 text-xs flex justify-center items-center">1</span>
                                <span className="px-2 py-1 flex justify-center border-l-2 items-center">-</span>
                            </span>
                        </div>
                                    {datas&&datas.linked_items.length>0?
                        <div className="pt-2  w-full">
                            <div className="shadow rounded w-full flex flex-col p-3 justify-between items-center">
                                <div className="flex flex-row-reverse justify-between w-full items-center text-sm">
                                    <div className="text-green-500 text-md font-bold">
                                        {pricess} {datas?datas.currency_symbol:""}
                                    </div>
                                    <CardTitle title={"مبيع متكرر لهذا المنتج"}></CardTitle>
                                </div>
                                    <Fslider price={prices} items={datas?datas.linked_items:""} item={datas?datas:""} image={dimage}></Fslider>
                                <div className="flex mt-2 flex-col justify-between items-center w-full ">
                                    <div className="w/4-12 text-sm rounded bg-transparent  border-green-700 text-green-700 px-4 py-1 mt-2" style={{border:"1px solid"}}>اشتريها معا بسعر :
                                        <span className="numbers text-sm" style={{fontWeight:"bold"}}>  {pricess} {datas?datas.currency_symbol:""} </span>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        :"" }
                        
                </div>



                
            </div>
            
            <div className="grid grid-cols-12 bg-white rounded shadow mt-12 p-3" dir="rtl">
                <div className="col-span-12 lg:col-span-7 p-2 rounded ">
                    <div className="grid grid-cols-12" dir="ltr">
                        <div className="col-span-4"></div>
                        <div className="col-span-8">
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
                                    <div  className={`${openTab==1?"block":"hidden"} text-right flex flex-col justify-between items-end p-2`} id={`link1`}>
                                        
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
                <div className="col-span-12 lg:col-span-5 2xl:col-span-3 p-2">
                        <div className="flex flex-row-reverse justify-between items-center mt-3 border-b-2 pb-2">
                            <p className="text-xs text-right text gray-300 mr-2">هذا المنتج لا يمكن إعادته أو تبديله تعلم المزيد عن سياسة الإرجاع لدينا</p>
                            <img className={`w-14 2xl:w-16 h-2  `} src="../images/icon1.svg" alt="" />
                        </div>
                        <div className="flex flex-row-reverse justify-between items-center mt-3 border-b-2 pb-2">
                            <p className="text-xs text-right text gray-300 mr-2">هذا المنتج لا يمكن إعادته أو تبديله تعلم المزيد عن سياسة الإرجاع لدينا</p>
                            <img className={`w-14 2xl:w-16 h-2  `} src="../images/icon2.svg" alt="" />
                        </div>
                        <div className="flex flex-row-reverse justify-between items-center mt-3 border-b-2 pb-2">
                            <div className="flex flex-col justify-between items-start mr-2">
                                <span className="text-xs text-black font-bold">
                                    شحن موثوق
                                </span>
                                <p className="text-xs text-right text gray-300 ">هذا المنتج لا يمكن إعادته أو تبديله تعلم المزيد عن سياسة الإرجاع لدينا</p>
                            </div>
                            
                            <img className={`w-14 2xl:w-16 h-2  `} src="../images/icon3.svg" alt="" />
                        </div>
                        <div className="flex flex-row-reverse justify-between items-center mt-3 border-b-2 pb-2">
                            <div className="flex flex-col justify-between items-start mr-2">
                                <span className="text-xs text-black font-bold">
                                    شحن موثوق
                                </span>
                                <p className="text-xs text-right text gray-300 ">هذا المنتج لا يمكن إعادته أو تبديله تعلم المزيد عن سياسة الإرجاع لدينا</p>
                            </div>
                            
                            <img className={`w-14 2xl:w-16 h-2  `} src="../images/icon4.svg" alt="" />
                        </div>
                        <div className="flex flex-row-reverse justify-between items-center mt-3 border-b-2 pb-2">
                            <div className="flex flex-col justify-between items-start mr-2">
                                <span className="text-xs text-black font-bold">
                                    شحن موثوق
                                </span>
                                <p className="text-xs text-right text gray-300 ">هذا المنتج لا يمكن إعادته أو تبديله تعلم المزيد عن سياسة الإرجاع لدينا</p>
                            </div>
                            
                            <img className={`w-14 2xl:w-16 h-2  `} src="../images/icon3.svg" alt="" />
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