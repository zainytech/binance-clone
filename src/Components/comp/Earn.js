import React from 'react';
import "./Earn.css";
import earnslider1 from "../assets/earn-slider1.png";
import earnslider2 from "../assets/earn-slider2.png";
import downarrow from "../assets/down-arrow.png";
import arrow from "../assets/arrow.png";
import vaultf from "../assets/vault-f.png";
import videoplay from "../assets/video-play.png";
import tick from "../assets/tick.png";
import forwardarrow from "../assets/forward-arrow.png";
import autoinvestf from "../assets/auto-invest-f.png";
import searchicon from "../assets/searchicon.png";
import hotg from "../assets/hot-g.png";
import thumbupg from "../assets/thumb-up-g.png";
import bczone from "../assets/bc_zone.png";
import polkazone from "../assets/polka_zone.png";
import solzone from "../assets/sol_zone.png";
import axs from "../assets/axs.png";
import avax from "../assets/avax.png";
import near from "../assets/near.png";
import ada from "../assets/ada.png";
import busd from "../assets/busd.png";
import usdt from "../assets/usdt.png";
import eth from "../assets/eth.png";
import iicon from "../assets/i-icon.png";
import sliderape from "../assets/slider-ape.png";
import sliderbnb from "../assets/slider-bnb.png";
import sliderbtc from "../assets/slider-btc.png";
import sliderbusd from "../assets/slider-busd.png";
import slideregld from "../assets/slider-egld.png";
import sliderens from "../assets/slider-ens.png";
import slidereth from "../assets/slider-eth.png";
import sliderusdt from "../assets/slider-usdt.png";
import sliderxtz from "../assets/slider-xtz.png";
import emailsubscriber from "../assets/email-subscriber.jpg";
import ethlite from "../assets/eth-lite.png";
import doticonf from "../assets/dot-icon-f.png";
import coinsf from "../assets/coins-f.png";

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


