import React from 'react'
import bg from './showcase-bg.png';
import phaseImg from './phase-1.png';

const RoadmapBottom = () => {
  return (
    <div className='rm-bottom' >
        <div className="rm-bottom-bg"   style={{
                height:'100%',
                background: `url(${bg}) no-repeat center center/cover`,
            }} >
            <div className="overlay py-5">
                <div className="container">
                    <div className="rdmap-phases">
                        <div className='rdmap-phase-1 my-5'>
                            <img className="img-phase-1" src={phaseImg} alt="" />
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-7 col-9">
                                    <h2 className='mb-3'>Phase 1</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor didunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                </div>
                                <div className='col-lg-6 col-md-5 col-3 dashes'>
                                    <div className='ver ver-1' />
                                    <div className='hor hor-1' />
                                </div>
                            </div>
                        </div>
                        <div className='rdmap-phase-2 my-5'>
                            <div className="row align-items-center">
                                <div className='col-lg-6 col-md-5 col-3 dashes'>
                                    <div className='ver ver-2' />
                                    <div className='hor hor-2' />
                                </div>
                                <div className="col-lg-6 col-md-7 col-9">
                                    <h2 className='mb-3'>Phase 2</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor didunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                </div>
                            </div>
                        </div>
                        <div className='rdmap-phase-3 my-5'>
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-7 col-9">
                                    <h2 className='mb-3'>Phase 3</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor didunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                </div>
                                <div className='col-lg-6 col-md-5 col-3 dashes'>
                                    <div className='ver ver-3' />
                                    <div className='hor hor-3' />
                                </div>
                            </div>
                        </div>
                        <div className='rdmap-phase-4 my-5'>
                            <div className="row align-items-center">
                                <div className='col-lg-6 col-md-5 col-3 dashes'>
                                </div>
                                <div className="col-lg-6 col-md-7 col-9">
                                    <h2 className='mb-3'>Phase 4</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor didunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RoadmapBottom