import React from 'react';
import {connect} from 'react-redux';
import * as actionCreator from '../store/actions/action'
import ShowProfile from './ShowProfile';
import '../App.css'


const Api = props =>{
    const  handleUsername = e =>{
        props.changeUsername(e);
    };

    const  handleSubmit = (e) =>{
        props.getUserData(e, props.username)
    }

    if(props.grabbedData === true){
        return <ShowProfile/>
    }

    return(
        <div className="formData">
        <h2>{props.message}</h2>
        <br/>
        <br/>
           <input className="inputuser" type="text" placeholder="Enter Github UserName" onChange={handleUsername}/>
           <br/>
           <br/>
           <button onClick={handleSubmit}>Serach</button>
           <h3>{props.repos}</h3>
        </div>
    );
};


const mapStateToProps = state => {
    return{
        username: state.username,
        repos: state.repos,
        following: state.following,
        followers: state.followers,
        message: state.message,
        grabbedData: state.grabbedData,
        image_url: state.image_url,
        public_gists: state.public_gists,
        created_at: state.created_at
    }
};

const mapDispatchToProps = dispatch => {
    return {
        changeUsername: e => dispatch(actionCreator.changeUsername(e)),
        getUserData: (e, username) => dispatch(actionCreator.getUerData(e,username))
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Api);