function Earn(){
    // const [isVisible, setIsVisible] = useState(true)
    const [showText, setShowText] = useState('');
    const onClick = () => setShowText(!showText);

    const [showText2, setShowText2] = useState('');
    const onClick2 = () => setShowText2(!showText2);

    const [showText3, setShowText3] = useState('');
    const onClick3 = () => setShowText3(!showText3);

    const [showText4, setShowText4] = useState('');
    const onClick4 = () => setShowText4(!showText4);
    return(
        <>
<div class="earn-main">
    <div class="earn-header-banner">
        <div class="earn-header1">
            <p>Binance Earn</p>
            <span class="earn-header1-line">Simple & Secure. Search popular coins and start earning.</span>
        </div>
        <div class="earn-header2">
            <div class='earn-header2-box1'>
                <p>Est. Total Value</p>
                <span class="earn-header2-box1-line1">******</span>
                <span class="earn-header2-box1-line2">******</span>
                <span class="earn-header2-box1-btm-heading">Account</span>
            </div>
            <div class='earn-header2-box2'>
                <p>30-Day Profit</p>
                <span class="earn-header2-box1-line1">******</span>
                <span class="earn-header2-box1-line2">******</span>
                <span class="earn-header2-box1-btm-heading">History</span>
            </div>
        </div>
    </div>
    <div class="earn-d">
<div class="earn-slider">
            <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        scrollbar={true}
        // navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div class="earn-slider1">
                <img src={earnslider1}></img>
            </div>
            </SwiperSlide>
        <SwiperSlide>
            <div class="earn-slider1">
                <img src={earnslider2}></img>
            </div>
        </SwiperSlide>
      </Swiper>
</div>


<div class="slider-btm">
<span class="sliderbtm1"
            onClick={onClick}>Simple Earn<img src={downarrow}></img></span>
            {showText ? <Text /> : null}
<span class="sliderbtm1"
            onClick={onClick2}>Staking<img src={downarrow}></img></span>
            {showText2 ? <Text2 /> : null}
<span class="sliderbtm1"
            onClick={onClick3}>
            Farming<img src={downarrow}></img></span>
            {showText3 ? <Text3 /> : null}
<span class="sliderbtm1"
            onClick={onClick4}> 
            Dual Investment<img src={downarrow}></img></span>
            {showText4 ? <Text4 /> : null}
</div>
</div>

{/* earn e part////////////////////////// */}

<div class="earn-e">
    <div class="earn-e1">
        <button class="earn-e1-btn-active">Protected</button>
        <button >High Yeild</button>
        <button >Auto Invested</button>
    </div>
    <div class="earn-e2 earn-e2-res" >
        <img class="earn-e2-img1" src={searchicon}/>
        <input data-bn-type="input" placeholder="Search anoucements" value=""></input>
        <img class='earn-e2-img2' src={downarrow}></img>
    </div>
</div>

{/* earn f part//////////// */}
<div class="earn-f-header">
    <div class="earn-f-header-box1">
        <img class="earn-f-header-img" src={hotg}></img>
        <span class="earn-f-header-line earn-f-header-line-active">Popular Coins</span>
    </div>
    <div class="earn-f-header-box1">
        <img class="earn-f-header-img" src={thumbupg}></img>
        <span class="earn-f-header-line">best For Beginners</span>
    </div>
    <div class="earn-f-header-box1">
        <img src={bczone}></img>
        <span class="earn-f-header-line">BNB Chain Zone</span>
    </div>
    <div class="earn-f-header-box1">
        <img src={polkazone}></img>
        <span class="earn-f-header-line">Polka Zone</span>
    </div>
    <div class="earn-f-header-box1">
        <img src={solzone}></img>
        <span class="earn-f-header-line">Solana Zone</span>
    </div>
</div>

<div class="earn-f-table-main">
    <div class="earn-f-table-head">
        <span class="earn-f-table-head-line">Coin</span>
        <span class="earn-f-table-head-line">Est.APR<img src={downarrow}></img></span>
        <span class="earn-f-table-head-line">Duration(Days)</span>
    </div>
<div class="earn-f-table">
    {/* 1/////// */}
<div class="earn-f-table-row1">
    
    <div class="earn-f-table-row1-box1">
        <div class="earn-f-table-row1-box1-a">
            <img src={axs}></img>
        </div>
        <div class="earn-f-table-row1-box1-b">
        <span class="earn-f-table-row1-box1-line-a">AXS</span>
        <span class="earn-f-table-row1-box1-line-b">Simple Earn</span>
        </div>
    </div>

    <div class="earn-f-table-row1-box2">
        <span class="earn-f-table-row1-box1-line-no">45%</span>
    </div>
    <div class="earn-f-table-row1-box3">
        <span class="earn-f-table-row1-box3-line">Flexible</span>
        <span class="earn-f-table-row1-box3-line">30</span>
        <span class="earn-f-table-row1-box3-line">60</span>
        <span class="earn-f-table-row1-box3-line-active">90</span>
    </div>
    <div class="earn-f-table-row1-box4">
        <button>Subscribe</button>
    </div>
</div>

{/* 2////// */}
<div class="earn-f-table-row1">
    <div class="earn-f-table-row1-box1">
        <div class="earn-f-table-row1-box1-a">
            <img src={polkazone}></img>
        </div>
        <div class="earn-f-table-row1-box1-b">
        <span class="earn-f-table-row1-box1-line-a">DOT</span>
        <span class="earn-f-table-row1-box1-line-b">Simple Earn</span>
        </div>
    </div>
    <div class="earn-f-table-row1-box2">
        <span class="earn-f-table-row1-box1-line-no">18.9%</span>
    </div>
    <div class="earn-f-table-row1-box3">
        <span class="earn-f-table-row1-box3-line">Flexible</span>
        <span class="earn-f-table-row1-box3-line">30</span>
        <span class="earn-f-table-row1-box3-line">60</span>
        <span class="earn-f-table-row1-box3-line">90</span>
        <span class="earn-f-table-row1-box3-line-active">120</span>
    </div>
    <div class="earn-f-table-row1-box4">
        <button>Subscribe</button>
    </div>
</div>
{/* 3/////// */}
<div class="earn-f-table-row1">
    <div class="earn-f-table-row1-box1">
        <div class="earn-f-table-row1-box1-a">
            <img src={avax}></img>
        </div>
        <div class="earn-f-table-row1-box1-b">
        <span class="earn-f-table-row1-box1-line-a">AVAX</span>
        <span class="earn-f-table-row1-box1-line-b">Simple Earn</span>
        </div>
    </div>
    <div class="earn-f-table-row1-box2">
        <span class="earn-f-table-row1-box1-line-no">13.6%</span>
    </div>
    <div class="earn-f-table-row1-box3">
        <span class="earn-f-table-row1-box3-line">Flexible</span>
        <span class="earn-f-table-row1-box3-line">30</span>
        <span class="earn-f-table-row1-box3-line">60</span>
        <span class="earn-f-table-row1-box3-line">90</span>
        <span class="earn-f-table-row1-box3-line-active">120</span>
    </div>
    <div class="earn-f-table-row1-box4">
        <button>Subscribe</button>
    </div>
</div>
{/* 4///// */}
<div class="earn-f-table-row1">
    <div class="earn-f-table-row1-box1">
        <div class="earn-f-table-row1-box1-a">
            <img src={near}></img>
        </div>
        <div class="earn-f-table-row1-box1-b">
        <span class="earn-f-table-row1-box1-line-a">NEAR</span>
        <span class="earn-f-table-row1-box1-line-b">Simple Earn</span>
        </div>
    </div>
    <div class="earn-f-table-row1-box2">
        <span class="earn-f-table-row1-box1-line-no">12.9%</span>
    </div>
    <div class="earn-f-table-row1-box3">
        <span class="earn-f-table-row1-box3-line">Flexible</span>
        <span class="earn-f-table-row1-box3-line">30</span>
        <span class="earn-f-table-row1-box3-line">60</span>
        <span class="earn-f-table-row1-box3-line">90</span>
        <span class="earn-f-table-row1-box3-line-active">120</span>
    </div>
    <div class="earn-f-table-row1-box4">
        <button>Subscribe</button>
    </div>
</div>
{/* 5////// */}
<div class="earn-f-table-row1">
    <div class="earn-f-table-row1-box1">
        <div class="earn-f-table-row1-box1-a">
            <img src={ada}></img>
        </div>
        <div class="earn-f-table-row1-box1-b">
        <span class="earn-f-table-row1-box1-line-a">ADA</span>
        <span class="earn-f-table-row1-box1-line-b">Simple Earn</span>
        </div>
    </div>
    <div class="earn-f-table-row1-box2">
        <span class="earn-f-table-row1-box1-line-no">8.2%</span>
    </div>
    <div class="earn-f-table-row1-box3">
        <span class="earn-f-table-row1-box3-line">Flexible</span>
        <span class="earn-f-table-row1-box3-line">30</span>
        <span class="earn-f-table-row1-box3-line">60</span>
        <span class="earn-f-table-row1-box3-line">90</span>
        <span class="earn-f-table-row1-box3-line-active">120</span>
    </div>
    <div class="earn-f-table-row1-box4">
        <button>Subscribe</button>
    </div>
</div>
{/* 6///// */}
<div class="earn-f-table-row1">
    <div class="earn-f-table-row1-box1">
        <div class="earn-f-table-row1-box1-a">
            <img src={busd}></img>
        </div>
        <div class="earn-f-table-row1-box1-b">
        <span class="earn-f-table-row1-box1-line-a">BUSD</span>
        <span class="earn-f-table-row1-box1-line-b">Simple Earn</span>
        </div>
    </div>
    <div class="earn-f-table-row1-box2">
        <span class="earn-f-table-row1-box1-line-no">6%</span>
    </div>
    <div class="earn-f-table-row1-box3  earn-f-table-row1-box3-res">

        <span class="earn-f-table-row1-box3-line-active">Flexible</span>
    </div>
    <div class="earn-f-table-row1-box4">
        <button>Subscribe</button>
    </div>
</div>
{/* 7/////// */}
<div class="earn-f-table-row1">
    <div class="earn-f-table-row1-box1">
        <div class="earn-f-table-row1-box1-a">
            <img src={usdt}></img>
        </div>
        <div class="earn-f-table-row1-box1-b">
        <span class="earn-f-table-row1-box1-line-a">USDT</span>
        <span class="earn-f-table-row1-box1-line-b">Simple Earn</span>
        </div>
    </div>
    <div class="earn-f-table-row1-box2">
        <span class="earn-f-table-row1-box1-line-no">5.5%</span>
    </div>
    <div class="earn-f-table-row1-box3   earn-f-table-row1-box3-res">
 
        <span class="earn-f-table-row1-box3-line-active  earn-f-table-row1-box3-line-active-res">Flexible</span>
    </div>
    <div class="earn-f-table-row1-box4">
        <button>Subscribe</button>
    </div>
</div>
{/* 8/////// */}
<div class="earn-f-table-row1">
    <div class="earn-f-table-row1-box1">
        <div class="earn-f-table-row1-box1-a">
            <img src={eth}></img>
        </div>
        <div class="earn-f-table-row1-box1-b">
        <span class="earn-f-table-row1-box1-line-a">ETH</span>
        <span class="earn-f-table-row1-box1-line-b">ETH 2.0 Staking</span>
        </div>
    </div>
    <div class="earn-f-table-row1-box2">
        <span class="earn-f-table-row1-box1-line-no">4.44%</span>
    </div>
    <div class="earn-f-table-row1-box3  earn-f-table-row1-box3-res">
 
        <span class="earn-f-table-row1-box3-line-active">Flexible</span>
    </div>
    <div class="earn-f-table-row1-box4">
        <button>Subscribe</button>
    </div>
</div>
{/* //////////// */}
<div class="table-expand">
    <p>Expand<img src={downarrow}></img></p>
</div>
</div>
</div>

 {/* earn g part/////////// */}
<div class="earn-f-main">
    <div class="earn-f-main-heading">Calculate your crypto earnings</div>
<div class="earn-f-div2">
    <div class="earn-f-div2-a">
        <span class="earn-f-div2-txt">I have</span>
        <div class="earn-g-search">
        <input data-bn-type="input" value="1000" >
        </input>
        <img src={usdt}/>
        {/* <span class="earn-g-search-txt">USDT</span> */}
        {/* <img src={downarrow}></img> */}
    </div>
    </div>
    <div class="earn-f-div2-b">
        <span class="earn-f-div2-txt">and I am interested in</span>
<div class="earn-f-div2-box2">
    <span class="earn-f-div2-box-txt">Flexible</span>
    <span class="earn-f-div2-box-txt">Fixed</span>
</div>
<span class="earn-f-div2-txt">Investment.</span>
    </div>
    
</div>
<div class="earn-f-div3">
    
    <div class="earn-f-div3-col1">
    <div><span class="earn-f-div3-col1-heading">Products on offer</span>
    <div class="earn-f-div3-a">
        <div class="earn-f-div3-a-box1">
            <span class="earn-f-div3-a-line1">Simple Earn</span>
            <span class="earn-f-div3-a-line2">0.90% ~ 5.50%</span>
            <span class="earn-f-div3-a-line3">Based On Tier Rate APR</span>
            <img src={iicon}></img>
        </div>
    
            <div class="earn-f-div3-a-box2">
                <span class="earn-f-div3-a-box2-line1">Flexible Defi Staking</span>
                <span class="earn-f-div3-a-line1-adv">Advanced</span>
                <span class="earn-f-div3-a-line2">0.60%</span>
            </div>
            </div>
   
    </div>
</div>
<div class="earn-f-div3-col2">
    <div class="earn-f-div3-box2">
        <p>Estimated Earnings</p>
        <span class="earn-f-div3-box2-line1">+166.92566249 USDT</span>
        <img src={tick}></img>
        <span class="earn-f-div3-box2-line2">Auto-subscribe</span>
    </div>
</div>
</div>

<div class="earn-f-div4"><button>Subscribe</button></div>
<div class="earn-f-div5">
    <span class="earn-f-div5-txt">This calculation is an estimate of rewards you will earn in cryptocurrency over the selected timeframe. It does not display the actual or predicted APR in any fiat currency. APR is adjusted daily and the estimated earnings may be different from the actual earnings generated.</span>
</div>

<div class="earn-f-div6">
    <p>Related assets</p>
    <div class="earn-f-div6-slider">





    <Swiper
        slidesPerView={5}
        centeredSlides={false}
        spaceBetween={10}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]} autoplay={true}

        className="mySwiper"



        // breakpoints={{
          
        //     640: {
        //       width: 340,
        //       slidesPerView: 1,
        //     },
            
        //     768: {
        //       width: 568,
        //       slidesPerView: 2,
        //     },
        //   }}
      >
  
        <SwiperSlide>
            <div class="earn-f-div6-box1">
            <img src={sliderbtc}></img>
            <p>BTC</p>
            <span class="earn-f-div6-slider-txt">Bitcoin</span>
            </div>
        </SwiperSlide>
      
        <SwiperSlide>
            <div class="earn-f-div6-box1">
            <img src={slidereth}></img>
            <p>ETH</p>
            <span class="earn-f-div6-slider-txt">Ethereum</span>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div class="earn-f-div6-box1">
            <img src={sliderbnb}></img>
            <p>BNB</p>
            <span class="earn-f-div6-slider-txt">BNB</span>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div class="earn-f-div6-box1">
            <img src={sliderbusd}></img>
            <p>BUSD</p>
            <span class="earn-f-div6-slider-txt">Binance USD</span>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div class="earn-f-div6-box1">
            <img src={sliderape}></img>
            <p>APE</p>
            <span class="earn-f-div6-slider-txt">ApeCoin</span>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div class="earn-f-div6-box1">
            <img src={sliderens}></img>
            <p>ENS</p>
            <span class="earn-f-div6-slider-txt">Ethereum Name Service</span>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div class="earn-f-div6-box1">
            <img src={slideregld}></img>
            <p>EGLD</p>
            <span class="earn-f-div6-slider-txt">Elrond eGold</span>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div class="earn-f-div6-box1">
            <img src={sliderusdt}></img>
            <p>USDT</p>
            <span class="earn-f-div6-slider-txt">TetherUS</span>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div class="earn-f-div6-box1">
            <img src={sliderxtz}></img>
            <p>XTZ</p>
            <span class="earn-f-div6-slider-txt">Tezos</span>
            </div>
        </SwiperSlide>

      </Swiper> 



    </div>
