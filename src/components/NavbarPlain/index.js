import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../../App.css";

const NavbarLogin = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top d-none d-sm-block" style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.15)" }}>
                <div className="container">
                    <a className="navbar-brand me-auto" id="logo" href="/">&nbsp;</a>
                </div>
            </nav>
  );
};
export default NavbarLogin;
