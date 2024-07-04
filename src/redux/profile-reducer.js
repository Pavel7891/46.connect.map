let ADD_POST = "ADD-POST";

let UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const profileReducer = (profilePage, action) => {
  console.log(action);

  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: profilePage.newPostText,
        likeCount: 0,
      };

      let profilePageCopy = { ...profilePage };
      profilePageCopy.postsArray = [...profilePage.postsArray];
      profilePageCopy.postsArray.push(newPost);
      profilePageCopy.newPostText = "";

      return profilePageCopy;
    }

    //  profilePage.postsArray.push(newPost);
    //  profilePage.newPostText = '';

    // return profilePage;

    case UPDATE_NEW_POST_TEXT: {
      let profilePageCopy = { ...profilePage };
      profilePageCopy.newPostText = action.newText;

      return profilePageCopy;
    }

    default:
      return profilePage;
  }
};

export default profileReducer;

export const addPostCreator = () => {
  console.log("addPost");
  return { type: ADD_POST };
};

export const updateNewPostTextCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text };
};
