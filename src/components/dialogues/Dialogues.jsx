import React from 'react';
import st from './Dialogues.module.css';
import { NavLink } from 'react-router-dom';

const DialogueItem  = (props) => {
    let path = "/dialogues/" + props.id;
    return ( 
            <div className={st.dialogue +' ' + st.active}> 
            <NavLink to = {path}>{props.name}</NavLink>
               {/* <NavLink to = {"/dialogues/" + props.id}>{props.name}</NavLink> */}
            </div>
     )
}

const Message =(props)=> {
    return(
        <div className={st.message}>
<span>{props.theMessage}</span>
        </div>
    )
}

const Dialogues =(props) => {
    return(<div className={st.dialogues}>
        <div className={st.dialoguesItems}>
<DialogueItem name = 'Pavel' id = '1'/>
<DialogueItem name = 'Andrey' id = '2'/>
<DialogueItem name = 'Nicolay' id = '3'/>
<DialogueItem name = 'Alina' id = '4'/>
<DialogueItem name = 'Maria' id = '5'/>
<DialogueItem name = 'Victor' id = '6'/>
        </div>
        <div className={st.messages}>
             <Message theMessage ='Hi !'/>
             <Message theMessage ='How are you ?'/>
             <Message theMessage='I love It-kamasutra !'/>
        </div>
    </div>
    )
}

// const Dialogues =()=> {
//     return (<div className={st.dialogues}>
//         <div className = {st.dialoguesItems} >
//             <div className={st.dialogue +' ' + st.active}> 
//             <NavLink to = "/dialogues/1">Pavel</NavLink>
//             </div>
//             <div className={st.dialogue}>
//             <NavLink to = "/dialogues/2">Andrey</NavLink>
//             </div>
//             <div className={st.dialogue}>
//             <NavLink to = "/dialogues/3">Nicolay</NavLink>
//             </div>
//             <div className={st.dialogue}>
//             <NavLink to = "/dialogues/4">Alina</NavLink>
//             </div>
//             <div className={st.dialogue}>
//             <NavLink to = "/dialogues/5">Maria</NavLink>
//             </div>
//             <div className={st.dialogue}>
//             <NavLink to = "/dialogues/6">Victor</NavLink>
//             </div>
//         </div>

/* <div className= 'dialogue'>Hi !</div>
            <div className= 'dialogue'>How are you ?</div>
            <div className= 'dialogue'>I love It-kamasutra</div> */

export default Dialogues;

/*Для блока dialoguesItems (список имен людей,с кем 
    можно вести диалог) все теги с именами делаем
    в виде NavLink. Теперь, благодаря этому, у нас
    в строке браузера меняется url при нажатии 
    соответствующего имени.
*/

/* Однако, лучше было бы избежать повторения 
кода в многочисленных тегах NavLink,написанных
для каждого участника диалога в виде функции-компоненты.
Для выполнения этой цели:
создаем компоненту-функцию DialoguesItems, в которой 
прописываем html-структуру тега. И передаем в виде
props данные, которыми все элементы NavLink отличаются
друг от друга. То есть name -- имя участника, и 
id -- номер каждого участника в списке dialogues, 
как путь для роутера. Это прописывается в виде 
конкотинации строк:
NavLink to = {"/dialogues/" + props.id}
Также путь для роутера можно прописать в виде 
переменной:
перед return
let path = {"/dialogues/" + props.id}
внутри return
Navlink to = {path}
Затем, вместо прежнего кода, где прописана
html-структура для каждого тега, соответствующего
участнику диалога, просто прописываем соответствующее 
количество тегов, с отличающимися пропсами name
id в виде атрибутов. То есть получается так:
<DialogueItem name = '' id = ''/>

Аналогичную операцию провидим с блоком messages
Прописываем в компоненте Message функцию, отобращающую
все сообщениt в виде переменной message, после чего
значение этой переменной ( сообщение) возвращается
в теге в виде атрибута: 
< Message message =''/>
*/