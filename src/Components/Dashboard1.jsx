import React, { useState } from "react";
import "./Dashboard1.css";

import user from "./Img/user.png";
import tor3 from "./Img/tor3.png";
import user1 from "./Img/user1.png";
import rect3 from "./Img/rect3.png";
import reward4 from "./Img/reward4.png";
import reward from "./Img/reward.png";

const Dashboard1 = () => {
	const [show, setShow] = useState(true);

	const showBalance = () => {
		setShow(!show);
	};
	return (
		<div className="dashboard1">
			<div className="dashoard1col1">
				<p>Dashboard</p>
				<p>Security</p>
				<p>Identification</p>
				<p>Payment</p>
				<p>Referral</p>
				<p>Reward Center</p>
				<p>Task Center</p>
				<p>API Management</p>
				<p>Settings</p>
			</div>
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
						<div className="dashoard12row21">
							<div>
								<h4>Fund your account</h4>
								<p>
									Binance supports multiple options to fund account. Find a
									method that suits you the most.
								</p>
								<button>Video Tutorial</button>
							</div>
							<div>
								<h6>Buy Crypto</h6>
								<p>
									If you want to buy crypto directly with cash, this will be the
									best way for you..
								</p>
								<button className="dashoard12-btn-blue">Buy</button>
							</div>
							<div>
								<h6>Deposit Crypto</h6>
								<p>
									If you already have crypto currency, you can use deposit
									function to transfer them from other trading platforms or
									wallets to your Binance account.{" "}
								</p>
								<button>Deposit</button>
							</div>
							<div>
								<h5>Receive Crypto</h5>
								<p>
									If you are ready to receive some crypto from other Binance
									accounts, you can use the receive function.
								</p>
								<button>Receive</button>
							</div>
						</div>
						<div className="dashoard12row22">
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
							<div className="dashoard12row22-col13">
								<h4>Markets</h4>
								<img src={rect3} />
							</div>
							<div className="dashoard12row22-col14">
								<div>Spot Holdings</div>
								<div>Hot</div>
								<div>Favourite</div>
							</div>
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
						</div>
					</div>

					<div className="dashoard12row2-col2">
						<div className="dashoard12row22">
							<h6>Announcements</h6>
							<div className="dashoard12row22-col1">
								<img src={user1} />
								<div>
									<h6>Buy Crypto</h6>
									<p>
										If you want to buy crypto directly with cash, this will be
										the best way for you.
									</p>
								</div>
								<img src={rect3} />
							</div>
							<div className="dashoard12row22-col1">
								<img src={user1} />
								<div>
									<h6>Buy Crypto</h6>
									<p>
										If you want to buy crypto directly with cash, this will be
										the best way for you.
									</p>
								</div>
								<img src={rect3} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard1;
