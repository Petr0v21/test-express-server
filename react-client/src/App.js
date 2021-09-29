import React from "react";
import SendInput from "./SendInput";
import UserPage from "./UsersPage";
import PostsPage from "./PostsPage";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import "./App.css";


const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="TopListA">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/users">GetUsers</NavLink>
          <NavLink to="/posts">DetPosts</NavLink>
          <NavLink to="/input">input</NavLink>
        </div>
        <Route path='/users' component={UserPage}/>
        <Route path='/posts' component={PostsPage}/>
        <Route path='/input' component={SendInput}/>
      </div>
    </BrowserRouter>
  );
};

export default App;
