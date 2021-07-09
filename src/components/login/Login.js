import React from 'react';
import { useHistory } from "react-router";

function Login(props) {
  const {stateLogin, userInfo, onClickLogin, handleLoginSubmit } = props;
  const history = useHistory();

  let handleSubmit = (e) => {
    e.preventDefault();
    if(stateLogin){
      history.push({
        pathname:  "/OnSubmit",
        state: {
        } 
      });
    }
  }

  let handLogin = () => {
    onClickLogin();
  }

  return (
    <div className="container h-100">
    <div className="d-flex justify-content-center h-100">
    <div className="user_card">
    <div className="d-flex justify-content-center">
    <div className="brand_logo_container">
    <img src={`${process.env.PUBLIC_URL}/logo.png`} className="brand_logo" alt="Logo" />
    </div>
    </div>
    <div className="d-flex justify-content-center form_container">
    <form onSubmit={handleSubmit}>
    <div className="input-group justify-content-center mb-2">
      <strong>Đăng nhập hệ thống</strong>
    </div>
    <div className="input-group">
    <div className="input-group-append">
    </div>
    <input  type="text" 
    className="form-control input_user" 
    value={userInfo.username} 
    onChange={handleLoginSubmit} 
    name="username" 
    placeholder="Tên đăng nhập" />
    </div>
    <div className="input-group mb-2">
    <input  type="password" 
    className="form-control input_pass"
    value={userInfo.password} 
    onChange={handleLoginSubmit} 
    name="password"
    placeholder="Mật khẩu" />
    </div>
    <div className="d-flex justify-content-center login_container">
    <button type="submit" 
    name="button" 
    className="btn btn-outline-danger btn-block"
    onClick={handLogin}>Đăng nhập
    </button>
    </div>
    </form>
    </div>
    <div className="mt-4">
    <div className="d-flex justify-content-center links">
    </div>
    </div>
    </div>
    </div>
    </div>
    )

}

export default Login;