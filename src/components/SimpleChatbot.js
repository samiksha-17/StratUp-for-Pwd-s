import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import ChatIcon from './chat.png';

class SimpleChatbot extends Component {
  state = {
    chatOpen: false,
  };

  toggleChat = () => {
    this.setState((prevState) => ({ chatOpen: !prevState.chatOpen }));
  };

  render() {
    const { chatOpen } = this.state;
    const steps = [
      { id: 'intro', message: 'Hi, I am your chatbot. How can I help you?', trigger: 'options' },
      { id: 'options', options: [
        { value: 1, label: 'Get information', trigger: 'info' },
        { value: 2, label: 'Ask a question', trigger: 'sampleQuestions' },
        { value: 3, label: 'Exit', trigger: 'end' },
      ] },
      { id: 'info', message: 'I can provide information about our products. What do you need?', trigger: 'options' },
      { id: 'sampleQuestions', message: 'Here are some sample questions:', trigger: 'showSampleQuestions' },
      { id: 'showSampleQuestions', options: [
        { value: 'website', label: 'Tell me about the website', trigger: 'websiteAnswer' },
        { value: 'location', label: 'Where are you located?', trigger: 'locationAnswer' },
        { value: 'pricing', label: 'What are your pricing plans?', trigger: 'pricingAnswer' },
      ] },
      { id: 'websiteAnswer', message: 'The website is a platform for showcasing our products and services.', trigger: 'options' },
      { id: 'locationAnswer', message: 'We are located at 123 Main Street, Anytown, USA.', trigger: 'options' },
      { id: 'pricingAnswer', message: 'Our pricing plans vary based on the services you choose. Please visit our pricing page for more details.', trigger: 'options' },
      { id: 'end', message: 'Goodbye!', end: true },
    ];

    return (
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        {chatOpen && (
          <div
            style={{
              position: 'fixed',
              bottom: '20px',
              right: '20px',
              zIndex: '9999',
              backgroundColor: '#fff',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
              borderRadius: '5px',
            }}
          >
            <ChatBot steps={steps} />
            <button onClick={this.toggleChat} style={{ cursor: 'pointer' }}>
              
            </button>
          </div>
        )}
        <div
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            cursor: 'pointer',
            zIndex: '9999',
          }}
          onClick={this.toggleChat}
        >
          <img src={ChatIcon} alt="Chatbot Icon" width="100px" height="100px" />
        </div>
      </div>
    )
  }
}

export default SimpleChatbot;

