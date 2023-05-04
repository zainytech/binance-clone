import React, { useState } from 'react';
import logo from "../assets/logo.png";
import Vector from "../assets/Vector.png";
import Rectangle from "../assets/Rectangle.png";
import { Link, Router } from 'react-router-dom';
// import { NavLink } from "react-router-dom";
import '../../node_modules/rsuite/dist/rsuite.min.css';
// import PageIcon from '@rsuite/icons/Page';
// import Dashboard from "./Dashboard";
import { NavLink } from "react-router-dom";
import './Headernav.css';



import "../App.css";
import Dashboard3 from '../Components/Dashboard3';
import images from '../Components/Img/images.png';
import reover3 from '../Components/Img/reover3.png';
import reover32 from '../Components/Img/reover32.png';


const HeaderComp = () => {
	const [dropdown, setDropdown] = useState();
	const [dropdown1, setDropdown1] = useState();
	const [dropdown2, setDropdown2] = useState();
	const [dropdown3, setDropdown3] = useState();
	const [dropdown4, setDropdown4] = useState();
	const [dropdown5, setDropdown5] = useState();
	const [dropdown6, setDropdown6] = useState();
	const [navbar, setNavbar] = useState(false);

	const handleMouseOver = () => {
		setDropdown(true);
	  };
	
	  const handleMouseOut = () => {
		setDropdown(false);
	  };
	return (
		<div className="header">
			<img src={logo} height="40px" width="80px" alt="logo" />
		    
			<div className='navbar'>
				<div className='navbar-name'>
					<NavLink to="/Dashboard"> Dashboard3</NavLink>
				</div> 
				
				<div className='navbar-name'>
					<NavLink to="/dashboard3"> Dashboard </NavLink>
				</div> 
				
				<div className='navbuy-crypto' onMouseOver={handleMouseOver} onMouseLeave={handleMouseOut} >
					Buy Crypto  { dropdown ? <i class="fa-solid fa-caret-up"></i> : <i class="fa-solid fa-caret-down"></i> }

					{ dropdown ? <>
							<div className='navbuy-crypto-downward' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
								<div className='navbuy-crypto-downward-row1'>
									<div className='navbuy-crypto-downward-row2'>
										<i class="fa-solid fa-building-columns"></i>
										<div>
											<div>Bank Deposit</div>
											<div className='navbuy-crypto-downward-div22'>Deposit EUR via SEPA or card</div>
										</div>
									</div>
									<i class="fa-solid fa-arrow-right"></i>
								</div>

								<div className='navbuy-crypto-downward-row1'>
									<div className='navbuy-crypto-downward-row2'>
										<i class="fa-solid fa-credit-card"></i>
										<div>
											<div>Credit/Debit Card</div>
											<div className='navbuy-crypto-downward-div22'>Buy crypto via Card, Apple Pay, Google Pay</div>
										</div>
									</div>
									<i class="fa-solid fa-arrow-right"></i>
								</div>

								<div className='navbuy-crypto-downward-row1'>
									<div className='navbuy-crypto-downward-row2'>
										<i class="fa-solid fa-wallet"></i>
										<div>
											<div>Cash Balance</div>
											<div className='navbuy-crypto-downward-div22'>Buy crypto with your EUR balance</div>
										</div>
									</div>
									<i class="fa-solid fa-arrow-right"></i>
								</div>

								<div className='navbuy-crypto-downward-row1'>
									<div  className='navbuy-crypto-downward-row2'>
										<i class="fa-solid fa-wallet"></i>
										<div>
											<div>P2P Trading</div>
											<div className='navbuy-crypto-downward-div22'>Bank transfer and 100+ students</div>
										</div>
									</div>
									<i class="fa-solid fa-arrow-right"></i>
								</div>
							</div> 
						</> : null}
				</div>

				<div className='navbar-name'>
					<NavLink to="/market-favourites"> Markets </NavLink>
				</div>


				<div className='navbuy-crypto' onMouseOver={()=>setDropdown1(true)} onMouseOut={()=>setDropdown1(false)}>
					Trade { dropdown1 ? <i class="fa-solid fa-caret-up"></i> : <i class="fa-solid fa-caret-down"></i> }
					{ dropdown1 && 
							<div className='navbuy-crypto-downward1' onMouseOver={()=>setDropdown1(true)} onMouseOut={()=>setDropdown1(false)}>
							<Link to="/convert">
								<div className='navbuy-crypto-downward-row1'>
								
									<div className='navbuy-crypto-downward-row2'>
										<img src={reover32} className='navbuy-crypto-downward-img'/>
										<div>
											<div>Binance Convert</div>
											<div className='navbuy-crypto-downward-div22'>The easiest way to trade</div>
										</div>
									</div>
									<i class="fa-solid fa-arrow-right"></i>
								</div>
							</Link>

								<div className='navbuy-crypto-downward-row1'>
									<div className='navbuy-crypto-downward-row2'>
										<img src={reover32} className='navbuy-crypto-downward-img'/>
										<div>
											<div>Spot</div>
											<div className='navbuy-crypto-downward-div22'>Trade crypto with advanced tools</div>
										</div>
									</div>
									<i class="fa-solid fa-arrow-right"></i>
								</div>

								<div className='navbuy-crypto-downward-row1'>
									<div className='navbuy-crypto-downward-row2'>
										<img src={reover32} className='navbuy-crypto-downward-img'/>
										<div>
											<div>Margin</div>
											<div className='navbuy-crypto-downward-div22'>Increase your profits with leaverage</div>
										</div>
									</div>
									<i class="fa-solid fa-arrow-right"></i>
								</div>

								<div className='navbuy-crypto-downward-row1'>
									<div className='navbuy-crypto-downward-row2'>
										<img src={reover32} className='navbuy-crypto-downward-img'/>
										<div>
											<div>Strategy Trading</div>
											<div className='navbuy-crypto-downward-div22'>Trading made easy, trade like a pro</div>
										</div>
									</div>
									<i class="fa-solid fa-arrow-right"></i>
								</div>

								<div className='navbuy-crypto-downward-row1'>
									<div className='navbuy-crypto-downward-row2'>
									<img src={reover32} className='navbuy-crypto-downward-img'/>
										<div>
											<div>P2P</div>
											<div className='navbuy-crypto-downward-div22'>Bank transfer and 100+ options</div>
										</div>
									</div>
									<i class="fa-solid fa-arrow-right"></i>
								</div>

								<div className='navbuy-crypto-downward-row1'>
									<div className='navbuy-crypto-downward-row2'>
									<img src={reover32} className='navbuy-crypto-downward-img'/>
										<div>
											<div>Swamp Farming</div>
											<div className='navbuy-crypto-downward-div22'>Swamp to earn BNB</div>
										</div>
									</div>
									<i class="fa-solid fa-arrow-right"></i>
								</div>

								<div className='navbuy-crypto-downward-row1'>
									<div className='navbuy-crypto-downward-row2'>
									<img src={reover32} className='navbuy-crypto-downward-img'/>
										<div>
											<div>Fan Token</div>
											<div className='navbuy-crypto-downward-div22'>Upgrade your fan experience</div>
										</div>
									</div>
									<i class="fa-solid fa-arrow-right"></i>
								</div>

								<div className='navbuy-crypto-downward-row1'>
									<div className='navbuy-crypto-downward-row2'>
									<img src={reover32} className='navbuy-crypto-downward-img'/>
										<div>
											<div>Binance OTC</div>
											<div className='navbuy-crypto-downward-div22'>OTC liquidity and execution services</div>
										</div>
									</div>
									<i class="fa-solid fa-arrow-right"></i>
								</div>
							</div> }
				</div>

				<div className='navbuy-crypto' onMouseOver={()=>setDropdown2(true)} onMouseOut={()=>setDropdown2(false)}>
					Derivatives { dropdown2 ? <i class="fa-solid fa-caret-up"></i> : <i class="fa-solid fa-caret-down"></i> }
					{ dropdown2 && <>
							<div className='navbuy-crypto-downward2' onMouseOver={()=>setDropdown2(true)} onMouseOut={()=>setDropdown2(false)}>
								<div className='navbuy-crypto-downward-row1'>
									<div className='navbuy-crypto-downward-row2'>
										<img src={reover32} className='navbuy-crypto-downward-img'/>
										<div>
											<div>USDⓈ-M Futures</div>
											<div className='navbuy-crypto-downward-div22'>Perpetual or Quarterly Contracts settled in USDT or BUSD</div>
										</div>
									</div>
									<i class="fa-solid fa-arrow-right"></i>
								</div>

								<div className='navbuy-crypto-downward-row1'>
									<div className='navbuy-crypto-downward-row2'>
									<img src={reover32} className='navbuy-crypto-downward-img'/>
										<div>
											<div>COIN-M Futures</div>
											<div className='navbuy-crypto-downward-div22'>Perpetual or Quarterly Contracts settled in Cryptocurrency</div>
										</div>
									</div>
									<i class="fa-solid fa-arrow-right"></i>
								</div>

								<div className='navbuy-crypto-downward-row1'>
									<div className='navbuy-crypto-downward-row2'>
									<img src={reover32} className='navbuy-crypto-downward-img'/>
										<div>
											<div>Options</div>
											<div className='navbuy-crypto-downward-div22'>Buy and Sell European-style Options.</div>
										</div>
									</div>
									<i class="fa-solid fa-arrow-right"></i>
								</div>
         
								<div className='navbuy-crypto-downward-row1'>
									<div className='navbuy-crypto-downward-row2'>
									<img src={reover32} className='navbuy-crypto-downward-img'/>
										<div>
											<div>Leveraged Tokens</div>
											<div className='navbuy-crypto-downward-div22'>Enjoy increased leverage without risk of liquidation</div>
										</div>
									</div>
									<i class="fa-solid fa-arrow-right"></i>
								</div>

								<div className='navbuy-crypto-downward-row1'>
									<div className='navbuy-crypto-downward-row2'>
									<img src={reover32} className='navbuy-crypto-downward-img'/>
										<div>
											<div>Leaderboard</div>
											<div className='navbuy-crypto-downward-div22'>Exclusive ranking for Binance traders, follow top traders' strategies</div>
										</div>
									</div>
									<i class="fa-solid fa-arrow-right"></i>
								</div>

								<div className='navbuy-crypto-downward-row1'>
									<div className='navbuy-crypto-downward-row2'>
									<img src={reover32} className='navbuy-crypto-downward-img'/>
										<div>
											<div>Binance Futures Overview</div>
											<div className='navbuy-crypto-downward-div22'>View our full range of crypto-derivative instruments</div>
										</div>
									</div>
									<i class="fa-solid fa-arrow-right"></i>
								</div>

								<div className='navbuy-crypto-downward-row1'>
									<div className='navbuy-crypto-downward-row2'>
									<img src={reover32} className='navbuy-crypto-downward-img'/>
										<div>
											<div>Responsible Trading</div>
											<div className='navbuy-crypto-downward-div22'>Learn how you could practice responsible trading with Binance Futures</div>
										</div>
									</div>
									<i class="fa-solid fa-arrow-right"></i>
								</div>

								<div className='navbuy-crypto-downward-row1'>
									<div className='navbuy-crypto-downward-row2'>
									<img src={reover32} className='navbuy-crypto-downward-img'/>
										<div>
											<div>Blog</div>
											<div className='navbuy-crypto-downward-div22'>Expand your knowledge and get the latest insights in Derivatives Trading</div>
										</div>
									</div>
									<i class="fa-solid fa-arrow-right"></i>
								</div>

								<div className='navbuy-crypto-downward-row1'>
									<div className='navbuy-crypto-downward-row2'>
									<img src={reover32} className='navbuy-crypto-downward-img'/>
										<div>
											<div>VIP Portal</div>
											<div className='navbuy-crypto-downward-div22'>VIP Exclusive, Tailor-made Institutional Grade Services</div>
										</div>
									</div>
								</div>
								<i class="fa-solid fa-arrow-right"></i>
							</div> 
						</> }
				</div>

				<div className='navbuy-crypto' onMouseOver={()=>setDropdown3(true)} onMouseOut={()=>setDropdown3(false)}>
					Earn { dropdown3 ? <i class="fa-solid fa-caret-up"></i> : <i class="fa-solid fa-caret-down"></i> }
					{ dropdown3 ? <>
							<div className='navbuy-crypto-downward3' onMouseOver={()=>setDropdown3(true)} onMouseOut={()=>setDropdown3(false)}>
								<div className='navbuy-crypto-downward-row1'>
									<div className='navbuy-crypto-downward-row2'>
									<img src={reover32} className='navbuy-crypto-downward-img'/>
										<div>
											<div>Binance Earn</div>
											<div className='navbuy-crypto-downward-div22'>One-stop Investment Sollution</div>
										</div>
									</div>
									<i class="fa-solid fa-arrow-right"></i>
								</div>

								<div className='navbuy-crypto-downward-row1'>
									<div className='navbuy-crypto-downward-row2'>
									<img src={reover32} className='navbuy-crypto-downward-img'/>
										<div>
											<div>Simple Earn</div>
											<div className='navbuy-crypto-downward-div22'>Earn daily rewards on your idle tokens</div>
										</div>
									</div>
									<i class="fa-solid fa-arrow-right"></i>
								</div>

								<div className='navbuy-crypto-downward-row1'>
									<div className='navbuy-crypto-downward-row2'>
									<img src={reover32} className='navbuy-crypto-downward-img'/>
										<div>
											<div>BNB Vault</div>
											<div className='navbuy-crypto-downward-div22'>Earn Multi-benefits with BNB</div>
										</div>
									</div>
									<i class="fa-solid fa-arrow-right"></i>
								</div>

								<div className='navbuy-crypto-downward-row1'>
									<div className='navbuy-crypto-downward-row2'>
									<img src={reover32} className='navbuy-crypto-downward-img'/>
										<div>
											<div>Liquidity Farming</div>
											<div className='navbuy-crypto-downward-div22'>Add liquidity and earn double</div>
										</div>
									</div>
									<i class="fa-solid fa-arrow-right"></i>
								</div>

								<div className='navbuy-crypto-downward-row1'>
									<div className='navbuy-crypto-downward-row2'>
									<img src={reover32} className='navbuy-crypto-downward-img'/>
										<div>
											<div>Binance Pool</div>
											<div className='navbuy-crypto-downward-div22'>Mine more rewards by connecting to the pool</div>
										</div>
									</div>
									<i class="fa-solid fa-arrow-right"></i>
								</div>

								<div className='navbuy-crypto-downward-row1'>
									<div className='navbuy-crypto-downward-row2'>
									<img src={reover32} className='navbuy-crypto-downward-img'/>
										<div>
											<div>Launchpad</div>
											<div className='navbuy-crypto-downward-div22'>Token Launch Platform</div>
										</div>
									</div>
									<i class="fa-solid fa-arrow-right"></i>
								</div>

								<div className='navbuy-crypto-downward-row1'>
									<div className='navbuy-crypto-downward-row2'>
									<img src={reover32} className='navbuy-crypto-downward-img'/>
										<div>
											<div>DeFi Staking</div>
											<div className='navbuy-crypto-downward-div22'>Easy Access to DeFi Opportunities</div>
										</div>
									</div>
									<i class="fa-solid fa-arrow-right"></i>
								</div>

								<div className='navbuy-crypto-downward-row1'>
									<div className='navbuy-crypto-downward-row2'>
									<img src={reover32} className='navbuy-crypto-downward-img'/>
										<div>
											<div>Dual Investment</div>
											<div className='navbuy-crypto-downward-div22'>Commit your crypto holdings and enjoy high returns</div>
										</div>
									</div>
									<i class="fa-solid fa-arrow-right"></i>
								</div>

								<div className='navbuy-crypto-downward-row1'>
									<div className='navbuy-crypto-downward-row2'>
									<img src={reover32} className='navbuy-crypto-downward-img'/>
										<div>
											<div>Auto-Invest</div>
											<div className='navbuy-crypto-downward-div22'>Accumulate crypto on autopilot</div>
										</div>
									</div>
									<i class="fa-solid fa-arrow-right"></i>
								</div>

								<div className='navbuy-crypto-downward-row1'>
									<div className='navbuy-crypto-downward-row2'>
									<img src={reover32} className='navbuy-crypto-downward-img'/>
										<div>
											<div>ETH 2.0</div>
											<div className='navbuy-crypto-downward-div22'	>One click staking, rewards paid daily</div>
										</div>
									</div>
									<i class="fa-solid fa-arrow-right"></i>
								</div>
							</div> 
						</> : null}
				</div>

				<div className='navbuy-crypto' onMouseMove={()=>setDropdown4(true)} onMouseOut={()=>setDropdown4(false)}>
					Finance { dropdown4 ? <i class="fa-solid fa-caret-up"></i> : <i class="fa-solid fa-caret-down"></i> }
					{ dropdown4 ? <>
							<div className='navbuy-crypto-downward4'>
								<div className='navbuy-crypto-downward-row1'>
									<div className='navbuy-crypto-downward-row2'>
									<img src={reover32} className='navbuy-crypto-downward-img'/>
										<div>
											<div>Binance Card</div>
											<div className='navbuy-crypto-downward-div22'>Convert and pay with crypto worldwide</div>
										</div>
									</div>
									<i class="fa-solid fa-arrow-right"></i>
								</div>

								<div className='navbuy-crypto-downward-row1'>
									<div  className='navbuy-crypto-downward-row2'>
									<img src={reover32} className='navbuy-crypto-downward-img'/>
										<div>
											<div>Crypto Loans</div>
											<div className='navbuy-crypto-downward-div22'>Get an instant loan secured bycrypto assets</div>
										</div>
									</div>
									<i class="fa-solid fa-arrow-right"></i>
								</div>

								<div className='navbuy-crypto-downward-row1'>
									<div  className='navbuy-crypto-downward-row2'>
									<img src={reover32} className='navbuy-crypto-downward-img'/>
										<div>
											<div>Binance Gift Card</div>
											<div className='navbuy-crypto-downward-div22'>Customizable crypto gift card</div>
										</div>
									</div>
									<i class="fa-solid fa-arrow-right"></i>
								</div>

								<div className='navbuy-crypto-downward-row1'>
									<div className='navbuy-crypto-downward-row2'>
									<img src={reover32} className='navbuy-crypto-downward-img'/>
										<div>
											<div>Liquidity Farming</div>
											<div className='navbuy-crypto-downward-div22'>Add liquidity and earn double</div>
										</div>
									</div>
									<i class="fa-solid fa-arrow-right"></i>
								</div>
							</div> 
						</> : null}
				</div>

				<div className='navbar-name'>
					<NavLink to="/market-favourites"> NFT </NavLink>
				</div>

				
				<div className='navbuy-crypto' onMouseOver={()=>setDropdown5(true)} onMouseOut={()=>setDropdown5(false)}>
					Institutional { dropdown5 ? <i class="fa-solid fa-caret-up"></i> : <i class="fa-solid fa-caret-down"></i> }
					{ dropdown5 && <>
							<div className='navbuy-crypto-downward2' onMouseOver={()=>setDropdown5(true)} onMouseOut={()=>setDropdown5(false)}>
								<div className='navbuy-crypto-downward-row1'>
									<div className='navbuy-crypto-downward-row2'>
										<img src={reover32} className='navbuy-crypto-downward-img'/>
										<div>
											<div>Institutional Home</div> 
											<div className='navbuy-crypto-downward-div22'>Premium digital asset solutions for institutions</div>
										</div>
									</div>
									<i class="fa-solid fa-arrow-right"></i>
								</div>

								<div className='navbuy-crypto-downward-row1'>
									<div className='navbuy-crypto-downward-row2'>
									<img src={reover32} className='navbuy-crypto-downward-img'/>
										<div>
											<div>Link</div>
											<div className='navbuy-crypto-downward-div22'>Connect and grow with Binance liquidity solutions</div>
										</div>
									</div>
									<i class="fa-solid fa-arrow-right"></i>
								</div>

								<div className='navbuy-crypto-downward-row1'>
									<div className='navbuy-crypto-downward-row2'>
									<img src={reover32} className='navbuy-crypto-downward-img'/>
										<div>
											<div>Asset Management Solutions</div>
											<div className='navbuy-crypto-downward-div22'>Discover various asset management solutions</div>
										</div>
									</div>
									<i class="fa-solid fa-arrow-right"></i>
								</div>
         
								<div className='navbuy-crypto-downward-row1'>
									<div className='navbuy-crypto-downward-row2'>
									<img src={reover32} className='navbuy-crypto-downward-img'/>
										<div>
											<div>Custody</div>
											<div className='navbuy-crypto-downward-div22'>Secure digital assets with leading infrastructure</div>
										</div>
									</div>
									<i class="fa-solid fa-arrow-right"></i>
								</div>

								<div className='navbuy-crypto-downward-row1'>
									<div className='navbuy-crypto-downward-row2'>
									<img src={reover32} className='navbuy-crypto-downward-img'/>
										<div>
											<div>APIs</div>
											<div className='navbuy-crypto-downward-div22'>Unlimited opportunities with one key</div>
										</div>
									</div>
									<i class="fa-solid fa-arrow-right"></i>
								</div>

								<div className='navbuy-crypto-downward-row1'>
									<div className='navbuy-crypto-downward-row2'>
									<img src={reover32} className='navbuy-crypto-downward-img'/>
										<div>
											<div>Execution & OTC Services</div>
											<div className='navbuy-crypto-downward-div22'>Execution & OTC Services</div>
										</div>
									</div>
									<i class="fa-solid fa-arrow-right"></i>
								</div>

								<div className='navbuy-crypto-downward-row1'>
									<div className='navbuy-crypto-downward-row2'>
									<img src={reover32} className='navbuy-crypto-downward-img'/>
										<div>
											<div>VIP Portal</div>
											<div className='navbuy-crypto-downward-div22'>One-stop station made for VIP and institutions</div>
										</div>
									</div>
									<i class="fa-solid fa-arrow-right"></i>
								</div>

								<div className='navbuy-crypto-downward-row1'>
									<div className='navbuy-crypto-downward-row2'>
									<img src={reover32} className='navbuy-crypto-downward-img'/>
										<div>
											<div>VIP Loan</div>
											<div className='navbuy-crypto-downward-div22'>Bespoke institutional loan with wide coverage</div>
										</div>
									</div>
									<i class="fa-solid fa-arrow-right"></i>
								</div>

								<div className='navbuy-crypto-downward-row1'>
									<div className='navbuy-crypto-downward-row2'>
									<img src={reover32} className='navbuy-crypto-downward-img'/>
										<div>
											<div>Historical Market Data</div>
											<div className='navbuy-crypto-downward-div22'>Your all-in-one trading data repository</div>
										</div>
									</div>
								</div>
								<i class="fa-solid fa-arrow-right"></i>
							</div> 
						</> }
				</div>

				<div className='navbuy-crypto' onMouseOver={()=>setDropdown6(true)} onMouseOut={()=>setDropdown6(false)}>
					Orders  { dropdown6 ? <i class="fa-solid fa-caret-up"></i> : <i class="fa-solid fa-caret-down"></i> }

					{ dropdown6 ? <>
							<div className='navbuy-crypto-downward5' onMouseOver={()=>setDropdown6(true)} onMouseOut={()=>setDropdown6(false)}>
								
								<div className='navbuy-crypto-downward-row1'>
									<div className='navbuy-crypto-downward-row2'>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-19ss7aa"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 4v7h7V4H4zm9 7V4h7v7h-7zm3.5 9.743L12.257 16.5l4.243-4.243 4.243 4.243-4.243 4.243zM4 13h7v7H4v-7z" fill="currentColor"></path></svg>
                        				<div>
											<div>Overview</div>
										</div>
									</div>
								</div>
								
								<div className='navbuy-crypto-downward-row1'>
									<div className='navbuy-crypto-downward-row2'>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-19ss7aa"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 3.5a5.502 5.502 0 00-5.302 4.032 7.502 7.502 0 016.77 6.77A5.502 5.502 0 0015 3.5zM14.5 15a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zm-8 0L9 17.5l2.5-2.5L9 12.5 6.5 15zM9 4H4v5l5-5zm11 16h-5l5-5v5z" fill="currentColor"></path></svg>
										<div>
											<div>Fiat and Sport</div>
										</div>
									</div>
								</div>

								<div className='navbuy-crypto-downward-row1'>
									<div className='navbuy-crypto-downward-row2'>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-19ss7aa"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.768 7.019L5.828 19.958 4.062 18.19 17 5.25l.883.885.884.884z" fill="currentColor"></path><path d="M12 4h8v8l-8-8z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 11a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm0-5.031L5.969 7.5 7.5 9.031l1.531-1.53L7.5 5.968zM16.5 20a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm0-5.031L14.969 16.5l1.531 1.531 1.531-1.53-1.531-1.532z" fill="currentColor"></path></svg>
                        
										<div>
											<div>Margin</div>
										</div>
									</div>
								</div>

								<div className='navbuy-crypto-downward-row1'>
									<div className='navbuy-crypto-downward-row2'>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-19ss7aa"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 3H20v13a4 4 0 01-4 4H7.5A3.5 3.5 0 014 16.5V9h4.5V3zM11 14.506v2.5h6.5v-2.5H11zM8.5 11.5h-2v5a1 1 0 102 0v-5zm4-5.494h5v5L15.885 9.39l-2.616 2.616-1.768-1.768 2.616-2.616L12.5 6.006z" fill="currentColor"></path></svg>
										<div>
											<div>Futures</div>
										</div>
									</div>
								</div>

								<div className='navbuy-crypto-downward-row1'>
									<div  className='navbuy-crypto-downward-row2'>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-19ss7aa"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 3H8.5v6H4v7.5A3.5 3.5 0 007.5 20H16a4 4 0 004-4V3zM6.5 11.5h2v5a1 1 0 11-2 0v-5zm10.364 3.75H11.66v-7.5h5.203v1.7h-3.328v1.164h2.854v1.69h-2.854v1.246h3.328v1.7z" fill="currentColor"></path></svg>
										<div>
											<div>Options</div>
										</div>
									</div>
								</div>

								<div className='navbuy-crypto-downward-row1'>
									<div  className='navbuy-crypto-downward-row2'>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-19ss7aa"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.014 1a4.912 4.912 0 00-4.218 7.431 6.703 6.703 0 00-4.006 5.717H2v1.786h1.915a6.704 6.704 0 002.758 4.155l-1.648 1.648L6.287 23l2.07-2.07a6.694 6.694 0 002.118.342h5.304l1.591 1.591 1.263-1.262-1.34-1.34 4.35-4.35v-2.687h-1.934a6.126 6.126 0 00-1.398-2.915l2.435-2.435h-4.228A4.912 4.912 0 0012.014 1zM8.888 5.912a3.126 3.126 0 116.251 0 3.126 3.126 0 01-6.251 0zm1.786 0l1.34-1.34 1.34 1.34-1.34 1.34-1.34-1.34zm-.926 7.322h4.53v-1.786h-4.53v1.786z" fill="currentColor"></path></svg>
										<div>
											<div>Earn</div>
											</div>
									</div>
								</div>


								<div className='navbuy-crypto-downward-row1'>
									<div  className='navbuy-crypto-downward-row2'>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-19ss7aa"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-4l4 4-4 4-4-4 4-4z" fill="currentColor"></path></svg>
										<div>
											<div>Funding Wallet</div>
											</div>
									</div>
								</div>


								<div className='navbuy-crypto-downward-row1'>
									<div  className='navbuy-crypto-downward-row2'>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-19ss7aa"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.597 16.594A6.48 6.48 0 0112 18.498h-1.25v2.5H12a9 9 0 006.364-15.364 9 9 0 00-12.728 0l1.767 1.768a6.5 6.5 0 019.193 9.192zM13.25 8h-2.5v4.518l3.185 3.185 1.768-1.768-2.453-2.453V8zM5.627 9.568v1.2l-.092.006c-.767.062-1.371.29-1.783.662-.41.37-.639.891-.639 1.564 0 .684.24 1.223.676 1.642.438.421 1.08.726 1.889.925l.076.019v1.901l-.123-.029a3.94 3.94 0 01-.838-.305 2.512 2.512 0 01-.596-.4L3.14 17.935c.446.416 1.309.784 2.268.974l.08.016v1.277h1.578v-1.207l.086-.011c.796-.11 1.357-.448 1.718-.891a2.457 2.457 0 00.532-1.562c0-.669-.246-1.177-.668-1.568-.426-.394-1.037-.675-1.772-.874l-.074-.02v-1.802l.125.033c.406.106.816.31 1.099.558l1.035-1.136c-.43-.4-1.102-.697-1.875-.861l-.08-.017V9.568H5.628zm.19 4.272l-.137-.056c-.221-.09-.381-.185-.485-.303a.599.599 0 01-.149-.418c0-.133.028-.298.126-.448.1-.152.265-.279.522-.34l.123-.03v1.595zm1.057 3.678v-1.732l.147.08a.934.934 0 01.376.346.936.936 0 01.122.483.9.9 0 01-.096.429.744.744 0 01-.414.343l-.135.05z" fill="currentColor"></path></svg> 
										<div>
											<div>Transaction History</div>
										</div>
									</div>
								</div>


								<div className='navbuy-crypto-downward-row1'>
									<div  className='navbuy-crypto-downward-row2'>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-19ss7aa"><path d="M11.336 8.577c-.769.15-1.1.558-1.1 1.146 0 .573.331.874 1.1 1.086V8.577zM12.678 15.393c.71-.196 1.041-.663 1.041-1.236 0-.438-.18-.89-1.04-1.147v2.383z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12 21a9 9 0 100-18 9 9 0 000 18zm.86-3.948V18.5h-1.72v-1.387c-1.523-.136-2.533-.755-3.287-1.584l1.357-1.237c.573.604 1.282 1.01 2.126 1.131V12.71c-2.262-.468-3.182-1.463-3.182-2.926 0-1.583 1.04-2.64 2.986-2.865V5.5h1.72v1.418c1.206.135 2.096.603 2.76 1.357l-1.373 1.237c-.362-.408-.845-.74-1.569-.905v2.503c2.112.483 3.122 1.342 3.122 2.88 0 1.479-.935 2.73-2.94 3.062z" fill="currentColor"></path></svg>
										<div>
											<div>Account Statement</div>
										</div>
									</div>
								</div>


								
							</div> 
						</> : null}
				</div>

				
			</div>


			<div className="right_header header">
				<h6>English</h6>
				<h6>USD</h6>
				<button className="grey_button yellow_button">
					<Link to="/signin" className="linktext"> Login </Link>
				</button>
				<button className="yellow_button ">
					<Link to="/signoptions" className="linktext"> Register </Link>
				</button>
			</div>

			{/* <i class="fa-solid fa-bars"></i>  */}

			<div className='res-hamburgar'>
				<button onClick={()=> setNavbar(true)} >
					{ navbar && <i class="fa-solid fa-bars"></i> }
				</button>
			</div>
           
			<div className='resnav'>
				{ navbar ?  <>
				       <div onClick={()=> setNavbar(false)}>
					   		<i class="fa-solid fa-xmark"></i>
					   </div>
                       <div onClick={()=> setDropdown(!dropdown)} className='resnav-div1'>
					      Buy Crypto
						  { dropdown ? <i class="fa-solid fa-caret-up"></i> : <i class="fa-solid fa-caret-down"></i> }
						</div>
						{ dropdown ? <>
							<div className='resnav-div1-drop'>
								<Link>Bank Deposit</Link>
								<Link>Credit/Debit Card</Link>
								<Link>Cash Balance</Link>
								<Link>P2P Trading</Link>
							</div>
						  </> : null}
					   <div className='resnav-div1'>Markets</div>
					   <div onClick={()=> setDropdown1(!dropdown1)} className='resnav-div1'>
					      Trade
						  { dropdown1 ? <i class="fa-solid fa-caret-up"></i> : <i class="fa-solid fa-caret-down"></i> }
						</div>
						{ dropdown1 ? <>
							<div className='resnav-div1-drop'>
								<Link>Binance Convert</Link>
								<Link>Spot</Link>
								<Link>Margin</Link>
								<Link>Strategy Trading</Link>
								<Link>P2P</Link>
								<Link>Swamp Farming</Link>
								<Link>Fan Token</Link>
								<Link>Binance oTC</Link>
							</div>
						  </> : null}
						  <div onClick={()=> setDropdown2(!dropdown2)} className='resnav-div1'>
							Derivatives
							{ dropdown2 ? <i class="fa-solid fa-caret-up"></i> : <i class="fa-solid fa-caret-down"></i> }
							</div>
						{ dropdown2 ? <>
							<div className='resnav-div1-drop'>
								<Link>USDⓈ-M Futures</Link>
								<Link>COIN-M Futures</Link>
								<Link>Options</Link>
								<Link>Leveraged Tokens</Link>
								<Link>Leaderboard</Link>
								<Link>Binance Futures Overview</Link>
								<Link>Responsible Trading</Link>
								<Link>Blog</Link>
								<Link>VIP Portal</Link>
							</div>
						  </> : null}
						  <div onClick={()=> setDropdown3(!dropdown3)} className='resnav-div1'>
							 Earn
							{ dropdown3 ? <i class="fa-solid fa-caret-up"></i> : <i class="fa-solid fa-caret-down"></i> }
							</div>
						{ dropdown3 ? <>
							<div className='resnav-div1-drop'>
								<Link>Binance Earn</Link>
								<Link>Launchpad</Link>
								<Link>Simple Earn</Link>
								<Link>DeFi Staking</Link>
								<Link>BNB Vault</Link>
								<Link>Dual Investment</Link>
								<Link>Liquidity Farming</Link>
								<Link>Auto Invest</Link>
								<Link>Binance Pool</Link>
								<Link>ETH 2.0</Link>
							</div>
						  </> : null}
						  <div onClick={()=> setDropdown4(!dropdown4)} className='resnav-div1'>
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
						  </> : null}
						<div className='resnav-div1'>NFT</div>
						<div onClick={()=> setDropdown5(!dropdown5)} className='resnav-div1'>
							Institutional
							{ dropdown5 ? <i class="fa-solid fa-caret-up"></i> : <i class="fa-solid fa-caret-down"></i> }
							</div>
						{ dropdown5 ? <>
							<div className='resnav-div1-drop'>
								<Link>Institutional Home</Link>
								<Link>Link</Link>
								<Link>Asset Management Solutions</Link>
								<Link>VIP Portal</Link>
								<Link>Custody</Link>
								<Link>VIP Loan</Link>
								<Link>APIs</Link>
								<Link>Historical Market Data</Link>
								<Link>Execution & OTC Services</Link>
							</div>
						  </> : null}

						  <div className='resnav-div1'>NFT</div>
						  <div className='resnav-div1'>Downloads</div>
						  <div className='resnav-div1'>English</div>
						  <div className='resnav-div1'>USD</div>
				</> : null }
			</div>
		</div>
	)
}

export default HeaderComp


















{/* <a className="menuicon"   onClick={()=>{
		
	
		return(
			<> 
			<div
	   style={{
		 display: 'flex',
		 flexDirection: 'column',
		 alignItems: 'flex-start',
		 justifyContent: 'center',
		 height: '100vh',
		 margin: '40px',
	   }}>
		   {Users.map((Users, index) => {
		 return (
		   <div
			 style={{
			   display: 'flex',
			   flexDirection: 'column',
			   alignItems: 'flex-start',
			   justifyContent: 'center',
			   width: '200px',
			   margin: '20px',
			   backgroundColor: 'lightblue',
			   cursor: 'pointer',
			 }}
			 onClick={() => {
			   handlechange(index);
			 <li>{Users}</li>
			 }}
			 >
				
		   </div>
		 );
	   })}
	 </div> 
			</>
 
 
		)
	 
		 
	 }}>
	 <GiHamburgerMenu 
  />
 
	 </a> */}