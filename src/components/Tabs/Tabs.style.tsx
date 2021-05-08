import styled from 'styled-components';

export const Row = styled.div`
    padding:60px 20px;
    display:flex;
    flex-direction:column;
    align-items:center;
`;

export const Title = styled.h1`
    text-align:center;
    position:relative;
    font-weight:bolder;
    :after{
        content:'';
        width:7px;
        height:30px;
        background:rgb(243,156,18);
        position:absolute;
        left:-20px;
        top:-20px;
        border-top-right-radius:18px;
        border-bottom-left-radius:18px;
    }
    :before{
        content:'';
        width:5px;
        height:17px;
        background:rgb(243,156,18);
        position:absolute;
        right:-20px;
        bottom:-20px;
        border-top-right-radius:18px;
        border-bottom-left-radius:18px;
    }
    @media (max-width:600px){
        font-size:30px;
    }
    @media (max-width:400px){
        font-size:20px;
    }
`;
export const UlTabs = styled.ul`
    width:30%;
    display:flex;
    justify-conetnt:space-between;
    align-items:center;
    margin-top:40px;
    padding-bottom:30px;
    border-bottom:2px solid #eee;
    position:relative;
    .active{
        position:absolute;
        bottom:0px;
        width:25%;
        height:2px;
        background:#000;
        transition:.4s all ease
    }
    li{
        width:100px;
        text-align:center;
        @media (max-width:600px){
            font-size:16px;
        }
        @media (max-width:400px){
            font-size:14px;
        }
    }
    @media (min-width:1500px){
        width:20%;
    }
    @media (max-width:950px){
        width:40%;
    }
    @media (max-width:700px){
        width:50%;
    }
    @media (max-width:550px){
        width:60%;
    }
    @media (max-width:400px){
        width:100%;
    }
`;
export const UIElements = styled.div`
    position:relative;
    margin-top:60px;
    height:500px;
    width:100%;
    .element{
        position:absolute;
        transition:1s all ease;
        opacity:0;
        z-index:0;
        top:0px;
        width:100%;
        &.actives{
            transition:1s all ease;
            opacity:1;
            z-index:1;
            position:absolute;
            transition:1s all ease;
            top:0px;
            width:100%;
        }
    }
`;