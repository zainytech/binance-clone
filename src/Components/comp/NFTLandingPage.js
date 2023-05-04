import React from 'react';
import "./NFTLandingPage.css";

import { Link } from 'react-router-dom';

import nftmain from "../assets/figma/nft-main.png";
import Rectangle11 from "../assets/figma/Rectangle 11.png";
import nftbslider1 from "../assets/figma/nft-b-slider-1.png";
import nftbslider2 from "../assets/figma/nft-b-slider-2.png";
import nftbslider3 from "../assets/figma/nft-b-slider-3.png";
import bluetick from "../assets/figma/blue-tick.png";
import Rectangle12 from "../assets/figma/Rectangle 12.png";
import Rectangle13 from "../assets/figma/Rectangle 13.png";
import nftcimg1 from "../assets/figma/nft-c-img1.png";
import nftcimg2 from "../assets/figma/nft-c-img2.png";
import nftcimg3 from "../assets/figma/nft-c-img3.png";
import nftcimg4 from "../assets/figma/nft-c-img4.png";
import nftcimg5 from "../assets/figma/nft-c-img5.png";
import nftcimg6 from "../assets/figma/nft-c-img6.png";
import nftcimg7 from "../assets/figma/nft-c-img7.png";
import nftcimg8 from "../assets/figma/nft-c-img8.png";
import CombinedShape from "../assets/figma/Combined-Shape.png";
import CombinedShape2 from "../assets/figma/Combined-Shape2.png";
import CombinedShape3 from "../assets/figma/Combined-Shape3.png";
import nftf1 from "../assets/figma/nft-f-1.png";
import nftf2 from "../assets/figma/nft-f-2.png";
import nftf3 from "../assets/figma/nft-f-3.png";
import Ellipse29 from "../assets/figma/Ellipse 29.png";
import Ellipse292 from "../assets/figma/Ellipse 29-2.png";
import nftdsliderimg1a from "../assets/figma/nft-d-slider-img1a.png";
import nftdsliderimg1b from "../assets/figma/nft-d-slider-img1b.png";
import nftdsliderimg1c from "../assets/figma/nft-d-slider-img1c.png";
import nftdsliderimg2a from "../assets/figma/nft-d-slider-img2a.png";
import nftdsliderimg2b from "../assets/figma/nft-d-slider-img2b.png";
import nftdsliderimg2c from "../assets/figma/nft-d-slider-img2c.png";
import nftdsliderimg3a from "../assets/figma/nft-d-slider-img3a.png";
import nftdsliderimg3b from "../assets/figma/nft-d-slider-img3b.png";
import nftdsliderimg3c from "../assets/figma/nft-d-slider-img3c.png";
import CollectorLogoETH from "../assets/figma/Collector Logo -ETH.png";




import  { useState } from 'react';
// swiper slider//////////////
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
import SwiperCore, { Autoplay } from "swiper";
import 'swiper/css/autoplay';


