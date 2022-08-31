import React, { useEffect, useState, useRef } from "react";
import { Link, navigate } from "@reach/router";
import { getCurrentUser } from "../../constant/constant";
import "./Header.scss";

const HeaderLink = ({ path, label }) => {
  return (
    <div
      className="header-link"
      onClick={() => {
        if (label === "Logout") localStorage.removeItem("current_user");
      }}
    >
      <Link style={{ fontSize: "17px" }} to={path}>
        {label}
        <span className="lines"></span>
      </Link>
    </div>
  );
};

console.log(getCurrentUser());

const Header = ({}) => {
  return (
    <header>
      <div className="desktop-header">
        <div className="header-logo">
          <div
            className="header-logo"
            onClick={() => {
              navigate("/");
            }}
          >
            Netsoc
          </div>
        </div>

        <div style={{ fontSize: "30px" }}>
          {getCurrentUser() && getCurrentUser().ID
            ? `Welcome ${getCurrentUser().NAME}`
            : ""}
        </div>
        <div className="header-nav">
          <HeaderLink path="/explore" label="Explore" />
          <HeaderLink path="/documentation" label="API Documentation" />
          {getCurrentUser() && getCurrentUser().ID ? (
            <HeaderLink path="/" label="Logout" />
          ) : (
            <HeaderLink path="/" label="Sign In" />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
