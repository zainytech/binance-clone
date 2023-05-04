import React, { useState } from "react";
import './Launchpad.css';

import launch from './Img/launch.png';
import hft from './Img/hft.png';
import over3 from './Img/over3.png';
import ove12 from './Img/ove12.png';
import launch1 from './Img/launch1.png';
import launch2 from './Img/launch2.png';
import launch3 from './Img/launch3.png';
import launch4 from './Img/launch4.png';
import launch5 from './Img/launch5.png';
import launch6 from './Img/launch6.png';
import launch7 from './Img/launch7.png';

const Launchpad = () => {
    const [showtext, setShowtext] = useState(false)
    return(
        <>
            <div className="launch">
                <h2>Binance's Token Launch Platform</h2>
                <div className="launch-row1">Buy or earn new tokens directly on Binance</div>
                <div className="launch-row2">
                    <div className="launch-row2-col">
                        <div>$ 0</div>
                        <div>Current Funds Locked</div>
                    </div>
                    <div className="launch-row2-col">
                        <div>$ 111,914,415</div>
                        <div>Total Funds Raised</div>
                    </div>
                    <div className="launch-row2-col">
                        <div>66</div>
                        <div>Projects Launched</div>
                    </div>
                    <div className="launch-row2-col">
                        <div>3,750,985</div>
                        <div>All-time Unique Participants</div>
                    </div>
                </div>
                <h3 className="launch-row5">Launchpad</h3>
                <div className="launch-row4">
                    <div className="launch-row4-col1"><img src={launch}/></div>
                    <div className="launch-row4-col2">
                        <div className="launch-row4-col2-row1">
                            <h6>Hooked Protocol</h6>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-1g6lkvi"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-6.66L8.49 7.41l1.26.72L12 6.87l2.25 1.26 1.26-.72L12 5.34zm2.25 3.87l1.26.72v1.53l-2.25 1.26v2.61l-1.26.72-1.26-.72v-2.61l-2.25-1.26V9.93l1.26-.72L12 10.47l2.25-1.26zm1.26 3.33v1.53l-1.26.72v-1.53l1.26-.72zm-1.35 3.24l2.25-1.26V12l1.26-.81v4.05l-3.51 2.07v-1.53zm2.25-6.39l-1.26-.72 1.26-.72 1.26.72v1.53l-1.26.72V9.39zm-5.67 8.55v-1.53l1.26.72 1.26-.72v1.53l-1.26.72-1.26-.72zm-.99-3.15l-1.26-.72v-1.53l1.26.72v1.53zM12 9.39l-1.26-.72L12 7.95l1.26.72-1.26.72zm-3.15-.72l-1.26.72v1.53l-1.26-.72V8.67l1.26-.72 1.26.72zm-2.52 2.61l1.26.72v2.61l2.25 1.26v1.53l-3.51-2.07v-4.05z" fill="currentColor"></path></svg>
                                SUBSCRIPTION
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-t4w8lb"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 21a9 9 0 100-18 9 9 0 000 18zM10.75 8.5V6h2.5v2.5h-2.5zm0 9.5v-7h2.5v7h-2.5z" fill="currentColor"></path></svg>
                            </button>
                        </div>
                        <div>A Web3 Gamified Social Learning Platform</div>
                        <div className="launch-row4-col3">
                            <div className="launch-row4-col3-row">
                                <div className="launch-row4-col3-row1">
                                    <div>Tokens Offered</div>
                                    <div>25,000,000.0000 HOOK</div>
                                </div>
                                <div className="launch-row4-col3-row1">
                                    <div>Sale Price</div>
                                    <div>1 HOOK = 0.0003381 BNB</div>
                                </div>
                            </div>
                            <div className="launch-row4-col3-row">
                                <div className="launch-row4-col3-row1">
                                    <div>Participants</div>
                                    <div>114,772</div>
                                </div>
                                <div className="launch-row4-col3-row1">
                                    <div>Total committed</div>
                                    <div>9,010,765.2954 BNB</div>
                                </div>
                            </div>
                        </div>
                        <div className="launch-row4-col4">
                            <div>End time:</div>
                            <div>2022-12-01</div>
                        </div>
                    </div>
                </div>
                <h3 className="launch-row5">Launchpool</h3>
                <div className="launch-row6">
                    <div className="launch-row6-col1">
                        <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-i0b5kf"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-4.934-4.483L10.2 13.383l-2.716-2.716-1.768 1.767 4.484 4.484 7.634-7.634-1.768-1.767z" fill="currentColor"></path></svg>
                        COMPLETED</button>
                        <div className="launch-row6-col1-row1"><img src={hft}/><div>HFT</div></div>
                        <div className="launch-row6-col1-row2">Hashflow, A Decentralized Exchange Connecting Traders with Professional Market Makers.</div>
                        <div className="launch-row6-col1-row3">
                            <div>Total Rewards:</div>
                            <div>15,000,000.00</div>
                        </div>
                        <div className="launch-row6-col1-row3">
                            <div>Farming Period:</div>
                            <div>30 day/s</div>
                        </div>
                        <div className="launch-row6-col1-row4">
                            <div>Session end date:</div>
                            <div>2022-12-01</div>
                        </div>
                    </div>

                    <div  className="launch-row6-col2">
                        <div className="launch-row6-col2-row1"><img src={ove12}/><div>BUSD Pool</div></div>
                        <div className="launch-row6-col2-row2">Stake BUSD, Earn HFT</div>
                        <div className="launch-row6-col2-row3"><img src={ove12}/><img src={hft}/></div>
                        <div className="launch-row6-col2-row4">
                            <div>ARY:</div>
                            <div>1.68%</div>
                        </div>
                        <div className="launch-row6-col2-row4">
                            <div>Participants</div>
                            <div>168,281</div>
                        </div>
                        <div className="launch-row6-col2-row4">
                            <div>Total Staked</div>
                            <div>2,773,885,124.1073 BUSD</div>
                        </div>
                    </div>

                    <div  className="launch-row6-col2">
                        <div className="launch-row6-col2-row1"><img src={over3}/><div>BNB Pool</div></div>
                        <div className="launch-row6-col2-row2">Stake BNB, Earn HFT</div>
                        <div className="launch-row6-col2-row3"><img src={over3}/><img src={hft}/></div>
                        <div className="launch-row6-col2-row4">
                            <div>APY:</div>
                            <div>2.65%</div>
                        </div>
                        <div className="launch-row6-col2-row4">
                            <div>Participants</div>
                            <div>201,698</div>
                        </div>
                        <div className="launch-row6-col2-row4">
                            <div>Total Staked</div>
                            <div>10,537,068.9197 BNB</div>
                        </div>
                    </div>

                    <div  className="launch-row6-col3"></div>
                </div>
                <div className="launch-row7">
                    <div className="launch-row7-col1">
                        <h4>Launch a project on Binance now!</h4>
                        <div>Binance Launchpad and Launchpool are platforms that help and advise project teams on how to best issue and launch their token. We provide a full service offering starting from advisory services
                        { showtext ? <div>from before the token is even issued, to post-listing and marketing support. Our goal is to allow project teams to focus on their project development and continue building products, while we handle the marketing, exposure and initial user base. We look for strong teams with a unique and innovative vision in the crypto space. If you think you are one of these projects, apply below!</div>
                        : null }
                        </div>
                        <button  className="launch-row6-btn1" onClick={()=>setShowtext(!showtext)}>View More</button>
                        <button className="launch-row6-btn2">Apply to Launch</button>
                    </div>
                    <div className="launch-row7-col2">
                        <div className="launch-row6-col2-img1"><img src={launch1}/></div>
                        <div className="launch-row6-col2-img3"><img src={launch2}/></div>
                        <div className="launch-row6-col2-img2"><img src={launch3}/></div>
                        <div className="launch-row6-col2-img1"><img src={launch4}/></div>
                        <div className="launch-row6-col2-img2"><img src={launch5}/></div>
                        <div className="launch-row6-col2-img4"><img src={launch6}/></div>
                        <div className="launch-row6-col2-img5"><img src={hft}/></div>
                        <div className="launch-row6-col2-img6"><img src={launch7}/></div>
                    </div>
                </div>
                <div className="launch-row8">
                    <h4>Why choose us?</h4>
                    <div className="launch-row8-col1">
                        <div className="launch-row8-col1-row1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none" class="css-auxgy3"><circle cx="48" cy="48" r="40" fill="#E6E8EA"></circle><path d="M82 80.5l4.5 4.5 4.5-4.5-4.5-4.5-4.5 4.5zM5 22l3 3 3-3-3-3-3 3zM85 11h3V8h-3v3z" fill="#E6E8EA"></path><path d="M16 48c0 17.673 14.327 32 32 32 17.673 0 32-14.327 32-32 0-17.673-14.327-32-32-32-17.673 0-32 14.327-32 32z" fill="url(#exposure-light_svg__paint0_linear)"></path><path d="M48 16c-17.673 0-32 14.327-32 32 0 17.673 14.327 32 32 32V16z" fill="#76808F"></path><path d="M77.704 59.926A31.913 31.913 0 0080 48c0-1.632-.122-3.236-.358-4.802L76.444 40h-5.333l-4.444 4.444v5.334l2.666 2.666h5.334v4.445l3.037 3.037z" fill="url(#exposure-light_svg__paint1_linear)"></path><path d="M25.478 70.733l4.744-4.066V63.11h-2.666v-2.666l-2.667-2.667v4.444l-2.667-2.666V56h-2.666l-1.972 1.971a32.002 32.002 0 007.894 12.762z" fill="url(#exposure-light_svg__paint2_linear)"></path><path d="M74.611 30.222a31.935 31.935 0 012.487 4.445h-3.32v2.666h-3.556v-2.666L72.89 32l-1.778-1.778h3.5z" fill="url(#exposure-light_svg__paint3_linear)"></path><path d="M70.133 24.889c.65.622 1.272 1.27 1.867 1.944v.723h-6.222l2.666-2.667h1.69z" fill="url(#exposure-light_svg__paint4_linear)"></path><path d="M57.404 17.404a31.888 31.888 0 019.388 4.692l-5.459 5.46v-6.223l-3.929-3.929z" fill="url(#exposure-light_svg__paint5_linear)"></path><path d="M22.669 28.445A32.192 32.192 0 0126.833 24h8.723v-3.555H40L43.556 24H48v-2.667h2.667l1.777 1.778-2.666 2.667h7.11v2.667l-2.666 2.666h-4.444l-5.334 6.222v4.445l-2.666-2.667h-3.556v5.334h3.556v7.11l-4.445-4.444h-3.555v-5.333L31.11 39.11h-3.555V32.89L32 28.444h-9.331z" fill="url(#exposure-light_svg__paint6_linear)"></path><path d="M18.667 35.19c.208-.476.428-.947.66-1.412h2.895v3.555l-3.555 3.556V35.19z" fill="url(#exposure-light_svg__paint7_linear)"></path><path d="M16 48h3.556v-3.556h-3.36A32.339 32.339 0 0016 48z" fill="url(#exposure-light_svg__paint8_linear)"></path><path d="M45.333 48l-3.555 3.556v3.555L48 61.333V72l5.333 5.333V72l4.445-4.444V64l3.555-3.556v-5.333H56.89v-3.555h-3.556L49.778 48h-4.445z" fill="url(#exposure-light_svg__paint9_linear)"></path><path d="M45.333 44.444L48 41.779h2.667v2.666h-5.334z" fill="url(#exposure-light_svg__paint10_linear)"></path><path d="M34.667 67.556L30.222 72h4.445v-4.444z" fill="url(#exposure-light_svg__paint11_linear)"></path><path d="M22.222 50.667L27.556 56v-5.333h-5.334z" fill="url(#exposure-light_svg__paint12_linear)"></path><path d="M56.889 24l-4.445-4.444h4.445V24z" fill="url(#exposure-light_svg__paint13_linear)"></path><path d="M45.333 21.333v-3.555h-3.555l3.555 3.555z" fill="url(#exposure-light_svg__paint14_linear)"></path><path d="M48 24h-4.444L40 20.445h-4.444V24h-8.723a32.192 32.192 0 00-4.164 4.445H32l-4.444 4.444v6.222h3.555l2.667 2.667v5.333h3.555l4.445 4.445v3.555L48 61.333V48h-2.667l-3.555 3.556v-7.111h-3.556V39.11h3.556l2.666 2.667v-4.445L48 33.185V24z" fill="#F0B90B"></path><path d="M48 41.778l-2.667 2.666H48v-2.666zM30.222 66.667l-4.744 4.066a32.002 32.002 0 01-7.894-12.762l1.972-1.97h2.666v3.555l2.667 2.666v-4.444l2.667 2.666v2.667h2.666v3.556zM18.667 35.19c.208-.476.428-.947.66-1.412h2.895v3.555l-3.555 3.556V35.19zM19.556 48H16c0-1.202.066-2.388.195-3.556h3.36V48zM34.667 67.556L30.222 72h4.445v-4.444zM27.556 56l-5.334-5.333h5.334V56zM45.333 17.778v3.555l-3.555-3.555h3.555z" fill="#F0B90B"></path><defs><linearGradient id="exposure-light_svg__paint0_linear" x1="48" y1="16" x2="48" y2="80" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient><linearGradient id="exposure-light_svg__paint1_linear" x1="48" y1="77.333" x2="48" y2="17.404" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient><linearGradient id="exposure-light_svg__paint2_linear" x1="48" y1="77.333" x2="48" y2="17.404" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient><linearGradient id="exposure-light_svg__paint3_linear" x1="48" y1="77.333" x2="48" y2="17.404" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient><linearGradient id="exposure-light_svg__paint4_linear" x1="48" y1="77.333" x2="48" y2="17.404" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient><linearGradient id="exposure-light_svg__paint5_linear" x1="48" y1="77.333" x2="48" y2="17.404" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient><linearGradient id="exposure-light_svg__paint6_linear" x1="48" y1="77.333" x2="48" y2="17.404" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient><linearGradient id="exposure-light_svg__paint7_linear" x1="48" y1="77.333" x2="48" y2="17.404" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient><linearGradient id="exposure-light_svg__paint8_linear" x1="48" y1="77.333" x2="48" y2="17.404" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient><linearGradient id="exposure-light_svg__paint9_linear" x1="48" y1="77.333" x2="48" y2="17.404" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient><linearGradient id="exposure-light_svg__paint10_linear" x1="48" y1="77.333" x2="48" y2="17.404" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient><linearGradient id="exposure-light_svg__paint11_linear" x1="48" y1="77.333" x2="48" y2="17.404" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient><linearGradient id="exposure-light_svg__paint12_linear" x1="48" y1="77.333" x2="48" y2="17.404" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient><linearGradient id="exposure-light_svg__paint13_linear" x1="48" y1="77.333" x2="48" y2="17.404" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient><linearGradient id="exposure-light_svg__paint14_linear" x1="48" y1="77.333" x2="48" y2="17.404" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient></defs></svg>
                            <h6>Exposure</h6>
                            <div>Get exposure to the millions of Binance users around the world.</div>
                        </div>
                        <div className="launch-row8-col1-row1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-auxgy3"><path d="M21.5 8.5a6 6 0 11-12 0 6 6 0 0112 0z" fill="#76808F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 9.5a6 6 0 110 12 6 6 0 010-12zm0 8.5L6 15.5 8.5 13l2.5 2.5L8.5 18z" fill="url(#spot-g_svg__paint0_linear)"></path><path d="M9 3H3v6l6-6z" fill="url(#spot-g_svg__paint1_linear)"></path><path d="M15 21h6v-6l-6 6z" fill="url(#spot-g_svg__paint2_linear)"></path><defs><linearGradient id="spot-g_svg__paint0_linear" x1="8.5" y1="21.5" x2="8.5" y2="9.5" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient><linearGradient id="spot-g_svg__paint1_linear" x1="6" y1="9" x2="6" y2="3" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient><linearGradient id="spot-g_svg__paint2_linear" x1="18" y1="21" x2="18" y2="15" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient></defs></svg>
                            <h6>Liquidity</h6>
                            <div>Projects that are launched on Launchpad or Launchpool will be listed and have world-class liquidity in multiple trading pairs.</div>
                        </div>
                        <div className="launch-row8-col1-row1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none" class="css-auxgy3"><path d="M20 80h56V60.5C76 54.149 70.777 49 64.333 49h-6.222L48 58.967 37.889 49h-6.222C25.223 49 20 54.149 20 60.5V80z" fill="url(#team-light_svg__paint0_linear)"></path><path d="M3 77h15V52h-5.217C7.38 52 3 56.477 3 62v15z" fill="url(#team-light_svg__paint1_linear)"></path><path d="M3 80h15V52h-5.217C7.38 52 3 56.477 3 62v18z" fill="#E6E8EA"></path><path d="M3 80h15V52h-5.217C7.38 52 3 56.477 3 62v18z" fill="url(#team-light_svg__paint2_linear)"></path><path d="M93 80H78V52h5.217C88.62 52 93 56.477 93 62v18z" fill="url(#team-light_svg__paint3_linear)"></path><path d="M38.1 38.9c-5.467-5.468-5.467-14.332 0-19.8 5.468-5.467 14.332-5.467 19.8 0 5.467 5.468 5.467 14.332 0 19.8-5.468 5.467-14.332 5.467-19.8 0z" fill="url(#team-light_svg__paint4_linear)"></path><path d="M86 21.5l3.5 3.5 3.5-3.5-3.5-3.5-3.5 3.5zM25 8l3 3 3-3-3-3-3 3zM2 44l2 2 2-2-2-2-2 2zM14.636 43.364a9 9 0 1112.728-12.728 9 9 0 01-12.728 12.728z" fill="#E6E8EA"></path><path d="M14.636 43.364a9 9 0 1112.728-12.728 9 9 0 01-12.728 12.728zM68.636 43.364a9 9 0 1112.728-12.728 9 9 0 01-12.728 12.728z" fill="#E6E8EA"></path><path d="M48 59L38 49v31h20V49L48 59z" fill="url(#team-light_svg__paint5_linear)"></path><defs><linearGradient id="team-light_svg__paint0_linear" x1="48" y1="49" x2="48" y2="80" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient><linearGradient id="team-light_svg__paint1_linear" x1="18" y1="76.969" x2="3.191" y2="76.969" gradientUnits="userSpaceOnUse"><stop stop-color="#474D57"></stop><stop offset="1" stop-color="#0B0E11"></stop></linearGradient><linearGradient id="team-light_svg__paint2_linear" x1="10.5" y1="52" x2="10.5" y2="80" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient><linearGradient id="team-light_svg__paint3_linear" x1="85.5" y1="52" x2="85.5" y2="80" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient><linearGradient id="team-light_svg__paint4_linear" x1="48" y1="43" x2="48" y2="15" gradientUnits="userSpaceOnUse"><stop offset="0.333" stop-color="#F0B90B"></stop><stop offset="1" stop-color="#FBDA3C"></stop></linearGradient><linearGradient id="team-light_svg__paint5_linear" x1="48" y1="80" x2="48" y2="49" gradientUnits="userSpaceOnUse"><stop offset="0.333" stop-color="#F0B90B"></stop><stop offset="1" stop-color="#FBDA3C"></stop></linearGradient></defs></svg>
                            <h6>Token Distribution</h6>
                            <div>Your token will immediately be distributed to a large user base that hold your token.</div>
                        </div>
                        <div className="launch-row8-col1-row1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none" class="css-auxgy3"><path fill="#E6E8EA" d="M10 10h14v14H10zM72 72h14v14H72z"></path><path transform="matrix(1 0 0 -1 10 68)" fill="url(#solutions-light_svg__paint0_linear)" d="M0 0h18v40H0z"></path><path transform="matrix(1 0 0 -1 58 68)" fill="url(#solutions-light_svg__paint1_linear)" d="M0 0h28v40H0z"></path><path transform="matrix(0 -1 -1 0 68 86)" fill="url(#solutions-light_svg__paint2_linear)" d="M0 0h18v40H0z"></path><path transform="matrix(0 -1 -1 0 68 28)" fill="url(#solutions-light_svg__paint3_linear)" d="M0 0h18v40H0z"></path><path d="M53 18H43v10H28v15H18v10h10v15h15v10h10V68h15V53H58V43h10V28H53V18z" fill="url(#solutions-light_svg__paint4_linear)"></path><path d="M74 17l5 5 5-5-5-5-5 5zM16 84.5l3.5 3.5 3.5-3.5-3.5-3.5-3.5 3.5z" fill="#E6E8EA"></path><defs><linearGradient id="solutions-light_svg__paint0_linear" x1="9" y1="0" x2="9" y2="40" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient><linearGradient id="solutions-light_svg__paint1_linear" x1="14" y1="0" x2="14" y2="40" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient><linearGradient id="solutions-light_svg__paint2_linear" x1="9" y1="0" x2="9" y2="40" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient><linearGradient id="solutions-light_svg__paint3_linear" x1="9" y1="0" x2="9" y2="40" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient><linearGradient id="solutions-light_svg__paint4_linear" x1="43" y1="78" x2="43" y2="18" gradientUnits="userSpaceOnUse"><stop stop-color="#F0B90B"></stop><stop offset="1" stop-color="#F8D33A"></stop></linearGradient></defs></svg>
                            <h6>Future Synergy</h6>
                            <div>Project will receive extensive support and advice even after listing, having access to all areas of the Binance ecosystem.</div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
}

export default Launchpad;