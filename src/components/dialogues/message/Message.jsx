import React from 'react';
import st from '../Dialogues.module.css';



const Message =(props)=> {
    return(
        <div className={st.message} message = {props.messages}>
<span>{props.theMessage}</span>
        </div>
    )
}

  
export default Message;

