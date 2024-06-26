
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Script from 'dangerous-html/react';
import { Helmet } from 'react-helmet';
import Feature from '../components/feature';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import {  faStop } from '@fortawesome/free-solid-svg-icons';
import pic from "./pic1.jpg"
import pic2 from "./pic2.png"
import pic3 from "./pic3.png"
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBContainer,
  MDBCard ,
  MDBCardBody,
  MDBCol,
  MDBRow,
} from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './home.css';
import axios from 'axios';
import SimpleChatbot from '../components/SimpleChatbot';
const Home = (props) => {
  
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    const synth = window.speechSynthesis;
    const updateVoices = () => setVoices(synth.getVoices());

    synth.addEventListener('voiceschanged', updateVoices);
    updateVoices();

    return () => synth.removeEventListener('voiceschanged', updateVoices);
  }, []);
  const buttonContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom:'30px'
  };

  // CSS styles for the buttons
  const buttonStyle = {
    marginRight: '20px', // Add some space between the buttons
    cursor: 'pointer', // Change cursor to pointer when hovering over the button
    backgroundColor:'blue',
    padding:'5px',
  
    color: 'white', // Text color
    display: 'flex',
    alignItems: 'center',
  };
  


  const speakText = () => {
    const synth = window.speechSynthesis;
    if (synth && selectedVoice) {
      let text = '';
      switch (selectedLanguage) {
        case 'hi-IN':
          text = 'हमारी वेबसाइट में आपका स्वागत है, जो विकलांग उद्यमियों को सशक्त बनाने के लिए समर्पित है। यहाँ, वे व्यक्ति अपने व्यवसाय को शुरू करने की इच्छा रखने वाले व्यक्ति ही नहीं, बल्कि उनके अद्वितीय विचारों को साझा कर सकते हैं और संभावित निवेशकों से जुड़ सकते हैं जो समर्थन में रुचि रखते हैं। हमारे प्लेटफार्म पर विकलांगों को उनकी व्यवसायिक आवश्यकताओं के लिए विशेष ऋण उपलब्ध कराके, उन्हें आर्थिक समर्थन सुनिश्चित किया जाता है।';
          break;
        case 'en-US':
          text = 'Welcome to our website dedicated to empowering entrepreneurs with disabilities. Here, individuals who aspire to start their own businesses can not only share their innovative ideas but also connect with potential investors who are interested in supporting inclusive entrepreneurship.';
          break;
        default:
          break;
      }
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.voice = selectedVoice;

      if (!isSpeaking) {
        synth.speak(utterance);
        setIsSpeaking(true);
      } else {
        synth.cancel(); // Stop speech
        setIsSpeaking(false);
      }
    }

};

// Create a new function to handle stopping speech
const stopSpeech = () => {
  const synth = window.speechSynthesis;
  if (synth) {
    synth.cancel();
    setIsSpeaking(false);
  }
};
const handleVoiceChange = (language) => {
  setSelectedVoice(getVoiceByLanguage(language));
  setSelectedLanguage(language);
};

const getVoiceByLanguage = (language) => {
  return voices.find((v) => v.lang === language);
};
  console.log('Voices:', voices);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

const [isLoggedIn, setIsLoggedIn] = useState(false);

  const history = useHistory();

 useEffect(() => {
  const savedPosts = JSON.parse(localStorage.getItem('posts'));
  if (savedPosts) {
    setPosts(savedPosts);
  }
}, []);
// When handling image upload
const handleImageChange = (e) => {
  const file = e.target.files[0];
  // Convert the image file to base64 string
  const reader = new FileReader();
  reader.onloadend = () => {
    setImage(reader.result);
  };
  reader.readAsDataURL(file);
};

// When submitting a new post
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
  localStorage.setItem('posts', JSON.stringify([newPost, ...posts]));
};

  useEffect(() => {
    // Check if the user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(isLoggedIn);
  }, []);

  const handleLogout = () => {
  // Clear login status from local storage
  localStorage.removeItem('isLoggedIn');
  // Update state to reflect logout
  setIsLoggedIn(false);
  // Redirect to login page
  history.push('/login');
};

