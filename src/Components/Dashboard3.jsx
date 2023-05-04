import React, { useState } from "react";
import "./Dashboard3.css";

import user from "./Img/user.png";
import tor3 from "./Img/tor3.png";
import user1 from "./Img/user1.png";
import user2 from "./Img/user2.png";
import user3 from "./Img/user3.png";
import rect3 from "./Img/rect3.png";
import reward4 from "./Img/reward4.png";
import reward from "./Img/reward.png";
import binance5 from "./Img/binance5.png";
import Sidebar from './Sidebar'
import { Link } from "react-router-dom";

const Dashboard3 = () => {
	const [data, setData] = useState(1);
	const [show, setShow] = useState(true);

	const showBalance = () => {
		setShow(!show);
	};
	return (
		<div className="dashboard1">
		 	<Sidebar/>
			
			<div className="dashoard1col1-hide">
				Dashboard <img src={rect3} />
			</div>
			<div className="dashoard1col2">
				<div className="dashoard12row1">
					<img src={user} />
					<div className="dashoard12row1-col2">
						<h6>
							Welcome to <span> Domain Name </span>
						</h6>
						<div className="dashoard12row1-col2-row">
							<div>
								<p>User ID</p>
								<p>12345678</p>
							</div>
							<div>
								<p>User Type</p>
								<p>Regular User</p>
							</div>
							<div>
								<p>Twitter</p>
								<p>Not linked</p>
							</div>
							<div>
								<p>Last Login Time</p>
								<p>2022-08-06 05:19:35(119.160.96.240)</p>
							</div>
						</div>
					</div>
				</div>
				<div className="dashoard12row2">
					<div className="dashoard12row2-col1">
						<div className="dashoard2row1">
							<div className="dashoard12row22-col1">
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
								<div className="dashoard12row22-col12">
									<h6>
										0.00BTC ≅ <span>$0.00000000</span>
									</h6>
									<p>
										Your account does not currently have any assets, complete
										identity verification in order to make deposits to your
										account.
									</p>
								</div>
							) : (
								<h6>*** Balance Hidden ***</h6>
							)}
							<div className="dashoard2row1-col1">
								<img src={user2} />
								<div className="dashoard2row1-col2">
									<div className="dashoard2row1-col2-colm">
										<div>
											<div>
												<img src={user3} />
												Flat and Spot
											</div>
											<p>0.00 BTC ≈ $0.000000</p>
										</div>
										<div>
											<div>
												<img src={user3} />
												Funding
											</div>
											<p>0.00 BTC ≈ $0.000000</p>
										</div>
										<div>
											<div>
												<img src={user3} />
												Cross Margin
											</div>
											<p>0.00 BTC ≈ $0.000000</p>
										</div>
									</div>
									<div className="dashoard2row1-col2-colm">
										<div>
											<div>
												<img src={user3} />
												Isolated Margin
											</div>
											<p>0.00 BTC ≈ $0.000000</p>
										</div>
										<div>
											<div>
												<img src={user3} />
												USD-M Futures
											</div>
											<p>0.00 BTC ≈ $0.000000</p>
										</div>
										<div>
											<div>
												<img src={user3} />
												COIN-M Futures
											</div>
											<p>0.00 BTC ≈ $0.000000</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="dashoard12row22">
							<div className="dashoard12row22-col13">
								<h4>Markets</h4>
								<img src={rect3} />
							</div>
							<div className="dashoard32row22-col14-scroll">
							<div className="dashoard32row22-col14">
								<div onClick={()=> setData(1)} className={ data === 1 && 'dashoard32row22-col14active' }>Spot Holdings</div>
								<div onClick={()=> setData(2)} className={ data === 2 && 'dashoard32row22-col14active' }>Hot</div>
								<div onClick={()=> setData(3)} className={ data === 3 && 'dashoard32row22-col14active' }>Favourite</div>
							</div>
							{ data === 1 &&
							<div className="dash3m2row3col1">
								<div>
									<div className="market2grid1img">
										<p>Name</p>
										<img src={tor3} />
									</div>
									<div className="market2gf">
										<img src={reward} />
										<div>
											<div>BITCOIN</div>
											<div>BTC</div>
										</div>
									</div>
									<div className="market2gf">
										<img src={reward4} />
										<div>
											<div>LITCOIN</div>
											<div>LTC</div>
										</div>
									</div>
									<div className="market2gf">
										<img src={reward} />
										<div>
											<div>BITCOIN</div>
											<div>BTC</div>
										</div>
									</div>
									<div className="market2gf">
										<img src={reward4} />
										<div>
											<div>LITCOIN</div>
											<div>LTC</div>
										</div>
									</div>
									<div className="market2gf">
										<img src={reward} />
										<div>
											<div>BITCOIN</div>
											<div>BTC</div>
										</div>
									</div>
								</div>
								<div>
									<div className="market2grid1img">
										<p>Amount/EST Value</p>
										<img src={tor3} />
									</div>
									<p className="dash3m2col1-margin">0.00 BTC ≈ $0.00</p>
									<p className="dash3m2col1-margin">0.00 BTC ≈ $0.00</p>
									<p className="dash3m2col1-margin">0.00 BTC ≈ $0.00</p>
									<p className="dash3m2col1-margin">0.00 BTC ≈ $0.00</p>
									<p className="dash3m2col1-margin">0.00 BTC ≈ $0.00</p>
								</div>
								<div>
									<div className="market2grid1img">
										<p>Price</p>
										<img src={tor3} />
									</div>
									<p className="market2col1-margin">$300</p>
									<p className="market2col1-margin">$300</p>
									<p className="market2col1-margin">$300</p>
									<p className="market2col1-margin">$300</p>
									<p className="market2col1-margin">$300</p>
								</div>
								<div>
									<div className="market2grid1img">
										<p>24h Change</p>
										<img src={tor3} />
									</div>
									<p className="market2green">+5.21%</p>
									<p className="market2red">-5.21%</p>
									<p className="market2green">+5.21%</p>
									<p className="market2red">-5.21%</p>
									<p className="market2green">+5.21%</p>
								</div>
								<div>
									<div className="market2grid1img market3-hidden">
										<p>Market Cap</p>
										<img src={tor3} />
									</div>
									<p className="market2col1-margin market2co1-blue">Trade</p>
									<p className="market2col1-margin market2co1-blue">Trade</p>
									<p className="market2col1-margin market2co1-blue">Trade</p>
									<p className="market2col1-margin market2co1-blue">Trade</p>
									<p className="market2col1-margin market2co1-blue">Trade</p>
								</div>
							</div> }
							{ data === 2 && 
							<div className="market2row3col1">
								<div>
									<div className="market2grid1img">
										<p>Name</p>
										<img src={tor3} />
									</div>
									<div className="market2gf">
										<img src={reward} />
										<div>
											<div>BITCOIN</div>
											<div>BTC</div>
										</div>
									</div>
									<div className="market2gf">
										<img src={reward4} />
										<div>
											<div>LITCOIN</div>
											<div>LTC</div>
										</div>
									</div>
									<div className="market2gf">
										<img src={reward} />
										<div>
											<div>BITCOIN</div>
											<div>BTC</div>
										</div>
									</div>
									<div className="market2gf">
										<img src={reward4} />
										<div>
											<div>LITCOIN</div>
											<div>LTC</div>
										</div>
									</div>
									<div className="market2gf">
										<img src={reward} />
										<div>
											<div>BITCOIN</div>
											<div>BTC</div>
										</div>
									</div>
								</div>
								<div>
									<div className="market2grid1img">
										<p>Price</p>
										<img src={tor3} />
									</div>
									<p className="market2col1-margin">$300</p>
									<p className="market2col1-margin">$300</p>
									<p className="market2col1-margin">$300</p>
									<p className="market2col1-margin">$300</p>
									<p className="market2col1-margin">$300</p>
								</div>
								<div>
									<div className="market2grid1img">
										<p>24h Change</p>
										<img src={tor3} />
									</div>
									<p className="market2green">+5.21%</p>
									<p className="market2red">-5.21%</p>
									<p className="market2green">+5.21%</p>
									<p className="market2red">-5.21%</p>
									<p className="market2green">+5.21%</p>
								</div>
								<div>
									<div className="market2grid1img market3-hidden">
										<p>Market Cap</p>
										<img src={tor3} />
									</div>
									<p className="market2col1-margin market2co1-blue">Trade</p>
									<p className="market2col1-margin market2co1-blue">Trade</p>
									<p className="market2col1-margin market2co1-blue">Trade</p>
									<p className="market2col1-margin market2co1-blue">Trade</p>
									<p className="market2col1-margin market2co1-blue">Trade</p>
								</div>
							</div>
							}
							{ data === 3 && 
							<div className="market2row3col1">
								<div>
									<div className="market2grid1img">
										<p>Name</p>
										<img src={tor3} />
									</div>
									<div className="market2gf">
										<img src={reward} />
										<div>
											<div>BITCOIN</div>
											<div>BTC</div>
										</div>
									</div>
									<div className="market2gf">
										<img src={reward4} />
										<div>
											<div>LITCOIN</div>
											<div>LTC</div>
										</div>
									</div>
									<div className="market2gf">
										<img src={reward} />
										<div>
											<div>BITCOIN</div>
											<div>BTC</div>
										</div>
									</div>
									<div className="market2gf">
										<img src={reward4} />
										<div>
											<div>LITCOIN</div>
											<div>LTC</div>
										</div>
									</div>
									<div className="market2gf">
										<img src={reward} />
										<div>
											<div>BITCOIN</div>
											<div>BTC</div>
										</div>
									</div>
								</div>
								<div>
									<div className="market2grid1img">
										<p>Price</p>
										<img src={tor3} />
									</div>
									<p className="market2col1-margin">$300</p>
									<p className="market2col1-margin">$300</p>
									<p className="market2col1-margin">$300</p>
									<p className="market2col1-margin">$300</p>
									<p className="market2col1-margin">$300</p>
								</div>
								<div>
									<div className="market2grid1img">
										<p>24h Change</p>
										<img src={tor3} />
									</div>
									<p className="market2green">+5.21%</p>
									<p className="market2red">-5.21%</p>
									<p className="market2green">+5.21%</p>
									<p className="market2red">-5.21%</p>
									<p className="market2green">+5.21%</p>
								</div>
								<div>
									<div className="market2grid1img market3-hidden">
										<p>Market Cap</p>
										<img src={tor3} />
									</div>
									<p className="market2col1-margin market2co1-blue">Trade</p>
									<p className="market2col1-margin market2co1-blue">Trade</p>
									<p className="market2col1-margin market2co1-blue">Trade</p>
									<p className="market2col1-margin market2co1-blue">Trade</p>
									<p className="market2col1-margin market2co1-blue">Trade</p>
								</div>
							</div>
							}</div>
						</div>
						</div>
					<div className="dashoard12row2-col2">
						<div className="dashoard12row22-img">
							<img src={binance5} />
						</div>
						<div className="dashoard12row22">
							<Link to='/annoucement' style={{textDecoration: 'none', color: 'white'}}><h4>Announcements</h4></Link>
							<Link to='/cryptocurrencies-announcement' style={{textDecoration: 'none', color: 'white'}}><div className="dashoard12row22-col1">
								<img src={user1} />
								<div>
									<h6>Buy Crypto</h6>
									<p>
										If you want to buy crypto directly with cash, this will be
										the best way for you.
									</p>
								</div>
								<img src={rect3} />
							</div></Link>
							<Link to='/cryptocurrencies-announcement2' style={{textDecoration: 'none', color: 'white'}}><div className="dashoard12row22-col1">
								<img src={user1} />
								<div>
									<h6>Buy Crypto</h6>
									<p>
										If you want to buy crypto directly with cash, this will be
										the best way for you.
									</p>
								</div>
								<img src={rect3} />
							</div></Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard3;