function NFTLandingPage(){
    const [showTextnft1, setShowTextnft1] = useState('');
    const onClicknft1 = () => {
        setShowTextnft1(!showTextnft1)
        setShowTextnft2(false)
        setShowTextnft3(false)
        setShowTextnft4(false)
        setShowTextnft5(false)
        setShowTextnft6(false)
        setShowTextnft7(false)
        setShowTextnft8(false)
    
    };

    const [showTextnft2, setShowTextnft2] = useState('');
    const onClicknft2 = () => {
        setShowTextnft2(!showTextnft2)
        setShowTextnft1(false)
        setShowTextnft3(false)
        setShowTextnft4(false)
        setShowTextnft5(false)
        setShowTextnft6(false)
        setShowTextnft7(false)
        setShowTextnft8(false)
    
    };
    
    const [showTextnft3, setShowTextnft3] = useState('');
    const onClicknft3 = () => {
        setShowTextnft3(!showTextnft3)
        setShowTextnft1(false)
        setShowTextnft2(false)
        setShowTextnft4(false)
        setShowTextnft5(false)
        setShowTextnft6(false)
        setShowTextnft7(false)
        setShowTextnft8(false)
    };
    
    const [showTextnft4, setShowTextnft4] = useState('');
    const onClicknft4 = () => {
        setShowTextnft4(!showTextnft4)
        setShowTextnft1(false)
        setShowTextnft2(false)
        setShowTextnft3(false)
        setShowTextnft5(false)
        setShowTextnft6(false)
        setShowTextnft7(false)
        setShowTextnft8(false)
    };
    
    const [showTextnft5, setShowTextnft5] = useState('');
    const onClicknft5 = () => {
        setShowTextnft5(!showTextnft5)
        setShowTextnft1(false)
        setShowTextnft2(false)
        setShowTextnft3(false)
        setShowTextnft4(false)
        setShowTextnft6(false)
        setShowTextnft7(false)
        setShowTextnft8(false)
    };
    
    const [showTextnft6, setShowTextnft6] = useState('');
    const onClicknft6 = () => {
        setShowTextnft6(!showTextnft6)
        setShowTextnft1(false)
        setShowTextnft2(false)
        setShowTextnft3(false)
        setShowTextnft4(false)
        setShowTextnft5(false)
        setShowTextnft7(false)
        setShowTextnft8(false)
    };
    
    const [showTextnft7, setShowTextnft7] = useState('');
    const onClicknft7 = () => {
        setShowTextnft7(!showTextnft7)
        setShowTextnft1(false)
        setShowTextnft2(false)
        setShowTextnft3(false)
        setShowTextnft4(false)
        setShowTextnft5(false)
        setShowTextnft6(false)
        setShowTextnft8(false)
    };
    
    const [showTextnft8, setShowTextnft8] = useState('');
    const onClicknft8 = () => {
        setShowTextnft8(!showTextnft8)
        setShowTextnft1(false)
        setShowTextnft2(false)
        setShowTextnft3(false)
        setShowTextnft4(false)
        setShowTextnft5(false)
        setShowTextnft6(false)
        setShowTextnft7(false)
    };
    return(
        <>
        
<div class="nft-main">

    <div class="nft-main-container">
        <div class="nft-a">

            <div class="nft-a1">
                <div class="nft-a1-div1">
                <p>Discover collect, & sell
                    <span class="nft-a1-txt-active">Extraordinary</span>
                NFTs</p>
                </div>

<div class="nft-a1-div2">
    <p>The leading NFT Marketplace on Ethereum</p>
    <p>Home to the next generation of digital creators.</p>
    <p>Discover the best NFT collections.</p>
</div>
<div class="nft-a1-div3">
    <button class="nft-a1-div3-btn-active">Explore</button>
    <button class="nft-a1-div3-btn-nonactive">Create</button>
</div>
<div class="nft-a1-div4">
    <div class="nft-a1-div4-item1">
        <p>432K+</p>
        <span class="nft-a1-div4-item-line">Collections</span>
    </div>
    <div class="nft-a1-div4-item1">
        <p>200K+</p>
        <span class="nft-a1-div4-item-line">Artists</span>
    </div>
    <div class="nft-a1-div4-item1">
        <p>10K+</p>
        <span class="nft-a1-div4-item-line">Community</span>
    </div>
</div>
            </div>
            
            <div class="nft-a2-div1">
            <div class="nft-a2-div2"></div>
           
            </div>
            <div class="nft-a2-div3">
                <div class='nft-a2-div3-txtdiv'>
                <span class="nft-a2-img-div1-line1">Auction</span>
                <span class="nft-a2-img-div1-line2">End In</span>
                </div>
            </div>

            <div class="nft-a2-div4">
                <div class='nft-a2-div4-txtdiv'>
                    <div class="nft-a2-div4-txtdiv-1">
                        <span class="nft-a2-img-div1-line1">17</span>
                        <span class="nft-a2-img-div1-line2">Hours</span>
                    </div>
                    <div><span class="nft-a2-div4-txtdiv-2">:</span></div>
                    <div class="nft-a2-div3-txtdiv-1">
                        <span class="nft-a2-img-div1-line1">56</span>
                        <span class="nft-a2-img-div1-line2">Minutes</span>
                    </div>
                    <div><span class="nft-a2-div4-txtdiv-2">:</span></div>
                    <div class="nft-a2-div3-txtdiv-1">
                        <span class="nft-a2-img-div1-line1">03</span>
                        <span class="nft-a2-img-div1-line2">Seconds</span>
                    </div>

                </div>
            </div>
           
            
            
            <div class="nft-a2">
                <div class="nft-a2-main-img">
                
                <div class="nft-a2-img-div1">
                    <span class="nft-a2-img-div1-line1">BID NOW!</span>
                    <span class="nft-a2-img-div1-line2">Latest Collection</span>
                </div>
                
                <div class="nft-a2-img-div2">
                    <div class="nft-a2-img-div2a">
                        <img class="nft-a2-img-div2a-img1" src={nftbslider1}></img>
                        <img class="nft-a2-img-div2a-img2" src={bluetick}></img>
                    </div>
                    <div class="nft-a2-img-div2b">
                        <span class="nft-a2-img-div2b-line1">HAPE #6959</span>
                        <span class="nft-a2-img-div2b-line2">HAPES PRIME</span>
                    </div>
                </div>

                <div class="nft-a2-img-div3">
                    <div class="nft-a2-img-div3a">
                        <span class="nft-a2-img-div3-line1">5.758 ETH</span>
                        <span class="nft-a2-img-div3-line2">Latest Bid</span>
                    </div>
                    <div class="nft-a2-img-div3b">
                        <span class="nft-a2-img-div3-line1">5.758 ETH</span>
                        <span class="nft-a2-img-div3-line2 txt-active-green">Latest Bid</span>
                    </div>
                </div>

                    <img class="nft-main-img" src={nftmain}></img>
                     
                </div>
                

            </div>
        </div>

    
    <div class="nft-b">
        <p>Trending NFTs</p>
    </div>
    <div class="nft-b-slider">
    <Swiper 
        slidesPerView={1}
        spaceBetween={30}
        // slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            
            600: {
              slidesPerView: 2,
             
            },
            900: {
                slidesPerView: 3,
               
              }
            
          }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="nftSwiper"
      >
        <SwiperSlide style={{background:'transparent'}}>
        <div class="nft-b-slider-1">
            <div class="nft-b-slider-1-div1">
                <img src={Rectangle13}></img>
            </div>
            <div class="nft-b-slider-1-div2">
                <div class="nft-b-slider-1-div2a">
                    <img src={nftbslider2}></img>
                </div>
                <div class="nft-b-slider-1-div2b">
                    <span class="nft-b-slider-1-div2b-line1">CryptoPunk 3D #13</span>
                    <span class="nft-b-slider-1-div2b-line2">3D cryptopunk</span>
                </div>
                <div class="nft-b-slider-1-div2c">
                    <img src={CollectorLogoETH}></img>
                </div>
            </div>
            <div class="nft-b-slider-1-div3">
                <div class="nft-b-slider-1-div3a">
                    <span class="nft-b-slider-1-div3a-line1">9.61 ETH</span>
                    <span class="nft-b-slider-1-div3a-line2">latest Bid</span>
                </div>
                <div class="nft-b-slider-1-div3b">
                    <span class="nft-b-slider-1-div3a-line1">4.12 ETH</span>
                    <span class="nft-b-slider-1-div3a-line2"> from</span>
                </div>
                <div class="nft-b-slider-1-div3c">
                    <span class="nft-b-slider-1-div3a-line1">$103,025</span>
                    <span class="nft-b-slider-1-div3a-line2 txt-active-red">-2.25%</span>
                </div>
            </div>
            <div class="nft-b-slider-1-div4">
                <button>Collect Now</button>
            </div>
            
        </div>
        </SwiperSlide>
        <SwiperSlide style={{background:'transparent'}}>
        <div class="nft-b-slider-1">
            <div class="nft-b-slider-1-div1">
                <img src={Rectangle11}></img>
            </div>
            <div class="nft-b-slider-1-div2">
                <div class="nft-b-slider-1-div2a">
                    <img src={nftbslider1}></img>
                </div>
                <div class="nft-b-slider-1-div2b">
                    <span class="nft-b-slider-1-div2b-line1">HAPE #8064</span>
                    <span class="nft-b-slider-1-div2b-line2">HAPE PRIME</span>
                </div>
                <div class="nft-b-slider-1-div2c">
                    <img src={CollectorLogoETH}></img>
                </div>
            </div>
            <div class="nft-b-slider-1-div3">
                <div class="nft-b-slider-1-div3a">
                    <span class="nft-b-slider-1-div3a-line1">15.8 ETH</span>
                    <span class="nft-b-slider-1-div3a-line2">latest Bid</span>
                </div>
                <div class="nft-b-slider-1-div3b">
                    <span class="nft-b-slider-1-div3a-line1">9.45 ETH</span>
                    <span class="nft-b-slider-1-div3a-line2"> from</span>
                </div>
                <div class="nft-b-slider-1-div3c">
                    <span class="nft-b-slider-1-div3a-line1">$180,345</span>
                    <span class="nft-b-slider-1-div3a-line2 txt-active-green">+12.45%</span>
                </div>
            </div>
            <div class="nft-b-slider-1-div4">
                <button>Collect Now</button>
            </div>
            
        </div>
        </SwiperSlide>
        <SwiperSlide style={{background:'transparent'}} >
        <div class="nft-b-slider-1">
            <div class="nft-b-slider-1-div1">
                <img src={Rectangle12}></img>
            </div>
            <div class="nft-b-slider-1-div2">
                <div class="nft-b-slider-1-div2a">
                    <img src={nftbslider3}></img>
                </div>
                <div class="nft-b-slider-1-div2b">
                    <span class="nft-b-slider-1-div2b-line1">InvisibleFriend #54</span>
                    <span class="nft-b-slider-1-div2b-line2">INVISIBLE_FRIEND.CO</span>
                </div>
                <div class="nft-b-slider-1-div2c">
                    <img src={CollectorLogoETH}></img>
                </div>
            </div>
            <div class="nft-b-slider-1-div3">
                <div class="nft-b-slider-1-div3a">
                    <span class="nft-b-slider-1-div3a-line1">6.73 ETH</span>
                    <span class="nft-b-slider-1-div3a-line2">latest Bid</span>
                </div>
                <div class="nft-b-slider-1-div3b">
                    <span class="nft-b-slider-1-div3a-line1">1.55 ETH</span>
                    <span class="nft-b-slider-1-div3a-line2"> from</span>
                </div>
                <div class="nft-b-slider-1-div3c">
                    <span class="nft-b-slider-1-div3a-line1">$9,945.1</span>
                    <span class="nft-b-slider-1-div3a-line2 txt-active-green">+3.57%</span>
                </div>
            </div>
            <div class="nft-b-slider-1-div4">
                <button>Collect Now</button>
            </div>
            
        </div>
        </SwiperSlide>
        <SwiperSlide style={{background:'transparent'}} >
        <div class="nft-b-slider-1">
            <div class="nft-b-slider-1-div1">
                <img src={Rectangle11}></img>
            </div>
            <div class="nft-b-slider-1-div2">
                <div class="nft-b-slider-1-div2a">
                    <img src={nftbslider1}></img>
                </div>
                <div class="nft-b-slider-1-div2b">
                    <span class="nft-b-slider-1-div2b-line1">HAPE #8064</span>
                    <span class="nft-b-slider-1-div2b-line2">HAPE PRIME</span>
                </div>
                <div class="nft-b-slider-1-div2c">
                    <img src={CollectorLogoETH}></img>
                </div>
            </div>
            <div class="nft-b-slider-1-div3">
                <div class="nft-b-slider-1-div3a">
                    <span class="nft-b-slider-1-div3a-line1">15.8 ETH</span>
                    <span class="nft-b-slider-1-div3a-line2">latest Bid</span>
                </div>
                <div class="nft-b-slider-1-div3b">
                    <span class="nft-b-slider-1-div3a-line1">9.45 ETH</span>
                    <span class="nft-b-slider-1-div3a-line2"> from</span>
                </div>
                <div class="nft-b-slider-1-div3c">
                    <span class="nft-b-slider-1-div3a-line1">$180,345</span>
                    <span class="nft-b-slider-1-div3a-line2 txt-active-green">+12.45%</span>
                </div>
            </div>
            <div class="nft-b-slider-1-div4">
                <button>Collect Now</button>
            </div>
            
        </div>
        </SwiperSlide>
      </Swiper>


    </div>
<div class="nft-b-see-more">
    <button>See More</button>
</div>

<div class="nft-b">
        <p>Top Collections</p>

        <div class="nft-c-1">
        <button class="nft-c-1-btn-active">Art</button>
        <button class="nft-c-1-btn-non-active">Collectibles</button>
        <button class="nft-c-1-btn-non-active">Metaverse</button>
        <button class="nft-c-1-btn-non-active">Virtual Worlds</button>
        <button class="nft-c-1-btn-non-active">Sports</button>
        <button class="nft-c-1-btn-non-active">Music</button>
        </div>

</div>
<div class="nft-c-2">
<div class="nft-c-2a">

{/* 1/////////////////// */}

<div class="nft-c-slider-box">
            <div class="nft-c-slider-box-container">
                <img class="nft-c-slider-img1" src={nftcimg1}></img>
                    <div class="nft-c-slider-box-div2-line">
                        <span class="nft-c-slider-box-div2-line1">COOLGUYZZ</span>
                        <span class="nft-c-slider-box-div2-line2">Coolguyzz.io</span>
                    </div>
                <div class="nft-c-slider-box-div3">
                        <div class="nft-c-slider-box-div3-item1">
                            <span class="nft-c-slider-box-div3-item-line1">1.5 ETH</span>
                            <span class="nft-c-slider-box-div3-item-line2">Floor Price</span>
                        </div>
                        <div class="nft-c-slider-box-div3-item2">
                            <span class="nft-c-slider-box-div3-item-line1">$2045.12</span>
                            <span class="nft-c-slider-box-div3-item-line2">-12.45%</span>
                        </div>
                        
                    </div>
            </div>
        </div>
        {/* 2////// */}
        <div class="nft-c-slider-box">
            <div class="nft-c-slider-box-container">
                <img class="nft-c-slider-img1" src={nftcimg2}></img>
                    <div class="nft-c-slider-box-div2-line">
                        <span class="nft-c-slider-box-div2-line1">gangstaboi v.1</span>
                        <span class="nft-c-slider-box-div2-line2">GB_Gangs</span>
                    </div>
                <div class="nft-c-slider-box-div3">
                        <div class="nft-c-slider-box-div3-item1">
                            <span class="nft-c-slider-box-div3-item-line1">2.53 ETH</span>
                            <span class="nft-c-slider-box-div3-item-line2">Floor Price </span>
                        </div>
                        <div class="nft-c-slider-box-div3-item2">
                            <span class="nft-c-slider-box-div3-item-line1">$4487</span>
                            <span class="nft-c-slider-box-div3-item-line2">+34.5%</span>
                        </div>
                        
                    </div>
            </div>
        </div>
{/* 3/////// */}
<div class="nft-c-slider-box">
            <div class="nft-c-slider-box-container">
                <img class="nft-c-slider-img1" src={nftcimg3}></img>
                    <div class="nft-c-slider-box-div2-line">
                        <span class="nft-c-slider-box-div2-line1">HyperApe</span>
                        <span class="nft-c-slider-box-div2-line2">HyperApe.co</span>
                    </div>
                <div class="nft-c-slider-box-div3">
                        <div class="nft-c-slider-box-div3-item1">
                            <span class="nft-c-slider-box-div3-item-line1">1.31 ETH</span>
                            <span class="nft-c-slider-box-div3-item-line2">Floor Price</span>
                        </div>
                        <div class="nft-c-slider-box-div3-item2">
                            <span class="nft-c-slider-box-div3-item-line1">$1743.4</span>
                            <span class="nft-c-slider-box-div3-item-line2">-5.6%</span>
                        </div>
                        
                    </div>
            </div>
        </div>
        {/* 4///////// */}
        <div class="nft-c-slider-box">
            <div class="nft-c-slider-box-container">
                <img class="nft-c-slider-img1" src={nftcimg4}></img>
                    <div class="nft-c-slider-box-div2-line">
                        <span class="nft-c-slider-box-div2-line1">Lyodd$1</span>
                        <span class="nft-c-slider-box-div2-line2">Naomi Po</span>
                    </div>
                <div class="nft-c-slider-box-div3">
                        <div class="nft-c-slider-box-div3-item1">
                            <span class="nft-c-slider-box-div3-item-line1">1.156 ETH</span>
                            <span class="nft-c-slider-box-div3-item-line2">Floor Price </span>
                        </div>
                        <div class="nft-c-slider-box-div3-item2">
                            <span class="nft-c-slider-box-div3-item-line1">$1670</span>
                            <span class="nft-c-slider-box-div3-item-line2">+12.45%</span>
                        </div>
                        
                    </div>
            </div>
        </div>
        
        {/* <div class="nft-c-2b"> */}
        {/* 5/////////// */}
        <div class="nft-c-slider-box">
            <div class="nft-c-slider-box-container">
                <img class="nft-c-slider-img1" src={nftcimg5}></img>
                    <div class="nft-c-slider-box-div2-line">
                        <span class="nft-c-slider-box-div2-line1">Azuki 3D </span>
                        <span class="nft-c-slider-box-div2-line2">AZUKI.JP</span>
                    </div>
                <div class="nft-c-slider-box-div3">
                        <div class="nft-c-slider-box-div3-item1">
                            <span class="nft-c-slider-box-div3-item-line1">1.5 ETH</span>
                            <span class="nft-c-slider-box-div3-item-line2">Floor Price </span>
                        </div>
                        <div class="nft-c-slider-box-div3-item2">
                            <span class="nft-c-slider-box-div3-item-line1">$1907</span>
                            <span class="nft-c-slider-box-div3-item-line2">+1.6%</span>
                        </div>
                        
                    </div>
            </div>
        </div>
        {/* 6//////////// */}
        <div class="nft-c-slider-box">
            <div class="nft-c-slider-box-container">
                <img class="nft-c-slider-img1" src={nftcimg6}></img>
                    <div class="nft-c-slider-box-div2-line">
                        <span class="nft-c-slider-box-div2-line1">CuteApe White </span>
                        <span class="nft-c-slider-box-div2-line2">CuteApe_99</span>
                    </div>
                <div class="nft-c-slider-box-div3">
                        <div class="nft-c-slider-box-div3-item1">
                            <span class="nft-c-slider-box-div3-item-line1">0.045 ETH</span>
                            <span class="nft-c-slider-box-div3-item-line2">Floor Price</span>
                        </div>
                        <div class="nft-c-slider-box-div3-item2">
                            <span class="nft-c-slider-box-div3-item-line1">$245.6</span>
                            <span class="nft-c-slider-box-div3-item-line2">-14.5%</span>
                        </div>
                        
                    </div>
            </div>
        </div>
        {/* 7////////// */}
        <div class="nft-c-slider-box">
            <div class="nft-c-slider-box-container">
                <img class="nft-c-slider-img1" src={nftcimg7}></img>
                    <div class="nft-c-slider-box-div2-line">
                        <span class="nft-c-slider-box-div2-line1">SneakerHead Vol.1</span>
                        <span class="nft-c-slider-box-div2-line2">SneakerHead.Corp</span>
                    </div>
                <div class="nft-c-slider-box-div3">
                        <div class="nft-c-slider-box-div3-item1">
                            <span class="nft-c-slider-box-div3-item-line1">1.4 ETH</span>
                            <span class="nft-c-slider-box-div3-item-line2">Floor Price</span>
                        </div>
                        <div class="nft-c-slider-box-div3-item2">
                            <span class="nft-c-slider-box-div3-item-line1">$1790</span>
                            <span class="nft-c-slider-box-div3-item-line2">+67.9%</span>
                        </div>
                        
                    </div>
            </div>
        </div>
        {/* 8/////////////// */}
        <div class="nft-c-slider-box">
            <div class="nft-c-slider-box-container">
                <img class="nft-c-slider-img1" src={nftcimg8}></img>
                    <div class="nft-c-slider-box-div2-line">
                        <span class="nft-c-slider-box-div2-line1">cvltB3AR</span>
                        <span class="nft-c-slider-box-div2-line2">CVLTBEAR </span>
                    </div>
                <div class="nft-c-slider-box-div3">
                        <div class="nft-c-slider-box-div3-item1">
                            <span class="nft-c-slider-box-div3-item-line1">0.88 ETH</span>
                            <span class="nft-c-slider-box-div3-item-line2">Floor Price</span>
                        </div>
                        <div class="nft-c-slider-box-div3-item2">
                            <span class="nft-c-slider-box-div3-item-line1">$545</span>
                            <span class="nft-c-slider-box-div3-item-line2">+12.45%</span>
                        </div>
                        
                    </div>
            </div>
        </div>
{/* </div> */}
</div>
{/* ////////// */}
</div>
<div class="nft-b-see-more">
    <button>See More</button>
</div>


<div class="nft-b">
    <p>Top Categories</p>
    
    <div class="nft-d-slider">
    <Swiper
        slidesPerView={1}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            
            600: {
              slidesPerView: 2,
             
            },
            900: {
                slidesPerView: 3,
               
              }
            
          }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide style={{backgroundColor:'transparent'}}>
            <div class="nft-d-slider-div1">
                <div class="nft-d-slider-div1-img">
                    <div class="nft-d-slider-div1-imga">
                        <div class="nft-d-slider-div1-imga-a"><img src={nftdsliderimg1a}></img></div>
                        <div class="nft-d-slider-div1-imga-a"><img src={nftdsliderimg1b}></img></div>
                    </div>
                    <div class="nft-d-slider-div1-imgb">
                        <img src={nftdsliderimg1c}></img>
                    </div>
                </div>
                <div class="nft-d-slider-div1-text"><span>Art</span></div>
            </div>
        </SwiperSlide>
        <SwiperSlide style={{backgroundColor:'transparent'}}>
        <div class="nft-d-slider-div1">
                <div class="nft-d-slider-div1-img">
                    <div class="nft-d-slider-div1-imga">
                    <div class="nft-d-slider-div1-imga-a"><img src={nftdsliderimg2a}></img></div>
                    <div class="nft-d-slider-div1-imga-a"><img src={nftdsliderimg2b}></img></div>
                    </div>
                    <div class="nft-d-slider-div1-imgb">
                        <img src={nftdsliderimg2c}></img>
                    </div>
                </div>
                <div class="nft-d-slider-div1-text"><span>Collectibles</span></div>
            </div>
        </SwiperSlide>
        <SwiperSlide style={{backgroundColor:'transparent'}}>
        <div class="nft-d-slider-div1">
                <div class="nft-d-slider-div1-img">
                    <div class="nft-d-slider-div1-imga">
                    <div class="nft-d-slider-div1-imga-a"><img src={nftdsliderimg3a}></img></div>
                    <div class="nft-d-slider-div1-imga-a"><img src={nftdsliderimg3b}></img></div>
                    </div>
                    <div class="nft-d-slider-div1-imgb">
                        <img src={nftdsliderimg3c}></img>
                    </div>
                </div>
                <div class="nft-d-slider-div1-text"><span>Virtual Worlds & Metaverse</span></div>
            </div>
        </SwiperSlide>

      </Swiper>

    </div>

