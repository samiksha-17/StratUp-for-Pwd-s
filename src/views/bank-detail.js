import React from 'react'

import { Helmet } from 'react-helmet'

import Article1 from '../components/article1'
import './bank-detail.css'

const BankDetail = (props) => {
  return (
    <div className="bank-detail-container">
      <Helmet>
        <title>BankDetail - Traveler template</title>
        <meta property="og:title" content="BankDetail - Traveler template" />
      </Helmet>
      <div className="bank-detail-container1">
        <div className="bank-detail-heading">
          <h2 className="bank-detail-header">
            Connect with Our Investor Network
          </h2>
          <p className="bank-detail-caption"></p>
        </div>
        <div className="bank-detail-row">
          <Article1
            image="/Articles/download%20(1)-1500w.jpg"
            header="TATA Technology"
            rootClassName="article1-root-class-name16"
          ></Article1>
          <Article1
            image="/external/articles-21-1500w-200h.png"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            rootClassName="article1-root-class-name17"
          ></Article1>
          <Article1
            image="/external/articles-21-1500w-200h.png"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            rootClassName="article1-root-class-name18"
          ></Article1>
        </div>
        <div className="bank-detail-container2">
          <div className="bank-detail-heading1"></div>
          <div className="bank-detail-row1">
            <Article1
              image="/external/articles-11-1500w-200h.png"
              header="TATA Technology"
              rootClassName="article1-root-class-name19"
            ></Article1>
            <Article1
              image="/external/articles-21-1500w-200h.png"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
              rootClassName="article1-root-class-name20"
            ></Article1>
            <Article1
              image="/external/articles-11-1500w-200h.png"
              header="TATA Technology"
              rootClassName="article1-root-class-name21"
            ></Article1>
          </div>
          <div className="bank-detail-row2"></div>
          <div className="bank-detail-row3">
            <Article1
              image="/external/articles-11-1500w-200h.png"
              header="TATA Technology"
              rootClassName="article1-root-class-name22"
            ></Article1>
            <Article1
              image="/external/articles-21-1500w-200h.png"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
              rootClassName="article1-root-class-name23"
            ></Article1>
            <Article1
              image="/external/articles-21-1500w-200h.png"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
              rootClassName="article1-root-class-name24"
            ></Article1>
          </div>
          <div className="bank-detail-row4">
            <Article1
              image="/external/articles-11-1500w-200h.png"
              header="TATA Technology"
              rootClassName="article1-root-class-name25"
            ></Article1>
            <Article1
              image="/external/articles-11-1500w-200h.png"
              header="TATA Technology"
              rootClassName="article1-root-class-name26"
            ></Article1>
            <Article1
              image="/external/articles-21-1500w-200h.png"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
              rootClassName="article1-root-class-name27"
            ></Article1>
          </div>
          <div className="bank-detail-row5"></div>
        </div>
      </div>
    </div>
  )
}

export default BankDetail
