import React, { useState } from 'react'
import './History.css'
import rect1 from './Img/rect1.png';
import rect2 from './Img/rect2.png';
import rect3 from './Img/rect3.png';

const History = () => {

    const [data, setData] = useState(true);
    const [data1, setData1] = useState("");
    const [data2, setData2] = useState("");
    const [data3, setData3] = useState("");
    const [data4, setData4] = useState("");
    const [data5, setData5] = useState("");
    const [data6, setData6] = useState("");
    const [data7, setData7] = useState("");
    const [data8, setData8] = useState("");
    const [data9, setData9] = useState("");
    const [data10, setData10] = useState("");
    const [data11, setData11] = useState("");
    const [data12, setData12] = useState("");
    const [data13, setData13] = useState("");
    const [data14, setData14] = useState("");
    const [data15, setData15] = useState("");
    const [data16, setData16] = useState("");
    const [data17, setData17] = useState("");
    const [article, setArticle] = useState('');

  return (
    <div className='history'>
        <div className='historycol1'>
            <div>
                <button className='hist-btn' onClick={()=>setData(!data)}>
                    <p>Account Functions</p>
                    { data ? <img src={rect1}/>: <img src={rect2}/>}  
                </button>
                { data ? ( <div className='hist-div'>
                        <p onClick={()=>setArticle(1)}>Guide to Account Functions</p>
                        <p onClick={()=>setArticle(2)}>Identity Verification</p>
                        <p onClick={()=>setArticle(3)}>Two-factor Authentication</p>
                        <p onClick={()=>setArticle(4)}>Email Issues</p>
                        <p onClick={()=>setArticle(5)}>Referral & Affiliates</p>
                        <p onClick={()=>setArticle(6)}>Voucher</p>
                        <p>Wallets</p>
                        <p>Task Center</p>
                </div>) : null}
            </div>

            <div>
                <button className='hist-btn' onClick={()=>setData1(!data1)}>
                    <p>Tutorial</p>
                    { data1 ? <img src={rect1}/>: <img src={rect2}/>}   
                </button>
                { data1 ? ( <div className='hist-div'>
                        <p>Binance Fan Token</p>
                </div>) : null}
            </div>

            <div>
                <button className='hist-btn' onClick={()=>setData2(!data2)}>
                    <p>Binance Earn</p>
                    { data2 ? <img src={rect1}/>: <img src={rect2}/>}   
                </button>
                { data2 ? ( <div className='hist-div'>
                        <p>Binance Fan Token</p>
                </div>) : null}
            </div>

            <div>
                <button className='hist-btn' onClick={()=>setData3(!data3)}>
                    <p>Crypto Deposit/Withdrawl</p>
                    { data3 ? <img src={rect1}/>: <img src={rect2}/>}   
                </button>
                { data3 ? ( <div className='hist-div'>
                        <p>Binance Fan Token</p>
                </div>) : null}
            </div>

            <div>
                <button className='hist-btn' onClick={()=>setData4(!data4)}>
                    <p>Buy Crypto</p>
                    { data4 ? <img src={rect1}/>: <img src={rect2}/>}   
                </button>
                { data4 ? ( <div className='hist-div'>
                        <p>Binance Fan Token</p>
                </div>) : null}
            </div>

            <div>
                <button className='hist-btn' onClick={()=>setData5(!data5)}>
                    <p>Spot & Margin Trading</p>
                    { data5 ? <img src={rect1}/>: <img src={rect2}/>}   
                </button>
                { data5 ? ( <div className='hist-div'>
                        <p>Binance Fan Token</p>
                </div>) : null}
            </div>

            <div>
                <button className='hist-btn' onClick={()=>setData6(!data6)}>
                    <p>Crypto Derivatives</p>
                    { data6 ? <img src={rect1}/>: <img src={rect2}/>}   
                </button>
                { data6 ? ( <div className='hist-div'>
                        <p>Binance Fan Token</p>
                </div>) : null}
            </div>

            <div>
                <button className='hist-btn' onClick={()=>setData7(!data7)}>
                    <p>Futures Contracts</p>
                    { data7 ? <img src={rect1}/>: <img src={rect2}/>}   
                </button>
                { data7 ? ( <div className='hist-div'>
                        <p>Open Orders</p>
                        <p>Index</p>
                        <p>Trading Rules</p>
                        <p>Portfolio Margin</p>
                </div>) : null}
            </div>

            <div>
                <button className='hist-btn' onClick={()=>setData8(!data8)}>
                    <p>Options</p>
                    { data8 ? <img src={rect1}/>: <img src={rect2}/>}   
                </button>
                { data8 ? ( <div className='hist-div'>
                        <p>Open Orders</p>
                </div>) : null}
            </div>

            <div>
                <button className='hist-btn' onClick={()=>setData9(!data9)}>
                    <p>Leveraged Tokens</p>
                    { data9 ? <img src={rect1}/>: <img src={rect2}/>}   
                </button>
                { data9 ? ( <div className='hist-div'>
                        <p>Open Orders</p>
                </div>) : null}
            </div>

            <div>
                <button className='hist-btn' onClick={()=>setData10(!data10)}>
                    <p>Finance</p>
                    { data10 ? <img src={rect1}/>: <img src={rect2}/>}   
                </button>
                { data10 ? ( <div className='hist-div'>
                        <p>Open Orders</p>
                </div>) : null}
            </div>

            <div>
                <button className='hist-btn' onClick={()=>setData11(!data11)}>
                    <p>API</p>
                    { data11 ? <img src={rect1}/>: <img src={rect2}/>}   
                </button>
                { data11 ? ( <div className='hist-div'>
                        <p>Open Orders</p>
                </div>) : null}
            </div>

            <div>
                <button className='hist-btn' onClick={()=>setData12(!data12)}>
                    <p>Security</p>
                    { data12 ? <img src={rect1}/>: <img src={rect2}/>}   
                </button>
                { data12 ? ( <div className='hist-div'>
                        <p>Open Orders</p>
                </div>) : null}
            </div>

            <div>
                <button className='hist-btn' onClick={()=>setData13(!data13)}>
                    <p>Other Topics</p>
                    { data13 ? <img src={rect1}/>: <img src={rect2}/>}   
                </button>
                { data13 ? ( <div className='hist-div'>
                        <p>Open Orders</p>
                </div>) : null}
            </div>

            <div>
                <button className='hist-btn' onClick={()=>setData14(!data14)}>
                    <p>Binance Converts</p>
                    { data14 ? <img src={rect1}/>: <img src={rect2}/>}   
                </button>
                { data14 ? ( <div className='hist-div'>
                        <p>Open Orders</p>
                </div>) : null}
            </div>

            <div>
                <button className='hist-btn' onClick={()=>setData15(!data15)}>
                    <p>Binance Link</p>
                    { data15 ? <img src={rect1}/>: <img src={rect2}/>}   
                </button>
                { data15 ? ( <div className='hist-div'>
                        <p>Open Orders</p>
                </div>) : null}
            </div>

            <div>
                <button className='hist-btn' onClick={()=>setData16(!data16)}>
                    <p>NFT</p>
                    { data16 ? <img src={rect1}/>: <img src={rect2}/>}   
                </button>
                { data16 ? ( <div className='hist-div'>
                        <p>Open Orders</p>
                </div>) : null}
            </div>

            <div>
                <button className='hist-btn' onClick={()=>setData17(!data17)}>
                    <p>VIP</p>
                    { data17 ? <img src={rect1}/>: <img src={rect2}/>}   
                </button>
                { data17 ? ( <div className='hist-div'>
                        <p>Open Orders</p>
                </div>) : null}
            </div>

        </div>
        <div className='historycol2'>

            <div className='hist-listing'>
                <p>New Cryptocurrency Listing</p>
                <img src={rect3}/>
            </div>

            <div className={article ? 'hist2none' : 'hist2-div' }>
                <p onClick={()=>setArticle(1)}>Guide to Account Functions</p>
                <p onClick={()=>setArticle(2)}>Identity Verification</p>
                <p onClick={()=>setArticle(3)}>Two-factor Authentication</p>
                <p onClick={()=>setArticle(4)}>Email Issues</p>
                <p onClick={()=>setArticle(5)}>Referral & Affiliates</p>
                <p onClick={()=>setArticle(6)}>Voucher</p>
                <p>Wallets</p>
                <p>Task Center</p>
            
            </div>

            <div className= {article ? 'hist2none' : 'row2-data' }>
                    <h2>Popular Topics</h2>
                    <div>
                        <p>Why can’t I recieve emails for Domain name?</p>
                        <p>Why can’t I recieve emails for Domain name?</p>
                        <p>Why can’t I recieve emails for Domain name?</p>
                        <p>Why can’t I recieve emails for Domain name?</p>
                    </div>
            </div>

            { article === 1 && (
              <div className='row2-data'>
                <h4>Guide to Account Functions</h4>
                <div>
                    <p>Why can’t I recieve emails for Domain name?</p>
                    <p>Why can’t I recieve emails for Domain name?</p>
                    <p>Why can’t I recieve emails for Domain name?</p>
                    <p>Why can’t I recieve emails for Domain name?</p>
                    <p>Why can’t I recieve emails for Domain name?</p>
                    <p>Why can’t I recieve emails for Domain name?</p>
                    <p>Why can’t I recieve emails for Domain name?</p>
                </div>
              </div>
             )}
            { article === 2 && (
              <div className='row2-data'>
                <h4>Identity Verification</h4>
                <div>
                    <p>Why can’t I recieve emails for Domain name?</p>
                    <p>Why can’t I recieve emails for Domain name?</p>
                    <p>Why can’t I recieve emails for Domain name?</p>
                    <p>Why can’t I recieve emails for Domain name?</p>
                    <p>Why can’t I recieve emails for Domain name?</p>
                    <p>Why can’t I recieve emails for Domain name?</p>
                    <p>Why can’t I recieve emails for Domain name?</p>
                </div>
              </div>
             )}
            { article === 3 && (
              <div className='row2-data'>
                <h4>Two-Factor Authentication</h4>
                <div>
                    <p>Why can’t I recieve emails for Domain name?</p>
                    <p>Why can’t I recieve emails for Domain name?</p>
                    <p>Why can’t I recieve emails for Domain name?</p>
                    <p>Why can’t I recieve emails for Domain name?</p>
                </div>
              </div>
             )}
            { article === 4 && (
              <div className='row2-data'>
                <h4>Email Issues</h4>
                <div>
                    <p>Why can’t I recieve emails for Domain name?</p>
                    <p>Why can’t I recieve emails for Domain name?</p>
                    <p>Why can’t I recieve emails for Domain name?</p>
                    <p>Why can’t I recieve emails for Domain name?</p>
                    <p>Why can’t I recieve emails for Domain name?</p>
                    <p>Why can’t I recieve emails for Domain name?</p>
                </div>
              </div>
             )}
             { article === 5 && (
              <div className='row2-data'>
                <h4>Referral & Affiliates</h4>
                <div>
                    <p>Why can’t I recieve emails for Domain name?</p>
                    <p>Why can’t I recieve emails for Domain name?</p>
                    <p>Why can’t I recieve emails for Domain name?</p>
                    <p>Why can’t I recieve emails for Domain name?</p>
                    <p>Why can’t I recieve emails for Domain name?</p>
                    <p>Why can’t I recieve emails for Domain name?</p>
                </div>
              </div>
             )}
             { article === 6 && (
              <div className='row2-data'>
                <h4>Voucher</h4>
                <div>
                    <p>Why can’t I recieve emails for Domain name?</p>
                    <p>Why can’t I recieve emails for Domain name?</p>
                    <p>Why can’t I recieve emails for Domain name?</p>
                    <p>Why can’t I recieve emails for Domain name?</p>
                    <p>Why can’t I recieve emails for Domain name?</p>
                    <p>Why can’t I recieve emails for Domain name?</p>
                </div>
              </div>
             )}
        </div>
        <div className='historycol3'>
            <h6>Related Articles</h6>
            <div className='history3row1'>
                <div>
                    <h6>Gift card support</h6>
                    <p>If you want to buy crypto directly with cash, this will be the best way for you.</p>
                </div>
                <img src={rect3}/>
            </div>
            <div className='history3row1'>
                <div>
                    <h6>Gift card support</h6>
                    <p>If you want to buy crypto directly with cash, this will be the best way for you.</p>
                </div>
                <img src={rect3}/>
            </div>
            <div className='history3row1'>
                <div>
                    <h6>Buy Crypto</h6>
                    <p>If you want to buy crypto directly with cash, this will be the best way for you.</p>
                </div>
                <img src={rect3}/>
            </div>
            <div className='history3row1'>
                <div>
                    <h6>Buy Crypto</h6>
                    <p>If you want to buy crypto directly with cash, this will be the best way for you.</p>
                </div>
                <img src={rect3}/>
            </div>
            <div className='history3row1'>
                <div>
                    <h6>Buy Crypto</h6>
                    <p>If you want to buy crypto directly with cash, this will be the best way for you.</p>
                </div>
                <img src={rect3}/>
            </div>
            <div className='history3row1'>
                <div>
                    <h6>Buy Crypto</h6>
                    <p>If you want to buy crypto directly with cash, this will be the best way for you.</p>
                </div>
                <img src={rect3}/>
            </div>
            <div className='history3row1'>
                <div>
                    <h6>Buy Crypto</h6>
                    <p>If you want to buy crypto directly with cash, this will be the best way for you.</p>
                </div>
                <img src={rect3}/>
            </div>
        </div>
    </div>
  )
}

export default History