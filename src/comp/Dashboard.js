import React from "react";
import "./dashboard.css";
import bnb from "../assets/BinImages/bnb.png";
import bitcoin from "../assets/BinImages/bitcoin.png";
import eth from "../assets/BinImages/eth.png";
import doge from "../assets/BinImages/doge.jpg";
import hooked from "../assets/BinImages/hooked.png";
import matic from "../assets/BinImages/matic.png";
import solana from "../assets/BinImages/solana.jpg";
import shiba from "../assets/BinImages/shiba.png";
import litecoin from "../assets/BinImages/litecoin.png";
import loka from "../assets/BinImages/loka.png";
import lunc from "../assets/BinImages/lunc.png";
import trx from "../assets/BinImages/trx.png";
import cardano from "../assets/BinImages/cardano.png";
import chainlink from "../assets/BinImages/chainlink.png";
import palka from "../assets/BinImages/palka.png";
import litentry from "../assets/BinImages/litentry.png";
import chiliz from "../assets/BinImages/chiliz.png";
import twt from "../assets/BinImages/twt.png";
import cosmos from "../assets/BinImages/cosmos.png";
import toko from "../assets/BinImages/toko.png";
import { useState } from "react";
import Sidebar from "./Sidebar";
import { NavLink } from "react-router-dom";

