

let ADD_POST = 'ADD-POST'

let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const profileReducer = (state, action)=> {
   
//     if (action.type === ADD_POST)
        
//         { 
//             let newPost = {
//                 id: 5,
//                 message: state.newPostText,
//                 likeCount: 0
//             }
//             state.postsArray.push(newPost);
//             state.newPostText = '';
//         } 

//     else if // ation.type === 'UPDATE-NEW-POST-TEXT') 
//         ( action.type === UPDATE_NEW_POST_TEXT )
//             {
//             state.newPostText = action.newText;
//         }
//     return state;
// 

switch (action.type) {
    
    case ADD_POST:
        let newPost = {
            id: 5,
            message: state.newPostText,
            likeCount: 0
        }
        state.postsArray.push(newPost);
        state.newPostText = '';
        return state;

    case UPDATE_NEW_POST_TEXT:
        state.newPostText = action.newText;
        return state;

        default:
        return state;
    }
}


export default profileReducer

export const addPostCreator = () => {
    return ( 
    {type: ADD_POST}
    )
  }
  
  export const updateNewPostTextCreator = (text)=> {
    return (
      {type: UPDATE_NEW_POST_TEXT, newText: text}
    )
  }

/* Переносим в нашу новую функцию-редусур, profileReducer,
из state.js логику для добавления поста и отражения в textarea 
содержимого state.js, созданную для файла profile, MyPosts.jsx.
Но при этому убираем связку this._state_profilePage, так как 
в пропсах мы приняли  state, который несет в себе в качестве
объекта this._state.profilePage, прописанный для данной логики
в файле state.js. 
То есть вместо this._state.profilePage, прописанному ранее 
в файле state.js,(в этом проекте есть копия прежнего state.js
 -- state-a.js) у нас теперь есть объект state.
Также теперь не нужен   this._callSubscriber(this._state), так
как подписываться на событие нам здесь не нужно;
Константы ADD_POST и UPDATE_NEW_POST_TEXT также объявляются здесь,
чтобы функция могла с ними работать. При этом в файле state.js они 
также объявляются, поскольку там вызываются функции-редусеры.
*/

/* Цикл ветвления  if () else if {} можно 
заменить циклом типа switch () {
case ... :
       ...
       return state;
case ... : 
       ...
       return state
default:
    return state;
}

 Также, можне добавить рефакторинг:
 перенести функции-криейторы addPostCreator 
 updateNewPostTextCreator из файла state.js
 сюда. Чтобы освободить файл  state.js.
*/
 /*Аналогичные действия выполняются для
 файла dialogues-reducer.
 */




 