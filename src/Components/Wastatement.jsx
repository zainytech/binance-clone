import React, {useState} from "react";
import Select from 'react-select';
import './Wastatement.css';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Wasidebar from "./Wasidebar";

const Wastatement = () => {
    return(
        <>
            <div className="wastate">
                <Wasidebar/>
                <Wastatesec/>

            </div>
        </>
    );
}

const Wastatesec = () => {
    const [startDate, setStartDate] = useState(new Date());

    const oneth = [
        {value: "Deposit", label: ""}
    ];

    const second = [
        {value: "All", label: "All"},
        {value: "Spot", label: "Spot"},
        {value: "Funding", label: "Funding"}
    ];

    const third = [
        {value: "BUSD", label: "BUSD"},
        {value: "USDT", label: "USDT"}
    ];
    return(<>
         <div className="wastate-sec">
                    <div className="wastate-sec-row1">
                        <h2>Account Statement</h2>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-621vqk"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 3h-3v6.95l-.303-.003-4.159.04 5.975 5.976 5.975-5.975-4.176-.01-.312-.002V3zm-10 11h3v4h11v-4h3v7h-17v-7z" fill="currentColor"></path></svg>
                            Export
                        </button>
                    </div>

                    <hr className='waoverview-hr'/>

                    <div className="wastate-sec-row3">
                        <div className="wastate-sec-row3-col">
                            <div style={{ width: "10rem" }}  className="wastate-sec-row3-col-col2">
                                <div>Date</div>
                                <DatePicker selected={startDate} 
                                wrapperClassName="date-picker"
                                onChange={(date) => setStartDate(date)} />                       
                            </div>
                            <div style={{ width: "15rem" }} className="wastate-sec-row3-col-col1">
                                <div>Account</div>
                                <Select options={oneth} isSearchable={true}
                                   placeholder='hinayaisn01@gmail.com'
                                    styles={{
                                        control: (baseStyles, state) => ({
                                        ...baseStyles,
                                        borderColor: state.isFocused ? 'blue' : 'grey',
                                        }),
                                    }}
                                />
                            </div>
                            <div style={{ width: "10rem" }} className="wastate-sec-row3-col-col1">
                                <div>Wallet</div>
                                <Select options={second} isSearchable={true}
                                    styles={{
                                        control: (baseStyles, state) => ({
                                        ...baseStyles,
                                        borderColor: state.isFocused ? 'blue' : 'grey',
                                        }),
                                    }}
                                />
                            </div>
                            <div style={{ width: "10rem" }} className="wastate-sec-row3-col-col1">
                                <div>Estimated Value</div>
                                <Select options={third} isSearchable={true}
                                    styles={{
                                        control: (baseStyles, state) => ({
                                        ...baseStyles,
                                        borderColor: state.isFocused ? 'blue' : 'grey',
                                        }),
                                    }}
                                />
                            </div>
                            <div className="wastate-sec-row3-col-col3">
                                <button>Search</button>
                                <button>Reset</button>
                            </div>
                        </div>

                        <div className="wastate-sec-row3-col1">
                            <h4>Overview</h4>
                            <div>Data refreshes at UTC+0 daily.</div>
                        </div>
                        <div className="wastate-sec-row3-col2">
                            <div className="wastate-sec-row3-col2-row1">
                                <div>Date</div>
                                <div>2023-02-08</div>
                            </div>
                            <div className="wastate-sec-row3-col2-row1">
                                <div>User ID</div>
                                <div>549271507</div>
                            </div>
                            <div className="wastate-sec-row3-col2-row1">
                                <div>Account Type</div>
                                <div>Normal Account</div>
                            </div>
                            <div className="wastate-sec-row3-col2-row1">
                                <div>Wallet</div>
                                <div>All</div>
                            </div>
                            <div className="wastate-sec-row3-col2-row1">
                                <div>Rate</div>
                                <div>1 BTC</div>
                                <div className="wastate-sec-row3-col2-row1-last">≈ 22,964 USDT</div>
                            </div>
                        </div>
                        <hr className='waoverview-hr'/>
                        <div className="wastate-sec-row3-col3">
                            <div className="wastate-sec-row3-col3-head">Total Value</div>
                            <div className="wastate-sec-row3-col3-row">-- BTC<span>≈ -- USDT</span></div>
                            <div className="wastate-sec-row3-col3-row1">
                                <div className="wastate-sec-row3-col3-row1-col1"><div>Spot</div><div>-- BTC</div><div>≈ -- BUSD</div></div>
                                <div className="wastate-sec-row3-col3-row1-col1"><div>Funding</div><div>-- BTC</div><div>≈ -- BUSD</div></div>
                            </div>
                        </div>

                        <div className="wastate-sec-row3-col4">
                            <div>Spot</div>
                            <div>Total Balance</div>
                            <div className="wastate-sec-row3-col4-row1">-- BTC<span>≈ -- BUSD</span></div>
                        </div>

                        <div className="waearn-sec-row3-col2">
                                <div className="waearn-sec-row3-col2-row1">
                                    <div className="waearn-sec-row3-col2-row1-div1">Coin</div>
                                    <div className="waearn-sec-row3-col2-row1-div2">Total</div>
                                </div>
                                <div className="waearn-sec-row3-col2-row2">
                                    <div className='wafiat-first-col4-row4'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none" class="css-1c070tq"><path fill-rule="evenodd" clip-rule="evenodd" d="M64 8H26v80h58V28H64V8zM36 37h38v4H36v-4zm0 9h38v4H36v-4zm38 9H36v4h38v-4zm-8 12l4 4-4 4-4-4 4-4zM50 18l-3 3 3 3 3-3-3-3z" fill="url(#not-found-data_svg__paint0_linear_22059_32288)"></path><path opacity="0.3" d="M86 50l3-3 3 3-3 3-3-3zM47 21l3-3 3 3-3 3-3-3zM84 28H64V8l20 20z" fill="#929AA5"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.172 73.171l14.5-14.5 5.656 5.658-14.5 14.5-5.656-5.657z" fill="url(#not-found-data_svg__paint1_linear_22059_32288)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M51 48c0-8.837-7.163-16-16-16s-16 7.163-16 16 7.163 16 16 16 16-7.163 16-16zm4 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z" fill="url(#not-found-data_svg__paint2_linear_22059_32288)"></path><defs><linearGradient id="not-found-data_svg__paint0_linear_22059_32288" x1="55" y1="8" x2="55" y2="88" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5" stop-opacity="0.1"></stop><stop offset="1" stop-color="#929AA5" stop-opacity="0.25"></stop></linearGradient><linearGradient id="not-found-data_svg__paint1_linear_22059_32288" x1="4.172" y1="68.75" x2="24.328" y2="68.75" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient><linearGradient id="not-found-data_svg__paint2_linear_22059_32288" x1="15" y1="48" x2="55" y2="48" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient></defs></svg>
                                        <div>No records found.</div>
                                    </div> 
                                </div>
                        </div>

                        <hr className='waoverview-hr'/>

                        <div className="wastate-sec-row3-col4 wastate-sec-row3-margin">
                            <div>Funding</div>
                            <div>Total Balance</div>
                            <div className="wastate-sec-row3-col4-row1">-- BTC<span>≈ -- BUSD</span></div>
                        </div>

                        <div className="waearn-sec-row3-col2">
                                <div className="waearn-sec-row3-col2-row1">
                                    <div className="waearn-sec-row3-col2-row1-div1">Coin</div>
                                    <div className="waearn-sec-row3-col2-row1-div2">Total</div>
                                </div>
                                <div className="waearn-sec-row3-col2-row2">
                                    <div className='wafiat-first-col4-row4'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none" class="css-1c070tq"><path fill-rule="evenodd" clip-rule="evenodd" d="M64 8H26v80h58V28H64V8zM36 37h38v4H36v-4zm0 9h38v4H36v-4zm38 9H36v4h38v-4zm-8 12l4 4-4 4-4-4 4-4zM50 18l-3 3 3 3 3-3-3-3z" fill="url(#not-found-data_svg__paint0_linear_22059_32288)"></path><path opacity="0.3" d="M86 50l3-3 3 3-3 3-3-3zM47 21l3-3 3 3-3 3-3-3zM84 28H64V8l20 20z" fill="#929AA5"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.172 73.171l14.5-14.5 5.656 5.658-14.5 14.5-5.656-5.657z" fill="url(#not-found-data_svg__paint1_linear_22059_32288)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M51 48c0-8.837-7.163-16-16-16s-16 7.163-16 16 7.163 16 16 16 16-7.163 16-16zm4 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z" fill="url(#not-found-data_svg__paint2_linear_22059_32288)"></path><defs><linearGradient id="not-found-data_svg__paint0_linear_22059_32288" x1="55" y1="8" x2="55" y2="88" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5" stop-opacity="0.1"></stop><stop offset="1" stop-color="#929AA5" stop-opacity="0.25"></stop></linearGradient><linearGradient id="not-found-data_svg__paint1_linear_22059_32288" x1="4.172" y1="68.75" x2="24.328" y2="68.75" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient><linearGradient id="not-found-data_svg__paint2_linear_22059_32288" x1="15" y1="48" x2="55" y2="48" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient></defs></svg>
                                        <div>No records found.</div>
                                    </div> 
                                </div>
                        </div>
                        
                        <div className="wastate-sec-row3-col4"></div>
                    </div>
                </div>
    </>);
}
export {Wastatesec, Wastatement};