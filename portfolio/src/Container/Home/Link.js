import React from 'react'

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
            </div>
            <div className='detais-name'>
                <span className='main-text'>
                    {" "}
                    Hello, this is <span className='highlighted-text'> Suraiya </span>
                </span>
            </div>
        </div>
    </div>
  )
}
