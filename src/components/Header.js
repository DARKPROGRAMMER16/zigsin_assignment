import React, { Fragment } from "react";
import './header.css';

const Header = () => {
  return (
    <Fragment>
        <div className="container" id="header">
            <nav class="navbar navbar-expand-lg navbar-light py-4">
                <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active ">
                            <a class="nav-link dropdown-toggle" href="#">
                                Product <span class="sr-only">(current)</span>
                            </a>
                        </li>
                        <li class="nav-item mx-5">
                            <a class="nav-link" href="#">
                                Collections
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                Gifts
                            </a>
                        </li>
                        <li class="nav-item mx-5">
                            <a class="nav-link" href="#">
                                Our magazine
                            </a>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <i class="fas fa-search"></i>
                            </a>
                        </li>
                        <li class="nav-item mx-4">
                            <a class="nav-link" href="#">
                                Log In
                            </a>
                        </li>
                    </ul>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </div>
            </nav>
        </div>
    </Fragment>
  );
};

export default Header;
