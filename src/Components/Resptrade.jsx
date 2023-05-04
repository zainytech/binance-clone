import React from "react";
import './Resptrade.css'

import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import bannerp from './Img/bannerp.png';
import userc1 from './Img/userc1.png';
import userc2 from './Img/userc2.png';
import userc3 from './Img/userc3.png';
import rest1 from './Img/rest1.png';

import demo1 from './Img/demo1.png';
import demo2 from './Img/demo2.png';
import demo3 from './Img/demo3.png';
import demo4 from './Img/demo4.png';
import demo5 from './Img/demo5.png';
import demo6 from './Img/demo6.png';
import price1 from './Img/price1.png';
import price2 from './Img/price2.png';
import price3 from './Img/price3.png';
import price4 from './Img/price4.png';
import price5 from './Img/price5.png';
import price6 from './Img/price6.png';
import price7 from './Img/price7.png';
import price8 from './Img/price8.png';
import price9 from './Img/price9.png';
import respon1 from './Img/respon1.png';

import { Autoplay, Pagination } from "swiper";

const Resptrade = () => {
    return(
        <>
            <div className="rest">
                <div className="rest-row1">
                    <div className="rest-row1-div1">
                        <h2>Responsible Trading with Binance</h2>
                        <div className="rest-row1-div1-data">Binance encourages our users to trade responsibly. Trading can be engaging and fun, but trading is a serious business and it can lead to financial and emotional distress. Trading derivatives carries risk, and furthermore, cryptocurrencies and other digital assets often have high levels of price volatility.</div>
                    </div>
                    <div className="rest-row1-div2"><img src={bannerp}/></div>
                </div>

                <div className="rest-row2">
                    <div className="rest-row2-col1">Responsible trading is about exercising control over your trades and taking accountability for your actions. Trading responsibly also means acknowledging when you may not be suited for trading. Responsible traders do not go beyond their means. In other words, you should never risk funds you cannot afford to lose.
                    At Binance, we have established several features and guidelines to help users trade responsibly and make informed trading decisions. Here are some tips and good practices that will help you be a more responsible trader:</div>
                    <div className="rest-row2-col2">
                        <div className="rest-row2-col2-div1">
                            <img src={userc1}/>
                            <h5>Practicing Self-Discipline</h5>
                            <div>In trading, self-discipline means telling yourself to avoid unhealthy excesses like compulsive trading or gambling. At Binance, we encourage users to practice self-discipline, especially when they feel pressured by losses or a losing streak.</div>
                        </div>
                        <div className="rest-row2-col2-div1">
                            <img src={userc2}/>
                            <h5>Continuously Educating Yourself</h5>
                            <div>Binance has continuously worked towards educating its users on every aspect of crypto trading, from the underlying technology of cryptocurrencies to the complexities of derivatives trading. Our educational content is freely available on <a href="#">Binance Academy, Binance Research, Binance Blog</a>, and <a href='#'>FAQ guides</a>.</div>
                        </div>
                        <div className="rest-row2-col2-div1">
                            <img src={userc3}/>
                            <h5>Protecting Your Capital</h5>
                            <div>In trading, self-discipline means telling yourself to avoid unhealthy excesses like compulsive trading or gambling. At Binance, we encourage users to practice self-discipline, especially when they feel pressured by losses or a losing streak.</div>
                        </div>
                    </div>
                </div>

                <div className="rest34-color">

                <div className="rest-row3">
                    <div className="rest-row3-col1">
                        <h2>Anti-Addiction Notice</h2>
                        <div className="rest-row3-col1-div">Binance has established several procedures to remind traders of impulsive trading behavior. For instance, when a trader experiences a losing streak or suffers a heavy loss, we continuously remind them of the risk involved in derivatives trading and encourage them to hold back on trading activities.</div>
                        <div className="rest-row3-col1-div">As a responsible trader, it is critical to keep yourself in check and ensure that you have procedures to avoid harmful excesses like compulsive trading or gambling.</div>
                        <div className="rest-row3-col1-div">Our system-generated notifications constantly remind users of the dangers of compulsive trading and the risk involved when trading more complicated products like derivatives.</div>
                        <div className="rest-row3-col1-div1">Available in: 
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-94sbqg"><path d="M6 2h15v17a2 2 0 01-2 2H4l2-2V2z" fill="url(#futures-options-g_svg__paint0_linear)"></path><path d="M4 21a2 2 0 002-2v-7H2v7a2 2 0 002 2zM9.5 19h2V7.5H14L10.5 4 7 7.5h2.5V19zM17.5 4.5h-2V16H13l3.5 3.5L20 16h-2.5V4.5z" fill="#76808F"></path><defs><linearGradient id="futures-options-g_svg__paint0_linear" x1="12.5" y1="21" x2="12.5" y2="2" gradientUnits="userSpaceOnUse"><stop offset="0.333" stop-color="#F0B90B"></stop><stop offset="1" stop-color="#FBDA3C"></stop></linearGradient></defs></svg>
                                Options
                            </button>
                        </div>
                    </div>
                    <div className="rest-row3-col2">
                        <img src={rest1}/>
                    </div>
                </div>

                <div className="rest-row3">
                    <div className="rest-row3-col1">
                        <h2>Cooling-Off Period Function</h2>
                        <div className="rest-row3-col1-div">When traders face a losing streak, it may be challenging to turn the tide and stop the bleeding. In these situations, traders must know when to stop and avoid compulsive trading behaviors. Sometimes, the best trade is no trade at all.</div>
                        <div className="rest-row3-col1-div">To encourage self-discipline and responsible trading, Binance launched the Cooling-off Period function for users to temporarily disable derivative trading activities and abstain from compulsive trading behavior.</div>
                        <div className="rest-row3-col1-div">Even with this feature available, traders must continue to practice responsible trading independently, which calls for having complete control over their trades and taking responsibility for their actions.</div>
                    </div>
                    <div className="rest-row3-col2">
                        <Swiper
                            spaceBetween={10}
                            centeredSlides={true}
                            pagination={{
                            clickable: true,
                            }}
                            autoplay={{
                                delay: 2200,
                                disableOnInteraction: false,
                                }}
                            modules={[  Autoplay, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide><img src={demo1}/></SwiperSlide>
                            <SwiperSlide><img src={demo2}/></SwiperSlide>
                            <SwiperSlide><img src={demo3}/></SwiperSlide>
                            <SwiperSlide><img src={demo4}/></SwiperSlide>
                            <SwiperSlide><img src={demo5}/></SwiperSlide>
                            <SwiperSlide><img src={demo6}/></SwiperSlide>
                        </Swiper>
                    </div>
                </div>

                <div className="rest-row4">
                    <div className="rest-row3-col1">
                        <div className="rest-row3-col1-div2">Margin</div>
                        <div className="rest-row3-col1-div">The Cooling-off Period function is also available on margin trading. Margin traders can temporarily suspend margin-trading-related activities including isolated or cross margin trading, and the borrowing of cryptocurrencies for a specific period.</div>
                        <div className="rest-row3-col1-div">This feature allows you to limit and control your trading activities, especially in situations when you feel pressured by losses. It also enables you to abstain from behavior and activities that can lead to irresponsible trades.</div>
                        <div className="rest-row3-col1-div">Once the Cooling-off Period is enabled, it cannot be lifted and will only terminate after the preset cut-off time. During this period, all trading features and confirmation buttons will be disabled.</div>
                        <div className="rest-row3-col1-div1">Available in: 
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-94sbqg"><path d="M6 2h15v17a2 2 0 01-2 2H4l2-2V2z" fill="url(#futures-g_svg__paint0_linear)"></path><path d="M4 21a2 2 0 002-2v-7H2v7a2 2 0 002 2zM9 16h9v2H9v-2zM18 5v7.5l-3.043-3.043L10.414 14 9 12.586l4.543-4.543L10.5 5H18z" fill="#76808F"></path><defs><linearGradient id="futures-g_svg__paint0_linear" x1="12.5" y1="21" x2="12.5" y2="2" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient></defs></svg>
                                Futures
                            </button>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-94sbqg"><path d="M6 2h15v17a2 2 0 01-2 2H4l2-2V2z" fill="url(#futures-g_svg__paint0_linear)"></path><path d="M4 21a2 2 0 002-2v-7H2v7a2 2 0 002 2zM9 16h9v2H9v-2zM18 5v7.5l-3.043-3.043L10.414 14 9 12.586l4.543-4.543L10.5 5H18z" fill="#76808F"></path><defs><linearGradient id="futures-g_svg__paint0_linear" x1="12.5" y1="21" x2="12.5" y2="2" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient></defs></svg>
                                Margin
                            </button>
                        </div>
                    </div>
                    <div className="rest-row3-col2">
                        <Swiper
                            spaceBetween={10}
                            centeredSlides={true}
                            pagination={{
                            clickable: true,
                            }}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                                }}
                            modules={[  Autoplay, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide><img src={demo1}/></SwiperSlide>
                            <SwiperSlide><img src={demo2}/></SwiperSlide>
                            <SwiperSlide><img src={demo3}/></SwiperSlide>
                            <SwiperSlide><img src={demo4}/></SwiperSlide>
                            <SwiperSlide><img src={demo5}/></SwiperSlide>
                            <SwiperSlide><img src={demo6}/></SwiperSlide>
                        </Swiper>
                    </div>
                </div>

                <div className="rest-row3">
                    <div className="rest-row3-col1">
                        <h2>Price protection</h2>
                        <div className="rest-row3-col1-div">Users also have access to advanced risk control features such as price protection, which protects users from potential market manipulation. When enabled, this feature prevents bad actors from exploiting market efficiencies to trigger stop-losses or take-profit orders of other users to their disadvantage. Therefore, Binance strongly recommends the Price Protection feature to safeguard your positions especially when the market is extremely volatile. Find more about how to enable the Price Protection feature on our <a href="#">FAQ page</a>.</div>
                        <div className="rest-row3-col1-div1">Available in: 
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-94sbqg"><path d="M6 2h15v17a2 2 0 01-2 2H4l2-2V2z" fill="url(#futures-options-g_svg__paint0_linear)"></path><path d="M4 21a2 2 0 002-2v-7H2v7a2 2 0 002 2zM9.5 19h2V7.5H14L10.5 4 7 7.5h2.5V19zM17.5 4.5h-2V16H13l3.5 3.5L20 16h-2.5V4.5z" fill="#76808F"></path><defs><linearGradient id="futures-options-g_svg__paint0_linear" x1="12.5" y1="21" x2="12.5" y2="2" gradientUnits="userSpaceOnUse"><stop offset="0.333" stop-color="#F0B90B"></stop><stop offset="1" stop-color="#FBDA3C"></stop></linearGradient></defs></svg>
                                Options
                            </button>
                        </div>
                    </div>
                    <div className="rest-row3-col2">
                        <Swiper
                            spaceBetween={10}
                            centeredSlides={true}
                            pagination={{
                            clickable: true,
                            }}
                            autoplay={{
                                delay: 2800,
                                disableOnInteraction: false,
                                }}
                            modules={[  Autoplay, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide><img src={price1}/></SwiperSlide>
                            <SwiperSlide><img src={price2}/></SwiperSlide>
                        </Swiper>
                    </div>
                </div>

                <div className="rest-row3">
                    <div className="rest-row3-col1">
                        <h2>Insurance Funds</h2>
                        <div className="rest-row3-col1-div">Other safety features such as insurance funds protect users from adverse losses. Insurance funds are safety-nets that protect bankrupt traders from adverse losses and ensure that the profits of winning traders are paid out in full. The primary purpose of an insurance fund is to limit the occurrences of auto-deleverage liquidations (ADLs). Due to the volatility in the crypto markets, and the leverage offered to clients, it is not possible to fully avoid auto-deleverage liquidations. In order to provide the best possible client experience, we are striving to keep auto-deleverage liquidations to an absolute minimum.</div>
                        <div className="rest-row3-col1-div1">Available in: 
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-94sbqg"><path d="M6 2h15v17a2 2 0 01-2 2H4l2-2V2z" fill="url(#futures-g_svg__paint0_linear)"></path><path d="M4 21a2 2 0 002-2v-7H2v7a2 2 0 002 2zM9 16h9v2H9v-2zM18 5v7.5l-3.043-3.043L10.414 14 9 12.586l4.543-4.543L10.5 5H18z" fill="#76808F"></path><defs><linearGradient id="futures-g_svg__paint0_linear" x1="12.5" y1="21" x2="12.5" y2="2" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient></defs></svg>
                                Futures
                            </button>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-94sbqg"><path d="M6 2h15v17a2 2 0 01-2 2H4l2-2V2z" fill="url(#futures-g_svg__paint0_linear)"></path><path d="M4 21a2 2 0 002-2v-7H2v7a2 2 0 002 2zM9 16h9v2H9v-2zM18 5v7.5l-3.043-3.043L10.414 14 9 12.586l4.543-4.543L10.5 5H18z" fill="#76808F"></path><defs><linearGradient id="futures-g_svg__paint0_linear" x1="12.5" y1="21" x2="12.5" y2="2" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient></defs></svg>
                                Margin
                            </button>
                        </div>
                    </div>
                    <div className="rest-row3-col2">
                        <img src={price3}/>
                    </div>
                </div>

                <div className="rest-row3">
                    <div className="rest-row3-col1">
                        <h2>Auto-Deleverage Liquidation Indicator</h2>
                        <div className="rest-row3-col1-div">All users have access to the Auto-Deleverage Liquidation (ADL) indicator, a tool designed to show a user’s position in the auto-deleverage liquidation queue.</div>
                        <div className="rest-row3-col1-div">The ADL indicator will indicate a position’s queue from lowest priority to highest priority. If all lights are lit, in the event of a liquidation, the position may be reduced. With the ADL indicator, users who are at risk of auto-deleverage liquidations could prevent it from happening by reducing their leverage.</div>
                        <div className="rest-row3-col1-div1">Available in: 
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-94sbqg"><path d="M6 2h15v17a2 2 0 01-2 2H4l2-2V2z" fill="url(#futures-g_svg__paint0_linear)"></path><path d="M4 21a2 2 0 002-2v-7H2v7a2 2 0 002 2zM9 16h9v2H9v-2zM18 5v7.5l-3.043-3.043L10.414 14 9 12.586l4.543-4.543L10.5 5H18z" fill="#76808F"></path><defs><linearGradient id="futures-g_svg__paint0_linear" x1="12.5" y1="21" x2="12.5" y2="2" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient></defs></svg>
                                Futures
                            </button>
                        </div>
                    </div>
                    <div className="rest-row3-col2">
                        <img src={price4}/>
                    </div>
                </div>

                <div className="rest-row3">
                    <div className="rest-row3-col1">
                        <h2>Binance Support Articles</h2>
                        <div className="rest-row3-col1-div">Binance FAQ pages are one of the most comprehensive and concise crypto trading resources available on the web. The FAQ articles cover a vast range of fundamental and advanced topics comprising everything from the basics of crypto futures trading and Profit &amp; Loss calculations and advanced trading features and more. They are also user-friendly and easy to understand, even for novice users. Binance FAQ topics are categorized in a playlist, allowing users to search for related topics quickly and easily. For more information on the Binance FAQ playlist, <a href="#">click here</a>.</div>
                        <div className="rest-row3-col1-div1">Available in: 
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-94sbqg"><path d="M6 2h15v17a2 2 0 01-2 2H4l2-2V2z" fill="url(#futures-g_svg__paint0_linear)"></path><path d="M4 21a2 2 0 002-2v-7H2v7a2 2 0 002 2zM9 16h9v2H9v-2zM18 5v7.5l-3.043-3.043L10.414 14 9 12.586l4.543-4.543L10.5 5H18z" fill="#76808F"></path><defs><linearGradient id="futures-g_svg__paint0_linear" x1="12.5" y1="21" x2="12.5" y2="2" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient></defs></svg>
                                Futures
                            </button>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-94sbqg"><path d="M6 2h15v17a2 2 0 01-2 2H4l2-2V2z" fill="url(#futures-g_svg__paint0_linear)"></path><path d="M4 21a2 2 0 002-2v-7H2v7a2 2 0 002 2zM9 16h9v2H9v-2zM18 5v7.5l-3.043-3.043L10.414 14 9 12.586l4.543-4.543L10.5 5H18z" fill="#76808F"></path><defs><linearGradient id="futures-g_svg__paint0_linear" x1="12.5" y1="21" x2="12.5" y2="2" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient></defs></svg>
                                Margin
                            </button>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-94sbqg"><path d="M6 2h15v17a2 2 0 01-2 2H4l2-2V2z" fill="url(#futures-options-g_svg__paint0_linear)"></path><path d="M4 21a2 2 0 002-2v-7H2v7a2 2 0 002 2zM9.5 19h2V7.5H14L10.5 4 7 7.5h2.5V19zM17.5 4.5h-2V16H13l3.5 3.5L20 16h-2.5V4.5z" fill="#76808F"></path><defs><linearGradient id="futures-options-g_svg__paint0_linear" x1="12.5" y1="21" x2="12.5" y2="2" gradientUnits="userSpaceOnUse"><stop offset="0.333" stop-color="#F0B90B"></stop><stop offset="1" stop-color="#FBDA3C"></stop></linearGradient></defs></svg>
                                Options
                            </button>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-94sbqg"><path fill-rule="evenodd" clip-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10zm-10 7l6-6H6l6 6z" fill="url(#futures-leveraged-token-g_svg__paint0_linear)"></path><path d="M18 11l-6-6-6 6h12zM18 13l-6 6-6-6h12z" fill="#76808F"></path><defs><linearGradient id="futures-leveraged-token-g_svg__paint0_linear" x1="12" y1="22" x2="12" y2="2" gradientUnits="userSpaceOnUse"><stop offset="0.333" stop-color="#F0B90B"></stop><stop offset="1" stop-color="#FBDA3C"></stop></linearGradient></defs></svg>
                                Leveraged Tokens
                            </button>
                        </div>
                    </div>
                    <div className="rest-row3-col2">
                        <img src={price5}/>
                    </div>
                </div>

                <div className="rest-row3">
                    <div className="rest-row3-col1">
                        <h2>User-Generated Content</h2>
                        <div className="rest-row3-col1-div">What’s more? We have also compiled a list of educational videos and tutorials created by the best content creators on Binance. These videos and tutorials cover a broad range of topics from the basics of how to place orders on Binance Futures to advanced topics such as margin modes. Check out the videos created by our fellow Binancians on <a href='#'>For Binancians, By Binancians</a>.</div>
                        <div className="rest-row3-col1-div1">Available in: 
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-94sbqg"><path d="M6 2h15v17a2 2 0 01-2 2H4l2-2V2z" fill="url(#futures-g_svg__paint0_linear)"></path><path d="M4 21a2 2 0 002-2v-7H2v7a2 2 0 002 2zM9 16h9v2H9v-2zM18 5v7.5l-3.043-3.043L10.414 14 9 12.586l4.543-4.543L10.5 5H18z" fill="#76808F"></path><defs><linearGradient id="futures-g_svg__paint0_linear" x1="12.5" y1="21" x2="12.5" y2="2" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient></defs></svg>
                                Futures
                            </button>
                        </div>
                    </div>
                    <div className="rest-row3-col2">
                        <Swiper
                            spaceBetween={10}
                            centeredSlides={true}
                            pagination={{
                            clickable: true,
                            }}
                            autoplay={{
                                delay: 2800,
                                disableOnInteraction: false,
                                }}
                            modules={[  Autoplay, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide><img src={price6}/></SwiperSlide>
                            <SwiperSlide><img src={price7}/></SwiperSlide>
                        </Swiper>
                    </div>
                </div>

                <div className="rest-row3">
                    <div className="rest-row3-col1">
                        <h2>User-Generated Content</h2>
                        <div className="rest-row3-col1-div">What’s more? We have also compiled a list of educational videos and tutorials created by the best content creators on Binance. These videos and tutorials cover a broad range of topics from the basics of how to place orders on Binance Futures to advanced topics such as margin modes. Check out the videos created by our fellow Binancians on <a href='#'>For Binancians, By Binancians</a>.</div>
                        <div className="rest-row3-col1-div1">Available in: 
                        <button>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-94sbqg"><path d="M6 2h15v17a2 2 0 01-2 2H4l2-2V2z" fill="url(#futures-g_svg__paint0_linear)"></path><path d="M4 21a2 2 0 002-2v-7H2v7a2 2 0 002 2zM9 16h9v2H9v-2zM18 5v7.5l-3.043-3.043L10.414 14 9 12.586l4.543-4.543L10.5 5H18z" fill="#76808F"></path><defs><linearGradient id="futures-g_svg__paint0_linear" x1="12.5" y1="21" x2="12.5" y2="2" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient></defs></svg>
                                Futures
                            </button>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-94sbqg"><path d="M6 2h15v17a2 2 0 01-2 2H4l2-2V2z" fill="url(#futures-g_svg__paint0_linear)"></path><path d="M4 21a2 2 0 002-2v-7H2v7a2 2 0 002 2zM9 16h9v2H9v-2zM18 5v7.5l-3.043-3.043L10.414 14 9 12.586l4.543-4.543L10.5 5H18z" fill="#76808F"></path><defs><linearGradient id="futures-g_svg__paint0_linear" x1="12.5" y1="21" x2="12.5" y2="2" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient></defs></svg>
                                Margin
                            </button>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-94sbqg"><path d="M6 2h15v17a2 2 0 01-2 2H4l2-2V2z" fill="url(#futures-options-g_svg__paint0_linear)"></path><path d="M4 21a2 2 0 002-2v-7H2v7a2 2 0 002 2zM9.5 19h2V7.5H14L10.5 4 7 7.5h2.5V19zM17.5 4.5h-2V16H13l3.5 3.5L20 16h-2.5V4.5z" fill="#76808F"></path><defs><linearGradient id="futures-options-g_svg__paint0_linear" x1="12.5" y1="21" x2="12.5" y2="2" gradientUnits="userSpaceOnUse"><stop offset="0.333" stop-color="#F0B90B"></stop><stop offset="1" stop-color="#FBDA3C"></stop></linearGradient></defs></svg>
                                Options
                            </button>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-94sbqg"><path fill-rule="evenodd" clip-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10zm-10 7l6-6H6l6 6z" fill="url(#futures-leveraged-token-g_svg__paint0_linear)"></path><path d="M18 11l-6-6-6 6h12zM18 13l-6 6-6-6h12z" fill="#76808F"></path><defs><linearGradient id="futures-leveraged-token-g_svg__paint0_linear" x1="12" y1="22" x2="12" y2="2" gradientUnits="userSpaceOnUse"><stop offset="0.333" stop-color="#F0B90B"></stop><stop offset="1" stop-color="#FBDA3C"></stop></linearGradient></defs></svg>
                                Leveraged Tokens
                            </button>
                        </div>
                    </div>
                    <div className="rest-row3-col2">
                        <Swiper
                            spaceBetween={10}
                            centeredSlides={true}
                            pagination={{
                            clickable: true,
                            }}
                            autoplay={{
                                delay: 2800,
                                disableOnInteraction: false,
                                }}
                            modules={[  Autoplay, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide><img src={price8}/></SwiperSlide>
                            <SwiperSlide><img src={price9}/></SwiperSlide>
                        </Swiper>
                    </div>
                </div>

                <div className="rest-row5">
                    <div className="rest-row5-col1"><img src={respon1}/></div>
                    <div className="rest-row5-col2">
                        <h3>You may not be suited for trading if you are:</h3>
                        <ul className="rest-row5-col3">
                            <li>Finding it difficult to stop or reduce your trading activities</li>
                            <li>Feeling stressed or irritated when a friend or family member suggests you stop or reduce your trading activities</li>
                            <li>Having negative thoughts when the market moves against your trades</li>
                            <li>Not taking responsibility to understand your own financial situation</li>
                            <li>Not taking the time to read and familiarise yourself with our products and services and terms of use</li>
                            <li>Trading with funds beyond your means</li>
                        </ul>
                        <div className="rest-row5-col3">If you have questions or are concerned about your ability to trade responsibly, please contact us at Binance Support.</div>
                    </div>
                </div>

                </div>


                <div className="rest-row6">
                    <h2>Binance Takes Responsible Trading Seriously, and You Should Too.</h2>
                    <button>Learn More</button>
                </div>
                
                <div className="rest-row7">
                    <div className="rest-row6">
                        <h2>Start Trading Crypto Futures Now</h2>
                        <div className="rest-row6-btn">
                            <button><Link to="/fundin-history-graph1" style={{textDecoration: 'none', color: 'white'}}>Open Futures Account</Link></button>
                            <button><Link to="/fundin-history-graph2" style={{textDecoration: 'none', color: 'white'}}>Trade Now</Link></button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Resptrade;