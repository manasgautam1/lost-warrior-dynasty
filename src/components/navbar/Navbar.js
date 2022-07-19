import React from 'react'
import logo from './logo.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-xxl px-xxl-0 px-3">
            <a className="navbar-brand logo" href="#">
              <img src={logo} alt="" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item me-lg-3 mb-lg-2 mb-1">
                  <a className="nav-link active text-uppercase" onClick={() => window.location.replace("/#roadmap")} aria-current="page">Roadmap</a>
                </li>
                <li className="nav-item me-lg-3 mb-lg-2 mb-1">
                  <a className="nav-link active text-uppercase" onClick={() => window.location.replace("/#perks")}>Perks of ownership</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active text-uppercase" onClick={() => window.location.replace("/#contact")}>Follow us</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar