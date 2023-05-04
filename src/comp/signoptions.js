import React from "react";
import "./signopt.css";
import IMG1 from "../assets/IMG1.png"
import {Link} from "react-router-dom";



function Signopt() {

    return (
        <>
            <div>
                <div className="parent">
                    {/* <img src={IMG1} /> */}
                    <h2 className="welcomebin"> Welcome to Binance!</h2>
                    <Link to="/signup">
                    <div className="emailphonebox" ><h5 className="emailphonetext"> Sign Up with phone or email </h5></div>
                    </Link>
                    <h6>_____________________________  or  ____________________________</h6>
                    <div className="contwithgoogle">
                        <h5>Continue with Google</h5>
                    </div><br></br>
                    <div className="contwithgoogle">
                        <h5>Continue with Apple</h5>
                    </div>
                    <p>Already Registered?  <Link to="/signIn">Log In</Link></p>
                    <h6>Sign Up for an entity account</h6>
                </div>
            </div>

        </>
    )
}
export default Signopt