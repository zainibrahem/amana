import React from 'react';
import { useAppState, useAppDispatch } from '../../contexts/app/app.provider';
import {Title} from '../title/title';
import Brands from '../brands/brands';

export default function Catgory (props) {

    return (
        <>
            <Brands type="categories" data={props.data}></Brands>
        </>
    );
}