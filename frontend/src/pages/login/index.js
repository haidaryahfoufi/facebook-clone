import "./style.css";
import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import LoginInput from "../../components/home/inputs/logininput";
import { useState } from "react";
import * as Yup from "yup";
const loginInfos = {
  email: "",
  password: "",
};
export default function Login() {
  const [login, setLogin] = useState(loginInfos);
  const { email, password } = login;
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };
  const loginValidation = Yup.object({
    email: Yup.string()
      .required("Email address is required.")
      .email("Must be a valid email")
      .max(100),
    password: Yup.string().required("Password is required."),
  });
  return (
    <div className="login">
      <div className="login_wrapper">
        <div className="login_wrap">
          <div className="login_1">
            <img src="../../icons/facebook.svg" alt="" />
            <span>
              Facebook helps you connect and share with people in your life.
            </span>
          </div>
          <div className="login_2">
            <div className="login_2_wrap">
              <Formik
                enableReinitialize
                initialValues={{
                  email,
                  password,
                }}
                validationSchema={loginValidation}
              >
                {(formik) => (
                  <Form>
                    <LoginInput
                      type="text"
                      name="email"
                      placeholder="Email address or phone number"
                      onChange={handleLoginChange}
                    />
                    <LoginInput
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={handleLoginChange}
                      bottom
                    />
                    <button type="submit" className="blue_btn">
                      Log In
                    </button>
                  </Form>
                )}
              </Formik>
              <Link to="/forgot" className="forgot_password">
                Forgotten password?
              </Link>
              <div className="sign_splitter"></div>
              <button className="blue_btn open_signup">Create Account</button>
            </div>
            <Link to="/" className="sign_extra">
              <b>Create a page</b> for a celebrity, brand or business.
            </Link>
          </div>
        </div>
        <div className="login_register"></div>
        <div className="login_footer">
          <div className="login_footer_wrap">
            <Link to="/">English (US)</Link>
            <Link to="/">Français (Canada)</Link>
            <Link to="/">Español</Link>
            <Link to="/">中文(简体)</Link>
            <Link to="/">한국어</Link>
            <Link to="/">日本語</Link>
            <Link to="/">Português (Brasil)</Link>
            <Link to="/">Deutsch</Link>
            <Link to="/">Italiano</Link>
            <Link to="/">العربية</Link>
            <Link to="/">हिन्दी</Link>
            <Link to="/" className="footer_square">
              <i className="plus_icon"></i>
            </Link>
          </div>
          <div className="footer_splitter"></div>
          <div className="login_footer_wrap">
            <Link to="/">Sign Up</Link>
            <Link to="/">Log In</Link>
            <Link to="/">Messenger</Link>
            <Link to="/">Facebook Lite</Link>
            <Link to="/">Watch</Link>
            <Link to="/">Places</Link>
            <Link to="/">Games</Link>
            <Link to="/">Marketplace</Link>
            <Link to="/">Meta Play</Link>
            <Link to="/">Oculus</Link>
            <Link to="/">Portal</Link>
            <Link to="/">Instagram</Link>
            <Link to="/">Bulletin</Link>
            <Link to="/">Fundraisers</Link>
            <Link to="/">Services</Link>
            <Link to="/">Voting Information Center</Link>
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Groups</Link>
            <Link to="/">About</Link>
            <Link to="/">Create Ad</Link>
            <Link to="/">Create Page</Link>
            <Link to="/">Developers</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Cookies</Link>
            <Link to="/">
              AdChoices
              <i className="adChoices_icon"></i>
            </Link>
            <Link to="/">Terms</Link>
            <Link to="/">Help</Link>
            <Link to="/">Contact Uploading & Non-Users</Link>
          </div>
          <div className="login_footer_wrap">
            <Link to="/" style={{fontsize: "12px", marginTop: "10px"}}>
              Meta © 2023
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
