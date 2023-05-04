import React from 'react';
import FacebookIcon 	from '@material-ui/icons/Facebook';
import TelegramIcon 	from '@material-ui/icons/Telegram';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon 		from '@material-ui/icons/YouTube';
import LinkedIn 		from '@material-ui/icons/LinkedIn';
import RedditIcon 	from '@material-ui/icons/Reddit';
import TwitterIcon	 from '@material-ui/icons/Twitter';

const FooterComp = () => {
	return (

		<div>
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
	    
		</div>
	)
}

export default FooterComp