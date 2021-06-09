import React from 'react';
import { useAppState, useAppDispatch } from '../../contexts/app/app.provider';
export const Title1 = (props) => {
    const Loading = useAppState("Loading");
    return (
        <div className={`grid grid-cols-12 mt-2 lg:mt-8 md:my-2 `}>
            <div className={`col-span-12 flex justify-start items-center h-16}`}>
                {Loading?"":<span className={`title px-4 text-white relative font-bold w-2/4 lg:w-1/4 text-center sm:mt-12 sm:mb-4   text-xs sm:text-lg lg:text-sm  xl:text-2xl 2xl:text-2xl transform translate-x-1/3`}>{props.title}</span>}
            </div>
        </div>
    );
}