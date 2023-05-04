import React from 'react';
import "./Annoucement.css";

import searchicon from "../assets/searchicon.png";

import alltopicsbox1 from "../assets/alltopicsbox1.png";
import alltopicsbox2 from "../assets/alltopicsbox2.png";
import alltopicsbox3 from "../assets/alltopicsbox3.png";
import alltopicsbox4 from "../assets/alltopicsbox4.png";
import alltopicsbox6 from "../assets/alltopicsbox6.png";
import alltopicsbox7 from "../assets/alltopicsbox7.png";
import alltopicsbox8 from "../assets/alltopicsbox8.png";


function Annoucement(){
    return(
            <>
            <div class="main">
<div class="header1">
    <p>Annoucement</p>
</div>
<div class="header2">
    <p>what are you looking for?</p>

<div class="searchbar-div">
    <img src={searchicon}/>
    <input data-bn-type="input" placeholder="Search anoucements" value=""></input>
    <button class="search-btn">Search</button>
</div>
</div>
<div class="alltopics">
    <p>All Topics</p>
    <div class="alltopics-boxes">
        <div class="atbox-row">
            <div class="atbox1">
                <img src={alltopicsbox1}></img>
                <span class="boxline1">New Cryptocurrency Listing</span>
                <span class="boxline2">Check out the latest coin listings and pairs on Launchpad, Launchpool, Spot, Margin, and Futures markets.</span>
            </div>
            <div class="atbox1">
                <img src={alltopicsbox2}></img>
                <span class="boxline1">Latest Binance News</span>
                <span class="boxline2">Stay on top of what's new in binance.</span>
            </div>
            <div class="atbox1">
                <img src={alltopicsbox3}></img>
                <span class="boxline1">Latest Activities</span>
                <span class="boxline2">Find promotions that interest you.</span>
            </div>
        </div>

        <div class="atbox-row">
            <div class="atbox1">
                <img src={alltopicsbox4}></img>
                <span class="boxline1">New Fiat Listing</span>
                <span class="boxline2">See which new fiat-to-crypto trading pairs are available on Binance.</span>
            </div>
            <div class="atbox1">
                <img src={alltopicsbox1}></img>
                <span class="boxline1">API updates</span>
                <span class="boxline2">Learn latest news on API updates.</span>
            </div>
            <div class="atbox1">
                <img src={alltopicsbox6}></img>
                <span class="boxline1">Crypto Airdrops</span>
                <span class="boxline2">Check the latest crypto airdrops binance supports.</span>
            </div>
        </div>

        <div class="atbox-row">
            <div class="atbox1">
                <img src={alltopicsbox7}></img>
                <span class="boxline1">Wallet Maintenance Updates</span>
                <span class="boxline2">Stay updated on wallet maintaince of various networks.</span>
            </div>
            <div class="atbox1">
                <img src={alltopicsbox8}></img>
                <span class="boxline1">Delisting</span>
                <span class="boxline2">Get information on coins or tradings pairs to be removed.</span>
            </div>
        </div>

    </div>
</div>

<div class="latest-articles-header">
    <p>Latest Articles</p>
    <div class="latest-articles-row">
        <div class="latest-articles1">
        <span class="latest-articles-line">Notice on the Extension of Cloud Mining Subscription Plans Due to Power Outage (2022-12-28)</span>
        </div>
        <div class="latest-articles2">
        <span class="latest-articles-line">New Dual Investment Products Launched (2022-12-28)</span>
        </div>
    </div>
    <div class="latest-articles-row">
        <div class="latest-articles1">
        <span class="latest-articles-line">Notice of Removal of Trading Pairs - 2022-12-30</span>
        </div>
        <div class="latest-articles2">
        <span class="latest-articles-line">Binance Futures Will List Coin-Margined Quarterly 0630 Futures Contracts</span>
        </div>
    </div>
    <div class="latest-articles-row">
        <div class="latest-articles1">
        <span class="latest-articles-line">NEBL & VIDT Available via Credit/Debit Card</span>
        </div>
    </div>
    
</div>
</div>
            </>

    )
};

export default Annoucement
