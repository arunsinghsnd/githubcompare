const initState = {
    username: "",
    repos: "",
    following: "",
    followers: "",
    message: "",
    grabbedData: false,
    image_url: "",
    public_gists: "",
    created_at: ""
};

const reducer = (state = initState, action) => {
    if(action.type === "CHANGE"){
        let currentUsername = action.e.target.value;
        return{
            ...state,
            username : currentUsername
        };
    } else if(action.type === "SUBMIT"){

        if(action.data.public_repos){
        return {
            ...state,
            following: action.data.following,
            followers: action.data.followers,
            image_url: action.data.avatar_url,
            repos: action.data.public_repos,
            public_gists: action.data.public_gists,
            created_at :action.data.created_at,
            grabbedData: true
        };
    }else {
        return{
            ...state,
            message: "User Not Found :("
        }
    }
    }
    return state;
};


export default reducer;