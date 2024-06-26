import React, { useState } from 'react';

import Logout from './logout';
import { Helmet } from 'react-helmet'

import FeatureCard2 from '../components/feature-card2'
import './schemes.css'

const Schemes = (props) => {
  const [isLoggedIn] = useState(true);
  return (
    <div className="schemes-container">
      <Helmet>
        <title>Schemes</title>
        <meta property="og:title" content="Schemes - Traveler template" />
      </Helmet>
      <header data-thq="thq-navbar" className="schemes-navbar">
        <img alt="logo" src="/logo1-200h.png" className="schemes-logo bigger-logo" /> {/* Added 'bigger-logo' class */}
        <div data-thq="thq-burger-menu" className="schemes-menu">
          <div className="schemes-links">
            <a
              href="https://play.teleporthq.io/projects/traveler-template-s18dgh/preview/169d3baa-137e-4e84-90d8-03cba6bd07c3"
              target="_blank"
              rel="noreferrer noopener"
              className="schemes-link link"
            >
              Business
            </a>
            <a
              href="http://localhost:3000/investor"
              target="_blank"
              rel="noreferrer noopener"
              className="schemes-text link"
            >
              Investors
            </a>
            <a
              href="http://localhost:3000/bank"
              target="_blank"
              rel="noreferrer noopener"
              className="schemes-link1 link"
            >
              Loans
            </a>
            <a
              href="http://localhost:3000/schemes"
              target="_blank"
              rel="noreferrer noopener"
              className="schemes-link2 link"
            >
              Schemes
            </a>
            {isLoggedIn ? (
              <div style={{ color: 'white' }}>
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
          <button className="schemes-hamburger button">
            <svg viewBox="0 0 1024 1024" className="schemes-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </button>
        </div>
      </header>
      <section className="schemes-faq">
        <div id="faqs" className="schemes-content">
          <div className="schemes-heading">
            <h2 className="schemes-header">Government schemes</h2>
            <p className="schemes-caption">
              A Guide to Government Schemes for PWD Entrepreneurs
            </p>
          </div>
          <div className="schemes-accordion">
            <div
              data-role="accordion-container"
              className="accordion schemes-element"
            >
              <div className="schemes-content1">
                <span className="schemes-header1">
                Startup Boost Program

                </span>
                <span
                  data-role="accordion-content"
                  className="schemes-description"
                >
                  Jumpstart your entrepreneurial journey with our Startup Boost Program. Access funding, mentorship, and resources tailored to PWDs to turn your business ideas into reality.

                </span>
              </div>
              <div className="schemes-icon-container">
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-closed"
                  className="schemes-icon10"
                >
                  <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-open"
                  className="schemes-icon12"
                >
                  <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="schemes-element1 accordion"
            >
              <div className="schemes-content2">
                <span className="schemes-header2">
                Skill Development Grants

                </span>
                <span
                  data-role="accordion-content"
                  className="schemes-description1"
                >
                  Enhance your skills and capabilities with Skill Development Grants. Receive financial support for training programs, workshops, and certifications to excel in your chosen industry.

                </span>
              </div>
              <div className="schemes-icon-container1">
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-closed"
                  className="schemes-icon14"
                >
                  <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-open"
                  className="schemes-icon16"
                >
                  <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="schemes-element2 accordion"
            >
              <div className="schemes-content3">
                <span className="schemes-header3">
                Accessibility Innovation Fund

                </span>
                <span
                  data-role="accordion-content"
                  className="schemes-description2"
                >
                  Drive innovation in accessibility with the Accessibility Innovation Fund. Get funding for projects that create inclusive solutions, products, and services benefiting PWDs and the community.

                </span>
              </div>
              <div className="schemes-icon-container2">
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-closed"
                  className="schemes-icon18"
                >
                  <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-open"
                  className="schemes-icon20"
                >
                  <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="schemes-element3 accordion"
            >
              <div className="schemes-content4">
                <span className="schemes-header4">
                Empowerment Scholarships

                </span>
                <span
                  data-role="accordion-content"
                  className="schemes-description3"
                >
                 Fulfill your educational aspirations with Empowerment Scholarships. Receive financial aid for higher education, specialized courses, and skill-building programs to empower yourself for a brighter future.

                </span>
              </div>
              <div className="schemes-icon-container3">
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-closed"
                  className="schemes-icon22"
                >
                  <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-open"
                  className="schemes-icon24"
                >
                  <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="schemes-element4 accordion"
            >
              <div className="schemes-content5">
                <span className="schemes-header5">
                Skill Enhancement
                </span>
                <span
                  data-role="accordion-content"
                  className="schemes-description4"
                >
                Enable PWDs to enhance their skills and capabilities through Skill Development Grants, empowering them to excel in their chosen fields and contribute effectively to the workforce.

                </span>
              </div>
              <div className="schemes-icon-container4">
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-closed"
                  className="schemes-icon26"
                >
                  <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-open"
                  className="schemes-icon28"
                >
                  <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
            </div>
            <div className="schemes-features">
              <h1 className="schemes-text6">All these impressive features</h1>
              <div className="schemes-container3">
                <FeatureCard2 rootClassName="rootClassName"></FeatureCard2>
                <FeatureCard2 rootClassName="rootClassName3"></FeatureCard2>
                <FeatureCard2 rootClassName="rootClassName2"></FeatureCard2>
                <FeatureCard2 rootClassName="rootClassName1"></FeatureCard2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Schemes
