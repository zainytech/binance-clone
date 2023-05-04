import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import SignIn from "./comp/signin";
// import SignUp from "./comp/signup";
// import HeaderComp from "./comp/HeaderComp";
import App from "./App";
import CoverComp from "./comp/CoverComp";
import Dashboard from "./comp/Dashboard";
import Security from "./comp/Security";
import Signoptions from "./comp/signoptions";
import Identification from "./comp/Identification";
import Payment from "./comp/Payment";
import Footer from "./comp/FooterComp";
import Reward from "./comp/Reward";
import Referral from "./comp/Referral";
import Apimanagement from "./comp/Apimanagement";
import Standardreferral from "./comp/Standardreferral";
import Taskcenter from "./comp/Taskcenter";
import Setting from "./comp/Setting";
import Liteoverview from "./comp/Liteoverview";
import Faq from "./comp/Faq";
import Deposit from "./comp/Deposit";
import Idnp from "./Components/Idnp";
import Trade from "./Components/Trade";
import Strategy from "./Components/Strategy";
import Strategy2 from "./Components/Strategy2";
import Strategy3 from "./Components/Strategy3";
import Strategy4 from "./Components/Strategy4";
import History from "./Components/History";
import History2 from "./Components/History2";
import Referfriends from "./Components/Referfriends";
import Login from "./Components/Login";
import Caccount from "./Components/Caccount";
import Verify from "./Components/Verify";
import Login2 from "./Components/Login2";
import Signup from "./Components/Signup";
import Graph1 from "./Components/Graph1";
import Graph from "./Components/Graph";
import Graph2 from "./Components/Graph2";
import History3 from "./Components/History3";
import Marketing from "./Components/Marketing";
import Acoin from "./Components/Acoin";
import Covert from "./Components/Covert";
import Announce from "./Components/Announce";
import Announce2 from "./Components/Announce2";
import Realtime from "./Components/Realtime";
import Realtime2 from "./Components/Realtime2";
import Realtime3 from "./Components/Realtime3";
import Market from "./Components/Market";
import Dashboard1 from "./Components/Dashboard1";
import Dashboard2 from "./Components/Dashboard2";
import Dashboard3 from "./Components/Dashboard3";
import {Waoverview} from "./Components/Waoverview";

import {Wamargin} from "./Components/Wamargin";
import {Wafutures} from "./Components/Wafutures";
import {Waoptions} from "./Components/Waoptions";
import {Wafunding} from "./Components/Wafunding";
import {Waearn }from "./Components/Waearn";
import { Watransaction } from "./Components/Watransaction";
import {Wastatement} from "./Components/Wastatement";
import { Waverification } from "./Components/Waverification";
import { Wafiat } from "./Components/Wafiat";
import Launchpad from "./Components/Launchpad";
import Otc from "./Components/Otc";
import Binanceth from "./Components/Binanceth";
import Vault from "./Components/Vault";
import Binanceapi from "./Components/Binanceapi";
import Resptrade from "./Components/Resptrade";
import Tokens from "./Components/Tokens";
import Convert from "./Components/Convert";
import Header from './comp/Header';
// import { Announcement } from "@material-ui/icons";
import Announcement  from './Components/comp/Annoucement'
import Earn from './Components/comp/Earn'
import NFTLandingPage from './Components/comp/NFTLandingPage';
import DepositFlat from './Components/comp/DepositFlat';
import WithdrawFlat from './Components/comp/WithdrawFlat';
import DepositFlat2 from './Components/comp/DepositFlat2';
import WithdrawFlat2 from './Components/comp/WithdrawFlat2';
import DepositFlat3 from './Components/comp/DepositFlat3';
import DepositFlat4 from './Components/comp/DepositFlat4';
import BuyChat from './Components/comp/BuyChat';
import SellChat from './Components/comp/SellChat';
import CovertCryp from './Components/comp/CovertCryp';
import CovertCryp2 from './Components/comp/CovertCryp2';
import RealTimeFundingRate from './Components/comp/RealTimeFundingRate';
import CovertHist from './Components/comp/CovertHist';
import Swap from './Components/comp/Swap';
import Binance from './Components/comp/Binance'
import Tradecomp from './Components/comp/Tradecomp';
import Otctrade from "./Components/Otctrade";
import DepositFlat5 from "./Components/comp/DepositFlat5";

