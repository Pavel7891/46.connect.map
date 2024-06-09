import React from 'react';
import st from './Dialogues.module.css';
import DialogueItem from './dialogueItem/DialogueItem';
import Message from './message/Message';
import { addNewMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogues-reducer';

// const DialoguesArray = [
//     {id:1, name:'Pavel'},
//     {id:2, name:'Andrey'},
//     {id:3, name:'Nicolay'},
//     {id:4, name:'Alina'},
//     {id:5, name:'Maria'},
//     {id:6, name:'Victor'}
// ]

// const MessagesArray = [
//     {id:1, message:'Hi'},
//     {id:2, message:'How are you ?'},
//     {id:3, message:'I love It-kamasutra'},
//     {id:4, message:'That is a great course'},
// ]



const Dialogues =(props) => {

    let dialoguesItems = props.dialogues.map( 
        dialogueItem => 
        <DialogueItem name = {dialogueItem.name} id = {dialogueItem.id} key = {dialogueItem.id}/>)
    
    let messagesItems = props.messages.map( 
        messageItem => 
        <Message theMessage = {messageItem.message} id = {messageItem.id} key = {messageItem.id}/>)

let onSendMessage = ()=> {
    
    props.dispatch (addNewMessageCreator())
}

let onChangeMessageBody = (e)=> {

let body = e.target.value;
props.dispatch (updateNewMessageBodyCreator(body))
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
              onChange = {onChangeMessageBody}
               />
            </div>
            <div>
               <button 
               onClick = {onSendMessage}> 
               Send message
               </button>
            </div> 
        </div>
        
    </div>
    )
}

export default Dialogues;

 
 