</div>
<div class="nft-b-see-more">
    <button>See More</button>
</div>

<div class="nft-e">

<div class="nft-b nft-e-head">
    <p>Top Categories</p>
</div>
<div class="nft-e-div2">
    {/* 1/////////// */}
    <div class='nft-e-div2a'>
        <div class="nft-e-div2a-img">
            <img src={CombinedShape}></img>
        </div>
        <div class="nft-e-div2a-head">
<p>Set up your wallet</p>
        </div>
        <div class="nft-e-div2a-para">
<p>Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner. Learn about the wallets we support.</p>
        </div>
        
    </div>
    {/* 2//////// */}
    <div class='nft-e-div2a'>
        <div class="nft-e-div2a-img">
            <img src={CombinedShape2}></img>
        </div>
        <div class="nft-e-div2a-head">
<p>Set up your wallet</p>
        </div>
        <div class="nft-e-div2a-para">
<p>Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner. Learn about the wallets we support.</p>
        </div>
        
    </div>
    {/* 3////////////// */}
    <div class='nft-e-div2a'>
        <div class="nft-e-div2a-img">
            <img src={CombinedShape3}></img>
        </div>
        <div class="nft-e-div2a-head">
<p>Set up your wallet</p>
        </div>
        <div class="nft-e-div2a-para">