</div>

<div class="earn-f-div7">
    <div class="earn-f-div7-col1">
    <p>Subscribe to receive notifications and updates</p>
    <div class="earn-f-div7-search">
        <span class="earn-f-div7-line">My email address is</span>
        <div class="earn-f-div7-input">
        <input data-bn-type="input" value="" placeholder='Enter your E-mail' ></input>
        </div>
        <button>Subscribe</button>
    </div>
    </div>
    <div class="earn-f-div7-img">
        <img src={emailsubscriber}></img>
    </div>
</div>

<div class="earn-faq">
        <p>FAQ</p>
        <div class="earn-faq-div">
            <div><span class="earn-faq-div-txt">1. What is Binance Earn?<img src={downarrow}></img></span></div>
            <div><span class="earn-faq-div-txt">2. How does Binance Earn work?<img src={downarrow}></img></span></div>
            <div><span class="earn-faq-div-txt">3. Which cryptocurrencies are supported?<img src={downarrow}></img></span></div>
            <div><span class="earn-faq-div-txt">4. Am I eligible for Binance Earn?<img src={downarrow}></img></span></div>
            <div><span class="earn-faq-div-txt">5. How do I start earning?<img src={downarrow}></img></span></div>
        </div>
        <div class="earn-faq-more"><span>View More<img src={downarrow}></img></span></div>
