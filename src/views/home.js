import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import PrimaryPinkButton from '../components/primary-pink-button'
import FeatureCard from '../components/feature-card'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Soft UI Pro</title>
        <meta property="og:title" content="Soft UI Pro" />
      </Helmet>
      <div data-role="Header" className="home-header">
        <nav className="home-nav">
          <div className="home-container01">
            <Link to="/" className="home-navlink Large">
              The SolidForge
            </Link>
            <div className="home-menu">
              <Link to="/" className="home-navlink1 Large">
                Home
              </Link>
              <Link to="/profile" className="home-navlink2 Large">
                Scratch
              </Link>
              <Link to="/coming-soon" className="home-navlink3 Large">
                Buy Now
              </Link>
            </div>
            <div className="home-container02">
              <div className="home-container03">
                <PrimaryPinkButton button="buy now"></PrimaryPinkButton>
              </div>
              <div data-role="BurgerMenu" className="home-burger-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon">
                  <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
                </svg>
              </div>
            </div>
          </div>
        </nav>
        <div data-role="MobileMenu" className="home-mobile-menu">
          <div className="home-top">
            <Link to="/" className="home-navlink4 Large">
              Soft UI Design System
            </Link>
            <div data-role="CloseMobileMenu" className="home-close-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon2">
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
          </div>
          <div className="home-mid">
            <div className="home-menu1">
              <Link to="/" className="home-navlink5 Large">
                Home
              </Link>
              <Link to="/profile" className="home-navlink6 Large">
                Profile
              </Link>
              <Link to="/coming-soon" className="home-navlink7 Large">
                Coming Soon
              </Link>
            </div>
          </div>
          <div className="home-bot">
            <PrimaryPinkButton button="buy now"></PrimaryPinkButton>
          </div>
        </div>
      </div>
      <div className="home-hero">
        <div className="home-container04">
          <div className="home-card">
            <div className="home-container05">
              <h5 className="home-text HeadingThree">1. Own your Data</h5>
              <span>
                In a world where you are the product, use The SolidForge
                technology to create content that is uniquely yours
              </span>
            </div>
            <div className="home-container06">
              <h5 className="home-text02 HeadingThree">
                2. Follow company IT Requirements
              </h5>
              <span>
                Take advantage of the enterprise IT architecture allowing you to
                keep secure on your company or private cloud
              </span>
            </div>
            <div className="home-container07">
              <h5 className="home-text04 HeadingThree">
                3. Look at problems in a new way
              </h5>
              <span>
                Utilize all of 3D Space to organize, plan, and take notes like
                you would in person at a desk
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-hero1">
        <div className="home-container08">
          <img alt="image" src="/curved6-1500h.jpg" className="home-image" />
          <div className="home-card1">
            <h1 className="home-text06">3D Project Management</h1>
            <div className="home-container09">
              <div className="home-container10">
                <div className="home-container11"></div>
              </div>
              <FeatureCard rootClassName="feature-card-root-class-name"></FeatureCard>
              <div className="home-container12"></div>
              <FeatureCard
                text="Personal tools for a professional life"
                title="Fully Responsive"
                image_src="/credit%20card1.svg"
              ></FeatureCard>
            </div>
          </div>
        </div>
      </div>
      <img alt="image" src="/curved6-1500h.jpg" className="home-image1" />
      <section className="home-container13">
        <div className="home-container14">
          <h1 className="home-text07 HeadingOne">
            <span className="home-text08">From nothing to something</span>
          </h1>
          <span className="home-text09">
            <span className="home-text10">
              The highest status people in human history are those that asked
              for nothing and gave everything
            </span>
          </span>
        </div>
        <div className="home-container15">
          <div className="home-container16">
            <img
              alt="image"
              src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/laptop.jpg"
              className="home-image2"
            />
            <span className="home-text11 Small">
              <span className="home-text12">
                &quot;Over the span of the satellite record, Arctic sea ice has
                been declining significantly, while sea ice in the Antarctichas
                increased very slightly&quot;
              </span>
              <br></br>
              <span className="home-text14">-NOAA</span>
            </span>
            <div className="home-container17">
              <img
                alt="image"
                src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/coding.jpg"
                className="home-image3"
              />
            </div>
          </div>
          <div className="home-container18">
            <img
              alt="image"
              src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/tasks.jpg"
              className="home-image4"
            />
            <div className="home-container19">
              <h3 className="HeadingTwo">
                <span className="home-text16">
                  So what does the new record for the lowest level of winter ice
                  actually mean
                </span>
              </h3>
              <p>
                <br></br>
                <span className="home-text19">
                  The Arctic Ocean freezes every winter and much of the sea-ice
                  then thaws every summer, and that process will continue
                  whatever happens with climate change. Even if the Arctic
                  continues to be one of the fastest-warming regions of the
                  world, it will always be plunged into bitterly cold polar dark
                  every winter. And year-by-year, for all kinds of natural
                  reasons, there’s huge variety of the state of the ice.
                </span>
                <br></br>
                <br></br>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  )
}

export default Home
