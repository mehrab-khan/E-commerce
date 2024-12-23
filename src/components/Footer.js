import React from 'react'

export default function Footer() {
  return (
    <div>
      <>
  {/* Site footer */}
  <footer className="site-footer">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <h6>About</h6>
          <p className="text-justify">
             Welcome To Gadget Park you get here your every necessary accessories and products
             
           </p>
        </div>
        <div className="col-xs-6 col-md-3">
          <h6>Categories</h6>
          <ul className="footer-links">
            
            <li>
              <a href="/">
                Bluetooth
              </a>
            </li>
            <li>
              <a href="/">
                Headphone
              </a>
            </li>
            <li>
              <a href="/">
                Keyboard
              </a>
            </li>
            <li>
              <a href="/">Mouse</a>
            </li>
            <li>
              <a href="/">Monitor</a>
            </li>
          </ul>
        </div>
        
      </div>
      <hr />
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-sm-6 col-xs-12">
          <p className="copyright-text">
            Copyright © 2024 All Rights Reserved &nbsp;
            <a href="#">KMKCODE</a>.
          </p>
        </div>
         
      </div>
    </div>
  </footer>
</>

    </div>
  )
}
