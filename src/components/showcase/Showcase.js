import React from 'react';

const Showcase = () => {
  return (
    <div className="showcase-section">
        <div className="showcase-content">
            <div className="container-xxl px-xxl-0 px-3">
                <div className="row align-items-center">
                    <div className="col-md-5">
                        <div className='left'>
                            <h1>LOST</h1>
                            <h1><span>WARRIOR</span></h1>
                            <h3>DYNASTY</h3>
                        </div>
                    </div>
                    <div className="col-md-5 offset-md-2">
                        <div className="right mt-md-0 mt-5">
                            <h4>ENTER THE MULTIMETAVERSE</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor didunt ut labore et dolore magna aliqua. Ut enim ad minim veniam </p>
                            <div className="buttons">
                                <button className='me-lg-5 me-4'>
                                    <a href="">BREED</a>
                                </button>
                                <button>
                                    <a href="">CONNECT</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Showcase