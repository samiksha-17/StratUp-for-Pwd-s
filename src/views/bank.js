import React, { useState } from 'react';

import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'
import Logout from './logout';
import Location from '../components/location'
import './bank.css'

const Bank = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className="bank-container">
      <Helmet>
        <title>Bank</title>
        <meta property="og:title" content="Bank - Traveler template" />
      </Helmet>
      <header data-thq="thq-navbar" className="bank-navbar">
        <img alt="logo" src="/logo1-200h.png" className="bank-logo" />
        <div data-thq="thq-burger-menu" className="bank-menu">
          <div className="bank-links">
            <a
              href="https://play.teleporthq.io/projects/traveler-template-s18dgh/preview/169d3baa-137e-4e84-90d8-03cba6bd07c3"
              target="_blank"
              rel="noreferrer noopener"
              className="bank-link link"
            >
              Business
            </a>
            <a
              href="http://localhost:3000/investor"
              target="_blank"
              rel="noreferrer noopener"
              className="bank-text link"
            >
              Investors
            </a>
            <a
              href="http://localhost:3000/bank"
              target="_blank"
              rel="noreferrer noopener"
              className="bank-link1 link"
            >
              Loans
            </a>
            <a
              href="http://localhost:3000/schemes"
              target="_blank"
              rel="noreferrer noopener"
              className="bank-link2 link"
            >
              Schemes
            </a>
            {isLoggedIn ? (
  <div style={{ color: 'white' }}> {/* Apply inline style */}
    <Logout />
  </div>
) : (
  <div>
    <a href="http://localhost:3000/register" className="home-link03 link">
      Login
    </a>
  </div>
)}

          </div>
          <button className="bank-hamburger button">
            <svg viewBox="0 0 1024 1024" className="bank-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </button>
        </div>
        
      </header>
      <section id="how-it-works" className="bank-highlights">
        <h2 className="bank-header">
          Bank Loans Funding Dreams, Transforming Lives
        </h2>
        <div className="bank-highlight">
          <div className="bank-content">
            <div className="bank-heading">
              <h2 className="bank-header1">
                Fueling Your Entrepreneurial Dreams
              </h2>
              <p className="bank-caption">
                Unlock your potential with EmpowerLoan – where dreams meet
                opportunity. Our inclusive bank loans are tailored to empower
                PWD entrepreneurs, providing the financial support
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <button className="button-arrow button">
              <span className="bank-text06">Read more</span>
              <span className="bank-text07">&gt;</span>
            </button>
          </div>
          <div className="bank-image">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fGJhbmt8ZW58MHx8fHwxNzA5OTE1NzU5fDA&amp;ixlib=rb-4.0.3&amp;h=1700"
              className="bank-image1"
            />
          </div>
        </div>
        <div className="bank-highlight1">
          <div className="bank-image2">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1488998527040-85054a85150e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHxiYW5rfGVufDB8fHx8MTcxMzE5MDczM3ww&amp;ixlib=rb-4.0.3&amp;h=600"
              className="bank-image3"
            />
          </div>
          <div className="bank-content1">
            <div className="bank-heading1">
              <h2 className="bank-header2">
                Bridging Dreams, Building Futures
              </h2>
              <p className="bank-caption1">
                Explore new horizons with InclusiveCapital. Our tailored bank
                loans break barriers, empowering PWD entrepreneurs to shape
                their destinies. Fuel your ambitions, transform your ideas into
                reality
              </p>
            </div>
            <button className="bank-find button">More Loans Details</button>
          </div>
        </div>
      </section>
      <section id="destinations" className="bank-destinations">
        <div className="bank-video-details">
          <div className="bank-heading2">
            <h2 className="bank-header3">
              PWD Entrepreneurs and Inclusive Loans
            </h2>
            <p className="bank-caption2">
              Watch How Inclusive Loans are Transforming Lives for PWD
              Entrepreneurs
            </p>
          </div>
            <div className="bank-video-wrapper">
            
            <iframe
              title="YouTube Video"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/RbYp-UOBQFY"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="bank-video"
            ></iframe>
          </div>
          </div>
        <div className="bank-steps">
          <h1 className="bank-text08">
            <span>Our Approach</span>
          </h1>
          <div className="bank-container3">
            <div className="bank-container4">
              <div className="bank-step">
                <h1 className="bank-text10">
                  <span>1</span>
                </h1>
                <h1 className="bank-text12">
                  <span></span>
                  <span>Special Loan</span>
                </h1>
                <span className="bank-text15">
                  <span></span>
                  <span></span>
                  <span>
                  Supporting PWD entrepreneurs with accessible financing.

                  </span>
                  <br></br>
                  <span></span>
                </span>
              </div>
              <div className="bank-step1">
                <h1 className="bank-text20">
                  <span>2</span>
                </h1>
                <h1 className="bank-text22">
                  <span>Financial Inclusion</span>
                </h1>
                <span className="bank-text24">
                  <span></span>
                  <span></span>
                  <span>
                  Empowering PWDs with tailored banking services
                  </span>
                  <br></br>
                  <span></span>
                </span>
              </div>
            </div>
            <div className="bank-container5">
              <div className="bank-step2">
                <h1 className="bank-text29">
                  <span>3</span>
                </h1>
                <h1 className="bank-text31">
                  <span>P</span>
                  <span>Accessibility Tools
