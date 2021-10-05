import { useState } from "react";
import { Link } from "react-router-dom";
export default function Register() {
  let [email, setEmail] = useState("");
  let [password, setPasword] = useState("");
  let [Fname, setFname] = useState("");
  let [Lname, setLname] = useState("");

  let handleEvent = async () => {
    const data = {
      email,
      password,
      Fname,
      Lname,
     
    };
  };
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div class="icon">
            <img
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
              id="icon"
              alt="User Icon"
            ></img>
            <h3>Sign up</h3>
            <p>
              to continue to <b>Google Drive C</b>
            </p>
          </div>
          <form className="text-area-wrapper">
            <input
              type="text"
              className="text-area"
              name="fname"
              placeholder="First Name"
              required={true}
              onChange={(e) => setFname(e.target.value)}
            ></input>
            <input
              type="text"
              className="text-area"
              name="lname"
              placeholder="Last Name"
              required={true}
              onChange={(e) => setLname(e.target.value)}
            ></input>
            <input
              type="email"
              className="text-area"
              name="login"
              placeholder="Email Here"
              required={true}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              type="password"
              className="text-area"
              name="login"
              placeholder="Password"
              required={true}
              onChange={(e) => setPasword(e.target.value)}
            ></input>
            <button class="btn btn-primary login" onClick={handleEvent}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