const handleRemovePost = (index) => {
  if (isLoggedIn) {
    const updatedPosts = [...posts];
    updatedPosts.splice(index, 1);
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  } else {
    // Redirect to login page if user is not logged in
    history.push('/login');
  }
};

const handleMoreClick = () => {
  if (isLoggedIn) {
    history.push('/more', { posts });
  } else {
    // Redirect to login page if user is not logged in
    history.push('/login');
  }
};
  return (
    <div className="home-container">
      
      <Helmet>
        <title> Startup</title>
        <meta property="og:title" content="Traveler template" />

       
      </Helmet>
      <section className="home-hero">
        <div className="home-main">
          <div className="home-video">
          <div
  style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1491336477066-31156b5e4f35?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDc1fHxidXNpbmVzc3xlbnwwfHx8fDE3MTMxOTI1NDJ8MA&ixlib=rb-4.0.3&h=1500")' }}
  poster="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDYzfHxidXNpbmVzc3xlbnwwfHx8fDE3MDk5MDkxODV8MA&amp;ixlib=rb-4.0.3&amp;h=1500"
  className="home-tint"
></div>

          </div>
          <div className="home-content">
            <header data-thq="thq-navbar" className="home-navbar">
              
              <img alt="logo" src="/logo1-200h.png" className="home-logo" />
              <div data-thq="thq-burger-menu" className="home-menu">
                <div className="home-links">
                  <a
                    href="http://localhost:3000"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link link"
                  >
                    Business
                  </a>
                  <a
                    href="http://localhost:3000/investor"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="link"
                  >
                    Investors
                  </a>
                  <a
                    href="http://localhost:3000/bank"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link01 link"
                  >
                    Loans
                  </a>
                  <a
                    href="http://localhost:3000/schemes"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link02 link"
                  >
                    Schemes
                  </a>
                  <a
                    href="http://localhost:3000/contactUs"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link03 link"
                  >
                   contact
                  </a>

              {/* Check if user is logged in */}
              {isLoggedIn ? (
                <div style={{ color: 'white' }}> {/* Apply inline style */}
                  <a onClick={handleLogout} className="home-link03 link">
                    Logout
                  </a>
                </div>
              ) : (
                <div>
                  <a href="http://localhost:3000/register" className="home-link03 link">
                    Login
                  </a>
                </div>
              )}
                </div>
          
                  
               
                <button className="home-hamburger button">
                  <svg viewBox="0 0 1024 1024" className="home-icon">
                    <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                </button>
              </div>
              
            </header>
 
      <div onClick={() => speakText('Welcome to our website!')} className="button">
  <FontAwesomeIcon icon={faVolumeUp} className="icon" />
  About website
</div>
      
            <div className="home-center">
              <div className="home-heading">
                <h1 className="home-header">Explore The Buisness</h1>
                <p className="home-caption">
                  Empowering PWD's Entrepreneurs and Connecting Investors
                  for Inclusive Growth
                </p>
              </div>
              <div className="voice-options">
  {/* Voice options selector */}
  <select onChange={(e) => handleVoiceChange(e.target.value)} value={selectedLanguage}>
    <option value="">Select Language</option>
    <option value="hi-IN">Hindi</option>
    <option value="en-US">English</option>
  </select>
</div>

<div className="button-container" style={buttonContainerStyle}>
      {/* Speak button */}
      <div onClick={speakText} style={buttonStyle}>
        <FontAwesomeIcon icon={faVolumeUp} className="icon" />
        Speak
      </div>
      {/* Stop button */}
      <div onClick={stopSpeech} style={buttonStyle}>
        <FontAwesomeIcon icon={faStop} className="icon" />
        Stop
      </div>
    </div>


              
            </div>
          </div>
        </div>

        <div id="features" className="home-feaures">
          <div className="home-content1">
            <Feature
              header="A Community of Resilience and Success"
              description="Fueling a future where PWD entrepreneurs shine, our vision is to cultivate a community that celebrates resilience, diversity, and boundless success"
              rootClassName="feature-root-class-name"
            ></Feature>
            <Feature
              icon="/Icons/headset.svg"
              header="PWD Entrepreneurs Across Industries"
              description="We envision a tapestry of PWD-led businesses weaving through various sectors, inspiring industries to embrace inclusivity and champion the unique contributions of every entrepreneur"
              rootClassName="feature-root-class-name1"
            ></Feature>
            <Feature
              icon="/Icons/person.svg"
              header="Redefining Web Standards "
              description="n our commitment to an inclusive future, we strive to set new standards for web accessibility, providing an effortless and equal online experience for users of all abilities"
              rootClassName="feature-root-class-name2"
            ></Feature>
          </div>
        </div>
      </section>
      
      <section id="tours" className="home-quick-view">
    <div className="home-main1">
        <div className="home-heading1">
            <h2 className="home-header1">
                Explore Limitless Opportunities in Every Business
            </h2>
            <p className="home-caption1">
                Embark on a Journey of Endless Possibilities and Uncover Your Next
                Business Adventure
            </p>
        </div>
        <div className="home-sorting">
            <button className="button-option button">Business</button>
        </div>
    </div>
    
    <div className="post-container" >
    {posts.length > 0 && (
  <div className="post-container">
    {posts.slice(0, 4).map((post, index) => (
      <div className="post" key={index}>
        {/* Decode base64 string to display image */}
        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="post-image"
            style={{ maxHeight: '200px', maxWidth: '100%' }}
          />
        )}
        <div className="post-content">
          <h3 className="post-title">{post.title}</h3>
          <p className="post-description">{post.description}</p>
          {/* Render remove post icon only if user is logged in */}
          {isLoggedIn && (
            <span
              className="remove-post-icon"
              onClick={() => handleRemovePost(index)}
            >
              &times;
            </span>
          )}
        </div>
      </div>
    ))}
  </div>
)}

