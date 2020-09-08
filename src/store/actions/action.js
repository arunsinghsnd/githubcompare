export const changeUsername = e =>{
    
    return{
        type: "CHANGE",
        e: e
    }
};


export const getUerData  = (e, username) => {
    e.persist();
    return async dispatch =>{
        try{
            const res = await fetch(`https://api.github.com/users/${username}`);
            const  data = await res.json();

            dispatch({
                type: "SUBMIT",
                e:e,
                data
            });


        }catch(err){
            console.log(err);
        }
    }
}