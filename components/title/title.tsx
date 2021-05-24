import React from 'react';
import { useAppState, useAppDispatch } from '../../contexts/app/app.provider';

export const Title = (props) => {
    return (
        <h1 className="title text-black relative left-2/4 w-6/12 sm:w-4/12 md:w-3/12 lg:w-2/12 xl:w-48 2xl:w-2/12 transform -translate-x-2/4 font-bold text-center mt-8 sm:mt-12 mb-8 sm:mb-12   text-sm sm:text-lg lg:text-sm  xl:text-lg 2xl:text-2xl">{props.title}</h1>
    );
}