import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import basket from "../../Assets/Icons/basket.png";
import "./style.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const productsLength = useSelector((store) => store.users);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-lght bg-light">
        <div className="ms-lg container-fluid">
          <NavLink className="navbar-brand text-dark" to="/">
            Online shop
          </NavLink>
          <NavLink className="nav-link ms-lg" to="#" aria-disabled="true">
            <div
              style={{ height: "30px", width: "35px", marginRight: "25px" }}
              className="position-relative"
            >
              <img className="w-100 h-100 " src={basket} alt="" />
              <span className="product-count">
                {productsLength.realUser.products.length}
              </span>
            </div>
          </NavLink>
          <NavLink to={"/signup"}>
            <button className="btn btn-outline-success btn-info" type="submit">
              Sign Up
            </button>
          </NavLink>
          <button
            className="navbar-toggler border"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-danger"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
            </ul>
            <div className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search here someything . . . "
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
