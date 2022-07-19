import React from 'react'

const Footer = () => {
  return (
    <div id='contact' className='footer py-lg-5 py-4'>
        <p className="connect-wallet text-center mb-lg-5 mb-4">
            <button>Connect Wallet</button>
        </p>
        <footer className='footer-content'>
            <div className="container-xxl px-xxl-0 px-3">
            <div className="row align-items-center">
                <div className="col-lg-4 col-7">
                    Copyright by Vanilla Checks
                </div>
                <div className="col-lg-4 col-4 py-4">
                    <div className="row text-lg-center text-right">
                        <div className="col">
                            <i className="fa-brands fa-instagram"></i>
                        </div>
                        <div className="col">
                            <i className="fa-brands fa-twitter"></i>
                        </div>
                        <div className="col">
                            <i className="fa-brands fa-youtube"></i>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer