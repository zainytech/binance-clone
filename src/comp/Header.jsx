import React, { useState } from 'react'
import './Headernav.css';
import { Link, Router } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import Dashboard from "./Dashboard";
import {AiOutlineMenu} from 'react-icons/ai';
import {RxCross1} from 'react-icons/rx';


import logo from "../assets/logo.png";
import Dashboard3 from '../Components/Dashboard3';
import images from '../Components/Img/images.png';
import reover3 from '../Components/Img/reover3.png';
import reover32 from '../Components/Img/reover32.png';
import nav1 from '../Components/Img/navbinance9.png';
import nav2 from '../Components/Img/navbinance10.png';
import nav3 from '../Components/Img/navbinance12.png';
import nav4 from '../Components/Img/navbinance1.png';

import nav5 from '../Components/Img/navbinance2.png';
import nav6 from '../Components/Img/navbinance8.png';
import nav7 from '../Components/Img/navbinance4.png';
import nav8 from '../Components/Img/navbinance3.png';
import nav9 from '../Components/Img/navbinance6.png';
import nav10 from '../Components/Img/navbinance7.png';
import nav11 from '../Components/Img/navbinance27.png';
import nav12 from '../Components/Img/navbinance28.png';
import nav13 from '../Components/Img/navbinance26.png';

import nav14 from '../Components/Img/navbinance30.png';
import nav15 from '../Components/Img/navbinance29.png';
import nav16 from '../Components/Img/navbinance23.png';
import nav17 from '../Components/Img/navbinance24.png';
import nav18 from '../Components/Img/navbinance25.png';
import nav19 from '../Components/Img/navbinance22.png';

import fbinance1 from '../Components/Img/fbinance1.png';
import fbinance2 from '../Components/Img/fbinance2.png';
import fbinance3 from '../Components/Img/fbinance3.png';

import iconance15 from '../Components/Img/iconance15.png';
import iconance17 from '../Components/Img/iconance17.png';
import iconance16 from '../Components/Img/iconance16.png';
import iconance11 from '../Components/Img/iconance11.png';
import iconance13 from '../Components/Img/iconance13.png';
import iconance2 from '../Components/Img/iconance2.png';
import iconance10 from '../Components/Img/iconance10.png';
import iconance1 from '../Components/Img/iconance1.png';
import iconance6 from '../Components/Img/iconance6.png';
import iconance5 from '../Components/Img/iconance5.png';
import navbinance29 from '../Components/Img/navbinance29.png';
import iconance14 from '../Components/Img/iconance14.png';


