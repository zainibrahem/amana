import styled from 'styled-components';
import Discount from 'assets/images/newimages/discount.svg';
import { themeGet } from '@styled-system/theme-get';

export const Row = styled.div`
    display:flex;
    width:100%;
    justify-content:space-between;
    align-items:center;
    @media (max-width:1990px){
        padding-right:4px;
    }
    @media (max-width:1400px){
        padding:0px 8px;
    }
    @media (max-width:990px){
        padding:0px 20px;
    }
    @media (max-width:600px){
        flex-direction:column;
    }
`;
export const DiscountPercent = styled.span`
  font-family: ${themeGet('fonts.body', 'sans-serif')};
  color: ${themeGet('colors.white', '#ffffff')};
  line-height: 24px;
  background: url(${Discount});
  position: relative;
  display: flex;
  align-items:flex-start;
  position: absolute;
  top: 0px;
  left: 0px;
  transform:rotateY(180deg);
  width: 100px;
  font-size: 18px;
  text-align: center;
  justify-content: flex-end;
  font-weight: normal;
  height: 100px;
  background-repeat: no-repeat;
  z-index: 2;
  padding-top:13px;
  padding-right:10px;
  span{
      transform:rotateY(180deg)
  }
`;
export const Col = styled.div`
    display:flex;
    flex-direction:column;
    width:47vw;
    height:33vw;
    justify-content:flex-end;
    align-items:flex-end;
    @media (min-width:1500px){
        width:48vw;
    }
    @media (max-width:1100px){
        width:46vw;
    }
    @media (max-width:990px){
        width:47vw;
    }

    @media (max-width:700px){
        width:91vw;
        height:45vw;
    }
    .flashdeal{
        width:100%;
        height:100%;
        position:relative;
        display:flex;
        border-radius:10px;
        .flag{
            transform:rotateY(180deg);
            position:absolute;
            top:0px;
            z-index:1;
            right:0px;
            width:150px;
            display:flex;
            justify-content:center;
            align-items:center;
            color:white;
            text-align:center;
            font-size:18px;
            height:30px;
            border-radius:18px;
            border-bottom-right-radius:140px;
            border-top-right-radius:0px;
            background:red;
            span{
                transform:rotateY(180deg);
            }
            @media (min-width:1800px){
                height:35px;
                width:175px;
            }
        }
        .rightside{
            height:100%;
            min-width:60%;
            flex:0 0 60%;
            background:rgb(255,171,38);
            display:flex;
            flex-direction:column;
            align-items:flex-end;
            padding-right:40px;
            padding-left:20px;
            h2{
                margin-top:30px;
            }
            p{
                text-align:right;
            }
            .counters{
                width:100%;
                display:flex;
                justify-content:space-between;
                align-items:center;
                margin-top:20px;
                .counter{
                    width:90px;
                    height:90px;
                    border-radius:100%;
                    border:5px solid rgb(162,114,36);
                    border-left:5px solid rgb(241,187,101);
                    border-top:5px solid rgb(241,187,101);
                    display:flex;
                    flex-direction:column;
                    justify-content:center;
                    align-items:center;
                    color:white;
                    span{
                        font-weight:bold;
                    }
                }
            }
            .slider{
                margin-top:30px;
                width:100%;
                .topslider{
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                    font-size:12px;
                    font-weight:bold;
                }
                .bottomslider{
                    .slid{
                        width:100%;
                        height:4px;
                        border-radius:2px;
                        background:white;
                        position:relative;
                        .activeslid{
                            width:30%;
                            height:4px;
                            top:0px;
                            right:0px;
                            border-radius:2px;
                            background:white;
                            position:absolute;
                            background:red;
                        }
                    }
                }
            }
            .price{
                display:flex;
                justify-content:space-between;
                align-items:center;
                width:100%;
                margin-top:30px;
                h1{
                    font-weight:bolder;
                }
                .add{
                    width:130px;
                    border-radius:4px;
                    border:0px solid;
                    background:#191919;
                    color:rgb(243,156,18);
                }
            }
        }
        .leftside{
            height:100%;
            min-width:40%;
            flex:0 0 40%;
            .image{
                width:100%;
                height:100%;
                background-size:cover !important;
                background-position:center center !important;
            }
            
        }
    }
    .Ads{
        width:100%;
        height:100%;
        background-size:cover !important;
        background-repeat:np-repeat !important;
        border-radius:10px;
    }
    .card{
        background:white;
        border-radius:10px;
        padding:10px;
        width:99%;
        height:100%;
        box-shadow:0px 0px 1px #b1b1b1;
        position:relative;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        @media (min-width:1800px){
            padding:16px;
        }
        .scrolled{
            width:100%;
            overflow-y:scroll;
            position:relative;
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            align-items:center;
        }
        .flag{
            position:absolute;
            top:0px;
            z-index:1;
            left:0px;
            width:150px;
            display:flex;
            justify-content:center;
            align-items:center;
            color:white;
            text-align:center;
            font-size:18px;
            height:30px;
            border-radius:18px;
            border-bottom-right-radius:140px;
            border-top-right-radius:0px;
            background:red;
            @media (min-width:1800px){
                height:35px;
                width:175px;
            }
        }
    }
    .innercard{
        width:98%;
        height:84%;
        margin-top:9px;
        .dealcard{
            display:flex;
            justify-content:space-between;
            position:relative;
            border-top-right-radius:10px;
            border-bottom-right-radius:10px;
            background:#eee;
            @media (min-width:1800px){
                justify-content:space-between;
            }
            .space{
                width:20px;
            }
            .image{
                width:37%;
                background:red;
                height:145px;
                border-top-right-radius:10px;
                border-bottom-right-radius:10px;
                background-size:cover !important;
                background-position:center !important;
                @media (min-width:1300px){
                    height:130px;
                }
                @media (min-width:1800px){
                    height:187px;
                    width:32%;
                }
            }
            .content{
                display:flex;
                justify-content:space-between;
                
                .actions{
                    display:flex;
                    flex-direction:column;
                    justify-content:space-evenly;
                    flex:0 0 50%;
                    align-items:flex-start;
                    padding-left:10px;
                    .discount{
                        position:relative;
                        width:30%;
                        color:#929292;
                        font-size:12px;
                        @media (min-width:1800px){
                            width:25%;
                        }
                        :after{
                            width:100%;
                            height:1px;
                            background:#675c5c;
                            content:'';
                            position:absolute;
                            top:50%;
                            font-weight:normal;
                            transform:translateY(-50%);
                            left:0px;
                        }
                    }
                    h5{
                        font-weight:bold;
                        font-size:15px;
                        
                    }
                    .add{
                        width:130px;
                        border-radius:4px;
                        border:0px solid;
                        background:#191919;
                        color:rgb(243,156,18);
                    }
                    .relative{
                        position:relative;
                        height:20px;
                        width:100px;
                        margin-left:-10px;
                        .extra{
                            position:absolute;
                            left:0px;
                            top:0px;
                            width:100px;
                            height:20px;
                            font-size: 12px;
                            text-align:center;
                            padding-right:10px;
                            @media (min-width:1800px){
                                width:115px;
                                font-size: 12px;
                                text-align: center;
                            }
                        }
                    }
                   
                }
                .information{
                    display:flex;
                    flex-direction:column;
                    justify-content:space-around;
                    align-items:flex-end;
                    padding-right:20px;
                    .speed{
                        display:flex;
                        justify-content:space-between;
                        align-items:center;
                        font-weight:bold;
                        font-size:14px;
                    }
                    h6{
                        font-weight:bold;
                        @media (min-width:1800px){
                            font-size:18px;
                        }
                    }
                    h6,p{
                        text-align:right;
                    }
                    p{
                        width:100%;
                        font-size:12px;
                        @media (min-width:1800px){
                            font-size:16px;
                        }
                    }
                }   
            }
        }
    }
    .background{
        width:100%;
        height:98%;
        background-repeat:no-repeat !important;
        background-size:cover !important;
        position:relative;
        border-radius:9px;
    }
    .multi{
        width:100%;
        height:100%;
        position:relative;
        left:0px;
        top:0px;
        display:flex;
        justify-content:space-between;
        align-items:flex-end;
        flex-wrap:wrap;
    }
    .backgrounds{
        width:49%;
        height:48%;
        background-repeat:no-repeat !important;
        background-size:cover !important;
        position:relative;
        border-radius:9px;
    }
`;


