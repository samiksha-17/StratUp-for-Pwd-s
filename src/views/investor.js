import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router-dom'; // Assuming you're using React Router
import Guide1 from '../components/guide1';
import Article1 from '../components/article1';
import Logout from './logout';

import './investor.css';
import './home.css'

const Investor = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('investorPosts'));
    if (savedPosts) {
      setPosts(savedPosts);
    }
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(isLoggedIn);
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !image) {
      alert('Please fill in all fields');
      return;
    }
    const newPost = { title, description, image };
    setPosts([newPost, ...posts]);
    setTitle('');
    setDescription('');
    setImage(null);
    localStorage.setItem('investorPosts', JSON.stringify([newPost, ...posts]));
  };

  
  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleCompanyClick = () => {
    history.push('/company', { posts: posts });
  };

  // Determine the number of posts to display based on completing three rows
  const maxVisiblePosts = 3 * 2; // Three rows with two posts each
  

  return (
    <div className="investor-container">
      <Helmet>
        <title>Investor</title>
        <meta property="og:title" content="Investor - Traveler template" />
      </Helmet>
      <header data-thq="thq-navbar" className="investor-navbar">
        <img alt="logo" src="/logo1-200h.png" className="investor-logo" />
        <div data-thq="thq-burger-menu" className="investor-menu">
          <div className="investor-links">
            <a
              href="https://play.teleporthq.io/projects/traveler-template-s18dgh/preview/169d3baa-137e-4e84-90d8-03cba6bd07c3"
              target="_blank"
              rel="noreferrer noopener"
              className="investor-link link"
            >
              Business
            </a>
            <a
              href="http://localhost:3000/investor"
              target="_blank"
              rel="noreferrer noopener"
              className="investor-text link"
            >
              Investors
            </a>
            <a
              href="http://localhost:3000/bank"
              target="_blank"
              rel="noreferrer noopener"
              className="investor-link1 link"
            >
              Loans
            </a>
            <a
              href="http://localhost:3000/schemes"
              target="_blank"
              rel="noreferrer noopener"
              className="investor-link2 link"
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
          <button className="investor-hamburger button">
            <svg viewBox="0 0 1024 1024" className="investor-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </button>
        </div>
        
      </header>
      <div className="investor-banner">
        <div className="investor-container3">
          <h1 className="investor-text06">
            <span>Empowering Ventures for Inclusive Growth</span>
          </h1>
          <span className="investor-text08">
            <span>
              <span>
              Discover investment opportunities that make a difference. Explore our innovative ventures and support entrepreneurs creating positive impact. Join us in empowering dreams and building a more inclusive future. Plus, access exclusive updates and insights through our investor posts
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <span>
              
            </span>
          </span>
          <div className="investor-container4">
                  {/* Popup window */}
      {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <span className="close" onClick={handleClosePopup}>
                            &times;
                        </span>
                        <h3 className="home-text12">You can post here</h3>


                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="title">Title:</label>
                                <input
                                    type="text"
                                    id="title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="description">Description:</label>
                                <textarea
                                    id="description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    required
                                ></textarea>
                            </div>
                            {/* Input field for uploading images */}
                            <div className="form-group">
                                <label htmlFor="image">Image:</label>
                                <input type="file" id="image" accept="image/*" onChange={handleImageChange} />
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            )}
            
        <div className="investor-container4">
        <h3 className="home-text12" onClick={handleOpenPopup}>You can post here</h3>

<button className="investor-button button" onClick={handleOpenPopup}>Post</button>
          </div>
        </div>
        </div>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1pbmltYWxpc20lMjB5ZWxsb3d8ZW58MHx8fHwxNjI2MTg0NjU3&amp;ixlib=rb-1.2.1&amp;w=1000"
          className="investor-image"
        />
      </div>
      <section id="guides" className="investor-guides">
        <div className="investor-heading">
          <h2 className="investor-header">Investors</h2>
          <p className="investor-caption">
            Connect, Invest, and Shape the Future with Inclusive Investments
          </p>
        </div>
              <div className="investor-list">
          <div className="investor-guide-wrapper">
            <Guide1 
              location="Indian banker"
              portrait="/external/Renuka_Ramnath.jpg"
              rootClassName="guide1-root-class-name3"
              ></Guide1>
          </div>
          <div className="investor-guide-wrapper1">
            <Guide1
              location="Co-Founder of Freecharge"
              portrait="/external/Ankita_Vasishtha.png"
              rootClassName="guide1-root-class-name2"
            ></Guide1>
          </div>
          <div className="investor-guide-wrapper2">
            <Guide1
              location="Author"
              portrait="/external/Kunal_Shah.jpg"
              rootClassName="guide1-root-class-name"
            ></Guide1>
          </div>
          <div className="investor-guide-wrapper3">
            <Guide1
              location="Co-Founder of Indian Angel Network"
              portrait="/external/Padmaja_Ruparel.jpg"
              rootClassName="guide1-root-class-name1"
            ></Guide1>
          </div>
        </div>
      </section>
      <section className="investor-articles">
          <div className="investor-heading1">
            <h2 className="investor-header1">
              Connect with Our Investor Network
            </h2>
            <p className="investor-caption1">
              Explore Our Investor Partners and Their Impactful Ventures in
              Empowering Dreams
            </p>
          </div>
        <div id="articles" className="investor-content">
          {/* Only display the first 'maxVisiblePosts' posts */}
          {posts.slice(0, maxVisiblePosts).map((post, index) => (
            // Check if it's the first post in a row
            index % 2 === 0 ? (
              <div className="investor-row" key={index}>
                {/* First post in the row */}
                <Article1
                  image={post.image}
                  description={post.description}
                  rootClassName="article1-root-class-name"
                />
                {/* Check if there's a next post */}
                {index + 1 < posts.length && (
                  <Article1
                    image={posts[index + 1].image}
                    description={posts[index + 1].description}
                    rootClassName="article1-root-class-name"
                  />
                )}
              </div>
            ) : null
          ))}
        </div>
        
        <div className="investor-row2">
        <button
          onClick={handleCompanyClick}
          className="investor-read-all button-option button"
        >
          <span>
            <span>More Companies</span>
            <br></br>
          </span>
        </button>
      </div>      

         
      </section>
    </div>
  )
}

export default Investor





