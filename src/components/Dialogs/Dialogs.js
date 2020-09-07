import React from "react";
import classes from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs= (props) =>{
    console.log(props.state.messagesData)
    let dialogsElements = props.state.dialogsData
        .map(dialog =><DialogItem name={dialog.name} id={dialog.id}/>);
    let messageElements = props.state.messagesData
        .map(message =><Message message={message.message} />)
    return <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
            {dialogsElements}
        </div>
        <div className={classes.messages}>
            {messageElements}
        </div>
    </div>

}

export default Dialogs;