import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Loginpage.css";

const loginpage = ({ login, facade }) => {
  const init = { username: "", password: "" };
  const [loginCredentials, setLoginCredentials] = useState(init);

  const navigate = useNavigate();

  const performLogin = (evt) => {
    evt.preventDefault();
    login(loginCredentials.username, loginCredentials.password);
    if (facade.loggedIn) navigate("/");
  };

  const onChange = (evt) => {
    setLoginCredentials({
      ...loginCredentials,
      [evt.target.id]: evt.target.value,
    });
  };

  return (
    <div className="login-box">
    <div className="login-wrapper">
      <h2>Login</h2>
      <form onChange={onChange} className="add-form">
        <div className="form-control">
          <input placeholder="User Name" id="username" />
        </div>
        <div className="form-control">
          <input type="password" placeholder="Password" id="password" />
        </div>
        <button onClick={performLogin} className="form-btn">
          Login
        </button>
      </form>
    </div>
    </div>
  );
};

export default loginpage;
