import "./style.css";

import LoginForm from "../../components/home/login/LoginForm";
import Footer from "../../components/home/login/Footer";
import RegisterForm from "../../components/home/login/RegisterForm";

export default function Login() {
  
  return (
    <div className="login">
      <div className="login_wrapper">
        <LoginForm />
        <RegisterForm />
        <Footer />
      </div>
    </div>
  );
}
