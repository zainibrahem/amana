import React from 'react';
import { useAppState, useAppDispatch } from '../../contexts/app/app.provider';
export const Title = (props) => {
    const Loading = useAppState("Loading");
    return (
        <div className={`grid grid-cols-12 my-8 md:my-2 `}>
            <div className={`col-span-12 flex justify-center items-center h-16 ${Loading?"skeleton-box w-40 left-1/2 transform -translate-x-1/2":""}`}>
                {Loading?"":<span className={`title px-4 text-black relative font-bold text-center sm:mt-12 sm:mb-12   text-sm sm:text-lg lg:text-sm  xl:text-lg 2xl:text-2xl `}>{props.title}</span>}
            </div>
        </div>
    );
}