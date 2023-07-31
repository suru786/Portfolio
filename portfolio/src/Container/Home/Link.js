import React from 'react'
import Typical from 'react-typical';
export default function Link() {
  return (
    <div className='links-container'>
        <div className='links-parent'>
            <div className='links-details'>
                <div className='col'>
                    <a href='#'>
                    <i class="fa-brands fa-facebook"></i>
                    </a>
                    <a href='#'>
                    <i class="fa-brands fa-github"></i>
                    </a>
                    <a href='#'>
                    <i class="fa-brands fa-linkedin"></i>
                    </a>
                    <a href='#'>
                    <i class="fa-brands fa-twitter"></i>
                    </a>
                </div>
                <div className='details-name'>
                    <span className='main-text'>
                        Hello, this is <span className='highlighted-text'>Suraiya</span>
                    </span>
                </div>
                <div className='role-details'>
                    <span className='main-text'>
                     <h1>
                        {" "}
                        <Typical
                        loop={Infinity}
                        steps={[
                            'Web Developer ',
                            1000,
                            'Passionate Designer ',
                            1000,
                            'Coder ',
                            1000,
                            'React/React Native Developer ',
                            1000,
                            'Problem Solver',
                            1000,
                        ]}
                    />
                    </h1>
                     </span>
                </div>
            </div>
        </div>
    </div>
  )
}
