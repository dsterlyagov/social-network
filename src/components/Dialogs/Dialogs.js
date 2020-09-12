import React from "react";
import classes from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/dialogs-reducer";

const Dialogs= (props) =>{

    let state = props.store.getState().messagesPage;

    let dialogsElements = state.dialogs
        .map(dialog =><DialogItem name={dialog.name} id={dialog.id}/>);
    let messageElements = state.messages
        .map(message =><Message message={message.message} />);

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () =>{
        props.store.dispatch(addPostActionCreator());

    }
    let onNewMessageChange = (e) =>{
        let body = e.target.value;

        props.store.dispatch(updateNewPostTextActionCreator(body));
    }
    return <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
            {dialogsElements}
        </div>
        <div className={classes.messages}>
            <div>{messageElements}</div>
            <div>
                <div><textarea value={newMessageBody}
                               onChange={onNewMessageChange}
                               placeholder='Enter your message'></textarea></div>
                <div><button onClick={onSendMessageClick}>Send</button></div>
            </div>
        </div>
    </div>

}

export default Dialogs;