import React from 'react'
import { NavLink } from 'react-router-dom';


const Wasidebar = () => {
    return(
        <>
           <div className='waoverview-first'>
                    <NavLink to='/wallet-Overview' style={{textDecoration: 'none'}}>
                    <div className='fun-first fun-sec'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-19ss7aa"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 4v7h7V4H4zm9 7V4h7v7h-7zm3.5 9.743L12.257 16.5l4.243-4.243 4.243 4.243-4.243 4.243zM4 13h7v7H4v-7z" fill="currentColor"></path></svg>
                        <p>Overview</p>
                    </div>
                    </NavLink>
                    
                    <NavLink to='/wallet-fiat-and-sport' style={{textDecoration: 'none'}}>
                    <div className='fun-first fun-sec'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-19ss7aa"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 3.5a5.502 5.502 0 00-5.302 4.032 7.502 7.502 0 016.77 6.77A5.502 5.502 0 0015 3.5zM14.5 15a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zm-8 0L9 17.5l2.5-2.5L9 12.5 6.5 15zM9 4H4v5l5-5zm11 16h-5l5-5v5z" fill="currentColor"></path></svg>
                        <p className='fiat-width'>Fiat and Sport</p>
                    </div></NavLink>

                    <NavLink to='/wallet-margin' style={{textDecoration: 'none'}}>
                    <div className='fun-first fun-sec'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-19ss7aa"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.768 7.019L5.828 19.958 4.062 18.19 17 5.25l.883.885.884.884z" fill="currentColor"></path><path d="M12 4h8v8l-8-8z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 11a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm0-5.031L5.969 7.5 7.5 9.031l1.531-1.53L7.5 5.968zM16.5 20a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm0-5.031L14.969 16.5l1.531 1.531 1.531-1.53-1.531-1.532z" fill="currentColor"></path></svg>
                        <p>Margin</p>
                    </div></NavLink>
                    
                    <NavLink to='/wallet-futures' style={{textDecoration: 'none'}}>
                    <div className='fun-first fun-sec'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-19ss7aa"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 3H20v13a4 4 0 01-4 4H7.5A3.5 3.5 0 014 16.5V9h4.5V3zM11 14.506v2.5h6.5v-2.5H11zM8.5 11.5h-2v5a1 1 0 102 0v-5zm4-5.494h5v5L15.885 9.39l-2.616 2.616-1.768-1.768 2.616-2.616L12.5 6.006z" fill="currentColor"></path></svg>
                        <p>Futures</p>
                    </div></NavLink>

                    {/* <NavLink style={{textDecoration: 'none'}}> */}
                        {/* <div className='fun-first fun-sec'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-19ss7aa"> <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0002 9V4H15.0002L20.0002 9ZM4.00024 15V20H9.00024L4.00024 15ZM13.5387 13.5384C12.2804 14.7967 10.5589 15.3096 8.92307 15.0771C8.69052 13.4412 9.20343 11.7196 10.4618 10.4613C11.7201 9.20298 13.4415 8.69007 15.0774 8.92255C15.31 10.5585 14.7971 12.28 13.5387 13.5384ZM15.0774 8.92255C14.9174 7.79695 14.4045 6.71187 13.5387 5.84606C11.4145 3.72189 7.97057 3.72189 5.8464 5.84606C3.72223 7.97023 3.72223 11.4142 5.8464 13.5384C6.71226 14.4042 7.79741 14.9171 8.92307 15.0771C9.08307 16.2027 9.59598 17.2878 10.4618 18.1536C12.586 20.2778 16.0299 20.2778 18.1541 18.1536C20.2783 16.0294 20.2783 12.5855 18.1541 10.4613C17.2882 9.59543 16.2031 9.08252 15.0774 8.92255Z" fill="currentColor"></path></svg>
                            <p>Rebalancing Bot</p>
                        </div> */}
                    
                    <NavLink to='/wallet-options' style={{textDecoration: 'none'}}>
                    <div className='fun-first fun-sec'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-19ss7aa"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 3H8.5v6H4v7.5A3.5 3.5 0 007.5 20H16a4 4 0 004-4V3zM6.5 11.5h2v5a1 1 0 11-2 0v-5zm10.364 3.75H11.66v-7.5h5.203v1.7h-3.328v1.164h2.854v1.69h-2.854v1.246h3.328v1.7z" fill="currentColor"></path></svg>
                        <p>Options</p>
                    </div></NavLink>
                    
                    <NavLink to='/wallet-funding' style={{textDecoration: 'none'}}>
                    <div className='fun-first fun-sec'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-19ss7aa"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-4l4 4-4 4-4-4 4-4z" fill="currentColor"></path></svg>
                        <p>Funding</p>
                    </div></NavLink>

                    <NavLink to='/wallet-earn' style={{textDecoration: 'none'}}>
                    <div className='fun-first fun-sec'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-19ss7aa"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.014 1a4.912 4.912 0 00-4.218 7.431 6.703 6.703 0 00-4.006 5.717H2v1.786h1.915a6.704 6.704 0 002.758 4.155l-1.648 1.648L6.287 23l2.07-2.07a6.694 6.694 0 002.118.342h5.304l1.591 1.591 1.263-1.262-1.34-1.34 4.35-4.35v-2.687h-1.934a6.126 6.126 0 00-1.398-2.915l2.435-2.435h-4.228A4.912 4.912 0 0012.014 1zM8.888 5.912a3.126 3.126 0 116.251 0 3.126 3.126 0 01-6.251 0zm1.786 0l1.34-1.34 1.34 1.34-1.34 1.34-1.34-1.34zm-.926 7.322h4.53v-1.786h-4.53v1.786z" fill="currentColor"></path></svg>
                        <p>Earn</p>
                    </div></NavLink>

                    {/* <div className='fun-sec'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-19ss7aa"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 8.5A4.5 4.5 0 018.5 4H20v16H8.5A4.5 4.5 0 014 15.5v-7zM8.5 7H17v3H8.5a1.5 1.5 0 110-3zm4.5 6h4v4h-4v-4z" fill="currentColor"></path></svg>
                        <p>Binance TR</p>
                    </div> */}

                    {/* <div className='fun-sec'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-19ss7aa"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 8.5A4.5 4.5 0 018.5 4H20v16H8.5A4.5 4.5 0 014 15.5v-7zM8.5 7H17v3H8.5a1.5 1.5 0 110-3zm4.5 6h4v4h-4v-4z" fill="currentColor"></path></svg>
                        <p>Tokocrypto</p>
                    </div> */}

                    {/* <div className='fun-sec'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-19ss7aa"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 8.5A4.5 4.5 0 018.5 4H20v16H8.5A4.5 4.5 0 014 15.5v-7zM8.5 7H17v3H8.5a1.5 1.5 0 110-3zm4.5 6h4v4h-4v-4z" fill="currentColor"></path></svg>
                        <p>Pexpay</p>
                    </div> */}

                    <hr className='waoverview-hr'/>

                    <NavLink to='/wallet-transaction-history' style={{textDecoration: 'none'}}>
                    <div className='fun-first fun-sec'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-19ss7aa"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.597 16.594A6.48 6.48 0 0112 18.498h-1.25v2.5H12a9 9 0 006.364-15.364 9 9 0 00-12.728 0l1.767 1.768a6.5 6.5 0 019.193 9.192zM13.25 8h-2.5v4.518l3.185 3.185 1.768-1.768-2.453-2.453V8zM5.627 9.568v1.2l-.092.006c-.767.062-1.371.29-1.783.662-.41.37-.639.891-.639 1.564 0 .684.24 1.223.676 1.642.438.421 1.08.726 1.889.925l.076.019v1.901l-.123-.029a3.94 3.94 0 01-.838-.305 2.512 2.512 0 01-.596-.4L3.14 17.935c.446.416 1.309.784 2.268.974l.08.016v1.277h1.578v-1.207l.086-.011c.796-.11 1.357-.448 1.718-.891a2.457 2.457 0 00.532-1.562c0-.669-.246-1.177-.668-1.568-.426-.394-1.037-.675-1.772-.874l-.074-.02v-1.802l.125.033c.406.106.816.31 1.099.558l1.035-1.136c-.43-.4-1.102-.697-1.875-.861l-.08-.017V9.568H5.628zm.19 4.272l-.137-.056c-.221-.09-.381-.185-.485-.303a.599.599 0 01-.149-.418c0-.133.028-.298.126-.448.1-.152.265-.279.522-.34l.123-.03v1.595zm1.057 3.678v-1.732l.147.08a.934.934 0 01.376.346.936.936 0 01.122.483.9.9 0 01-.096.429.744.744 0 01-.414.343l-.135.05z" fill="currentColor"></path></svg> 
                        <p className='trans-width'>Transaction History</p>
                    </div></NavLink>


                    <NavLink to='/wallet-account-statement' style={{textDecoration: 'none'}}>
                    <div className='fun-first fun-sec'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-19ss7aa"><path d="M11.336 8.577c-.769.15-1.1.558-1.1 1.146 0 .573.331.874 1.1 1.086V8.577zM12.678 15.393c.71-.196 1.041-.663 1.041-1.236 0-.438-.18-.89-1.04-1.147v2.383z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12 21a9 9 0 100-18 9 9 0 000 18zm.86-3.948V18.5h-1.72v-1.387c-1.523-.136-2.533-.755-3.287-1.584l1.357-1.237c.573.604 1.282 1.01 2.126 1.131V12.71c-2.262-.468-3.182-1.463-3.182-2.926 0-1.583 1.04-2.64 2.986-2.865V5.5h1.72v1.418c1.206.135 2.096.603 2.76 1.357l-1.373 1.237c-.362-.408-.845-.74-1.569-.905v2.503c2.112.483 3.122 1.342 3.122 2.88 0 1.479-.935 2.73-2.94 3.062z" fill="currentColor"></path></svg>
                        <p className='account-width'>Account Statement</p>
                    </div></NavLink>

                    <NavLink to='/wallet-verification' style={{textDecoration: 'none'}}>
                    <div className='fun-first fun-sec'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="css-19ss7aa"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 3v18h14V7l-4-4H5zm3 6.5h8V12H8V9.5zm0 5h8V17H8v-2.5z" fill="currentColor"></path></svg>
                        <p>Verification</p>
                    </div></NavLink>

            </div>
        </>
    );
}

export default Wasidebar;