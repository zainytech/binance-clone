import React, {useState} from 'react';
import Select from 'react-select';
import Wasidebar from './Wasidebar';
import './Watransaction.css';


const  Watransaction = () => {
   return(
    <>
        <div className='watrans'>
            <Wasidebar/>
            <Watranssec/>
        </div>
    </>
   );   
}


const  Watranssec = () => {
    const [showarticle, setShowarticle] = useState(1);
    const options = [
        {value: "Deposit", label: "Deposit"},
        {value: "Withdraw", label: "Withdraw"},
        {value: "Auto deduction", label: "Auto deduction"},
        {value: "Auto funding", label: "Auto funding"},
        {value: "Arrears repayment", label: "Arrears repayment"},
        {value: "Auto convert", label: "Auto convert"}
       ];
    
       const sec = [
        {value: "All", label: "All"},
        {value: "1INCH", label: "1INCH"},
        {value: "1INCHDOWN", label: "1INCHDOWN"}, 
        {value: "1INCHUP", label: "1INCHUP"}, 
        {value: "AAVE", label: "AAVAE"}, 
        {value: "AAVEDOWN", label: "AAVEDOWN"}, 
        {value: "AAVEUP", label: "AAVEUP"}, 
        {value: "ACA", label: "ACA"}, 
        {value: "ACM", label: "ACM"}, 
        {value: "ADA", label: "ADA"}, 
        {value: "ADADOWN", label: "ADADOWN"}, 
        {value: "ADAUP", label: "ADAUP"}, 
        {value: "ADD", label: "ADD"}, 
        {value: "ADX", label: "ADX"}, 
        {value: "ADXOLD", label: "ADXOLD"}, 
        {value: "AE", label: "AE"}, 
        {value: "AED", label: "AED"}, 
        {value: "AERGO", label: "AERGO"}, 
        {value: "AFN", label: "AFN"}, 
        {value: "AGIX", label: "AGIX"}, 
        ];
    
       const third = [
        {value: "All", label: "All"},
        {value: "Completed", label: "Completed"},
        {value: "Pending", label: "Pending"}
       ];
    
       const first = [
        {value: "Past 7 days", label: "Past 7 days"},
        {value: "Past 30 days", label: "Past 30 days"},
        {value: "Past 90 days", label: "Past 90 days"},
        {value: "Customized", label: "Customized"}
       ];
    
       const forth = [
        {value: "All", label: "All"},
        {value: "BYN", label: "BYN"},
        {value: "PAB", label: "PAB"},
        {value: "MMK", label: "MMK"},
        {value: "BHD", label: "BHD"},
        {value: "OMR", label: "OMR"},
        {value: "DZD", label: "DZD"},
        {value: "TND", label: "TND"},
        {value: "SDG", label: "TDG"},
        {value: "TMT", label: "TMT"},
        {value: "KGS", label: "KGS"},
        {value: "GHS", label: "GHS"},
       ];
    
       const fifth = [
        {value: "All", label: "All"},
        {value: "Processing", label: "Processing"},
        {value: "Successful", label: "Successful"},
        {value: "Failed", label: "Failed"},
        {value: "Expired", label: "Expired"},
        {value: "Refunding", label: "Refunding"},
        {value: "Refunded", label: "Refunded"}
       ];
    
       const sixth = [
        {value: "Fiat and Spot", label: "Fiat and Spot"},
        {value: "Pool", label: "Pool"},
        {value: "Funding", label: "Funding"}
       ];
    return(
        <><div className='watrans-sec'>
        <div className='watrans-sec-row1'>
            <h2>Transaction History</h2>
            <a href='#'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-wg7atv"><path fill="currentColor" d="M4 4h5v2.5H4zM4 17.5h16V20H4z"></path><path fill="currentColor" d="M4 4h2.5v16H4zM17.5 15H20v5h-2.5z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M18.768 7.018l-8.485 8.485-1.768-1.768L17 5.25l.884.884.884.884z" fill="currentColor"></path><path d="M12 4h8v8l-8-8z" fill="currentColor"></path></svg>
            Generate all History</a>
        </div>

        <div className='watrans-sec-row2'>
            <button onClick={()=>setShowarticle(1)} className={ showarticle === 1 ? "active" : "" }>Crypto</button>
            <button onClick={()=>setShowarticle(2)} className={ showarticle === 2 ? "active" : "" }>Fiat</button>
            <button onClick={()=>setShowarticle(3)} className={ showarticle === 3 ? "active" : "" }>Transfer</button>
            <button onClick={()=>setShowarticle(4)} className={ showarticle === 4 ? "active" : "" }>Distribution</button>
            <button onClick={()=>setShowarticle(5)} id='bnb-width' className={ showarticle === 5 ? "active" : "" }>BNB Convert</button>
        </div>


        { showarticle === 1 && <>
            <div className='watrans-sec-row3'>
                <div className='watrans-sec-row3-col1'>
                    <div style={{ width: "11rem" }}>
                        <div>Type</div>
                        <Select options={options} 
                            styles={{
                                control: (baseStyles, state) => ({
                                ...baseStyles,
                                borderColor: state.isFocused ? 'blue' : 'grey',
                                }),
                            }}
                        />
                    </div>

                    <div style={{ width: "9rem" }}>
                        <div>Time</div>
                        <Select options={first}
                            styles={{
                                control: (baseStyles, state) => ({
                                ...baseStyles,
                                borderColor: state.isFocused ? 'blue' : 'grey',
                                }),
                            }}
                        />
                    </div>

                    <div style={{ width: "15rem" }}>
                        <div>Asset</div>
                        <Select options={sec} isSearchable={true}
                            styles={{
                                control: (baseStyles, state) => ({
                                ...baseStyles,
                                borderColor: state.isFocused ? 'blue' : 'grey',
                                }),
                            }}
                        />
                    </div>

                    <div style={{ width: "9rem" }}>
                        <div>Status</div>
                        <Select options={third}
                            styles={{
                                control: (baseStyles, state) => ({
                                ...baseStyles,
                                borderColor: state.isFocused ? 'blue' : 'grey',
                                cursor: 'text'
                                }),
                            }}
                        />
                    </div>
                    
                    <div style={{ width: "9rem" }} className='watrans-sec-row3-col1-last'>
                        <div>Status</div>
                        <input type='text'/>
                    </div>
                </div>

                <div className='watrans-sec-row3-col2'>
                    <a href='#'>Deposit hasn't arrived? Click here</a>
                    <a href='#'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-wg7atv"><path fill="currentColor" d="M4 4h5v2.5H4zM4 17.5h16V20H4z"></path><path fill="currentColor" d="M4 4h2.5v16H4zM17.5 15H20v5h-2.5z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M18.768 7.018l-8.485 8.485-1.768-1.768L17 5.25l.884.884.884.884z" fill="currentColor"></path><path d="M12 4h8v8l-8-8z" fill="currentColor"></path></svg>
                        Generate all History</a>
                </div>

                <div className="waearn-sec-row3-col2">
                        <div className="waearn-sec-row3-col2-row1">
                            <div className="waearn-sec-row3-col2-row1-div1">Time</div>
                            <div className="waearn-sec-row3-col2-row1-div2">Type</div>
                            <div className="waearn-sec-row3-col2-row1-div3">Deposit wallet</div>
                            <div className="waearn-sec-row3-col2-row1-div4">Total Amount</div>
                            <div className="waearn-sec-row3-col2-row1-div5">Asset</div>
                            <div className="waearn-sec-row3-col2-row1-div6">Amount</div>
                            <div className="waearn-sec-row3-col2-row1-div7">Destination</div>
                            <div className="waearn-sec-row3-col2-row1-div8">Cumulative Interest</div>
                            <div className="waearn-sec-row3-col2-row1-div9">TxID</div>
                            <div className="waearn-sec-row3-col2-row1-div10">Status</div>
                        </div>
                        <div className="waearn-sec-row3-col2-row2">
                            <div className='wafiat-first-col4-row4'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none" class="css-1c070tq"><path fill-rule="evenodd" clip-rule="evenodd" d="M64 8H26v80h58V28H64V8zM36 37h38v4H36v-4zm0 9h38v4H36v-4zm38 9H36v4h38v-4zm-8 12l4 4-4 4-4-4 4-4zM50 18l-3 3 3 3 3-3-3-3z" fill="url(#not-found-data_svg__paint0_linear_22059_32288)"></path><path opacity="0.3" d="M86 50l3-3 3 3-3 3-3-3zM47 21l3-3 3 3-3 3-3-3zM84 28H64V8l20 20z" fill="#929AA5"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.172 73.171l14.5-14.5 5.656 5.658-14.5 14.5-5.656-5.657z" fill="url(#not-found-data_svg__paint1_linear_22059_32288)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M51 48c0-8.837-7.163-16-16-16s-16 7.163-16 16 7.163 16 16 16 16-7.163 16-16zm4 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z" fill="url(#not-found-data_svg__paint2_linear_22059_32288)"></path><defs><linearGradient id="not-found-data_svg__paint0_linear_22059_32288" x1="55" y1="8" x2="55" y2="88" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5" stop-opacity="0.1"></stop><stop offset="1" stop-color="#929AA5" stop-opacity="0.25"></stop></linearGradient><linearGradient id="not-found-data_svg__paint1_linear_22059_32288" x1="4.172" y1="68.75" x2="24.328" y2="68.75" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient><linearGradient id="not-found-data_svg__paint2_linear_22059_32288" x1="15" y1="48" x2="55" y2="48" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient></defs></svg>
                                <div>No records found.</div>
                            </div> 
                        </div>
                </div>

            </div>
        </>}

        { showarticle === 2 && <>
            <div className='watrans-sec-row4'>
                <div className='watrans-sec-row3-col1'>
                    <div className='watrans-sec-row4-row1'>
                        <div style={{ width: "11rem" }}>
                            <div>Type</div>
                            <Select options={options} 
                                styles={{
                                    control: (baseStyles, state) => ({
                                    ...baseStyles,
                                    borderColor: state.isFocused ? 'blue' : 'grey',
                                    }),
                                }}
                            />
                        </div>

                        <div style={{ width: "9rem" }}>
                            <div>Fiat</div>
                            <Select options={forth} isSearchable={true}
                                styles={{
                                    control: (baseStyles, state) => ({
                                    ...baseStyles,
                                    borderColor: state.isFocused ? 'blue' : 'grey',
                                    }),
                                }}
                            />
                        </div>

                        <div style={{ width: "9rem" }}>
                            <div>Time</div>
                            <Select options={first}
                                styles={{
                                    control: (baseStyles, state) => ({
                                    ...baseStyles,
                                    borderColor: state.isFocused ? 'blue' : 'grey',
                                    }),
                                }}
                            />
                        </div>

                        <div style={{ width: "10rem" }}>
                            <div>Status</div>
                            <Select options={fifth}
                                styles={{
                                    control: (baseStyles, state) => ({
                                    ...baseStyles,
                                    borderColor: state.isFocused ? 'blue' : 'grey',
                                    cursor: 'text'
                                    }),
                                }}
                            />
                        </div>
                    </div>

                    <div className='watrans-sec-row4-row2'>
                       <button>Reset</button>
                       <button>Search</button>
                    </div>

                </div>

                <div className='watrans-sec-row4-col2'>
                    <a href='#'>Deposit hasn't arrived? Click here</a>
                    <a href='#'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-wg7atv"><path fill="currentColor" d="M4 4h5v2.5H4zM4 17.5h16V20H4z"></path><path fill="currentColor" d="M4 4h2.5v16H4zM17.5 15H20v5h-2.5z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M18.768 7.018l-8.485 8.485-1.768-1.768L17 5.25l.884.884.884.884z" fill="currentColor"></path><path d="M12 4h8v8l-8-8z" fill="currentColor"></path></svg>
                        Export Deposit History</a>
                </div>

                <div className="waearn-sec-row3-col2">
                        <div className="waearn-sec-row3-col2-row1">
                            <div className="waearn-sec-row3-col2-row1-div1">Date</div>
                            <div className="waearn-sec-row3-col2-row1-div2">Coin</div>
                            <div className="waearn-sec-row3-col2-row1-div3">Amount</div>
                            <div className="waearn-sec-row3-col2-row1-div4">Status</div>
                            <div className="waearn-sec-row3-col2-row1-div5">Information</div>
                        </div>
                        <div className="waearn-sec-row3-col2-row2">
                            <div className='wafiat-first-col4-row4'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none" class="css-1c070tq"><path fill-rule="evenodd" clip-rule="evenodd" d="M64 8H26v80h58V28H64V8zM36 37h38v4H36v-4zm0 9h38v4H36v-4zm38 9H36v4h38v-4zm-8 12l4 4-4 4-4-4 4-4zM50 18l-3 3 3 3 3-3-3-3z" fill="url(#not-found-data_svg__paint0_linear_22059_32288)"></path><path opacity="0.3" d="M86 50l3-3 3 3-3 3-3-3zM47 21l3-3 3 3-3 3-3-3zM84 28H64V8l20 20z" fill="#929AA5"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.172 73.171l14.5-14.5 5.656 5.658-14.5 14.5-5.656-5.657z" fill="url(#not-found-data_svg__paint1_linear_22059_32288)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M51 48c0-8.837-7.163-16-16-16s-16 7.163-16 16 7.163 16 16 16 16-7.163 16-16zm4 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z" fill="url(#not-found-data_svg__paint2_linear_22059_32288)"></path><defs><linearGradient id="not-found-data_svg__paint0_linear_22059_32288" x1="55" y1="8" x2="55" y2="88" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5" stop-opacity="0.1"></stop><stop offset="1" stop-color="#929AA5" stop-opacity="0.25"></stop></linearGradient><linearGradient id="not-found-data_svg__paint1_linear_22059_32288" x1="4.172" y1="68.75" x2="24.328" y2="68.75" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient><linearGradient id="not-found-data_svg__paint2_linear_22059_32288" x1="15" y1="48" x2="55" y2="48" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient></defs></svg>
                                <div>No records found.</div>
                            </div> 
                        </div>
                </div>
            </div>
        </>}

        { showarticle === 3 && <>
            <div className='watrans-sec-row5'>
                <div className='watrans-sec-row3-col1'>
                    <div className='watrans-sec-row4-row1'>
                        <div style={{ width: "11rem" }}>
                            <div>Type</div>
                            <Select options={options} 
                                styles={{
                                    control: (baseStyles, state) => ({
                                    ...baseStyles,
                                    borderColor: state.isFocused ? 'blue' : 'grey',
                                    }),
                                }}
                            />
                        </div>

                        <div className='watrans-sec-row5-row1'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-xmkv3t"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 9V6h13.5V2.5l5 5-5 5V9H3zm18 9v-3H7v-3.5l-5 5 5 5V18h14z" fill="currentColor"></path></svg>
                        </div>

                        <div style={{ width: "9rem" }}>
                            <div>Fiat</div>
                            <Select options={forth} isSearchable={true}
                                styles={{
                                    control: (baseStyles, state) => ({
                                    ...baseStyles,
                                    borderColor: state.isFocused ? 'blue' : 'grey',
                                    }),
                                }}
                            />
                        </div>

                        <div style={{ width: "9rem" }}>
                            <div>Time</div>
                            <Select options={first}
                                styles={{
                                    control: (baseStyles, state) => ({
                                    ...baseStyles,
                                    borderColor: state.isFocused ? 'blue' : 'grey',
                                    }),
                                }}
                            />
                        </div>

                        <div style={{ width: "10rem" }}>
                            <div>Status</div>
                            <Select options={fifth}
                                styles={{
                                    control: (baseStyles, state) => ({
                                    ...baseStyles,
                                    borderColor: state.isFocused ? 'blue' : 'grey',
                                    cursor: 'text'
                                    }),
                                }}
                            />
                        </div>

                        <button>Reset</button>
                    </div>
                </div>

                <div className='watrans-sec-row4-col2'>
                    <a href='#'>Deposit hasn't arrived? Click here</a>
                    <a href='#'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-wg7atv"><path fill="currentColor" d="M4 4h5v2.5H4zM4 17.5h16V20H4z"></path><path fill="currentColor" d="M4 4h2.5v16H4zM17.5 15H20v5h-2.5z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M18.768 7.018l-8.485 8.485-1.768-1.768L17 5.25l.884.884.884.884z" fill="currentColor"></path><path d="M12 4h8v8l-8-8z" fill="currentColor"></path></svg>
                        Export Deposit History</a>
                </div>

                <div className="waearn-sec-row3-col2">
                        <div className="waearn-sec-row3-col2-row1">
                            <div className="waearn-sec-row3-col2-row1-div1">Date</div>
                            <div className="waearn-sec-row3-col2-row1-div2">Coin</div>
                            <div className="waearn-sec-row3-col2-row1-div3">Amount</div>
                            <div className="waearn-sec-row3-col2-row1-div4">Status</div>
                            <div className="waearn-sec-row3-col2-row1-div5">Information</div>
                        </div>
                        <div className="waearn-sec-row3-col2-row2">
                            <div className='wafiat-first-col4-row4'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none" class="css-1c070tq"><path fill-rule="evenodd" clip-rule="evenodd" d="M64 8H26v80h58V28H64V8zM36 37h38v4H36v-4zm0 9h38v4H36v-4zm38 9H36v4h38v-4zm-8 12l4 4-4 4-4-4 4-4zM50 18l-3 3 3 3 3-3-3-3z" fill="url(#not-found-data_svg__paint0_linear_22059_32288)"></path><path opacity="0.3" d="M86 50l3-3 3 3-3 3-3-3zM47 21l3-3 3 3-3 3-3-3zM84 28H64V8l20 20z" fill="#929AA5"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.172 73.171l14.5-14.5 5.656 5.658-14.5 14.5-5.656-5.657z" fill="url(#not-found-data_svg__paint1_linear_22059_32288)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M51 48c0-8.837-7.163-16-16-16s-16 7.163-16 16 7.163 16 16 16 16-7.163 16-16zm4 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z" fill="url(#not-found-data_svg__paint2_linear_22059_32288)"></path><defs><linearGradient id="not-found-data_svg__paint0_linear_22059_32288" x1="55" y1="8" x2="55" y2="88" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5" stop-opacity="0.1"></stop><stop offset="1" stop-color="#929AA5" stop-opacity="0.25"></stop></linearGradient><linearGradient id="not-found-data_svg__paint1_linear_22059_32288" x1="4.172" y1="68.75" x2="24.328" y2="68.75" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient><linearGradient id="not-found-data_svg__paint2_linear_22059_32288" x1="15" y1="48" x2="55" y2="48" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient></defs></svg>
                                <div>No records found.</div>
                            </div> 
                        </div>
                </div>
            </div>
        </>}


        { showarticle === 4 && <>
            <div className='watrans-sec-row6'>
                <div className='watrans-sec-row3-col1'>
                    <div className='watrans-sec-row4-row1'>

                        <div style={{ width: "9rem" }}>
                            <div>Time</div>
                            <Select options={first}
                                styles={{
                                    control: (baseStyles, state) => ({
                                    ...baseStyles,
                                    borderColor: state.isFocused ? 'blue' : 'grey',
                                    }),
                                }}
                            />
                        </div>

                        <div style={{ width: "15rem" }}>
                        <div>Coin</div>
                        <Select options={sec} isSearchable={true}
                            styles={{
                                control: (baseStyles, state) => ({
                                ...baseStyles,
                                borderColor: state.isFocused ? 'blue' : 'grey',
                                }),
                            }}
                        />
                        </div>

                        <div style={{ width: "10rem" }}>
                            <div>Account</div>
                            <Select options={sixth}
                                styles={{
                                    control: (baseStyles, state) => ({
                                    ...baseStyles,
                                    borderColor: state.isFocused ? 'blue' : 'grey',
                                    cursor: 'text'
                                    }),
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div className='watrans-sec-row4-col2'>
                    <a href='#'>Deposit hasn't arrived? Click here</a>
                    <a href='#'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-wg7atv"><path fill="currentColor" d="M4 4h5v2.5H4zM4 17.5h16V20H4z"></path><path fill="currentColor" d="M4 4h2.5v16H4zM17.5 15H20v5h-2.5z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M18.768 7.018l-8.485 8.485-1.768-1.768L17 5.25l.884.884.884.884z" fill="currentColor"></path><path d="M12 4h8v8l-8-8z" fill="currentColor"></path></svg>
                        Export Deposit History</a>
                </div>

                <div className="waearn-sec-row3-col2">
                        <div className="waearn-sec-row3-col2-row1">
                            <div className="waearn-sec-row3-col2-row1-div1">Time</div>
                            <div className="waearn-sec-row3-col2-row1-div2">Coin</div>
                            <div className="waearn-sec-row3-col2-row1-div3">Amount</div>
                            <div className="waearn-sec-row3-col2-row1-div3">Account</div>
                            <div className="waearn-sec-row3-col2-row1-div4">Type</div>
                            <div className="waearn-sec-row3-col2-row1-div5">Note</div>
                        </div>
                        <div className="waearn-sec-row3-col2-row2">
                            <div className='wafiat-first-col4-row4'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none" class="css-1c070tq"><path fill-rule="evenodd" clip-rule="evenodd" d="M64 8H26v80h58V28H64V8zM36 37h38v4H36v-4zm0 9h38v4H36v-4zm38 9H36v4h38v-4zm-8 12l4 4-4 4-4-4 4-4zM50 18l-3 3 3 3 3-3-3-3z" fill="url(#not-found-data_svg__paint0_linear_22059_32288)"></path><path opacity="0.3" d="M86 50l3-3 3 3-3 3-3-3zM47 21l3-3 3 3-3 3-3-3zM84 28H64V8l20 20z" fill="#929AA5"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.172 73.171l14.5-14.5 5.656 5.658-14.5 14.5-5.656-5.657z" fill="url(#not-found-data_svg__paint1_linear_22059_32288)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M51 48c0-8.837-7.163-16-16-16s-16 7.163-16 16 7.163 16 16 16 16-7.163 16-16zm4 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z" fill="url(#not-found-data_svg__paint2_linear_22059_32288)"></path><defs><linearGradient id="not-found-data_svg__paint0_linear_22059_32288" x1="55" y1="8" x2="55" y2="88" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5" stop-opacity="0.1"></stop><stop offset="1" stop-color="#929AA5" stop-opacity="0.25"></stop></linearGradient><linearGradient id="not-found-data_svg__paint1_linear_22059_32288" x1="4.172" y1="68.75" x2="24.328" y2="68.75" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient><linearGradient id="not-found-data_svg__paint2_linear_22059_32288" x1="15" y1="48" x2="55" y2="48" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient></defs></svg>
                                <div>No records found.</div>
                            </div> 
                        </div>
                </div>
            </div>
        </>}

        { showarticle === 5 && <>
            <div className='watrans-sec-row7'>
                <div className="waearn-sec-row3-col2">
                        <div className="waearn-sec-row3-col2-row1">
                            <div className="waearn-sec-row3-col2-row1-div1">Date</div>
                            <div className="waearn-sec-row3-col2-row1-div2">Fee(BNB)</div>
                            <div className="waearn-sec-row3-col2-row1-div3">Converted(BNB)</div>
                        </div>
                        <div className="waearn-sec-row3-col2-row2">
                            <div className='wafiat-first-col4-row4'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none" class="css-1c070tq"><path fill-rule="evenodd" clip-rule="evenodd" d="M64 8H26v80h58V28H64V8zM36 37h38v4H36v-4zm0 9h38v4H36v-4zm38 9H36v4h38v-4zm-8 12l4 4-4 4-4-4 4-4zM50 18l-3 3 3 3 3-3-3-3z" fill="url(#not-found-data_svg__paint0_linear_22059_32288)"></path><path opacity="0.3" d="M86 50l3-3 3 3-3 3-3-3zM47 21l3-3 3 3-3 3-3-3zM84 28H64V8l20 20z" fill="#929AA5"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.172 73.171l14.5-14.5 5.656 5.658-14.5 14.5-5.656-5.657z" fill="url(#not-found-data_svg__paint1_linear_22059_32288)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M51 48c0-8.837-7.163-16-16-16s-16 7.163-16 16 7.163 16 16 16 16-7.163 16-16zm4 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z" fill="url(#not-found-data_svg__paint2_linear_22059_32288)"></path><defs><linearGradient id="not-found-data_svg__paint0_linear_22059_32288" x1="55" y1="8" x2="55" y2="88" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5" stop-opacity="0.1"></stop><stop offset="1" stop-color="#929AA5" stop-opacity="0.25"></stop></linearGradient><linearGradient id="not-found-data_svg__paint1_linear_22059_32288" x1="4.172" y1="68.75" x2="24.328" y2="68.75" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient><linearGradient id="not-found-data_svg__paint2_linear_22059_32288" x1="15" y1="48" x2="55" y2="48" gradientUnits="userSpaceOnUse"><stop stop-color="#929AA5"></stop><stop offset="1" stop-color="#76808F"></stop></linearGradient></defs></svg>
                                <div>No records found.</div>
                            </div> 
                        </div>
                </div>
            </div>
        </>}

        </div></>
    );
}

export  {Watranssec, Watransaction};
