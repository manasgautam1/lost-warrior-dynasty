import React from 'react'

const Footer = () => {
  return (
    <div id='contact' className='footer py-lg-5 py-4'>
        <p className="connect-wallet text-center mb-lg-5 mb-4">
            <button>Connect Wallet</button>
        </p>
        <footer className='footer-content'>
            <div className="container-xxl px-xxl-0 px-3 py-lg-3 py-2">
            <div className="d-flex justify-content-between align-items-center">
                <div className="">
                    Copyright by Vanilla Checks
                </div>
                <div className="">
                    <div className="row text-lg-center text-right">
                        <div className="col">
                            <i className="fa-brands fa-twitter"></i>
                        </div>
                        <div className="col">
                            <i class="fa-brands fa-discord"></i>
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