function RouteConfig() {
	return (
		<>
					<BrowserRouter>
						<Header/>
						<Routes>
							<Route path="/welcome-login" element={<Login />} />
							<Route path="/kyc" element={<Caccount />} />
							<Route path="/verify-login" element={<Verify />} />
							<Route path="/login" element={<Login2 />} />
							<Route path="/signup" element={<Signup />} />
							<Route path="/" element={<CoverComp />} />
							{/* <Route path="/Dashboard" element={<Dashboard />} /> */}
							<Route  path="/security" element={<Security/>} />
							<Route  path="/payment" element={<Payment/>} /> 
							<Route  path="/reward" element={<Reward/>} />
							<Route  path="/referral" element={<Referral/>} />
							<Route  path="/standard-referral" element={<Standardreferral/>} /> 
							<Route  path="/identification" element={<Identification/>} />
							<Route  path="/api-management" element={<Apimanagement/>} />
							<Route  path="/task" element={<Taskcenter/>} />
							<Route  path="/setting" element={<Setting/>} /> 
							{/* <Route path="/faq" element={<Faq />} /> */}
							<Route  path="/liteoverview" element={<Liteoverview/>} />
							<Route  path="/deposit" element={<Deposit/>} />
							<Route path="/trade-crypto-futures" element={<Trade />} />
							<Route path="/intro-domain-name-pay" element={<Idnp />} />
							<Route path="/strategy-trading" element={<Strategy />} />
							<Route path="/strategy-trading2" element={<Strategy2 />} />
							<Route path="/strategy-trading3" element={<Strategy3 />} />
							<Route path="/strategy-trading4" element={<Strategy4 />} />
							{/* <Route path="/signoptions" element={<Signoptions />} /> */}
							<Route path="/history" element={<History />} />
							<Route path="/history2" element={<History2 />} />
							<Route path="/refer-friends" element={<Referfriends />} />
							<Route path="/fundin-history-graph" element={<Graph />} />
							<Route path="/fundin-history-graph1" element={<Graph1 />} />
							<Route path="/fundin-history-graph2" element={<Graph2 />} />
							<Route path="/fundin-history-graph3" element={<History3 />} />
							<Route path="/marketing-overview" element={<Marketing />} />
							<Route path="/ape-coin" element={<Acoin />} />
							<Route path="/covert-crypto-limit" element={<Covert />} />
							<Route path="/cryptocurrencies-announcement" element={<Announce />}/>
							<Route 	path="/cryptocurrencies-announcement2" element={<Announce2 />}/>
							<Route path="/real-time-funding-rate" element={<Realtime />} />
							<Route path="/real-time-funding-rate2" element={<Realtime2 />} />
							<Route path="/real-time-funding-rate3" element={<Realtime3 />} />
							<Route path="/market-favourites" element={<Market />} />
							<Route path="/user-dashboard1" element={<Dashboard1 />} />
							<Route path="/user-dashboard2" element={<Dashboard2 />} />
							<Route path="/dashboard3" element={<Dashboard3 />} />
							<Route path="/wallet-Overview" element={< Waoverview />} />
							<Route path="/wallet-fiat-and-sport" element={< Wafiat />} />
							<Route path="/wallet-margin" element={< Wamargin />} />
							<Route path="/wallet-futures" element={< Wafutures />} />
							<Route path="/wallet-options" element={< Waoptions />} />
							<Route path="/wallet-funding" element={< Wafunding />} />
							<Route path="/wallet-earn" element={< Waearn />} />
							<Route path="/wallet-transaction-history" element={< Watransaction />} />
							<Route path="/wallet-account-statement" element={< Wastatement />} />
							<Route path="/wallet-verification" element={< Waverification />} />
							<Route path="/launchpad" element={< Launchpad />} />
							<Route path="/binance-otc" element={< Otc />} />
							<Route path="/stak-eth2" element={< Binanceth />} />
							<Route path="/vault-bnb" element={< Vault />} />
							<Route path="/binance-api" element={< Binanceapi />} />
							<Route path="/responsible-trading" element={< Resptrade />} />
							<Route path="/binance-all-tokens" element={< Tokens />} />
							<Route path="/convert" element={< Convert />} />
							<Route path='otc-trading-history' element={<Otctrade/>}/>



							<Route path="/annoucement" element={<Announcement/>}/>
							<Route path="/earn" element={<Earn/>}/>
							<Route path="/nftLandingPage" element={<NFTLandingPage/>}/>
							<Route path="/depositeFlat" element={<DepositFlat/>}/>
							<Route path="/withdrawFlat" element={<WithdrawFlat/>}/>
							<Route path="/depositFlat2" element={<DepositFlat2/>}/>
							<Route path="/withdrawFlat2" element={<WithdrawFlat2/>}/>
							<Route path="/depositFlat3" element={<DepositFlat3/>}/>
							<Route path="/depositFlat5" element={<DepositFlat5/>}/>
							<Route path="/depositFlat4" element={<DepositFlat4/>}/>
							<Route path="/buyChat" element={<BuyChat/>}/>
							<Route path="/sellChat" element={<SellChat/>}/>
							<Route path="/covertCryp" element={<CovertCryp/>}/>
							<Route path="/covertCryp2" element={<CovertCryp2/>}/>
							<Route path="/realTimeFundingRate" element={<RealTimeFundingRate/>}/>
							<Route path="/covertHist" element={<CovertHist/>}/>
							<Route path="/binance" element={<Binance/>}/>
							<Route path="/swap" element={<Swap/>}/>
							<Route path="/tradecomp" element={<Tradecomp/>}/>
						</Routes>
						<Footer />
					</BrowserRouter>
		</>
	);
}

export default RouteConfig;
