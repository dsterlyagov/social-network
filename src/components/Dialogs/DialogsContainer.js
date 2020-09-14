import React from "react";

import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer= (props) =>{  console.log('DialogsContainer')

    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () =>{
      props.store.dispatch(sendMessageCreator())

        // props.sendMessage();

    }
    let onNewMessageChange = (body) =>{
              props.store.dispatch(updateNewMessageBodyCreator(body));
    }
    return (
        <Dialogs updateNewMessageBody={onNewMessageChange}
                 sendMessage={onSendMessageClick}
                dialogsPage={state}
        />
    )
}

export default DialogsContainer;