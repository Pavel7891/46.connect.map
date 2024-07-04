let SEND_MESSAGE = 'SEND-MESSAGE';

let UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE_BODY'


const dialoguesReducer = (dialoguesPage, action)=> {

    if // action.type === 'SEND-MESSAGE'
    (action.type === SEND_MESSAGE) 
    { 
   let newMessage = dialoguesPage.newMessageBody
   
    dialoguesPage.messagesArray.push( {message: newMessage});
    dialoguesPage.newMessageBody = '';

    }

else if // action.type === 'UPDEATE-NEW-MESSAGE-BODY'
   (action.type === UPDATE_NEW_MESSAGE_BODY) 
   {
    dialoguesPage.newMessageBody = action.newBody;
   }

    return dialoguesPage;
}

export default dialoguesReducer;


export const addNewMessageCreator  = ()=> {
    return(
        {type: SEND_MESSAGE}
    )
}

  export const updateNewMessageBodyCreator = (body)=> {
    return(
        {type: UPDATE_NEW_MESSAGE_BODY, newBody: body}
    )
  }