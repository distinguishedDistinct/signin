import "./Signup.css";
import Input from "./Input";
import PhoneInputComponent from "./PhoneInputComponent";
import Cnic from "./Cnic";
import CountrySelect from "./country";
import logo from "../assets/logo-white.png";

export const Signup = () => {
  return (
    <>
      <div className="container">
        <div className="welcome-container">
          <img src={logo} width="110px" alt="logo" />
          <h1>
            Welcome To <br />
            Higher Education Commission
          </h1>
        </div>
        <div className="signup-form">
          <div className="form-content">
            <div className="form-heading">
              <h1>Sign Up</h1>
              <br />
              <p>Higher Education Comission - E Services Portal</p>
            </div>
            <div className="form-info">
              <Input
                placeholder="First name"
                type="text"
                labels="Please Enter First Name"
              />
              <Input
                placeholder="Last Name"
                type="text"
                labels="Please Enter Last Name"
              />
            </div>
            <div className="form-info">
              <CountrySelect />
              <Cnic />
            </div>
            <div className="form-info">
              <Input
                placeholder="password"
                type="password"
                labels="Enter Password should be atleast 8 characters long,alphanumeric and contain atleast one capital letter."
              />
            </div>
            <div className="form-info">
              <Input
                placeholder="confirm password"
                type="password"
                labels="Please Enter password for confirmation"
              />
            </div>
            <div className="form-info">
              <PhoneInputComponent />
              <Input
                placeholder="Email"
                type="email"
                labels="Please Enter Email in correct format e.g: username@provider.com"
              />
            </div>
            <div className="form-info">
              <input type="submit" name="submit" className="submit-btn" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
