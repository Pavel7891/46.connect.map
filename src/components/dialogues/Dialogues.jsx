import React from 'react';
import st from './Dialogues.module.css';
import DialogueItem from './dialogueItem/DialogueItem';
import Message from './message/Message';
//import { addNewMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogues-reducer';



const Dialogues =(props) => {

    let dialoguesItems = props.dialogues.map( 
        dialogueItem => 
        <DialogueItem name = {dialogueItem.name} id = {dialogueItem.id} key = {dialogueItem.id}/>)
    
    let messagesItems = props.messages.map( 
        messageItem => 
        <Message theMessage = {messageItem.message} id = {messageItem.id} key = {messageItem.id}/>)

let sendMessage = ()=> {
    props.addMessage();
    // props.dispatch (addNewMessageCreator())
}

let changeMessageBody = (e)=> {

let body = e.target.value;
props.updateNewMessage(body);
//props.dispatch (updateNewMessageBodyCreator(body))
console.log(body)
}

    return(
    <div className={st.dialogues}>
        <div className={st.dialoguesItems}>      
        {dialoguesItems} 
        </div>
        <div className={st.messages}>
        <div className={st.messagesItems}>
            {messagesItems};
        </div>
        <div>
            <textarea 
            //placeholder='Enter a message'
              value = {props.newMessageBody}
              onChange = {changeMessageBody}
               />
            </div>
            <div>
               <button 
               onClick = {sendMessage}> 
               Send message
               </button>
            </div> 
        </div>
        
    </div>
    )
}

export default Dialogues;

 
 