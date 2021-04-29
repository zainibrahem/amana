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
                        <img style={{alignSelf:"center"}} src="https://lh3.googleusercontent.com/1hJj6Aw2k6cEyFu10xdj5riLo0wBGFKE5XnbGaymhgo1z8Tsr8EpfJr2jbQFRxDONvwk6lak-62F2Fx7-_jp-ykJKA=w1000-e365" width="100" alt=""/>
                        <img style={{alignSelf:"center",marginLeft:"20px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Available_on_the_App_Store_%28black%29.png/640px-Available_on_the_App_Store_%28black%29.png" width="100" alt=""/>
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
                        <svg width="31" style={{marginLeft:"10px",marginTop:"14px"}} height="10" viewBox="0 0 31 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5705 9.1178L13.1238 0.380486H15.5508L14.0461 9.1178H11.5705Z" fill="#A1A6B7"></path><path d="M22.8319 0.477558C22.3465 0.283396 21.5698 0.0892334 20.599 0.0892334C18.172 0.0892334 16.4245 1.30275 16.4245 3.05021C16.4245 4.36081 17.6381 5.04038 18.6089 5.47724C19.5797 5.91411 19.8709 6.20535 19.8709 6.59368C19.8709 7.17616 19.0943 7.46741 18.4147 7.46741C17.4439 7.46741 16.9099 7.32179 16.0848 6.982L15.745 6.83638L15.4052 8.82654C15.9877 9.06925 17.0556 9.31195 18.172 9.31195C20.7447 9.31195 22.4436 8.09844 22.4436 6.25389C22.4436 5.23454 21.8125 4.45789 20.3563 3.82686C19.4826 3.39 18.9486 3.14729 18.9486 2.71043C18.9486 2.3221 19.3855 1.93378 20.3563 1.93378C21.1815 1.93378 21.764 2.0794 22.2009 2.27356L22.4436 2.37064L22.8319 0.477558Z" fill="#A1A6B7"></path><path fillRule="evenodd" clip-rule="evenodd" d="M25.7444 1.01151C25.9871 0.429026 26.4239 0.380486 27.0064 0.380486H28.8995L30.9382 9.1178H28.6082L28.317 7.66158H25.2104L24.725 9.1178H22.1038L25.7444 1.01151ZM26.8608 3.63272C26.8608 3.63272 26.0356 5.76851 25.89 6.20537V6.25391H27.9287C27.8316 5.76851 27.3462 3.58418 27.3462 3.58418L27.2006 2.75899C27.055 3.09877 26.8608 3.63272 26.8608 3.63272Z" fill="#A0A5B6"></path><path d="M7.10472 6.4966L6.86202 5.23455C6.42515 3.77833 5.01747 2.17649 3.46417 1.39984L5.6485 9.16634H8.26969L12.2015 0.429024H9.58029L7.10472 6.4966Z" fill="#A1A6B7"></path><path d="M0.357605 0.380005L0.794471 0.477086C3.90107 1.2052 6.03686 3.04974 6.86205 5.23407L5.98832 1.10811C5.8427 0.525627 5.40583 0.380005 4.87188 0.380005H0.357605Z" fill="#A1A6B7"></path><path d="M9.53179 6.20537L7.88141 4.55498L7.10476 6.39953L6.9106 5.18601C6.47373 3.72979 5.06606 2.12795 3.51276 1.3513L5.69708 9.1178H8.31828L9.53179 6.20537Z" fill="#A0A5B6"></path><path d="M14.0461 9.1178L11.9588 6.98201L11.5705 9.1178H14.0461Z" fill="#A0A5B6"></path><path d="M19.6282 6.1083C19.8224 6.30246 19.9195 6.44808 19.8709 6.64225C19.8709 7.22473 19.0943 7.51598 18.4147 7.51598C17.4439 7.51598 16.9099 7.37036 16.0848 7.03057L15.745 6.88495L15.4052 8.87511C15.9877 9.11782 17.0556 9.36052 18.172 9.36052C19.7253 9.36052 20.9874 8.92366 21.7155 8.14701L19.6282 6.1083Z" fill="#A0A5B6"></path><path d="M22.4436 9.1178H24.725L25.2104 7.66158H28.317L28.6082 9.1178H30.9382L30.113 5.57434L27.2006 2.75898L27.3462 3.53563C27.3462 3.53563 27.8316 5.71996 27.9287 6.20536H25.89C26.0841 5.71996 26.8608 3.63271 26.8608 3.63271C26.8608 3.63271 27.0549 3.09876 27.2006 2.75898" fill="#A0A5B6"></path></svg>
                        <svg width="28" style={{marginLeft:"10px",marginTop:"14px"}} height="10" viewBox="0 0 28 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.834352" fillRule="evenodd" clip-rule="evenodd" d="M4.80735 9.02793C2.61107 9.02793 0.892242 7.64397 0.892242 5.49113C0.892242 2.69955 3.05271 0.866089 5.52352 0.866089C7.46914 0.866089 8.59115 1.90702 9.05666 3.10172L7.43333 3.64585C7.12299 2.806 6.35906 2.35651 5.43997 2.35651C3.936 2.35651 2.67075 3.64585 2.67075 5.38467C2.67075 6.61486 3.53016 7.53751 4.90284 7.53751C5.5832 7.53751 6.32325 7.18264 6.77683 6.62669L8.08983 7.50202C7.17073 8.66124 5.8458 9.02793 4.80735 9.02793ZM11.9214 3.03075C12.6972 3.03075 13.3776 3.36195 13.7596 3.92973L13.9147 3.17269H15.4426L14.1654 8.88598H12.6375L12.8047 8.17626C12.3153 8.74404 11.7662 9.02793 11.0739 9.02793C9.77284 9.02793 8.87762 8.17626 8.87762 6.66218C8.87762 4.93518 9.96382 3.03075 11.9214 3.03075ZM12.1601 4.3674C11.1694 4.3674 10.4651 5.30187 10.4651 6.35463C10.4651 7.17082 11.0142 7.69128 11.7423 7.69128C12.2795 7.69128 12.7569 7.39556 13.0673 7.00521L13.5089 5.02981C13.2582 4.63946 12.7688 4.3674 12.1601 4.3674ZM18.176 9.02793C19.7516 9.02793 20.6707 8.11711 20.6707 7.02887C20.6707 5.29004 17.7343 5.44381 17.7343 4.74592C17.7343 4.4502 18.0327 4.21362 18.5699 4.21362C19.2741 4.21362 19.9903 4.60397 20.2648 4.95884L21.0526 3.95339C20.5036 3.39744 19.5845 3.03075 18.6057 3.03075C17.0659 3.03075 16.2304 3.96522 16.2304 4.95884C16.2304 6.674 19.1667 6.48474 19.1667 7.25361C19.1667 7.57299 18.8444 7.84505 18.3312 7.84505C17.4956 7.84505 16.6601 7.34824 16.3139 6.94607L15.4664 7.99883C16.111 8.67306 17.1256 9.02793 18.176 9.02793ZM26.782 8.88598L27.6534 4.95884C27.6773 4.84055 27.7131 4.60397 27.7131 4.48569C27.7131 3.59853 27.0208 3.03075 25.9107 3.03075C25.0632 3.03075 24.4425 3.48024 23.9889 3.90608L24.6454 0.996202H23.1176L21.363 8.88598H22.8908L23.7383 5.04164C24.0725 4.71043 24.5738 4.3674 25.0871 4.3674C25.6481 4.3674 26.0778 4.56849 26.0778 5.08895C26.0778 5.17175 26.0539 5.32553 26.03 5.42016L25.2661 8.88598H26.782Z" fill="#A0A5B6"></path></svg>
                        <svg width="30" style={{marginLeft:"10px",marginTop:"14px"}} height="13" viewBox="0 0 30 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.6404 2.63087L21.0887 3.92583H22.1978L21.6404 2.63087Z" fill="#A0A5B6"></path><path d="M2.57085 2.63087L2.02536 3.92583H3.12072L2.57085 2.63087Z" fill="#A0A5B6"></path><path d="M15.2311 2.81431C15.1359 2.76224 14.9894 2.75558 14.8504 2.75558H13.8608V3.47662H14.8372C14.9919 3.47662 15.1222 3.4742 15.2343 3.41002C15.3376 3.35735 15.3996 3.24293 15.3996 3.10127C15.3996 2.96203 15.3351 2.86153 15.2311 2.81431Z" fill="#A0A5B6"></path><path d="M18.6732 8.40217C18.5755 8.34587 18.4314 8.34344 18.2899 8.34344H17.3004V9.07296H18.2767C18.4333 9.07296 18.5667 9.06811 18.675 9.00697C18.779 8.94522 18.841 8.83443 18.841 8.69458C18.8391 8.55473 18.7771 8.45423 18.6732 8.40217Z" fill="#A0A5B6"></path><path d="M14.762 8.34224H13.7148V9.16983H14.752C15.0607 9.16983 15.253 9.02211 15.253 8.74181C15.2524 8.45606 15.0526 8.34224 14.762 8.34224Z" fill="#A0A5B6"></path><path d="M29.5992 8.83019C29.5935 8.82474 29.5873 8.81869 29.5816 8.81445C29.7338 8.7188 29.8353 8.55292 29.8353 8.36403V7.67206C29.8353 7.3748 29.5866 7.13507 29.2798 7.13507H27.6702C27.1686 7.13507 26.7903 7.27794 26.5147 7.49346C26.4377 7.2852 26.2398 7.13507 25.9974 7.13507H24.3879C23.9451 7.13507 23.5963 7.24101 23.3307 7.41537C23.2343 7.24888 23.0608 7.13507 22.8529 7.13507H20.1724C19.9563 7.13507 19.7741 7.25675 19.682 7.4305C19.6438 7.40447 19.6157 7.3742 19.5756 7.35119C19.1867 7.1502 18.7733 7.13507 18.3474 7.13507H16.4918C16.2757 7.13507 16.0928 7.25796 16.0014 7.43292C15.7189 7.25554 15.3238 7.13507 14.762 7.13507H12.1955C12.0408 7.13507 11.8936 7.19561 11.7878 7.30579L11.1797 7.93965L10.596 7.31305C10.4914 7.19742 10.3417 7.13446 10.1833 7.13446H6.95292C6.64605 7.13446 6.39804 7.3748 6.39804 7.67145V10.9206C6.39804 11.2179 6.64667 11.4576 6.95292 11.4576H10.135C10.2897 11.4576 10.4369 11.3953 10.5421 11.2851L11.1553 10.644L11.7371 11.2766C11.8423 11.3917 11.9938 11.4564 12.1523 11.4564H13.7136C14.0211 11.4564 14.2691 11.2161 14.2691 10.9206V10.3661H14.7156C15.2586 10.3661 15.6513 10.2583 15.9369 10.0943V10.9206C15.9369 11.2167 16.1855 11.4564 16.4924 11.4564H17.2997C17.6072 11.4564 17.8552 11.2161 17.8552 10.9206V10.2692H18.1577C18.2316 10.2692 18.2836 10.2717 18.3211 10.2741C18.3236 10.3322 18.3236 10.4018 18.3224 10.4478V10.9206C18.3224 11.2167 18.5723 11.4564 18.8779 11.4564H19.6839C19.7741 11.4564 19.8555 11.4328 19.9294 11.3959C20.0046 11.4316 20.0854 11.4564 20.1743 11.4564H22.8554C22.9424 11.4564 23.0232 11.4328 23.0965 11.3983C23.1698 11.4328 23.2487 11.4564 23.3376 11.4564H24.9021C25.4 11.4564 25.8058 11.3384 26.1095 11.1301C26.1928 11.3214 26.3895 11.4564 26.6193 11.4564H28.1838C29.3217 11.4564 30 10.8722 30 9.89449C30 9.44165 29.8735 9.10444 29.5992 8.83019ZM14.7163 9.82911H13.7142V10.9194H12.1529L11.1634 9.84424L10.135 10.9194H6.95292V7.66964H10.1833L11.1728 8.73514L12.1949 7.66964H14.7614C15.3983 7.66964 16.1154 7.84218 16.1154 8.7418C16.1154 9.64325 15.419 9.83092 14.7163 9.82911ZM19.1585 9.41077C19.3363 9.47374 19.4823 9.58816 19.5499 9.68381C19.6645 9.84242 19.6795 9.99014 19.6833 10.2765V10.9206H18.8773V10.5138C18.8773 10.3189 18.8967 10.0289 18.7464 9.87754C18.6311 9.76191 18.4527 9.73466 18.1583 9.73466H17.3003V10.9206H16.493V7.67145H18.3487C18.7545 7.67145 19.0501 7.6878 19.315 7.82401C19.5681 7.97173 19.7278 8.17515 19.7278 8.54505C19.7278 9.06448 19.3689 9.32904 19.1585 9.41077ZM22.8541 8.34284H20.9728V8.93432H22.8078V9.59784H20.9728V10.2432L22.8541 10.2468V10.9206H20.1737V7.67145H22.8541V8.34284ZM24.9027 10.917H23.3383V10.219H24.8958C25.0474 10.219 25.1557 10.2008 25.2234 10.1385C25.2785 10.0888 25.3173 10.0144 25.3173 9.92597C25.3173 9.83153 25.276 9.75706 25.2196 9.71166C25.157 9.66202 25.0743 9.63962 24.9334 9.63962C24.1831 9.616 23.2418 9.66201 23.2418 8.63465C23.2418 8.16183 23.5474 7.66721 24.3904 7.66721H25.9999V8.35858H24.5263C24.3791 8.35858 24.2846 8.36464 24.2044 8.41791C24.1161 8.47119 24.0829 8.54929 24.0829 8.6522C24.0829 8.7751 24.1574 8.85683 24.2583 8.89437C24.3441 8.92282 24.4342 8.93129 24.5714 8.93129L25.0029 8.9434C25.4382 8.95491 25.7382 9.02755 25.9191 9.20494C26.077 9.36174 26.1603 9.56031 26.1603 9.89388C26.1603 10.5943 25.71 10.9206 24.9027 10.917ZM28.185 10.917H26.6206V10.219H28.1788C28.3303 10.219 28.4387 10.2008 28.5057 10.1385C28.5608 10.0888 28.5996 10.0144 28.5996 9.92597C28.5996 9.83153 28.5583 9.75706 28.5019 9.71166C28.4399 9.66202 28.3573 9.63962 28.2157 9.63962C27.4648 9.616 26.5241 9.66201 26.5241 8.63465C26.5241 8.16183 26.8298 7.66721 27.6727 7.66721H29.2823V8.35858H27.8093C27.6615 8.35858 27.5663 8.36464 27.4867 8.41791C27.3984 8.47119 27.3659 8.54929 27.3659 8.6522C27.3659 8.7751 27.441 8.85683 27.5406 8.89437C27.627 8.92282 27.7166 8.93129 27.8537 8.93129L28.2852 8.9434C28.7211 8.95491 29.0217 9.02755 29.2027 9.20494C29.3593 9.36174 29.4438 9.56031 29.4438 9.89388C29.4438 10.5943 28.9923 10.9206 28.185 10.917Z" fill="#A0A5B6"></path><path d="M27.0778 1.54236H26.2555C25.948 1.54236 25.7 1.7827 25.7 2.07875V2.41414L25.3186 1.80208C25.2171 1.64164 25.0374 1.54296 24.8438 1.54296H23.6195C23.3126 1.54296 23.0646 1.78331 23.0646 2.07935V2.53522L22.7696 1.86806C22.6826 1.67131 22.4822 1.54296 22.2604 1.54296H21.0567C20.9346 1.54296 20.8181 1.58171 20.7254 1.64951C20.6334 1.58232 20.5175 1.54296 20.3929 1.54296H19.6169C18.9568 1.54296 18.4683 1.69734 18.1088 1.99883C18.0675 1.74275 17.8477 1.54296 17.5709 1.54296H16.7505C16.5313 1.54296 16.3478 1.66828 16.2563 1.84506C16.2219 1.82084 16.1956 1.79178 16.1567 1.76999C15.7797 1.55931 15.3833 1.54296 14.9054 1.54296H13.0579C12.9539 1.54296 12.8631 1.57808 12.7792 1.6259C12.6972 1.57808 12.6051 1.54296 12.5011 1.54296H9.81817C9.70481 1.54296 9.60649 1.58353 9.51881 1.63922C9.4305 1.58353 9.33218 1.54296 9.21945 1.54296H7.88047C7.65876 1.54296 7.45773 1.67192 7.37067 1.87049L6.89345 2.95779L6.368 1.85475C6.27657 1.66465 6.07929 1.54296 5.86385 1.54296H4.55242C4.24554 1.54296 3.99754 1.78331 3.99754 2.07935V2.54612L3.6963 1.86685C3.60862 1.6701 3.40821 1.54236 3.18588 1.54236H1.99345C1.77112 1.54236 1.57071 1.6707 1.48303 1.86746L0.0450933 5.11666C-0.0288076 5.28314 -0.0106455 5.47203 0.0914379 5.62338C0.194148 5.77352 0.368253 5.86433 0.554884 5.86433H1.42792C1.65087 5.86433 1.85316 5.73356 1.93896 5.53378L2.10868 5.13906H3.03933L3.20655 5.53136C3.29172 5.73235 3.49464 5.86372 3.7201 5.86372H5.35406C5.66093 5.86372 5.90894 5.62338 5.90894 5.32734V5.31462L6.01415 5.54528C6.10309 5.73901 6.30224 5.86433 6.52144 5.86433L7.22726 5.86554C7.44771 5.86554 7.64561 5.74022 7.73454 5.54589L7.84101 5.31583V5.32915C7.84101 5.62519 8.08902 5.86493 8.39589 5.86493H9.21945C9.33218 5.86493 9.4305 5.82377 9.51881 5.76867C9.60649 5.82377 9.70481 5.86493 9.81817 5.86493H12.5011C12.6051 5.86493 12.6972 5.82982 12.7792 5.78199C12.8625 5.82982 12.9539 5.86493 13.0579 5.86493H13.8621C14.1689 5.86493 14.4169 5.62459 14.4169 5.32855V4.68319H14.7238C14.7933 4.68319 14.8428 4.685 14.8798 4.68743C14.8835 4.74252 14.8823 4.8079 14.8823 4.85149L14.881 4.92293L14.8841 5.33278C14.8866 5.62701 15.1353 5.86493 15.4396 5.86493H16.2501C16.3409 5.86493 16.4229 5.83769 16.4987 5.80016C16.5757 5.8383 16.6584 5.86493 16.7498 5.86493H17.5702C17.8395 5.86493 18.0525 5.67726 18.1045 5.43268C18.5598 5.80258 19.2011 5.86493 19.5581 5.86493H20.4994C20.7236 5.86493 20.9265 5.73174 21.011 5.52893L21.1745 5.13966H22.1001L22.2698 5.53438C22.3556 5.73356 22.5573 5.86433 22.7821 5.86433H24.4167C24.7236 5.86433 24.9716 5.62398 24.9716 5.32794V4.81516L25.4645 5.60522C25.5653 5.76565 25.7451 5.86433 25.9405 5.86433H27.0778C27.3847 5.86433 27.6327 5.62398 27.6327 5.32794V2.07875C27.6327 1.7827 27.3834 1.54236 27.0778 1.54236ZM9.21882 5.32734H8.39527L8.39213 2.78283L7.22726 5.32734H6.52144L5.35468 2.78041V5.32734H3.71947L3.41071 4.60267H1.73855L1.42666 5.32734H0.553632L1.99219 2.07814H3.18463L4.55179 5.1548V2.07814H5.86322L6.91474 4.28241L7.87984 2.07814H9.21882V5.32734ZM12.5005 2.75498H10.6204V3.3404H12.4561V4.00635H10.6204V4.65534H12.5005V5.32734H9.81754V2.07814H12.5005V2.75498ZM15.7177 3.81988C15.8937 3.88527 16.044 3.99908 16.1154 4.09352C16.2294 4.25517 16.2488 4.39925 16.2488 4.68924V5.32673H15.4384L15.4346 4.91687C15.4346 4.72193 15.4541 4.44103 15.3081 4.28423C15.191 4.17041 15.0119 4.14559 14.7226 4.14559H13.8614V5.32734H13.0573H13.0567V2.07875H14.9042C15.315 2.07875 15.6175 2.08904 15.8768 2.23433C16.1311 2.37963 16.2832 2.59152 16.2832 2.95416C16.2832 3.47178 15.9256 3.73997 15.7177 3.81988ZM17.5709 5.32734H16.7505V2.07814H17.5709V5.32734ZM27.0778 5.32734H25.9398L24.4161 2.88877V5.32734H22.7815L22.4684 4.60267H20.7987L20.4968 5.32734H19.5562C19.166 5.32734 18.6731 5.24379 18.3938 4.96833C18.1095 4.69227 17.9629 4.31813 17.9629 3.72786C17.9629 3.24596 18.0512 2.80523 18.3932 2.45652C18.6518 2.1974 19.0583 2.07814 19.6132 2.07814H20.3891V2.77435H19.6282C19.3357 2.77435 19.1698 2.81613 19.0107 2.96687C18.8735 3.10369 18.7802 3.3622 18.7802 3.70304C18.7802 4.05054 18.8516 4.30118 19.0019 4.46524C19.1266 4.59419 19.352 4.63294 19.5618 4.63294H19.9219L21.0567 2.07814H22.2604L23.6195 5.15116V2.07814H24.8438L26.2555 4.34114V2.07814H27.0778V5.32734ZM19.9081 3.31134L19.5593 4.09776C19.4823 4.09776 19.4303 4.08929 19.4015 4.08202C19.3746 4.03359 19.3376 3.92643 19.3376 3.70365C19.3376 3.47844 19.394 3.36159 19.4015 3.3513C19.4247 3.32951 19.4441 3.31074 19.6326 3.31074L19.9081 3.31134Z" fill="#A0A5B6"></path><path d="M11.6807 9.30119L12.9145 10.6258V8.02077L11.6807 9.30119Z" fill="#A0A5B6"></path><path d="M9.76808 8.34344H7.75522V8.93371H9.51819V9.59723H7.75522V10.2438H9.72925L10.6467 9.28908L9.76808 8.34344Z" fill="#A0A5B6"></path></svg>
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
