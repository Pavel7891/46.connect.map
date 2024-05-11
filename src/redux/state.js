import React from 'react';

let state = {
    
        postsArray: [
            {id: 1, message: "Hi, how are you ?", likeCount:10},
            {id: 2, message: "I've got some news for you", likeCount: 20},
            {id: 3, message: "Hope, you are lucky", likeCount: 25} 
          ],

          messagesArray: [
            {id:1, message:'Hi'},
            {id:2, message:'How are you ?'},
            {id:3, message:'I love It-kamasutra'},
            {id:4, message:'That is a great course'},
        ],
 
    dialoguesArray: [
        {id:1, name:'Pavel'},
        {id:2, name:'Andrey'},
        {id:3, name:'Nicolay'},
        {id:4, name:'Alina'},
        {id:5, name:'Maria'},
        {id:6, name:'Victor'}
    ],

}

export default state;
/* (продолжение, начало см. в index.js)
Выносим наши массивы из index.js и делаем
их элементами объекта state.
И потом импортируем наш файл в index.js
*/
