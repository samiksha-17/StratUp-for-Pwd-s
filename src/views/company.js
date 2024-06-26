import React from 'react';
import { useLocation , Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Article1 from '../components/article1';
import './company.css';

const Company = (props) => {
  const location = useLocation();
  const { posts } = location.state || { posts: [] };
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
  // Group the posts into rows of three
  const rows = [];
  for (let i = 0; i < posts.length; i += 3) {
    rows.push(posts.slice(i, i + 3));
  }

  return (
    <div className="company-container">
      <Helmet>
        <title>company</title>
        <meta property="og:title" content="company - Traveler template" />
      </Helmet>
      <div className="company-heading">
        <h2 className="company-header">Connect with Our Investor Network</h2>
        <p className="company-caption">
          Explore Our Investor Partners and Their Impactful Ventures in
          Empowering Dreams
        </p>
      </div>
      <div className="company-list">
        {/* Render posts */}
        {rows.map((row, rowIndex) => (
          <div className="company-row" key={rowIndex}>
            {row.map((post, index) => (
              <Article1
                key={index}
                image={post.image}
                header={post.title}
                description={post.description}
                rootClassName={`article1-root-class-name${index}`}
                onRemove={() => handleRemovePost(index)}
              />
            ))}
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default Company;
