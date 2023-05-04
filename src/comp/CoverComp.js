import React from 'react';
import bit from "../assets/bit.png";
import graph from "../assets/graph.png";
import IMG1 from "../assets/IMG1.png"
import nftgirl from "../assets/nftgirl.png";
import blue from "../assets/blue.png";
import white from "../assets/white.png";
import green from "../assets/green.png";
import graph1 from "../assets/graph1.png";
import graph2 from "../assets/graph2.png";
import parrot from "../assets/parrot.png";
import hill from "../assets/hill.png";
import design from "../assets/design.png";
import orange from "../assets/orange.png";
import B from "../assets/B.png";
import litlogo from "../assets/litlogo.png";
import headphone from "../assets/headphone.png";
import ellipse from "../assets/ellipse.png";
import righticon from "../assets/righticon.png";
import money from "../assets/money.png";
import bluecircle from "../assets/bluecircle.png";
import bitlogo from "../assets/bitlogo.png";
import iphone from "../assets/iphone.png";
import wallpaper from "../assets/wallpaper.png";
import man from "../assets/man.png";
import info from "../assets/info.png";
import plug from "../assets/plug.png";
import diveinto from "../assets/diveinto.png";
import earnusing from "../assets/earnusing.png";
import bigcard from "../assets/bigcard.png";
import barscanner from "../assets/barscanner.png";
import jointo from "../assets/jointo.png";
import android from "../assets/android.png";
import ios from "../assets/ios.png";
import settings from "../assets/settings.png";
import secure from "../assets/secure.png";
import personalised from "../assets/personalised.png";
import trusted from "../assets/trusted.png";
import FacebookIcon 	from '@material-ui/icons/Facebook';
import TelegramIcon 	from '@material-ui/icons/Telegram';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon 		from '@material-ui/icons/YouTube';
import LinkedIn 		from '@material-ui/icons/LinkedIn';
import RedditIcon 	from '@material-ui/icons/Reddit';
import TwitterIcon	 from '@material-ui/icons/Twitter';
import "../App.css";





















