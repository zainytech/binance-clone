import React from 'react';
import "./CovertHist.css";

import { useState } from 'react';

import downarrow from "../assets/figma/DepositFlat/down-arrow.png";
import uparrow from "../assets/figma/DepositFlat/up-arrow.png";
import forwardarrowwhite from "../assets/figma/DepositFlat/forward-arrow-white.png";
import tothepagearrow from "../assets/figma/crypto/to-the-page-arrow.png";
import installicon from "../assets/figma/crypto/install-icon.png";
import uncheckrect from "../assets/figma/crypto/uncheck-rect.png";

function CovertHist(){
    const [showTextcovhist1, setShowTextcovhist1] = useState('');
    const onClickcovhist1 = () => {
        setShowTextcovhist1(!showTextcovhist1)
        setShowTextcovhist2(false)
        setShowTextcovhist3(false)
        setShowTextcovhist4(false)
        setShowTextcovhist5(false)
        setShowTextcovhist6(false)
        setShowTextcovhist7(false)
        setShowTextcovhist8(false)
    
    };
    const [showTextcovhist2, setShowTextcovhist2] = useState('');
    const onClickcovhist2 = () => {
        setShowTextcovhist2(!showTextcovhist2)
        setShowTextcovhist1(false)
        setShowTextcovhist3(false)
        setShowTextcovhist4(false)
        setShowTextcovhist5(false)
        setShowTextcovhist6(false)
        setShowTextcovhist7(false)
        setShowTextcovhist8(false)

    };
    const [showTextcovhist3, setShowTextcovhist3] = useState('');
    const onClickcovhist3 = () => {
        setShowTextcovhist3(!showTextcovhist3)
        setShowTextcovhist1(false)
        setShowTextcovhist2(false)
        setShowTextcovhist4(false)
        setShowTextcovhist5(false)
        setShowTextcovhist6(false)
        setShowTextcovhist7(false)
        setShowTextcovhist8(false)

    };
    const [showTextcovhist4, setShowTextcovhist4] = useState('');
    const onClickcovhist4 = () => {
        setShowTextcovhist4(!showTextcovhist4)
        setShowTextcovhist1(false)
        setShowTextcovhist2(false)
        setShowTextcovhist3(false)
        setShowTextcovhist5(false)
        setShowTextcovhist6(false)
        setShowTextcovhist7(false)
        setShowTextcovhist8(false)

    };
    const [showTextcovhist5, setShowTextcovhist5] = useState('');
    const onClickcovhist5 = () => {
        setShowTextcovhist5(!showTextcovhist5)
        setShowTextcovhist1(false)
        setShowTextcovhist2(false)
        setShowTextcovhist3(false)
        setShowTextcovhist4(false)
        setShowTextcovhist6(false)
        setShowTextcovhist7(false)
        setShowTextcovhist8(false)

    };
    const [showTextcovhist6, setShowTextcovhist6] = useState('');
    const onClickcovhist6 = () => {
        setShowTextcovhist6(!showTextcovhist6)
        setShowTextcovhist1(false)
        setShowTextcovhist2(false)
        setShowTextcovhist3(false)
        setShowTextcovhist4(false)
        setShowTextcovhist5(false)
        setShowTextcovhist7(false)
        setShowTextcovhist8(false)

    };
    const [showTextcovhist7, setShowTextcovhist7] = useState(true);
    const onClickcovhist7 = () => {
        setShowTextcovhist7(!showTextcovhist7)
        setShowTextcovhist1(false)
        setShowTextcovhist2(false)
        setShowTextcovhist3(false)
        setShowTextcovhist4(false)
        setShowTextcovhist5(false)
        setShowTextcovhist6(false)
        setShowTextcovhist8(false)
        setShowTextcovhistdropdown1(false)
        setShowTextcovhistdropdown2(false)
        setShowTextcovhistdropdown3(false)
        setShowTextcovhistdropdown1a(false)
        setShowTextcovhistdropdown2a(false)
        setShowTextcovhistdropdown3a(false)
        setShowTextcovhistdropdown4a(false)
        setShowTextcovhistdropdown5a(false)
        setShowTextcovhistdropdown6a(false)
        setShowTextcovhistdropdown7a(false)
        setShowTextcovhistdropdown8a(false)
        setShowTextcovhistdropdown9a(false)
        setShowTextcovhistdropdown10a(false)
        setShowTextcovhistdropdown11a(false)
        setShowTextcovhistdropdown12a(false)
        setShowTextcovhistdropdown13a(false)
    };
    const [showTextcovhist8, setShowTextcovhist8] = useState('');
    const onClickcovhist8 = () => {
        setShowTextcovhist8(!showTextcovhist8)
        setShowTextcovhist1(false)
        setShowTextcovhist2(false)
        setShowTextcovhist3(false)
        setShowTextcovhist4(false)
        setShowTextcovhist5(false)
        setShowTextcovhist6(false)
        setShowTextcovhist7(false)

    };

    const [showTextcovhistdropdown1, setShowTextcovhistdropdown1] = useState('');
    const onClickcovhistdropdown1 = () => {
        setShowTextcovhistdropdown1(true)
        setShowTextcovhistdropdown2(false)
        setShowTextcovhistdropdown3(false)
        setShowTextcovhistdropdown1a(false)
        setShowTextcovhistdropdown2a(false)
        setShowTextcovhistdropdown3a(false)
        setShowTextcovhistdropdown4a(false)
        setShowTextcovhistdropdown5a(false)
        setShowTextcovhistdropdown6a(false)
        setShowTextcovhistdropdown7a(false)
        setShowTextcovhistdropdown8a(false)
        setShowTextcovhistdropdown9a(false)
        setShowTextcovhistdropdown10a(false)
        setShowTextcovhistdropdown11a(false)
        setShowTextcovhistdropdown12a(false)
        setShowTextcovhistdropdown13a(false)
    
    };
    const [showTextcovhistdropdown2, setShowTextcovhistdropdown2] = useState('');
    const onClickcovhistdropdown2 = () => {
        setShowTextcovhistdropdown2(true)
        setShowTextcovhistdropdown1(false)
        setShowTextcovhistdropdown3(false)
        setShowTextcovhistdropdown1a(false)
        setShowTextcovhistdropdown2a(false)
        setShowTextcovhistdropdown3a(false)
        setShowTextcovhistdropdown4a(false)
        setShowTextcovhistdropdown5a(false)
        setShowTextcovhistdropdown6a(false)
        setShowTextcovhistdropdown7a(false)
        setShowTextcovhistdropdown8a(false)
        setShowTextcovhistdropdown9a(false)
        setShowTextcovhistdropdown10a(false)
        setShowTextcovhistdropdown11a(false)
        setShowTextcovhistdropdown12a(false)
        setShowTextcovhistdropdown13a(false)
    };
    const [showTextcovhistdropdown3, setShowTextcovhistdropdown3] = useState('');
    const onClickcovhistdropdown3 = () => {
        setShowTextcovhistdropdown3(true)
        setShowTextcovhistdropdown1(false)
        setShowTextcovhistdropdown2(false)
        setShowTextcovhistdropdown1a(false)
        setShowTextcovhistdropdown2a(false)
        setShowTextcovhistdropdown3a(false)
        setShowTextcovhistdropdown4a(false)
        setShowTextcovhistdropdown5a(false)
        setShowTextcovhistdropdown6a(false)
        setShowTextcovhistdropdown7a(false)
        setShowTextcovhistdropdown8a(false)
        setShowTextcovhistdropdown9a(false)
        setShowTextcovhistdropdown10a(false)
        setShowTextcovhistdropdown11a(false)
        setShowTextcovhistdropdown12a(false)
        setShowTextcovhistdropdown13a(false)
    };
       
    const [showTextcovhistdropdown1a, setShowTextcovhistdropdown1a] = useState('');
    const onClickcovhistdropdown1a = () => {
        setShowTextcovhistdropdown1a(true)
        setShowTextcovhistdropdown2a(false)
        setShowTextcovhistdropdown3a(false)
        setShowTextcovhistdropdown4a(false)
        setShowTextcovhistdropdown5a(false)
        setShowTextcovhistdropdown6a(false)
        setShowTextcovhistdropdown7a(false)
        setShowTextcovhistdropdown8a(false)
        setShowTextcovhistdropdown9a(false)
        setShowTextcovhistdropdown10a(false)
        setShowTextcovhistdropdown11a(false)
        setShowTextcovhistdropdown12a(false)
        setShowTextcovhistdropdown13a(false)
        setShowTextcovhistdropdown1(false)
        setShowTextcovhistdropdown2(false)
        setShowTextcovhistdropdown3(false)
    
    };
    const [showTextcovhistdropdown2a, setShowTextcovhistdropdown2a] = useState('');
    const onClickcovhistdropdown2a = () => {
        setShowTextcovhistdropdown2a(true)
        setShowTextcovhistdropdown1a(false)
        setShowTextcovhistdropdown3a(false)
        setShowTextcovhistdropdown4a(false)
        setShowTextcovhistdropdown5a(false)
        setShowTextcovhistdropdown6a(false)
        setShowTextcovhistdropdown7a(false)
        setShowTextcovhistdropdown8a(false)
        setShowTextcovhistdropdown9a(false)
        setShowTextcovhistdropdown10a(false)
        setShowTextcovhistdropdown11a(false)
        setShowTextcovhistdropdown12a(false)
        setShowTextcovhistdropdown13a(false)
        setShowTextcovhistdropdown1(false)
        setShowTextcovhistdropdown2(false)
        setShowTextcovhistdropdown3(false)
    };
    const [showTextcovhistdropdown3a, setShowTextcovhistdropdown3a] = useState('');
    const onClickcovhistdropdown3a = () => {
        setShowTextcovhistdropdown3a(true)
        setShowTextcovhistdropdown1a(false)
        setShowTextcovhistdropdown2a(false)
        setShowTextcovhistdropdown4a(false)
        setShowTextcovhistdropdown5a(false)
        setShowTextcovhistdropdown6a(false)
        setShowTextcovhistdropdown7a(false)
        setShowTextcovhistdropdown8a(false)
        setShowTextcovhistdropdown9a(false)
        setShowTextcovhistdropdown10a(false)
        setShowTextcovhistdropdown11a(false)
        setShowTextcovhistdropdown12a(false)
        setShowTextcovhistdropdown13a(false)
        setShowTextcovhistdropdown1(false)
        setShowTextcovhistdropdown2(false)
        setShowTextcovhistdropdown3(false)
    };
    const [showTextcovhistdropdown4a, setShowTextcovhistdropdown4a] = useState('');
    const onClickcovhistdropdown4a = () => {
        setShowTextcovhistdropdown4a(true)
        setShowTextcovhistdropdown1a(false)
        setShowTextcovhistdropdown2a(false)
        setShowTextcovhistdropdown3a(false)
        setShowTextcovhistdropdown5a(false)
        setShowTextcovhistdropdown6a(false)
        setShowTextcovhistdropdown7a(false)
        setShowTextcovhistdropdown8a(false)
        setShowTextcovhistdropdown9a(false)
        setShowTextcovhistdropdown10a(false)
        setShowTextcovhistdropdown11a(false)
        setShowTextcovhistdropdown12a(false)
        setShowTextcovhistdropdown13a(false)
        setShowTextcovhistdropdown1(false)
        setShowTextcovhistdropdown2(false)
        setShowTextcovhistdropdown3(false)
    };
    const [showTextcovhistdropdown5a, setShowTextcovhistdropdown5a] = useState('');
    const onClickcovhistdropdown5a = () => {
        setShowTextcovhistdropdown5a(true)
        setShowTextcovhistdropdown1a(false)
        setShowTextcovhistdropdown2a(false)
        setShowTextcovhistdropdown3a(false)
        setShowTextcovhistdropdown4a(false)
        setShowTextcovhistdropdown6a(false)
        setShowTextcovhistdropdown7a(false)
        setShowTextcovhistdropdown8a(false)
        setShowTextcovhistdropdown9a(false)
        setShowTextcovhistdropdown10a(false)
        setShowTextcovhistdropdown11a(false)
        setShowTextcovhistdropdown12a(false)
        setShowTextcovhistdropdown13a(false)
        setShowTextcovhistdropdown1(false)
        setShowTextcovhistdropdown2(false)
        setShowTextcovhistdropdown3(false)
    };
    const [showTextcovhistdropdown6a, setShowTextcovhistdropdown6a] = useState('');
    const onClickcovhistdropdown6a = () => {
        setShowTextcovhistdropdown6a(true)
        setShowTextcovhistdropdown1a(false)
        setShowTextcovhistdropdown2a(false)
        setShowTextcovhistdropdown3a(false)
        setShowTextcovhistdropdown4a(false)
        setShowTextcovhistdropdown5a(false)
        setShowTextcovhistdropdown7a(false)
        setShowTextcovhistdropdown8a(false)
        setShowTextcovhistdropdown9a(false)
        setShowTextcovhistdropdown10a(false)
        setShowTextcovhistdropdown11a(false)
        setShowTextcovhistdropdown12a(false)
        setShowTextcovhistdropdown13a(false)
        setShowTextcovhistdropdown1(false)
        setShowTextcovhistdropdown2(false)
        setShowTextcovhistdropdown3(false)
    };
    const [showTextcovhistdropdown7a, setShowTextcovhistdropdown7a] = useState('');
    const onClickcovhistdropdown7a = () => {
        setShowTextcovhistdropdown7a(true)
        setShowTextcovhistdropdown1a(false)
        setShowTextcovhistdropdown2a(false)
        setShowTextcovhistdropdown3a(false)
        setShowTextcovhistdropdown4a(false)
        setShowTextcovhistdropdown5a(false)
        setShowTextcovhistdropdown6a(false)
        setShowTextcovhistdropdown8a(false)
        setShowTextcovhistdropdown9a(false)
        setShowTextcovhistdropdown10a(false)
        setShowTextcovhistdropdown11a(false)
        setShowTextcovhistdropdown12a(false)
        setShowTextcovhistdropdown13a(false)
        setShowTextcovhistdropdown1(false)
        setShowTextcovhistdropdown2(false)
        setShowTextcovhistdropdown3(false)
    };
    const [showTextcovhistdropdown8a, setShowTextcovhistdropdown8a] = useState('');
    const onClickcovhistdropdown8a = () => {
        setShowTextcovhistdropdown8a(true)
        setShowTextcovhistdropdown1a(false)
        setShowTextcovhistdropdown2a(false)
        setShowTextcovhistdropdown3a(false)
        setShowTextcovhistdropdown4a(false)
        setShowTextcovhistdropdown5a(false)
        setShowTextcovhistdropdown6a(false)
        setShowTextcovhistdropdown7a(false)
        setShowTextcovhistdropdown9a(false)
        setShowTextcovhistdropdown10a(false)
        setShowTextcovhistdropdown11a(false)
        setShowTextcovhistdropdown12a(false)
        setShowTextcovhistdropdown13a(false)
        setShowTextcovhistdropdown1(false)
        setShowTextcovhistdropdown2(false)
        setShowTextcovhistdropdown3(false)
    };
    const [showTextcovhistdropdown9a, setShowTextcovhistdropdown9a] = useState('');
    const onClickcovhistdropdown9a = () => {
        setShowTextcovhistdropdown9a(true)
        setShowTextcovhistdropdown1a(false)
        setShowTextcovhistdropdown2a(false)
        setShowTextcovhistdropdown3a(false)
        setShowTextcovhistdropdown4a(false)
        setShowTextcovhistdropdown5a(false)
        setShowTextcovhistdropdown6a(false)
        setShowTextcovhistdropdown7a(false)
        setShowTextcovhistdropdown8a(false)
        setShowTextcovhistdropdown10a(false)
        setShowTextcovhistdropdown11a(false)
        setShowTextcovhistdropdown12a(false)
        setShowTextcovhistdropdown13a(false)
        setShowTextcovhistdropdown1(false)
        setShowTextcovhistdropdown2(false)
        setShowTextcovhistdropdown3(false)
    };
    const [showTextcovhistdropdown10a, setShowTextcovhistdropdown10a] = useState('');
    const onClickcovhistdropdown10a = () => {
        setShowTextcovhistdropdown10a(true)
        setShowTextcovhistdropdown1a(false)
        setShowTextcovhistdropdown2a(false)
        setShowTextcovhistdropdown3a(false)
        setShowTextcovhistdropdown4a(false)
        setShowTextcovhistdropdown5a(false)
        setShowTextcovhistdropdown6a(false)
        setShowTextcovhistdropdown7a(false)
        setShowTextcovhistdropdown8a(false)
        setShowTextcovhistdropdown9a(false)
        setShowTextcovhistdropdown11a(false)
        setShowTextcovhistdropdown12a(false)
        setShowTextcovhistdropdown13a(false)
        setShowTextcovhistdropdown1(false)
        setShowTextcovhistdropdown2(false)
        setShowTextcovhistdropdown3(false)
    };
    const [showTextcovhistdropdown11a, setShowTextcovhistdropdown11a] = useState('');
    const onClickcovhistdropdown11a = () => {
        setShowTextcovhistdropdown11a(true)
        setShowTextcovhistdropdown1a(false)
        setShowTextcovhistdropdown2a(false)
        setShowTextcovhistdropdown3a(false)
        setShowTextcovhistdropdown4a(false)
        setShowTextcovhistdropdown5a(false)
        setShowTextcovhistdropdown6a(false)
        setShowTextcovhistdropdown7a(false)
        setShowTextcovhistdropdown8a(false)
        setShowTextcovhistdropdown9a(false)
        setShowTextcovhistdropdown10a(false)
        setShowTextcovhistdropdown12a(false)
        setShowTextcovhistdropdown13a(false)
        setShowTextcovhistdropdown1(false)
        setShowTextcovhistdropdown2(false)
        setShowTextcovhistdropdown3(false)
    };
    const [showTextcovhistdropdown12a, setShowTextcovhistdropdown12a] = useState('');
    const onClickcovhistdropdown12a = () => {
        setShowTextcovhistdropdown12a(true)
        setShowTextcovhistdropdown1a(false)
        setShowTextcovhistdropdown2a(false)
        setShowTextcovhistdropdown3a(false)
        setShowTextcovhistdropdown4a(false)
        setShowTextcovhistdropdown5a(false)
        setShowTextcovhistdropdown6a(false)
        setShowTextcovhistdropdown7a(false)
        setShowTextcovhistdropdown8a(false)
        setShowTextcovhistdropdown9a(false)
        setShowTextcovhistdropdown10a(false)
        setShowTextcovhistdropdown11a(false)
        setShowTextcovhistdropdown13a(false)
        setShowTextcovhistdropdown1(false)
        setShowTextcovhistdropdown2(false)
        setShowTextcovhistdropdown3(false)
    };
    const [showTextcovhistdropdown13a, setShowTextcovhistdropdown13a] = useState('');
    const onClickcovhistdropdown13a = () => {
        setShowTextcovhistdropdown13a(true)
        setShowTextcovhistdropdown1a(false)
        setShowTextcovhistdropdown2a(false)
        setShowTextcovhistdropdown3a(false)
        setShowTextcovhistdropdown4a(false)
        setShowTextcovhistdropdown5a(false)
        setShowTextcovhistdropdown6a(false)
        setShowTextcovhistdropdown7a(false)
        setShowTextcovhistdropdown8a(false)
        setShowTextcovhistdropdown9a(false)
        setShowTextcovhistdropdown10a(false)
        setShowTextcovhistdropdown11a(false)
        setShowTextcovhistdropdown12a(false)
        setShowTextcovhistdropdown1(false)
        setShowTextcovhistdropdown2(false)
        setShowTextcovhistdropdown3(false)
    };

    const [showTextrespdash, setShowTextrespdash] = useState('');
    const onClickrespdash = () => setShowTextrespdash(!showTextrespdash);

    // const [showTextrespdash, setShowTextrespdash] = useState('true');
    // const onClick = () => setShowTextrespdash(!showTextrespdash);

    return(
         <>
        <div class="covhist-main">
            <div class="covhist-main1" className={showTextrespdash ? 'covhist-main1' : 'covhist-main1-onclick'}>
                <div class="covhist-main1-container">
                    <div  onClick={onClickcovhist1} class="covhist-main1-item1" className={!showTextcovhist1 ? 'covhist-main1-item1' : 'covhist-main1-item1-onclick'}>
                        <span>Spot Order</span>
                        {showTextcovhist1 ? <img src={downarrow}></img> : <img src={uparrow}></img> }
                        
                    </div>
                        <div class="covhist-main1-spotorder" className={showTextcovhist1 ? 'covhist-main1-spotorder' : 'covhist-main1-spotorder-onclick'}>
                            <div onClick={onClickcovhistdropdown1} class="covhist-main1-item1" className={!showTextcovhistdropdown1 ? 'covhist-main1-item1' : 'covhist-main1-item1-onclick'}>
                                <span class="covhist-main1-drop-txt">Open Orders</span>
                            </div>
                            <div onClick={onClickcovhistdropdown2} class="covhist-main1-item1" className={!showTextcovhistdropdown2 ? 'covhist-main1-item1' : 'covhist-main1-item1-onclick'}>
                                <span class="covhist-main1-drop-txt">Order History</span>
                            </div>
                            <div onClick={onClickcovhistdropdown3} class="covhist-main1-item1" className={!showTextcovhistdropdown3 ? 'covhist-main1-item1' : 'covhist-main1-item1-onclick'}>
                                <span class="covhist-main1-drop-txt">Trade History</span>
                            </div>
                        </div>
                    <div onClick={onClickcovhist2} class="covhist-main1-item1" className={!showTextcovhist2 ? 'covhist-main1-item1' : 'covhist-main1-item1-onclick'}>
                        <span>P2P order</span>
                        <img src={tothepagearrow}></img>
                    </div>
                    <div onClick={onClickcovhist3} class="covhist-main1-item1" className={!showTextcovhist3 ? 'covhist-main1-item1' : 'covhist-main1-item1-onclick'}>
                        <span>Margin Order</span>
                        {showTextcovhist3 ? <img src={downarrow}></img> : <img src={uparrow}></img> }
                    </div>
                        <div className={showTextcovhist3 ? 'covhist-main1-spotorder' : 'covhist-main1-spotorder-onclick'}>
                            <div onClick={onClickcovhistdropdown1a} class="covhist-main1-item1" className={!showTextcovhistdropdown1a ? 'covhist-main1-item1' : 'covhist-main1-item1-onclick'}>
                                <span class="covhist-main1-drop-txt">Open Orders</span>
                            </div>
                            <div onClick={onClickcovhistdropdown2a} class="covhist-main1-item1" className={!showTextcovhistdropdown2a ? 'covhist-main1-item1' : 'covhist-main1-item1-onclick'}>
                                <span class="covhist-main1-drop-txt">Order History</span>
                            </div>
                            <div onClick={onClickcovhistdropdown3a} class="covhist-main1-item1" className={!showTextcovhistdropdown3a ? 'covhist-main1-item1' : 'covhist-main1-item1-onclick'}>
                                <span class="covhist-main1-drop-txt">Trade History</span>
                            </div>
                            <div onClick={onClickcovhistdropdown4a} class="covhist-main1-item1" className={!showTextcovhistdropdown4a ? 'covhist-main1-item1' : 'covhist-main1-item1-onclick'}>
                                <span class="covhist-main1-drop-txt">Capital Flow</span>
                            </div>
                            <div onClick={onClickcovhistdropdown5a} class="covhist-main1-item1" className={!showTextcovhistdropdown5a ? 'covhist-main1-item1' : 'covhist-main1-item1-onclick'}>
                                <span class="covhist-main1-drop-txt">Fees Ruturn History</span>
                            </div>
                            <div onClick={onClickcovhistdropdown6a} class="covhist-main1-item1" className={!showTextcovhistdropdown6a ? 'covhist-main1-item1' : 'covhist-main1-item1-onclick'}>
                                <span class="covhist-main1-drop-txt">Fees Ruturn History</span>
                            </div>
                            <div onClick={onClickcovhistdropdown7a} class="covhist-main1-item1" className={!showTextcovhistdropdown7a ? 'covhist-main1-item1' : 'covhist-main1-item1-onclick'}>
                                <span class="covhist-main1-drop-txt">Borrowing</span>
                            </div>
                            <div onClick={onClickcovhistdropdown8a} class="covhist-main1-item1" className={!showTextcovhistdropdown8a ? 'covhist-main1-item1' : 'covhist-main1-item1-onclick'}>
                                <span class="covhist-main1-drop-txt">Repayment</span>
                            </div>
                            <div onClick={onClickcovhistdropdown9a} class="covhist-main1-item1" className={!showTextcovhistdropdown9a ? 'covhist-main1-item1' : 'covhist-main1-item1-onclick'}>
                                <span class="covhist-main1-drop-txt">Tranfers</span>
                            </div>
                            <div onClick={onClickcovhistdropdown10a} class="covhist-main1-item1" className={!showTextcovhistdropdown10a ? 'covhist-main1-item1' : 'covhist-main1-item1-onclick'}>
                                <span class="covhist-main1-drop-txt">Interest</span>
                            </div>
                            <div onClick={onClickcovhistdropdown11a} class="covhist-main1-item1" className={!showTextcovhistdropdown11a ? 'covhist-main1-item1' : 'covhist-main1-item1-onclick'}>
                                <span class="covhist-main1-drop-txt">Margin Calls</span>
                            </div>
                            <div onClick={onClickcovhistdropdown12a} class="covhist-main1-item1" className={!showTextcovhistdropdown12a ? 'covhist-main1-item1' : 'covhist-main1-item1-onclick'}>
                                <span class="covhist-main1-drop-txt">Liquidation Orders</span>
                            </div>
                            <div onClick={onClickcovhistdropdown13a} class="covhist-main1-item1" className={!showTextcovhistdropdown13a ? 'covhist-main1-item1' : 'covhist-main1-item1-onclick'}>
                                <span class="covhist-main1-drop-txt">Liquidation History</span>
                            </div>
                        </div>

                    <div onClick={onClickcovhist4} class="covhist-main1-item1" className={!showTextcovhist4 ? 'covhist-main1-item1' : 'covhist-main1-item1-onclick'}>
                        <span>Earn History</span>
                        {showTextcovhist4 ? <img src={downarrow}></img> : <img src={uparrow}></img> }
                    </div>
                    <div onClick={onClickcovhist5} class="covhist-main1-item1" className={!showTextcovhist5 ? 'covhist-main1-item1' : 'covhist-main1-item1-onclick'}>
                        <span>Buy Crypto History</span>
                        
                    </div>
                    <div onClick={onClickcovhist6} class="covhist-main1-item1" className={!showTextcovhist6 ? 'covhist-main1-item1' : 'covhist-main1-item1-onclick'}>
                        <span>Buy Crypto History</span>
                        {showTextcovhist6 ? <img src={downarrow}></img> : <img src={uparrow}></img> }
                    </div>
                    <div onClick={onClickcovhist7 } class="covhist-main1-item1" className={!showTextcovhist7 ? 'covhist-main1-item1' : 'covhist-main1-item1-onclick'}>
                        <span>Covert History</span>
                        {showTextcovhist7 ? <img src={downarrow}></img> : <img src={uparrow}></img> }
                    </div>
                    <div onClick={onClickcovhist8} class="covhist-main1-item1" className={!showTextcovhist8 ? 'covhist-main1-item1' : 'covhist-main1-item1-onclick'}>
                        <span>Open Orders</span>
                        {showTextcovhist8 ? <img src={downarrow}></img> : <img src={uparrow}></img> }
                    </div>
                </div>
            </div>
            <div class="covhist-main2" className={!showTextrespdash ? 'covhist-main2' : 'covhist-main2-onclick'}>
            
            <div onClick={onClickrespdash} class="covhist-main1-resp-div" className={!showTextrespdash ? 'covhist-main1-resp-div' : 'covhist-main1-resp-div-onclick'}>
                <span>Dashboard</span>
                {showTextrespdash ? <img src={downarrow}></img> : <img src={forwardarrowwhite}></img> }
            </div>
                <div class="covhist-main2-container" className={showTextcovhist7 ? 'covhist-main2-container-onclick' : 'covhist-main2-container'}>
                <div class="covhist-main2-head">
                            <div class="covhist-main2-head-div1">
                                <span class="covhist-main2-head-div1-txt">Convert History</span>
                            </div>
                            <div class="covhist-main2-head-div2">
                                <button class="covhist-main2-head-div2-btn1"><img src={installicon}></img>Export</button>
                            </div>
                            
                        </div>
                        <div class="covhist-main2-div1">
                            
                            <div class="covhist-main2-div1a">
                                <div class="covhist-main2-div1a-item1a">
                                    <input type="text" placeholder='Time'></input>
                                    {/* <span class="covertcryp2-content-box1-div6a-txt">MAX</span> */}
                                    <div class="covhist-main2-div1a-item1b">
                                        <select id="covhist-main2-div1a-item1b-select">
                                            <option class="covhist-main2-div1a-item1b-option">Past 30 Days</option>
                                            <option class="covhist-main2-div1a-item1b-option">Past 30 Days</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="covhist-main2-div1a">
                                <div class="covhist-main2-div1a-item1a">
                                    <input type="text" placeholder='Wallet'></input>
                                    {/* <span class="covertcryp2-content-box1-div6a-txt">MAX</span> */}
                                    <div class="covhist-main2-div1a-item1b">
                                        <select id="covhist-main2-div1a-item1b-select">
                                            <option class="covhist-main2-div1a-item1b-option">All</option>
                                            <option class="covhist-main2-div1a-item1b-option">All</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="covhist-main2-div1a">
                                <div class="covhist-main2-div1a-item1a">
                                    <select id="covhist-main2-div1a-item3b-select">
                                        <option class="covhist-main2-div1a-item3b-option">Coin</option>
                                        <option class="covhist-main2-div1a-item3b-option">Coin</option>
                                    </select>
                                </div>
                            </div>
                           
                            <div class="covhist-main2-div1d">
                                <button class="covhist-main2-div1d-btn1">Search</button>
                                <button class="covhist-main2-div1d-btn2">Reset</button>
                            </div>
                            
                        </div>

                        <div class="covhist-main2-div2">
                            <span class="covhist-main2-div2-txt">Date</span>
                            <span class="covhist-main2-div2-txt">Wallet</span>
                            <span class="covhist-main2-div2-txt">Pair</span>
                            <span class="covhist-main2-div2-txt">Type</span>
                            <span class="covhist-main2-div2-txt">From</span>
                            <span class="covhist-main2-div2-txt">To</span>
                            <span class="covhist-main2-div2-txt">Price</span>
                            <span class="covhist-main2-div2-txt">Date Updated</span>
                            <span class="covhist-main2-div2-txt">Status</span>
                        </div>
                </div>
{/* SPOT ORDER///////////// */}
                {/* open orders container////////// */}
                <div class="covhist-main2-container" className={showTextcovhistdropdown1 ? 'covhist-main2-container-onclick' : 'covhist-main2-container'}>
                <div class="covhist-main2-head">
                            <div class="covhist-main2-head-div1">
                                <span class="covhist-main2-head-div1-txt">Open Orders</span>
                            </div>
                            <div class="covhist-main2-head-div2">
                                <button class="covhist-main2-head-div2-btn1"><img src={installicon}></img>Export</button>
                            </div>
                            
                        </div>
                        <div class="covhist-main2-div1">
                            <div class="covhist-main2-div1a">
                                <div class="covhist-main2-div1a-item1a">
                                    <input type="text" placeholder='Fiter'></input>
                                    {/* <span class="covertcryp2-content-box1-div6a-txt">MAX</span> */}
                                    <div class="covhist-main2-div1a-item1b">
                                    <select id="covhist-main2-div1a-item1b-select">
                                            <option class="covhist-main2-div1a-item1b-option">All</option>
                                            <option class="covhist-main2-div1a-item1b-option">All</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="covhist-main2-div1a">
                                <div class="covhist-main2-div1a-item1a">
                                    <input type="text" placeholder='Pair'></input>
                                    {/* <span class="covertcryp2-content-box1-div6a-txt">MAX</span> */}
                                    <div class="covhist-main2-div1a-item1b">
                                        <select id="covhist-main2-div1a-item1b-select">
                                            <option class="covhist-main2-div1a-item1b-option">All</option>
                                            <option class="covhist-main2-div1a-item1b-option">All</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* <div class="covhist-main2-div1a">
                                <div class="covhist-main2-div1a-item1a">
                                    <select id="covhist-main2-div1a-item3b-select">
                                        <option class="covhist-main2-div1a-item3b-option">Coin</option>
                                        <option class="covhist-main2-div1a-item3b-option">Coin</option>
                                    </select>
                                </div>
                            </div> */}
                            <div class="covhist-main2-div1d">
                                <button class="covhist-main2-div1d-btn1">Search</button>
                                <button class="covhist-main2-div1d-btn2">Reset</button>
                            </div>
                            
                        </div>

                        <div class="covhist-main2-div2">
                            <div class="covhist-main2-div2-txt">Date</div>
                            <div class="covhist-main2-div2-txt">Pair</div>
                            <div class="covhist-main2-div2-txt">Type</div>
                            <div class="covhist-main2-div2-txt">Side</div>
                            <div class="covhist-main2-div2-txt">Price</div>
                            <div class="covhist-main2-div2-txt">Ammount</div>
                            <div class="covhist-main2-div2-txt">Filled</div>
                            <div class="covhist-main2-div2-txt">Total</div>
                            <div class="covhist-main2-div2-txt">Trigger Conditions</div>
                            <div class="covhist-main2-div2-txt">Action</div>
                        </div>
                </div>
                {/* end////// */}

                {/* open history container////////// */}
                <div class="covhist-main2-container" className={showTextcovhistdropdown2 ? 'covhist-main2-container-onclick' : 'covhist-main2-container'}>
                <div class="covhist-main2-head">
                            <div class="covhist-main2-head-div1">
                                <span class="covhist-main2-head-div1-txt">Open History</span>
                            </div>
                            <div class="covhist-main2-head-div2">
                                <button class="covhist-main2-head-div2-btn1"><img src={installicon}></img>Export</button>
                            </div>
                            
                        </div>
                        <div class="covhist-main2-div1">
                            <div class="covhist-main2-div1a">
                                <div class="covhist-main2-div1a-item1a">
                                    <input type="text" placeholder='Date'></input>
                                    {/* <span class="covertcryp2-content-box1-div6a-txt">MAX</span> */}
                                    <div class="covhist-main2-div1a-item1b">
                                    <select id="covhist-main2-div1a-item1b-select">
                                            <option class="covhist-main2-div1a-item1b-option">All</option>
                                            <option class="covhist-main2-div1a-item1b-option">All</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="covhist-main2-div1a">
                                <div class="covhist-main2-div1a-item1a">
                                    <input type="text" placeholder='Wallet'></input>
                                    {/* <span class="covertcryp2-content-box1-div6a-txt">MAX</span> */}
                                    <div class="covhist-main2-div1a-item1b">
                                        <select id="covhist-main2-div1a-item1b-select">
                                            <option class="covhist-main2-div1a-item1b-option">All</option>
                                            <option class="covhist-main2-div1a-item1b-option">All</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="covhist-main2-div1a">
                                <div class="covhist-main2-div1a-item1a">
                                    <input type="text" placeholder='Quote'></input>
                                    {/* <span class="covertcryp2-content-box1-div6a-txt">MAX</span> */}
                                    <div class="covhist-main2-div1a-item1b">
                                        <select id="covhist-main2-div1a-item1b-select">
                                            <option class="covhist-main2-div1a-item1b-option">All</option>
                                            <option class="covhist-main2-div1a-item1b-option">All</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="covhist-main2-div1a">
                                <div class="covhist-main2-div1a-item1a">
                                    <input type="text" placeholder='Quote'></input>
                                    {/* <span class="covertcryp2-content-box1-div6a-txt">MAX</span> */}
                                    <div class="covhist-main2-div1a-item1b">
                                        <select id="covhist-main2-div1a-item1b-select">
                                            <option class="covhist-main2-div1a-item1b-option">All</option>
                                            <option class="covhist-main2-div1a-item1b-option">All</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* <div class="covhist-main2-div1a">
                                <div class="covhist-main2-div1a-item1a">
                                    <select id="covhist-main2-div1a-item3b-select">
                                        <option class="covhist-main2-div1a-item3b-option">Coin</option>
                                        <option class="covhist-main2-div1a-item3b-option">Coin</option>
                                    </select>
                                </div>
                            </div> */}
                            <div class="covhist-main2-div1d">
                                <button class="covhist-main2-div1d-btn1">Search</button>
                                <button class="covhist-main2-div1d-btn2">Reset</button>
                            </div>
                            
                        </div>
                        <div class="covhist-main2-div3">
                            <img src={uncheckrect}></img>
                            <span class="covhist-main2-div2-txt">Hide all canceled</span>
                        </div>

                        <div class="covhist-main2-div2">
                            <div class="covhist-main2-div2-txt">Date</div>
                            <div class="covhist-main2-div2-txt">Pair</div>
                            <div class="covhist-main2-div2-txt">Type</div>
                            <div class="covhist-main2-div2-txt">Side</div>
                            <div class="covhist-main2-div2-txt">Price</div>
                            <div class="covhist-main2-div2-txt">Ammount</div>
                            <div class="covhist-main2-div2-txt">Filled</div>
                            <div class="covhist-main2-div2-txt">Total</div>
                            <div class="covhist-main2-div2-txt">Trigger Conditions</div>
                            <div class="covhist-main2-div2-txt">Action</div>
                        </div>
                </div>
                {/* end////// */}
                {/* trade history container////////// */}
                <div class="covhist-main2-container" className={showTextcovhistdropdown3 ? 'covhist-main2-container-onclick' : 'covhist-main2-container'}>
                <div class="covhist-main2-head">
                            <div class="covhist-main2-head-div1">
                                <span class="covhist-main2-head-div1-txt">Trade History</span>
                            </div>
                            <div class="covhist-main2-head-div2">
                                <button class="covhist-main2-head-div2-btn1"><img src={installicon}></img>Export</button>
                            </div>
                            
                        </div>
                        <div class="covhist-main2-div1">
                            <div class="covhist-main2-div1a">
                                <div class="covhist-main2-div1a-item1a">
                                    <input type="text" placeholder='Date'></input>
                                    {/* <span class="covertcryp2-content-box1-div6a-txt">MAX</span> */}
                                    <div class="covhist-main2-div1a-item1b">
                                    <select id="covhist-main2-div1a-item1b-select">
                                            <option class="covhist-main2-div1a-item1b-option">All</option>
                                            <option class="covhist-main2-div1a-item1b-option">All</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="covhist-main2-div1a">
                                <div class="covhist-main2-div1a-item1a">
                                    <input type="text" placeholder='Wallet'></input>
                                    {/* <span class="covertcryp2-content-box1-div6a-txt">MAX</span> */}
                                    <div class="covhist-main2-div1a-item1b">
                                        <select id="covhist-main2-div1a-item1b-select">
                                            <option class="covhist-main2-div1a-item1b-option">All</option>
                                            <option class="covhist-main2-div1a-item1b-option">All</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="covhist-main2-div1a">
                                <div class="covhist-main2-div1a-item1a">
                                    <input type="text" placeholder='Quote'></input>
                                    {/* <span class="covertcryp2-content-box1-div6a-txt">MAX</span> */}
                                    <div class="covhist-main2-div1a-item1b">
                                        <select id="covhist-main2-div1a-item1b-select">
                                            <option class="covhist-main2-div1a-item1b-option">All</option>
                                            <option class="covhist-main2-div1a-item1b-option">All</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="covhist-main2-div1a">
                                <div class="covhist-main2-div1a-item1a">
                                    <input type="text" placeholder='Quote'></input>
                                    {/* <span class="covertcryp2-content-box1-div6a-txt">MAX</span> */}
                                    <div class="covhist-main2-div1a-item1b">
                                        <select id="covhist-main2-div1a-item1b-select">
                                            <option class="covhist-main2-div1a-item1b-option">All</option>
                                            <option class="covhist-main2-div1a-item1b-option">All</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* <div class="covhist-main2-div1a">
                                <div class="covhist-main2-div1a-item1a">
                                    <select id="covhist-main2-div1a-item3b-select">
                                        <option class="covhist-main2-div1a-item3b-option">Coin</option>
                                        <option class="covhist-main2-div1a-item3b-option">Coin</option>
                                    </select>
                                </div>
                            </div> */}
                            <div class="covhist-main2-div1d">
                                <button class="covhist-main2-div1d-btn1">Search</button>
                                <button class="covhist-main2-div1d-btn2">Reset</button>
                            </div>
                            
                        </div>
                        <div class="covhist-main2-div3">
                            <img src={uncheckrect}></img>
                            <span class="covhist-main2-div2-txt">Hide all canceled</span>
                        </div>

                        <div class="covhist-main2-div2">
                            <div class="covhist-main2-div2-txt">Date</div>
                            <div class="covhist-main2-div2-txt">Pair</div>
                            <div class="covhist-main2-div2-txt">Type</div>
                            <div class="covhist-main2-div2-txt">Side</div>
                            <div class="covhist-main2-div2-txt">Price</div>
                            <div class="covhist-main2-div2-txt">Ammount</div>
                            <div class="covhist-main2-div2-txt">Filled</div>
                            <div class="covhist-main2-div2-txt">Total</div>
                            <div class="covhist-main2-div2-txt">Trigger Conditions</div>
                            <div class="covhist-main2-div2-txt">Action</div>
                        </div>
                </div>
                {/* end////// */}


