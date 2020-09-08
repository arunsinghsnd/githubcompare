import React from 'react';
import {connect } from 'react-redux';
import '../App.css'


const ShowProfile = props =>{
    console.log(props)
    return(
        <div className="formData">
            <img  src={props.image_url} alt="Not found."/>
            <h1>Username : {props.username}</h1>
            <h2>Repositories: {props.repos}</h2>
            <h2>followering: {props.following}</h2>
            <h2>followers: {props.followers}</h2>
            <h2>Public gists: {props.public_gists}</h2>
            <h2>Account Created At: {props.created_at}</h2>

            <a href="/"><button>Back To Home</button></a>
        </div>
    )
}
















const mapStateToProps = state =>{
    return {
        username: state.username,
        repos: state.repos,
        following: state.following,
        followers: state.followers,
        message: state.message,
        grabbedData: state.grabbedData,
        image_url: state.image_url,
        public_gists: state.public_gists,
        created_at: state.created_at
    };
};



export default connect(mapStateToProps, null)(ShowProfile);