<p>Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner. Learn about the wallets we support.</p>
        </div>
        
    </div>
    {/* ////////// */}
</div>

</div>

<div class="nft-b">
        <p>Articles</p>
</div>
<div class="nft-f">
    <div class="nft-fa">
        <div class="nft-fa-img"><img src={nftf1}></img></div>
        <p>We've lowered marketplace fees on all your favorite NFTs</p>
        <span class="nft-fa-line">January 23, 2022</span>
    </div>
    {/* 2////////// */}
    <div class="nft-fa">
    <div class="nft-fa-img"><img src={nftf2}></img></div>
        <p>Your Ultimate Guide to Getting Started With NFTs on Rarible</p>
        <span class="nft-fa-line">April 03, 2022</span>
    </div>
    {/* 3///////// */}
    <div class="nft-fa">
    <div class="nft-fa-img"><img src={nftf3}></img></div>
        <p>Why Community Marketplaces are the future of NFT trading</p>
        <span class="nft-fa-line">July 7, 2022</span>
    </div>
</div>
<div class="nft-b-see-more">
    <button>See More</button>
</div>

<div class="nft-g">
    <p>People Also Ask: Other Questions About Bitcoin</p>
    <div class="nft-g-div">
        <div class="nft-g-box1">
            <div onClick={onClicknft1} class="nft-g-box1a">
            {showTextnft1 ? <img src={Ellipse292}></img> : <img src={Ellipse29}></img> }
                <span class="nft-g-box1a-txt">How Many Bitcoins Are There?</span>
                {showTextnft1 ? <Textnft1 /> : null}
            </div>
            
            <div onClick={onClicknft2} class="nft-g-box1a">
            {showTextnft2 ? <img src={Ellipse292}></img> : <img src={Ellipse29}></img> }
                <span class="nft-g-box1a-txt">How Many Bitcoins Are There?</span>
                {showTextnft2 ? <Textnft2 /> : null}
            </div>
            <div onClick={onClicknft3} class="nft-g-box1a">
            {showTextnft3 ? <img src={Ellipse292}></img> : <img src={Ellipse29}></img> }
                <span class="nft-g-box1a-txt">How Many Bitcoins Are There?</span>
                {showTextnft3 ? <Textnft3 /> : null}
            </div>
            <div onClick={onClicknft4} class="nft-g-box1a">
            {showTextnft4 ? <img src={Ellipse292}></img> : <img src={Ellipse29}></img> }
                <span class="nft-g-box1a-txt">How Many Bitcoins Are There?</span>
                {showTextnft4 ? <Textnft4 /> : null}
            </div>
        </div>

        <div class="nft-g-box1">
        <div onClick={onClicknft5} class="nft-g-box1a">
            {showTextnft5 ? <img src={Ellipse292}></img> : <img src={Ellipse29}></img> }
                <span class="nft-g-box1a-txt">How Many Bitcoins Are There?</span>
                {showTextnft5 ? <Textnft5 /> : null}
            </div>
            <div onClick={onClicknft6} class="nft-g-box1a">
            {showTextnft6 ? <img src={Ellipse292}></img> : <img src={Ellipse29}></img> }
                <span class="nft-g-box1a-txt">How Many Bitcoins Are There?</span>
                {showTextnft6 ? <Textnft6 /> : null}
            </div>
            <div onClick={onClicknft7} class="nft-g-box1a">
            {showTextnft7 ? <img src={Ellipse292}></img> : <img src={Ellipse29}></img> }
                <span class="nft-g-box1a-txt">How Many Bitcoins Are There?</span>
                {showTextnft7 ? <Textnft7 /> : null}
            </div>
            <div onClick={onClicknft8} class="nft-g-box1a">
            {showTextnft8 ? <img src={Ellipse292}></img> : <img src={Ellipse29}></img> }
                <span class="nft-g-box1a-txt">How Many Bitcoins Are There?</span>
                {showTextnft8 ? <Textnft8 /> : null}
            </div>
        </div>
    </div>
