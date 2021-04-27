import React,{useState} from 'react';
import Router, { useRouter } from 'next/router';
import { openModal } from '@redq/reuse-modal';
import { AuthContext } from 'contexts/auth/auth.context';
import AuthenticationForm from 'features/authentication-form';
import { RightMenu } from './menu/right-menu/right-menu';
import { LeftMenu } from './menu/left-menu/left-menu';
import {Foot,SocialIcon,SocialIcons,Title,Logos,Rows,Cols,Bottoms,Sections,Images} from './footer.style';
import { FormattedMessage } from 'react-intl';
import {Button} from 'components/button/button';
import LogoImage from 'assets/images/logo.png';
import UserImage from 'assets/images/user.jpg';
import {Faceb} from '../../assets/icons/Faceb';
import {Insta} from '../../assets/icons/Insta';
import {Twit} from '../../assets/icons/Twit';
import {Arr} from '../../assets/icons/Arr';
import Logo from 'layouts/logo/logo';
import { isCategoryPage } from '../is-home-page';
import Search from 'features/search/search';
type Props = {
  className?: string;
};

 const Footers: React.FC<Props> = ({ className }) => {
    const [isActive, setActive] = useState(true);

    const activeFooter = () =>{
        setActive(!isActive);
        console.log(isActive)
    }
    return (
        <Foot className={isActive?`full ${className}`:`${className}`} >
            <Rows className={isActive?'':'hidden'}>
                <Cols style={{justifyContent:"center"}}>
                    <p style={{width:"90%",fontSize:"14px",lineHeight:"30px"}}>
                        Use this page to browse the list of all Unilever’s
                        brands, see what brands are available in your
                        country and link to more information about any
                        of our brands on a local Unilever website.
                    </p>
                    <div style={{display:"flex",justifyContent:"flex-start",width:"100%",marginTop:"30px"}}>
                        <img style={{alignSelf:"center"}} src={LogoImage} width="50" alt=""/>
                        <img style={{alignSelf:"center",marginLeft:"20px"}} src={LogoImage} width="50" alt=""/>
                    </div>
                </Cols>
                <Sections>
                    <Cols style={{width:"25%"}}>
                        <h6>Links</h6>
                        <p>Home</p>
                        <p>Contact Us</p>
                        <p>Blog</p>
                        <p>Projects</p>
                        <p>About us</p>
                    </Cols>
                    <Cols style={{width:"25%"}}>
                        <h6>Links</h6>
                        <p>Home</p>
                        <p>Contact Us</p>
                        <p>Blog</p>
                        <p>Projects</p>
                        <p>About us</p>
                    </Cols>
                    <Cols style={{width:"25%"}}>
                        <h6>Links</h6>
                        <p>Home</p>
                        <p>Contact Us</p>
                        <p>Blog</p>
                        <p>Projects</p>
                        <p>About us</p>
                    </Cols>
                    <Cols style={{width:"25%"}}>
                        <h6>Links</h6>
                        <p>Home</p>
                        <p>Contact Us</p>
                        <p>Blog</p>
                        <p>Projects</p>
                        <p>About us</p>
                    </Cols>
                    <Sections style={{width:"100%",justifyContent:"center"}}>
                        <img style={{alignSelf:"center",marginTop:"20px"}} src={LogoImage} width="50" alt=""/>
                        <img style={{alignSelf:"center",marginTop:"20px"}} src={LogoImage} width="50" alt=""/>
                        <img style={{alignSelf:"center",marginTop:"20px"}} src={LogoImage} width="50" alt=""/>
                    </Sections>
                </Sections>
                <Cols>
                <SocialIcons>
                <SocialIcon style={{marginLeft:"0px"}}>
                    <Faceb ></Faceb>
                </SocialIcon>
                <SocialIcon>
                    <Twit></Twit>
                </SocialIcon>
                <SocialIcon>
                    <Insta></Insta>
                </SocialIcon>
            </SocialIcons>
                    <h6>Our newsletter</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                    <label>Your Phone</label>
                    <input type="text" className="form-control" placeholder="Phone" />
                    <button className="btn btn-primary subscibe">Subscibe</button>
                </Cols>
            </Rows>
            <Logos className={isActive?'':'hidden'}>
                <img src={LogoImage} width="100" alt=""/>
            </Logos>
                
            {/* <SocialIcon className={!isActive? 'under zindex' : 'zindex'}>
                <Button className="no-style" onClick={activeFooter}>
                    <Arr></Arr>
                </Button>
            </SocialIcon> */}
            <Bottoms>
            <Cols style={{width:"10%"}}></Cols>
            <Title>
                <FormattedMessage
                    id="footer"
                    defaultMessage="Copyright © 2021 Amana .  and related marks are registered trademarks of Amana All rights reserve"
                    values={{ minute: 90 }}
                />
            </Title>
            <SocialIcon className={!isActive? 'under' : ''}>
            </SocialIcon>
            </Bottoms>
        </Foot>
    );

}
export default Footers;
