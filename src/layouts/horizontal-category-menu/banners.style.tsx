import styled from 'styled-components';
import css from '@styled-system/css';

export const Background = styled.div<any>(
  css({
      height:"300px",
      padding:"30px 0px",
      margin:"0px 30px",
      display:"flex",
      justifyContent:"space-between",
      alignItems:"center",
      '.left-side':{
          width:"50%",
          height:"100%",
          display:"flex",
          flexDirection:"column",
          justifyContent:"center",
          alignItems:"center",
          padding:"30px",
          textAlign:"left",
         
          'h3':{
            width:"100%",
            
          },
          'p':{
              color:"white",
              marginTop:"30px"
          }
      },
      '.anything':{
        width:"20%",
      },
      '.package':{
        position: "absolute",
        opacity:"0",
        // clipPath:"polygon(50% 81%, 100% 65%, 50% 100%, 0 66%)",
        transition:".7s all ease",
        width: "14%",
        display:"none",
        bottom: "9px !important",
        height: "100%",
        left: "5px",
        zIndex: "111111",
      },
      '.right-side':{
        width:"464px",
        height:"100%",
        display:"flex",
        flexDirection:"column",
        flexWrap:"no-wrap",
        justifyContent:"space-between",
        ".shown":{
            left:"17px"
        },
        ".row1":{
            marginLeft:"60px",
            display:"flex",
            justifyContent:"space-between",
            width:"100%",
            height:"100px"
        },
        ".row2":{
            display:"flex",
            justifyContent:"space-between",
            width:"100%",
            height:"100px"
        },
        ".margin":{
            width:"25% !important",
        }
    },
  })
);
