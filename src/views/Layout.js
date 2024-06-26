import React from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Login from "./Login"; 
import Register from "./Register";
import Home from "./home"; 

class Layout extends React.Component {   
   constructor(props) {
      super(props);
      this.state = {}
   }
   
   render() {
      console.log("isAuthorized:", this.props.isAuthorized); // Log the isAuthorized state
      return (
         this.props.isAuthorized ? 
         <Home /> : 
         <>
            <Login /> 
            <Register /> 
         </>
      );   
   }
}

function mapStateToProps(state) {
   return {      
      isAuthorized: state.userReducer.isAuthorized,
   };
}

export default connect(
   mapStateToProps,
)(Layout);