</span>
                </h1>
                <span className="bank-text34">
                  <span></span>
                  <span></span>
                  <span>
                  Making banking easier for all abilities.
                  </span>
                  <br></br>
                  <span></span>
                </span>
              </div>
              <div className="bank-step3">
                <h1 className="bank-text39">
                  <span>4</span>
                </h1>
                <h1 className="bank-text41">
                  <span>Impact Stories</span>
                </h1>
                <span className="bank-text43">
                  <span></span>
                  <span></span>
                  <span>
                  Celebrating PWDs' success in business and finance.
                  </span>
                  <br></br>
                  <span></span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <p className="bank-caption3">
        Empowering PWDs with inclusive financial solutions. Explore specialized loans, accessible banking tools, and success stories of PWD entrepreneurs achieving their dreams.
        </p>
        <div className="bank-list">
          <Link to="/" className="bank-navlink">
            <div className="bank-location-wrapper">
              <Location
                location="Indian Bank"
                background="https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGJhbmt8ZW58MHx8fHwxNzEzMTkwNzMzfDA&amp;ixlib=rb-4.0.3&amp;h=400"
              ></Location>
            </div>
          </Link>
          <Link to="/" className="bank-navlink1">
            <div className="bank-location-wrapper1">
              <Location
                location="SBI Bank"
                background="https://images.unsplash.com/photo-1565347878219-552c839f1447?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM1fHxiYW5rfGVufDB8fHx8MTcxMzE5MDczNHww&amp;ixlib=rb-4.0.3&amp;h=400"
              ></Location>
            </div>
          </Link>
          <Link to="/" className="bank-navlink2">
            <div className="bank-location-wrapper2">
              <Location
                location="Bank"
                background="https://images.unsplash.com/photo-1617664837373-f107dd7be738?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDYxfHxiYW5rfGVufDB8fHx8MTcxMzE5MDc1Nnww&amp;ixlib=rb-4.0.3&amp;h=400"
              ></Location>
            </div>
          </Link>
          <Link to="/" className="bank-navlink3">
            <div className="bank-location-wrapper3">
              <Location
                location="Bank"
                background="https://images.unsplash.com/photo-1517561706694-342a492f7785?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDU5fHxiYW5rfGVufDB8fHx8MTcxMzE5MDc1Nnww&amp;ixlib=rb-4.0.3&amp;h=400"
              ></Location>
            </div>
          </Link>
        </div>
        <a
          href="https://play.teleporthq.io/projects/traveler-template-s18dgh/editor/TQ_wUggQmznLT"
          target="_blank"
          rel="noreferrer noopener"
          className="bank-find1 button"
        >
          Find More Banks
        </a>
      </section>
    </div>
  )
}

export default Bank
