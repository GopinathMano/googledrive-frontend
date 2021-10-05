import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
export default function Login() {
  let [email, setEmail] = useState("");
  let [password, setPasword] = useState("");
 
  let handleEvent = async () => {
    await axios
      .post("http://localhost:4000/users/login", { email, password })
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
  };
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="icon">
            <img
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
              id="icon"
              alt="User Icon"
            ></img>
            <h3>Sigin in</h3>
            <p>
              to continue to <b>Google Drive C</b>
            </p>
          </div>
          <form className="text-area-wrapper">
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
            <button className="btn btn-primary login" onClick={handleEvent}>
              Log in
            </button>
          </form>
          <div className="links">
            <Link to="/forgotpassword">
              <a>Forgot Password?</a>
            </Link>
            <br></br>
            <Link to="/register">
              <a>Create new Account?</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
