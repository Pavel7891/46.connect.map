

let ADD_POST = 'ADD-POST'

let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const profileReducer = (profilePage, action)=> {

switch (action.type) {

    case ADD_POST:
        let newPost = {
            id: 5,
            message: profilePage.newPostText,
            likeCount: 0
        }
        console.log('Adding Post')
         profilePage.postsArray.push(newPost);
         profilePage.newPostText = '';
        
 
        return profilePage;

    case UPDATE_NEW_POST_TEXT:
         profilePage.newPostText = action.newText;

        return profilePage;

        default:
        return profilePage;
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






 