function Dashboard() {
	const [show, setShow] = useState(true);

	const showBalance = () => {
		setShow(!show);
	};

	return (
		<>
			<div className="mainparent">
				<div className="parent1">
					{/* <NavLink to="/intro-domain-name-pay"><h4>Domain Name Pay</h4></NavLink> */}
					<NavLink to="/strategy-trading">
						<h4>Strategy Trading</h4>
					</NavLink>
					<NavLink to="/strategy-trading2">
						<h4>Strategy Trading2</h4>
					</NavLink>
					<NavLink to="/strategy-trading3">
						<h4>Strategy Trading3</h4>
					</NavLink>
					{/* <NavLink to="/strategy-trading4"><h4>Strategy Trading4</h4></NavLink> */}
					{/* <NavLink to="/trade-crypto-futures"><h4>Trade Crypto Futures</h4></NavLink> */}
					<NavLink to="/history">
						<h4>Fundin History</h4>
					</NavLink>
					{/* <NavLink to="/history2"><h4>Fundin History2</h4></NavLink> */}
					{/* <NavLink to="/refer-friends"><h4>Referfriends</h4></NavLink> */}
					{/* <NavLink to="/welcome-login"><h4>Welcome Login</h4></NavLink> */}
					{/* <NavLink to="/create-account"><h4>Create Account</h4></NavLink> */}
					{/* <NavLink to="/login"><h4>Login</h4></NavLink> */}
					{/* <NavLink to="/verify-login"><h4>Verify Login</h4></NavLink> */}
					{/* <NavLink to="/signup"><h4>Sign Up</h4></NavLink> */}
					{/* <NavLink to="/fundin-history-graph"><h4>Fundin History Graph</h4></NavLink> */}
					{/* <NavLink to="/fundin-history-graph1"><h4>Fundin History Graph1</h4></NavLink> */}
					{/* <NavLink to="/fundin-history-graph2"><h4>Fundin History Graph2</h4></NavLink> */}
					{/* <NavLink to="/fundin-history-graph3"><h4>Fundin History Graph3</h4></NavLink> */}
					{/* <NavLink to="/marketing-overview"><h4>Market Overview</h4></NavLink> */}
					{/* <NavLink to="/ape-coin"><h4>APE Coin</h4></NavLink> */}
					{/* <NavLink to="/covert-crypto-limit"><h4>Covert Crypto Limit</h4></NavLink> */}
					{/* <NavLink to="/cryptocurrencies-announcement"><h4>Announcement</h4></NavLink> */}
					{/* <NavLink to="/cryptocurrencies-announcement2"><h4>Announcement2</h4></NavLink> */}
					{/* <NavLink to="/real-time-funding-rate"><h4>Real time funding rate</h4></NavLink> */}
					{/* <NavLink to="/real-time-funding-rate2"><h4>Real time funding rate2</h4></NavLink> */}
					{/* <NavLink to="/real-time-funding-rate3"><h4>Real time funding rate3</h4></NavLink> */}
					{/* <NavLink to="/market-favourites"><h4>Market Favourites</h4></NavLink> */}
					<NavLink to="/user-dashboard1">
						<h4>User Dashboard</h4>
					</NavLink>
					{/* <NavLink to="/user-dashboard2"><h4>User Dashboard2</h4></NavLink> */}
					{/* <NavLink to="/user-dashboard3"><h4>User Dashboard3</h4></NavLink> */}
					{/* <NavLink to='/wallet-overview'><h4>Wallet Overview</h4></NavLink> */}
					{/* <NavLink to='/launchpad'><h4>Launchpad</h4></NavLink> */}
					{/* <NavLink to='/binance-otc'><h4>Binance OTC</h4></NavLink> */}
					{/* <NavLink to='/stak-eth2'><h4>Binance ETH</h4></NavLink> */}
					{/* <NavLink to='/vault-bnb'><h4>Vault BNB</h4></NavLink> */}
					{/* <NavLink to='/binance-api'><h4>Binance API</h4></NavLink> */}
					{/* <NavLink to='/responsible-trading'><h4>Responsible Trading</h4></NavLink> */}
					{/* <NavLink to='/binance-all-tokens'><h4>Binance Tokens</h4></NavLink> */}
					{/* <NavLink to='/convert'><h4>Binance Convert</h4></NavLink> */}

					
			
					{/* <NavLink to='/wallet-fiat-and-sport'>
						<h4>Wallet Fiat & Sport</h4>
					</NavLink> */}
					{/* <NavLink to='/wallet-margin'>
						<h4>Wallet Margin</h4>
					</NavLink> */}
					{/* <NavLink to='/wallet-futures'>
						<h4>Wallet Futures</h4>
					</NavLink> */}
					{/* <NavLink to='/wallet-options'>
						<h4>Wallet Option</h4>
					</NavLink> */}
					{/* <NavLink to='/wallet-funding'>
						<h4>Wallet Funding</h4>
					</NavLink> */}
					{/* <NavLink to='/wallet-earn'>
						<h4>Wallet Earn</h4>
					</NavLink> */}
					{/* <NavLink to='/wallet-transaction-history'>
						<h4>Wallet Transaction History</h4>
					</NavLink> */}
					{/* <NavLink to='/wallet-account-statement'>
						<h4>Wallet Account Statement</h4>
					</NavLink> */}
					{/* <NavLink to='/wallet-verification'>
						<h4>Wallet Verification</h4>
					</NavLink> */}

					<br/>
					<br/>
					
					{/* <NavLink to="/annoucement"><h4>Announcement</h4></NavLink> */}
					{/* <NavLink to="/earn"><h4>Earn</h4></NavLink> */}
					{/* <NavLink to="/nftLandingPage"><h4>NFTLandingPage</h4></NavLink> */}
					<NavLink to="/depositeFlat">
						<h4>Deposit Flat</h4>
					</NavLink>
					<NavLink to="/withdrawFlat">
						<h4>withdrawFlat</h4>
					</NavLink>
					<NavLink to="/depositFlat2">
						<h4>depositFlat2</h4>
					</NavLink>
					<NavLink to="/withdrawFlat2">
						<h4>withdrawFlat2</h4>
					</NavLink>
					{/* <NavLink to="/depositFlat3"><h4>depositFlat3</h4></NavLink> */}
					<NavLink to="/depositFlat4">
						<h4>depositFlat4</h4>
					</NavLink>
					<NavLink to="/buyChat">
						<h4>buyChat</h4>
					</NavLink>
					<NavLink to="/sellChat">
						<h4>sellChat</h4>
					</NavLink>
					{/* <NavLink to="/covertCryp"><h4>covertCryp</h4></NavLink> */}
					{/* <NavLink to="/covertCryp2"><h4>covertCryp2</h4></NavLink> */}
					<NavLink to="/realTimeFundingRate">
						<h4>realTimeFundingRate</h4>
					</NavLink>
					{/* <NavLink to="/covertHist"><h4>covertHist</h4></NavLink> */}
					{/* <NavLink to="/binance"><h4>binance</h4></NavLink> */}
					{/* <NavLink to="/swap"><h4>swap</h4></NavLink> */}
					{/* <NavLink to="/tradecomp"><h4>trade</h4>	</NavLink> */}
				</div>
				<div className="parent2">
					<div className="markettext">
						<div className="markethead">
							<h4>Estimated Balance</h4>
							<button onClick={showBalance}>
								{show ? (
									<i className="fa-solid fa-eye"></i>
								) : (
									<i className="fa-solid fa-eye-slash"></i>
								)}
							</button>
						</div>
						{show ? (
							<div>
								<h4>0.00BTC ≅$0.00000000</h4>
								<p>
									Your account does not currently have any assets, complete
									identity verification in order to make deposits to your
									account.
								</p>
							</div>
						) : (
							<h4>*** Balance Hidden ***</h4>
						)}
					</div>
					<br></br>
					<br></br>

					<h4 className="markettext">Markets</h4>
					<br></br>
					<br></br>
					<div className="spothotfav">
						<h5 className="spot1">Spot Holdings</h5>
						<h5 className="spot1">Hot</h5>
						<h5 className="spot1">Favorite</h5>
					</div>
					<br></br>
					<br></br>
					<div>
						<table className="tableone">
							<tr>
								<td className="tddata1 nametd">Name</td>
								<td className="tddata1 pricetext">Price</td>
								<td className="tddata1 ">24H Change</td>
							</tr>
							<br></br>
							<tr>
								<td className="bnbtd tddata">
									<img className="bnbimg" src={bnb} />
									<p className="bnbtext">BNB</p> <p className="coinname">BNB</p>{" "}
								</td>
								<td className="tddata1">$281.1</td>
								<td className="tddata2">-3.13%</td>
								<td className="tddata3">Trade</td>
							</tr>
							<br></br>
							<tr>
								<td className="bnbtd tddata">
									<img className="bnbimg" src={bitcoin} />
									<p className="bnbtext">BTC</p>{" "}
									<p className="coinname">Bitcoin</p>{" "}
								</td>
								<td className="tddata1">$281.1</td>
								<td className="tddata2">-3.13%</td>
								<td className="tddata3">Trade</td>
							</tr>
							<br></br>
							<tr>
								<td className="bnbtd tddata">
									<img className="bnbimg" src={eth} />
									<p className="bnbtext">ETH</p>{" "}
									<p className="coinname">Ethereum</p>{" "}
								</td>
								<td className="tddata1">$281.1</td>
								<td className="tddata2">-3.13%</td>
								<td className="tddata3">Trade</td>
							</tr>{" "}
							<br></br>
							<tr>
								<td className="bnbtd tddata">
									<img className="bnbimg" src={doge} />
									<p className="bnbtext">DOGE</p>{" "}
									<p className="coinname">Dogecoin</p>{" "}
								</td>
								<td className="tddata1">$281.1</td>
								<td className="tddata2">-3.13%</td>
								<td className="tddata3">Trade</td>
							</tr>
							<br></br>
							<tr>
								<td className="bnbtd tddata">
									<img className="bnbimg" src={hooked} />
									<p className="bnbtext">HOOK</p>{" "}
									<p className="coinname">Hooked protocol</p>{" "}
								</td>
								<td className="tddata1">$281.1</td>
								<td className="tddata2">-3.13%</td>
								<td className="tddata3">Trade</td>
							</tr>{" "}
							<br></br>
							<tr>
								<td className="bnbtd tddata">
									<img className="bnbimg" src={matic} />
									<p className="bnbtext">TKO</p>{" "}
									<p className="coinname">TokoCrypto</p>{" "}
								</td>
								<td className="tddata1">$281.1</td>
								<td className="tddata2">-3.13%</td>
								<td className="tddata3">Trade</td>
							</tr>{" "}
							<br></br>
							<tr>
								<td className="bnbtd tddata">
									<img className="bnbimg" src={toko} />
									<p className="bnbtext">TKO</p>{" "}
									<p className="coinname">Tokocrypto</p>{" "}
								</td>
								<td className="tddata1">$281.1</td>
								<td className="tddata2">-3.13%</td>
								<td className="tddata3">Trade</td>
							</tr>{" "}
							<br></br>
							<tr>
								<td className="bnbtd tddata">
									<img className="bnbimg" src={solana} />
									<p className="bnbtext">SOL</p>{" "}
									<p className="coinname">Solana</p>{" "}
								</td>
								<td className="tddata1">$281.1</td>
								<td className="tddata2">-3.13%</td>
								<td className="tddata3">Trade</td>
							</tr>{" "}
							<br></br>
							<tr>
								<td className="bnbtd tddata">
									<img className="bnbimg" src={shiba} />
									<p className="bnbtext">SHIB</p>{" "}
									<p className="coinname">SHIBA INU</p>{" "}
								</td>
								<td className="tddata1">$281.1</td>
								<td className="tddata2">-3.13%</td>
								<td className="tddata3">Trade</td>
							</tr>{" "}
							<br></br>
							<tr>
								<td className="bnbtd tddata">
									<img className="bnbimg" src={litecoin} />
									<p className="bnbtext">LTC</p>{" "}
									<p className="coinname">Litecoin</p>{" "}
								</td>
								<td className="tddata1">$281.1</td>
								<td className="tddata2">-3.13%</td>
								<td className="tddata3">Trade</td>
							</tr>{" "}
							<br></br>
							<tr>
								<td className="bnbtd tddata">
									<img className="bnbimg" src={loka} />
									<p className="bnbtext">LOKA</p>{" "}
									<p className="coinname">Leage of Kingdoms</p>{" "}
								</td>
								<td className="tddata1">$281.1</td>
								<td className="tddata2">-3.13%</td>
								<td className="tddata3">Trade</td>
							</tr>{" "}
							<br></br>
							<tr>
								<td className="bnbtd tddata">
									<img className="bnbimg" src={lunc} />
									<p className="bnbtext">LUNC</p> <p>Terra Classic</p>{" "}
								</td>
								<td className="tddata1">$281.1</td>
								<td className="tddata2">-3.13%</td>
								<td className="tddata3">Trade</td>
							</tr>{" "}
							<br></br>
							<tr>
								<td className="bnbtd tddata">
									<img className="bnbimg" src={trx} />
									<p className="bnbtext">TRX</p> <p>TRON</p>{" "}
								</td>
								<td className="tddata1">$281.1</td>
								<td className="tddata2">-3.13%</td>
								<td className="tddata3">Trade</td>
							</tr>{" "}
							<br></br>
							<tr>
								<td className="bnbtd tddata">
									<img className="bnbimg" src={cardano} />
									<p className="bnbtext">ADA</p> <p>Cardano</p>{" "}
								</td>
								<td className="tddata1">$281.1</td>
								<td className="tddata2">-3.13%</td>
								<td className="tddata3">Trade</td>
							</tr>{" "}
							<br></br>
							<tr>
								<td className="bnbtd tddata">
									<img className="bnbimg" src={chainlink} />
									<p className="bnbtext">LINK</p> <p>ChainLink</p>{" "}
								</td>
								<td className="tddata1">$281.1</td>
								<td className="tddata2">-3.13%</td>
								<td className="tddata3">Trade</td>
							</tr>{" "}
							<br></br>
							<tr>
								<td className="bnbtd tddata">
									<img className="bnbimg" src={palka} />
									<p className="bnbtext">DOT</p> <p>Palkadot</p>{" "}
								</td>
								<td className="tddata1">$281.1</td>
								<td className="tddata2">-3.13%</td>
								<td className="tddata3">Trade</td>
							</tr>{" "}
							<br></br>
							<tr>
								<td className="bnbtd tddata">
									<img className="bnbimg" src={litentry} />
									<p className="bnbtext">LIT</p> <p>Litentry</p>{" "}
								</td>
								<td className="tddata1">$281.1</td>
								<td className="tddata2">-3.13%</td>
								<td className="tddata3">Trade</td>
							</tr>{" "}
							<br></br>
							<tr>
								<td className="bnbtd tddata">
									<img className="bnbimg" src={chiliz} />
									<p className="bnbtext">CHZ</p> <p>Chiliz</p>{" "}
								</td>
								<td className="tddata1">$281.1</td>
								<td className="tddata2">-3.13%</td>
								<td className="tddata3">Trade</td>
							</tr>{" "}
							<br></br>
							<tr>
								<td className="bnbtd tddata">
									<img className="bnbimg" src={twt} alt="pic" />
									<p className="bnbtext">TWT</p> <p>Trust Wallet</p>{" "}
								</td>
								<td className="tddata1">$281.1</td>
								<td className="tddata2">-3.13%</td>
								<td className="tddata3">Trade</td>
							</tr>{" "}
							<br></br>
							<tr>
								<td className="bnbtd tddata">
									<img className="bnbimg" src={cosmos} alt="cosmo" />
									<p className="bnbtext">ATOM</p> <p>Cosmos</p>{" "}
								</td>
								<td className="tddata1">$281.1</td>
								<td className="tddata2">-3.13%</td>
								<td className="tddata3">Trade</td>
							</tr>{" "}
							<br></br>
						</table>
					</div>
				</div>
				<div className="parent3">
					<Sidebar />
				</div>
			</div>
		</>
	);
}

export default Dashboard;
