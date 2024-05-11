import React from 'react';
import st from  '../Dialogues.module.css';
 
import { NavLink } from 'react-router-dom';

const DialogueItem  = (props) => {
    let path = "/dialogues/" + props.id;
    return ( 
            <div className={st.dialogue +' ' + st.active}> 
            <NavLink to = {path} dialogues = {props.dialogues}>
               {props.name}
            </NavLink>
               {/* <NavLink to = {"/dialogues/" + props.id}>{props.name}</NavLink> */}
            </div>
     )
}

 export default DialogueItem;

 /* По уроку 29.
 Вместо props.dialogues теперь надо 
 писать props.appState dialogues  
 */ 