import React from 'react';
import { useAppState, useAppDispatch } from '../../contexts/app/app.provider';
import {Title} from '../title/title';
import Brands from '../brands/brands';

export default function Catgory (props) {
    const title = "التصنيفات المقترحة";

    return (
        <>
            <Title title={title}></Title>
            <Brands data={props.data}></Brands>
        </>
    );
}