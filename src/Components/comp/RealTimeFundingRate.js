import React from 'react';
import "./RTFR.css";

import { useState } from 'react';
import ReactModal from 'react-modal';

import bgimg from "../assets/figma/DepositFlat/bg-img.png";
import forwardarrow from "../assets/figma/DepositFlat/forward-arrow.png";
import downarrow from "../assets/figma/DepositFlat/down-arrow.png";
import uparrow from "../assets/figma/DepositFlat/up-arrow.png";
import usaflag from "../assets/figma/DepositFlat/usa-flag.png";
import forwardarrowwhite from "../assets/figma/DepositFlat/forward-arrow-white.png";
import cross from "../assets/figma/DepositFlat/cross.png";
import selectedtick from "../assets/figma/DepositFlat/selected-tick.png";
import unselectedcircle from "../assets/figma/crypto/unselected-circle.png";
import selectedcircle from "../assets/figma/crypto/selected-circle.png";
import whitebar from "../assets/figma/crypto/white-bar.png";
import orangebox from "../assets/figma/crypto/orange-box.png";


function DepositFlat2(){
    //  const [isOpen, setIsOpen] = useState(false);

    const [showTextrftr1, setShowTextrftr1] = useState(true);
    const onClickrftr1 = () => {
        setShowTextrftr1(true)
        setShowTextrftr2(false)
        setShowTextrftr3(false)
        setShowTextrftr4(false)
        setShowTextrftr5(false)
        setShowTextrftr6(false)

    };
    const [showTextrftr2, setShowTextrftr2] = useState('');
    const onClickrftr2 = () => {
        setShowTextrftr2(true)
        setShowTextrftr1(false)
        setShowTextrftr3(false)
        setShowTextrftr4(false)
        setShowTextrftr5(false)
        setShowTextrftr6(false)
    };
    const [showTextrftr3, setShowTextrftr3] = useState('');
    const onClickrftr3 = () => {
        setShowTextrftr3(true)
        setShowTextrftr1(false)
        setShowTextrftr2(false)
        setShowTextrftr4(false)
        setShowTextrftr5(false)
        setShowTextrftr6(false)
    };
    const [showTextrftr4, setShowTextrftr4] = useState('');
    const onClickrftr4 = () => {
        setShowTextrftr4(true)
        setShowTextrftr1(false)
        setShowTextrftr2(false)
        setShowTextrftr3(false)
        setShowTextrftr5(false)
        setShowTextrftr6(false)
    };
    const [showTextrftr5, setShowTextrftr5] = useState('');
    const onClickrftr5 = () => {
        setShowTextrftr5(true)
        setShowTextrftr1(false)
        setShowTextrftr2(false)
        setShowTextrftr3(false)
        setShowTextrftr4(false)
        setShowTextrftr6(false)
    };
    const [showTextrftr6, setShowTextrftr6] = useState('');
    const onClickrftr6 = () => {
        setShowTextrftr6(true)
        setShowTextrftr1(false)
        setShowTextrftr2(false)
        setShowTextrftr3(false)
        setShowTextrftr4(false)
        setShowTextrftr5(false)
    };

    const [showTextrftrline1, setShowTextrftrline1] = useState('');
    const onClickrftrline1 = () => setShowTextrftrline1(!showTextrftrline1);
    const [showTextrftrline2, setShowTextrftrline2] = useState('');
    const onClickrftrline2 = () => setShowTextrftrline2(!showTextrftrline2);
    const [showTextrftrline3, setShowTextrftrline3] = useState('');
    const onClickrftrline3 = () => setShowTextrftrline3(!showTextrftrline3);
    const [showTextrftrline4, setShowTextrftrline4] = useState('');
    const onClickrftrline4 = () => setShowTextrftrline4(!showTextrftrline4);
    const [showTextrftrline5, setShowTextrftrline5] = useState('');
    const onClickrftrline5 = () => setShowTextrftrline5(!showTextrftrline5);

    const [showTextrftrcontainer4line1, setShowTextrftrcontainer4line1] = useState('');
    const onClickrftrcontainer4line1 = () => setShowTextrftrcontainer4line1(!showTextrftrcontainer4line1);
    const [showTextrftrcontainer4line2, setShowTextrftrcontainer4line2] = useState('');
    const onClickrftrcontainer4line2 = () => setShowTextrftrcontainer4line2(!showTextrftrcontainer4line2);
    const [showTextrftrcontainer4line3, setShowTextrftrcontainer4line3] = useState('');
    const onClickrftrcontainer4line3 = () => setShowTextrftrcontainer4line3(!showTextrftrcontainer4line3);
    return(
        <>
            {/* <div class="rtfr-main">
            <h1 onClick={() => setIsOpen(true)}>Real Time Funding Rate Modal</h1>
             </div>                                        */}
            
                

            {/* <ReactModal id="rtfr-modal"
                            style={{
                                
                                 
                                overlay: {
                                position: 'fixed',
                                zIndex: 1020,
                                top: 0,
                                left: 0,
                                width: '100vw',
                                height: '100vh',
                                background: 'rgba(7, 7, 7, 0.9)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                
                                
                                
                                },
                                content: {
                                background: 'rgba(22, 22, 22, 1)',
                                width: 'auto',
                                maxWidth: 'calc(100vw - 2rem)',
                                maxHeight: 'calc(100vh - 2rem)',
                                overflowY: 'auto',
                                position: 'relative',
                                border:'none',
                                borderRadius: '0.5rem',
                                },
                                
                                
                            }}

                            isOpen={isOpen}
                            contentLabel="Example Modal"
                            onRequestClose={() => setIsOpen(false)}
                            > */}

<div className={showTextrftr2 + showTextrftr3  ? 'rtfrpup-modal-main-onclick' : 'rtfrpup-modal-main' } >
    <div class="rtfrpup-modal-container">
        <div class="rtfrpup-modal-div1">
            <span class="rtfrpup-modal-div1-txt">Indicators</span>
            {/* <img onClick={() => setIsOpen(false)} src={cross}></img> */}
        </div>
        <div class="rftrpup-modal-div2">
            <button class="rftrpup-modal-div2-btn1">Main</button>
            <button class="rftrpup-modal-div2-btn2">Sub</button>
        </div>
        <div class="rftrpup-modal-div3">
            <div class="rftrpup-modal-div3a">
                <div class="rftrpup-modal-div3a-container">
                    <div class="assa"><span class="rftpup-modal-div3a-txt">Main (1/5)</span></div>
                    <div class="rftrpup-modal-div3a-div2-main-resp">
                    <div class="rftrpup-modal-div3a-div2">
                        <div onClick={onClickrftr1} className={!showTextrftr1 ? 'rftrpup-modal-div3a-div2a' : 'rftrpup-modal-div3a-div2a-onclick'} >
                        {showTextrftr1 ? <img src={selectedcircle}></img> : <img src={unselectedcircle}></img> }
                            <span class="rftrpup-modal-div3a-div2a-txt">MA</span>
                            <img class="rftrpup-modal-div3a-div2a-img2" src={forwardarrowwhite}></img>
                        </div>
                    </div>
                    <div class="rftrpup-modal-div3a-div2">
                        <div onClick={onClickrftr2} className={!showTextrftr2 ? 'rftrpup-modal-div3a-div2a' : 'rftrpup-modal-div3a-div2a-onclick'} >
                        {showTextrftr2 ? <img src={selectedcircle}></img> : <img src={unselectedcircle}></img> }
                            <span class="rftrpup-modal-div3a-div2a-txt">EMA</span>
                            <img class="rftrpup-modal-div3a-div2a-img2" src={forwardarrowwhite}></img>
                        </div>
                    </div>
                    <div class="rftrpup-modal-div3a-div2">
                        <div onClick={onClickrftr3} className={!showTextrftr3 ? 'rftrpup-modal-div3a-div2a' : 'rftrpup-modal-div3a-div2a-onclick'} >
                        {showTextrftr3 ? <img src={selectedcircle}></img> : <img src={unselectedcircle}></img> }
                            <span class="rftrpup-modal-div3a-div2a-txt">WMA</span>
                            <img class="rftrpup-modal-div3a-div2a-img2" src={forwardarrowwhite}></img>
                        </div>
                    </div>
                    <div class="rftrpup-modal-div3a-div2">
                        <div onClick={onClickrftr4} className={!showTextrftr4 ? 'rftrpup-modal-div3a-div2a' : 'rftrpup-modal-div3a-div2a-onclick'} >
                        {showTextrftr4 ? <img src={selectedcircle}></img> : <img src={unselectedcircle}></img> }
                            <span class="rftrpup-modal-div3a-div2a-txt">BOLL</span>
                            <img class="rftrpup-modal-div3a-div2a-img2" src={forwardarrowwhite}></img>
                        </div>
                    </div>
                    <div class="rftrpup-modal-div3a-div2">
                        <div onClick={onClickrftr5} className={!showTextrftr5 ? 'rftrpup-modal-div3a-div2a' : 'rftrpup-modal-div3a-div2a-onclick'} >
                        {showTextrftr5 ? <img src={selectedcircle}></img> : <img src={unselectedcircle}></img> }
                            <span class="rftrpup-modal-div3a-div2a-txt">TRIX</span>
                            <img class="rftrpup-modal-div3a-div2a-img2" src={forwardarrowwhite}></img>
                        </div>
                    </div>
                    <div class="rftrpup-modal-div3a-div2">
                        <div onClick={onClickrftr6} className={!showTextrftr6 ? 'rftrpup-modal-div3a-div2a' : 'rftrpup-modal-div3a-div2a-onclick'} >
                        {showTextrftr6 ? <img src={selectedcircle}></img> : <img src={unselectedcircle}></img> }
                            <span class="rftrpup-modal-div3a-div2a-txt">SAR</span>
                            <img class="rftrpup-modal-div3a-div2a-img2" src={forwardarrowwhite}></img>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div class="rftrpup-modal-div3b">
                {/* container 1////////////// */}
            <div className={showTextrftr1 ? 'rftrpup-modal-div3b-container-onclick' : 'rftrpup-modal-div3b-container'}>
                <span class="rftr-modal-container-head-txt">MA-Moving Average</span>
                <div class="rftrpup-modal-div3b-div">
                   {/* 1st line//// */}
                    <div class="rftpup-modal-div3b-div1">
                        <div class="rftpup-modal-div3b-div1a">
                        <div onClick={onClickrftrline1} className={!showTextrftrline1 ? 'rftrpup-modal-div3b-div1a-a' : 'rftrpup-modal-div3b-div1a-a-onclick'} >
                        {showTextrftrline1 ? <img src={selectedcircle}></img> : <img src={unselectedcircle}></img> }
                            <span class="rftrpup-modal-div3a-div2a-txt">MA1</span>
                        </div>
                        </div>
                        <div class="rftpup-modal-div3b-div1a">
                            <select id="rftpup-modal-div3b-div1a-select">
                                <option class="rftpup-modal-div3b-div1a-option">Close</option>
                                <option class="rftpup-modal-div3b-div1a-option">Close</option>
                            </select>
                        </div>
                        <div class="rftpup-modal-div3b-div1a">
                        <select id="rftpup-modal-div3b-div1a-select">
                            <option class="rftpup-modal-div3b-div1a-option">________</option>
                            <option class="rftpup-modal-div3b-div1a-option">________</option>
                        </select>
                        </div>
                        <div class="rftpup-modal-div3b-div1d rftpup-modal-div3b-div1d1">
                        {/* <img src={orangebox}></img> */}
                        </div>
                    </div>
                    {/* 2nd line// */}
                    <div class="rftpup-modal-div3b-div1">
                        <div class="rftpup-modal-div3b-div1a">
                        <div onClick={onClickrftrline2} className={!showTextrftrline2 ? 'rftrpup-modal-div3b-div1a-a' : 'rftrpup-modal-div3b-div1a-a-onclick'} >
                        {showTextrftrline2 ? <img src={selectedcircle}></img> : <img src={unselectedcircle}></img> }
                            <span class="rftrpup-modal-div3a-div2a-txt">MA2</span>
                        </div>
                        </div>
                        <div class="rftpup-modal-div3b-div1a">
                            <select id="rftpup-modal-div3b-div1a-select">
                                <option class="rftpup-modal-div3b-div1a-option">Close</option>
                                <option class="rftpup-modal-div3b-div1a-option">Close</option>
                            </select>
                        </div>
                        <div class="rftpup-modal-div3b-div1a">
                        <select id="rftpup-modal-div3b-div1a-select">
                            <option class="rftpup-modal-div3b-div1a-option">________</option>
                            <option class="rftpup-modal-div3b-div1a-option">________</option>
                        </select>
                        </div>
                        <div class="rftpup-modal-div3b-div1d rftpup-modal-div3b-div1d2">
                        {/* <img src={orangebox}></img> */}
                        </div>
                    </div>
                    {/* 3rd line/// */}
                    <div class="rftpup-modal-div3b-div1">
                        <div class="rftpup-modal-div3b-div1a">
                        <div onClick={onClickrftrline3} className={!showTextrftrline3 ? 'rftrpup-modal-div3b-div1a-a' : 'rftrpup-modal-div3b-div1a-a-onclick'} >
                        {showTextrftrline3 ? <img src={selectedcircle}></img> : <img src={unselectedcircle}></img> }
                            <span class="rftrpup-modal-div3a-div2a-txt">MA3</span>
                        </div>
                        </div>
                        <div class="rftpup-modal-div3b-div1a">
                            <select id="rftpup-modal-div3b-div1a-select">
                                <option class="rftpup-modal-div3b-div1a-option">Close</option>
                                <option class="rftpup-modal-div3b-div1a-option">Close</option>
                            </select>
                        </div>
                        <div class="rftpup-modal-div3b-div1a">
                        <select id="rftpup-modal-div3b-div1a-select">
                            <option class="rftpup-modal-div3b-div1a-option">________</option>
                            <option class="rftpup-modal-div3b-div1a-option">________</option>
                        </select>
                        </div>
                        <div class="rftpup-modal-div3b-div1d rftpup-modal-div3b-div1d3">
                        {/* <img src={orangebox}></img> */}
                        </div>
                    </div>
                    {/* 4th line// */}
                    <div class="rftpup-modal-div3b-div1">
                        <div class="rftpup-modal-div3b-div1a">
                        <div onClick={onClickrftrline4} className={!showTextrftrline4 ? 'rftrpup-modal-div3b-div1a-a' : 'rftrpup-modal-div3b-div1a-a-onclick'} >
                        {showTextrftrline4 ? <img src={selectedcircle}></img> : <img src={unselectedcircle}></img> }
                            <span class="rftrpup-modal-div3a-div2a-txt">MA4</span>
                        </div>
                        </div>
                        <div class="rftpup-modal-div3b-div1a">
                            <select id="rftpup-modal-div3b-div1a-select">
                                <option class="rftpup-modal-div3b-div1a-option">Close</option>
                                <option class="rftpup-modal-div3b-div1a-option">Close</option>
                            </select>
                        </div>
                        <div class="rftpup-modal-div3b-div1a">
                        <select id="rftpup-modal-div3b-div1a-select">
                            <option class="rftpup-modal-div3b-div1a-option">________</option>
                            <option class="rftpup-modal-div3b-div1a-option">________</option>
                        </select>
                        </div>
                        <div class="rftpup-modal-div3b-div1d rftpup-modal-div3b-div1d4">
                        {/* <img src={orangebox}></img> */}
                        </div>
                    </div>
                    {/* 5th line// */}
                    <div class="rftpup-modal-div3b-div1">
                        <div class="rftpup-modal-div3b-div1a">
                        <div onClick={onClickrftrline5} className={!showTextrftrline5 ? 'rftrpup-modal-div3b-div1a-a' : 'rftrpup-modal-div3b-div1a-a-onclick'} >
                        {showTextrftrline5 ? <img src={selectedcircle}></img> : <img src={unselectedcircle}></img> }
                            <span class="rftrpup-modal-div3a-div2a-txt">MA5</span>
                        </div>
                        </div>
                        <div class="rftpup-modal-div3b-div1a">
                            <select id="rftpup-modal-div3b-div1a-select">
                                <option class="rftpup-modal-div3b-div1a-option">Close</option>
                                <option class="rftpup-modal-div3b-div1a-option">Close</option>
                            </select>
                        </div>
                        <div class="rftpup-modal-div3b-div1a">
                        <select id="rftpup-modal-div3b-div1a-select">
                            <option class="rftpup-modal-div3b-div1a-option">________</option>
                            <option class="rftpup-modal-div3b-div1a-option">________</option>
                        </select>
                        </div>
                        <div class="rftpup-modal-div3b-div1d rftpup-modal-div3b-div1d5">
                        {/* <img src={orangebox}></img> */}
                        </div>
                    </div>
                    <div class="rftrpup-modal-div3b-div-btn">
                    <button class="rftrpup-modal-div3b-div-btn-btn1">Reset</button>
                    <button class="rftrpup-modal-div3b-div-btn-btn2">Save</button>
                    </div>
                </div>
                

            </div>
            {/* container 2/////////////////////////// */}
            <div className={showTextrftr2 ? 'rftrpup-modal-div3b-container-onclick' : 'rftrpup-modal-div3b-container'}>
                <span class="rftr-modal-container-head-txt">EMA - Exponential Moving Average</span>
                <div class="rftrpup-modal-div3b-div">
                   {/* 1st line//// */}
                    <div class="rftpup-modal-div3b-div1">
                        <div class="rftpup-modal-div3b-div1a">
                        <div onClick={onClickrftrline1} className={!showTextrftrline1 ? 'rftrpup-modal-div3b-div1a-a' : 'rftrpup-modal-div3b-div1a-a-onclick'} >
                        {showTextrftrline1 ? <img src={selectedcircle}></img> : <img src={unselectedcircle}></img> }
                            <span class="rftrpup-modal-div3a-div2a-txt">E-MA1</span>
                        </div>
                        </div>
                        <div class="rftpup-modal-div3b-div1a">
                        <div class="rftrpup-modal-div3b-div1a-a" >
                            <input type="text" value="7"></input>
                        </div>
                        </div>

                        <div class="rftpup-modal-div3b-div1a">
                            <select id="rftpup-modal-div3b-div1a-select">
                                <option class="rftpup-modal-div3b-div1a-option">Close</option>
                                <option class="rftpup-modal-div3b-div1a-option">Close</option>
                            </select>
                        </div>
                        <div class="rftpup-modal-div3b-div1a">
                        <select id="rftpup-modal-div3b-div1a-select">
                            <option class="rftpup-modal-div3b-div1a-option">________</option>
                            <option class="rftpup-modal-div3b-div1a-option">________</option>
                        </select>
                        </div>
                        <div class="rftpup-modal-div3b-div1d rftpup-modal-div3b-div1d1">
                        {/* <img src={orangebox}></img> */}
                        </div>
                    </div>
                    {/* 2nd line// */}
                    <div class="rftpup-modal-div3b-div1">
                        <div class="rftpup-modal-div3b-div1a">
                        <div onClick={onClickrftrline2} className={!showTextrftrline2 ? 'rftrpup-modal-div3b-div1a-a' : 'rftrpup-modal-div3b-div1a-a-onclick'} >
                        {showTextrftrline2 ? <img src={selectedcircle}></img> : <img src={unselectedcircle}></img> }
                            <span class="rftrpup-modal-div3a-div2a-txt">E-MA2</span>
                        </div>
                        </div>
                        <div class="rftpup-modal-div3b-div1a">
                        <div class="rftrpup-modal-div3b-div1a-a" >
                        <input type="text" value="25"></input>
                        </div>
                        </div>
                        <div class="rftpup-modal-div3b-div1a">
                            <select id="rftpup-modal-div3b-div1a-select">
                                <option class="rftpup-modal-div3b-div1a-option">Close</option>
                                <option class="rftpup-modal-div3b-div1a-option">Close</option>
                            </select>
                        </div>
                        <div class="rftpup-modal-div3b-div1a">
                        <select id="rftpup-modal-div3b-div1a-select">
                            <option class="rftpup-modal-div3b-div1a-option">________</option>
                            <option class="rftpup-modal-div3b-div1a-option">________</option>
                        </select>
                        </div>
                        <div class="rftpup-modal-div3b-div1d rftpup-modal-div3b-div1d2">
                        {/* <img src={orangebox}></img> */}
                        </div>
                    </div>
                    {/* 3rd line/// */}
                    <div class="rftpup-modal-div3b-div1">
                        <div class="rftpup-modal-div3b-div1a">
                        <div onClick={onClickrftrline3} className={!showTextrftrline3 ? 'rftrpup-modal-div3b-div1a-a' : 'rftrpup-modal-div3b-div1a-a-onclick'} >
                        {showTextrftrline3 ? <img src={selectedcircle}></img> : <img src={unselectedcircle}></img> }
                            <span class="rftrpup-modal-div3a-div2a-txt">E-MA3</span>
                        </div>
                        </div>
                        <div class="rftpup-modal-div3b-div1a">
                        <div class="rftrpup-modal-div3b-div1a-a" >
                        <input type="text" value="99"></input>
                        </div>
                        </div>
                        <div class="rftpup-modal-div3b-div1a">
                            <select id="rftpup-modal-div3b-div1a-select">
                                <option class="rftpup-modal-div3b-div1a-option">Close</option>
                                <option class="rftpup-modal-div3b-div1a-option">Close</option>
                            </select>
                        </div>
                        <div class="rftpup-modal-div3b-div1a">
                        <select id="rftpup-modal-div3b-div1a-select">
                            <option class="rftpup-modal-div3b-div1a-option">________</option>
                            <option class="rftpup-modal-div3b-div1a-option">________</option>
                        </select>
                        </div>
                        <div class="rftpup-modal-div3b-div1d rftpup-modal-div3b-div1d3">
                        {/* <img src={orangebox}></img> */}
                        </div>
                    </div>
                    {/* 4th line// */}
                    <div class="rftpup-modal-div3b-div1">
                        <div class="rftpup-modal-div3b-div1a">
                        <div onClick={onClickrftrline4} className={!showTextrftrline4 ? 'rftrpup-modal-div3b-div1a-a' : 'rftrpup-modal-div3b-div1a-a-onclick'} >
                        {showTextrftrline4 ? <img src={selectedcircle}></img> : <img src={unselectedcircle}></img> }
                            <span class="rftrpup-modal-div3a-div2a-txt">E-MA4</span>
                        </div>
                        </div>
                        <div class="rftpup-modal-div3b-div1a">
                        <div class="rftrpup-modal-div3b-div1a-a" >
                        <input type="text" value="34"></input>
                        </div>
                        </div>
                        <div class="rftpup-modal-div3b-div1a">
                            <select id="rftpup-modal-div3b-div1a-select">
                                <option class="rftpup-modal-div3b-div1a-option">Close</option>
                                <option class="rftpup-modal-div3b-div1a-option">Close</option>
                            </select>
                        </div>
                        <div class="rftpup-modal-div3b-div1a">
                        <select id="rftpup-modal-div3b-div1a-select">
                            <option class="rftpup-modal-div3b-div1a-option">________</option>
                            <option class="rftpup-modal-div3b-div1a-option">________</option>
                        </select>
                        </div>
                        <div class="rftpup-modal-div3b-div1d rftpup-modal-div3b-div1d4">
                        {/* <img src={orangebox}></img> */}
                        </div>
                    </div>
                    {/* 5th line// */}
                    <div class="rftpup-modal-div3b-div1">
                        <div class="rftpup-modal-div3b-div1a">
                        <div onClick={onClickrftrline5} className={!showTextrftrline5 ? 'rftrpup-modal-div3b-div1a-a' : 'rftrpup-modal-div3b-div1a-a-onclick'} >
                        {showTextrftrline5 ? <img src={selectedcircle}></img> : <img src={unselectedcircle}></img> }
                            <span class="rftrpup-modal-div3a-div2a-txt">E-MA5</span>
                        </div>
                        </div>
                        <div class="rftpup-modal-div3b-div1a">
                        <div class="rftrpup-modal-div3b-div1a-a" >
                        <input type="text" value="9"></input>
                        </div>
                        </div>
                        <div class="rftpup-modal-div3b-div1a">
                            <select id="rftpup-modal-div3b-div1a-select">
                                <option class="rftpup-modal-div3b-div1a-option">Close</option>
                                <option class="rftpup-modal-div3b-div1a-option">Close</option>
                            </select>
                        </div>
                        <div class="rftpup-modal-div3b-div1a">
                        <select id="rftpup-modal-div3b-div1a-select">
                            <option class="rftpup-modal-div3b-div1a-option">________</option>
                            <option class="rftpup-modal-div3b-div1a-option">________</option>
                        </select>
                        </div>
                        <div class="rftpup-modal-div3b-div1d rftpup-modal-div3b-div1d5">
                        {/* <img src={orangebox}></img> */}
                        </div>
                    </div>
                    <div class="rftrpup-modal-div3b-div-btn">
                    <button class="rftrpup-modal-div3b-div-btn-btn1">Reset</button>
                    <button class="rftrpup-modal-div3b-div-btn-btn2">Save</button>
                    </div>
                </div>
                

            </div>

{/* container 3/////////////////////////// */}
<div className={showTextrftr3 ? 'rftrpup-modal-div3b-container-onclick' : 'rftrpup-modal-div3b-container'}>
                <span class="rftr-modal-container-head-txt">WMA - Weighted Moving Average</span>
                <div class="rftrpup-modal-div3b-div">
                   {/* 1st line//// */}
                    <div class="rftpup-modal-div3b-div1">
                        <div class="rftpup-modal-div3b-div1a">
                        <div onClick={onClickrftrline1} className={!showTextrftrline1 ? 'rftrpup-modal-div3b-div1a-a' : 'rftrpup-modal-div3b-div1a-a-onclick'} >
                        {showTextrftrline1 ? <img src={selectedcircle}></img> : <img src={unselectedcircle}></img> }
                            <span class="rftrpup-modal-div3a-div2a-txt">W-MA1</span>
                        </div>
                        </div>
                        <div class="rftpup-modal-div3b-div1a">
                        <div class="rftrpup-modal-div3b-div1a-a" >
                        <input type="text" value="7"></input>
                        </div>
                        </div>

                        <div class="rftpup-modal-div3b-div1a">
                            <select id="rftpup-modal-div3b-div1a-select">
                                <option class="rftpup-modal-div3b-div1a-option">Close</option>
                                <option class="rftpup-modal-div3b-div1a-option">Close</option>
                            </select>
                        </div>
                        <div class="rftpup-modal-div3b-div1a">
                        <select id="rftpup-modal-div3b-div1a-select">
                            <option class="rftpup-modal-div3b-div1a-option">________</option>
                            <option class="rftpup-modal-div3b-div1a-option">________</option>
                        </select>
                        </div>
                        <div class="rftpup-modal-div3b-div1d rftpup-modal-div3b-div1d1">
                        {/* <img src={orangebox}></img> */}
                        </div>
                    </div>
                    {/* 2nd line// */}
                    <div class="rftpup-modal-div3b-div1">
                        <div class="rftpup-modal-div3b-div1a">
                        <div onClick={onClickrftrline2} className={!showTextrftrline2 ? 'rftrpup-modal-div3b-div1a-a' : 'rftrpup-modal-div3b-div1a-a-onclick'} >
                        {showTextrftrline2 ? <img src={selectedcircle}></img> : <img src={unselectedcircle}></img> }
                            <span class="rftrpup-modal-div3a-div2a-txt">W-MA2</span>
                        </div>
                        </div>
                        <div class="rftpup-modal-div3b-div1a">
                        <div class="rftrpup-modal-div3b-div1a-a" >
                        <input type="text" value="25"></input>
                        </div>
                        </div>
                        <div class="rftpup-modal-div3b-div1a">
                            <select id="rftpup-modal-div3b-div1a-select">
                                <option class="rftpup-modal-div3b-div1a-option">Close</option>
                                <option class="rftpup-modal-div3b-div1a-option">Close</option>
                            </select>
                        </div>
                        <div class="rftpup-modal-div3b-div1a">
                        <select id="rftpup-modal-div3b-div1a-select">
                            <option class="rftpup-modal-div3b-div1a-option">________</option>
                            <option class="rftpup-modal-div3b-div1a-option">________</option>
                        </select>
                        </div>
                        <div class="rftpup-modal-div3b-div1d rftpup-modal-div3b-div1d2">
                        {/* <img src={orangebox}></img> */}
                        </div>
                    </div>
                    {/* 3rd line/// */}
                    <div class="rftpup-modal-div3b-div1">
                        <div class="rftpup-modal-div3b-div1a">
                        <div onClick={onClickrftrline3} className={!showTextrftrline3 ? 'rftrpup-modal-div3b-div1a-a' : 'rftrpup-modal-div3b-div1a-a-onclick'} >
                        {showTextrftrline3 ? <img src={selectedcircle}></img> : <img src={unselectedcircle}></img> }
                            <span class="rftrpup-modal-div3a-div2a-txt">W-MA3</span>
                        </div>
                        </div>
                        <div class="rftpup-modal-div3b-div1a">
                        <div class="rftrpup-modal-div3b-div1a-a" >
                        <input type="text" value="99"></input>
                        </div>
                        </div>
                        <div class="rftpup-modal-div3b-div1a">
                            <select id="rftpup-modal-div3b-div1a-select">
                                <option class="rftpup-modal-div3b-div1a-option">Close</option>
                                <option class="rftpup-modal-div3b-div1a-option">Close</option>
                            </select>
                        </div>
                        <div class="rftpup-modal-div3b-div1a">
                        <select id="rftpup-modal-div3b-div1a-select">
                            <option class="rftpup-modal-div3b-div1a-option">________</option>
                            <option class="rftpup-modal-div3b-div1a-option">________</option>
                        </select>
                        </div>
                        <div class="rftpup-modal-div3b-div1d rftpup-modal-div3b-div1d3">
                        {/* <img src={orangebox}></img> */}
                        </div>
                    </div>
                    {/* 4th line// */}
                    <div class="rftpup-modal-div3b-div1">
                        <div class="rftpup-modal-div3b-div1a">
                        <div onClick={onClickrftrline4} className={!showTextrftrline4 ? 'rftrpup-modal-div3b-div1a-a' : 'rftrpup-modal-div3b-div1a-a-onclick'} >
                        {showTextrftrline4 ? <img src={selectedcircle}></img> : <img src={unselectedcircle}></img> }
                            <span class="rftrpup-modal-div3a-div2a-txt">W-MA4</span>
                        </div>
                        </div>
                        <div class="rftpup-modal-div3b-div1a">
                        <div class="rftrpup-modal-div3b-div1a-a" >
                        <input type="text" value="34"></input>
                        </div>
                        </div>
                        <div class="rftpup-modal-div3b-div1a">
                            <select id="rftpup-modal-div3b-div1a-select">
                                <option class="rftpup-modal-div3b-div1a-option">Close</option>
                                <option class="rftpup-modal-div3b-div1a-option">Close</option>
                            </select>
                        </div>
                        <div class="rftpup-modal-div3b-div1a">
                        <select id="rftpup-modal-div3b-div1a-select">
                            <option class="rftpup-modal-div3b-div1a-option">________</option>
                            <option class="rftpup-modal-div3b-div1a-option">________</option>
                        </select>
                        </div>
                        <div class="rftpup-modal-div3b-div1d rftpup-modal-div3b-div1d4">
                        {/* <img src={orangebox}></img> */}
                        </div>
                    </div>
                    {/* 5th line// */}
                    <div class="rftpup-modal-div3b-div1">
                        <div class="rftpup-modal-div3b-div1a">
                        <div onClick={onClickrftrline5} className={!showTextrftrline5 ? 'rftrpup-modal-div3b-div1a-a' : 'rftrpup-modal-div3b-div1a-a-onclick'} >
                        {showTextrftrline5 ? <img src={selectedcircle}></img> : <img src={unselectedcircle}></img> }
                            <span class="rftrpup-modal-div3a-div2a-txt">W-MA5</span>
                        </div>
                        </div>
                        <div class="rftpup-modal-div3b-div1a">
                        <div class="rftrpup-modal-div3b-div1a-a" >
                        <input type="text" value="9"></input>
                        </div>
                        </div>
                        <div class="rftpup-modal-div3b-div1a">
                            <select id="rftpup-modal-div3b-div1a-select">
                                <option class="rftpup-modal-div3b-div1a-option">Close</option>
                                <option class="rftpup-modal-div3b-div1a-option">Close</option>
                            </select>
                        </div>
                        <div class="rftpup-modal-div3b-div1a">
                        <select id="rftpup-modal-div3b-div1a-select">
                            <option class="rftpup-modal-div3b-div1a-option">________</option>
                            <option class="rftpup-modal-div3b-div1a-option">________</option>
                        </select>
                        </div>
                        <div class="rftpup-modal-div3b-div1d rftpup-modal-div3b-div1d5">
                        {/* <img src={orangebox}></img> */}
                        </div>
                    </div>
                    <div class="rftrpup-modal-div3b-div-btn">
                    <button class="rftrpup-modal-div3b-div-btn-btn1">Reset</button>
                    <button class="rftrpup-modal-div3b-div-btn-btn2">Save</button>
                    </div>
                </div>
                

            </div>

            {/* container 4/////////////////////////// */}
<div className={showTextrftr4 ? 'rftrpup-modal-div3b-container-onclick' : 'rftrpup-modal-div3b-container'}>
                <span class="rftr-modal-container-head-txt">BOLL - Bollinger Band</span>
                <div class="rftrpup-modal-div3b-div">
                   {/* 1st line//// */}
                    
                        <div class="rftpup-modal-div3b-div1">
                            <span class='rftr-modal-container4-txt'>Length</span>
                            <div class="rftrpup-modal-div3b-div1a-a" >
                                <input type="text" value="7"></input>
                            </div>
                        </div>
                        <div class="rftpup-modal-div3b-div1">
                            <span class='rftr-modal-container4-txt'>Multiplyer</span>
                            <div class="rftrpup-modal-div3b-div1a-a" >
                            <input type="text" value="25"></input>
                            </div>
                        </div>
                        <div class="rftpup-modal-div3b-div1">
                            
                            <span onClick={onClickrftrcontainer4line1} class='rftr-modal-container4-txt'>
                            {showTextrftrcontainer4line1 ? <img class="rftr-modal-container-4-img" src={selectedcircle}></img> : <img class="rftr-modal-container-4-img" src={unselectedcircle}></img> }
                            UP</span>
                            <div class="rftpup-modal-div3b-div1a">
                                <select id="rftpup-modal-div3b-div1a-select">
                                <option class="rftpup-modal-div3b-div1a-option">________</option>
                                <option class="rftpup-modal-div3b-div1a-option">________</option>
                                </select>
                            </div>
                            <div class="rftpup-modal-div3b-div1d rftpup-modal-div3b-div1d3">
                                {/* <img src={orangebox}></img> */}
                            </div>
                        </div>

                        <div class="rftpup-modal-div3b-div1">
                            
                            <span onClick={onClickrftrcontainer4line2} class='rftr-modal-container4-txt'>
                            {showTextrftrcontainer4line2 ? <img class="rftr-modal-container-4-img" src={selectedcircle}></img> : <img class="rftr-modal-container-4-img" src={unselectedcircle}></img> }
                            MB</span>
                            <div class="rftpup-modal-div3b-div1a">
                                <select id="rftpup-modal-div3b-div1a-select">
                                <option class="rftpup-modal-div3b-div1a-option">________</option>
                                <option class="rftpup-modal-div3b-div1a-option">________</option>
                                </select>
                            </div>
                            <div class="rftpup-modal-div3b-div1d rftpup-modal-div3b-div1d4">
                                {/* <img src={orangebox}></img> */}
                            </div>
                        </div>

                        <div class="rftpup-modal-div3b-div1">
                            
                            <span onClick={onClickrftrcontainer4line3} class='rftr-modal-container4-txt'>
                            {showTextrftrcontainer4line3 ? <img class="rftr-modal-container-4-img" src={selectedcircle}></img> : <img class="rftr-modal-container-4-img" src={unselectedcircle}></img> }
                            DN</span>
                            <div class="rftpup-modal-div3b-div1a">
                                <select id="rftpup-modal-div3b-div1a-select">
                                <option class="rftpup-modal-div3b-div1a-option">________</option>
                                <option class="rftpup-modal-div3b-div1a-option">________</option>
                                </select>
                            </div>
                            <div class="rftpup-modal-div3b-div1d rftpup-modal-div3b-div1d5">
                                {/* <img src={orangebox}></img> */}
                            </div>
                        </div>


                    <div class="rftrpup-modal-div3b-div-btn">
                    <button class="rftrpup-modal-div3b-div-btn-btn1">Reset</button>
                    <button class="rftrpup-modal-div3b-div-btn-btn2">Save</button>
                    </div>
                </div>
                

            </div>

                        {/* container 5/////////////////////////// */}
<div className={showTextrftr5 ? 'rftrpup-modal-div3b-container-onclick' : 'rftrpup-modal-div3b-container'}>
                <span class="rftr-modal-container-head-txt">TRIX - Triple Exponentially Smoothed Average</span>
                <div class="rftrpup-modal-div3b-div">
                   {/* 1st line//// */}
                    
                        <div class="rftpup-modal-div3b-div1">
                            <span class='rftr-modal-container5-txt'>Length</span>
                            <div class="rftrpup-modal-div3b-div1a-a" >
                            <input type="text" value="7"></input>
                            </div>
                            <div class="rftpup-modal-div3b-div1a">
                                <select id="rftpup-modal-div3b-div1a-select">
                                <option class="rftpup-modal-div3b-div1a-option">________</option>
                                <option class="rftpup-modal-div3b-div1a-option">________</option>
                                </select>
                            </div>
                            <div class="rftpup-modal-div3b-div1d rftpup-modal-div3b-div1d1">
                                {/* <img src={orangebox}></img> */}
                            </div>

                        </div>


                    <div class="rftrpup-modal-div3b-div-btn">
                    <button class="rftrpup-modal-div3b-div-btn-btn1">Reset</button>
                    <button class="rftrpup-modal-div3b-div-btn-btn2">Save</button>
                    </div>
                </div>
            </div>

                                    {/* container 6/////////////////////////// */}
<div className={showTextrftr6 ? 'rftrpup-modal-div3b-container-onclick' : 'rftrpup-modal-div3b-container'}>
                <span class="rftr-modal-container-head-txt">SAR - Stop and Reverse</span>
                <div class="rftrpup-modal-div3b-div">
                   {/* 1st line//// */}
                    
                   <div class="rftpup-modal-div3b-div1">
                            <span class='rftr-modal-container4-txt'>Length</span>
                            <div class="rftrpup-modal-div3b-div1a-a" >
                            <input type="text" value="7"></input>
                            </div>
                        </div>
                        <div class="rftpup-modal-div3b-div1">
                            <span class='rftr-modal-container4-txt'>Multiplyer</span>
                            <div class="rftrpup-modal-div3b-div1a-a" >
                            <input type="text" value="25"></input>
                            </div>
                        </div>
                        <div class="rftpup-modal-div3b-div1">
                            <span class='rftr-modal-container4-txt'>SAR</span>
                            <div class="rftpup-modal-div3b-div1d rftpup-modal-div3b-div1d3">
                                {/* <img src={orangebox}></img> */}
                            </div>

                        </div>


                    <div class="rftrpup-modal-div3b-div-btn">
                    <button class="rftrpup-modal-div3b-div-btn-btn1">Reset</button>
                    <button class="rftrpup-modal-div3b-div-btn-btn2">Save</button>
                    </div>
                </div>
                

            </div>

            </div>
        </div>


    </div>
</div>

                            
                            {/* </ReactModal> */}

        </>
    )
};


export default DepositFlat2