</div>

</div>







</div>
        </>
    )
};

function Text(){
    return(
        <>
         {/* sliderbtm dropdown/////////////  */}

<div  class="sliderbtm-dropdown">
    <div class="sliderbtm1-div">
        <div class="sliderbtm1-div-line1">
            <img src={vaultf}></img>
            <span class="sliderbtm1-div-line1-txt">Simple Earn</span>
            <img class="sliderbtm1-div-line1-img2" src={videoplay}></img>
        </div>
        <div class="sliderbtm1-div-line2">
            <img src={tick}></img>
            <span>Stable Earnings</span>
            <img src={tick}></img>
            <span>Zero fees</span>
        </div>
        <div class="sliderbtm1-div-line3">
            <p>Deposit and earn daily rewards, either for flexible-term or locked-terms. 200+ tokens for you to choose.</p>
        </div>
        <div class="sliderbtm1-div-line4">
            <img src={forwardarrow}></img>
        </div>
    </div>
    <div class="sliderbtm1-div">
        <div class="sliderbtm1-div-line1">
            <img src={vaultf}></img>
            <span class="sliderbtm1-div-line1-txt">BNB Vault</span>
            <img class="sliderbtm1-div-line1-img2" src={videoplay}></img>
        </div>
        <div class="sliderbtm1-div-line2">
            <img src={tick}></img>
            <span>Yeild Aggregator</span>
            <img src={tick}></img>
            <span>Flexible</span>
        </div>
        <div class="sliderbtm1-div-line3">
            <p>Earn combined returns on your BNB. Leverage the best assets of Launchpool and Simple Earn.</p>
        </div>
        <div class="sliderbtm1-div-line4">
            <img src={forwardarrow}></img>
        </div>
    </div>
    <div class="sliderbtm1-div">
        <div class="sliderbtm1-div-line1">
            <img src={autoinvestf}></img>
            <span class="sliderbtm1-div-line1-txt">Auto Invest</span>
            <img class="sliderbtm1-div-line1-img2" src={videoplay}></img>
        </div>
        <div class="sliderbtm1-div-line2">
            <img src={tick}></img>
            <span>Automated Buying</span>
            <img src={tick}></img>
            <span>Set & Forget</span>
        </div>
        <div class="sliderbtm1-div-line3">
            <p>Accumulate crypto on autopilot and take the guesswork out of timing the market.</p>
        </div>
        <div class="sliderbtm1-div-line4">
            <img src={forwardarrow}></img>
        </div>
    </div>

</div>
{/* /////////////////////////////////////////// */}

        </>
    )
 };

 function Text2(){
    return(
        <>
         {/* sliderbtm dropdown/////////////  */}

<div  class="sliderbtm-dropdown">
    <div class="sliderbtm1-div">
        <div class="sliderbtm1-div-line1">
            <img src={ethlite}></img>
            <span class="sliderbtm1-div-line1-txt">ETH 2.0 staking</span>
            <img class="sliderbtm1-div-line1-img2" src={videoplay}></img>
        </div>
        <div class="sliderbtm1-div-line2">
            <img src={tick}></img>
            <span>Less risk</span>
            <img src={tick}></img>
            <span>High yeild</span>
        </div>
        <div class="sliderbtm1-div-line3">
            <p>Join ethereum 2.0 staking with minimum investment and low risk, hassle-free.</p>
        </div>
        <div class="sliderbtm1-div-line4">
            <img src={forwardarrow}></img>
        </div>
    </div>
    <div class="sliderbtm1-div">
        <div class="sliderbtm1-div-line1">
            <img src={coinsf}></img>
            <span class="sliderbtm1-div-line1-txt">DeFi Staking</span>
            <img class="sliderbtm1-div-line1-img2" src={videoplay}></img>
        </div>
        <div class="sliderbtm1-div-line2">
            <img src={tick}></img>
            <span>High risk</span>
            <img src={tick}></img>
            <span>High yeild</span>
        </div>
        <div class="sliderbtm1-div-line3">
            <p>Access Decentralized Finance (DeFi) projects with potentially high returns.</p>
        </div>
        <div class="sliderbtm1-div-line4">
            <img src={forwardarrow}></img>
        </div>
    </div>
    <div class="sliderbtm1-div">
        <div class="sliderbtm1-div-line1">
            <img src={doticonf}></img>
            <span class="sliderbtm1-div-line1-txt">DOT Slot Auction</span>
            <img class="sliderbtm1-div-line1-img2" src={videoplay}></img>
        </div>
        <div class="sliderbtm1-div-line2">
            <img src={tick}></img>
            <span>SAFU</span>
            <img src={tick}></img>
            <span>High Returns</span>
        </div>
        <div class="sliderbtm1-div-line3">
            <p>support projects on the DOT parachain slot auction and et rewarded with crypto.</p>
        </div>
        <div class="sliderbtm1-div-line4">
            <img src={forwardarrow}></img>
        </div>
    </div>

</div>
{/* /////////////////////////////////////////// */}

        </>
    )
 };



 function Text3(){
    return(
        <>
         {/* sliderbtm dropdown/////////////  */}

<div  class="sliderbtm-dropdown">
    <div class="sliderbtm1-div">
        <div class="sliderbtm1-div-line1">
            <img src={ethlite}></img>
            <span class="sliderbtm1-div-line1-txt">Liquidity Farming</span>
            <img class="sliderbtm1-div-line1-img2" src={videoplay}></img>
        </div>
        <div class="sliderbtm1-div-line2">
            <img src={tick}></img>
            <span>Yeild farming</span>
            <img src={tick}></img>
            <span>High yeild</span>
        </div>
        <div class="sliderbtm1-div-line3">
            <p>Provide liquidity to earn transaction fees and farm rewards.</p>
        </div>
        <div class="sliderbtm1-div-line4">
            <img src={forwardarrow}></img>
        </div>
    </div>
    <div class="sliderbtm1-div">
        <div class="sliderbtm1-div-line1">
            <img src={coinsf}></img>
            <span class="sliderbtm1-div-line1-txt">Swap Farming</span>
            <img class="sliderbtm1-div-line1-img2" src={videoplay}></img>
        </div>
        <div class="sliderbtm1-div-line2">
            <img src={tick}></img>
            <span>Quick trade</span>
            <img src={tick}></img>
            <span>Fee rebate</span>
        </div>
        <div class="sliderbtm1-div-line3">
            <p>Enjoy up to 50% rebates on transaction fees (issued in BNB) when you swap.</p>
        </div>
        <div class="sliderbtm1-div-line4">
            <img src={forwardarrow}></img>
        </div>
    </div>
    <div class="sliderbtm1-div">
        <div class="sliderbtm1-div-line1">
            <img src={doticonf}></img>
            <span class="sliderbtm1-div-line1-txt">Launchpool</span>
            <img class="sliderbtm1-div-line1-img2" src={videoplay}></img>
        </div>
        <div class="sliderbtm1-div-line2">
            <img src={tick}></img>
            <span>Simple & secure</span>
            <img src={tick}></img>
            <span>Latest tokens</span>
        </div>
        <div class="sliderbtm1-div-line3">
            <p>Stake your crypto and earn attractive returns in the form of new tokens.</p>
        </div>
        <div class="sliderbtm1-div-line4">
            <img src={forwardarrow}></img>
        </div>
    </div>

</div>
{/* /////////////////////////////////////////// */}

        </>
    )
 };

 
 function Text4(){
    return(
        <>
         {/* sliderbtm dropdown/////////////  */}

<div  class="sliderbtm-dropdown">
    <div class="sliderbtm1-div">
        <div class="sliderbtm1-div-line1">
            <img src={ethlite}></img>
            <span class="sliderbtm1-div-line1-txt">Dual Investment</span>
            <img class="sliderbtm1-div-line1-img2" src={videoplay}></img>
        </div>
        <div class="sliderbtm1-div-line2">
            <img src={tick}></img>
            <span>High yield</span>
            <img src={tick}></img>
            <span>Short period</span>
        </div>
        <div class="sliderbtm1-div-line3">
            <p>Commit your cryptocurrencies, earning potentially higher rewards with settlement in one of the two cryptocurrencies.</p>
        </div>
        <div class="sliderbtm1-div-line4">
            <img src={forwardarrow}></img>
        </div>
    </div>


</div>
{/* /////////////////////////////////////////// */}

        </>
    )
 };


export default Earn