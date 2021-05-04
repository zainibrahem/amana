import styled from 'styled-components';
import {
  background,
  compose,
  space,
  color,
  layout,
  position,
  flexbox,
  border,
} from 'styled-system';
import css from '@styled-system/css';

export const Header = styled.div`
    width:100%;
`;
export const Boxs = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
@media (max-width:1920px){
  height:90vh;
  width:97.7%;
  left: 98.7%;
  position:relative;
  transform:translateX(-100%);
}


@media (max-width:1400px){
  height:90vh;
  width:97.7%;
  left:98.7%;
  position:relative;
  transform:translateX(-100%);
}
`;