import React, { useState } from 'react';
import { Route, NavLink, BrowserRouter, Switch, Redirect } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Home from "./components/home/Home";
import Login from './components/login/Login';
import ItemLogIn from './components/login/ItemLogIn';
import ItemLogOut from './components/logout/ItemLogOut';
import ItemSetting from './components/setting/ItemSetting';
import ItemPageSetting from './components/setting/ItemPageSetting';
import ItemPageCustomer from './components/customer/ItemPageCustomer';
import ItemCustomer from './components/customer/ItemCustomer';
import ItemReport from './components/report/ItemReport';
import ItemPageReport from './components/report/ItemPageReport';
import  data  from  './data/data.json';

function App(props) {
  let [userInfo, setUserInfo] = useState({
    username: '',
    password: ''
  })
  let [stateLogin, setStateLogin] = useState(false);
  let handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  }
  let handleLogin = () => {
    // user
    for(var item of data.users){
      if(userInfo.username === item.username & userInfo.password === item.password){
        setStateLogin(true);
        localStorage.setItem('login', !stateLogin);
        let user = {
          "code" : item.code,
          "name" : item.name,
          'username' : item.username,
          'password' : item.password,
        }
        localStorage.setItem('userInfo', JSON.stringify(user));
      }else{
        setUserInfo({
          username : "",
          password : ""
        })
      }
    }
    // customer
  }

  let itemCustomer,
  itemLogOut,
  itemLogIn,
  itemSetting,
  itemPageCustomer,
  itemPageSetting,
  itemReport,
  itemPageReport = '';
  let isLogin = localStorage.getItem('login');

  let user = localStorage.getItem('userInfo');

  let handleLogOut = () => {
    localStorage.removeItem('login');
    window.location = '/';
  }

  if(isLogin){
    itemCustomer = <ItemCustomer />;
    itemLogOut = <ItemLogOut onClickLogOut={handleLogOut}/>;
    itemSetting = <ItemSetting />
    itemPageCustomer = <ItemPageCustomer  user={user}/>;
    itemPageSetting = <ItemPageSetting />;
    itemReport = <ItemReport />;
    itemPageReport = <ItemPageReport />

  }else{
    itemLogIn = <ItemLogIn />
    if((window.location.href ==="http://localhost:3000/customers") || 
      (window.location.href === "http://localhost:3000/setting") || 
      (window.location.href === "http://localhost:3000/report")){
      window.location = '/login';
  }
}

return (
  <BrowserRouter>
  <div>
  <ul className="header">
  <li><NavLink to="/"><FontAwesomeIcon icon={faHome}/> Trang chủ</NavLink></li>
  {itemCustomer}
  {itemSetting}
  {itemReport}
  {itemLogIn}
  {itemLogOut}
  </ul>
  <div className="content">
  <Switch>
  <Route exact path="/" component={Home} />
  <Route path="/login">
  <Login 
  userInfo={userInfo} 
  onClickLogin={handleLogin} 
  handleLoginSubmit={handleChange}
  stateLogin={stateLogin} />
  </Route>
  <Route path="/setting">
  {itemPageSetting}
  </Route>
  <Route path="/report">
  {itemPageReport}
  </Route>
  <Route path="/customers">
  {itemPageCustomer}
  </Route>
  <Redirect to="/" />
  </Switch>
  </div>
  </div>
  </BrowserRouter >
  );
}

export default App;
