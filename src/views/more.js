import React, { useState } from 'react';


const More = (props) => {
  // Retrieve posts data from route parameters

  const { posts: initialPosts } = props.location.state;

  // Define state variable for posts and setter function
  const [posts, setPosts] = useState(initialPosts);

  // Function to handle post removal
  const handleRemovePost = (index) => {
    const updatedPosts = [...posts];
    updatedPosts.splice(index, 1);
    setPosts(updatedPosts); // Assuming you have a setPosts function to update state
  };

  return (
    <div>
      <div className="more-container">
        <title>More - Traveler template</title>
        <meta property="og:title" content="More - Traveler template" />
  
        <section id="tours" className="more-quick-view">
          <div className="more-main">
            <div className="more-heading">
              <h2 className="more-header">
                Explore Limitless Opportunities in Every Business
              </h2>
              <p className="more-caption">
                Embark on a Journey of Endless Possibilities and Uncover Your
                Next Business Adventure
              </p>
            </div>
            <div className="more-sorting">
              <button className="more-option button-option button">
                BUSINESS
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <style jsx>{`
        .more-container {
          width: 100%;
          display: flex;
          overflow: auto;
          min-height: 100vh;
          align-items: center;
          flex-direction: column;
        }
        .more-quick-view {
          gap: var(--dl-space-space-fourunits);
          width: 100%;
          display: flex;
          max-width: 1440px;
          align-items: center;
          padding-left: var(--dl-space-space-fiveunits);
          padding-right: var(--dl-space-space-fiveunits);
          flex-direction: column;
        }
        .more-main {
          gap: var(--dl-space-space-fiveunits);
          width: 100%;
          display: flex;
          align-items: center;
          flex-direction: column;
        }
        .more-heading {
          gap: var(--dl-space-space-oneandhalfunits);
          width: 100%;
          display: flex;
          max-width: 900px;
          align-items: center;
          padding-top: 50px;
          flex-direction: column;
          justify-content: center;
        }
        .more-header {
          color: rgb(53, 43, 42);
          font-size: 60px;
          font-style: normal;
          text-align: center;
          font-family: 'Cormorant Infant';
          font-weight: 700;
          line-height: 60px;
        }
        .more-caption {
          color: rgb(53, 43, 42);
          font-size: 18px;
          max-width: 600px;
          text-align: center;
          font-family: 'Karla';
          line-height: 27px;
        }
        .more-sorting {
          gap: var(--dl-space-space-unit);
          display: flex;
          align-items: center;
          flex-direction: row;
          margin-bottom: 0; /* Remove margin bottom */
        }
        .more-option {
          width: 647px;
        }
        .post-container {
          margin-top:-90px;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px; /* Adjust gap between posts */
        }
        .post {
          position: relative;
        }
        .post-image {
          max-height: 200px;
          max-width: 100%;
        }
        .post-content {
          text-align: center;
        }
        .post-title {
          font-size: 18px;
          font-weight: bold;
          margin-top: 10px;
        }
        .post-description {
          font-size: 14px;
          color: #666;
        }
        .remove-post-icon {
          position: absolute;
          top: 5px;
          right: 5px;
          cursor: pointer;
          font-size: 20px;
          color: #999;
        }
      `}</style>
      
      <div className="post-container">
        {/* Render all posts */}
        {posts.map((post, index) => (
          <div className="post" key={index}>
            <img src={post.image} alt={post.title} className="post-image" />
            <div className="post-content">
              <h3 className="post-title">{post.title}</h3>
              <p className="post-description">{post.description}</p>
              {/* Remove post icon */}
              <span className="remove-post-icon" onClick={() => handleRemovePost(index)}>
                &times;
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default More;
