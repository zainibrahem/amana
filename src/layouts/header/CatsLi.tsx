import React from 'react';
import {Catsli} from './category.style';

type Props = {
    Label?: string;
    className?:string;
  };
  
  const CatsLi: React.FC<Props> = ({ Label,className }) => {
      return (
         <Catsli className={className}>{Label}</Catsli>
      );
  }
  export default CatsLi;