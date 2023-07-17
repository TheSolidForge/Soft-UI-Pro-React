import React from 'react'

import './footer.css'

const Footer = (props) => {
  return (
    <footer className="footer-footer">
      <div className="footer-container">
        <div className="footer-container1">
          <span className="footer-text">The SolidForge </span>
          <span>Copyright © 2023 by The SolidForge</span>
        </div>
        <div className="footer-container2">
          <div className="footer-container3">
            <span className="footer-text02 Large">Company</span>
            <span className="footer-text03 Large">About Us</span>
            <span className="footer-text04 Large">Press</span>
          </div>
          <div className="footer-container4">
            <span className="footer-text05 Large">Pages</span>
            <span className="footer-text06 Large">Login</span>
            <span className="footer-text07 Large">About</span>
          </div>
          <div className="footer-container5">
            <span className="footer-text08 Large">Products</span>
            <span className="footer-text09">
              <span className="Large footer-text10">Scratch</span>
              <br></br>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
