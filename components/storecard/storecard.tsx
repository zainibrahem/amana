import React, { useState,useEffect } from 'react';
import { useAppState, useAppDispatch } from '../../contexts/app/app.provider';
import Slider from '../../components/slider/slider';
import FullSearchBar from '../../components/FullSearch/fullsearch';
import Banners from '../../components/banners/banners';
import Catgory from '../../components/category/category';
import Categories from '../../components/categories/categories';
import CategoryBannerSlider from '../../components/categoryBannerSlider/categoryBannerSlider';
import Card1 from '../../components/card1/card1';
import Brands1 from '../../components/brands1/brands1';
import Deal from '../../components/deal/deal';
import Specials from '../../components/specials/specials';
import Cat from '../../components/cat/cat';
import CatProducts from '../../components/catProducts/carProducts';
import Offers from '../../components/offers/offers';
import Nav from '../../components/nav/nav';
import { Waypoint } from 'react-waypoint';
import Proposals from '../../components/proposals/proposals';
import NewProposals from '../../components/newProposals/newProposals';
import { useRouter } from 'next/router'
import { idText } from 'typescript';
import ProductCard from '../../components/productCard/productCard';

export default function Offer(props) {
    const Route = useAppState('Route');
    return (
        <div className="flex flex-col justify-between bg-white w-full items-center">
            <div className="w-full relative">
                <img src={`${props.data?props.data.cover_image:""}`} alt="" />
                {/* <img src={`${Route}/images/brandlogo.png`} className="absolute w-4/12 left-1/2 top-full transform -translate-y-1/2 -translate-x-1/2" alt="" /> */}
                <svg className="absolute w-4/12 left-1/2 top-full transform -translate-y-1/2 -translate-x-1/2" xmlns="http://www.w3.org/2000/svg"  width="124.336" height="133.429" viewBox="0 0 124.336 133.429">
                    <defs>
                        <filter id="asset-2" x="0" y="0" width="120.195" height="133.429" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" />
                        <feGaussianBlur stdDeviation="3" result="blur"/>
                        <feFlood flood-opacity="0.161"/>
                        <feComposite operator="in" in2="blur"/>
                        <feComposite in="SourceGraphic"/>
                        </filter>
                        <pattern id="pattern" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" viewBox="0 0 211 131">
                        <image width="211" height="131" xlinkHref={`${props.data.image}`}/>
                        </pattern>
                        <filter id="FontAwsome_certificate_" x="74.262" y="72.844" width="50.074" height="50.075" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" />
                        <feGaussianBlur stdDeviation="3" result="blur-2"/>
                        <feFlood flood-opacity="0.161"/>
                        <feComposite operator="in" in2="blur-2"/>
                        <feComposite in="SourceGraphic"/>
                        </filter>
                    </defs>
                    <g id="Group_5546" data-name="Group 5546" transform="translate(-738 -370.55)">
                        <g transform="matrix(1, 0, 0, 1, 738, 370.55)" filter="url(#asset-2)">
                        <path id="asset-2-2" data-name="asset-2" d="M292.3,585.223,249.525,560.53a8.326,8.326,0,0,0-8.326,0l-42.771,24.694a8.327,8.327,0,0,0-4.163,7.211v49.388a8.327,8.327,0,0,0,4.163,7.211L241.2,673.727a8.326,8.326,0,0,0,8.326,0L292.3,649.033a8.327,8.327,0,0,0,4.163-7.211V592.434A8.327,8.327,0,0,0,292.3,585.223Z" transform="translate(-185.26 -553.41)" fill="#fff"/>
                        </g>
                        <path id="_01" data-name="01" d="M266.611,578.461l-31.565-18.224a6.144,6.144,0,0,0-6.145,0l-31.565,18.224a6.145,6.145,0,0,0-3.072,5.322v36.448a6.145,6.145,0,0,0,3.072,5.322L228.9,643.777a6.145,6.145,0,0,0,6.145,0l31.565-18.224a6.145,6.145,0,0,0,3.072-5.322V583.783A6.145,6.145,0,0,0,266.611,578.461Z" transform="translate(566.124 -167.743)" stroke="rgba(112,112,112,0.27)" stroke-width="1" fill="url(#pattern)"/>
                        <path id="Subtraction_8" data-name="Subtraction 8" d="M45.092,101.924a7.352,7.352,0,0,1-3.674-.985L3.674,79.135A7.375,7.375,0,0,1,0,72.767V29.157A7.375,7.375,0,0,1,3.674,22.79L41.418.985a7.344,7.344,0,0,1,7.348,0L86.51,22.79a7.375,7.375,0,0,1,3.674,6.367v43.61a7.375,7.375,0,0,1-3.674,6.368l-37.744,21.8A7.352,7.352,0,0,1,45.092,101.924Zm0-97.711a6.748,6.748,0,0,0-3.37.9L7.1,25.119a6.763,6.763,0,0,0-3.37,5.841v40A6.765,6.765,0,0,0,7.1,76.805l34.623,20a6.735,6.735,0,0,0,6.741,0l34.623-20a6.765,6.765,0,0,0,3.37-5.841v-40a6.763,6.763,0,0,0-3.37-5.841l-34.623-20A6.748,6.748,0,0,0,45.092,4.214Z" transform="translate(753.005 383.301)" fill="#ffbc00" stroke="rgba(0,0,0,0)" stroke-miterlimit="10" stroke-width="1"/>
                        <g id="Group_5462" data-name="Group 5462" transform="translate(823.261 451.394)">
                        <g id="Group_5461" data-name="Group 5461" transform="translate(0 0)">
                            <g transform="matrix(1, 0, 0, 1, -85.26, -80.84)" filter="url(#FontAwsome_certificate_)">
                            <g id="FontAwsome_certificate_2" data-name="FontAwsome (certificate)" transform="translate(85.26 80.84)" fill="#a38a2a">
                                <path d="M 10.62668991088867 29.07494735717773 C 9.558152198791504 29.07494735717773 8.639192581176758 28.3560676574707 8.388864517211914 27.32570266723633 L 7.768105983734131 24.89177703857422 L 5.35759973526001 25.57871627807617 C 5.149589538574219 25.6369571685791 4.940549850463867 25.66584587097168 4.731799602508545 25.66584587097168 C 4.014639854431152 25.66584587097168 3.322899580001831 25.31838607788086 2.881389617919922 24.73637771606445 C 2.439699649810791 24.15414619445801 2.298529624938965 23.41940689086914 2.494069576263428 22.72055625915527 L 3.182214736938477 20.30416870117188 L 0.749345064163208 19.68323135375977 C -0.06250699609518051 19.48589324951172 -0.7018359303474426 18.85782051086426 -0.9202303290367126 18.04221725463867 C -1.138660907745361 17.22649574279785 -0.8966317772865295 16.36079406738281 -0.288662850856781 15.78067493438721 L 1.497240662574768 14.03286838531494 L -0.2886379063129425 12.28504371643066 C -0.8966986536979675 11.70492362976074 -1.138644218444824 10.83921813964844 -0.9201703071594238 10.02336692810059 C -0.7017893195152283 9.207873344421387 -0.06254363059997559 8.579896926879883 0.7492673993110657 8.382546424865723 L 3.182265520095825 7.761575698852539 L 2.495379686355591 5.349627017974854 C 2.298569679260254 4.646296977996826 2.43973970413208 3.911516904830933 2.881439685821533 3.329266786575317 C 3.322909593582153 2.747306823730469 4.014619827270508 2.399876832962036 4.731759548187256 2.399876832962036 C 4.940549850463867 2.399876832962036 5.149629592895508 2.428776741027832 5.353199481964111 2.485766887664795 L 7.768213748931885 3.173974752426147 L 8.388980865478516 0.7400159239768982 C 8.637995719909668 -0.2847036123275757 9.563382148742676 -0.9995532035827637 10.64248943328857 -0.9995532035827637 C 11.27493095397949 -0.9995532035827637 11.86046409606934 -0.7499653697013855 12.29207801818848 -0.296640008687973 L 14.03771018981934 1.501453876495361 L 15.78338623046875 -0.2966844737529755 C 16.21549797058105 -0.7505457997322083 16.80030059814453 -1.00044322013855 17.43088912963867 -1.00044322013855 C 18.51121711730957 -1.00044322013855 19.43756103515625 -0.2850609719753265 19.68658256530762 0.7403278946876526 L 20.30725288391113 3.173913240432739 L 22.71776008605957 2.486966848373413 C 22.9257698059082 2.4287269115448 23.13480949401855 2.399836778640747 23.34355926513672 2.399836778640747 C 24.06070899963379 2.399836778640747 24.75246047973633 2.747306823730469 25.1939697265625 3.329306840896606 C 25.63566017150879 3.911536693572998 25.77682876586914 4.646276950836182 25.581298828125 5.345136642456055 L 24.89315414428711 7.761522769927979 L 27.32661247253418 8.382603645324707 C 28.13817977905273 8.580105781555176 28.77724838256836 9.208084106445313 28.99559020996094 10.02347660064697 C 29.21397972106934 10.83904838562012 28.97215270996094 11.70451259613037 28.36442947387695 12.28462982177734 L 26.5781135559082 14.03287696838379 L 28.3643970489502 15.78108978271484 C 28.97209930419922 16.36120796203613 29.21389007568359 17.22670555114746 28.9954891204834 18.04233741760254 C 28.77716827392578 18.85765075683594 28.13811302185059 19.48557662963867 27.3265552520752 19.68307876586914 L 24.89309883117676 20.30416679382324 L 25.57999038696289 22.71610641479492 C 25.77680969238281 23.41949653625488 25.63559913635254 24.15432739257813 25.19381904602051 24.73660659790039 C 24.75236320495605 25.31848526000977 24.06071281433105 25.66586685180664 23.34369659423828 25.66586685180664 C 23.34360885620117 25.66586685180664 23.34356689453125 25.66586685180664 23.34347915649414 25.66586685180664 C 23.13467979431152 25.66584587097168 22.92564010620117 25.63694763183594 22.72214889526367 25.57997703552246 L 20.30720329284668 24.89177513122559 L 19.68659591674805 27.32510757446289 C 19.43682670593262 28.35417366027832 18.5120906829834 29.07219696044922 17.43488883972168 29.07219696044922 C 16.79919242858887 29.07219696044922 16.2127571105957 28.8196964263916 15.78181838989258 28.36086654663086 L 14.03769397735596 26.57751083374023 L 12.29043960571289 28.36398696899414 C 11.85312557220459 28.82252311706543 11.26265144348145 29.07494735717773 10.62668991088867 29.07494735717773 Z" stroke="none"/>
                                <path d="M 10.62668800354004 28.0749454498291 C 10.96654224395752 28.0749454498291 11.30985355377197 27.94544410705566 11.57063961029053 27.66976737976074 L 14.03770923614502 25.14731597900391 L 16.50466918945313 27.66976737976074 C 16.75969696044922 27.94495391845703 17.09817123413086 28.07220077514648 17.43489074707031 28.07220077514648 C 18.00316047668457 28.07220077514648 18.56650733947754 27.70987129211426 18.71587944030762 27.08478736877441 L 19.59235000610352 23.64824676513672 L 22.99176979064941 24.61700630187988 C 23.11050224304199 24.6502513885498 23.22853660583496 24.66585731506348 23.34358024597168 24.66586875915527 C 24.17617988586426 24.66595268249512 24.85863304138184 23.84920883178711 24.61822891235352 22.9900074005127 L 23.64978981018066 19.58943748474121 L 27.08518028259277 18.71262741088867 C 28.07148933410645 18.47673606872559 28.42128944396973 17.21196746826172 27.6699390411377 16.50065612792969 L 25.1484203338623 14.03287696838379 L 27.67000007629395 11.56503677368164 C 28.42166900634766 10.85344696044922 28.07115936279297 9.588847160339355 27.08523941040039 9.353056907653809 L 23.64984893798828 8.476256370544434 L 24.6182804107666 5.075686931610107 C 24.85871887207031 4.216342926025391 24.17597770690918 3.399837255477905 23.34355545043945 3.399837255477905 C 23.22847175598145 3.399837255477905 23.11059379577637 3.415429592132568 22.99182891845703 3.448676824569702 L 19.59239959716797 4.417446613311768 L 18.71592903137207 0.9808968305587769 C 18.56924819946289 0.3671605885028839 18.00385284423828 -0.0004433102440088987 17.43088531494141 -0.0004433102440088987 C 17.09781265258789 -0.0004433102440088987 16.76223754882813 0.1237117648124695 16.50471878051758 0.3959268033504486 L 14.03770923614502 2.937076807022095 L 11.57074928283691 0.3959768116474152 C 11.31459045410156 0.1251964420080185 10.97745513916016 0.0004441507044248283 10.64248847961426 0.0004441507044248283 C 10.0718297958374 0.0004441507044248283 9.50736141204834 0.3623926937580109 9.359539985656738 0.9809567928314209 L 8.48306941986084 4.417496681213379 L 5.083589553833008 3.448736906051636 C 4.964850425720215 3.415493011474609 4.846809387207031 3.399874925613403 4.731762409210205 3.399874925613403 C 3.899133920669556 3.399874925613403 3.21672797203064 4.216535091400146 3.457139730453491 5.075736999511719 L 4.425569534301758 8.476306915283203 L 0.9901796579360962 9.353116989135742 C 0.003809672314673662 9.588956832885742 -0.345980316400528 10.8537769317627 0.4053696691989899 11.56503677368164 L 2.926939725875854 14.03287696838379 L 0.4053696691989899 16.50065612792969 C -0.3463103175163269 17.21224594116211 0.004199672024697065 18.47684669494629 0.9901196956634521 18.71262741088867 L 4.425519466400146 19.58943748474121 L 3.457079648971558 22.9900074005127 C 3.216640949249268 23.84934234619141 3.899374485015869 24.66584968566895 4.731795310974121 24.66584968566895 C 4.846879482269287 24.66584968566895 4.964765071868896 24.65025520324707 5.083529472351074 24.61700630187988 L 8.482959747314453 23.64824676513672 L 9.359429359436035 27.08478736877441 C 9.511174201965332 27.71977043151855 10.06408405303955 28.0749454498291 10.62668800354004 28.0749454498291 M 10.62668991088867 30.07494735717773 C 9.096633911132813 30.07494735717773 7.779997825622559 29.04473114013672 7.418477058410645 27.56732177734375 L 7.053249359130859 26.13530540466309 L 5.631659507751465 26.54042625427246 L 5.627209663391113 26.54169654846191 L 5.622749805450439 26.54294586181641 C 5.331469535827637 26.62449645996094 5.031709671020508 26.66584587097168 4.731799602508545 26.66584587097168 C 3.703699588775635 26.66584587097168 2.714129686355591 26.17048645019531 2.084689617156982 25.34075736999512 C 1.452269673347473 24.50710678100586 1.250479698181152 23.45387649536133 1.531049728393555 22.45110702514648 L 1.532299637794495 22.44665718078613 L 1.533559679985046 22.44221687316895 L 1.938902974128723 21.01889801025391 L 0.5065879225730896 20.6533317565918 C -0.6577223539352417 20.36777305603027 -1.573679447174072 19.46796798706055 -1.886200308799744 18.30087661743164 C -2.198609113693237 17.13418388366699 -1.853321075439453 15.8955774307251 -0.9849959015846252 15.06293392181396 L 0.06753656268119812 14.0328540802002 L -0.9844579100608826 13.00327587127686 C -1.853155136108398 12.17062854766846 -2.198646306991577 10.93169498443604 -1.886130332946777 9.764686584472656 C -1.573609471321106 8.597644805908203 -0.6578187942504883 7.697950839996338 0.5065313577651978 7.412441730499268 L 1.938958764076233 7.046844959259033 L 1.53361964225769 5.623526573181152 L 1.532359719276428 5.619086742401123 L 1.531119704246521 5.614646911621094 C 1.250519633293152 4.611846923828125 1.452309727668762 3.558566808700562 2.084739685058594 2.724886894226074 C 2.714139699935913 1.895206809043884 3.70367956161499 1.399876832962036 4.731759548187256 1.399876832962036 C 5.031649589538574 1.399876832962036 5.331419467926025 1.441226840019226 5.622739791870117 1.52277684211731 L 5.627229690551758 1.524036765098572 L 5.631709575653076 1.525316834449768 L 7.053356647491455 1.930447816848755 L 7.418547630310059 0.4985742270946503 C 7.77879524230957 -0.9731898903846741 9.101885795593262 -1.999553203582764 10.64248943328857 -1.999553203582764 C 11.55003070831299 -1.999553203582764 12.39129066467285 -1.640995502471924 13.01318645477295 -0.989472508430481 L 14.03770542144775 0.06583622843027115 L 15.06278324127197 -0.9900478720664978 C 15.68512535095215 -1.641734957695007 16.52547645568848 -2.00044322013855 17.43088912963867 -2.00044322013855 C 18.97247505187988 -2.00044322013855 20.29635429382324 -0.9738810062408447 20.6568431854248 0.4982053339481354 L 21.02210998535156 1.930378913879395 L 22.44368934631348 1.525256752967834 L 22.44814872741699 1.52398681640625 L 22.45261001586914 1.522736787796021 C 22.74388885498047 1.441186785697937 23.04364967346191 1.399836778640747 23.34355926513672 1.399836778640747 C 24.37164878845215 1.399836778640747 25.36122894287109 1.895196795463562 25.99066925048828 2.724926710128784 C 26.62307929992676 3.558576822280884 26.82488059997559 4.611816883087158 26.54430961608887 5.61458683013916 L 26.54306983947754 5.619036674499512 L 26.54179954528809 5.623476982116699 L 26.13646125793457 7.046789646148682 L 27.56829071044922 7.412229061126709 C 28.73289680480957 7.697624683380127 29.64899063110352 8.59752082824707 29.9615592956543 9.764826774597168 C 30.27408409118652 10.93194007873535 29.9284610748291 12.17099380493164 29.05944061279297 13.00365352630615 L 28.0078067779541 14.03287601470947 L 29.05991744995117 15.06256484985352 C 29.92856597900391 15.89522171020508 30.27393531799316 17.1340389251709 29.96145057678223 18.30099678039551 C 29.64897727966309 19.46792793273926 28.73318862915039 20.36763000488281 27.56900978088379 20.65325546264648 L 26.13640594482422 21.01889801025391 L 26.54174995422363 22.44221687316895 L 26.54300880432129 22.44665718078613 L 26.54426002502441 22.45111656188965 C 26.8248405456543 23.45391654968262 26.6230297088623 24.50720596313477 25.99057960510254 25.34089660644531 C 25.3612003326416 26.17054748535156 24.37171936035156 26.66586685180664 23.34371948242188 26.66586685180664 C 23.04351997375488 26.66583633422852 22.74380874633789 26.62448692321777 22.45257949829102 26.5429573059082 L 22.44809913635254 26.54169654846191 L 22.44363975524902 26.54042625427246 L 21.02206039428711 26.13530731201172 L 20.65669822692871 27.56784820556641 C 20.29533767700195 29.04337501525879 18.97321319580078 30.07219696044922 17.43488883972168 30.07219696044922 C 16.52340507507324 30.07219696044922 15.68144989013672 29.71063804626465 15.06024742126465 29.05326652526855 L 14.03767776489258 28.0076961517334 L 13.00975036621094 29.0586986541748 C 12.38233947753906 29.71417427062988 11.53682422637939 30.07494735717773 10.62668991088867 30.07494735717773 Z" stroke="none" fill="#fff"/>
                            </g>
                            </g>
                            <path id="Subtraction_1" data-name="Subtraction 1" d="M3.58,18.128l0,0,.289-1.017-3-.765a1.142,1.142,0,0,1-.511-1.932l2.2-2.155L.354,10.1A1.142,1.142,0,0,1,.865,8.169l3-.765L3.021,4.433a1.13,1.13,0,0,1,.192-1,1.168,1.168,0,0,1,.922-.467,1.142,1.142,0,0,1,.306.042l2.969.847.766-3A1.136,1.136,0,0,1,9.3,0a1.106,1.106,0,0,1,.811.345l2.154,2.219L14.416.345A1.1,1.1,0,0,1,15.224,0a1.137,1.137,0,0,1,1.123.857l.765,3,2.969-.847a1.146,1.146,0,0,1,.307-.042,1.168,1.168,0,0,1,.922.467,1.132,1.132,0,0,1,.192,1l-.378,1.329a28.442,28.442,0,0,0-7.944,3.7A46.437,46.437,0,0,0,3.58,18.128Z" transform="translate(1.776 1.777)" fill="#ccad34" stroke="rgba(0,0,0,0)" stroke-miterlimit="10" stroke-width="1" opacity="0.348"/>
                        </g>
                        <path id="Path_12001" data-name="Path 12001" d="M856.512,438.928c1.212,1.439,2.4,2.845,3.583,4.252.712.845,1.371.813,1.988-.108q2.6-3.877,5.193-7.758c.1-.146.186-.3.294-.473l-1.666-1.115-4.923,7.359-2.932-3.465Z" transform="translate(-849.014 -424.833)" fill="#fff" opacity="0.998"/>
                        </g>
                    </g>
                    </svg>

            </div>
            <div className="w-full relative mt-10 flex  flex-col justify-between h-32 items-center pb-4">
                <span className="text-md text-center w-full">{props.data?props.data.name:""}</span>
                <span className="text-center w-full text-xs" dir="rtl">عضو منذ : {props.data?props.data.member_since:""} </span>
                <div className="flex justify-between items-center w-2/3 mt-3">
                    <div className="rounded-full bg-white w-8 h-6 shadow flex justify-center items-center">
                        <img className="w-3 " src="./images/face.png" alt="" />
                    </div>
                    <div className="rounded-full bg-white w-8 h-6 shadow flex justify-center items-center">
                        <img className="w-4" src="./images/twi.png" alt="" />
                    </div>
                    <div className="rounded-full bg-white w-8 h-6 shadow flex justify-center items-center">
                        <img className="w-4" src="./images/insta.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}