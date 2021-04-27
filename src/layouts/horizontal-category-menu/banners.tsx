import React from 'react';
import {
  Background,
} from './banners.style';
import {Hover} from '../../components/banner/Hover';
interface Props {
    image:string
    title:string
    description:string
  }

export const Banners = ({ image ,description ,title}: Props) => {
return (
    <Background style={{backgroundImage:`url(${image})`}}>
        <div className="left-side">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="right-side">
          <div className="row1">
            <Hover></Hover>
            <Hover></Hover>
            <Hover></Hover>
          </div>
          <div className="row2">
            <Hover></Hover>
            <Hover></Hover>
            <Hover></Hover>
          </div>
        </div>
        <div className="anything"></div>
    </Background>
);
};
