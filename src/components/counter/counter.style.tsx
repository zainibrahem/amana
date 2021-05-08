import styled from 'styled-components';
import css from '@styled-system/css';
import { variant } from 'styled-system';
export const CounterBox = styled.div<any>(
  css({
    display: 'flex',
    marginTop:"-22px",
    backgroundColor: 'primary.regular',
    color: 'white',
    fontSize: 'base',
    position:"absolute",
    fontWeight: 'bold',
    '&.show':{
      opacity:"1",
      transition:".4s all ease"
    },
    '&.hide':{
      opacity:"0",
      transition:".4s all ease"
    },
    '@media (max-width:400px)':{
      marginTop:"20px !important",
    }
  }),
  {
    borderRadius: 200,
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
    flexShrink: 0,
    '&:focus': {
      outline: 'none',
    },
  },
  variant({
    variants: {
      horizontal: {
        width: 104,
        height: 27,
      },
      vertical: {
        width: 30,
        height: 90,
        flexDirection: 'column-reverse',
      },
      lightHorizontal: {
        width: 104,
        height: 27,
        backgroundColor: 'gray.200',
        color: 'text.bold',
      },
      lightVertical: {
        width: 30,
        height: 90,
        flexDirection: 'column-reverse',
        backgroundColor: 'gray.200',
        color: 'text.bold',
      },
      altHorizontal: {
        width: 104,
        height: 27,
        borderRadius: '6px',
      },
      altVertical: {
        width: 30,
        height: 90,
        borderRadius: '6px',
      },
      full: {
        width: '100%',
        height: 27,
        borderRadius: '6px',
      },
    },
  })
);

export const CounterButton = styled.button<any>(
  {
    border: 'none',
    backgroundColor: 'transparent',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    padding: 10,
    cursor: 'pointer',
    '&:hover, &:focus': {
      outline: 'none',
    },
  },
  variant({
    variants: {
      lightHorizontal: {
        color: 'text.regular',
      },
      lightVertical: {
        color: 'text.regular',
      },
    },
  })
);

export const CounterValue = styled.span({
  pointerEvents: 'none',
});
CounterValue.displayName = 'CounterValue';
CounterButton.displayName = 'CounterButton';
CounterBox.displayName = 'CounterBox';
CounterBox.defaultProps = {
  variant: 'horizontal',
};
