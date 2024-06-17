import React from 'react';
import st from './Dialogues.module.css';
import Dialogues from './Dialogues';
import { addNewMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogues-reducer';



const DialoguesContainer =(props) => {
debugger;
let onSendMessage = ()=> {
    props.dispatch (addNewMessageCreator())
}

let onChangeMessageBody = (body)=> {
props.dispatch (updateNewMessageBodyCreator(body))
console.log(body)
}

    return(
    <div className={st.dialogues}>
      <Dialogues
      updateNewMessage ={onChangeMessageBody}
      addMessage={onSendMessage}
      dialogues = {props.state.dialoguesPage.dialoguesArray} 
      messages = {props.state.dialoguesPage.messagesArray}
      newMessageBody = {props.state.dialoguesPage.newMessageBody}
      />
    </div>
        
    
    )
}

export default DialoguesContainer;