

let ADD_POST = 'ADD-POST'

let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const profileReducer = (state, action)=> {

switch (action.type) {

    case ADD_POST:
        let newPost = {
            id: 5,
            message: state.newPostText,
            likeCount: 0
        }
        console.log('Adding Post')
        state.postsArray.push(newPost);
        state.newPostText = '';
        
 
        return state;

    case UPDATE_NEW_POST_TEXT:
        state.newPostText = action.newText;

        return state;

        default:
        return state;
    }

}


export default profileReducer

export const addPostCreator = () => {
  console.log('addPost')
    return ( 
    {type: ADD_POST}
    )
  }
  
  export const updateNewPostTextCreator = (text)=> {
    return (
      {type: UPDATE_NEW_POST_TEXT, newText: text}
    )
  }






 