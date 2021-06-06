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
export default function Product(props) {
    const [openTab, setOpenTab] = React.useState(1);
    const [dimage,setDImage] = useState("");
    const [pricess,setPricess] = useState(0);
    const [done,setDone] = useState(1);
    const router = useRouter()
    const renderHTML = (rawHTML: string) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
    const { pids } = router.query;
    interface Attr {
        name:string
        value:[]
    }
    interface Pro {
        model_number:string
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
    interface Inven {
        attributes:Attr1[]
    }
    interface NewData{
        title:""
        brand:""
        product:Pro
        price:""
        offer_price:null
        linked_items:Item[]
        currency_symbol:string
        attributes:Attr1[]
    }
    interface Data {
       data:{
            title:""
            brand:""
            product:Pro
            price:""
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
    const [data,setData] = useState<Data>();
    const [title,setTitle] = useState("");
    const [datas,setDatas] = useState<NewData>();
    const [active,setActive] = useState([])
    const [attributes,setAttributes] = useState([]);
    const [activeAttr , setActiveAttr] = useState([])
    const [indexs,setIndexs] = useState([])
    const [values , setValues] = useState([])
    const setAttr = (key,value)=> {
        var array = [];
        array = activeAttr;
            array.forEach(element =>{
                if(element.id == key){
                    element.value = parseInt(value);       
                }
            }
        )
        setActiveAttr(array)

    }

    const changeAttr = (key,value) =>{
            setAttr(key,value);
            var att = data;
            var correct = false;
                data.inventories.forEach(element=>{
                    JSON.stringify(element.attributes) == JSON.stringify(activeAttr)?correct=true:correct=false
                    correct?( att['data'] = element):""
                })
            setDatas(att['data'])
            setTitle(att.data.title);
    }
  
    useEffect(() => {
        
        fetch(`https://amanacart.com/api/item/${pids}`)
         .then(res => res.json())
         .then(result =>{
           setData(result);
           result.variants.images.forEach(element => {
               if(element.id == result.data.image_id){
                    setDImage(element.path)
               }
           });
         
           var pri = parseInt(result.data.raw_price,10);
           result.data.linked_items.map(el => {
                pri = pri+= parseInt(el.raw_price,10);
           })
           setPricess(pri);
           setDatas(result.data);
           setAttributes(Object.values(result.variants.attributes));
           setActiveAttr(Object.values(result.data.attributes));
           setTitle(result.data.title);
         
         })
         .catch(e => {
           console.log(e);
       });
     },[pids])

     const prices = (number) =>{
        setPricess(number);
     }

    return(
        <>
            <div className="grid grid-cols-12 gap-3 bg-white shadow rounded mt-12 p-4" dir="rtl">
                <div className="col-span-1"></div>
                <div className="col-span-12 lg:col-span-5 flex flex-col justify-between">
                    <ThumbSlider images={data?data.variants.images:""}></ThumbSlider>
                    <div className="w-full flex flex-col justify-start items-start mt-1">
                        <div className="bg-gray-100 w-full flex flex-col justify-start items-start p-2">
                        <div className="flex justify-start items-center border-b-2 pb-2 border-gray-300 w-full text-right mt-2">
                            <span className="text-sm text-gray-500 ml-2">شحن إلى دمشق</span>

                            <span className="text-black">
                                (
                                <span className="text-xs text-yellow-500">تغيير المدينة</span>
                                )
                            </span>
                            
                        </div>
                        <span className="text-xs text-gray-500 text-right mt-2">يصلك خلال 14 ساعة و 20 دقيقة</span>
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
                            ele.name=="Color"?
                             <div>
                                <span className="text-xs mt-2">
                                    {ele.name}:
                                </span>
                                <div className="flex justify-end-items-center">
                                    {Object.entries(ele.value).map(([keys,colors]) =>{
                                        return (
                                            activeAttr?activeAttr.map(attr=>{
                                                return (
                                                    attr.id == 'Color'?
                                                    attr.value== parseInt(keys)?
                                                    <div data-id={keys} onClick={()=>changeAttr(ele.name,keys)} className="rounded-full border-2 cursor-pointer border-red-500   ml-2 w-8 h-6" style={{background:`${colors}`}}></div>
                                                    :
                                                    <div data-id={keys} onClick={()=>changeAttr(ele.name,keys)} className="rounded-full border-2 cursor-pointer   ml-2 w-8 h-6" style={{background:`${colors}`}}></div>
                                                    :""
                                                )
                                            }
                                            )
                                            :""
                                        )
                                            }
                                        )
                                    }
                                </div>
                            </div>
                            :
                            <div>
                                <span className="text-xs mt-2">
                                    {ele.name}:
                                </span>
                                <div className="flex justify-end-items-center">
                                    {Object.entries(ele.value).map(([keys,colors]) =>{
                                        return (
                                            activeAttr?activeAttr.map(attr=>{
                                                return (
                                                    attr.id == 'Size'?
                                                    attr.value== parseInt(keys)?
                                                    (
                                                       
                                                    <div data-id={keys} onClick={()=>changeAttr(ele.name,keys)} className="rounded ml-2 bg-yellow-500 text-white cursor-pointer text-xs border-2 px-3 py-1 mt-2">
                                                        {colors}
                                                    </div>
                                                    )
                                                    :
                                                    <div data-id={keys} onClick={()=>changeAttr(ele.name,keys)} className="rounded ml-2 bg-white text-xs cursor-pointer border-2 px-3 py-1 mt-2">
                                                        {colors}
                                                    </div>
                                                    :""
                                                )
                                            }
                                            )
                                            :""
                                        )
                                            }
                                        )
                                    }
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
                        <div className="flex flex-row-reverse mt-2 pl-2 justify-between items-center w-full">
                            <span dir="rtl" className="font-bold text-xs">الكمية:</span>
                            <span className="text-red-500 text-xs text-right mr-1">شحن مجاني للطلبات التي تتجاوز 12000 ل.س</span>
                        </div>
                        <div className="flex flex-row-reverse justify-between items-center w-full">
                            <span className="border-2 flex flex-row-reverse mt-2 rounded">
                                <span className="px-2 py-1 flex justify-center border-l-2 items-center">+</span>
                                <span className="px-3 py-1 text-xs flex justify-center items-center">1</span>
                                <span className="px-2 py-1 flex justify-center border-r-2 items-center">-</span>
                            </span>
                            <div onClick={()=>console.log(activeAttr)} className="mt-2 rounded flex justify-center items-center bg-yellow-500 text-white px-3 lg:px-24  lg:py-1">إضافة للسلة</div>
                        </div>
                        <div className="pt-2  w-full">
                            <div className="shadow rounded w-full flex flex-col p-3 justify-between items-center">
                                <div className="flex flex-row-reverse justify-between w-full items-center text-sm">
                                    <div className="text-green-500 text-md font-bold">
                                        {pricess} {datas?datas.currency_symbol:""}
                                    </div>
                                    <CardTitle title={"مبيع متكرر لهذا المنتج"}></CardTitle>
                                </div>
                                <div className="flex mt-2 flex-col justify-between items-center w-full ">
                                    <Fslider price={prices} items={datas?datas.linked_items:""} item={datas?datas:""} image={dimage}></Fslider>
                                    <div className="w/4-12 text-sm rounded bg-transparent  border-green-700 text-green-700 px-4 py-1 mt-2" style={{border:"1px solid"}}>اشتريها معا بسعر :
                                        <span className="numbers text-sm" style={{fontWeight:"bold"}}>  {pricess} {datas?datas.currency_symbol:""} </span>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        
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
                                    <div  className={`${openTab==1?"block":"hidden"} flex flex-col justify-between items-end p-2`} id={`link1`}>
                                        {/* {renderHTML(data.item.product.description)} */}
                                        تفاصيل
                                    </div>


                                    <div  className={`${openTab == 2?"block":"hidden"} flex flex-col justify-between items-end p-2`} id={`link2`}>
                                                {/* {renderHTML(data.item.description)} */}
                                                تفاصيل
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
                    {/* <Title title="منتجات مقترحة"></Title> */}
                    <div className="flex flex-col justify-center items-center w-full">
                        {/* <CardSlider></CardSlider> */}
                        <Categories></Categories>
                    </div>
                </div>
            </div>
        </>
    );
}