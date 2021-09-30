import React from "react";
import { NavLink } from "react-router-dom";

const TopLinks = () => {
    return (
        <div className="TopListA">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/users">GetUsers</NavLink>
          <NavLink to="/posts">GetPosts</NavLink>
          <NavLink to="/input">sendMessage</NavLink>
        </div>
    )
};
export default TopLinks;