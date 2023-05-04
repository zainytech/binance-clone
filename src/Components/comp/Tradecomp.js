import React from 'react'
import './Tradecomp.css'
import  { useState } from 'react';
import FAQ from './FAQ';

import Select from 'react-select';
import ReactFlagsSelect from "react-flags-select";

import banner1 from '../assets/figma/trade/banner1.png';
import p2pbuy1 from '../assets/figma/trade/p2pbuy1.png';
import p2pbuy2 from '../assets/figma/trade/p2pbuy2.png';
import p2pbuy3 from '../assets/figma/trade/p2pbuy3.png';
import p2psell1 from '../assets/figma/trade/p2psell1.svg';
import p2psell2 from '../assets/figma/trade/p2psell2.png';
import p2padv1 from '../assets/figma/trade/p2padv1.png';
import p2padv2 from '../assets/figma/trade/p2padv2.png';
import p2padv3 from '../assets/figma/trade/p2padv3.png';
import p2padv4 from '../assets/figma/trade/p2padv4.png';
import p2padvmobile from '../assets/figma/trade/p2p-adv-mobile.png';


import {MdKeyboardArrowDown} from 'react-icons/md'

function Tradecomp(){

        const currency = [
            {value: "AED", label: "AED"},
            {value: "AFN", label: "AFN"},
            {value: "ARS", label: "ARS"},
            {value: "BDT", label: "BDT"},
            {value: "BGN", label: "BGN"},
            {value: "CAD", label: "CAD"},
            {value: "CHF", label: "CHF"},
            {value: "COP", label: "COP"},
            {value: "CRC", label: "CRC"},
            {value: "DKK", label: "DKK"},
            {value: "DOP", label: "DOP"},
            {value: "ERN", label: "ERN"},
            {value: "EUT", label: "EUT"},
            {value: "EUR", label: "EUR"},
            {value: "GEL", label: "GEL"},
            {value: "GHS", label: "GHS"},
            {value: "GTQ", label: "GTQ"},
            {value: "IDR", label: "IDR"},
            {value: "INR", label: "INR"},
            {value: "JMD", label: "JMD"},
            {value: "JOD", label: "JOD"},
            {value: "JPY", label: "JPY"},
            {value: "KES", label: "KES"},
            {value: "KHR", label: "KHR"},
            {value: "LKR", label: "LKR"},
            {value: "LBP", label: "LBP"},
            {value: "MDL", label: "MDL"},
            {value: "MGA", label: "MGA"},
            {value: "NIO", label: "NIO"},
            {value: "NOK", label: "NOK"},
            {value: "NPR", label: "NPR"},
            {value: "OMR", label: "OMR"},
            {value: "PAB", label: "PAB"},
            {value: "PHP", label: "PHP"},
            {value: "PKR", label: "PKR"},
            {value: "QAR", label: "QAR"},
            {value: "RON", label: "RON"},
            {value: "SAR", label: "SAR"},
            {value: "SCR", label: "SCR"},
            {value: "THB", label: "THB"},
            {value: "UAH", label: "UAH"},
            {value: "VES", label: "VES"},
            {value: "VND", label: "VND"},
            {value: "XOF", label: "XOF"},
            {value: "YER", label: "YER"},
            {value: "ZWD", label: "ZWD"},

        ];
        const payment = [
            {value: "All Payments", label: "All Payments"},
            {value: "Bank Transfer", label: "Bank Transfer"},
            {value: "Easypaisa-PK Only", label: "Easypaisa-PK Only"},
            {value: "Meezan Bank", label: "Meezan Bank"},
            {value: "Raast", label: "Raast"},
            {value: "SadaPay", label: "SadaPay"},
            {value: "NayaPay", label: "NayaPay"},
            {value: "Upaisa", label: "Upaisa"},
            {value: "United Bank Limited", label: "United Bank Limited"},
            {value: "Allied Bank Limited", label: "Allied Bank Limited"},
            {value: "Standard Chartered Bank", label: "Standard Chartered Bank"},
            {value: "Cash Deposit to Bank", label: "Cash Deposit to Bank"},
            {value: "EasyPay", label: "EasyPay"},
            {value: "Wise", label: "Wise"},
            {value: "Perfect Money", label: "Perfect Money"},
            {value: "Mobikwik", label: "Mobikwik"},
            {value: "Mobile top-up", label: "Mobile top-up"},
            {value: "Google Pay (GPay)", label: "Google Pay (GPay)"},

        ];
        // const [select, setSelect] = useState("SE");
        // const onSelect = (code) => setSelect(code);
        const customStyles = {
            indicatorContainer:base =>({
              ...base,
              color:'#08699B',
           }),
          };

          const [showtexttadefilter, setShowtexttradefilter] = useState('');
          const onClicktradefilter = ()=>{
              setShowtexttradefilter(!showtexttadefilter); 
          };
          const [showtexttradebuy, setShowtexttradebuy] = useState(true);
          const onClicktradebuy = ()=>{
              setShowtexttradebuy(true); 
              setShowtexttradesell(false);
          };
          const [showtexttradesell, setShowtexttradesell] = useState('');
          const onClicktradesell = ()=>{
              setShowtexttradesell(true); 
              setShowtexttradebuy(false); 
          };
          const [showtexttradebuyusdt, setShowtexttradebuyusdt] = useState(true);
          const onClicktradebuyusdt = ()=>{
              setShowtexttradebuyusdt(true); 
              setShowtexttradebuybtc(false); 
              setShowtexttradebuybusd(false); 
              setShowtexttradebuybnb(false); 
              setShowtexttradebuyeth(false); 
              setShowtexttradebuydai(false); 
              setShowtexttradebuyada(false); 
              setShowtexttradebuyshib(false); 
              setShowtexttradebuydoge(false); 
              setShowtexttradebuytrx(false); 
              setShowtexttradebuymatic(false); 
              setShowtexttradebuysol(false); 
              setShowtexttradebuydot(false); 
          };
          const [showtexttradebuybtc, setShowtexttradebuybtc] = useState('');
          const onClicktradebuybtc = ()=>{
              setShowtexttradebuybtc(true);
              setShowtexttradebuyusdt(false); 
              setShowtexttradebuybusd(false); 
              setShowtexttradebuybnb(false); 
              setShowtexttradebuyeth(false); 
              setShowtexttradebuydai(false); 
              setShowtexttradebuyada(false); 
              setShowtexttradebuyshib(false); 
              setShowtexttradebuydoge(false); 
              setShowtexttradebuytrx(false); 
              setShowtexttradebuymatic(false); 
              setShowtexttradebuysol(false); 
              setShowtexttradebuydot(false);
          };
          const [showtexttradebuybusd, setShowtexttradebuybusd] = useState('');
          const onClicktradebuybusd = ()=>{
              setShowtexttradebuybusd(true);
              setShowtexttradebuyusdt(false);
              setShowtexttradebuybtc(false); 
              setShowtexttradebuybnb(false); 
              setShowtexttradebuyeth(false); 
              setShowtexttradebuydai(false); 
              setShowtexttradebuyada(false); 
              setShowtexttradebuyshib(false); 
              setShowtexttradebuydoge(false); 
              setShowtexttradebuytrx(false); 
              setShowtexttradebuymatic(false); 
              setShowtexttradebuysol(false); 
              setShowtexttradebuydot(false);
          };
          const [showtexttradebuybnb, setShowtexttradebuybnb] = useState('');
          const onClicktradebuybnb = ()=>{
              setShowtexttradebuybnb(true);
              setShowtexttradebuyusdt(false); 
              setShowtexttradebuybusd(false); 
              setShowtexttradebuyeth(false); 
              setShowtexttradebuydai(false); 
              setShowtexttradebuyada(false); 
              setShowtexttradebuyshib(false); 
              setShowtexttradebuydoge(false); 
              setShowtexttradebuytrx(false); 
              setShowtexttradebuymatic(false); 
              setShowtexttradebuysol(false); 
              setShowtexttradebuydot(false); 
          };
          const [showtexttradebuyeth, setShowtexttradebuyeth] = useState('');
          const onClicktradebuyeth = ()=>{
              setShowtexttradebuyeth(true);
              setShowtexttradebuyusdt(false); 
              setShowtexttradebuybusd(false); 
              setShowtexttradebuybnb(false);  
              setShowtexttradebuydai(false); 
              setShowtexttradebuyada(false); 
              setShowtexttradebuyshib(false); 
              setShowtexttradebuydoge(false); 
              setShowtexttradebuytrx(false); 
              setShowtexttradebuymatic(false); 
              setShowtexttradebuysol(false); 
              setShowtexttradebuydot(false); 
          };
          const [showtexttradebuydai, setShowtexttradebuydai] = useState('');
          const onClicktradebuydai = ()=>{
              setShowtexttradebuydai(true);
              setShowtexttradebuyusdt(false); 
              setShowtexttradebuybusd(false); 
              setShowtexttradebuybnb(false); 
              setShowtexttradebuyeth(false);  
              setShowtexttradebuyada(false); 
              setShowtexttradebuyshib(false); 
              setShowtexttradebuydoge(false); 
              setShowtexttradebuytrx(false); 
              setShowtexttradebuymatic(false); 
              setShowtexttradebuysol(false); 
              setShowtexttradebuydot(false); 
          };
          const [showtexttradebuyada, setShowtexttradebuyada] = useState('');
          const onClicktradebuyada = ()=>{
              setShowtexttradebuyada(true);
              setShowtexttradebuyusdt(false); 
              setShowtexttradebuybusd(false); 
              setShowtexttradebuybnb(false); 
              setShowtexttradebuyeth(false); 
              setShowtexttradebuydai(false); 
              setShowtexttradebuyshib(false); 
              setShowtexttradebuydoge(false); 
              setShowtexttradebuytrx(false); 
              setShowtexttradebuymatic(false); 
              setShowtexttradebuysol(false); 
              setShowtexttradebuydot(false);
          };
          const [showtexttradebuyshib, setShowtexttradebuyshib] = useState('');
          const onClicktradebuyshib = ()=>{
              setShowtexttradebuyshib(true);
              setShowtexttradebuyusdt(false); 
              setShowtexttradebuybusd(false); 
              setShowtexttradebuybnb(false); 
              setShowtexttradebuyeth(false); 
              setShowtexttradebuydai(false); 
              setShowtexttradebuyada(false); 
              setShowtexttradebuydoge(false); 
              setShowtexttradebuytrx(false); 
              setShowtexttradebuymatic(false); 
              setShowtexttradebuysol(false); 
              setShowtexttradebuydot(false); 
          };
          const [showtexttradebuydoge, setShowtexttradebuydoge] = useState('');
          const onClicktradebuydoge = ()=>{
              setShowtexttradebuydoge(true);
              setShowtexttradebuyusdt(false); 
              setShowtexttradebuybusd(false); 
              setShowtexttradebuybnb(false); 
              setShowtexttradebuyeth(false); 
              setShowtexttradebuydai(false); 
              setShowtexttradebuyada(false); 
              setShowtexttradebuyshib(false); 
              setShowtexttradebuytrx(false); 
              setShowtexttradebuymatic(false); 
              setShowtexttradebuysol(false); 
              setShowtexttradebuydot(false); 
          };
          const [showtexttradebuytrx, setShowtexttradebuytrx] = useState('');
          const onClicktradebuytrx = ()=>{
              setShowtexttradebuytrx(true);
              setShowtexttradebuyusdt(false); 
              setShowtexttradebuybusd(false); 
              setShowtexttradebuybnb(false); 
              setShowtexttradebuyeth(false); 
              setShowtexttradebuydai(false); 
              setShowtexttradebuyada(false); 
              setShowtexttradebuyshib(false); 
              setShowtexttradebuydoge(false);  
              setShowtexttradebuymatic(false); 
              setShowtexttradebuysol(false); 
              setShowtexttradebuydot(false); 
          };
          const [showtexttradebuymatic, setShowtexttradebuymatic] = useState('');
          const onClicktradebuymatic = ()=>{
              setShowtexttradebuymatic(true);
              setShowtexttradebuyusdt(false); 
              setShowtexttradebuybusd(false); 
              setShowtexttradebuybnb(false); 
              setShowtexttradebuyeth(false); 
              setShowtexttradebuydai(false); 
              setShowtexttradebuyada(false); 
              setShowtexttradebuyshib(false); 
              setShowtexttradebuydoge(false); 
              setShowtexttradebuytrx(false);  
              setShowtexttradebuysol(false); 
              setShowtexttradebuydot(false); 
          };
          const [showtexttradebuysol, setShowtexttradebuysol] = useState('');
          const onClicktradebuysol = ()=>{
              setShowtexttradebuysol(true);
              setShowtexttradebuyusdt(false); 
              setShowtexttradebuybusd(false); 
              setShowtexttradebuybnb(false); 
              setShowtexttradebuyeth(false); 
              setShowtexttradebuydai(false); 
              setShowtexttradebuyada(false); 
              setShowtexttradebuyshib(false); 
              setShowtexttradebuydoge(false); 
              setShowtexttradebuytrx(false); 
              setShowtexttradebuymatic(false); 
              setShowtexttradebuydot(false); 
          };
          const [showtexttradebuydot, setShowtexttradebuydot] = useState('');
          const onClicktradebuydot = ()=>{
              setShowtexttradebuydot(true);
              setShowtexttradebuyusdt(false); 
              setShowtexttradebuybusd(false); 
              setShowtexttradebuybnb(false); 
              setShowtexttradebuyeth(false); 
              setShowtexttradebuydai(false); 
              setShowtexttradebuyada(false); 
              setShowtexttradebuyshib(false); 
              setShowtexttradebuydoge(false); 
              setShowtexttradebuytrx(false); 
              setShowtexttradebuymatic(false); 
              setShowtexttradebuysol(false); 
          };

          const [showtexttradep2pbuy, setShowtexttradep2pbuy] = useState(true);
          const onClicktradep2pbuy = ()=>{
              setShowtexttradep2pbuy(true); 
              setShowtexttradep2psell(false);
          };
          const [showtexttradep2psell, setShowtexttradep2psell] = useState('');
          const onClicktradep2psell = ()=>{
              setShowtexttradep2psell(true); 
              setShowtexttradep2pbuy(false); 
          };
    return(
        <>
        <div class="trade-main">
        <div class="trade-main-div1">
                <div class="trade-main-div1-bg-img">
                    <img src={banner1}></img>
                </div>
                <div class="trade-main-div1-content">
                    <div class="trade-main-div1a">
                        <p>Buy and Sell TetherUS (USDT) with Your Preferred Payment Methods</p>
                        <span>Buy and sell TetherUS safely and easily on Binance P2P. Find the best offer below and buy and sell USDT with Your Preferred Payment Methods today.</span>
                    </div>
                    <div class="trade-main-div1b">
                    <div class="trade-main-div1b-container">
                        <div class="trade-main-div1b-item1">
                            <span >Express</span>
                            <span >P2P</span>
                        </div>  
                        <div class="trade-main-div1b-item2">
                            <span>User Guide</span>
                            <span>Orders</span>
                            <span>P2P User Center</span>
                            <span>More</span>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div class="trade-fix-div">
            <div class="trade-main2">
                <div class="trade-main2-nav1">
                    <div class="trade-main2-nav1-container">
                        <div class="trade-main2-nav1-div1">
                            <button onClick={onClicktradebuy} className={showtexttradebuy ? 'trade-main2-nav1-div1-btn-onclick': 'trade-main2-nav1-div1-btn'}>Buy</button>
                            <button onClick={onClicktradesell} className={showtexttradesell ? 'trade-main2-nav1-div1-btn-onclick': 'trade-main2-nav1-div1-btn'}>Sell</button>
                        </div>
                        <div class="trade-main2-nav1-div2">
                            <span onClick={onClicktradebuyusdt} className={showtexttradebuyusdt ? 'trade-main2-nav1-div2-txt-onclick': ''}>USDT</span>
                            <span onClick={onClicktradebuybtc} className={showtexttradebuybtc ? 'trade-main2-nav1-div2-txt-onclick': ''}>BTC</span>
                            <span onClick={onClicktradebuybusd} className={showtexttradebuybusd ? 'trade-main2-nav1-div2-txt-onclick': ''}>BUSD</span>
                            <span onClick={onClicktradebuybnb} className={showtexttradebuybnb ? 'trade-main2-nav1-div2-txt-onclick': ''}>BNB</span>
                            <span onClick={onClicktradebuyeth} className={showtexttradebuyeth ? 'trade-main2-nav1-div2-txt-onclick': ''}>ETH</span>
                            <span onClick={onClicktradebuydai} className={showtexttradebuydai ? 'trade-main2-nav1-div2-txt-onclick': ''}>DAI</span>
                            <span onClick={onClicktradebuyada} className={showtexttradebuyada ? 'trade-main2-nav1-div2-txt-onclick': ''}>ADA</span>
                            <span onClick={onClicktradebuyshib} className={showtexttradebuyshib ? 'trade-main2-nav1-div2-txt-onclick': ''}>SHIB</span>
                            <span onClick={onClicktradebuydoge} className={showtexttradebuydoge ? 'trade-main2-nav1-div2-txt-onclick': ''}>DOGE</span>
                            <span onClick={onClicktradebuytrx} className={showtexttradebuytrx ? 'trade-main2-nav1-div2-txt-onclick': ''}>TRX</span>
                            <span onClick={onClicktradebuymatic} className={showtexttradebuymatic ? 'trade-main2-nav1-div2-txt-onclick': ''}>MATIC</span>
                            <span onClick={onClicktradebuysol} className={showtexttradebuysol ? 'trade-main2-nav1-div2-txt-onclick': ''}>SOL</span>
                            <span onClick={onClicktradebuydot} className={showtexttradebuydot ? 'trade-main2-nav1-div2-txt-onclick': ''}>DOT</span>
                        </div>
                    </div>
                </div>
                <div class="trade-main2-nav2">
                    <div class="trade-main2-nav2-container">
                        <div class="trade-main2-nav2-div1">
                            <span class="trade-main2-nav2-txt">Amount</span>
                            <div class="trade-main2-nav2-div1-input">
                                <input type="text" placeholder="Enter amount"></input>
                            </div>
                        </div>
                        <div class="trade-main2-nav2-div2">
                            <span class="trade-main2-nav2-txt">Fiat</span>
                            <div class="trade-main2-nav2-div2a">
                            <Select options={currency} isSearchable={true}
                                        styles={{
                                            control: (baseStyles, state) => ({
                                            ...baseStyles,
                                            outline: 'none',
                                            borderColor: state.isFocused ? 'rgb(238, 238, 238)' : 'rgb(238, 238, 238)',
                                            zIndex:'99999',
                                            width:'10rem',
                                        }),
                                        }}
                                    />
                            </div>  
                        </div>
                        <div class="trade-main2-nav2-div3">
                            <span class="trade-main2-nav2-txt">Payment</span>
                            <div class="trade-main2-nav2-div3a">
                            <Select options={payment} isSearchable={true}
                                        styles={{
                                            control: (baseStyles, state) => ({
                                            ...baseStyles,
                                            outline: 'none',
                                            borderColor: state.isFocused ? 'rgb(238, 238, 238)' : 'rgb(238, 238, 238)',
                                            width:'10rem',
                                        }),
                                        }}
                                    />
                            </div>
                        </div>
                        <div class="trade-main2-nav2-div4">
                            <span class="trade-main2-nav2-txt">Available Region(s)</span>
                            <div class="trade-main2-nav2-div4a">
                            <ReactFlagsSelect className='trade-search-flags'
                                // selected={select}
                                // onSelect={onSelect}
                                countries={["fi", "GB", "IE", "IT", "NL", "SE", 'PA', 'PK', 'IN', 'US', 'PG', 'PW', 'PQ', 
                                'NC', 'NF', 'NL', 'MY', 'MZ', 'MW', 'MX', 'MO', 'MP', 'MF', 'ML', 'LS', 'LT','LT',
                                'LS', 'LB', 'LA', 'FR', 'IT', 'DE']}
                                optionsSize={16}
                                selectButtonClassName="menu-flags-button"
                                searchable={true}
                                placeholder='Select Region'
                                classNamePrefix='myDropDown'
                            />
                            </div>
                        </div>
                        <div onClick={onClicktradefilter} class="trade-main2-nav2-div5">
                            Filter<MdKeyboardArrowDown style={{fontSize:'25px',position:'absolute',right:'0',top:'0.3rem',paddingLeft:'0rem'}}/>
                        
                        </div>
                        
                    </div>
                </div>
                {showtexttadefilter ? 
                        <>
                        <div class="trade-main2-nav2-div5a">
                            <input type='checkbox' id="overview-checkbox2"></input>
                            <label for="overview-checkbox2"><span>Match My Available Assets</span></label>    
                        </div>
                        </>
                        :null}
                </div>

            <div class="trade-main3">
                <div class="trade-main3-container">
{/* buy tables///// */}
{showtexttradebuy ? 
<> 
            {showtexttradebuyusdt ? 
            <>
            <div class="trade-content-div3">
            <table>
                <tr class="table-row1">
                    <th>Advertisers (Completion rate)</th>
                    <th>Price (lowest to highest)</th>
                    <th>Limit/Available</th>
                    <th>Payment</th>
                    <th>Trade</th>
                    
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS buy+usdt</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span>37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span>
                    <span class="table-row2-td4-txt">Meezan Bank</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                
            </table>
            </div>
            </>
            :null}
            {showtexttradebuybtc? 
            <>
            <div class="trade-content-div3">
            <table>
                <tr class="table-row1">
                    <th>Advertisers (Completion rate)</th>
                    <th>Price (lowest to highest)</th>
                    <th>Limit/Available</th>
                    <th>Payment</th>
                    <th>Trade</th>
                    
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-BTC buy+btc</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span>37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span>
                    <span class="table-row2-td4-txt">Meezan Bank</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                
            </table>
            </div>
            </>
            :null}
            {showtexttradebuybusd? 
            <>
            <div class="trade-content-div3">
            <table>
                <tr class="table-row1">
                    <th>Advertisers (Completion rate)</th>
                    <th>Price (lowest to highest)</th>
                    <th>Limit/Available</th>
                    <th>Payment</th>
                    <th>Trade</th>
                    
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-BTC buy+busd</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span>37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span>
                    <span class="table-row2-td4-txt">Meezan Bank</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                
            </table>
            </div>
            </>
            :null}
            {showtexttradebuybnb? 
            <>
            <div class="trade-content-div3">
            <table>
                <tr class="table-row1">
                    <th>Advertisers (Completion rate)</th>
                    <th>Price (lowest to highest)</th>
                    <th>Limit/Available</th>
                    <th>Payment</th>
                    <th>Trade</th>
                    
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-BTC buy+bnb</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span>37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span>
                    <span class="table-row2-td4-txt">Meezan Bank</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                
            </table>
            </div>
            </>
            :null}
            {showtexttradebuyeth? 
            <>
            <div class="trade-content-div3">
            <table>
                <tr class="table-row1">
                    <th>Advertisers (Completion rate)</th>
                    <th>Price (lowest to highest)</th>
                    <th>Limit/Available</th>
                    <th>Payment</th>
                    <th>Trade</th>
                    
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-BTC buy+eth</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span>37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span>
                    <span class="table-row2-td4-txt">Meezan Bank</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                
            </table>
            </div>
            </>
            :null}
            {showtexttradebuydai? 
            <>
            <div class="trade-content-div3">
            <table>
                <tr class="table-row1">
                    <th>Advertisers (Completion rate)</th>
                    <th>Price (lowest to highest)</th>
                    <th>Limit/Available</th>
                    <th>Payment</th>
                    <th>Trade</th>
                    
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-BTC buy+dai</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span>37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span>
                    <span class="table-row2-td4-txt">Meezan Bank</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                
            </table>
            </div>
            </>
            :null}
            {showtexttradebuyada? 
            <>
            <div class="trade-content-div3">
            <table>
                <tr class="table-row1">
                    <th>Advertisers (Completion rate)</th>
                    <th>Price (lowest to highest)</th>
                    <th>Limit/Available</th>
                    <th>Payment</th>
                    <th>Trade</th>
                    
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-BTC buy+ada</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span>37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span>
                    <span class="table-row2-td4-txt">Meezan Bank</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                
            </table>
            </div>
            </>
            :null}
            {showtexttradebuyshib? 
            <>
            <div class="trade-content-div3">
            <table>
                <tr class="table-row1">
                    <th>Advertisers (Completion rate)</th>
                    <th>Price (lowest to highest)</th>
                    <th>Limit/Available</th>
                    <th>Payment</th>
                    <th>Trade</th>
                    
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-BTC buy+shib</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span>37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span>
                    <span class="table-row2-td4-txt">Meezan Bank</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                
            </table>
            </div>
            </>
            :null}
            {showtexttradebuydoge? 
            <>
            <div class="trade-content-div3">
            <table>
                <tr class="table-row1">
                    <th>Advertisers (Completion rate)</th>
                    <th>Price (lowest to highest)</th>
                    <th>Limit/Available</th>
                    <th>Payment</th>
                    <th>Trade</th>
                    
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-BTC buy+doge</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span>37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span>
                    <span class="table-row2-td4-txt">Meezan Bank</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                
            </table>
            </div>
            </>
            :null}
            {showtexttradebuytrx? 
            <>
            <div class="trade-content-div3">
            <table>
                <tr class="table-row1">
                    <th>Advertisers (Completion rate)</th>
                    <th>Price (lowest to highest)</th>
                    <th>Limit/Available</th>
                    <th>Payment</th>
                    <th>Trade</th>
                    
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-BTC buy+trx</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span>37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span>
                    <span class="table-row2-td4-txt">Meezan Bank</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                
            </table>
            </div>
            </>
            :null}
            {showtexttradebuymatic? 
            <>
            <div class="trade-content-div3">
            <table>
                <tr class="table-row1">
                    <th>Advertisers (Completion rate)</th>
                    <th>Price (lowest to highest)</th>
                    <th>Limit/Available</th>
                    <th>Payment</th>
                    <th>Trade</th>
                    
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-BTC buy+matic</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span>37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span>
                    <span class="table-row2-td4-txt">Meezan Bank</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                
            </table>
            </div>
            </>
            :null}
            {showtexttradebuysol? 
            <>
            <div class="trade-content-div3">
            <table>
                <tr class="table-row1">
                    <th>Advertisers (Completion rate)</th>
                    <th>Price (lowest to highest)</th>
                    <th>Limit/Available</th>
                    <th>Payment</th>
                    <th>Trade</th>
                    
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-BTC buy+sol</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span>37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span>
                    <span class="table-row2-td4-txt">Meezan Bank</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                
            </table>
            </div>
            </>
            :null}
            {showtexttradebuydot? 
            <>
            <div class="trade-content-div3">
            <table>
                <tr class="table-row1">
                    <th>Advertisers (Completion rate)</th>
                    <th>Price (lowest to highest)</th>
                    <th>Limit/Available</th>
                    <th>Payment</th>
                    <th>Trade</th>
                    
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-BTC buy+dot</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span>37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span>
                    <span class="table-row2-td4-txt">Meezan Bank</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">CHARLIE-TRADERS</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-buy-btn"><button>Buy USDT</button></td>
                </tr>
                
            </table>
            </div>
            </>
            :null}
</> 
:null}
{/* end of buy table///// */}

{/* sell table///// */}
{showtexttradesell ?
<>
            {showtexttradebuyusdt ? 
            <>
            <div class="trade-content-div3">
            <table>
                <tr class="table-row1">
                    <th>Advertisers (Completion rate)</th>
                    <th>Price (lowest to highest)</th>
                    <th>Limit/Available</th>
                    <th>Payment</th>
                    <th>Trade</th>
                    
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior sell+usdt</span>
                            <span class='table-row2-td1-txt2'>
                                <span>729 orders</span>
                                <span>96.90% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.80</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span>108,020.53 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>500,000.00</span>
                                <span> - ₨</span>
                                <span>20,000,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div">
                        <span class="table-row2-td4-txt">Easypaisa-PK Only</span>
                        <span class="table-row2-td4-txt">Meezan Bank</span>
                        </div>
                    </td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div">
                        <span class="table-row2-td4-txt">Easypaisa-PK Only</span>
                        <span class="table-row2-td4-txt">Raast</span>
                        <span class="table-row2-td4-txt">United Bank Limited</span>
                        </div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                
            </table>
            </div>
            </>
            :null}
            {showtexttradebuybtc ? 
            <>
            <div class="trade-content-div3">
            <table>
                <tr class="table-row1">
                    <th>Advertisers (Completion rate)</th>
                    <th>Price (lowest to highest)</th>
                    <th>Limit/Available</th>
                    <th>Payment</th>
                    <th>Trade</th>
                    
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior sell+btc</span>
                            <span class='table-row2-td1-txt2'>
                                <span>729 orders</span>
                                <span>96.90% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.80</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span>108,020.53 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>500,000.00</span>
                                <span> - ₨</span>
                                <span>20,000,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div">
                        <span class="table-row2-td4-txt">Easypaisa-PK Only</span>
                        <span class="table-row2-td4-txt">Meezan Bank</span>
                        </div>
                    </td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div">
                        <span class="table-row2-td4-txt">Easypaisa-PK Only</span>
                        <span class="table-row2-td4-txt">Raast</span>
                        <span class="table-row2-td4-txt">United Bank Limited</span>
                        </div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                
            </table>
            </div>
            </>
            :null}
            {showtexttradebuybusd ? 
            <>
            <div class="trade-content-div3">
            <table>
                <tr class="table-row1">
                    <th>Advertisers (Completion rate)</th>
                    <th>Price (lowest to highest)</th>
                    <th>Limit/Available</th>
                    <th>Payment</th>
                    <th>Trade</th>
                    
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior sell+busd</span>
                            <span class='table-row2-td1-txt2'>
                                <span>729 orders</span>
                                <span>96.90% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.80</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span>108,020.53 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>500,000.00</span>
                                <span> - ₨</span>
                                <span>20,000,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div">
                        <span class="table-row2-td4-txt">Easypaisa-PK Only</span>
                        <span class="table-row2-td4-txt">Meezan Bank</span>
                        </div>
                    </td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div">
                        <span class="table-row2-td4-txt">Easypaisa-PK Only</span>
                        <span class="table-row2-td4-txt">Raast</span>
                        <span class="table-row2-td4-txt">United Bank Limited</span>
                        </div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                
            </table>
            </div>
            </>
            :null}
            {showtexttradebuybnb ? 
            <>
            <div class="trade-content-div3">
            <table>
                <tr class="table-row1">
                    <th>Advertisers (Completion rate)</th>
                    <th>Price (lowest to highest)</th>
                    <th>Limit/Available</th>
                    <th>Payment</th>
                    <th>Trade</th>
                    
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior sell+bnb</span>
                            <span class='table-row2-td1-txt2'>
                                <span>729 orders</span>
                                <span>96.90% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.80</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span>108,020.53 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>500,000.00</span>
                                <span> - ₨</span>
                                <span>20,000,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div">
                        <span class="table-row2-td4-txt">Easypaisa-PK Only</span>
                        <span class="table-row2-td4-txt">Meezan Bank</span>
                        </div>
                    </td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div">
                        <span class="table-row2-td4-txt">Easypaisa-PK Only</span>
                        <span class="table-row2-td4-txt">Raast</span>
                        <span class="table-row2-td4-txt">United Bank Limited</span>
                        </div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                
            </table>
            </div>
            </>
            :null}
            {showtexttradebuyeth ? 
            <>
            <div class="trade-content-div3">
            <table>
                <tr class="table-row1">
                    <th>Advertisers (Completion rate)</th>
                    <th>Price (lowest to highest)</th>
                    <th>Limit/Available</th>
                    <th>Payment</th>
                    <th>Trade</th>
                    
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior sell+eth</span>
                            <span class='table-row2-td1-txt2'>
                                <span>729 orders</span>
                                <span>96.90% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.80</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span>108,020.53 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>500,000.00</span>
                                <span> - ₨</span>
                                <span>20,000,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div">
                        <span class="table-row2-td4-txt">Easypaisa-PK Only</span>
                        <span class="table-row2-td4-txt">Meezan Bank</span>
                        </div>
                    </td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div">
                        <span class="table-row2-td4-txt">Easypaisa-PK Only</span>
                        <span class="table-row2-td4-txt">Raast</span>
                        <span class="table-row2-td4-txt">United Bank Limited</span>
                        </div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                
            </table>
            </div>
            </>
            :null}
            {showtexttradebuydai ? 
            <>
            <div class="trade-content-div3">
            <table>
                <tr class="table-row1">
                    <th>Advertisers (Completion rate)</th>
                    <th>Price (lowest to highest)</th>
                    <th>Limit/Available</th>
                    <th>Payment</th>
                    <th>Trade</th>
                    
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior sell+dai</span>
                            <span class='table-row2-td1-txt2'>
                                <span>729 orders</span>
                                <span>96.90% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.80</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span>108,020.53 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>500,000.00</span>
                                <span> - ₨</span>
                                <span>20,000,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div">
                        <span class="table-row2-td4-txt">Easypaisa-PK Only</span>
                        <span class="table-row2-td4-txt">Meezan Bank</span>
                        </div>
                    </td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div">
                        <span class="table-row2-td4-txt">Easypaisa-PK Only</span>
                        <span class="table-row2-td4-txt">Raast</span>
                        <span class="table-row2-td4-txt">United Bank Limited</span>
                        </div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                
            </table>
            </div>
            </>
            :null}
            {showtexttradebuyada ? 
            <>
            <div class="trade-content-div3">
            <table>
                <tr class="table-row1">
                    <th>Advertisers (Completion rate)</th>
                    <th>Price (lowest to highest)</th>
                    <th>Limit/Available</th>
                    <th>Payment</th>
                    <th>Trade</th>
                    
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior sell+ada</span>
                            <span class='table-row2-td1-txt2'>
                                <span>729 orders</span>
                                <span>96.90% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.80</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span>108,020.53 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>500,000.00</span>
                                <span> - ₨</span>
                                <span>20,000,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div">
                        <span class="table-row2-td4-txt">Easypaisa-PK Only</span>
                        <span class="table-row2-td4-txt">Meezan Bank</span>
                        </div>
                    </td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div">
                        <span class="table-row2-td4-txt">Easypaisa-PK Only</span>
                        <span class="table-row2-td4-txt">Raast</span>
                        <span class="table-row2-td4-txt">United Bank Limited</span>
                        </div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                
            </table>
            </div>
            </>
            :null}
            {showtexttradebuyshib ? 
            <>
            <div class="trade-content-div3">
            <table>
                <tr class="table-row1">
                    <th>Advertisers (Completion rate)</th>
                    <th>Price (lowest to highest)</th>
                    <th>Limit/Available</th>
                    <th>Payment</th>
                    <th>Trade</th>
                    
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior sell+shib</span>
                            <span class='table-row2-td1-txt2'>
                                <span>729 orders</span>
                                <span>96.90% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.80</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span>108,020.53 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>500,000.00</span>
                                <span> - ₨</span>
                                <span>20,000,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div">
                        <span class="table-row2-td4-txt">Easypaisa-PK Only</span>
                        <span class="table-row2-td4-txt">Meezan Bank</span>
                        </div>
                    </td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div">
                        <span class="table-row2-td4-txt">Easypaisa-PK Only</span>
                        <span class="table-row2-td4-txt">Raast</span>
                        <span class="table-row2-td4-txt">United Bank Limited</span>
                        </div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                
            </table>
            </div>
            </>
            :null}
            {showtexttradebuydoge ? 
            <>
            <div class="trade-content-div3">
            <table>
                <tr class="table-row1">
                    <th>Advertisers (Completion rate)</th>
                    <th>Price (lowest to highest)</th>
                    <th>Limit/Available</th>
                    <th>Payment</th>
                    <th>Trade</th>
                    
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior sell+doge</span>
                            <span class='table-row2-td1-txt2'>
                                <span>729 orders</span>
                                <span>96.90% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.80</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span>108,020.53 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>500,000.00</span>
                                <span> - ₨</span>
                                <span>20,000,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div">
                        <span class="table-row2-td4-txt">Easypaisa-PK Only</span>
                        <span class="table-row2-td4-txt">Meezan Bank</span>
                        </div>
                    </td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div">
                        <span class="table-row2-td4-txt">Easypaisa-PK Only</span>
                        <span class="table-row2-td4-txt">Raast</span>
                        <span class="table-row2-td4-txt">United Bank Limited</span>
                        </div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                
            </table>
            </div>
            </>
            :null}
            {showtexttradebuytrx ? 
            <>
            <div class="trade-content-div3">
            <table>
                <tr class="table-row1">
                    <th>Advertisers (Completion rate)</th>
                    <th>Price (lowest to highest)</th>
                    <th>Limit/Available</th>
                    <th>Payment</th>
                    <th>Trade</th>
                    
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior sell+trx</span>
                            <span class='table-row2-td1-txt2'>
                                <span>729 orders</span>
                                <span>96.90% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.80</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span>108,020.53 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>500,000.00</span>
                                <span> - ₨</span>
                                <span>20,000,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div">
                        <span class="table-row2-td4-txt">Easypaisa-PK Only</span>
                        <span class="table-row2-td4-txt">Meezan Bank</span>
                        </div>
                    </td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div">
                        <span class="table-row2-td4-txt">Easypaisa-PK Only</span>
                        <span class="table-row2-td4-txt">Raast</span>
                        <span class="table-row2-td4-txt">United Bank Limited</span>
                        </div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                
            </table>
            </div>
            </>
            :null}
            {showtexttradebuymatic ? 
            <>
            <div class="trade-content-div3">
            <table>
                <tr class="table-row1">
                    <th>Advertisers (Completion rate)</th>
                    <th>Price (lowest to highest)</th>
                    <th>Limit/Available</th>
                    <th>Payment</th>
                    <th>Trade</th>
                    
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior sell+matic</span>
                            <span class='table-row2-td1-txt2'>
                                <span>729 orders</span>
                                <span>96.90% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.80</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span>108,020.53 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>500,000.00</span>
                                <span> - ₨</span>
                                <span>20,000,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div">
                        <span class="table-row2-td4-txt">Easypaisa-PK Only</span>
                        <span class="table-row2-td4-txt">Meezan Bank</span>
                        </div>
                    </td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div">
                        <span class="table-row2-td4-txt">Easypaisa-PK Only</span>
                        <span class="table-row2-td4-txt">Raast</span>
                        <span class="table-row2-td4-txt">United Bank Limited</span>
                        </div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                
            </table>
            </div>
            </>
            :null}
            {showtexttradebuysol ? 
            <>
            <div class="trade-content-div3">
            <table>
                <tr class="table-row1">
                    <th>Advertisers (Completion rate)</th>
                    <th>Price (lowest to highest)</th>
                    <th>Limit/Available</th>
                    <th>Payment</th>
                    <th>Trade</th>
                    
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior sell+sol</span>
                            <span class='table-row2-td1-txt2'>
                                <span>729 orders</span>
                                <span>96.90% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.80</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span>108,020.53 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>500,000.00</span>
                                <span> - ₨</span>
                                <span>20,000,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div">
                        <span class="table-row2-td4-txt">Easypaisa-PK Only</span>
                        <span class="table-row2-td4-txt">Meezan Bank</span>
                        </div>
                    </td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div">
                        <span class="table-row2-td4-txt">Easypaisa-PK Only</span>
                        <span class="table-row2-td4-txt">Raast</span>
                        <span class="table-row2-td4-txt">United Bank Limited</span>
                        </div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                
            </table>
            </div>
            </>
            :null}
            {showtexttradebuydot ? 
            <>
            <div class="trade-content-div3">
            <table>
                <tr class="table-row1">
                    <th>Advertisers (Completion rate)</th>
                    <th>Price (lowest to highest)</th>
                    <th>Limit/Available</th>
                    <th>Payment</th>
                    <th>Trade</th>
                    
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior sell+dot</span>
                            <span class='table-row2-td1-txt2'>
                                <span>729 orders</span>
                                <span>96.90% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.80</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span>108,020.53 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>500,000.00</span>
                                <span> - ₨</span>
                                <span>20,000,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div">
                        <span class="table-row2-td4-txt">Easypaisa-PK Only</span>
                        <span class="table-row2-td4-txt">Meezan Bank</span>
                        </div>
                    </td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div">
                        <span class="table-row2-td4-txt">Easypaisa-PK Only</span>
                        <span class="table-row2-td4-txt">Raast</span>
                        <span class="table-row2-td4-txt">United Bank Limited</span>
                        </div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                <tr class="table-row2">
                    <td>
                        <div>
                            <span class="table-row2-td1-txt1">FA_TeamWarrior</span>
                            <span class='table-row2-td1-txt2'>
                                <span>246 orders</span>
                                <span>100.00% completion</span>
                            </span>
                        </div>
                    </td>
                    <td><span ><span>284.50</span><span class="table-row2-td2-txt"> PKR</span></span></td>
                    <td>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Available: </span><span class="table-row3-td2-txt2">37.41 USDT</span></span>
                        <span class="table-row2-td3-txt1"><span class="table-row2-td3-txt2">Limit: </span>
                            <span>₨
                                <span>1,000.00</span>
                                <span> - ₨</span>
                                <span>5,000.00</span>
                            </span>
                        </span>
                    </td>
                    <td><div class="table-row2-td4-div"><span class="table-row2-td4-txt">Easypaisa-PK Only</span></div></td>
                    <td class="table-row2-btn table-row2-sell-btn"><button>Sell USDT</button></td>
                </tr>
                
            </table>
            </div>
            </>
            :null}
            

</>
:null}
{/* end of sell table////      */}
            

            </div>
            </div>
            
            </div>

            <div class="trade-main4">
                <div class="trade-main4-container">
                    <div class="trade-main4-div1">
                        HOW P2P WORKS
                        <div class="trade-main4-div1a">
                            <button onClick={onClicktradep2pbuy} className={showtexttradep2pbuy ? 'trade-main4-div1a-btn-onclick': 'trade-main4-div1a-btn'}>Buy Crypto</button>
                            <button onClick={onClicktradep2psell} className={showtexttradep2psell ? 'trade-main4-div1a-btn-onclick': 'trade-main4-div1a-btn'}>Sell Crypto</button>
                        </div>
                    </div>
                    {showtexttradep2pbuy ?
                    <>
                    <div class="trade-main4-div2">
                        <div class="trade-main4-div2a">
                            <div class="trade-main4-div2a-div1">
                                <img src={p2pbuy1}></img>
                            </div>
                            <div class="trade-main4-div2a-div2">
                                <p>Place an Order</p>
                                <span>Once you place a P2P order, the crypto asset will be escrowed by Binance P2P.</span>
                            </div>
                        </div>
                        <div class="trade-main4-div2a">
                            <div class="trade-main4-div2a-div1">
                                <img src={p2pbuy2}></img>
                            </div>
                            <div class="trade-main4-div2a-div2">
                                <p>Pay the Seller</p>
                                <span>Send money to the seller via the suggested payment methods. Complete the fiat transaction and click "Transferred, notify seller" on Binance P2P.</span>
                            </div>
                        </div>
                        <div class="trade-main4-div2a">
                            <div class="trade-main4-div2a-div1">
                                <img src={p2pbuy3}></img>
                            </div>
                            <div class="trade-main4-div2a-div2">
                                <p>Get your Crypto</p>
                                <span>Once the seller confirms receipt of money, the escrowed crypto will be released to you.</span>
                            </div>
                        </div>
                    </div>
                    </>
                    :null}
                    {showtexttradep2psell ?
                    <>
                    <div class="trade-main4-div2">
                        <div class="trade-main4-div2a">
                            <div class="trade-main4-div2a-div1">
                                <img src={p2pbuy1}></img>
                            </div>
                            <div class="trade-main4-div2a-div2">
                                <p>Place an Order</p>
                                <span>After you place an order, your crypto will be escrowed by Binance P2P.</span>
                            </div>
                        </div>
                        <div class="trade-main4-div2a">
                            <div class="trade-main4-div2a-div1">
                                <img src={p2padv2}></img>
                            </div>
                            <div class="trade-main4-div2a-div2">
                                <p>Confirm the Payment</p>
                                <span>Check the transaction record in the given payment account, and make sure you receive the money sent by the buyer.</span>
                            </div>
                        </div>
                        <div class="trade-main4-div2a">
                            <div class="trade-main4-div2a-div1">
                                <img src={p2psell2}></img>
                            </div>
                            <div class="trade-main4-div2a-div2">
                                <p>Release Crypto</p>
                                <span>Once you confirm the receipt of money, release crypto to the buyer on Binance P2P.</span>
                            </div>
                        </div>
                    </div>
                    </>
                    :null}
                    
                </div>
            </div>

            <div class="trade-main5">
                <div class="trade-main5-container">
                    <div class="trade-main4-div1">
                        Advantages of P2P Exchange
                    </div>
                    <div class="trade-main5-divb">
                        <div class="trade-main5-divb1">
                            <div class="trade-main5-divb1a">
                                <div class="trade-main5-div1a-div1">
                                    <img src={p2padv1}></img>
                                </div>
                                <div class="trade-main4-div2a-div2">
                                    <p>Low Transaction Fees</p>
                                    <span>On Binance P2P, takers are charged zero trading fees. We pledge to apply the lowest P2P transaction fees for all markets.</span>
                                </div>
                            </div>
                            <div class="trade-main5-divb1a">
                                <div class="trade-main5-div1a-div1">
                                    <img src={p2padv2}></img>
                                </div>
                                <div class="trade-main4-div2a-div2">
                                    <p>Flexible Payment Methods</p>
                                    <span>Peer-to-peer (P2P) exchanges allow sellers the freedom to define how they want to be paid. Buy and sell crypto with over 700 payment methods, including bank transfer, cash, M-Pesa, and multiple e-wallets.</span>
                                </div>
                            </div>
                            <div class="trade-main5-divb1a">
                                <div class="trade-main5-div1a-div1">
                                    <img src={p2padv3}></img>
                                </div>
                                <div class="trade-main4-div2a-div2">
                                    <p>Trade at Your Preferred Prices</p>
                                    <span>Trade crypto with the freedom to buy and sell at your preferred prices. Buy or sell from the existing offers, or create trade advertisements to set your own prices.</span>
                                </div>
                            </div>
                            <div class="trade-main5-divb1a">
                                <div class="trade-main5-div1a-div1">
                                    <img src={p2padv4}></img>
                                </div>
                                <div class="trade-main4-div2a-div2">
                                    <p>Protecting Your Privacy</p>
                                    <span>Unlike credit card or bank transfers, peer-to-peer exchanges do not collect information about buyers and sellers.</span>
                                </div>
                            </div>
                        </div>
                        <div class="trade-main5-divb2">
                            <div class="trade-main5-div2-img"><img src={p2padvmobile}></img></div>
                        </div>
                    </div>

                </div>
            </div>
            <FAQ/>
        </div>
        </>
    )
};
export default Tradecomp;