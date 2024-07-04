import React from 'react';
import st from './Dialogues.module.css';
import Dialogues from './Dialogues';
import { addNewMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogues-reducer';
import { connect } from 'react-redux';



// const DialoguesContainer =() => {

//     return( 
    
//     <StoreContext.Consumer>
//       { 
//       (store) => {

//         let state = store.getState();

//      let onSendMessage = ()=> {
//      store.dispatch (addNewMessageCreator())
//     }

//      let onChangeMessageBody = (body)=> {
//       store.dispatch (updateNewMessageBodyCreator(body))
//     }

//   return <Dialogues
//      updateNewMessage ={onChangeMessageBody}
//      addMessage={onSendMessage}
//     //  dialogues = {state.dialoguesArray} 
//     //  messages = {state.messagesArray}
//     //  newMessageBody = {state.newMessageBody} 
//      />
//     }
//     }
//       </StoreContext.Consumer>)
// }


let mapStateToProps =(state)=> {
  
 let localState = state.dialoguesPage;

  return {
    dialogues: localState.dialoguesArray,
    messages: localState.messagesArray,
    newMessageBody: localState.newMessageBody
}
}


let mapDispatchToProps =(dispatch)=> {
return { 
  updateNewMessage: (body) => { 
    dispatch (updateNewMessageBodyCreator(body));
  },

  addMessage: () => {
    dispatch (addNewMessageCreator());
  }
  }
}
const DialoguesContainer =  connect (mapStateToProps, mapDispatchToProps) (Dialogues);


export default DialoguesContainer;

/* connect () () 
Объеснение: мы вызвали функцию  connect, и затем
вызвали ту функцию, которую нам вернул предыдущий вызов.
*/

/*То есть, в данном случае, мы берем презентационную
компоненту Dialogues и возвращаем ее как результат
вызова ф-й mapStateToProps и mapDispatchToProps.
Последние две, в свою очередь, аналогичны контейнерной 
компоненте, так как работают с данными из state, 
соответственно, с содержимым DialoguesPage (mapStateToProps) 
и с 'диспатчем' методов добавления и апдейтинга?
которые мы отправляем в виде колбеков в презентационную 
компоненту ( mapDispatchToProps ).
Иными словами, в презентационную компоненту, за счет
указанных выше ф-й добавления поса и апдейтинга,
передаются с пришедшие с пропсами данные: 
state, dispatch, body
*/
/* Важный момент: внутри новых созданных функций
типа 'map' мы не 'диспатчем' функции-криейторы. 
Мы, как здесь видно, вызываем функции-криейторы в
теле новых 'функций-маперов' и далее 'диспатчим'
результат этого вызова, т.е. наш объект action.
*/ 