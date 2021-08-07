import React, { Fragment } from "react";
import ButtonCustom from "./ButtonCustom";
import './header.css';

const Header = () => {
  return (
    <Fragment>
        <div className="container" id="header">
            <nav className="navbar navbar-expand-lg navbar-light py-4">
                <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active ">
                            <a className="nav-link dropdown-toggle" href="#">
                                Product <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item mx-5">
                            <a className="nav-link" href="#">
                                Collections
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Gifts
                            </a>
                        </li>
                        <li className="nav-item mx-5">
                            <a className="nav-link" href="#">
                                Our magazine
                            </a>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="fas fa-search"></i>
                            </a>
                        </li>
                        <li className="nav-item mx-4">
                            <a className="nav-link" href="#">
                                Log In
                            </a>
                        </li>
                    </ul>
                    <ButtonCustom
                        text="SIGN UP"
                        color="white"
                        bg="#fd7f73"
                        border="none"
                    />
                </div>
            </nav>
        </div>
    </Fragment>
  );
};

export default Header;
