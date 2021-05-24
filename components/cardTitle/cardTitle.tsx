import React from 'react';
import { useAppState, useAppDispatch } from '../../contexts/app/app.provider';

export const CardTitle = (props) => {
    return(
        <>
            <h1 className="cardTitle relative px-5">{props.title}</h1>
        </>
    );
}