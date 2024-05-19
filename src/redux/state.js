import React from 'react';

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
}

export default state;
/* (продолжение, начало см. в index.js)
Выносим наши массивы из index.js и делаем
их элементами объекта state.
И потом импортируем наш файл в index.js
*/

/*Формирование нового поста ( урок 32 ):
прописываем ф-ю addPost и в теле функции 
прописываем формирование нового поста, 
newPost, как показано выше. 
В качестве аргумента в функцию приходит 
newMessage, который мы прописываем в поле 
message, т.е. в качестве значения для 
свойства message создаваемого объекта 
newPost.
Затем в теле этой функции прописываем
"пушинг" вновь созданного поста в массив
postsArray с помощью метода push, как 
показано выше.
( теперь массив postsArray, в отличие
от прошлых занятий, будет Эпустым, т.е. 
без прописанных значений id, message,
 likeCount)
 Далее прописываем экспорт функции
 addPost без дефолта, как показано выше.
 Далее см. index.js
*/
