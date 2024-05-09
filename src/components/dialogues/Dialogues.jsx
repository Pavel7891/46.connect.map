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

const DialoguesArray = [
    {id:1, name:'Pavel'},
    {id:2, name:'Andrey'},
    {id:3, name:'Nicolay'},
    {id:4, name:'Alina'},
    {id:5, name:'Maria'},
    {id:6, name:'Victor'}
]

const MessagesArray = [
    {id:1, message:'Hi'},
    {id:2, message:'How are you ?'},
    {id:3, message:'I love It-kamasutra'},
    {id:4, message:'That is a great course'},
]

let dialoguesItems = DialoguesArray.map( 
    dialogueItem => <DialogueItem name = {dialogueItem.name} id = {dialogueItem.id}/>)

let messagesItems = MessagesArray.map( 
    messageItem => <Message theMessage = {messageItem.message} id = {messageItem.id}/>)

const Dialogues =(props) => {
    return(<div className={st.dialogues}>
        <div className={st.dialoguesItems}>      
        {dialoguesItems} 

{/* <DialogueItem name = {DialoguesArray[0].name} id = {DialoguesArray[0].id}/>
<DialogueItem name = {DialoguesArray[1].name} id = {DialoguesArray[1].id}/>
<DialogueItem name = {DialoguesArray[2].name} id = {DialoguesArray[2].id}/>
<DialogueItem name = {DialoguesArray[3].name} id = {DialoguesArray[3].id}/>
<DialogueItem name = {DialoguesArray[4].name} id = {DialoguesArray[4].id}/>
<DialogueItem name = {DialoguesArray[5].name} id = {DialoguesArray[5].id}/> */}

        </div>
        <div className={st.messagesItems}>
            {messagesItems};

             {/* <Message theMessage = {MessagesArray[0].message} id = {MessagesArray[0].id}/>
             <Message theMessage ={MessagesArray[1].message} id = {MessagesArray[1].id} />
             <Message theMessage= {MessagesArray[2].message} id = {MessagesArray[2].id}/>
             <Message theMessage = {MessagesArray[3].message} id = {MessagesArray[3].id}/> */}

        </div>
    </div>
    )
}


// UI --user interface
/* Смысл UI в том, что фактически UI -- это компонента,
и есть BLL (business logic layer) -- данные. Компонента 
получает данные через пропсы. Данные для BLL мы получаем
с сервера, из интернета, и UI работает с ними. */     
// Применим это на практике

/*Сделаем список диалогов, включающий имена участников
и id, в виде массива DialoguesArray. Соответственно, 
каждый элемент массива будет представлять собой объект 
со свойствами name и id. Затем для каждой компоненты
DialogueItem пропишем значения тегов name и id как 
элементов данного массива. То есть в таком виде:
name = {DialoguesArray[0].name} id = {DialoguesArray[0].id}
Аналогично сделаем для сообщений массив MessagesArray.
По логике UI-BLL в данном случае массивы с рядом объектов-- 
это данные BLL, которые мы через пропсы передаем в UI,
представленный компонентами DialogueItem и Message.
*/

/// метод массивов map.
/* Позволяет получить новый массив на 
основе обработки в теле функции каждого
элемента прежнего массива.
*/
/* Используя метод map, внесем изменения в нашу разметку.
на основе прежнего массива DialoguesArray создадим 
новый массив, dialoguesItems, в котором c помощью метода
map каждый элемент,dialogueItem, создается через стрелочную
функцию на основе компоненты DialogueItem ( элемент прежнего
массива, объект со свойствами name и id ),с тегами name и id.
В итоге получаем такую запись:

let dialoguesItems = DialoguesArray.map( 
dialogueItem => <DialogueItem name = {dialogueItem.name} id = {dialogueItem.id}/>)

которая фактически заменяет собой список компонентов <DialogueItem name ='' id =''/>,
которых в нашем случае шесть, но может быть сколько угодно. Таким образом, этот
прием значительно сокращает запись кода и позволяет избегать дублирования кода.
Аналогичным способом создадим на основе массива messagesArray новый массив, 
messagesItems, в котором каждый элемент, messageItem, создается на основе компоненты
Message, с помощью метода map.

И затем, в теле стрелочной функции Dialogues, вместо списков компонент
<DialogueItem/> и <Message/>, вставляем названия новых массивов, с 
соответствующим синтаксисом ( фигурные скобки): {dialogueItems} и 
{messagesItems}
Точно так же, в каждый создаваемый элемент нового массива передаем 
с помощью пропсов передаем значения свойств: для dialogueItem это 
name и id, для messageItem, соответственно, message и id.
*/

// Аналогично сделаем в MyPosts с постами.
//( далее см. файл MyPosts)

export default Dialogues;