const Header = () => {

    const [dropdown, setDropdown] = useState();
	const [dropdown1, setDropdown1] = useState();
	const [dropdown2, setDropdown2] = useState();
	const [dropdown3, setDropdown3] = useState();
	const [dropdown4, setDropdown4] = useState();
	const [dropdown5, setDropdown5] = useState();
	const [dropdown6, setDropdown6] = useState();
    const [dropdown7, setDropdown7] = useState();

    const [drop, setDrop] = useState();
    const [drop1, setDrop1] = useState();
    const [drop2, setDrop2] = useState();
    const [drop3, setDrop3] = useState();
    const [drop4, setDrop4] = useState();
    const [drop5, setDrop5] = useState();
    const [drop6, setDrop6] = useState();

	const [navbar, setNavbar] = useState(false);
    const [navbar2, setNavbar2] = useState(false);

	const handleMouseOver = () => {
		setDrop(true);
	  };
	
	  const handleMouseOut = () => {
		setDrop(false);
	  };


    return(
        <>
            <div className='navheader'>
                <div className='navheader-flex'>
                    <img src={logo} height="40px" width="80px" alt="logo" className='navheader-flex-img'/>
                    
                    <div className='navbar'>
                        {/* <div className='navbar-name'>
                            <NavLink to="/Dashboard"> Dashboard3</NavLink>
                        </div>  */}
                        
                        <div className='navbar-name'>
                            <NavLink to="/dashboard3"> Dashboard </NavLink>
                        </div> 
                        
                        <div className='navbuy-crypto' onMouseOver={handleMouseOver} onMouseLeave={handleMouseOut} >
                            Buy Crypto  { drop ? <i class="fa-solid fa-caret-up"></i> : <i class="fa-solid fa-caret-down"></i> }

                            { drop ? <>
                                    <div className='navbuy-crypto-downward' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                                        <Link to="/depositeFlat" style={{textDecoration: 'none', color: 'black'}}>
                                        <div className='navbuy-crypto-downward-row1'>
                                            <div className='navbuy-crypto-downward-row2'>
                                                <i class="fa-solid fa-building-columns"></i>
                                                <div>
                                                    <div>Bank Deposit</div>
                                                    <div className='navbuy-crypto-downward-div22'>Deposit EUR via SEPA or card</div>
                                                </div>
                                            </div>
                                            <i class="fa-solid fa-arrow-right"></i>
                                        </div></Link>

                                        
                                        <Link to="/depositFlat3" style={{textDecoration: 'none', color: 'black'}}>
                                        <div className='navbuy-crypto-downward-row1'>
                                            <div className='navbuy-crypto-downward-row2'>
                                                <i class="fa-solid fa-credit-card"></i>
                                                <div>
                                                    <div>Credit/Debit Card</div>
                                                    <div className='navbuy-crypto-downward-div22'>Buy crypto via Card, Apple Pay, Google Pay</div>
                                                </div>
                                            </div>
                                            <i class="fa-solid fa-arrow-right"></i>
                                        </div></Link>

                                        {/* change karna hai  */}
                                        <Link to="/DepositFlat5" style={{textDecoration: 'none', color: 'black'}}>
                                        <div className='navbuy-crypto-downward-row1'>
                                            <div className='navbuy-crypto-downward-row2'>
                                                <i class="fa-solid fa-wallet"></i>
                                                <div>
                                                    <div>Cash Balance</div>
                                                    <div className='navbuy-crypto-downward-div22'>Buy crypto with your EUR balance</div>
                                                </div>
                                            </div>
                                            <i class="fa-solid fa-arrow-right"></i>
                                        </div></Link>

                                        <Link to="/tradecomp" style={{textDecoration: 'none', color: 'black'}}>
                                        <div className='navbuy-crypto-downward-row1'>
                                            <div  className='navbuy-crypto-downward-row2'>
                                            <img src={nav4} className='navbuy-crypto-downward-img'/>
                                                <div>
                                                    <div>P2P Trading</div>
                                                    <div className='navbuy-crypto-downward-div22'>Bank transfer and 100+ students</div>
                                                </div>
                                            </div>
                                            <i class="fa-solid fa-arrow-right"></i>
                                        </div></Link>
                                    </div> 
                                </> : null}
                        </div>

                        <div className='navbar-name'>
                            <NavLink to="/market-favourites" style={{textDecoration: 'none'}}> Markets </NavLink>
                        </div>

                        <div className='navbuy-crypto' onMouseOver={()=>setDrop1(true)} onMouseOut={()=>setDrop1(false)}>
                            Trade { drop1 ? <i class="fa-solid fa-caret-up"></i> : <i class="fa-solid fa-caret-down"></i> }
                            { drop1 && 
                                    <div className='navbuy-crypto-downward1' onMouseOver={()=>setDrop1(true)} onMouseOut={()=>setDrop1(false)}>
                                    <Link to="/convert" style={{textDecoration: 'none', color:'black'}}>
                                        <div className='navbuy-crypto-downward-row1'>
                                        
                                            <div className='navbuy-crypto-downward-row2'>
                                                <img src={nav5} className='navbuy-crypto-downward-img'/>
                                                <div>
                                                    <div>Binance Convert</div>
                                                    <div className='navbuy-crypto-downward-div22'>The easiest way to trade</div>
                                                </div>
                                            </div>
                                            <i class="fa-solid fa-arrow-right"></i>
                                        </div>
                                    </Link>
                                    
                                    <Link to="/fundin-history-graph2" style={{textDecoration: 'none', color:'black'}}>
                                        <div className='navbuy-crypto-downward-row1'>
                                            <div className='navbuy-crypto-downward-row2'>
                                                <img src={nav6} className='navbuy-crypto-downward-img'/>
                                                <div>
                                                    <div>Spot</div>
                                                    <div className='navbuy-crypto-downward-div22'>Trade crypto with advanced tools</div>
                                                </div>
                                            </div>
                                            <i class="fa-solid fa-arrow-right"></i>
                                        </div>
                                    </Link>


                                    <Link to="/fundin-history-graph1" style={{textDecoration: 'none', color:'black'}}>
                                        <div className='navbuy-crypto-downward-row1'>
                                            <div className='navbuy-crypto-downward-row2'>
                                                <img src={nav7} className='navbuy-crypto-downward-img'/>
                                                <div>
                                                    <div>Margin</div>
                                                    <div className='navbuy-crypto-downward-div22'>Increase your profits with leaverage</div>
                                                </div>
                                            </div>
                                            <i class="fa-solid fa-arrow-right"></i>
                                        </div>
                                    </Link>
                                    
                                    <Link to="/strategy-trading" style={{textDecoration: 'none', color:'black'}}>   
                                        <div className='navbuy-crypto-downward-row1'>
                                            <div className='navbuy-crypto-downward-row2'>
                                                <img src={nav8} className='navbuy-crypto-downward-img'/>
                                                <div>
                                                    <div>Strategy Trading</div>
                                                    <div className='navbuy-crypto-downward-div22'>Trading made easy, trade like a pro</div>
                                                </div>
                                            </div>
                                            <i class="fa-solid fa-arrow-right"></i>
                                        </div></Link> 

                                        <Link to="/tradecomp" style={{textDecoration: 'none', color:'black'}}>
                                        <div className='navbuy-crypto-downward-row1'>
                                            <div className='navbuy-crypto-downward-row2'>
                                            <img src={nav4} className='navbuy-crypto-downward-img'/>
                                                <div>
                                                    <div>P2P</div>
                                                    <div className='navbuy-crypto-downward-div22'>Bank transfer and 100+ options</div>
                                                </div>
                                            </div>
                                            <i class="fa-solid fa-arrow-right"></i>
                                        </div></Link>

                                        <Link to="/swap" style={{textDecoration: 'none', color:'black'}}>
                                        <div className='navbuy-crypto-downward-row1'>
                                            <div className='navbuy-crypto-downward-row2'>
                                            <img src={nav9} className='navbuy-crypto-downward-img'/>
                                                <div>
                                                    <div>Swamp Farming</div>
                                                    <div className='navbuy-crypto-downward-div22'>Swamp to earn BNB</div>
                                                </div>
                                            </div>
                                            <i class="fa-solid fa-arrow-right"></i>
                                        </div></Link>

                                        <Link to="/real-time-funding-rate" style={{textDecoration: 'none', color:'black'}}>
                                        <div className='navbuy-crypto-downward-row1'>
                                            <div className='navbuy-crypto-downward-row2'>
                                            <img src={nav10} className='navbuy-crypto-downward-img'/>
                                                <div>
                                                    <div>Trade Info</div>
                                                    <div className='navbuy-crypto-downward-div22'>Upgrade your fan experience</div>
                                                </div>
                                            </div>
                                            <i class="fa-solid fa-arrow-right"></i>
                                        </div></Link>

                                        <Link to="/binance-otc" style={{textDecoration: 'none', color:'black'}}>
                                        <div className='navbuy-crypto-downward-row1'>
                                            <div className='navbuy-crypto-downward-row2'>
                                            <img src={nav6} className='navbuy-crypto-downward-img'/>
                                                <div>
                                                    <div>Binance OTC</div>
                                                    <div className='navbuy-crypto-downward-div22'>OTC liquidity and execution services</div>
                                                </div>
                                            </div>
                                            <i class="fa-solid fa-arrow-right"></i>
                                        </div></Link>
                                    </div> }
                        </div>

                        <div className='navbuy-crypto' onMouseOver={()=>setDrop2(true)} onMouseOut={()=>setDrop2(false)}>
                            Derivatives { drop2 ? <i class="fa-solid fa-caret-up"></i> : <i class="fa-solid fa-caret-down"></i> }
                            { drop2 && <>
                                    <div className='navbuy-crypto-downward2' onMouseOver={()=>setDrop2(true)} onMouseOut={()=>setDrop2(false)}>
                                        <Link to="/fundin-history-graph1" style={{textDecoration: 'none', color:'black'}}>
                                        <div className='navbuy-crypto-downward-row1'>
                                            <div className='navbuy-crypto-downward-row2'>
                                                <img src={nav11} className='navbuy-crypto-downward-img'/>
                                                <div>
                                                    <div>USDⓈ-M Futures</div>
                                                    <div className='navbuy-crypto-downward-div22'>Perpetual or Quarterly Contracts settled in USDT or BUSD</div>
                                                </div>
                                            </div>
                                            <i class="fa-solid fa-arrow-right"></i>
                                        </div></Link>

                                        <Link to="/fundin-history-graph2" style={{textDecoration: 'none', color:'black'}}>
                                        <div className='navbuy-crypto-downward-row1'>
                                            <div className='navbuy-crypto-downward-row2'>
                                            <img src={nav12} className='navbuy-crypto-downward-img'/>
                                                <div>
                                                    <div>COIN-M Futures</div>
                                                    <div className='navbuy-crypto-downward-div22'>Perpetual or Quarterly Contracts settled in Cryptocurrency</div>
                                                </div>
                                            </div>
                                            <i class="fa-solid fa-arrow-right"></i>
                                        </div></Link>

                                        {/* <div className='navbuy-crypto-downward-row1'>
                                            <div className='navbuy-crypto-downward-row2'>
                                            <img src={nav13} className='navbuy-crypto-downward-img'/>
                                                <div>
                                                    <div>Options</div>
                                                    <div className='navbuy-crypto-downward-div22'>Buy and Sell European-style Options.</div>
                                                </div>
                                            </div>
                                            <i class="fa-solid fa-arrow-right"></i>
                                        </div> */}

                                        <Link to="/binance-all-tokens" style={{textDecoration: 'none', color:'black'}}>
                                        <div className='navbuy-crypto-downward-row1'>
                                            <div className='navbuy-crypto-downward-row2'>
                                            <img src={nav14} className='navbuy-crypto-downward-img'/>
                                                <div>
                                                    <div>Leveraged Tokens</div>
                                                    <div className='navbuy-crypto-downward-div22'>Enjoy increased leverage without risk of liquidation</div>
                                                </div>
                                            </div>
                                            <i class="fa-solid fa-arrow-right"></i>
                                        </div></Link>

                                        <Link to="/strategy-trading" style={{textDecoration: 'none', color:'black'}}>
                                        <div className='navbuy-crypto-downward-row1'>
                                            <div className='navbuy-crypto-downward-row2'>
                                            <img src={nav15} className='navbuy-crypto-downward-img'/>
                                                <div>
                                                    <div>Leaderboard</div>
                                                    <div className='navbuy-crypto-downward-div22'>Exclusive ranking for Binance traders, follow top traders' strategies</div>
                                                </div>
                                            </div>
                                            <i class="fa-solid fa-arrow-right"></i>
                                        </div></Link>

                                        <Link to="/trade-crypto-futures" style={{textDecoration: 'none', color:'black'}}>
                                        <div className='navbuy-crypto-downward-row1'>
                                            <div className='navbuy-crypto-downward-row2'>
                                            <img src={nav16} className='navbuy-crypto-downward-img'/>
                                                <div>
                                                    <div>Binance Futures Overview</div>
                                                    <div className='navbuy-crypto-downward-div22'>View our full range of crypto-derivative instruments</div>
                                                </div>
                                            </div>
                                            <i class="fa-solid fa-arrow-right"></i>
                                        </div></Link>

                                        <Link to="/responsible-trading" style={{textDecoration: 'none', color:'black'}}>
                                        <div className='navbuy-crypto-downward-row1'>
                                            <div className='navbuy-crypto-downward-row2'>
                                            <img src={nav17} className='navbuy-crypto-downward-img'/>
                                                <div>
                                                    <div>Responsible Trading</div>
                                                    <div className='navbuy-crypto-downward-div22'>Learn how you could practice responsible trading with Binance Futures</div>
                                                </div>
                                            </div>
                                            <i class="fa-solid fa-arrow-right"></i>
                                        </div></Link>

                                        {/* <div className='navbuy-crypto-downward-row1'>
                                            <div className='navbuy-crypto-downward-row2'>
                                            <img src={nav18} className='navbuy-crypto-downward-img'/>
                                                <div>
                                                    <div>Blog</div>
                                                    <div className='navbuy-crypto-downward-div22'>Expand your knowledge and get the latest insights in Derivatives Trading</div>
                                                </div>
                                            </div>
                                            <i class="fa-solid fa-arrow-right"></i>
                                        </div> */}

                                        {/* <div className='navbuy-crypto-downward-row1'>
                                            <div className='navbuy-crypto-downward-row2'>
                                            <img src={nav19} className='navbuy-crypto-downward-img'/>
                                                <div>
                                                    <div>VIP Portal</div>
                                                    <div className='navbuy-crypto-downward-div22'>VIP Exclusive, Tailor-made Institutional Grade Services</div>
                                                </div>
                                            </div>
                                        </div>
                                        <i class="fa-solid fa-arrow-right"></i> */}
                                        </div> 
                                </> }
                        </div>

                        <div className='navbuy-crypto' onMouseOver={()=>setDrop3(true)} onMouseOut={()=>setDrop3(false)}>
                            Earn { drop3 ? <i class="fa-solid fa-caret-up"></i> : <i class="fa-solid fa-caret-down"></i> }
                            { drop3 ? <>
                                    <div className='navbuy-crypto-downward3' onMouseOver={()=>setDrop3(true)} onMouseOut={()=>setDrop3(false)}>
                                    
                                        <Link to="/binance" style={{textDecoration: 'none', color:'black'}}>
                                        <div className='navbuy-crypto-downward-row1'>
                                            <div className='navbuy-crypto-downward-row2'>
                                            <img src={iconance15} className='navbuy-crypto-downward-img'/>
                                                <div>
                                                    <div>Binance Earn</div>
                                                    <div className='navbuy-crypto-downward-div22'>One-stop Investment Sollution</div>
                                                </div>
                                            </div>
                                            <i class="fa-solid fa-arrow-right"></i>
                                        </div></Link>

                                        <Link to="/otc-trading-history" style={{textDecoration: 'none', color:'black'}}>
                                        <div className='navbuy-crypto-downward-row1'>
                                            <div className='navbuy-crypto-downward-row2'>
                                            <img src={iconance17} className='navbuy-crypto-downward-img'/>
                                                <div>
                                                    <div>Simple Earn</div>
                                                    <div className='navbuy-crypto-downward-div22'>Earn daily rewards on your idle tokens</div>
                                                </div>
                                            </div>
                                            <i class="fa-solid fa-arrow-right"></i>
                                        </div></Link>

                                        <Link to="/vault-bnb" style={{textDecoration: 'none', color:'black'}}>
                                        <div className='navbuy-crypto-downward-row1'>
                                            <div className='navbuy-crypto-downward-row2'>
                                            <img src={iconance16} className='navbuy-crypto-downward-img'/>
                                                <div>
                                                    <div>BNB Vault</div>
                                                    <div className='navbuy-crypto-downward-div22'>Earn Multi-benefits with BNB</div>
                                                </div>
                                            </div>
                                            <i class="fa-solid fa-arrow-right"></i>
                                        </div></Link>

                                        <Link to='/swap' style={{textDecoration: 'none', color:'black'}}>
                                        <div className='navbuy-crypto-downward-row1'>
                                            <div className='navbuy-crypto-downward-row2'>
                                            <img src={iconance11} className='navbuy-crypto-downward-img'/>
                                                <div>
                                                    <div>Liquidity Farming</div>
                                                    <div className='navbuy-crypto-downward-div22'>Add liquidity and earn double</div>
                                                </div>
                                            </div>
                                            <i class="fa-solid fa-arrow-right"></i>
                                        </div></Link>

                                        {/* <div className='navbuy-crypto-downward-row1'>
                                            <div className='navbuy-crypto-downward-row2'>
                                            <img src={reover32} className='navbuy-crypto-downward-img'/>
                                                <div>
                                                    <div>Binance Pool</div>
                                                    <div className='navbuy-crypto-downward-div22'>Mine more rewards by connecting to the pool</div>
                                                </div>
                                            </div>
                                            <i class="fa-solid fa-arrow-right"></i>
                                        </div> */}

                                        <Link to="/launchpad" style={{textDecoration: 'none', color:'black'}}>
                                        <div className='navbuy-crypto-downward-row1'>
                                            <div className='navbuy-crypto-downward-row2'>
                                            <img src={iconance13} className='navbuy-crypto-downward-img'/>
                                                <div>
                                                    <div>Launchpad</div>
                                                    <div className='navbuy-crypto-downward-div22'>Token Launch Platform</div>
                                                </div>
                                            </div>
                                            <i class="fa-solid fa-arrow-right"></i>
                                        </div></Link>

                                        
                                        <Link to="/intro-domain-name-pay" style={{textDecoration: 'none', color:'black'}}>
                                        <div className='navbuy-crypto-downward-row1'>
                                            <div className='navbuy-crypto-downward-row2'>
                                            <img src={iconance2} className='navbuy-crypto-downward-img'/>
                                                <div>
                                                    <div>Domain Pay</div>
                                                    <div className='navbuy-crypto-downward-div22'>Easy Access to DeFi Opportunities</div>
                                                </div>
                                            </div>
                                            <i class="fa-solid fa-arrow-right"></i>
                                        </div></Link>

                                        
                                        <Link to="/covert-crypto-limit" style={{textDecoration: 'none', color:'black'}}>
                                        <div className='navbuy-crypto-downward-row1'>
                                            <div className='navbuy-crypto-downward-row2'>
                                            <img src={iconance10} className='navbuy-crypto-downward-img'/>
                                                <div>
                                                    <div>Domain Convert</div>
                                                    <div className='navbuy-crypto-downward-div22'>Commit your crypto holdings and enjoy returns</div>
                                                </div>
                                            </div>
                                            <i class="fa-solid fa-arrow-right"></i>
                                        </div></Link>

                                        {/* page add nahi karna yh */}
                                        {/* <div className='navbuy-crypto-downward-row1'>
                                            <div className='navbuy-crypto-downward-row2'>
                                            <img src={reover32} className='navbuy-crypto-downward-img'/>
                                                <div>
                                                    <div>Auto-Invest</div>
                                                    <div className='navbuy-crypto-downward-div22'>Accumulate crypto on autopilot</div>
                                                </div>
                                            </div>
                                            <i class="fa-solid fa-arrow-right"></i>
                                        </div> */}

                                        <Link to="/stak-eth2" style={{textDecoration: 'none', color:'black'}}>
                                        <div className='navbuy-crypto-downward-row1'>
                                            <div className='navbuy-crypto-downward-row2'>
                                            <img src={iconance1} className='navbuy-crypto-downward-img'/>
                                                <div>
                                                    <div>ETH 2.0</div>
                                                    <div className='navbuy-crypto-downward-div22'	>One click staking, rewards paid daily</div>
                                                </div>
                                            </div>
                                            <i class="fa-solid fa-arrow-right"></i>
                                        </div></Link>
                                    </div> 
                                </> : null}
                        </div>

                        {/* <div className='navbuy-crypto' onMouseMove={()=>setDrop4(true)} onMouseOut={()=>setDrop4(false)}>
                            Finance { drop4 ? <i class="fa-solid fa-caret-up"></i> : <i class="fa-solid fa-caret-down"></i> }
                            { drop4 ? <>
                                    <div className='navbuy-crypto-downward4' onMouseMove={()=>setDrop4(true)} onMouseOut={()=>setDrop4(false)}>
                                        <div className='navbuy-crypto-downward-row1'>
                                            <div className='navbuy-crypto-downward-row2'>
                                            <img src={fbinance1} className='navbuy-crypto-downward-img'/>
                                                <div>
                                                    <div>Binance Card</div>
                                                    <div className='navbuy-crypto-downward-div22'>Convert and pay with crypto worldwide</div>
                                                </div>
                                            </div>
                                            <i class="fa-solid fa-arrow-right"></i>
                                        </div>

                                        <div className='navbuy-crypto-downward-row1'>
                                            <div  className='navbuy-crypto-downward-row2'>
                                            <img src={fbinance2} className='navbuy-crypto-downward-img'/>
                                                <div>
                                                    <div>Crypto Loans</div>
                                                    <div className='navbuy-crypto-downward-div22'>Get an instant loan secured bycrypto assets</div>
                                                </div>
                                            </div>
                                            <i class="fa-solid fa-arrow-right"></i>
                                        </div>

                                        <div className='navbuy-crypto-downward-row1'>
                                            <div  className='navbuy-crypto-downward-row2'>
                                            <img src={fbinance3} className='navbuy-crypto-downward-img'/>
                                                <div>
                                                    <div>Binance Gift Card</div>
                                                    <div className='navbuy-crypto-downward-div22'>Customizable crypto gift card</div>
                                                </div>
                                            </div>
                                            <i class="fa-solid fa-arrow-right"></i>
                                        </div>

                                        <Link to='/swap' style={{textDecoration: 'none'}}>
                                        <div className='navbuy-crypto-downward-row1'>
                                            <div className='navbuy-crypto-downward-row2'>
                                            <img src={reover32} className='navbuy-crypto-downward-img'/>
                                                <div>
                                                    <div>Liquidity Farming</div>
                                                    <div className='navbuy-crypto-downward-div22'>Add liquidity and earn double</div>
                                                </div>
                                            </div>
                                            <i class="fa-solid fa-arrow-right"></i>
                                        </div></Link>
                                    </div> 
                                </> : null}
                        </div> */}

                        <div className='navbar-name'>
                            <NavLink to="/nftLandingPage"> NFT </NavLink>
                        </div>
                
                        <div className='navbuy-crypto' onMouseOver={()=>setDrop5(true)} onMouseOut={()=>setDrop5(false)}>
                            Institutional { drop5 ? <i class="fa-solid fa-caret-up"></i> : <i class="fa-solid fa-caret-down"></i> }
                            { drop5 && <>
                                    <div className='navbuy-crypto-downward22' onMouseOver={()=>setDrop5(true)} onMouseOut={()=>setDrop5(false)}>
                                        {/* yh page nahi hai */}
                                        {/* <div className='navbuy-crypto-downward-row1'>
                                            <div className='navbuy-crypto-downward-row2'>
                                                <img src={reover32} className='navbuy-crypto-downward-img'/>
                                                <div>
                                                    <div>Institutional Home</div> 
                                                    <div className='navbuy-crypto-downward-div22'>Premium digital asset solutions for institutions</div>
                                                </div>
                                            </div>
                                            <i class="fa-solid fa-arrow-right"></i>
                                        </div> */}

                                        {/* yh page nahi hai */}
                                        {/* <div className='navbuy-crypto-downward-row1'>
                                            <div className='navbuy-crypto-downward-row2'>
                                            <img src={reover32} className='navbuy-crypto-downward-img'/>
                                                <div>
                                                    <div>Link</div>
                                                    <div className='navbuy-crypto-downward-div22'>Connect and grow with Binance liquidity solutions</div>
                                                </div>
                                            </div>
                                            <i class="fa-solid fa-arrow-right"></i>
                                        </div> */}

                                        {/* yh page nahi hai  */}
                                        {/* <div className='navbuy-crypto-downward-row1'>
                                            <div className='navbuy-crypto-downward-row2'>
                                            <img src={reover32} className='navbuy-crypto-downward-img'/>
                                                <div>
                                                    <div>Asset Management Solutions</div>
                                                    <div className='navbuy-crypto-downward-div22'>Discover various asset management solutions</div>
                                                </div>
                                            </div>
                                            <i class="fa-solid fa-arrow-right"></i>
                                        </div> */}
                
                                        {/* yh page bhi nahi hai */}
                                        {/* <div className='navbuy-crypto-downward-row1'>
                                            <div className='navbuy-crypto-downward-row2'>
                                            <img src={reover32} className='navbuy-crypto-downward-img'/>
                                                <div>
                                                    <div>Custody</div>
                                                    <div className='navbuy-crypto-downward-div22'>Secure digital assets with leading infrastructure</div>
                                                </div>
                                            </div>
                                            <i class="fa-solid fa-arrow-right"></i>
                                        </div> */}

                                        <Link to="/binance-api" style={{textDecoration: 'none', color:'black'}}>
                                        <div className='navbuy-crypto-downward-row1'>
                                            <div className='navbuy-crypto-downward-row2'>
                                            <img src={iconance6} className='navbuy-crypto-downward-img'/>
                                                <div>
                                                    <div>APIs</div>
                                                    <div className='navbuy-crypto-downward-div22'>Unlimited opportunities with one key</div>
                                                </div>
                                            </div>
                                            <i class="fa-solid fa-arrow-right"></i>
                                        </div></Link>

                                        <Link to="/binance-otc" style={{textDecoration: 'none', color:'black'}}> 
                                        <div className='navbuy-crypto-downward-row1'>
                                            <div className='navbuy-crypto-downward-row2'>
                                            <img src={iconance5} className='navbuy-crypto-downward-img'/>
                                                <div>
                                                    <div>Execution & OTC Services</div>
                                                    <div className='navbuy-crypto-downward-div22'>Execution & OTC Services</div>
                                                </div>
                                            </div>
                                            <i class="fa-solid fa-arrow-right"></i>
                                        </div></Link>

                                       
                                        <Link to="/strategy-trading2" style={{textDecoration: 'none', color:'black'}}> 
                                        <div className='navbuy-crypto-downward-row1'>
                                            <div className='navbuy-crypto-downward-row2'>
                                            <img src={navbinance29} className='navbuy-crypto-downward-img'/>
                                                <div>
                                                    <div>Strategy Trading</div>
                                                    <div className='navbuy-crypto-downward-div22'>Trading made easy, trade like a pro</div>
                                                </div>
                                            </div>
                                            <i class="fa-solid fa-arrow-right"></i>
                                        </div></Link>

                                        
                                        <Link to="/ape-coin" style={{textDecoration: 'none', color:'black'}}> 
                                        <div className='navbuy-crypto-downward-row1'>
                                            <div className='navbuy-crypto-downward-row2'>
                                            <img src={iconance14} className='navbuy-crypto-downward-img'/>
                                                <div>
                                                    <div>APE Coin</div>
                                                    <div className='navbuy-crypto-downward-div22'>ApeCoin (APE)</div>
                                                </div>
                                            </div>
                                            <i class="fa-solid fa-arrow-right"></i>
                                        </div></Link>

                                        {/* yh page bhi nahi hai */}
                                        {/* <div className='navbuy-crypto-downward-row1'>
                                            <div className='navbuy-crypto-downward-row2'>
                                            <img src={reover32} className='navbuy-crypto-downward-img'/>
                                                <div>
                                                    <div>Historical Market Data</div>
                                                    <div className='navbuy-crypto-downward-div22'>Your all-in-one trading data repository</div>
                                                </div>
                                            </div>
                                        </div>
                                        <i class="fa-solid fa-arrow-right"></i> */}
                                    </div> 
                                </> }
                        </div>

                        <div className='navbuy-crypto' onMouseOver={()=>setDrop6(true)} onMouseOut={()=>setDrop6(false)}>
                            Wallet  { drop6 ? <i class="fa-solid fa-caret-up"></i> : <i class="fa-solid fa-caret-down"></i> }

                            { drop6 ? <>
                                    <div className='navbuy-crypto-downward5' onMouseOver={()=>setDrop6(true)} onMouseOut={()=>setDrop6(false)}>
                                        
                                        <Link to='/wallet-Overview' style={{textDecoration: 'none', color:'black'}}> 
                                        <div className='navbuy-crypto-downward-row1'>
                                            <div className='navbuy-crypto-downward-row2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-19ss7aa"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 4v7h7V4H4zm9 7V4h7v7h-7zm3.5 9.743L12.257 16.5l4.243-4.243 4.243 4.243-4.243 4.243zM4 13h7v7H4v-7z" fill="currentColor"></path></svg>
                                                <div>
                                                    <div>Overview</div>
                                                </div>
                                            </div>
                                        </div></Link>
                                        
                                        <Link to='/wallet-fiat-and-sport' style={{textDecoration: 'none', color:'black'}}> 
                                        <div className='navbuy-crypto-downward-row1'>
                                            <div className='navbuy-crypto-downward-row2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-19ss7aa"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 3.5a5.502 5.502 0 00-5.302 4.032 7.502 7.502 0 016.77 6.77A5.502 5.502 0 0015 3.5zM14.5 15a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zm-8 0L9 17.5l2.5-2.5L9 12.5 6.5 15zM9 4H4v5l5-5zm11 16h-5l5-5v5z" fill="currentColor"></path></svg>
                                                <div>
                                                    <div>Fiat and Sport</div>
                                                </div>
                                            </div>
                                        </div></Link>

                                        <Link to='/wallet-margin' style={{textDecoration: 'none', color:'black'}}>
                                        <div className='navbuy-crypto-downward-row1'>
                                            <div className='navbuy-crypto-downward-row2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-19ss7aa"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.768 7.019L5.828 19.958 4.062 18.19 17 5.25l.883.885.884.884z" fill="currentColor"></path><path d="M12 4h8v8l-8-8z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 11a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm0-5.031L5.969 7.5 7.5 9.031l1.531-1.53L7.5 5.968zM16.5 20a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm0-5.031L14.969 16.5l1.531 1.531 1.531-1.53-1.531-1.532z" fill="currentColor"></path></svg>
                                
                                                <div>
                                                    <div>Margin</div>
                                                </div>
                                            </div>
                                        </div></Link>

                                        <Link to='/wallet-futures' style={{textDecoration: 'none', color:'black'}}>
                                        <div className='navbuy-crypto-downward-row1'>
                                            <div className='navbuy-crypto-downward-row2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-19ss7aa"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 3H20v13a4 4 0 01-4 4H7.5A3.5 3.5 0 014 16.5V9h4.5V3zM11 14.506v2.5h6.5v-2.5H11zM8.5 11.5h-2v5a1 1 0 102 0v-5zm4-5.494h5v5L15.885 9.39l-2.616 2.616-1.768-1.768 2.616-2.616L12.5 6.006z" fill="currentColor"></path></svg>
                                                <div>
                                                    <div>Futures</div>
                                                </div>
                                            </div>
                                        </div></Link>

                                        <Link to='/wallet-options' style={{textDecoration: 'none', color:'black'}}>
                                        <div className='navbuy-crypto-downward-row1'>
                                            <div  className='navbuy-crypto-downward-row2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-19ss7aa"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 3H8.5v6H4v7.5A3.5 3.5 0 007.5 20H16a4 4 0 004-4V3zM6.5 11.5h2v5a1 1 0 11-2 0v-5zm10.364 3.75H11.66v-7.5h5.203v1.7h-3.328v1.164h2.854v1.69h-2.854v1.246h3.328v1.7z" fill="currentColor"></path></svg>
                                                <div>
                                                    <div>Options</div>
                                                </div>
                                            </div>
                                        </div></Link>

                                        <Link to='/wallet-earn' style={{textDecoration: 'none', color:'black'}}>
                                        <div className='navbuy-crypto-downward-row1'>
                                            <div  className='navbuy-crypto-downward-row2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-19ss7aa"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.014 1a4.912 4.912 0 00-4.218 7.431 6.703 6.703 0 00-4.006 5.717H2v1.786h1.915a6.704 6.704 0 002.758 4.155l-1.648 1.648L6.287 23l2.07-2.07a6.694 6.694 0 002.118.342h5.304l1.591 1.591 1.263-1.262-1.34-1.34 4.35-4.35v-2.687h-1.934a6.126 6.126 0 00-1.398-2.915l2.435-2.435h-4.228A4.912 4.912 0 0012.014 1zM8.888 5.912a3.126 3.126 0 116.251 0 3.126 3.126 0 01-6.251 0zm1.786 0l1.34-1.34 1.34 1.34-1.34 1.34-1.34-1.34zm-.926 7.322h4.53v-1.786h-4.53v1.786z" fill="currentColor"></path></svg>
                                                <div>
                                                    <div>Earn</div>
                                                    </div>
                                            </div>
                                        </div></Link>

                                        <Link to='/wallet-funding' style={{textDecoration: 'none', color:'black'}}>
                                        <div className='navbuy-crypto-downward-row1'>
                                            <div  className='navbuy-crypto-downward-row2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-19ss7aa"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-4l4 4-4 4-4-4 4-4z" fill="currentColor"></path></svg>
                                                <div>
                                                    <div>Funding Wallet</div>
                                                    </div>
                                            </div>
                                        </div></Link>

                                        <Link to='/wallet-transaction-history' style={{textDecoration: 'none', color:'black'}}>
                                        <div className='navbuy-crypto-downward-row1'>
                                            <div  className='navbuy-crypto-downward-row2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-19ss7aa"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.597 16.594A6.48 6.48 0 0112 18.498h-1.25v2.5H12a9 9 0 006.364-15.364 9 9 0 00-12.728 0l1.767 1.768a6.5 6.5 0 019.193 9.192zM13.25 8h-2.5v4.518l3.185 3.185 1.768-1.768-2.453-2.453V8zM5.627 9.568v1.2l-.092.006c-.767.062-1.371.29-1.783.662-.41.37-.639.891-.639 1.564 0 .684.24 1.223.676 1.642.438.421 1.08.726 1.889.925l.076.019v1.901l-.123-.029a3.94 3.94 0 01-.838-.305 2.512 2.512 0 01-.596-.4L3.14 17.935c.446.416 1.309.784 2.268.974l.08.016v1.277h1.578v-1.207l.086-.011c.796-.11 1.357-.448 1.718-.891a2.457 2.457 0 00.532-1.562c0-.669-.246-1.177-.668-1.568-.426-.394-1.037-.675-1.772-.874l-.074-.02v-1.802l.125.033c.406.106.816.31 1.099.558l1.035-1.136c-.43-.4-1.102-.697-1.875-.861l-.08-.017V9.568H5.628zm.19 4.272l-.137-.056c-.221-.09-.381-.185-.485-.303a.599.599 0 01-.149-.418c0-.133.028-.298.126-.448.1-.152.265-.279.522-.34l.123-.03v1.595zm1.057 3.678v-1.732l.147.08a.934.934 0 01.376.346.936.936 0 01.122.483.9.9 0 01-.096.429.744.744 0 01-.414.343l-.135.05z" fill="currentColor"></path></svg> 
                                                <div>
                                                    <div>Transaction History</div>
                                                </div>
                                            </div>
                                        </div></Link>

                                        <Link to='/wallet-account-statement' style={{textDecoration: 'none', color:'black'}}>
                                        <div className='navbuy-crypto-downward-row1'>
                                            <div  className='navbuy-crypto-downward-row2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-19ss7aa"><path d="M11.336 8.577c-.769.15-1.1.558-1.1 1.146 0 .573.331.874 1.1 1.086V8.577zM12.678 15.393c.71-.196 1.041-.663 1.041-1.236 0-.438-.18-.89-1.04-1.147v2.383z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12 21a9 9 0 100-18 9 9 0 000 18zm.86-3.948V18.5h-1.72v-1.387c-1.523-.136-2.533-.755-3.287-1.584l1.357-1.237c.573.604 1.282 1.01 2.126 1.131V12.71c-2.262-.468-3.182-1.463-3.182-2.926 0-1.583 1.04-2.64 2.986-2.865V5.5h1.72v1.418c1.206.135 2.096.603 2.76 1.357l-1.373 1.237c-.362-.408-.845-.74-1.569-.905v2.503c2.112.483 3.122 1.342 3.122 2.88 0 1.479-.935 2.73-2.94 3.062z" fill="currentColor"></path></svg>
                                                <div>
                                                    <div>Account Statement</div>
                                                </div>
                                            </div>
                                        </div></Link>


                                        
                                    </div> 
                                </> : null}
                        </div>
                        
                    </div>

                
                    <div className='nav-row3'>
                        <div className='nav-row3-col1'>
                            <div className='navbuy-crypto' onMouseOver={()=>setDropdown7(true)} onMouseOut={()=>setDropdown7(false)}>
                                <div className='nav-row3-col1-padd'><img src={nav1} alt='admin panel' className='nav-row3-img'/> </div>

                                { dropdown7 ? <>
                                        <div className='navbuy-crypto-downward6' onMouseOver={()=>setDropdown7(true)} onMouseOut={()=>setDropdown7(false)}>
                                            
                                            <div className='navbuy-crypto-downward-row1 navbuy-crypto-downward-row1-hover navbuy-crypto-downward-row1-backnone'>
                                                <div className='navbuy-crypto-downward-row2'>
                                                    <div>
                                                        <div className='navbuy-crypto-downward-row2-bold'>hinayasin01@gmail.com</div>
                                                        <div className='navbuy-crypto-downward-row2-flex'><i class="fa-regular fa-gem"></i>Regular user</div>
                                                    </div>
                                                </div>
                                            </div>

                                            <Link to="/dashboard3" style={{textDecoration: 'none', cursor: 'pointer'}}>
                                            <div className='navbuy-crypto-downward-row1'>
                                                <div className='navbuy-crypto-downward-row2'>
                                                <i className='fa-solid fa-user'></i>
                                                    <div>
                                                        <div>Dashboard</div>
                                                    </div>
                                                </div>
                                            </div></Link>
                                            
                                            <Link to="/security" style={{textDecoration: 'none', cursor: 'pointer'}}>
                                            <div className='navbuy-crypto-downward-row1'>
                                                <div className='navbuy-crypto-downward-row2'>
                                                <i class="fa-solid fa-shield-halved" ></i>
                                                    <div>
                                                        <div>Security</div>
                                                    </div>
                                                </div>
                                            </div></Link>

                                            <Link to="/identification" style={{textDecoration: 'none'}}>
                                            <div className='navbuy-crypto-downward-row1'>
                                                <div className='navbuy-crypto-downward-row2'>
                                                <i className='fas fa-id-card'></i>
                                                    <div>
                                                        <div>Identification</div>
                                                    </div>
                                                </div>
                                            </div></Link>

                                            <Link to="/payment" style={{textDecoration: 'none'}}>
                                            <div className='navbuy-crypto-downward-row1'>
                                                <div className='navbuy-crypto-downward-row2'>
                                                <i class="fa-solid fa-money-check-dollar"></i>
                                                    <div>
                                                        <div>Payment</div>
                                                    </div>
                                                </div>
                                            </div></Link>

                                            <Link to="/referral" style={{textDecoration: 'none'}}>
                                            <div className='navbuy-crypto-downward-row1'>
                                                <div  className='navbuy-crypto-downward-row2'>
                                                <i className='fa-solid fa-user-plus'></i>
                                                    <div>
                                                        <div>Referral</div>
                                                    </div>
                                                </div>
                                            </div></Link>

                                            <Link to="/reward" style={{textDecoration: 'none'}}>
                                            <div className='navbuy-crypto-downward-row1'>
                                                <div  className='navbuy-crypto-downward-row2'>
                                                <i class="fa-solid fa-award"></i>
                                                    <div>
                                                        <div>Reward Center</div>
                                                        </div>
                                                </div>
                                            </div></Link>

                                            <Link to="/task" style={{textDecoration: 'none'}}>
                                            <div className='navbuy-crypto-downward-row1'>
                                                <div  className='navbuy-crypto-downward-row2'>
                                                <i className='fa-solid fa-clipboard-list'></i>
                                                    <div>
                                                        <div>Task Center</div>
                                                        </div>
                                                </div>
                                            </div></Link>


                                            <Link to="/api-management" style={{textDecoration: 'none'}}>
                                            <div className='navbuy-crypto-downward-row1'>
                                                <div  className='navbuy-crypto-downward-row2'>
                                                <i className='fa-solid fa-gear'></i>
                                                    <div>
                                                        <div>API Management</div>
                                                    </div>
                                                </div>
                                            </div></Link>

                                            
                                            <Link to="/setting" style={{textDecoration: 'none'}}>                                            <div className='navbuy-crypto-downward-row1'>
                                                <div  className='navbuy-crypto-downward-row2'>
                                                <i className='fa-solid fa-gear'></i>
                                                    <div>
                                                        <div>Settings</div>
                                                    </div>
                                                </div>
                                            </div></Link>

                                            {/* <Link to="/" style={{textDecoration: 'none'}}>
                                                <div className='resnav-div1'>
                                                    <div className='resnav-div1-flex'>
                                                        <div><i class="fa-solid fa-right-from-bracket"></i></div>
                                                        <div>Log Out</div>
                                                    </div>
                                                </div></Link>                                             */}
                                        </div> 
                                    </> : null}
                            </div>
                            <i class="fa-solid fa-bell" style={{color: 'blue', fontSize: '1.6rem', cursor: 'pointer'}}></i>
                            <i class="fa-solid fa-globe" style={{color: 'blue', fontSize: '1.5rem', cursor: 'pointer'}}></i>
                        </div>
                        <div className='nav-row3-col2'>
                            <Link to='/login' style={{textDecoration: 'none', color: 'white'}}><button className='nav-row3-btn'>Login</button></Link>
                            <Link to='/welcome-login' style={{textDecoration: 'none', color: 'white'}}><button className='nav-row3-btn'>Signup</button></Link>
                        </div>
                    </div>
                </div>

                <div className='renav-div-none'>
                    <img src={nav1} alt='admin panel' className='nav-row3-img2' onClick={()=>setNavbar2(true)}/> 

                    <div className='resnav-showbtn'>
                        <AiOutlineMenu onClick={()=>setNavbar(true)} style={{cursor:'pointer',fontSize:'26px', color: 'white', marginRight:'2.4rem'}}/>
                    </div>
                </div>

            
            <div className='resnav'>
				{ navbar2 ?  <>
                    <RxCross1 onClick={()=>setNavbar2(false)} style={{cursor:'pointer',fontSize:'28px',color:'black', marginLeft: '14.6rem', marginTop: '1rem', fontWeight: '800', marginBottom: '1rem'}}/>
                        <Link to="/dashboard3" style={{textDecoration: 'none'}}>
                        <div className='resnav-div1'>
                           <div  className='resnav-div1-flex' onClick={()=>setNavbar2(false)}>
                                <div><i className='fa-solid fa-user'></i></div>
                                <div>Dashboard</div>
                           </div>						  
						</div></Link>

					   <div onClick={()=> setDropdown1(!dropdown1)} className='resnav-div1'>
					        <div className='resnav-div1-flex'>
                                <div><i class="fa-solid fa-wallet"></i></div>
                                <div style={{color: '#2D56E1'}}>Wallet</div>
                            </div>
						  { dropdown1 ? <i class="fa-solid fa-caret-up"></i> : <i class="fa-solid fa-caret-down"></i> }
						</div>
						{ dropdown1 ? <>
							<div className='resnav-div1-drop'>
								<Link to='/wallet-Overview' style={{textDecoration: 'none'}} onClick={()=>setNavbar2(false)}>Overview</Link>
								<Link to='/wallet-fiat-and-sport' style={{textDecoration: 'none'}} onClick={()=>setNavbar2(false)}>Fiat and Sport</Link>
								<Link to='/wallet-margin' style={{textDecoration: 'none'}} onClick={()=>setNavbar2(false)}>Margin</Link>
								<Link to='/wallet-futures' style={{textDecoration: 'none'}} onClick={()=>setNavbar2(false)}>Futures</Link>
								<Link to='/wallet-options' style={{textDecoration: 'none'}} onClick={()=>setNavbar2(false)}>Options</Link>
								<Link to='/wallet-earn' style={{textDecoration: 'none'}} onClick={()=>setNavbar2(false)}>Earn</Link>
								<Link to='/wallet-funding' style={{textDecoration: 'none'}} onClick={()=>setNavbar2(false)}>Funding Wallet</Link>
								<Link to='/wallet-transaction-history' style={{textDecoration: 'none'}} onClick={()=>setNavbar2(false)}>Transaction History</Link>
                                <Link to='/wallet-account-statement' style={{textDecoration: 'none'}} onClick={()=>setNavbar2(false)}>Account Statement</Link>
                                <Link to='/wallet-verification' style={{textDecoration: 'none'}} onClick={()=>setNavbar2(false)}>Verification</Link>
							</div>
						  </> : null}

                        <Link to="/security" style={{textDecoration: 'none'}}>
                        <div className='resnav-div1'>
						    <div className='resnav-div1-flex' onClick={()=>setNavbar2(false)}>
                                <div><i class="fa-solid fa-shield-halved" ></i></div>
                                <div>Security</div>
                            </div>
						</div></Link>

						<Link to="/identification" style={{textDecoration: 'none'}}>
                        <div className='resnav-div1'>
                            <div className='resnav-div1-flex' onClick={()=>setNavbar2(false)}>
                                <div><i className='fas fa-id-card'></i></div>
                                <div>Identification</div>
                            </div>
						</div></Link>
						
						<Link to="/referral" style={{textDecoration: 'none'}}>
                        <div className='resnav-div1'>
                            <div className='resnav-div1-flex' onClick={()=>setNavbar2(false)}>
                                <div><i className='fa-solid fa-user-plus'></i></div>
                                <div>Referral</div>
                            </div>
						</div></Link>

			
						<Link to="/reward" style={{textDecoration: 'none'}}>
                        <div className='resnav-div1'>
                            <div className='resnav-div1-flex' onClick={()=>setNavbar2(false)}>
                                <div><i class="fa-solid fa-award"></i></div>
                                <div>Reward Center</div>
                            </div>
						</div></Link>

                        <Link to="/task" style={{textDecoration: 'none'}}>
                        <div className='resnav-div1'>
                            <div className='resnav-div1-flex' onClick={()=>setNavbar2(false)}>
                                <div><i className='fa-solid fa-clipboard-list'></i></div>
                                <div>Task Center</div>
                            </div>
						</div></Link>

                        <Link to="/api-management" style={{textDecoration: 'none'}}>
                        <div className='resnav-div1'>
                            <div className='resnav-div1-flex' onClick={()=>setNavbar2(false)}>
                                <div><i className='fa-solid fa-gear'></i></div>
                                <div>API Management</div>
                            </div>
						</div></Link>

                        <Link to="/dashboard3" style={{textDecoration: 'none'}}>
                        <div className='resnav-div1'>
                            <div className='resnav-div1-flex' onClick={()=>setNavbar2(false)}>
                                <div><i class="fa-solid fa-bell"></i></div>
                                <div>Notifications</div>
                            </div>
						</div></Link>

                        <Link to="/" style={{textDecoration: 'none'}}>
                        <div className='resnav-div1'>
                            <div className='resnav-div1-flex' onClick={()=>setNavbar2(false)}>
                                <div><i class="fa-solid fa-right-from-bracket"></i></div>
                                <div>Log Out</div>
                            </div>
						</div></Link>
				        </> : null }
			    </div>

			<div className='resnav'>
				{ navbar ?  <>
                    <RxCross1 onClick={()=>setNavbar(false)} style={{cursor:'pointer',fontSize:'28px',color:'black', marginLeft: '14.6rem', marginTop: '1rem', fontWeight: '800', marginBottom: '1rem'}}/>
                       <div onClick={()=> setDropdown(!dropdown)} className='resnav-div1'>
					      Buy Crypto
						  { dropdown ? <i class="fa-solid fa-caret-up"></i> : <i class="fa-solid fa-caret-down"></i> }
						</div>
						{ dropdown ? <>
							<div className='resnav-div1-drop'>
                                <Link to="/depositeFlat" style={{textDecoration: 'none', color:'black'}} onClick={()=>setNavbar(false)}>Bank Deposit</Link>
								<Link to="/depositFlat3" style={{textDecoration: 'none', color:'black'}} onClick={()=>setNavbar(false)}>Credit/Debit Card</Link>
								<Link to="/depositFlat5" style={{textDecoration: 'none',  color:'black'}} onClick={()=>setNavbar(false)}>Cash Balance</Link>
								<Link to="/tradecomp" style={{textDecoration: 'none', color:'black'}} onClick={()=>setNavbar(false)}>P2P Trading</Link>
							</div>
						  </> : null}
                          <NavLink to="/market-favourites" style={{textDecoration: 'none', color:'black'}}><div className='resnav-div1' onClick={()=>setNavbar(false)}>Markets</div></NavLink>
					   <div onClick={()=> setDropdown1(!dropdown1)} className='resnav-div1'>
					      Trade
						  { dropdown1 ? <i class="fa-solid fa-caret-up"></i> : <i class="fa-solid fa-caret-down"></i> }
						</div>
						{ dropdown1 ? <>
							<div className='resnav-div1-drop'>
                                <Link to="/convert" style={{textDecoration: 'none', color:'black'}} onClick={()=>setNavbar(false)}>Binance Convert</Link>
								<Link to="/fundin-history-graph2" style={{textDecoration: 'none', color:'black'}} onClick={()=>setNavbar(false)}>Spot</Link>
								<Link to="/fundin-history-graph1" style={{textDecoration: 'none', color:'black'}} onClick={()=>setNavbar(false)}>Margin</Link>
								<Link to="/strategy-trading" style={{textDecoration: 'none', color:'black'}} onClick={()=>setNavbar(false)}> Strategy Trading</Link>
								<Link to="/tradecomp" style={{textDecoration: 'none', color:'black'}} onClick={()=>setNavbar(false)}>P2P</Link>
								<Link to="/swap" style={{textDecoration: 'none',  color:'black'}} onClick={()=>setNavbar(false)}>Swamp Farming</Link>
								<Link to="/binance-otc" style={{textDecoration: 'none', color:'black'}} onClick={()=>setNavbar(false)}>Binance oTC</Link>
							</div>
						  </> : null}
						  <div onClick={()=> setDropdown2(!dropdown2)} className='resnav-div1'>
							Derivatives
							{ dropdown2 ? <i class="fa-solid fa-caret-up"></i> : <i class="fa-solid fa-caret-down"></i> }
							</div>
						{ dropdown2 ? <>
							<div className='resnav-div1-drop'>
                                <Link to="/fundin-history-graph2" style={{textDecoration: 'none', color:'black'}} onClick={()=>setNavbar(false)}>USDⓈ-M Futures</Link>
								<Link to="/fundin-history-graph1" style={{textDecoration: 'none', color:'black'}} onClick={()=>setNavbar(false)}>COIN-M Futures</Link>
						
								<Link to="/binance-all-tokens" style={{textDecoration: 'none', color:'black'}} onClick={()=>setNavbar(false)}>Leveraged Tokens</Link>
								<Link to="/strategy-trading" style={{textDecoration: 'none', color:'black'}} onClick={()=>setNavbar(false)}>Leaderboard</Link>
								<Link to="/trade-crypto-futures" style={{textDecoration: 'none', color:'black'}} onClick={()=>setNavbar(false)}>Binance Futures Overview</Link>
								<Link to="/responsible-trading" style={{textDecoration: 'none', color:'black'}} onClick={()=>setNavbar(false)}>Responsible Trading</Link>
							</div>
						  </> : null}
						  <div onClick={()=> setDropdown3(!dropdown3)} className='resnav-div1'>
							 Earn
							{ dropdown3 ? <i class="fa-solid fa-caret-up"></i> : <i class="fa-solid fa-caret-down"></i> }
							</div>
						{ dropdown3 ? <>
							<div className='resnav-div1-drop'>
                                <Link to="/binance" style={{textDecoration: 'none', color:'black'}} onClick={()=>setNavbar(false)}>Binance Earn</Link>
								<Link to="/launchpad" style={{textDecoration: 'none', color:'black'}} onClick={()=>setNavbar(false)}>Launchpad</Link>
								<Link to="/otc-trading-history" style={{textDecoration: 'none', color:'black'}} onClick={()=>setNavbar(false)}>Simple Earn</Link>
								<Link to="/vault-bnb" style={{textDecoration: 'none', color:'black'}} onClick={()=>setNavbar(false)}>BNB Vault</Link>
								<Link to="/stak-eth2" style={{textDecoration: 'none', color:'black'}} onClick={()=>setNavbar(false)}>ETH 2.0</Link>
							</div>
						  </> : null}
						  {/* <div onClick={()=> setDropdown4(!dropdown4)} className='resnav-div1'>
							Finance
							{ dropdown4 ? <i class="fa-solid fa-caret-up"></i> : <i class="fa-solid fa-caret-down"></i> }
							</div>
						{ dropdown4 ? <>
							<div className='resnav-div1-drop'>
								<Link>Binance Card</Link>
								<Link>Crypto Loans</Link>
								<Link>Binance Pay</Link>
								<Link>Binance Gift Card</Link>
							</div>
						  </> : null} */}
						<div className='resnav-div1' ><Link to="/nftLandingPage" style={{textDecoration: 'none', color: 'black'}} onClick={()=>setNavbar(false)}>NFT</Link></div>
						<div onClick={()=> setDropdown5(!dropdown5)} className='resnav-div1'>
							Institutional
							{ dropdown5 ? <i class="fa-solid fa-caret-up"></i> : <i class="fa-solid fa-caret-down"></i> }
							</div>
						{ dropdown5 ? <>
							<div className='resnav-div1-drop'>
								<Link to="/binance-api" style={{textDecoration: 'none', color:'black'}} onClick={()=>setNavbar(false)}>APIs</Link>
								<Link to="/binance-otc" style={{textDecoration: 'none', color:'black'}} onClick={()=>setNavbar(false)}>Execution & OTC Services</Link>
							</div>
						  </> : null}

						  <div className='resnav-div1' onClick={()=>setNavbar(false)}>Downloads</div>
						  <div className='resnav-div1' onClick={()=>setNavbar(false)}>English</div>
						  <div className='resnav-div1' onClick={()=>setNavbar(false)}>USD</div>
				</> : null }
			</div>
            </div>
        </>
    );
}


export default Header;