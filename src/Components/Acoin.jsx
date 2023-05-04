import React from 'react'
import './Acoin.css';

import reawrd10 from './Img/reward10.png';
import pic1 from './Img/pic1.png';
import pic2 from './Img/pic2.png';
import pic3 from './Img/pic3.png';

const Acoin = () => {
  return (
    <div className='acoin'>
        <div className='acoinfirst'>
            <div className='acoinrow1'>
                <img src={reawrd10}/>
                <h4>ApeCoin (APE)</h4>
            </div>
            <p className='acoinp1'><i>The Native Token that Empowers the Decentralized Community Building of the APE Ecosystem.</i></p>
            <p className='acoinp2'>March 17th 2022</p>
            <hr className='acoinline'/>
            <p className='acoinp3'>ApeCoin (APE) is the native token that empowers the decentralized community building of the APE ecosystem. The APE ecosystem includes the community of Bored Ape Yacht Club (BAYC) and Mutant Ape Yacht Club (MAYC), two of the most popular NFT collections on the Ethereum blockchain.<br/>
                APE is the native token of the project. The current use cases for APE include:<br/>
                Governance: The APE Improvement Proposal Process will allow ApeCoin DAO members to make decisions regarding Ecosystem Fund allocations, governance rules, projects, partnerships, and beyond.<br/>
                Access: APE provides access to certain parts of the ecosystem that are otherwise unavailable, such as exclusive games, merch, events, and services.<br/>
                Incentivization: APE is a tool for third-party developers to participate in the ecosystem by incorporating APE into services, games, and other projects.<br/>
                The projcet consists of the following major components working in conjunction:<br/>
                ApeCoin DAO: The ApeCoin community governs itself via the ApeCoin DAO, the decentralized governance framework that supports the Ecosystem Fund.<br/>
                The APE Foundation: The Foundation is tasked with administering the decisions of the ApeCoin DAO, and is responsible for day-to-day administration, bookkeeping, and project management.<br/>
                The Board: A special council on the APE Foundation that provides oversight on the Foundation administrators.<br/>
                As at March 17th 2022, the total and maximum token supply of APE is 1,000,000,000. The current circulating supply is 277,500,000 (~28% of the total token supply).
                Learn more about the tokenomics of APE here.</p>
            <hr className='acoinline'/>
            <div className='acoinrow2'>
                <p>Website</p>
                <p>Twitter</p>
                <p>Explorer</p>
            </div>
            <hr className='acoinline'/>
            <div className='acoinrow3'>
                <p>Read More</p>
                <div className='acoin3row'>
                    <div className='acoin3col1'><img src={pic1}/><button>Read More</button></div>
                    <div className='acoin3col1'><img src={pic2}/><button>Read More</button></div>
                    <div className='acoin3col1'><img src={pic3}/><button>Read More</button></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Acoin