</div>


</div>
<div class="nft-h">
        <p>Start earning today</p>
        <button><Link to="/signup" style={{textDecoration: 'none', color: 'blue'}}>Sign Up</Link></button>
</div>
</div>
        </>
    )
};


function Textnft1(){
    return(
        <>
<div class="nft-g-box1-onclick-main">

<span class="nft-g-box1-onclick-main-txt">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</span>

</div>
        </>
    )
 };
 function Textnft2(){
    return(
        <>
<div class="nft-g-box1-onclick-main">

<span class="nft-g-box1-onclick-main-txt">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</span>

</div>
        </>
    )
 };
 function Textnft3(){
    return(
        <>
<div class="nft-g-box1-onclick-main">

<span class="nft-g-box1-onclick-main-txt">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</span>

</div>
        </>
    )
 };
 function Textnft4(){
    return(
        <>
<div class="nft-g-box1-onclick-main">

<span class="nft-g-box1-onclick-main-txt">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</span>

</div>
        </>
    )
 };
 function Textnft5(){
    return(
        <>
<div class="nft-g-box1-onclick-main">

<span class="nft-g-box1-onclick-main-txt">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</span>

</div>
        </>
    )
 };
 function Textnft6(){
    return(
        <>
<div class="nft-g-box1-onclick-main">

<span class="nft-g-box1-onclick-main-txt">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</span>

</div>
        </>
    )
 };
 function Textnft7(){
    return(
        <>
<div class="nft-g-box1-onclick-main">

<span class="nft-g-box1-onclick-main-txt">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</span>

</div>
        </>
    )
 };
 function Textnft8(){
    return(
        <>
<div class="nft-g-box1-onclick-main">

<span class="nft-g-box1-onclick-main-txt">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</span>

</div>
        </>
    )
 };




export default NFTLandingPage