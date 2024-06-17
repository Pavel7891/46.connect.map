

let ADD_POST = 'ADD-POST'

let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const profileReducer = (state, action)=> {
   
//     if (action.type === ADD_POST)
        
//         { 
//             let newPost = {
//                 id: 5,
//                 message: state.newPostText,
//                 likeCount: 0
//             }
//             state.postsArray.push(newPost);
//             state.newPostText = '';
//         } 

//     else if // ation.type === 'UPDATE-NEW-POST-TEXT') 
//         ( action.type === UPDATE_NEW_POST_TEXT )
//             {
//             state.newPostText = action.newText;
//         }
//     return state;
// 

switch (action.type) {
    
    case ADD_POST:
        let newPost = {
            id: 5,
            message: state.newPostText,
            likeCount: 0
        }
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
    return ( 
    {type: ADD_POST}
    )
  }
  
  export const updateNewPostTextCreator = (text)=> {
    return (
      {type: UPDATE_NEW_POST_TEXT, newText: text}
    )
  }






 