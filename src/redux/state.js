//import { rerenderEntireTree } from "../render";


let rerenderEntireTree =()=> {
    console.log('Render has been changed')
}

let state = {
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

}

window.state = state;

export const addPost = ()=> { 
    //debugger;
    let newPost = {
        id: state.profilePage.newPostText.id,
        message: state.profilePage.newPostText,
        likeCount: 0
    }
    state.profilePage.postsArray.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPost = (newText) => {
  state.profilePage.newPostText = newText;
  console.log(newText);
  rerenderEntireTree(state);
}

export const subscriber = (observer) => {
    rerenderEntireTree = observer;
}

export default state;




