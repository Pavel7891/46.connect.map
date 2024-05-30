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
    
    
    addPost () { 
        debugger;
       
        let newPost = {
            id: this._state.profilePage.newPostText.id,
            message: this._state.profilePage.newPostText,
            likeCount: 0
        }
        this._state.profilePage.postsArray.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    
   updateNewPost  (newText) {
      this._state.profilePage.newPostText = newText;
      console.log(newText);
      this._callSubscriber(this._state);
    },
    
    subscriber (observer) {
        this._callSubscriber = observer;
    }
}


export default store;

/*Задача -- упаковать все данные, т.е. объекты из state и функции--
в единый объект. Переводим  объект state в  _state. Функции  
прописываем как методы объекта.
Обратим внимание: вместо названия родительского объекта, как мы
писали ренее,  используется слово this, которое означает ссылку 
на родительский объект, т.е., в данном случае, store.
чтобы вернуть значение объекта _state, создадим 'метод-геттер',
назовем его getState. Запись будет такая: 
getState () {
        return this._state;
    }
и затем мы используем дальше, внутри родительского 
объекта store, в качестве ссылки на него 
запись this._state.

Вместо функции rerenderEntireTree назовем наш метод _callSubscriber, 
его также пишем с нижнем подчеркиванием, т.к. метод предназначен 
только для использования внутри объекта  store.
Этот метод, напомним, получает в качестве callback функцию
rerenderEntireTree из App.js, здесь она приходит в параметры
как observer. Cоответственно, callSubscriber срабатывает каждый раз
при действии функции rerenderEntireTree, т.е. при отрисовке объекта.

Далее см. index.js
*/




