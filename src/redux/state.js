import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        messagesData : [
            {id:1, message: 'Hi'},
            {id:2, message: 'How are you?'},
            {id:3, message: 'Yo'},
            {id:4, message: 'Hi'},

        ],
        dialogsData : [
            {id: 1, name: 'Demetrius'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'},
        ],
    },
    messagesPage: { postsData: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It is, my first post?', likesCount: 23},
        ],

    }


};

export let addPost = (postMessage)=>{
    let newPost = {
        id: state.messagesPage.postsData.length,
        message: postMessage,
        likesCount: 0,
    }
    state.messagesPage.postsData.push(newPost)
    rerenderEntireTree(state);
}

export default state;