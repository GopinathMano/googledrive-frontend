import {Link} from "react-router-dom";
import { useState } from "react";
export default function Forgot(){
    let [email,setEmail]=useState("");
    let handleEvent=async()=>{
        console.log(email);
    }
    return <>
        <div className="container">
            <div className="wrapper">
                <div class="icon">
                    <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" id="icon" alt="User Icon"></img>
                    <h3>Verify Email</h3><p>to reset the password</p>
                </div>
                <form className="text-area-wrapper">
                    <input type="email" className="text-area" name="login" placeholder="Email Here" required={true} onChange={(e)=>setEmail(e.target.value)}></input>
                    <button class="btn btn-primary login" onClick={handleEvent}>Verify Email</button>
                </form>
        </div>
        </div>
    </>
}