</div>
<div>
          <button onClick={handleMoreClick}>
          <span style={{ color: 'blue' }}>More</span>

          </button>
        </div>
</section>

      {/* Popup window */}
      {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <span className="close" onClick={handleClosePopup}>
                            &times;
                        </span>
                        <h2>Post Your Business</h2>
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
<div className="home-container3">
  {/* Render the "Post Your Business" text only if the user is not logged in */}
  {!isLoggedIn && (
    <div className="post-business-container">
      <h1 className="home-text12">Post Your Business</h1>
     
    </div>
  )}
  {/* Render the "+" icon only if the user is logged in */}
  {isLoggedIn && (
     <div className="post-business-container">
     <h1 className="home-text12" onClick={handleOpenPopup}>Post Your Business</h1>
    <svg
      viewBox="0 0 1024 1024"
      className="home-icon15"
      style={{ marginLeft: '8px' }} // Add margin to the left of the icon
      onClick={handleOpenPopup} // Add onClick event handler
    >
      <path d="M981.333 512c0-129.579-52.565-246.997-137.472-331.861s-202.283-137.472-331.861-137.472-246.997 52.565-331.861 137.472-137.472 202.283-137.472 331.861 52.565 246.997 137.472 331.861 202.283 137.472 331.861 137.472 246.997-52.565 331.861-137.472 137.472-202.283 137.472-331.861zM896 512c0 106.069-42.923 201.984-112.469 271.531s-165.461 112.469-271.531 112.469-201.984-42.923-271.531-112.469-112.469-165.461-112.469-271.531 42.923-201.984 112.469-271.531 165.461-112.469 271.531-112.469 201.984 42.923 271.531 112.469 112.469 165.461 112.469 271.531zM341.333 554.667h128v128c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-128h128c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-128v-128c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v128h-128c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
    </svg>
    </div>
  )}
</div>

<section>
     
      <MDBContainer className="py-5">
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="10" xl="8" className="text-center">
          <h3 className="mb-4">Succes Story</h3>
          <p className="mb-4 pb-2 mb-md-5 pb-md-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p>
        </MDBCol>
      </MDBRow>
      <MDBRow className="text-center d-flex align-items-stretch">
        <MDBCol md="4" className="mb-5 mb-md-0 d-flex align-items-stretch">
          <MDBCard className="testimonial-card">
            <div
              className="card-up"
              style={{ backgroundColor: "#9d789b" }}
            ></div>
            <div className="avatar mx-auto bg-white">
              <img
                src={pic}
                className="rounded-circle img-fluid"
              />
            </div>
            <MDBCardBody>
              <h4 className="mb-4">Shenaz Haveliwala</h4>
              <hr />
              <p className="dark-grey-text mt-4">
  <FontAwesomeIcon icon={faQuoteLeft} className="pe-2" />
  <span className="icon-text">Shenaz Haveliwala's inspiring journey from battling epilepsy to founding SoboConnect is a testament to resilience and determination. Her story teaches us that challenges can be turned into opportunities, and with the right mindset, anyone can achievesuccess despite adversities.</span>
</p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4" className="mb-5 mb-md-0 d-flex align-items-stretch">
          <MDBCard className="testimonial-card">
            <div
              className="card-up"
              style={{ backgroundColor: "#7a81a8" }}
            ></div>
            <div className="avatar mx-auto bg-white">
              <img
               src={pic2}
                className="rounded-circle img-fluid"
              />
            </div>
            <MDBCardBody>
              <h4 className="mb-4">Pranav Desai</h4>
              <hr />
              <p className="dark-grey-text mt-4">
  <FontAwesomeIcon icon={faQuoteLeft} className="pe-2" />
  <span className="icon-text">Pranav Desai's indomitable spirit and vision have transformed the lives of thousands through VoSAP. Overcoming personal challenges, he champions openness, knowledge, and meaningful employment for persons with disabilities, embodying resilience and empowerment.</span>
</p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4" className="mb-5 mb-md-0 d-flex align-items-stretch">
          <MDBCard className="testimonial-card">
            <div
              className="card-up"
              style={{ backgroundColor: "#6d5b98" }}
            ></div>
            <div className="avatar mx-auto bg-white">
              <img
                src={pic3}
                className="rounded-circle img-fluid"
              />
            </div>
            <MDBCardBody>
              <h4 className="mb-4">Sangita Desai</h4>
              <hr />
              <p className="dark-grey-text mt-4">
  <FontAwesomeIcon icon={faQuoteLeft} className="pe-2" />
  <span className="icon-text">Sangita's journey is a testament to resilience and creativity. Despite challenges posed by Symbrachydactyly, she excelled as a fashion designer, contributing to major campaigns and events. After a setback, she pivoted to the natural products industry, founding Raw Nature Company and creating ethical, eco-friendly personal care products.</span>
</p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
   


      </section>

      <section id="find" className="home-find">
        <div className="home-heading3">
          <h2 className="home-header2">
            Inclusivity Unleashed, Dreams Empowered
          </h2>
          <p className="home-caption2">
            Embark on a journey of empowerment, where diversity thrives, and
            dreams find their wings
          </p>
        </div>
        <button className="home-find1 button">Find a local guide</button>
        <SimpleChatbot />
      </section>
      <section className="home-footer">
        <div className="home-content3">
          <div className="home-main2">
            <div className="home-branding">
              <div className="home-heading4">
                <img alt="image" src="/logo1-200h.png" className="home-image" />
                <p className="home-caption3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
              </div>
            </div>
            <div className="home-links1">
              <div className="home-items">
                <button className="home-link04 button button-clean">
                  Find a guide
                </button>
                <button className="home-link05 button button-clean">
                  Find a tour
                </button>
                <button className="home-link06 button button-clean">
                  Visit a city
                </button>
                <button className="home-link07 button button-clean">
                  Visit a country
                </button>
              </div>
              <div className="home-items1">
                <button className="home-link08 button button-clean">
                  How it works
                </button>
                <button className="home-link09 button button-clean">
                  Cancelation policy
                </button>
                <button className="home-link10 button button-clean">
                  Local guides
                </button>
                <button className="home-link11 button button-clean">
                  Affiliate
                </button>
              </div>
              <div className="home-items2">
                <button className="home-link12 button button-clean">
                  About us
                </button>
                <button className="home-link13 button button-clean">
                  Blog
                </button>
                <button className="home-link14 button button-clean">
                  Partners
                </button>
                <button className="home-link15 button button-clean">
                  Faqs
                </button>
                <button className="home-link16 button button-clean">
                  Careers
                </button>
              </div>
            </div>
          </div>
          <span className="home-copyright">
            © 2022 Character. All Rights Reserved.
          </span>
        </div>
      </section>
      <div>
        <div className="home-container5">
    
        </div>
      </div>
    </div>
  )
};

export default Home;
