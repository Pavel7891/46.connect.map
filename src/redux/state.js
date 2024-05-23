import { rerenderEntireTree } from "../render";

let state = {
    profilePage: {
        postsArray: [
            {id: 1, message: "Hi, how are you ?", likeCount:10},
            {id: 2, message: "I've got some news for you", likeCount: 20},
            {id: 3, message: "Hope, you are lucky", likeCount: 25} 
          ],

        //   postsArray: [
        //     {id: {id}, message:{message}, likeCount:{likeCount}},
        //   ],

          dialoguesArray: [
            {id:1, name:'Pavel'},
            {id:2, name:'Andrey'},
            {id:3, name:'Nicolay'},
            {id:4, name:'Alina'},
            {id:5, name:'Maria'},
            {id:6, name:'Victor'}
        ],
    },
         

          messagesArray: [
            {id:1, message:'Hi'},
            {id:2, message:'How are you ?'},
            {id:3, message:'I love It-kamasutra'},
            {id:4, message:'That is a great course'},
        ],

}

export let addPost = (newMessage)=> { 
    debugger;
    let newPost = {
        id: newMessage.id,
        message: newMessage,
        likeCount: 0
    }
    state.profilePage.postsArray.push(newPost)
    rerenderEntireTree(state);
}

export default state;

