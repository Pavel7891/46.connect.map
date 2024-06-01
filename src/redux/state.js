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
debugger;
if (action.type === 'ADD-POST')
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
    else if (action.type === 'UPDATE-NEW-POST-TEXT') 
        {
        this._state.profilePage.newPostText = action.newText;
        console.log(action.newText);
        this._callSubscriber(this._state);
    }
    }
}


export default store;






