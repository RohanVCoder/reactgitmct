import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../static/logo.svg'

function Header({company_name}) {
  return (
    <>
         <nav style={{"border-bottom":"3px solid white"}} className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">{company_name}</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/python/">Learn Python</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about/">About</Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Dropdown
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><Link className="dropdown-item" to="/python/">Learn Python</Link></li>
                      <li><Link className="dropdown-item" to="/about/">About</Link></li>
                      <li><Link className="dropdown-item" to="/privacy/">Privacy</Link></li>
                      <li><Link className="dropdown-item disabled" to="/learn_cpp/">Learn C++</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link disabled" to="#">Disabled</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <br/>
          <br/>
          <br/>
          <br/>
          <center style={{ display:"flex","align-items":"center", "justify-content": "center" }}>
            <img width={130} src={Logo} />&nbsp;&nbsp;
            <h6 className="main_title">MCT</h6>
          </center>
          <br/>
          </>
  );
}

export default Header;
