import profileReducer from "./profile-reducer";
import dialoguesReducer from "./dialogues-reducer";

// let ADD_POST = 'ADD-POST'

// let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

// let SEND_MESSAGE = 'SEND-MESSAGE';

// let UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE_BODY'


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

      /* Функция уведомления подписчика остается в файле state.js
      */
      this._callSubscriber (this._state)
 
   }
/* Присваиваем в объекты  profilePage и dialoguesPage нашего _state
разультаты действия функций  profileReducer и dialoguesReducer 
( функции-редусеры прописаны в соответствующих файлах ), при этом
 данные объекты отправлены в параметры своих функций.
 То есть, по результату действия функций, мы получим измененные
 варианты данных объектов, которые сформируют новый state.
 Также в параметры функций отправлены action, который, напомним, 
 несет в себе type, для каждой фунции со своим определенным
 значением.
 И здесь же вызывается функция для уведомления подписчиков,
 _callSubscriber.
*/
}

export default store;

// export const addPostCreator = () => {
//     return ( 
//     {type: ADD_POST}
//     )
//   }
  
//   export const updateNewPostTextCreator = (text)=> {
//     return (
//       {type: UPDATE_NEW_POST_TEXT, newText: text}
//     )
//   }

// export const addNewMessageCreator  = ()=> {
//     return(
//         {type: SEND_MESSAGE}
//     )
// }

//   export const updateNewMessageBodyCreator = (body)=> {
//     return(
//         {type: UPDATE_NEW_MESSAGE_BODY, newBody: body}
//     )
//   }
