import React from 'react';
import st from './Dialogues.module.css';
import Dialogues from './Dialogues';
import { addNewMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogues-reducer';
import StoreContext from '../../StoreContext';



const DialoguesContainer =(p) => {

    return( 
    
    <StoreContext.Consumer>
      { 
      (store) => {

let state = store.getState().dialoguesPage;

     let onSendMessage = ()=> {
     store.dispatch (addNewMessageCreator())
    }

     let onChangeMessageBody = (body)=> {
      store.dispatch (updateNewMessageBodyCreator(body))
    }

  return <Dialogues
     updateNewMessage ={onChangeMessageBody}
     addMessage={onSendMessage}
     dialogues = {state.dialoguesArray} 
     messages = {state.messagesArray}
     newMessageBody = {state.newMessageBody} />
    }
    }
      </StoreContext.Consumer>)
}

export default DialoguesContainer;
