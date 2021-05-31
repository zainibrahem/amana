
import React from 'react';
import { useAppState } from '../../contexts/app/app.provider';
export default function Banners (props) {
    const Loading = useAppState('Loading');

    return (
        props.data?
        <div className="grid grid-cols-12 gap-4 mt-2 sm:mt-4">
            <div className="hidden md:block col-span-6">
                <div className={`w-full h-full banner1 rounded shadow-md ${Loading?"skeleton-box":""}`} style={Loading?{}:{background:"url("+props.data[0].image+") "}}></div>
            </div>
            <div className="col-span-12 md:col-span-6">
                <div className="grid grid-cols-12 gap-2 sm:gap-4">
                    <div className=" col-span-12">
                        {/* <div className={`w-full   banner1 rounded shadow-md  ${Loading?"skeleton-box":""}`} style={Loading?{}:{background:"url("+props.data[1].image+") "}}></div> */}
                        <img className={`w-full   banner1 rounded shadow-md  ${Loading?"skeleton-box":""}`} src={props.data[1].image} alt="" />
                    </div>
                    <div className="col-span-6">
                        {/* <div className={`w-full   banner1 rounded shadow-md ${Loading?"skeleton-box":""}`} style={Loading?{}:{background:"url("+props.data[2].image+")"}}></div> */}
                        <img className={`w-full   banner1 rounded shadow-md ${Loading?"skeleton-box":""}`} src={props.data[2].image} alt="" />
                    </div>
                    <div className="col-span-6">
                        {/* <div className={`w-full   banner1 rounded shadow-md ${Loading?"skeleton-box":""}`} style={Loading?{}:{background:"url("+props.data[3].image+")"}}></div> */}
                        <img className={`w-full   banner1 rounded shadow-md ${Loading?"skeleton-box":""}`} src={props.data[3].image} alt="" />
                    </div>
                </div>
            </div>
        </div>
        :<>
        </>
    );
}