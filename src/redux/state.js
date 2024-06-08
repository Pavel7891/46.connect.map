let ADD_POST = 'ADD-POST'

let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let SEND_MESSAGE = 'SEND-MESSAGE';

let UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE_BODY'



let store  = {
     _state: {
        profilePage: {
            postsArray: [
                {id: 1, message: "Hi, how are you ?", likeCount:10},
                {id: 2, message: "I've got some news for you", likeCount: 20},
                {id: 3, message: "Hope, you are lucky", likeCount: 25} 
              ],
            newPostText:'kamasutra',
           
            },

        dialoguesPage: {
            
            dialoguesArray: [
                    {id:1, name:'Pavel'},
                    {id:2, name:'Andrey'},
                    {id:3, name:'Nicolay'},
                    {id:4, name:'Alina'},
                    {id:5, name:'Maria'},
                    {id:6, name:'Victor'}
                ], 
        
            messagesArray: [
                    {id:1, message:'Hi'},
                    {id:2, message:'How are you ?'},
                    {id:3, message:'I love It-kamasutra'},
                    {id:4, message:'That is a great course'},
                ],
                newMessageBody: 'xxx'
            }
    },
    getState () {
        //debugger;
        return this._state;
    },
    
    _callSubscriber () {
        console.log('Render has been changed')
    },

    subscriber (observer) {
        this._callSubscriber = observer;
    },
    

    // Методы, изменяющие state.
    
    // addPost () { 
     
    //     let newPost = {
    //         id: this._state.profilePage.newPostText.id,
    //         message: this._state.profilePage.newPostText,
    //         likeCount: 0
    //     }
    //     this._state.profilePage.postsArray.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._callSubscriber(this._state);
    // },
    
//    updateNewPost  (newText) {
//       this._state.profilePage.newPostText = newText;
//       console.log(newText);
//       this._callSubscriber(this._state);
//     },
    
    

    dispatch (action) {
        console.log(action)
// action.type === 'ADD-POST'
if (action.type === ADD_POST)
    { 
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likeCount: 0
        }
        this._state.profilePage.postsArray.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);  
    } 
else if // ation.type === 'UPDATE-NEW-POST-TEXT') 
    ( action.type === UPDATE_NEW_POST_TEXT )
        {
        this._state.profilePage.newPostText = action.newText;
        console.log(action.newText);
        this._callSubscriber(this._state);
    }

else if // action.type === 'SEND-MESSAGE'
     (action.type === SEND_MESSAGE) 
     { 
    let newMessage = this._state.dialoguesPage.newMessageBody
    
     this._state.dialoguesPage.messagesArray.push( {message: newMessage});
     this._state.dialoguesPage.newMessageBody = '';
     this._callSubscriber(this._state);
     }

else if // action.type === 'UPDEATE-NEW-MESSAGE-BODY'
    (action.type === UPDATE_NEW_MESSAGE_BODY) 
    {
    this._state.dialoguesPage.newMessageBody = action.newBody;
    this._callSubscriber(this._state);
    }
    }

}

export default store;


export const addPostCreator = () => {
    return ( 
        // type:'ADD-POST'
    {type: ADD_POST}
    )
  }
  
  export const updateNewPostTextCreator = (text)=> {
    return (
        // type: 'UPDATE-NEW-POST-TEXT'
      {type: UPDATE_NEW_POST_TEXT, newText: text}
    )
  }

export const addNewMessageCreator  = ()=> {
    return(
        {type: SEND_MESSAGE}
    )
}

  export const updateNewMessageBodyCreator = (body)=> {
    return(
        {type: UPDATE_NEW_MESSAGE_BODY, newBody: body}
    )
  }






