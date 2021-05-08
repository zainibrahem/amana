import React, { useCallback, useEffect, useRef, useState } from 'react';
import {Row,Col,DiscountPercent} from '../Groups/Groups.style';
import {Title} from '../Tabs/Tabs.style';
import Image from 'assets/images/newimages/ss.jpg';
import Extra from 'assets/images/newimages/extra.svg';
import Speeds from 'assets/images/newimages/speed.svg';
import Ads from 'assets/images/newimages/ads.jpg';
import SS from 'assets/images/newimages/fd.png';
interface Props {
    flash?:boolean
}

export const Deal: React.FC<Props> = (flash) => {
 
  return (
      <>
        <Title style={{marginBottom:"40px",position:"relative",right:"50%",transform:"translateX(50%)",width:"250px"}}>صفقة اليوم</Title>
        <Row>
          <Col>
            {!flash?(
                <div className="Ads" style={{background:`url(${Ads})`}}></div>

            ):(
                <div className="flashdeal">
                     <div className="flag">
                            <span>صفقة اليوم</span>
                    </div>
                  
                        <DiscountPercent><span>20%</span></DiscountPercent>

                    <div className="leftside">
                        <div className="image" style={{background:`url(${SS})`}}></div>
                    </div>
                    <div className="rightside" style={{alignItems:"flex-start"}}>
                        <h2>سماعات ايفون</h2>
                        <p style={{textAlign:"right"}}>
                        مع شاشة حماية 5G ومزود بتطبيق فيس تايم، لون ذهبي  مع شاشة حماية 5G ومزود بتطبيق فيس تايم، لون ذهبي  مع شاشة حماية 5G ومزود بتطبيق فيس تايم، لون ذهبي  
                        </p>
                        <div className="price" style={{flexDirection:"row-reverse"}}>
                            <button className="add">إضافة للسلة</button>
                            <h1>$1.5</h1>
                        </div>
                        <div className="counters">
                            <div className="counter">
                                <span>12</span>
                                <span>ثواني</span>
                            </div>
                            <div className="counter">
                                <span>12</span>
                                <span>دقائق</span>
                            </div>
                            <div className="counter">
                                <span>12</span>
                                <span>ساعات</span>
                            </div>
                        </div>
                        <div className="slider">
                            <div className="topslider" style={{flexDirection:"row-reverse"}}>
                                <span>
                                    8 قطع
                                </span>
                                <span>
                                   متبقي 10
                                </span>
                            </div>
                            <div className="bottomslider" style={{flexDirection:"row-reverse"}}>
                                <div className="slid">
                                    <div className="activeslid">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            )}
          </Col>
     
          <Col>
            <div className="card">
                <div className="flag">
                        صفقة اليوم
                </div>
                <div className="scrolled">
                <div className="innercard" style={{marginTop:"17px"}}>
                    <div className="dealcard" style={{flexDirection:"row-reverse"}}>
                        <div className="space"></div>
                        <div className="content" style={{flexDirection:"row-reverse"}}>
                            <div className="actions" style={{alignItems:"flex-end"}}>
                                <div className="relative">
                                    <div className="extra" style={{background:`url(${Extra})`}}>
                                        <span> حسم 10%</span>
                                    </div>
                                </div>
                                <h6 className="discount">SYP 800</h6>
                                <h5>SYP.8000</h5>
                                <button className="add">إضافة للسلة +</button>
                            </div>
                            <div className="information" style={{alignItems:"flex-start",paddingRight:"13px"}}>
                                <h6>سماعات ايفون</h6>
                                <p style={{textAlign:"right"}}>
                                مع شاشة حماية 5G ومزود بتطبيق فيس تايم، لون ذهبي  
                                    </p>
                                <div className="speed">
                                    <img width="30" src={Speeds} alt=""/>
                                    توصيل سريع
                                </div>
                            </div>
                        </div>
                        <div className="image" style={{background:`url(${Image})`}}></div>
                    </div>
                </div>
                <div className="innercard" style={{marginTop:"17px"}}>
                    <div className="dealcard" style={{flexDirection:"row-reverse"}}>
                        <div className="space"></div>
                        <div className="content" style={{flexDirection:"row-reverse"}}>
                            <div className="actions" style={{alignItems:"flex-end"}}>
                                <div className="relative">
                                    <div className="extra" style={{background:`url(${Extra})`}}>
                                        <span> حسم 10%</span>
                                    </div>
                                </div>
                                <h6 className="discount">SYP 800</h6>
                                <h5>SYP.8000</h5>
                                <button className="add">إضافة للسلة +</button>
                            </div>
                            <div className="information" style={{alignItems:"flex-start",paddingRight:"13px"}}>
                                <h6>سماعات ايفون</h6>
                                <p style={{textAlign:"right"}}>
                                مع شاشة حماية 5G ومزود بتطبيق فيس تايم، لون ذهبي  
                                    </p>
                                <div className="speed">
                                    <img width="30" src={Speeds} alt=""/>
                                    توصيل سريع
                                </div>
                            </div>
                        </div>
                        <div className="image" style={{background:`url(${Image})`}}></div>
                    </div>
                </div>
                
                <div className="innercard" style={{marginTop:"17px"}}>
                    <div className="dealcard" style={{flexDirection:"row-reverse"}}>
                        <div className="space"></div>
                        <div className="content" style={{flexDirection:"row-reverse"}}>
                            <div className="actions" style={{alignItems:"flex-end"}}>
                                <div className="relative">
                                    <div className="extra" style={{background:`url(${Extra})`}}>
                                        <span> حسم 10%</span>
                                    </div>
                                </div>
                                <h6 className="discount">SYP 800</h6>
                                <h5>SYP.8000</h5>
                                <button className="add">إضافة للسلة +</button>
                            </div>
                            <div className="information" style={{alignItems:"flex-start",paddingRight:"13px"}}>
                                <h6>سماعات ايفون</h6>
                                <p style={{textAlign:"right"}}>
                                مع شاشة حماية 5G ومزود بتطبيق فيس تايم، لون ذهبي  
                                    </p>
                                <div className="speed">
                                    <img width="30" src={Speeds} alt=""/>
                                    توصيل سريع
                                </div>
                            </div>
                        </div>
                        <div className="image" style={{background:`url(${Image})`}}></div>
                    </div>
                </div>
                
                <div className="innercard" style={{marginTop:"17px"}}>
                    <div className="dealcard" style={{flexDirection:"row-reverse"}}>
                        <div className="space"></div>
                        <div className="content" style={{flexDirection:"row-reverse"}}>
                            <div className="actions" style={{alignItems:"flex-end"}}>
                                <div className="relative">
                                    <div className="extra" style={{background:`url(${Extra})`}}>
                                        <span> حسم 10%</span>
                                    </div>
                                </div>
                                <h6 className="discount">SYP 800</h6>
                                <h5>SYP.8000</h5>
                                <button className="add">إضافة للسلة +</button>
                            </div>
                            <div className="information" style={{alignItems:"flex-start",paddingRight:"13px"}}>
                                <h6>سماعات ايفون</h6>
                                <p style={{textAlign:"right"}}>
                                مع شاشة حماية 5G ومزود بتطبيق فيس تايم، لون ذهبي  
                                    </p>
                                <div className="speed">
                                    <img width="30" src={Speeds} alt=""/>
                                    توصيل سريع
                                </div>
                            </div>
                        </div>
                        <div className="image" style={{background:`url(${Image})`}}></div>
                    </div>
                </div>
                
                <div className="innercard" style={{marginTop:"17px"}}>
                    <div className="dealcard" style={{flexDirection:"row-reverse"}}>
                        <div className="space"></div>
                        <div className="content" style={{flexDirection:"row-reverse"}}>
                            <div className="actions" style={{alignItems:"flex-end"}}>
                                <div className="relative">
                                    <div className="extra" style={{background:`url(${Extra})`}}>
                                        <span> حسم 10%</span>
                                    </div>
                                </div>
                                <h6 className="discount">SYP 800</h6>
                                <h5>SYP.8000</h5>
                                <button className="add">إضافة للسلة +</button>
                            </div>
                            <div className="information" style={{alignItems:"flex-start",paddingRight:"13px"}}>
                                <h6>سماعات ايفون</h6>
                                <p style={{textAlign:"right"}}>
                                مع شاشة حماية 5G ومزود بتطبيق فيس تايم، لون ذهبي  
                                    </p>
                                <div className="speed">
                                    <img width="30" src={Speeds} alt=""/>
                                    توصيل سريع
                                </div>
                            </div>
                        </div>
                        <div className="image" style={{background:`url(${Image})`}}></div>
                    </div>
                </div>
                
                </div>
            </div>
          </Col>

         
      </Row>
      </>
  );

}