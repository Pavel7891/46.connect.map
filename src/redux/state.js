import profileReducer from "./profile-reducer";
import dialoguesReducer from "./dialogues-reducer";

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
   

   dispatch (action) {
      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.dialoguesPage = dialoguesReducer(this._state.dialoguesPage, action)

      this._callSubscriber (this._state)
   }

}

export default store;