const CoverComp = () => {
	return (
		<div className="cover" >

			<div className="cover_top">

				<h4 className="starttext">Explore the Crypto Market</h4>
				<h1 className="buy600">Buy, trade, and hold</h1>
				<h1 className="buy600">600+ cryptocurrencies</h1>
				<h1 className="buy600">and NFTs on Name</h1>
				<p className="loremtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
				<p className="loremtext eium">eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				<button className="explorebtn">Explore</button>

				<div className="loremdiv">
					<div className="IMG da">
						<img src={IMG1} alt="bi" className="firtstpic" />
						<h5 className="nftname">NFT Name</h5>
						<img src={nftgirl} alt="b" className="nftpic" />
						<p className="crtr">Creator</p>
						<p className="crtrname">Creator Name</p>
						<p className="currentbid">Current Bid</p>
						<p className="eth">4.89 ETH</p>
					</div>

					<div className="box ca">
						<img src={blue} className="bluepic first" />
						<img src={graph1} className="covergraph x" />
						<p className="graphtext aa">+5.50%</p>
						<p className="smalltext ba">+5.50%</p>


						<img src={white} className="bluepic second" />
						<img src={graph2} className="covergraph y" />
						<p className="graphtext ab">+5.50%</p>
						<p className="smalltext bb">+5.50%</p>


						<img src={green} className="bluepic third" />
						<img src={graph1} className="covergraph z" />
						<p className="graphtext ac">+5.50%</p>
						<p className="smalltext bc">+5.50%</p>

						<p className="boxtext a">BAT</p>
						<p className="boxtext b">ETH</p>
						<p className="boxtext c">NEO</p>



					</div>
					<div className="box cb">
						<img src={blue} className="bluepic first" />
						<img src={graph1} className="covergraph x" />
						<p className="graphtext aa">+5.50%</p>
						<p className="smalltext ba">+5.50%</p>


						<img src={white} className="bluepic second" />
						<img src={graph2} className="covergraph y" />
						<p className="graphtext ab">+5.50%</p>
						<p className="smalltext bb">+5.50%</p>


						<img src={green} className="bluepic third" />
						<img src={graph1} className="covergraph z" />
						<p className="graphtext ac">+5.50%</p>
						<p className="smalltext bc">+5.50%</p>

						<p className="boxtext a">BAT</p>
						<p className="boxtext b">ETH</p>
						<p className="boxtext c">NEO</p>

					</div>
					<div className="IMG db">
						<img src={IMG1} alt="bi" className="firtstpic" />
						<h5 className="nftname">NFT Name</h5>
						<img src={nftgirl} alt="b" className="nftpic" />
						<p className="crtr">Creator</p>
						<p className="crtrname">Creator Name</p>
						<p className="currentbid">Current Bid</p>
						<p className="eth">4.89 ETH</p>
					</div>
				</div>
				<div className="parentimg">
					<img src={parrot} className="parrot" />
					<img src={hill} className="hill" />
					<img src={design} className="design" />
				</div>
				<div className="currencies">
					<div className="popular">
						<div>
							<p className="currencytext">Popular cryptocurrencies</p>
							<p className="viewmore">View more</p>


						</div>
						<div className="nl2m">
							
							<p className="menutext name">Name</p>
							<p className="menutext price" id="lastprice">Last Price</p>
							<p className="menutext change" id="change24">24h Change</p>
							<p className="menutext market"id="marketcap" >Market cap</p>
						</div>
						<div className="bitdiv">
							<div className="bitsymcir">
							<img src={orange} className="orangecircle" />
							<img src={B} className="bitsymbol" />
							</div>
							<p className="bittext ">BITCOIN</p>
							<p className="btctext">BTC</p>
							<p className="lptext">$300</p>
							<p className="chtext">+5.21%</p>
							<p className="mctext">$300</p>
						</div>

						<div className="litdiv">
							<img src={litlogo} className="litlogo" />
							<p className="bittext bit2 ">LITCOIN</p>
							<p className="btctext btc2 ">LTC</p>
							<p className="lptext lp2">$300</p>
							<p className="chtext ch2">+5.21%</p>
							<p className="mctext mc2">$300</p>
						</div>
						<div className="bitlit">
							<div className="bitsymcir secondbit">
							<img src={orange} className="orangecircle" />
							<img src={B} className="bitsymbol" />
							</div>
							<p className="bittext ">BITCOIN</p>
							<p className="btctext">BTC</p>
							<p className="lptext">$300</p>
							<p className="chtext">+5.21%</p>
							<p className="mctext">$300</p>
						</div>

						<div className="litdiv">
							<img src={litlogo} className="litlogo" />
							<p className="bittext bit2 ">LITCOIN</p>
							<p className="btctext btc2 ">LTC</p>
							<p className="lptext lp2">$300</p>
							<p className="chtext ch2">+5.21%</p>
							<p className="mctext mc2">$300</p>
						</div>
						<div className="bitlit">
							<div className="bitsymcir thirdbit">
							<img src={orange} className="orangecircle" />
							<img src={B} className="bitsymbol" />
							</div>
							<p className="bittext ">BITCOIN</p>
							<p className="btctext">BTC</p>
							<p className="lptext">$300</p>
							<p className="chtext">+5.21%</p>
							<p className="mctext">$300</p>
						</div>
					</div>
					<div className="newbtn">
						<p className="newtext">New: Trade Bitcoin for free</p>
						<button className="explorebtn secondexp">Explore</button>

					</div>
				</div>
				<div className="journeydiv">
					<div className="startopendiv">
						<p className="startjourney">Start your journey</p>
						<p className="openrare">Open rare Mystery Boxes, explore IGOs, Fan Tokens, and more with Binance NFT.</p>
					</div>
					<div className="chatzerodiv">
						<div className="chatdiv" id="chatid">
							<img src={headphone} className="headphone" />
							<div className="alltext all1">
								<p className="chatsupport">24/7 Chat Support</p>
								<p className="smallchat">Get 24/7 chat support with our friendly </p>
								<p className="smallchat sc2">customer service agents at your service.</p>
							</div>
						</div>
						<div className="chatdiv zerodiv" id="elipseid">
							<img src={ellipse} className="elipse" />
							<div className="alltext all2">
								<p className="chatsupport">Zero helding fee</p>
								<p className="smallchat">Get 24/7 chat support with our friendly </p>
								<p className="smallchat sc2">customer service agents at your service.</p>
							</div>
						</div>
					</div>
					<div className="reliableoptimaldiv">
						<div className="chatdiv reliablediv" id="reliableid">
							<img src={righticon} className="righticon" />
							<div className="alltext all3">
								<p className="chatsupport">Reliable Security</p>
								<p className="smallchat">Get 24/7 chat support with our friendly </p>
								<p className="smallchat sc2">customer service agents at your service.</p>
							</div>


						</div>
						<div className="chatdiv optimaldiv" id="optimalid">
							<img src={money} className="money" />
							<div className="alltext all4">
								<p className="chatsupport">Optimal transaction fee</p>
								<p className="smallchat">Get 24/7 chat support with our friendly </p>
								<p className="smallchat sc2">customer service agents at your service.</p>
							</div>


						</div>

					</div>
				</div>
				<div className="tradebitcoindiv">
					<div className="tradeall">
						<p className="trtext">New: Trade Bitcoin for free</p>
						<p className="trsmalltext">0 trading fee on selected Bitcoin (BTC) spot trading pairs now</p>
						<button className="explorebtn secondexp" id="tradeexp">Explore</button>

					</div>
					<div className="bigelipseimg">
						<img src={ellipse} className="bigelipse" />
						
					</div>

				</div>
				<div className="iphonewallpaper">
					<div>
						<img src={iphone} className="iphone" />
						<div className="wallpaperdiv">
							
						</div>
					</div>
					<div className="tradeall iphn" id="iphnid">
						<p className="trtext">New: Trade Bitcoin for free</p>
						<p className="trsmalltext">0 trading fee on selected Bitcoin (BTC) spot trading pairs now</p>
						<button className="explorebtn secondexp" id="trbtn">Explore</button>
					</div>
					<div className="fundparent">
						<div className="fund">
							<img src={man} className="man" />
							<div className="fyaparent">
								<p className="fya">Fund Your Account</p>
								<p className="fyasmall">0 trading fee on selected Bitcoin </p>
								<p className="fyasmall fs">(BTC) spot trading pairs now</p>
							</div>
						</div>
						<div className="fund coververify">
							<img src={info} className="man info" />
							<div className="infotextclass">

								<p className="fya">Verify Your Identity</p>
								<p className="fyasmall">0 trading fee on selected Bitcoin </p>
								<p className="fyasmall fs">(BTC) spot trading pairs now</p>
							</div>
						</div>
						<div className="fund start">
							<img src={plug} className="man plug" />
							<div className="tradingparent">

								<p className="fya">Start</p>
								<p className="fya fya2">Trading</p>

								<p className="fyasmall fs2">0 trading fee on selected Bitcoin </p>
								<p className="fyasmall fs">(BTC) spot trading pairs now</p>
							</div>
						</div>


					</div>
				</div>
				<div className="diveintodiv">
					<div className="diveintoparent">
						<p className="trtext">Dive into the world of NFTs</p>
						<p className="openraretext">Open rare Mystery Boxes, explore IGOs, Fan Tokens, and more with Binance NFT.</p>
						<button className="explorebtn secondexp" id="nftexp">Explore</button>
					</div>
					<div>
						<img src={diveinto} className="diveintoimg" />

					</div>
				</div>
				<div className="earnusingdiv">
					<img src={earnusing} className="earnusingimg" />
					<div className="earnusingtext">
						<p className="trtext" id="trtextid">Earn using our platform</p>
						<p className="openraretext holdtext">Hold your crypto funds and start earning.</p>
						<button className="explorebtn secondexp btnexp">Explore</button>
					</div>
				</div>
				<div className="carddiv">
					<div>
						<img src={bigcard} className="bigcard" />
					</div>
					<div className="opentextdiv">
						<p className="trtext">Dive into the world of NFTs</p>
						<p className="opentext">Open rare Mystery Boxes, explore IGOs, Fan Tokens, and more with Binance NFT.</p>
						<button className="explorebtn secondexp" id="openexp" >Explore</button>
					</div>
				</div>
				<div className="largestdiv">
					<div className="tradestaydiv">
						<p className="tradeon">Trade on the go. Anywhere, anytime.</p>
						<p className="stayin">Stay in the know with our app and desktop client.</p>
					</div>
					<div>
						<p className="downloadopt">More Download Options</p>
					</div> 
					<div className="qrdowndiv">
					<div className="qrcodediv">
						<img src={barscanner} className="barscanner" />
					</div>
					<div className="downscantext">
						<p className="downapp">Download App</p>
						<p className="scantext" >Scan QR code to downoad our application</p>
					</div>
					</div>
					<div className="jointodiv">
						<img src={jointo} className="jointoimg" />
					</div>
					<div className="cellphonesdiv">
						<div className="androidiosdiv">
							<div className="androiddiv">
								<img src={android} className="androidimg" />
								<div className="textbtnbox">
									<p className="androidtext">Android APK</p>
									<button className="explorebtn marg">Download</button>
								</div>
							</div>
							<div className="androiddiv iosdiv">
								<img src={ios} className="androidimg iosimg" />
								<div className="textbtnbox">

									<p className="androidtext">IOS</p>
									<button className="explorebtn marg">Download</button>
								</div>
							</div>
						</div>

						<div className="androidapidiv">
							<div className="androiddiv andappdiv">
								<img src={android} className="androidimg" />
								<div className="textbtnbox">

									<p className="androidtext">Android App</p>
									<button className="explorebtn marg">Download</button>
								</div>
							</div>
							<div className="androiddiv apidiv">
								<img src={settings} className="androidimg settingsimg" />
								<div className="textbtnbox">

									<p className="androidtext">API</p>
									<button className="explorebtn marg">Download</button>
								</div>
							</div>

						</div>

					</div>
				</div>
				<div className="safudiv">
					<div className="yourtrusteddiv">
						<p className="yourtrustedtext">Your trusted crypto exchange</p>
						<p className="hereattext">Here at Binance, we are committed to user protection with strict</p>
						<p className="hereattext protocols" > protocols and industry-leading technical measures.</p>
					</div>
					<div>
						<p className="downloadopt more">More Download Options</p>
					</div>
					<div className="spadiv">
						<div className="spa">
							<img src={secure} className="secure" />
							<div className="secbibox">
								<p className="secass">Secure Asset Fund for Users (SAFU)</p>
								<p className="binstore">Binance stores 10% of all trading fees in a secure asset fund to <br /> protect a share of user funds.</p>

							</div>

						</div>
						<div className="spa">
							<img src={personalised} className="secure personalised" />
							<div className="secbibox">
								<p className="secass">Personalised Access Control</p>
								<p className="binstore">Advanced access control allows you to restrict devices and <br />addresses that can access your account, for greater ease of mind.</p>

							</div>
						</div>
						<div className="spa">
							<img src={settings} className="secure sett" />
							<div className="secbibox">
								<p className="secass">Advanced Data Encryption</p>
								<p className="binstore">Your transaction data is secured via end-to-end encryption, <br />  ensuring that only you have access to your personal information.</p>

							</div>
						</div>

					</div>
					<div className="trustedimgdiv">
						<img src={trusted}  className="trusted" />

					</div>
				</div>
				<div className="chatfaqdiv">
					<div className="chatgetdiv">
						<p className="chatsup">24/7 Chat Support</p>
						<p className="getchat">Get 24/7 chat support with our friendly <br /> customer service agents at your service.</p>
						<button className="explorebtn viewbtn">View More</button>

					</div>
					<div className="chatgetdiv">
						<p className="chatsup">FAQs</p>
						<p className="getchat">View FAQs for detailed instructions on <br /> specific features.</p>
						<button className="explorebtn viewbtn">View More</button>
					</div>
					<div className="chatgetdiv">
						<p className="chatsup">Blog</p>
						<p className="getchat">Stay up to date with the latest stories and <br /> commentary</p>
						<button className="explorebtn viewbtn">View More</button>
					</div>


				</div>
				
			</div>
			<div className="faq_bottom">
				<div className="startearningdiv">
				<h1 className="startearningtext">Start earning today</h1>

				<div className="row_faq">
					<button className="signupbtn">Sign Up</button>

					{/* <button >Trade Now</button> */}
				</div>
				</div>
			</div>
			<div className="footer">
			<div className="footer_comp">
				<h6>About Us</h6>
				<p>About</p>
				<p>Careers</p>
				<p>Bissiness Contact</p>
				<p>Community</p>
				<p>Binance Blog</p>
				<p>Terms</p>
				<p>Privacy</p>
				<p>Risk Warning</p>

				<p>Announcements</p>
				<p>News</p>
				<p>Notices</p>
				<p>Cookie Preferences</p>

			</div>
			<div className="footer_comp">
				<h6>Products</h6>
				<p>Exchange</p>
				<p>Academy</p>
				<p>Binance Live</p>
				<p>Charity</p>
				<p> Card</p>

				<p>Labs</p>
				<p>Launchpad</p>
				<p>Research</p>
				<p>Trust Wallet</p>
				<p>NFT</p>
				<p>Binance Pay</p>
				<p>Binance Gift Card</p>
			</div>
			<div className="footer_comp">
				<h6>Service</h6>
				<p>Downloads</p>
				<p>Desktop Application</p>
				<p>Buy Crypto</p>
				<p>Institutional & VIP Services</p>
				<p>Referral</p>
				<p>Execution Solutions</p>
				<p>Affiliate</p>
				<p>BNB</p>
				<p>OTC Trading</p>
				<p>Listing Application</p>
				<p>P2P Merchant Application</p>
				<p>P2Pro Merchant Application</p>

				<p>Historical Market Data</p>
				<p>Proof of Asset</p>




			</div>
			<div className="footer_comp">
				<h6>Support</h6>
				<p>Give Us Feedback</p>
				<p>Support Center</p>
				<p>Submit a request</p>
				<p>APIs</p>
				<p>Fees</p>
				<p>Trading Rules</p>
				<p>Binance Verify</p>
				<p>Law Enforcement Requests</p>
				
			</div>
			<div className="footer_comp">
				<h6>Learn</h6>
				<p>Learn & Earn</p>
				<p>Browse Crypto Prices</p>
				<p>Buy BNB</p>
				
				<p>Buy BUSD</p>
				<p>Buy Bitcoin</p>
				<p>Buy Ethereum</p>
				<p>Buy Litecoin</p>
				<p>Buy Ripple</p>
				<p>Buy Bitcoin Cash</p>
				<p>Buy Dogecoin</p>
				<p>Buy Defi</p>
				<p>Buy SHIB</p>
				<p>Buy Tradeable Actions</p>


			</div>
			<div className="footer_comp_grid">
				<h6 >Community</h6>
				
				<div className="iconsdiv">
					
					<RedditIcon className="fbicon"/>	
					<FacebookIcon className="fbicon" />
					<InstagramIcon className="fbicon"/>
					<LinkedIn className="fbicon"/>
					<TelegramIcon className="fbicon"/>
					<YouTubeIcon className="fbicon" />
					<TwitterIcon className="fbicon"/>	
					
				</div>
			</div>  <br></br>
			<div>
			<p className="loghere">Logo Here</p>
		    </div> 
			<div className="copyrightdiv">
				<p className="copyrights">All Copyrights Reerved by Name</p>
			</div>
		</div>


			{/* <div className="cover_middle cover_grid">
				<div className="grid_comp">
					<div className="comp_top">
						<div className="comp_top_head">
							<img src={bit} alt="bitcoin" />
							<div>
								<h2>BNB/BUSD</h2>
								<p>Volume 7,03,35,229,734 BUSD</p>
							</div>
							<p className="color_green">1.17%</p>
						</div>
					</div>
					<div className="comp_middle">
						<h1 className="color_green">304.48 </h1>
						<p>$304.41</p>
					</div>

					<div className="comp_bottom">
						<img src={graph} alt="graph" />
						<div>
							<img src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-512.png" alt="" />
						</div>
					</div>
				</div>

				<div className="grid_comp">
					<div className="comp_top">
						<div className="comp_top_head">
							<img src="https://pbs.twimg.com/profile_images/1340063829347225600/fMUvnUG8_400x400.jpg" alt="bitcoin" />
							<div>
								<h2>GRT/BUSD</h2>
								<p>Volume 7,03,35,229,734 BUSD</p>
							</div>
							<p className="color_green">2.1%</p>
						</div>
					</div>
					<div className="comp_middle">
						<h1 className="color_red">304.48 </h1>
						<p>$304.41</p>
					</div>
					<div className="comp_bottom">
						<img src={graph} alt="graph" />
						<div>
							<img src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-512.png" alt="" />
						</div>
					</div>
				</div>

				<div className="grid_comp">
					<div className="comp_top">
						<div className="comp_top_head">
							<img src="https://pbs.twimg.com/profile_images/1389823228533739522/-Tj2WF_6.jpg" alt="bitcoin" />
							<div>
								<h2>DOT/BUSD</h2>
								<p>Volume 7,03,35,229,734 BUSD</p>
							</div>
							<p className="color_green">1.17%</p>
						</div>
					</div>
					<div className="comp_middle">
						<h1 className="color_red">304.48 </h1>
						<p>$304.41</p>
					</div>
					<div className="comp_bottom">
						<img src={graph} alt="graph" />
						<div>
							<img src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-512.png" alt="" />
						</div>
					</div>
				</div>

				<div className="grid_comp">
					<div className="comp_top">
						<div className="comp_top_head">
							<img src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Ethereum-ETH-icon.png" alt="bitcoin" />
							<div>
								<h2>ETH/BUSD</h2>
								<p>Volume 7,03,35,229,734 BUSD</p>
							</div>
							<p className="color_red">1.17%</p>
						</div>
					</div>
					<div className="comp_middle">
						<h1 className="color_green">304.48 </h1>
						<p>$304.41</p>
					</div>
					<div className="comp_bottom">
						<img src={graph} alt="graph" />
						<div>
							<img src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-512.png" alt="" />
						</div>
					</div>
				</div>



			</div>

			<div className="cover_bottom">
				<h1>Market trend</h1>


				<div className="price_table">

					<div className="price_header">
						<div className="name">
							<p>Name</p>
						</div>
						<div className="name">
							<p>Last Price</p>
						</div>
						<div className="name">
							<p>24th Change</p>
						</div>
						<div className="name">
							<p>Market</p>
						</div>
						<div className="name">
							<p></p>
						</div>
					</div>

					<div className="price_header">
						<div className="coin_data">
							<img src={bit} alt="bitcoin" />
							<h2>BNB</h2>
							<p>BNB</p>
						</div>
						<div className="coin_data">
							<h3>$301.12</h3>
						</div>
						<div className="coin_data">
							<h4>-0.003</h4>
						</div>
						<div className="coin_data_graph">
							<img src={graph} alt="graph" />
						</div>
						<div className="coin_data">
							<button>Buy</button>
						</div>
					</div>
					<div className="price_header">
						<div className="coin_data">
							<img src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Ethereum-ETH-icon.png" alt="bitcoin" />
							<h2>BNB</h2>
							<p>BNB</p>
						</div>
						<div className="coin_data">
							<h3>$301.12</h3>
						</div>
						<div className="coin_data">
							<h4>-0.003</h4>
						</div>
						<div className="coin_data_graph">
							<img src={graph} alt="graph" />
						</div>
						<div className="coin_data">
							<button>Buy</button>
						</div>
					</div>
					<div className="price_header">
						<div className="coin_data">
							<img src="https://pbs.twimg.com/profile_images/1389823228533739522/-Tj2WF_6.jpg" alt="bitcoin" />
							<h2>DOT</h2>
							<p>BNB</p>
						</div>
						<div className="coin_data">
							<h3>$301.12</h3>
						</div>
						<div className="coin_data">
							<h4>-0.003</h4>
						</div>
						<div className="coin_data_graph">
							<img src={graph} alt="graph" />
						</div>
						<div className="coin_data">
							<button>Buy</button>
						</div>
					</div>
					<div className="price_header">
						<div className="coin_data">
							<img src="https://pbs.twimg.com/profile_images/1389823228533739522/-Tj2WF_6.jpg" alt="bitcoin" />
							<h2>DOT</h2>
							<p>BNB</p>
						</div>
						<div className="coin_data">
							<h3>$301.12</h3>
						</div>
						<div className="coin_data">
							<h4>-0.003</h4>
						</div>
						<div className="coin_data_graph">
							<img src={graph} alt="graph" />
						</div>
						<div className="coin_data">
							<button>Buy</button>
						</div>
					</div>
					<div className="price_header">
						<div className="coin_data">
							<img src="https://pbs.twimg.com/profile_images/1389823228533739522/-Tj2WF_6.jpg" alt="bitcoin" />
							<h2>DOT</h2>
							<p>BNB</p>
						</div>
						<div className="coin_data">
							<h3>$301.12</h3>
						</div>
						<div className="coin_data">
							<h4>-0.003</h4>
						</div>
						<div className="coin_data_graph">
							<img src={graph} alt="graph" />
						</div>
						<div className="coin_data">
							<button>Buy</button>
						</div>
					</div>

				</div>

			</div>


			<div className="bottom_line">
				<h2>View More Markets</h2>
				<p>Introducing Unifi Protocol DAO (UNFI) on Binance Launchpool! Farm UNFI By Staking BNB, BUSD & ETH Tokens 11-13 More</p>
			</div> */}

		</div>
	)
}

export default CoverComp