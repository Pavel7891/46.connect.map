let SEND_MESSAGE = 'SEND-MESSAGE';

let UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE_BODY'


const dialoguesReducer = (state, action)=> {

    if // action.type === 'SEND-MESSAGE'
    (action.type === SEND_MESSAGE) 
    { 
   let newMessage = state.newMessageBody
   
    state.messagesArray.push( {message: newMessage});
    state.newMessageBody = '';

    }

else if // action.type === 'UPDEATE-NEW-MESSAGE-BODY'
   (action.type === UPDATE_NEW_MESSAGE_BODY) 
   {
    state.newMessageBody = action.newBody;
   }

    return state
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