{/* MARIN ORDERS/////////// */}
 {/* open orders container////////// */}
 <div class="covhist-main2-container" className={showTextcovhistdropdown1a ? 'covhist-main2-container-onclick' : 'covhist-main2-container'}>
                <div class="covhist-main2-head">
                            <div class="covhist-main2-head-div1">
                                <span class="covhist-main2-head-div1-txt">Open Orders</span>
                            </div>
                            <div class="covhist-main2-head-div2">
                                <button class="covhist-main2-head-div2-btn1"><img src={installicon}></img>Export</button>
                            </div>
                            
                        </div>
                        <div class="covhist-main2-div1">
                            <div class="covhist-main2-div1a">
                                <div class="covhist-main2-div1a-item1a">
                                    <input type="text" placeholder='Fiter'></input>
                                    {/* <span class="covertcryp2-content-box1-div6a-txt">MAX</span> */}
                                    <div class="covhist-main2-div1a-item1b">
                                    <select id="covhist-main2-div1a-item1b-select">
                                            <option class="covhist-main2-div1a-item1b-option">All</option>
                                            <option class="covhist-main2-div1a-item1b-option">All</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="covhist-main2-div1a">
                                <div class="covhist-main2-div1a-item1a">
                                    <input type="text" placeholder='Pair'></input>
                                    {/* <span class="covertcryp2-content-box1-div6a-txt">MAX</span> */}
                                    <div class="covhist-main2-div1a-item1b">
                                        <select id="covhist-main2-div1a-item1b-select">
                                            <option class="covhist-main2-div1a-item1b-option">All</option>
                                            <option class="covhist-main2-div1a-item1b-option">All</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* <div class="covhist-main2-div1a">
                                <div class="covhist-main2-div1a-item1a">
                                    <select id="covhist-main2-div1a-item3b-select">
                                        <option class="covhist-main2-div1a-item3b-option">Coin</option>
                                        <option class="covhist-main2-div1a-item3b-option">Coin</option>
                                    </select>
                                </div>
                            </div> */}
                            <div class="covhist-main2-div1d">
                                <button class="covhist-main2-div1d-btn1">Search</button>
                                <button class="covhist-main2-div1d-btn2">Reset</button>
                            </div>
                            
                        </div>

                        <div class="covhist-main2-div2">
                            <div class="covhist-main2-div2-txt">Date</div>
                            <div class="covhist-main2-div2-txt">Pair</div>
                            <div class="covhist-main2-div2-txt">Type</div>
                            <div class="covhist-main2-div2-txt">Side</div>
                            <div class="covhist-main2-div2-txt">Price</div>
                            <div class="covhist-main2-div2-txt">Ammount</div>
                            <div class="covhist-main2-div2-txt">Filled</div>
                            <div class="covhist-main2-div2-txt">Total</div>
                            <div class="covhist-main2-div2-txt">Trigger Conditions</div>
                            <div class="covhist-main2-div2-txt">Action</div>
                        </div>
                </div>
                {/* end////// */}
                {/* open history container////////// */}
                <div class="covhist-main2-container" className={showTextcovhistdropdown2a ? 'covhist-main2-container-onclick' : 'covhist-main2-container'}>
                <div class="covhist-main2-head">
                            <div class="covhist-main2-head-div1">
                                <span class="covhist-main2-head-div1-txt">Open History</span>
                            </div>
                            <div class="covhist-main2-head-div2">
                                <button class="covhist-main2-head-div2-btn1"><img src={installicon}></img>Export</button>
                            </div>
                            
                        </div>
                        <div class="covhist-main2-div1">
                            <div class="covhist-main2-div1a">
                                <div class="covhist-main2-div1a-item1a">
                                    <input type="text" placeholder='Date'></input>
                                    {/* <span class="covertcryp2-content-box1-div6a-txt">MAX</span> */}
                                    <div class="covhist-main2-div1a-item1b">
                                    <select id="covhist-main2-div1a-item1b-select">
                                            <option class="covhist-main2-div1a-item1b-option">All</option>
                                            <option class="covhist-main2-div1a-item1b-option">All</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="covhist-main2-div1a">
                                <div class="covhist-main2-div1a-item1a">
                                    <input type="text" placeholder='Wallet'></input>
                                    {/* <span class="covertcryp2-content-box1-div6a-txt">MAX</span> */}
                                    <div class="covhist-main2-div1a-item1b">
                                        <select id="covhist-main2-div1a-item1b-select">
                                            <option class="covhist-main2-div1a-item1b-option">All</option>
                                            <option class="covhist-main2-div1a-item1b-option">All</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="covhist-main2-div1a">
                                <div class="covhist-main2-div1a-item1a">
                                    <input type="text" placeholder='Quote'></input>
                                    {/* <span class="covertcryp2-content-box1-div6a-txt">MAX</span> */}
                                    <div class="covhist-main2-div1a-item1b">
                                        <select id="covhist-main2-div1a-item1b-select">
                                            <option class="covhist-main2-div1a-item1b-option">All</option>
                                            <option class="covhist-main2-div1a-item1b-option">All</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="covhist-main2-div1a">
                                <div class="covhist-main2-div1a-item1a">
                                    <input type="text" placeholder='Quote'></input>
                                    {/* <span class="covertcryp2-content-box1-div6a-txt">MAX</span> */}
                                    <div class="covhist-main2-div1a-item1b">
                                        <select id="covhist-main2-div1a-item1b-select">
                                            <option class="covhist-main2-div1a-item1b-option">All</option>
                                            <option class="covhist-main2-div1a-item1b-option">All</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* <div class="covhist-main2-div1a">
                                <div class="covhist-main2-div1a-item1a">
                                    <select id="covhist-main2-div1a-item3b-select">
                                        <option class="covhist-main2-div1a-item3b-option">Coin</option>
                                        <option class="covhist-main2-div1a-item3b-option">Coin</option>
                                    </select>
                                </div>
                            </div> */}
                            <div class="covhist-main2-div1d">
                                <button class="covhist-main2-div1d-btn1">Search</button>
                                <button class="covhist-main2-div1d-btn2">Reset</button>
                            </div>
                            
                        </div>
                        <div class="covhist-main2-div3">
                            <img src={uncheckrect}></img>
                            <span class="covhist-main2-div2-txt">Hide all canceled</span>
                        </div>

                        <div class="covhist-main2-div2">
                            <div class="covhist-main2-div2-txt">Date</div>
                            <div class="covhist-main2-div2-txt">Pair</div>
                            <div class="covhist-main2-div2-txt">Type</div>
                            <div class="covhist-main2-div2-txt">Side</div>
                            <div class="covhist-main2-div2-txt">Price</div>
                            <div class="covhist-main2-div2-txt">Ammount</div>
                            <div class="covhist-main2-div2-txt">Filled</div>
                            <div class="covhist-main2-div2-txt">Total</div>
                            <div class="covhist-main2-div2-txt">Trigger Conditions</div>
                            <div class="covhist-main2-div2-txt">Action</div>
                        </div>
                </div>
                {/* end////// */}
                {/* trade history container////////// */}
                <div class="covhist-main2-container" className={showTextcovhistdropdown3a ? 'covhist-main2-container-onclick' : 'covhist-main2-container'}>
                <div class="covhist-main2-head">
                            <div class="covhist-main2-head-div1">
                                <span class="covhist-main2-head-div1-txt">Trade History</span>
                            </div>
                            <div class="covhist-main2-head-div2">
                                <button class="covhist-main2-head-div2-btn1"><img src={installicon}></img>Export</button>
                            </div>
                            
                        </div>
                        <div class="covhist-main2-div1">
                            <div class="covhist-main2-div1a">
                                <div class="covhist-main2-div1a-item1a">
                                    <input type="text" placeholder='Date'></input>
                                    {/* <span class="covertcryp2-content-box1-div6a-txt">MAX</span> */}
                                    <div class="covhist-main2-div1a-item1b">
                                    <select id="covhist-main2-div1a-item1b-select">
                                            <option class="covhist-main2-div1a-item1b-option">All</option>
                                            <option class="covhist-main2-div1a-item1b-option">All</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="covhist-main2-div1a">
                                <div class="covhist-main2-div1a-item1a">
                                    <input type="text" placeholder='Wallet'></input>
                                    {/* <span class="covertcryp2-content-box1-div6a-txt">MAX</span> */}
                                    <div class="covhist-main2-div1a-item1b">
                                        <select id="covhist-main2-div1a-item1b-select">
                                            <option class="covhist-main2-div1a-item1b-option">All</option>
                                            <option class="covhist-main2-div1a-item1b-option">All</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="covhist-main2-div1a">
                                <div class="covhist-main2-div1a-item1a">
                                    <input type="text" placeholder='Quote'></input>
                                    {/* <span class="covertcryp2-content-box1-div6a-txt">MAX</span> */}
                                    <div class="covhist-main2-div1a-item1b">
                                        <select id="covhist-main2-div1a-item1b-select">
                                            <option class="covhist-main2-div1a-item1b-option">All</option>
                                            <option class="covhist-main2-div1a-item1b-option">All</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="covhist-main2-div1a">
                                <div class="covhist-main2-div1a-item1a">
                                    <input type="text" placeholder='Quote'></input>
                                    {/* <span class="covertcryp2-content-box1-div6a-txt">MAX</span> */}
                                    <div class="covhist-main2-div1a-item1b">
                                        <select id="covhist-main2-div1a-item1b-select">
                                            <option class="covhist-main2-div1a-item1b-option">All</option>
                                            <option class="covhist-main2-div1a-item1b-option">All</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* <div class="covhist-main2-div1a">
                                <div class="covhist-main2-div1a-item1a">
                                    <select id="covhist-main2-div1a-item3b-select">
                                        <option class="covhist-main2-div1a-item3b-option">Coin</option>
                                        <option class="covhist-main2-div1a-item3b-option">Coin</option>
                                    </select>
                                </div>
                            </div> */}
                            <div class="covhist-main2-div1d">
                                <button class="covhist-main2-div1d-btn1">Search</button>
                                <button class="covhist-main2-div1d-btn2">Reset</button>
                            </div>
                            
                        </div>
                        <div class="covhist-main2-div3">
                            <img src={uncheckrect}></img>
                            <span class="covhist-main2-div2-txt">Hide all canceled</span>
                        </div>

                        <div class="covhist-main2-div2">
                            <div class="covhist-main2-div2-txt">Date</div>
                            <div class="covhist-main2-div2-txt">Pair</div>
                            <div class="covhist-main2-div2-txt">Type</div>
                            <div class="covhist-main2-div2-txt">Side</div>
                            <div class="covhist-main2-div2-txt">Price</div>
                            <div class="covhist-main2-div2-txt">Ammount</div>
                            <div class="covhist-main2-div2-txt">Filled</div>
                            <div class="covhist-main2-div2-txt">Total</div>
                            <div class="covhist-main2-div2-txt">Trigger Conditions</div>
                            <div class="covhist-main2-div2-txt">Action</div>
                        </div>
                </div>
                {/* end////// */}
            </div>
        </div>
        </>
    )
};
export default CovertHist